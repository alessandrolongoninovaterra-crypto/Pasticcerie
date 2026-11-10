(()=>{var Fc="170";var Ld=0,Dh=1,Dd=2;var $u=1,Oc=2,kn=3,ri=0,Ge=1,re=2,In=0,as=1,oi=2,Nh=3,Uh=4,Nd=5,wi=100,Ud=101,zd=102,Fd=103,Od=104,Bd=200,kd=201,Hd=202,Gd=203,xl=204,yl=205,Vd=206,Wd=207,Xd=208,qd=209,Yd=210,Zd=211,$d=212,Jd=213,Kd=214,vl=0,_l=1,Ml=2,us=3,bl=4,wl=5,Sl=6,El=7,Xo=0,jd=1,Qd=2,si=0,Bc=1,kc=2,Hc=3,dr=4,tp=5,Gc=6,Vc=7;var Ju=300,fs=301,ds=302,Tl=303,Al=304,qo=306,ai=1e3,vn=1001,Rl=1002,rn=1003,ep=1004;var Dr=1005;var Rn=1006,Ba=1007;var Ei=1008;var Xn=1009,Ku=1010,ju=1011,Qs=1012,Wc=1013,Ti=1014,Cn=1015,bn=1016,Xc=1017,qc=1018,ps=1020,Qu=35902,tf=1021,ef=1022,_n=1023,nf=1024,sf=1025,ls=1026,ms=1027,Yc=1028,Zc=1029,rf=1030,$c=1031;var Jc=1033,uo=33776,fo=33777,po=33778,mo=33779,Cl=35840,Il=35841,Pl=35842,Ll=35843,Dl=36196,Nl=37492,Ul=37496,zl=37808,Fl=37809,Ol=37810,Bl=37811,kl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,$l=37821,go=36492,Jl=36494,Kl=36495,of=36283,jl=36284,Ql=36285,tc=36286;var xo=2300,ec=2301,ka=2302,zh=2400,Fh=2401,Oh=2402;var np=3200,pr=3201;var Yo=0,ip=1,ni="",Me="srgb",Ss="srgb-linear",Zo="linear",de="srgb";var ki=7680;var Bh=519,sp=512,rp=513,op=514,af=515,ap=516,lp=517,cp=518,hp=519,nc=35044,lf=35048;var kh="300 es",Gn=2e3,yo=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=1234567,Js=Math.PI/180,gs=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function up(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function dp(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function pp(i,t=1){return t-Math.abs(Kc(i,t*2)-t)}function mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yp(i,t){return i+Math.random()*(t-i)}function vp(i){return i*(.5-Math.random())}function _p(i){i!==void 0&&(Hh=i);let t=Hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mp(i){return i*Js}function bp(i){return i*gs}function wp(i){return(i&i-1)===0&&i!==0}function Sp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var cf={DEG2RAD:Js,RAD2DEG:gs,generateUUID:Vn,clamp:ze,euclideanModulo:Kc,mapLinear:up,inverseLerp:fp,lerp:Ks,damp:dp,pingpong:pp,smoothstep:mp,smootherstep:gp,randInt:xp,randFloat:yp,randFloatSpread:vp,seededRandom:_p,degToRad:Mp,radToDeg:bp,isPowerOfTwo:wp,ceilPowerOfTwo:Sp,floorPowerOfTwo:Ep,setQuaternionFromProperEuler:Tp,normalize:me,denormalize:yn},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],y=s[0],p=s[3],m=s[6],_=s[1],x=s[4],v=s[7],b=s[2],S=s[5],E=s[8];return r[0]=o*y+a*_+l*b,r[3]=o*p+a*x+l*S,r[6]=o*m+a*v+l*E,r[1]=c*y+u*_+h*b,r[4]=c*p+u*x+h*S,r[7]=c*m+u*v+h*E,r[2]=f*y+d*_+g*b,r[5]=f*p+d*x+g*S,r[8]=f*m+d*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new ee;function hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){let i=vo("canvas");return i.style.display="block",i}var Gh={};function Zs(i){i in Gh||(Gh[i]=!0,console.warn(i))}function Rp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ip(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vh=[.64,.33,.3,.6,.15,.06],Wh=[.2126,.7152,.0722],Xh=[.3127,.329],qh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Ss]:{primaries:Vh,whitePoint:Xh,transfer:Zo,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Vh,whitePoint:Xh,transfer:de,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var Hi,ic=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=vo("canvas")),Hi.width=t.width,Hi.height=t.height;let n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pp=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,Qe=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vn,s=vn,r=Rn,o=Ei,a=_n,l=Xn,c=i.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Vn(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ju;Qe.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(d+1)/2,b=(m+1)/2,S=(u+f)/4,E=(h+y)/4,T=(g+p)/4;return x>v&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=E/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=T/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=E/r,s=T/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mo=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rc=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ae=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(h!==y||l!==f||c!==d||u!==g){let p=1-a,m=l*f+c*d+u*g+h*y,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let b=Math.sqrt(x),S=Math.atan2(b,m*_);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b}let v=a*_;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+y*v,p===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new k,Zh=new Ae,qn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),Ur.subVectors(this.max,Fs),Gi.subVectors(t.a,Fs),Vi.subVectors(t.b,Fs),Wi.subVectors(t.c,Fs),Jn.subVectors(Vi,Gi),Kn.subVectors(Wi,Vi),gi.subVectors(Gi,Wi);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!Wa(e,Gi,Vi,Wi,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Gi,Vi,Wi,Ur))?!1:(zr.crossVectors(Jn,Kn),e=[zr.x,zr.y,zr.z],Wa(e,Gi,Vi,Wi,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new k,new k,new k,new k,new k,new k,new k,new k],mn=new k,Nr=new qn,Gi=new k,Vi=new k,Wi=new k,Jn=new k,Kn=new k,gi=new k,Fs=new k,Ur=new k,zr=new k,xi=new k;function Wa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Dp=new qn,Os=new k,Xa=new k,Yn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(Xa)),this.expandByPoint(Os.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new k,qa=new k,Fr=new k,jn=new k,Ya=new k,Or=new k,Za=new k,tr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fr),a=jn.dot(this.direction),l=-jn.dot(Fr),c=jn.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qa).addScaledVector(Fr,f),d}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Ya.subVectors(e,t),Or.subVectors(n,t),Za.crossVectors(Ya,Or);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);let l=a*this.direction.dot(Or.crossVectors(jn,Or));if(l<0)return null;let c=a*this.direction.dot(Ya.cross(jn));if(c<0||l+c>o)return null;let u=-a*jn.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,g,y,p)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,y=c*h;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,y=c*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Up)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Qn.crossVectors(n,nn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Qn.crossVectors(n,nn)),Qn.normalize(),Br.crossVectors(nn,Qn),s[0]=Qn.x,s[4]=Br.x,s[8]=nn.x,s[1]=Qn.y,s[5]=Br.y,s[9]=nn.y,s[2]=Qn.z,s[6]=Br.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],_=n[3],x=n[7],v=n[11],b=n[15],S=s[0],E=s[4],T=s[8],M=s[12],w=s[1],R=s[5],P=s[9],U=s[13],L=s[2],B=s[6],N=s[10],G=s[14],O=s[3],q=s[7],$=s[11],W=s[15];return r[0]=o*S+a*w+l*L+c*O,r[4]=o*E+a*R+l*B+c*q,r[8]=o*T+a*P+l*N+c*$,r[12]=o*M+a*U+l*G+c*W,r[1]=u*S+h*w+f*L+d*O,r[5]=u*E+h*R+f*B+d*q,r[9]=u*T+h*P+f*N+d*$,r[13]=u*M+h*U+f*G+d*W,r[2]=g*S+y*w+p*L+m*O,r[6]=g*E+y*R+p*B+m*q,r[10]=g*T+y*P+p*N+m*$,r[14]=g*M+y*U+p*G+m*W,r[3]=_*S+x*w+v*L+b*O,r[7]=_*E+x*R+v*B+b*q,r[11]=_*T+x*P+v*N+b*$,r[15]=_*M+x*U+v*G+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+y*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],_=h*p*c-y*f*c+y*l*d-a*p*d-h*l*m+a*f*m,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,v=u*y*c-g*h*c+g*a*d-o*y*d-u*a*m+o*h*m,b=g*h*l-u*y*l-g*a*f+o*y*f+u*a*p-o*h*p,S=e*_+n*x+s*v+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=_*E,t[1]=(y*f*r-h*p*r-y*s*d+n*p*d+h*s*m-n*f*m)*E,t[2]=(a*p*r-y*l*r+y*s*c-n*p*c-a*s*m+n*l*m)*E,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*E,t[4]=x*E,t[5]=(u*p*r-g*f*r+g*s*d-e*p*d-u*s*m+e*f*m)*E,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*E,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=v*E,t[9]=(g*h*r-u*y*r-g*n*d+e*y*d+u*n*m-e*h*m)*E,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*m+e*a*m)*E,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=b*E,t[13]=(u*y*s-g*h*s+g*n*f-e*y*f-u*n*p+e*h*p)*E,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*p-e*a*p)*E,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,y=o*u,p=o*h,m=a*h,_=l*c,x=l*u,v=l*h,b=n.x,S=n.y,E=n.z;return s[0]=(1-(y+m))*b,s[1]=(d+v)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+m))*S,s[6]=(p+_)*S,s[7]=0,s[8]=(g+x)*E,s[9]=(p-_)*E,s[10]=(1-(f+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);let c=1/r,u=1/o,h=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Gn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Gn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Gn){let l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*c,d=(n+s)*u,g,y;if(a===Gn)g=(o+r)*h,y=-2*h;else if(a===yo)g=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new k,gn=new $t,Np=new k(0,0,0),Up=new k(1,1,1),Qn=new k,Br=new k,nn=new k,$h=new $t,Jh=new Ae,Ze=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $h.makeRotationFromQuaternion(t),this.setFromRotationMatrix($h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,Kh=new k,qi=new Ae,Fn=new $t,kr=new k,Bs=new k,Fp=new k,Op=new Ae,jh=new k(1,0,0),Qh=new k(0,1,0),tu=new k(0,0,1),eu={type:"added"},Bp={type:"removed"},Yi={type:"childadded",child:null},$a={type:"childremoved",child:null},Ie=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Ze,n=new Ae,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new ee}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Bs,kr,this.up):Fn.lookAt(kr,Bs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Fn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eu),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eu),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new k(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new k,On=new k,Ja=new k,Bn=new k,Zi=new k,$i=new k,nu=new k,Ka=new k,ja=new k,Qa=new k,tl=new xe,el=new xe,nl=new xe,ii=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),On.subVectors(n,e),Ja.subVectors(t,e);let o=xn.dot(xn),a=xn.dot(On),l=xn.dot(Ja),c=On.dot(On),u=On.dot(Ja),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(el,r.y),o.addScaledVector(nl,r.z),o}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),$i.subVectors(r,n),Ka.subVectors(t,n);let l=Zi.dot(Ka),c=$i.dot(Ka);if(l<=0&&c<=0)return e.copy(n);ja.subVectors(t,s);let u=Zi.dot(ja),h=$i.dot(ja);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Zi,o);Qa.subVectors(t,r);let d=Zi.dot(Qa),g=$i.dot(Qa);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector($i,a);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return nu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(nu,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(Zi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Kc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=il(o,r,t+1/3),this.g=il(o,r,t),this.b=il(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return le.fromWorkingColorSpace(He.copy(this),t),Math.round(ze(He.r*255,0,255))*65536+Math.round(ze(He.g*255,0,255))*256+Math.round(ze(He.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Me){le.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Hr);let n=Ks(ti.h,Hr.h,e),s=Ks(ti.s,Hr.s,e),r=Ks(ti.l,Hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Rt;Rt.NAMES=uf;var kp=0,hn=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Vn(),this.name="",this.blending=as,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Oe=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new k,Gr=new It,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}};var xs=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ys=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hp=0,cn=new $t,sl=new Ie,Ji=new k,sn=new qn,ks=new qn,Ne=new k,se=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?ys:xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(sn.min,ks.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,ks.max),sn.expandByPoint(Ne)):(sn.expandByPoint(ks.min),sn.expandByPoint(ks.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ne.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),Ne.add(Ji)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new k,l[T]=new k;let c=new k,u=new k,h=new k,f=new It,d=new It,g=new It,y=new k,p=new k;function m(T,M,w){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,w),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[T].add(y),a[M].add(y),a[w].add(y),l[T].add(p),l[M].add(p),l[w].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,M=_.length;T<M;++T){let w=_[T],R=w.start,P=w.count;for(let U=R,L=R+P;U<L;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let x=new k,v=new k,b=new k,S=new k;function E(T){b.fromBufferAttribute(s,T),S.copy(b);let M=a[T];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),v.crossVectors(S,M);let R=v.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,R)}for(let T=0,M=_.length;T<M;++T){let w=_[T],R=w.start,P=w.count;for(let U=R,L=R+P;U<L;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new ge(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=new $t,yi=new tr,Vr=new Yn,su=new k,Wr=new k,Xr=new k,qr=new k,rl=new k,Yr=new k,ru=new k,Zr=new k,St=class extends Ie{constructor(t=new se,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(rl.fromBufferAttribute(h,t),o?Yr.addScaledVector(rl,u):Yr.addScaledVector(rl.sub(e),u))}e.add(Yr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Vr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Vr,su)===null||yi.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),yi.copy(t.ray).applyMatrix4(iu),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,b=x;v<b;v+=3){let S=a.getX(v),E=a.getX(v+1),T=a.getX(v+2);s=$r(this,m,t,n,c,u,h,S,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let _=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);s=$r(this,o,t,n,c,u,h,_,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,b=x;v<b;v+=3){let S=v,E=v+1,T=v+2;s=$r(this,m,t,n,c,u,h,S,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let _=p,x=p+1,v=p+2;s=$r(this,o,t,n,c,u,h,_,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Gp(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ri,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zr);return c<e.near||c>e.far?null:{distance:c,point:Zr.clone(),object:i}}function $r(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Wr),i.getVertexPosition(l,Xr),i.getVertexPosition(c,qr);let u=Gp(i,t,e,n,Wr,Xr,qr,ru);if(u){let h=new k;ii.getBarycoord(ru,Wr,Xr,qr,h),s&&(u.uv=ii.getInterpolatedAttribute(s,a,l,c,h,new It)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,l,c,h,new It)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};ii.getNormal(Wr,Xr,qr,f.normal),u.face=f,u.barycoord=h}return u}var zt=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function g(y,p,m,_,x,v,b,S,E,T,M){let w=v/E,R=b/T,P=v/2,U=b/2,L=S/2,B=E+1,N=T+1,G=0,O=0,q=new k;for(let $=0;$<N;$++){let W=$*R-U;for(let tt=0;tt<B;tt++){let Z=tt*w-P;q[y]=Z*_,q[p]=W*x,q[m]=L,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[m]=S>0?1:-1,u.push(q.x,q.y,q.z),h.push(tt/E),h.push(1-$/T),G+=1}}for(let $=0;$<T;$++)for(let W=0;W<E;W++){let tt=f+W+B*$,Z=f+W+B*($+1),z=f+(W+1)+B*($+1),H=f+(W+1)+B*$;l.push(tt,Z,H),l.push(Z,z,H),O+=6}a.addGroup(d,O,M),d+=O,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function Vp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ff(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var hi={clone:vs,merge:qe},Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wo=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new k,ou=new It,au=new It,Fe=class extends wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,ou,au),e.subVectors(au,ou)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,ji=1,oc=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Ki,ji,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Ki,ji,t,e);r.layers=this.layers,this.add(r);let o=new Fe(Ki,ji,t,e);o.layers=this.layers,this.add(o);let a=new Fe(Ki,ji,t,e);a.layers=this.layers,this.add(a);let l=new Fe(Ki,ji,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Ki,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},So=class extends Qe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ac=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:In});r.uniforms.tEquirect.value=e;let o=new St(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Rn),new oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ol=new k,qp=new k,Yp=new ee,Hn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ol.subVectors(n,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yp.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Yn,Jr=new k,er=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],y=s[10],p=s[11],m=s[12],_=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,p-d,v-m).normalize(),n[1].setComponents(l+r,f+c,p+d,v+m).normalize(),n[2].setComponents(l+o,f+u,p+g,v+_).normalize(),n[3].setComponents(l-o,f-u,p-g,v-_).normalize(),n[4].setComponents(l-a,f-h,p-y,v-x).normalize(),e===Gn)n[5].setComponents(l+a,f+h,p+y,v+x).normalize();else if(e===yo)n[5].setComponents(a,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function df(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zp(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let y=h[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var un=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let _=m*f-o;for(let x=0;x<c;x++){let v=x*h-r;g.push(v,-_,0),y.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let x=_+c*m,v=_+c*(m+1),b=_+1+c*(m+1),S=_+1+c*m;d.push(x,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,Ym=`struct PhysicalMaterial {
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
}`,Zm=`
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,Mg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:$p,alphahash_pars_fragment:Jp,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Qp,alphatest_pars_fragment:tm,aomap_fragment:em,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:fm,clipping_planes_vertex:dm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:xm,common:ym,cube_uv_reflection_fragment:vm,defaultnormal_vertex:_m,displacementmap_pars_vertex:Mm,displacementmap_vertex:bm,emissivemap_fragment:wm,emissivemap_pars_fragment:Sm,colorspace_fragment:Em,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Hm,envmap_vertex:Pm,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:km,lights_toon_fragment:Gm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:t0,map_fragment:e0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:o0,morphinstance_vertex:a0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:f0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:M0,opaque_fragment:b0,packing:w0,premultiplied_alpha_fragment:S0,project_vertex:E0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:P0,shadowmap_vertex:L0,shadowmask_pars_fragment:D0,skinbase_vertex:N0,skinning_pars_vertex:U0,skinning_vertex:z0,skinnormal_vertex:F0,specularmap_fragment:O0,specularmap_pars_fragment:B0,tonemapping_fragment:k0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:Z0,background_frag:$0,backgroundCube_vert:J0,backgroundCube_frag:K0,cube_vert:j0,cube_frag:Q0,depth_vert:tg,depth_frag:eg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:og,linedashed_frag:ag,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:fg,meshmatcap_frag:dg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:vg,meshtoon_vert:_g,meshtoon_frag:Mg,points_vert:bg,points_frag:wg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:Ag},Ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},An={basic:{uniforms:qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:qe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:qe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:qe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:qe([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:qe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:qe([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:qe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:qe([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:qe([Ct.common,Ct.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:qe([Ct.lights,Ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};An.physical={uniforms:qe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Kr={r:0,b:0,g:0},_i=new Ze,Rg=new $t;function Cg(i,t,e,n,s,r,o){let a=new Rt(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function y(_){let x=!1,v=g(_);v===null?m(a,l):v&&v.isColor&&(m(v,1),x=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,x){let v=g(x);v&&(v.isCubeTexture||v.mapping===qo)?(u===void 0&&(u=new St(new zt(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:vs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(_i)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==de,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new un(2,2),new Re({name:"BackgroundMaterial",uniforms:vs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,x){_.getRGB(Kr,ff(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:y,addToRenderList:p}}function Ig(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(w,R,P,U,L){let B=!1,N=h(U,P,R);r!==N&&(r=N,c(r.object)),B=d(w,U,P,L),B&&g(w,U,P,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(w,R,P,U),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,R,P){let U=P.wireframe===!0,L=n[w.id];L===void 0&&(L={},n[w.id]=L);let B=L[R.id];B===void 0&&(B={},L[R.id]=B);let N=B[U];return N===void 0&&(N=f(l()),B[U]=N),N}function f(w){let R=[],P=[],U=[];for(let L=0;L<e;L++)R[L]=0,P[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:U,object:w,attributes:{},index:null}}function d(w,R,P,U){let L=r.attributes,B=R.attributes,N=0,G=P.getAttributes();for(let O in G)if(G[O].location>=0){let $=L[O],W=B[O];if(W===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(W=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(W=w.instanceColor)),$===void 0||$.attribute!==W||W&&$.data!==W.data)return!0;N++}return r.attributesNum!==N||r.index!==U}function g(w,R,P,U){let L={},B=R.attributes,N=0,G=P.getAttributes();for(let O in G)if(G[O].location>=0){let $=B[O];$===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&($=w.instanceColor));let W={};W.attribute=$,$&&$.data&&(W.data=$.data),L[O]=W,N++}r.attributes=L,r.attributesNum=N,r.index=U}function y(){let w=r.newAttributes;for(let R=0,P=w.length;R<P;R++)w[R]=0}function p(w){m(w,0)}function m(w,R){let P=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;P[w]=1,U[w]===0&&(i.enableVertexAttribArray(w),U[w]=1),L[w]!==R&&(i.vertexAttribDivisor(w,R),L[w]=R)}function _(){let w=r.newAttributes,R=r.enabledAttributes;for(let P=0,U=R.length;P<U;P++)R[P]!==w[P]&&(i.disableVertexAttribArray(P),R[P]=0)}function x(w,R,P,U,L,B,N){N===!0?i.vertexAttribIPointer(w,R,P,L,B):i.vertexAttribPointer(w,R,P,U,L,B)}function v(w,R,P,U){y();let L=U.attributes,B=P.getAttributes(),N=R.defaultAttributeValues;for(let G in B){let O=B[G];if(O.location>=0){let q=L[G];if(q===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(q=w.instanceColor)),q!==void 0){let $=q.normalized,W=q.itemSize,tt=t.get(q);if(tt===void 0)continue;let Z=tt.buffer,z=tt.type,H=tt.bytesPerElement,J=z===i.INT||z===i.UNSIGNED_INT||q.gpuType===Wc;if(q.isInterleavedBufferAttribute){let Q=q.data,X=Q.stride,it=q.offset;if(Q.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)m(O.location+ut,Q.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ut=0;ut<O.locationSize;ut++)x(O.location+ut,W/O.locationSize,z,$,X*H,(it+W/O.locationSize*ut)*H,J)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<O.locationSize;Q++)m(O.location+Q,q.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<O.locationSize;Q++)p(O.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Q=0;Q<O.locationSize;Q++)x(O.location+Q,W/O.locationSize,z,$,W*H,W/O.locationSize*Q*H,J)}}else if(N!==void 0){let $=N[G];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(O.location,$);break;case 3:i.vertexAttrib3fv(O.location,$);break;case 4:i.vertexAttrib4fv(O.location,$);break;default:i.vertexAttrib1fv(O.location,$)}}}}_()}function b(){T();for(let w in n){let R=n[w];for(let P in R){let U=R[P];for(let L in U)u(U[L].object),delete U[L];delete R[P]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let R=n[w.id];for(let P in R){let U=R[P];for(let L in U)u(U[L].object),delete U[L];delete R[P]}delete n[w.id]}function E(w){for(let R in n){let P=n[R];if(P[w.id]===void 0)continue;let U=P[w.id];for(let L in U)u(U[L].object),delete U[L];delete P[w.id]}}function T(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function Pg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==_n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Xn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Cn&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:S}}function Dg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Hn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let _=r?0:n,x=_*4,v=m.clippingState||null;l.value=v,v=u(g,f,x,d);for(let b=0;b!==x;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=d;x!==y;++x,v+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Ng(i){let t=new WeakMap;function e(o,a){return a===Tl?o.mapping=fs:a===Al&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Tl||a===Al)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ac(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var _s=class extends wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,lu=[.125,.215,.35,.446,.526,.582],Si=20,al=new _s,cu=new Rt,ll=null,cl=0,hl=0,ul=!1,bi=(1+Math.sqrt(5))/2,Qi=1/bi,hu=[new k(-bi,Qi,0),new k(bi,Qi,0),new k(-Qi,0,bi),new k(Qi,0,bi),new k(0,bi,-Qi),new k(0,bi,Qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Eo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:bn,format:_n,colorSpace:Ss,depthBuffer:!1},s=uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=zg(r,t,e)}return s}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,al)}_sceneToCubeUV(t,e,n,s){let a=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cu),u.toneMapping=si,u.autoClear=!1;let d=new Oe({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new St(new zt,d),y=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,y=!0):(d.color.copy(cu),y=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;jr(s,_*x,m>2?x:0,x,x),u.setRenderTarget(s),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,al)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(s-r-1)%hu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new St(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),y=r/g,p=isFinite(r)?1+Math.floor(u*y):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);let m=[],_=0;for(let E=0;E<Si;++E){let T=E/y,M=Math.exp(-T*T/2);m.push(M),E===0?_+=M:E<p&&(_+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[s],b=3*v*(s>x-rs?s-x+rs:0),S=4*(this._cubeSize-v);jr(e,b,S,3*v,2*v),l.setRenderTarget(e),l.render(h,al)}};function Ug(i){let t=[],e=[],n=[],s=i,r=i-rs+1+lu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=lu[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,y=3,p=2,m=1,_=new Float32Array(y*g*d),x=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let S=0;S<d;S++){let E=S%3*2/3-1,T=S>2?0:-1,M=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(M,y*g*S),x.set(f,p*g*S);let w=[S,S,S,S,S,S];v.set(w,m*g*S)}let b=new se;b.setAttribute("position",new ge(_,y)),b.setAttribute("uv",new ge(x,p)),b.setAttribute("faceIndex",new ge(v,m)),t.push(b),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uu(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zg(i,t,e){let n=new Float32Array(Si),s=new k(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function fu(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function du(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function Fg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Tl||l===Al,u=l===fs||l===ds;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Eo(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Eo(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Og(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let y=d[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],i.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let x=0,v=_.length;x<v;x+=3){let b=_[x+0],S=_[x+1],E=_[x+2];f.push(b,S,S,E,E,b)}}else if(g!==void 0){let _=g.array;y=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let b=x+0,S=x+1,E=x+2;f.push(b,S,S,E,E,b)}}else return;let p=new(hf(f)?ys:xs)(f,1);p.version=y;let m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function kg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(f,d,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,g);let m=0;for(let _=0;_<g;_++)m+=d[_]*y[_];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*h),E=new Mo(S,v,b,h);E.type=Cn,E.needsUpdate=!0;let T=x*4;for(let w=0;w<h;w++){let R=p[w],P=m[w],U=_[w],L=v*b*4*w;for(let B=0;B<R.count;B++){let N=B*T;d===!0&&(s.fromBufferAttribute(R,B),S[L+N+0]=s.x,S[L+N+1]=s.y,S[L+N+2]=s.z,S[L+N+3]=0),g===!0&&(s.fromBufferAttribute(P,B),S[L+N+4]=s.x,S[L+N+5]=s.y,S[L+N+6]=s.z,S[L+N+7]=0),y===!0&&(s.fromBufferAttribute(U,B),S[L+N+8]=s.x,S[L+N+9]=s.y,S[L+N+10]=s.z,S[L+N+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new It(v,b)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var To=class extends Qe{constructor(t,e,n,s,r,o,a,l,c,u=ls){if(u!==ls&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ls&&(n=Ti),n===void 0&&u===ms&&(n=ps),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pf=new Qe,pu=new To(1,1),mf=new Mo,gf=new rc,xf=new So,mu=[],gu=[],xu=new Float32Array(16),yu=new Float32Array(9),vu=new Float32Array(4);function Es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $o(i,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),Le(e,n)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;yu.set(n),i.uniformMatrix3fv(this.addr,!1,yu),Le(e,n)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;xu.set(n),i.uniformMatrix4fv(this.addr,!1,xu),Le(e,n)}}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pu.compareFunction=af,r=pu):r=pf,e.setTexture2D(t||r,s)}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gf,s)}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xf,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mf,s)}function cx(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return $g;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(i,t){i.uniform1fv(this.addr,t)}function ux(i,t){let e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function fx(i,t){let e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function dx(i,t){let e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function px(i,t){let e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mx(i,t){let e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gx(i,t){let e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xx(i,t){i.uniform1iv(this.addr,t)}function yx(i,t){i.uniform2iv(this.addr,t)}function vx(i,t){i.uniform3iv(this.addr,t)}function _x(i,t){i.uniform4iv(this.addr,t)}function Mx(i,t){i.uniform1uiv(this.addr,t)}function bx(i,t){i.uniform2uiv(this.addr,t)}function wx(i,t){i.uniform3uiv(this.addr,t)}function Sx(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pf,r[o])}function Tx(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gf,r[o])}function Ax(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function Rx(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mf,r[o])}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return _x;case 5125:return Mx;case 36294:return bx;case 36295:return wx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}var lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cx(e.type)}},cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}},hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function Ix(i,t,e){let n=i.name,s=n.length;for(fl.lastIndex=0;;){let r=fl.exec(n),o=fl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_u(e,c===void 0?new lc(a,i,t):new cc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new hc(a),_u(e,h)),e=h}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ix(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Mu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Px=37297,Lx=0;function Dx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bu=new ee;function Nx(i){le._getMatrix(bu,le.workingColorSpace,i);let t=`mat3( ${bu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dx(i.getShaderSource(t),o)}else return s}function Ux(i,t){let e=Nx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zx(i,t){let e;switch(t){case Bc:e="Linear";break;case kc:e="Reinhard";break;case Hc:e="Cineon";break;case dr:e="ACESFilmic";break;case Gc:e="AgX";break;case Vc:e="Neutral";break;case tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new k;function Fx(){le.getLuminanceCoefficients(Qr);let i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Bx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $s(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(i){return i.replace(Hx,Vx)}var Gx=new Map;function Vx(i,t){let e=ne[t];if(e===void 0){let n=Gx.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(Wx,Xx)}function Xx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ds:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function $x(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xo:t="ENVMAP_BLENDING_MULTIPLY";break;case jd:t="ENVMAP_BLENDING_MIX";break;case Qd:t="ENVMAP_BLENDING_ADD";break}return t}function Jx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qx(e),c=Yx(e),u=Zx(e),h=$x(e),f=Jx(e),d=Ox(e),g=Bx(r),y=s.createProgram(),p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`)):(p=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),m=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?ne.tonemapping_pars_fragment:"",e.toneMapping!==si?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Ux("linearToOutputTexel",e.outputColorSpace),Fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=uc(o),o=Su(o,e),o=Eu(o,e),a=uc(a),a=Su(a,e),a=Eu(a,e),o=Tu(o),a=Tu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=_+p+o,v=_+m+a,b=Mu(s,s.VERTEX_SHADER,x),S=Mu(s,s.FRAGMENT_SHADER,v);s.attachShader(y,b),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(y).trim(),U=s.getShaderInfoLog(b).trim(),L=s.getShaderInfoLog(S).trim(),B=!0,N=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let G=wu(s,b,"vertex"),O=wu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+G+`
`+O)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||L==="")&&(N=!1);N&&(R.diagnostics={runnable:B,programLog:P,vertexShader:{log:U,prefix:p},fragmentShader:{log:L,prefix:m}})}s.deleteShader(b),s.deleteShader(S),T=new hs(s,y),M=kx(s,y)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,Px)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var jx=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dc(t),e.set(t,n)),n}},dc=class{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}};function Qx(i,t,e,n,s,r,o){let a=new bo,l=new fc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,w,R,P,U){let L=P.fog,B=U.geometry,N=M.isMeshStandardMaterial?P.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),O=G&&G.mapping===qo?G.image.height:null,q=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,W=$!==void 0?$.length:0,tt=0;B.morphAttributes.position!==void 0&&(tt=1),B.morphAttributes.normal!==void 0&&(tt=2),B.morphAttributes.color!==void 0&&(tt=3);let Z,z,H,J;if(q){let pe=An[q];Z=pe.vertexShader,z=pe.fragmentShader}else Z=M.vertexShader,z=M.fragmentShader,l.update(M),H=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);let Q=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),it=U.isInstancedMesh===!0,ut=U.isBatchedMesh===!0,ot=!!M.map,nt=!!M.matcap,xt=!!G,F=!!M.aoMap,vt=!!M.lightMap,yt=!!M.bumpMap,bt=!!M.normalMap,ht=!!M.displacementMap,Ut=!!M.emissiveMap,lt=!!M.metalnessMap,I=!!M.roughnessMap,A=M.anisotropy>0,V=M.clearcoat>0,rt=M.dispersion>0,st=M.iridescence>0,et=M.sheen>0,ft=M.transmission>0,pt=A&&!!M.anisotropyMap,_t=V&&!!M.clearcoatMap,Xt=V&&!!M.clearcoatNormalMap,mt=V&&!!M.clearcoatRoughnessMap,At=st&&!!M.iridescenceMap,Ft=st&&!!M.iridescenceThicknessMap,Wt=et&&!!M.sheenColorMap,Et=et&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Yt=!!M.specularColorMap,ae=!!M.specularIntensityMap,Y=ft&&!!M.transmissionMap,Tt=ft&&!!M.thicknessMap,dt=!!M.gradientMap,gt=!!M.alphaMap,Dt=M.alphaTest>0,Pt=!!M.alphaHash,Qt=!!M.extensions,Ee=si;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let Be={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:z,defines:M.defines,customVertexShaderID:H,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ut,batchingColor:ut&&U._colorsTexture!==null,instancing:it,instancingColor:it&&U.instanceColor!==null,instancingMorph:it&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ss,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:nt,envMap:xt,envMapMode:xt&&G.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:vt,bumpMap:yt,normalMap:bt,displacementMap:f&&ht,emissiveMap:Ut,normalMapObjectSpace:bt&&M.normalMapType===ip,normalMapTangentSpace:bt&&M.normalMapType===Yo,metalnessMap:lt,roughnessMap:I,anisotropy:A,anisotropyMap:pt,clearcoat:V,clearcoatMap:_t,clearcoatNormalMap:Xt,clearcoatRoughnessMap:mt,dispersion:rt,iridescence:st,iridescenceMap:At,iridescenceThicknessMap:Ft,sheen:et,sheenColorMap:Wt,sheenRoughnessMap:Et,specularMap:qt,specularColorMap:Yt,specularIntensityMap:ae,transmission:ft,transmissionMap:Y,thicknessMap:Tt,gradientMap:dt,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:gt,alphaTest:Dt,alphaHash:Pt,combine:M.combine,mapUv:ot&&y(M.map.channel),aoMapUv:F&&y(M.aoMap.channel),lightMapUv:vt&&y(M.lightMap.channel),bumpMapUv:yt&&y(M.bumpMap.channel),normalMapUv:bt&&y(M.normalMap.channel),displacementMapUv:ht&&y(M.displacementMap.channel),emissiveMapUv:Ut&&y(M.emissiveMap.channel),metalnessMapUv:lt&&y(M.metalnessMap.channel),roughnessMapUv:I&&y(M.roughnessMap.channel),anisotropyMapUv:pt&&y(M.anisotropyMap.channel),clearcoatMapUv:_t&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Et&&y(M.sheenRoughnessMap.channel),specularMapUv:qt&&y(M.specularMap.channel),specularColorMapUv:Yt&&y(M.specularColorMap.channel),specularIntensityMapUv:ae&&y(M.specularIntensityMap.channel),transmissionMapUv:Y&&y(M.transmissionMap.channel),thicknessMapUv:Tt&&y(M.thicknessMap.channel),alphaMapUv:gt&&y(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ot||gt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:X,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:Ut&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===re,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&M.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)w.push(R),w.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(_(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let w=g[M.type],R;if(w){let P=An[w];R=hi.clone(P.uniforms)}else R=M.uniforms;return R}function b(M,w){let R;for(let P=0,U=u.length;P<U;P++){let L=u[P];if(L.cacheKey===w){R=L,++R.usedTimes;break}}return R===void 0&&(R=new Kx(i,w,M,r),u.push(R)),R}function S(M){if(--M.usedTimes===0){let w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:u,dispose:T}}function t1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function e1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,y,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:y,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=y,m.group=p),t++,m}function a(h,f,d,g,y,p){let m=o(h,f,d,g,y,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,f,d,g,y,p){let m=o(h,f,d,g,y,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||e1),n.length>1&&n.sort(f||Ru),s.length>1&&s.sort(f||Ru)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function n1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Cu,i.set(n,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function i1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Rt};break;case"SpotLight":e={position:new k,direction:new k,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function s1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var r1=0;function o1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a1(i){let t=new i1,e=s1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new $t,o=new $t;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,_=0,x=0,v=0,b=0,S=0,E=0;c.sort(o1);for(let M=0,w=c.length;M<w;M++){let R=c[M],P=R.color,U=R.intensity,L=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*U,h+=P.g*U,f+=P.b*U;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],U);E++}else if(R.isDirectionalLight){let N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let G=R.shadow,O=e.get(R);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=R.shadow.matrix,_++}n.directional[d]=N,d++}else if(R.isSpotLight){let N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(P).multiplyScalar(U),N.distance=L,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[y]=N;let G=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,G.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[y]=G.matrix,R.castShadow){let O=e.get(R);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=B,v++}y++}else if(R.isRectAreaLight){let N=t.get(R);N.color.copy(P).multiplyScalar(U),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=N,p++}else if(R.isPointLight){let N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let G=R.shadow,O=e.get(R);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=N,g++}else if(R.isHemisphereLight){let N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(U),N.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[m]=N,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==y||T.rectAreaLength!==p||T.hemiLength!==m||T.numDirectionalShadows!==_||T.numPointShadows!==x||T.numSpotShadows!==v||T.numSpotMaps!==b||T.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.directionalLength=d,T.pointLength=g,T.spotLength=y,T.rectAreaLength=p,T.hemiLength=m,T.numDirectionalShadows=_,T.numPointShadows=x,T.numSpotShadows=v,T.numSpotMaps=b,T.numLightProbes=E,n.version=r1++)}function l(c,u){let h=0,f=0,d=0,g=0,y=0,p=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let x=c[m];if(x.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),h++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function Iu(i){let t=new a1(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function l1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Iu(i),t.set(s,[a])):r>=o.length?(a=new Iu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ai=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pc=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function u1(i,t,e){let n=new er,s=new It,r=new It,o=new xe,a=new Ai({depthPacking:pr}),l=new pc,c={},u=e.maxTextureSize,h={[ri]:Ge,[Ge]:ri,[re]:re},f=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new se;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let m=this.type;this.render=function(S,E,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(In),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=m!==kn&&this.type===kn,L=m===kn&&this.type!==kn;for(let B=0,N=S.length;B<N;B++){let G=S[B],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let q=O.getFrameExtents();if(s.multiply(q),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,O.mapSize.y=r.y)),O.map===null||U===!0||L===!0){let W=this.type!==kn?{minFilter:rn,magFilter:rn}:{};O.map!==null&&O.map.dispose(),O.map=new Ye(s.x,s.y,W),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let $=O.getViewportCount();for(let W=0;W<$;W++){let tt=O.getViewport(W);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),P.viewport(o),O.updateMatrices(G,W),n=O.getFrustum(),v(E,T,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===kn&&_(O,T),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,w,R)};function _(S,E){let T=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ye(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,T,f,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,T,d,y,null)}function x(S,E,T,M){let w=null,R=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)w=R;else if(w=T.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let P=w.uuid,U=E.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let B=L[U];B===void 0&&(B=w.clone(),L[U]=B,E.addEventListener("dispose",b)),w=B}if(w.visible=E.visible,w.wireframe=E.wireframe,M===kn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:h[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=T}return w}function v(S,E,T,M,w){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===kn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let U=t.update(S),L=S.material;if(Array.isArray(L)){let B=U.groups;for(let N=0,G=B.length;N<G;N++){let O=B[N],q=L[O.materialIndex];if(q&&q.visible){let $=x(S,q,M,w);S.onBeforeShadow(i,S,E,T,U,$,O),i.renderBufferDirect(T,null,U,$,S,O),S.onAfterShadow(i,S,E,T,U,$,O)}}}else if(L.visible){let B=x(S,L,M,w);S.onBeforeShadow(i,S,E,T,U,B,null),i.renderBufferDirect(T,null,U,B,S,null),S.onAfterShadow(i,S,E,T,U,B,null)}}let P=S.children;for(let U=0,L=P.length;U<L;U++)v(P[U],E,T,M,w)}function b(S){S.target.removeEventListener("dispose",b);for(let T in c){let M=c[T],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}var f1={[vl]:_l,[Ml]:Sl,[bl]:El,[us]:wl,[_l]:vl,[Sl]:Ml,[El]:bl,[wl]:us};function d1(i,t){function e(){let Y=!1,Tt=new xe,dt=null,gt=new xe(0,0,0,0);return{setMask:function(Dt){dt!==Dt&&!Y&&(i.colorMask(Dt,Dt,Dt,Dt),dt=Dt)},setLocked:function(Dt){Y=Dt},setClear:function(Dt,Pt,Qt,Ee,Be){Be===!0&&(Dt*=Ee,Pt*=Ee,Qt*=Ee),Tt.set(Dt,Pt,Qt,Ee),gt.equals(Tt)===!1&&(i.clearColor(Dt,Pt,Qt,Ee),gt.copy(Tt))},reset:function(){Y=!1,dt=null,gt.set(-1,0,0,0)}}}function n(){let Y=!1,Tt=!1,dt=null,gt=null,Dt=null;return{setReversed:function(Pt){if(Tt!==Pt){let Qt=t.get("EXT_clip_control");Tt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);let Ee=Dt;Dt=null,this.setClear(Ee)}Tt=Pt},getReversed:function(){return Tt},setTest:function(Pt){Pt?Q(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(Pt){dt!==Pt&&!Y&&(i.depthMask(Pt),dt=Pt)},setFunc:function(Pt){if(Tt&&(Pt=f1[Pt]),gt!==Pt){switch(Pt){case vl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case bl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Pt}},setLocked:function(Pt){Y=Pt},setClear:function(Pt){Dt!==Pt&&(Tt&&(Pt=1-Pt),i.clearDepth(Pt),Dt=Pt)},reset:function(){Y=!1,dt=null,gt=null,Dt=null,Tt=!1}}}function s(){let Y=!1,Tt=null,dt=null,gt=null,Dt=null,Pt=null,Qt=null,Ee=null,Be=null;return{setTest:function(pe){Y||(pe?Q(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(pe){Tt!==pe&&!Y&&(i.stencilMask(pe),Tt=pe)},setFunc:function(pe,dn,Dn){(dt!==pe||gt!==dn||Dt!==Dn)&&(i.stencilFunc(pe,dn,Dn),dt=pe,gt=dn,Dt=Dn)},setOp:function(pe,dn,Dn){(Pt!==pe||Qt!==dn||Ee!==Dn)&&(i.stencilOp(pe,dn,Dn),Pt=pe,Qt=dn,Ee=Dn)},setLocked:function(pe){Y=pe},setClear:function(pe){Be!==pe&&(i.clearStencil(pe),Be=pe)},reset:function(){Y=!1,Tt=null,dt=null,gt=null,Dt=null,Pt=null,Qt=null,Ee=null,Be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,y=!1,p=null,m=null,_=null,x=null,v=null,b=null,S=null,E=new Rt(0,0,0),T=0,M=!1,w=null,R=null,P=null,U=null,L=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,G=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=G>=2);let q=null,$={},W=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),Z=new xe().fromArray(W),z=new xe().fromArray(tt);function H(Y,Tt,dt,gt){let Dt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(Y,Pt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<dt;Qt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Tt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Pt}let J={};J[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(us),yt(!1),bt(Dh),Q(i.CULL_FACE),F(In);function Q(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function X(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function it(Y,Tt){return h[Y]!==Tt?(i.bindFramebuffer(Y,Tt),h[Y]=Tt,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Tt),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ut(Y,Tt){let dt=d,gt=!1;if(Y){dt=f.get(Tt),dt===void 0&&(dt=[],f.set(Tt,dt));let Dt=Y.textures;if(dt.length!==Dt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Qt=Dt.length;Pt<Qt;Pt++)dt[Pt]=i.COLOR_ATTACHMENT0+Pt;dt.length=Dt.length,gt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(dt)}function ot(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}let nt={[wi]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[zd]:i.FUNC_REVERSE_SUBTRACT};nt[Fd]=i.MIN,nt[Od]=i.MAX;let xt={[Bd]:i.ZERO,[kd]:i.ONE,[Hd]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Jd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(Y,Tt,dt,gt,Dt,Pt,Qt,Ee,Be,pe){if(Y===In){y===!0&&(X(i.BLEND),y=!1);return}if(y===!1&&(Q(i.BLEND),y=!0),Y!==Nd){if(Y!==p||pe!==M){if((m!==wi||v!==wi)&&(i.blendEquation(i.FUNC_ADD),m=wi,v=wi),pe)switch(Y){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}_=null,x=null,b=null,S=null,E.set(0,0,0),T=0,p=Y,M=pe}return}Dt=Dt||Tt,Pt=Pt||dt,Qt=Qt||gt,(Tt!==m||Dt!==v)&&(i.blendEquationSeparate(nt[Tt],nt[Dt]),m=Tt,v=Dt),(dt!==_||gt!==x||Pt!==b||Qt!==S)&&(i.blendFuncSeparate(xt[dt],xt[gt],xt[Pt],xt[Qt]),_=dt,x=gt,b=Pt,S=Qt),(Ee.equals(E)===!1||Be!==T)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Be),E.copy(Ee),T=Be),p=Y,M=!1}function vt(Y,Tt){Y.side===re?X(i.CULL_FACE):Q(i.CULL_FACE);let dt=Y.side===Ge;Tt&&(dt=!dt),yt(dt),Y.blending===as&&Y.transparent===!1?F(In):F(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let gt=Y.stencilWrite;a.setTest(gt),gt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ut(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(Y){w!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),w=Y)}function bt(Y){Y!==Ld?(Q(i.CULL_FACE),Y!==R&&(Y===Dh?i.cullFace(i.BACK):Y===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),R=Y}function ht(Y){Y!==P&&(N&&i.lineWidth(Y),P=Y)}function Ut(Y,Tt,dt){Y?(Q(i.POLYGON_OFFSET_FILL),(U!==Tt||L!==dt)&&(i.polygonOffset(Tt,dt),U=Tt,L=dt)):X(i.POLYGON_OFFSET_FILL)}function lt(Y){Y?Q(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function I(Y){Y===void 0&&(Y=i.TEXTURE0+B-1),q!==Y&&(i.activeTexture(Y),q=Y)}function A(Y,Tt,dt){dt===void 0&&(q===null?dt=i.TEXTURE0+B-1:dt=q);let gt=$[dt];gt===void 0&&(gt={type:void 0,texture:void 0},$[dt]=gt),(gt.type!==Y||gt.texture!==Tt)&&(q!==dt&&(i.activeTexture(dt),q=dt),i.bindTexture(Y,Tt||J[Y]),gt.type=Y,gt.texture=Tt)}function V(){let Y=$[q];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(Y){Z.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Z.copy(Y))}function Et(Y){z.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),z.copy(Y))}function qt(Y,Tt){let dt=c.get(Tt);dt===void 0&&(dt=new WeakMap,c.set(Tt,dt));let gt=dt.get(Y);gt===void 0&&(gt=i.getUniformBlockIndex(Tt,Y.name),dt.set(Y,gt))}function Yt(Y,Tt){let gt=c.get(Tt).get(Y);l.get(Tt)!==gt&&(i.uniformBlockBinding(Tt,gt,Y.__bindingPointIndex),l.set(Tt,gt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,$={},h={},f=new WeakMap,d=[],g=null,y=!1,p=null,m=null,_=null,x=null,v=null,b=null,S=null,E=new Rt(0,0,0),T=0,M=!1,w=null,R=null,P=null,U=null,L=null,Z.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:X,bindFramebuffer:it,drawBuffers:ut,useProgram:ot,setBlending:F,setMaterial:vt,setFlipSided:yt,setCullFace:bt,setLineWidth:ht,setPolygonOffset:Ut,setScissorTest:lt,activeTexture:I,bindTexture:A,unbindTexture:V,compressedTexImage2D:rt,compressedTexImage3D:st,texImage2D:At,texImage3D:Ft,updateUBOMapping:qt,uniformBlockBinding:Yt,texStorage2D:Xt,texStorage3D:mt,texSubImage2D:et,texSubImage3D:ft,compressedTexSubImage2D:pt,compressedTexSubImage3D:_t,scissor:Wt,viewport:Et,reset:ae}}function Pu(i,t,e,n){let s=p1(n);switch(e){case tf:return i*t;case nf:return i*t;case sf:return i*t*2;case Yc:return i*t/s.components*s.byteLength;case Zc:return i*t/s.components*s.byteLength;case rf:return i*t*2/s.components*s.byteLength;case $c:return i*t*2/s.components*s.byteLength;case ef:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Jc:return i*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:case Ll:return Math.max(i,16)*Math.max(t,8)/4;case Cl:case Pl:return Math.max(i,8)*Math.max(t,8)/2;case Dl:case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case Jl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case of:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p1(i){switch(i){case Xn:case Ku:return{byteLength:1,components:1};case Qs:case ju:case bn:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case Ti:case Wc:case Cn:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function m1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return d?new OffscreenCanvas(I,A):vo("canvas")}function y(I,A,V){let rt=1,st=lt(I);if((st.width>V||st.height>V)&&(rt=V/Math.max(st.width,st.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let et=Math.floor(rt*st.width),ft=Math.floor(rt*st.height);h===void 0&&(h=g(et,ft));let pt=A?g(et,ft):h;return pt.width=et,pt.height=ft,pt.getContext("2d").drawImage(I,0,0,et,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+ft+")."),pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,A,V,rt,st=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let et=A;if(A===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),A===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),A===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),A===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RG8UI),V===i.UNSIGNED_SHORT&&(et=i.RG16UI),V===i.UNSIGNED_INT&&(et=i.RG32UI),V===i.BYTE&&(et=i.RG8I),V===i.SHORT&&(et=i.RG16I),V===i.INT&&(et=i.RG32I)),A===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGB8UI),V===i.UNSIGNED_SHORT&&(et=i.RGB16UI),V===i.UNSIGNED_INT&&(et=i.RGB32UI),V===i.BYTE&&(et=i.RGB8I),V===i.SHORT&&(et=i.RGB16I),V===i.INT&&(et=i.RGB32I)),A===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),V===i.UNSIGNED_INT&&(et=i.RGBA32UI),V===i.BYTE&&(et=i.RGBA8I),V===i.SHORT&&(et=i.RGBA16I),V===i.INT&&(et=i.RGBA32I)),A===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),A===i.RGBA){let ft=st?Zo:le.getTransfer(rt);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=ft===de?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(I,A){let V;return I?A===null||A===Ti||A===ps?V=i.DEPTH24_STENCIL8:A===Cn?V=i.DEPTH32F_STENCIL8:A===Qs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ti||A===ps?V=i.DEPTH_COMPONENT24:A===Cn?V=i.DEPTH_COMPONENT32F:A===Qs&&(V=i.DEPTH_COMPONENT16),V}function b(I,A){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==rn&&I.minFilter!==Rn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){let A=I.target;A.removeEventListener("dispose",S),T(A),A.isVideoTexture&&u.delete(A)}function E(I){let A=I.target;A.removeEventListener("dispose",E),w(A)}function T(I){let A=n.get(I);if(A.__webglInit===void 0)return;let V=I.source,rt=f.get(V);if(rt){let st=rt[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(I),Object.keys(rt).length===0&&f.delete(V)}n.remove(I)}function M(I){let A=n.get(I);i.deleteTexture(A.__webglTexture);let V=I.source,rt=f.get(V);delete rt[A.__cacheKey],o.memory.textures--}function w(I){let A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(A.__webglFramebuffer[rt]))for(let st=0;st<A.__webglFramebuffer[rt].length;st++)i.deleteFramebuffer(A.__webglFramebuffer[rt][st]);else i.deleteFramebuffer(A.__webglFramebuffer[rt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let rt=0;rt<A.__webglFramebuffer.length;rt++)i.deleteFramebuffer(A.__webglFramebuffer[rt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let rt=0;rt<A.__webglColorRenderbuffer.length;rt++)A.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[rt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let V=I.textures;for(let rt=0,st=V.length;rt<st;rt++){let et=n.get(V[rt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(V[rt])}n.remove(I)}let R=0;function P(){R=0}function U(){let I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function L(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function B(I,A){let V=n.get(I);if(I.isVideoTexture&&ht(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let rt=I.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(V,I,A);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+A)}function N(I,A){let V=n.get(I);if(I.version>0&&V.__version!==I.version){z(V,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+A)}function G(I,A){let V=n.get(I);if(I.version>0&&V.__version!==I.version){z(V,I,A);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+A)}function O(I,A){let V=n.get(I);if(I.version>0&&V.__version!==I.version){H(V,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+A)}let q={[ai]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Rl]:i.MIRRORED_REPEAT},$={[rn]:i.NEAREST,[ep]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},W={[sp]:i.NEVER,[hp]:i.ALWAYS,[rp]:i.LESS,[af]:i.LEQUAL,[op]:i.EQUAL,[cp]:i.GEQUAL,[ap]:i.GREATER,[lp]:i.NOTEQUAL};function tt(I,A){if(A.type===Cn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Rn||A.magFilter===Ba||A.magFilter===Dr||A.magFilter===Ei||A.minFilter===Rn||A.minFilter===Ba||A.minFilter===Dr||A.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,q[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,$[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,$[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===rn||A.minFilter!==Dr&&A.minFilter!==Ei||A.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Z(I,A){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));let rt=A.source,st=f.get(rt);st===void 0&&(st={},f.set(rt,st));let et=L(A);if(et!==I.__cacheKey){st[et]===void 0&&(st[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),st[et].usedTimes++;let ft=st[I.__cacheKey];ft!==void 0&&(st[I.__cacheKey].usedTimes--,ft.usedTimes===0&&M(A)),I.__cacheKey=et,I.__webglTexture=st[et].texture}return V}function z(I,A,V){let rt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(rt=i.TEXTURE_3D);let st=Z(I,A),et=A.source;e.bindTexture(rt,I.__webglTexture,i.TEXTURE0+V);let ft=n.get(et);if(et.version!==ft.__version||st===!0){e.activeTexture(i.TEXTURE0+V);let pt=le.getPrimaries(le.workingColorSpace),_t=A.colorSpace===ni?null:le.getPrimaries(A.colorSpace),Xt=A.colorSpace===ni||pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let mt=y(A.image,!1,s.maxTextureSize);mt=Ut(A,mt);let At=r.convert(A.format,A.colorSpace),Ft=r.convert(A.type),Wt=x(A.internalFormat,At,Ft,A.colorSpace,A.isVideoTexture);tt(rt,A);let Et,qt=A.mipmaps,Yt=A.isVideoTexture!==!0,ae=ft.__version===void 0||st===!0,Y=et.dataReady,Tt=b(A,mt);if(A.isDepthTexture)Wt=v(A.format===ms,A.type),ae&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Wt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Wt,mt.width,mt.height,0,At,Ft,null));else if(A.isDataTexture)if(qt.length>0){Yt&&ae&&e.texStorage2D(i.TEXTURE_2D,Tt,Wt,qt[0].width,qt[0].height);for(let dt=0,gt=qt.length;dt<gt;dt++)Et=qt[dt],Yt?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,At,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,dt,Wt,Et.width,Et.height,0,At,Ft,Et.data);A.generateMipmaps=!1}else Yt?(ae&&e.texStorage2D(i.TEXTURE_2D,Tt,Wt,mt.width,mt.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,At,Ft,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,mt.width,mt.height,0,At,Ft,mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Yt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Wt,qt[0].width,qt[0].height,mt.depth);for(let dt=0,gt=qt.length;dt<gt;dt++)if(Et=qt[dt],A.format!==_n)if(At!==null)if(Yt){if(Y)if(A.layerUpdates.size>0){let Dt=Pu(Et.width,Et.height,A.format,A.type);for(let Pt of A.layerUpdates){let Qt=Et.data.subarray(Pt*Dt/Et.data.BYTES_PER_ELEMENT,(Pt+1)*Dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Pt,Et.width,Et.height,1,At,Qt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,mt.depth,At,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Wt,Et.width,Et.height,mt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,mt.depth,At,Ft,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Wt,Et.width,Et.height,mt.depth,0,At,Ft,Et.data)}else{Yt&&ae&&e.texStorage2D(i.TEXTURE_2D,Tt,Wt,qt[0].width,qt[0].height);for(let dt=0,gt=qt.length;dt<gt;dt++)Et=qt[dt],A.format!==_n?At!==null?Yt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Wt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,At,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,dt,Wt,Et.width,Et.height,0,At,Ft,Et.data)}else if(A.isDataArrayTexture)if(Yt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Wt,mt.width,mt.height,mt.depth),Y)if(A.layerUpdates.size>0){let dt=Pu(mt.width,mt.height,A.format,A.type);for(let gt of A.layerUpdates){let Dt=mt.data.subarray(gt*dt/mt.data.BYTES_PER_ELEMENT,(gt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,mt.width,mt.height,1,At,Ft,Dt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,At,Ft,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,mt.width,mt.height,mt.depth,0,At,Ft,mt.data);else if(A.isData3DTexture)Yt?(ae&&e.texStorage3D(i.TEXTURE_3D,Tt,Wt,mt.width,mt.height,mt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,At,Ft,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,mt.width,mt.height,mt.depth,0,At,Ft,mt.data);else if(A.isFramebufferTexture){if(ae)if(Yt)e.texStorage2D(i.TEXTURE_2D,Tt,Wt,mt.width,mt.height);else{let dt=mt.width,gt=mt.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Wt,dt,gt,0,At,Ft,null),dt>>=1,gt>>=1}}else if(qt.length>0){if(Yt&&ae){let dt=lt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Wt,dt.width,dt.height)}for(let dt=0,gt=qt.length;dt<gt;dt++)Et=qt[dt],Yt?Y&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At,Ft,Et):e.texImage2D(i.TEXTURE_2D,dt,Wt,At,Ft,Et);A.generateMipmaps=!1}else if(Yt){if(ae){let dt=lt(mt);e.texStorage2D(i.TEXTURE_2D,Tt,Wt,dt.width,dt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Ft,mt)}else e.texImage2D(i.TEXTURE_2D,0,Wt,At,Ft,mt);p(A)&&m(rt),ft.__version=et.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function H(I,A,V){if(A.image.length!==6)return;let rt=Z(I,A),st=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);let et=n.get(st);if(st.version!==et.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);let ft=le.getPrimaries(le.workingColorSpace),pt=A.colorSpace===ni?null:le.getPrimaries(A.colorSpace),_t=A.colorSpace===ni||ft===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,mt=A.image[0]&&A.image[0].isDataTexture,At=[];for(let gt=0;gt<6;gt++)!Xt&&!mt?At[gt]=y(A.image[gt],!0,s.maxCubemapSize):At[gt]=mt?A.image[gt].image:A.image[gt],At[gt]=Ut(A,At[gt]);let Ft=At[0],Wt=r.convert(A.format,A.colorSpace),Et=r.convert(A.type),qt=x(A.internalFormat,Wt,Et,A.colorSpace),Yt=A.isVideoTexture!==!0,ae=et.__version===void 0||rt===!0,Y=st.dataReady,Tt=b(A,Ft);tt(i.TEXTURE_CUBE_MAP,A);let dt;if(Xt){Yt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,Ft.width,Ft.height);for(let gt=0;gt<6;gt++){dt=At[gt].mipmaps;for(let Dt=0;Dt<dt.length;Dt++){let Pt=dt[Dt];A.format!==_n?Wt!==null?Yt?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Pt.width,Pt.height,Wt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Pt.width,Pt.height,Wt,Et,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,qt,Pt.width,Pt.height,0,Wt,Et,Pt.data)}}}else{if(dt=A.mipmaps,Yt&&ae){dt.length>0&&Tt++;let gt=lt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(mt){Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,At[gt].width,At[gt].height,Wt,Et,At[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,At[gt].width,At[gt].height,0,Wt,Et,At[gt].data);for(let Dt=0;Dt<dt.length;Dt++){let Qt=dt[Dt].image[gt].image;Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,Qt.width,Qt.height,Wt,Et,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,qt,Qt.width,Qt.height,0,Wt,Et,Qt.data)}}else{Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Wt,Et,At[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,Wt,Et,At[gt]);for(let Dt=0;Dt<dt.length;Dt++){let Pt=dt[Dt];Yt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,Wt,Et,Pt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,qt,Wt,Et,Pt.image[gt])}}}p(A)&&m(i.TEXTURE_CUBE_MAP),et.__version=st.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function J(I,A,V,rt,st,et){let ft=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),_t=x(V.internalFormat,ft,pt,V.colorSpace),Xt=n.get(A),mt=n.get(V);if(mt.__renderTarget=A,!Xt.__hasExternalTextures){let At=Math.max(1,A.width>>et),Ft=Math.max(1,A.height>>et);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,et,_t,At,Ft,A.depth,0,ft,pt,null):e.texImage2D(st,et,_t,At,Ft,0,ft,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,st,mt.__webglTexture,0,yt(A)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,st,mt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(I,A,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){let rt=A.depthTexture,st=rt&&rt.isDepthTexture?rt.type:null,et=v(A.stencilBuffer,st),ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=yt(A);bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,et,A.width,A.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,et,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,I)}else{let rt=A.textures;for(let st=0;st<rt.length;st++){let et=rt[st],ft=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),_t=x(et.internalFormat,ft,pt,et.colorSpace),Xt=yt(A);V&&bt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,_t,A.width,A.height):bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,_t,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_t,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(A.depthTexture);rt.__renderTarget=A,(!rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);let st=rt.__webglTexture,et=yt(A);if(A.depthTexture.format===ls)bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(A.depthTexture.format===ms)bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function it(I){let A=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let rt=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),rt){let st=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,rt.removeEventListener("dispose",st)};rt.addEventListener("dispose",st),A.__depthDisposeCallback=st}A.__boundDepthTexture=rt}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");X(A.__webglFramebuffer,I)}else if(V){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]===void 0)A.__webglDepthbuffer[rt]=i.createRenderbuffer(),Q(A.__webglDepthbuffer[rt],I,!1);else{let st=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=A.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Q(A.__webglDepthbuffer,I,!1);else{let rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,A,V){let rt=n.get(I);A!==void 0&&J(rt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&it(I)}function ot(I){let A=I.texture,V=n.get(I),rt=n.get(A);I.addEventListener("dispose",E);let st=I.textures,et=I.isWebGLCubeRenderTarget===!0,ft=st.length>1;if(ft||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=A.version,o.memory.textures++),et){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let _t=0;_t<A.mipmaps.length;_t++)V.__webglFramebuffer[pt][_t]=i.createFramebuffer()}else V.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<A.mipmaps.length;pt++)V.__webglFramebuffer[pt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ft)for(let pt=0,_t=st.length;pt<_t;pt++){let Xt=n.get(st[pt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&bt(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<st.length;pt++){let _t=st[pt];V.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);let Xt=r.convert(_t.format,_t.colorSpace),mt=r.convert(_t.type),At=x(_t.internalFormat,Xt,mt,_t.colorSpace,I.isXRRenderTarget===!0),Ft=yt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,At,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,A);for(let pt=0;pt<6;pt++)if(A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)J(V.__webglFramebuffer[pt][_t],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else J(V.__webglFramebuffer[pt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(A)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let pt=0,_t=st.length;pt<_t;pt++){let Xt=st[pt],mt=n.get(Xt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),tt(i.TEXTURE_2D,Xt),J(V.__webglFramebuffer,I,Xt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),p(Xt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,rt.__webglTexture),tt(pt,A),A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)J(V.__webglFramebuffer[_t],I,A,i.COLOR_ATTACHMENT0,pt,_t);else J(V.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,pt,0);p(A)&&m(pt),e.unbindTexture()}I.depthBuffer&&it(I)}function nt(I){let A=I.textures;for(let V=0,rt=A.length;V<rt;V++){let st=A[V];if(p(st)){let et=_(I),ft=n.get(st).__webglTexture;e.bindTexture(et,ft),m(et),e.unbindTexture()}}}let xt=[],F=[];function vt(I){if(I.samples>0){if(bt(I)===!1){let A=I.textures,V=I.width,rt=I.height,st=i.COLOR_BUFFER_BIT,et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(I),pt=A.length>1;if(pt)for(let _t=0;_t<A.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Xt=n.get(A[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,V,rt,0,0,V,rt,st,i.NEAREST),l===!0&&(xt.length=0,F.length=0,xt.push(i.COLOR_ATTACHMENT0+_t),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xt.push(et),F.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<A.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Xt=n.get(A[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function yt(I){return Math.min(s.maxSamples,I.samples)}function bt(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(I){let A=o.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function Ut(I,A){let V=I.colorSpace,rt=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Ss&&V!==ni&&(le.getTransfer(V)===de?(rt!==_n||st!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=O,this.rebindTextures=ut,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=J,this.useMultisampledRTT=bt}function g1(i,t){function e(n,s=ni){let r,o=le.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ku)return i.BYTE;if(n===ju)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Wc)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===tf)return i.ALPHA;if(n===ef)return i.RGB;if(n===_n)return i.RGBA;if(n===nf)return i.LUMINANCE;if(n===sf)return i.LUMINANCE_ALPHA;if(n===ls)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===rf)return i.RG;if(n===$c)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Il||n===Pl||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Nl)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===Fl||n===Ol||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===Jl||n===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===jl||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var mc=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},x1={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
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

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:y1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,y=new gc,p=e.getContextAttributes(),m=null,_=null,x=[],v=[],b=new It,S=null,E=new Fe;E.viewport=new xe;let T=new Fe;T.viewport=new xe;let M=[E,T],w=new mc,R=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let H=x[z];return H===void 0&&(H=new js,x[z]=H),H.getTargetRaySpace()},this.getControllerGrip=function(z){let H=x[z];return H===void 0&&(H=new js,x[z]=H),H.getGripSpace()},this.getHand=function(z){let H=x[z];return H===void 0&&(H=new js,x[z]=H),H.getHandSpace()};function U(z){let H=v.indexOf(z.inputSource);if(H===-1)return;let J=x[H];J!==void 0&&(J.update(z.inputSource,z.frame,c||o),J.dispatchEvent({type:z.type,data:z.inputSource}))}function L(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let z=0;z<x.length;z++){let H=v[z];H!==null&&(v[z]=null,x[z].disconnect(H))}R=null,P=null,y.reset(),t.setRenderTarget(m),d=null,f=null,h=null,s=null,_=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){let H={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ye(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let H=null,J=null,Q=null;p.depth&&(Q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=p.stencil?ms:ls,J=p.stencil?ps:Ti);let X={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(X),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ye(f.textureWidth,f.textureHeight,{format:_n,type:Xn,depthTexture:new To(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(z){for(let H=0;H<z.removed.length;H++){let J=z.removed[H],Q=v.indexOf(J);Q>=0&&(v[Q]=null,x[Q].disconnect(J))}for(let H=0;H<z.added.length;H++){let J=z.added[H],Q=v.indexOf(J);if(Q===-1){for(let it=0;it<x.length;it++)if(it>=v.length){v.push(J),Q=it;break}else if(v[it]===null){v[it]=J,Q=it;break}if(Q===-1)break}let X=x[Q];X&&X.connect(J)}}let N=new k,G=new k;function O(z,H,J){N.setFromMatrixPosition(H.matrixWorld),G.setFromMatrixPosition(J.matrixWorld);let Q=N.distanceTo(G),X=H.projectionMatrix.elements,it=J.projectionMatrix.elements,ut=X[14]/(X[10]-1),ot=X[14]/(X[10]+1),nt=(X[9]+1)/X[5],xt=(X[9]-1)/X[5],F=(X[8]-1)/X[0],vt=(it[8]+1)/it[0],yt=ut*F,bt=ut*vt,ht=Q/(-F+vt),Ut=ht*-F;if(H.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ut),z.translateZ(ht),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),X[10]===-1)z.projectionMatrix.copy(H.projectionMatrix),z.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let lt=ut+ht,I=ot+ht,A=yt-Ut,V=bt+(Q-Ut),rt=nt*ot/I*lt,st=xt*ot/I*lt;z.projectionMatrix.makePerspective(A,V,rt,st,lt,I),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function q(z,H){H===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(H.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let H=z.near,J=z.far;y.texture!==null&&(y.depthNear>0&&(H=y.depthNear),y.depthFar>0&&(J=y.depthFar)),w.near=T.near=E.near=H,w.far=T.far=E.far=J,(R!==w.near||P!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,P=w.far),E.layers.mask=z.layers.mask|2,T.layers.mask=z.layers.mask|4,w.layers.mask=E.layers.mask|T.layers.mask;let Q=z.parent,X=w.cameras;q(w,Q);for(let it=0;it<X.length;it++)q(X[it],Q);X.length===2?O(w,E,T):w.projectionMatrix.copy(E.projectionMatrix),$(z,w,Q)};function $(z,H,J){J===null?z.matrix.copy(H.matrixWorld):(z.matrix.copy(J.matrixWorld),z.matrix.invert(),z.matrix.multiply(H.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(H.projectionMatrix),z.projectionMatrixInverse.copy(H.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=gs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let W=null;function tt(z,H){if(u=H.getViewerPose(c||o),g=H,u!==null){let J=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Q=!1;J.length!==w.cameras.length&&(w.cameras.length=0,Q=!0);for(let it=0;it<J.length;it++){let ut=J[it],ot=null;if(d!==null)ot=d.getViewport(ut);else{let xt=h.getViewSubImage(f,ut);ot=xt.viewport,it===0&&(t.setRenderTargetTextures(_,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(_))}let nt=M[it];nt===void 0&&(nt=new Fe,nt.layers.enable(it),nt.viewport=new xe,M[it]=nt),nt.matrix.fromArray(ut.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ut.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(w.matrix.copy(nt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Q===!0&&w.cameras.push(nt)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let it=h.getDepthInformation(J[0]);it&&it.isValid&&it.texture&&y.init(t,it,s.renderState)}}for(let J=0;J<x.length;J++){let Q=v[J],X=x[J];Q!==null&&X!==void 0&&X.update(Q,H,c||o)}W&&W(z,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}let Z=new df;Z.setAnimationLoop(tt),this.setAnimationLoop=function(z){W=z},this.dispose=function(){}}},Mi=new Ze,_1=new $t;function M1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ff(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),x=_.envMap,v=_.envMapRotation;x&&(p.envMap.value=x,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Mi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let v=x.program;n.uniformBlockBinding(_,v)}function c(_,x){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",p));let b=x.program;n.updateUBOMapping(_,b);let S=t.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function u(_){let x=h();_.__bindingPointIndex=x;let v=i.createBuffer(),b=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=s[_.id],v=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,E=v.length;S<E;S++){let T=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,w=T.length;M<w;M++){let R=T[M];if(d(R,S,M,b)===!0){let P=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],L=0;for(let B=0;B<U.length;B++){let N=U[B],G=y(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,P+L,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,x,v,b){let S=_.value,E=x+"_"+v;if(b[E]===void 0)return typeof S=="number"||typeof S=="boolean"?b[E]=S:b[E]=S.clone(),!0;{let T=b[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return b[E]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(_){let x=_.uniforms,v=0,b=16;for(let E=0,T=x.length;E<T;E++){let M=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,R=M.length;w<R;w++){let P=M[w],U=Array.isArray(P.value)?P.value:[P.value];for(let L=0,B=U.length;L<B;L++){let N=U[L],G=y(N),O=v%b,q=O%G.boundary,$=O+q;v+=q,$!==0&&b-$<G.storage&&(v+=b-$),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=G.storage}}}let S=v%b;return S>0&&(v+=b-S),_.__size=v,_.__cache={},this}function y(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){let x=_.target;x.removeEventListener("dispose",p);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ao=class{constructor(t={}){let{canvas:e=Ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),p=null,m=null,_=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=si,this.toneMappingExposure=1;let v=this,b=!1,S=0,E=0,T=null,M=-1,w=null,R=new xe,P=new xe,U=null,L=new Rt(0),B=0,N=e.width,G=e.height,O=1,q=null,$=null,W=new xe(0,0,N,G),tt=new xe(0,0,N,G),Z=!1,z=new er,H=!1,J=!1,Q=new $t,X=new $t,it=new k,ut=new xe,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function xt(){return T===null?O:1}let F=n;function vt(D,K){return e.getContext(D,K)}try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),F===null){let K="webgl2";if(F=vt(K,D),F===null)throw vt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let yt,bt,ht,Ut,lt,I,A,V,rt,st,et,ft,pt,_t,Xt,mt,At,Ft,Wt,Et,qt,Yt,ae,Y;function Tt(){yt=new Og(F),yt.init(),Yt=new g1(F,yt),bt=new Lg(F,yt,t,Yt),ht=new d1(F,yt),bt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Ut=new Hg(F),lt=new t1,I=new m1(F,yt,ht,lt,bt,Yt,Ut),A=new Ng(v),V=new Fg(v),rt=new Zp(F),ae=new Ig(F,rt),st=new Bg(F,rt,Ut,ae),et=new Vg(F,st,rt,Ut),Wt=new Gg(F,bt,I),mt=new Dg(lt),ft=new Qx(v,A,V,yt,bt,ae,mt),pt=new M1(v,lt),_t=new n1,Xt=new l1(yt),Ft=new Cg(v,A,V,ht,et,d,l),At=new u1(v,et,bt),Y=new b1(F,Ut,bt,ht),Et=new Pg(F,yt,Ut),qt=new kg(F,yt,Ut),Ut.programs=ft.programs,v.capabilities=bt,v.extensions=yt,v.properties=lt,v.renderLists=_t,v.shadowMap=At,v.state=ht,v.info=Ut}Tt();let dt=new xc(v,F);this.xr=dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let D=yt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=yt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(D){D!==void 0&&(O=D,this.setSize(N,G,!1))},this.getSize=function(D){return D.set(N,G)},this.setSize=function(D,K,at=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=D,G=K,e.width=Math.floor(D*O),e.height=Math.floor(K*O),at===!0&&(e.style.width=D+"px",e.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(N*O,G*O).floor()},this.setDrawingBufferSize=function(D,K,at){N=D,G=K,O=at,e.width=Math.floor(D*at),e.height=Math.floor(K*at),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(W)},this.setViewport=function(D,K,at,ct){D.isVector4?W.set(D.x,D.y,D.z,D.w):W.set(D,K,at,ct),ht.viewport(R.copy(W).multiplyScalar(O).round())},this.getScissor=function(D){return D.copy(tt)},this.setScissor=function(D,K,at,ct){D.isVector4?tt.set(D.x,D.y,D.z,D.w):tt.set(D,K,at,ct),ht.scissor(P.copy(tt).multiplyScalar(O).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(D){ht.setScissorTest(Z=D)},this.setOpaqueSort=function(D){q=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(D=!0,K=!0,at=!0){let ct=0;if(D){let j=!1;if(T!==null){let wt=T.texture.format;j=wt===Jc||wt===$c||wt===Zc}if(j){let wt=T.texture.type,Lt=wt===Xn||wt===Ti||wt===Qs||wt===ps||wt===Xc||wt===qc,Ot=Ft.getClearColor(),Bt=Ft.getClearAlpha(),Kt=Ot.r,te=Ot.g,kt=Ot.b;Lt?(g[0]=Kt,g[1]=te,g[2]=kt,g[3]=Bt,F.clearBufferuiv(F.COLOR,0,g)):(y[0]=Kt,y[1]=te,y[2]=kt,y[3]=Bt,F.clearBufferiv(F.COLOR,0,y))}else ct|=F.COLOR_BUFFER_BIT}K&&(ct|=F.DEPTH_BUFFER_BIT),at&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),_t.dispose(),Xt.dispose(),lt.dispose(),A.dispose(),V.dispose(),et.dispose(),ae.dispose(),Y.dispose(),ft.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Eh),dt.removeEventListener("sessionend",Th),mi.stop()};function gt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let D=Ut.autoReset,K=At.enabled,at=At.autoUpdate,ct=At.needsUpdate,j=At.type;Tt(),Ut.autoReset=D,At.enabled=K,At.autoUpdate=at,At.needsUpdate=ct,At.type=j}function Pt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qt(D){let K=D.target;K.removeEventListener("dispose",Qt),Ee(K)}function Ee(D){Be(D),lt.remove(D)}function Be(D){let K=lt.get(D).programs;K!==void 0&&(K.forEach(function(at){ft.releaseProgram(at)}),D.isShaderMaterial&&ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,at,ct,j,wt){K===null&&(K=ot);let Lt=j.isMesh&&j.matrixWorld.determinant()<0,Ot=Cd(D,K,at,ct,j);ht.setMaterial(ct,Lt);let Bt=at.index,Kt=1;if(ct.wireframe===!0){if(Bt=st.getWireframeAttribute(at),Bt===void 0)return;Kt=2}let te=at.drawRange,kt=at.attributes.position,he=te.start*Kt,ye=(te.start+te.count)*Kt;wt!==null&&(he=Math.max(he,wt.start*Kt),ye=Math.min(ye,(wt.start+wt.count)*Kt)),Bt!==null?(he=Math.max(he,0),ye=Math.min(ye,Bt.count)):kt!=null&&(he=Math.max(he,0),ye=Math.min(ye,kt.count));let ve=ye-he;if(ve<0||ve===1/0)return;ae.setup(j,ct,Ot,at,Bt);let je,ue=Et;if(Bt!==null&&(je=rt.get(Bt),ue=qt,ue.setIndex(je)),j.isMesh)ct.wireframe===!0?(ht.setLineWidth(ct.wireframeLinewidth*xt()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(j.isLine){let Vt=ct.linewidth;Vt===void 0&&(Vt=1),ht.setLineWidth(Vt*xt()),j.isLineSegments?ue.setMode(F.LINES):j.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else j.isPoints?ue.setMode(F.POINTS):j.isSprite&&ue.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ue.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))ue.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Vt=j._multiDrawStarts,Nn=j._multiDrawCounts,fe=j._multiDrawCount,pn=Bt?rt.get(Bt).bytesPerElement:1,Bi=lt.get(ct).currentProgram.getUniforms();for(let en=0;en<fe;en++)Bi.setValue(F,"_gl_DrawID",en),ue.render(Vt[en]/pn,Nn[en])}else if(j.isInstancedMesh)ue.renderInstances(he,ve,j.count);else if(at.isInstancedBufferGeometry){let Vt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Nn=Math.min(at.instanceCount,Vt);ue.renderInstances(he,ve,Nn)}else ue.render(he,ve)};function pe(D,K,at){D.transparent===!0&&D.side===re&&D.forceSinglePass===!1?(D.side=Ge,D.needsUpdate=!0,Lr(D,K,at),D.side=ri,D.needsUpdate=!0,Lr(D,K,at),D.side=re):Lr(D,K,at)}this.compile=function(D,K,at=null){at===null&&(at=D),m=Xt.get(at),m.init(K),x.push(m),at.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),D!==at&&D.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();let ct=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let wt=j.material;if(wt)if(Array.isArray(wt))for(let Lt=0;Lt<wt.length;Lt++){let Ot=wt[Lt];pe(Ot,at,j),ct.add(Ot)}else pe(wt,at,j),ct.add(wt)}),x.pop(),m=null,ct},this.compileAsync=function(D,K,at=null){let ct=this.compile(D,K,at);return new Promise(j=>{function wt(){if(ct.forEach(function(Lt){lt.get(Lt).currentProgram.isReady()&&ct.delete(Lt)}),ct.size===0){j(D);return}setTimeout(wt,10)}yt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let dn=null;function Dn(D){dn&&dn(D)}function Eh(){mi.stop()}function Th(){mi.start()}let mi=new df;mi.setAnimationLoop(Dn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(D){dn=D,dt.setAnimationLoop(D),D===null?mi.stop():mi.start()},dt.addEventListener("sessionstart",Eh),dt.addEventListener("sessionend",Th),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(K),K=dt.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,K,T),m=Xt.get(D,x.length),m.init(K),x.push(m),X.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z.setFromProjectionMatrix(X),J=this.localClippingEnabled,H=mt.init(this.clippingPlanes,J),p=_t.get(D,_.length),p.init(),_.push(p),dt.enabled===!0&&dt.isPresenting===!0){let wt=v.xr.getDepthSensingMesh();wt!==null&&Oa(wt,K,-1/0,v.sortObjects)}Oa(D,K,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(q,$),nt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,nt&&Ft.addToRenderList(p,D),this.info.render.frame++,H===!0&&mt.beginShadows();let at=m.state.shadowsArray;At.render(at,D,K),H===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=p.opaque,j=p.transmissive;if(m.setupLights(),K.isArrayCamera){let wt=K.cameras;if(j.length>0)for(let Lt=0,Ot=wt.length;Lt<Ot;Lt++){let Bt=wt[Lt];Rh(ct,j,D,Bt)}nt&&Ft.render(D);for(let Lt=0,Ot=wt.length;Lt<Ot;Lt++){let Bt=wt[Lt];Ah(p,D,Bt,Bt.viewport)}}else j.length>0&&Rh(ct,j,D,K),nt&&Ft.render(D),Ah(p,D,K);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(v,D,K),ae.resetDefaultState(),M=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],H===!0&&mt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Oa(D,K,at,ct){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)at=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||z.intersectsSprite(D)){ct&&ut.setFromMatrixPosition(D.matrixWorld).applyMatrix4(X);let Lt=et.update(D),Ot=D.material;Ot.visible&&p.push(D,Lt,Ot,at,ut.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||z.intersectsObject(D))){let Lt=et.update(D),Ot=D.material;if(ct&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ut.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ut.copy(Lt.boundingSphere.center)),ut.applyMatrix4(D.matrixWorld).applyMatrix4(X)),Array.isArray(Ot)){let Bt=Lt.groups;for(let Kt=0,te=Bt.length;Kt<te;Kt++){let kt=Bt[Kt],he=Ot[kt.materialIndex];he&&he.visible&&p.push(D,Lt,he,at,ut.z,kt)}}else Ot.visible&&p.push(D,Lt,Ot,at,ut.z,null)}}let wt=D.children;for(let Lt=0,Ot=wt.length;Lt<Ot;Lt++)Oa(wt[Lt],K,at,ct)}function Ah(D,K,at,ct){let j=D.opaque,wt=D.transmissive,Lt=D.transparent;m.setupLightsView(at),H===!0&&mt.setGlobalState(v.clippingPlanes,at),ct&&ht.viewport(R.copy(ct)),j.length>0&&Pr(j,K,at),wt.length>0&&Pr(wt,K,at),Lt.length>0&&Pr(Lt,K,at),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Rh(D,K,at,ct){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ct.id]===void 0&&(m.state.transmissionRenderTarget[ct.id]=new Ye(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?bn:Xn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let wt=m.state.transmissionRenderTarget[ct.id],Lt=ct.viewport||R;wt.setSize(Lt.z,Lt.w);let Ot=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(L),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Ft.render(at);let Bt=v.toneMapping;v.toneMapping=si;let Kt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),m.setupLightsView(ct),H===!0&&mt.setGlobalState(v.clippingPlanes,ct),Pr(D,at,ct),I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let kt=0,he=K.length;kt<he;kt++){let ye=K[kt],ve=ye.object,je=ye.geometry,ue=ye.material,Vt=ye.group;if(ue.side===re&&ve.layers.test(ct.layers)){let Nn=ue.side;ue.side=Ge,ue.needsUpdate=!0,Ch(ve,at,ct,je,ue,Vt),ue.side=Nn,ue.needsUpdate=!0,te=!0}}te===!0&&(I.updateMultisampleRenderTarget(wt),I.updateRenderTargetMipmap(wt))}v.setRenderTarget(Ot),v.setClearColor(L,B),Kt!==void 0&&(ct.viewport=Kt),v.toneMapping=Bt}function Pr(D,K,at){let ct=K.isScene===!0?K.overrideMaterial:null;for(let j=0,wt=D.length;j<wt;j++){let Lt=D[j],Ot=Lt.object,Bt=Lt.geometry,Kt=ct===null?Lt.material:ct,te=Lt.group;Ot.layers.test(at.layers)&&Ch(Ot,K,at,Bt,Kt,te)}}function Ch(D,K,at,ct,j,wt){D.onBeforeRender(v,K,at,ct,j,wt),D.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(v,K,at,ct,D,wt),j.transparent===!0&&j.side===re&&j.forceSinglePass===!1?(j.side=Ge,j.needsUpdate=!0,v.renderBufferDirect(at,K,ct,j,D,wt),j.side=ri,j.needsUpdate=!0,v.renderBufferDirect(at,K,ct,j,D,wt),j.side=re):v.renderBufferDirect(at,K,ct,j,D,wt),D.onAfterRender(v,K,at,ct,j,wt)}function Lr(D,K,at){K.isScene!==!0&&(K=ot);let ct=lt.get(D),j=m.state.lights,wt=m.state.shadowsArray,Lt=j.state.version,Ot=ft.getParameters(D,j.state,wt,K,at),Bt=ft.getProgramCacheKey(Ot),Kt=ct.programs;ct.environment=D.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(D.isMeshStandardMaterial?V:A).get(D.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,Kt===void 0&&(D.addEventListener("dispose",Qt),Kt=new Map,ct.programs=Kt);let te=Kt.get(Bt);if(te!==void 0){if(ct.currentProgram===te&&ct.lightsStateVersion===Lt)return Ph(D,Ot),te}else Ot.uniforms=ft.getUniforms(D),D.onBeforeCompile(Ot,v),te=ft.acquireProgram(Ot,Bt),Kt.set(Bt,te),ct.uniforms=Ot.uniforms;let kt=ct.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(kt.clippingPlanes=mt.uniform),Ph(D,Ot),ct.needsLights=Pd(D),ct.lightsStateVersion=Lt,ct.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),ct.currentProgram=te,ct.uniformsList=null,te}function Ih(D){if(D.uniformsList===null){let K=D.currentProgram.getUniforms();D.uniformsList=hs.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Ph(D,K){let at=lt.get(D);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.batchingColor=K.batchingColor,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.instancingMorph=K.instancingMorph,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function Cd(D,K,at,ct,j){K.isScene!==!0&&(K=ot),I.resetTextureUnits();let wt=K.fog,Lt=ct.isMeshStandardMaterial?K.environment:null,Ot=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ss,Bt=(ct.isMeshStandardMaterial?V:A).get(ct.envMap||Lt),Kt=ct.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),kt=!!at.morphAttributes.position,he=!!at.morphAttributes.normal,ye=!!at.morphAttributes.color,ve=si;ct.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=v.toneMapping);let je=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=je!==void 0?je.length:0,Vt=lt.get(ct),Nn=m.state.lights;if(H===!0&&(J===!0||D!==w)){let ln=D===w&&ct.id===M;mt.setState(ct,D,ln)}let fe=!1;ct.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Nn.state.version||Vt.outputColorSpace!==Ot||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Bt||ct.fog===!0&&Vt.fog!==wt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Kt||Vt.vertexTangents!==te||Vt.morphTargets!==kt||Vt.morphNormals!==he||Vt.morphColors!==ye||Vt.toneMapping!==ve||Vt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Vt.__version=ct.version);let pn=Vt.currentProgram;fe===!0&&(pn=Lr(ct,K,j));let Bi=!1,en=!1,Us=!1,_e=pn.getUniforms(),Tn=Vt.uniforms;if(ht.useProgram(pn.program)&&(Bi=!0,en=!0,Us=!0),ct.id!==M&&(M=ct.id,en=!0),Bi||w!==D){ht.buffers.depth.getReversed()?(Q.copy(D.projectionMatrix),Cp(Q),Ip(Q),_e.setValue(F,"projectionMatrix",Q)):_e.setValue(F,"projectionMatrix",D.projectionMatrix),_e.setValue(F,"viewMatrix",D.matrixWorldInverse);let Zn=_e.map.cameraPosition;Zn!==void 0&&Zn.setValue(F,it.setFromMatrixPosition(D.matrixWorld)),bt.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&_e.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,en=!0,Us=!0)}if(j.isSkinnedMesh){_e.setOptional(F,j,"bindMatrix"),_e.setOptional(F,j,"bindMatrixInverse");let ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_e.setValue(F,"boneTexture",ln.boneTexture,I))}j.isBatchedMesh&&(_e.setOptional(F,j,"batchingTexture"),_e.setValue(F,"batchingTexture",j._matricesTexture,I),_e.setOptional(F,j,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",j._indirectTexture,I),_e.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",j._colorsTexture,I));let zs=at.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&Wt.update(j,at,pn),(en||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,_e.setValue(F,"receiveShadow",j.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Tn.envMap.value=Bt,Tn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(Tn.envMapIntensity.value=K.environmentIntensity),en&&(_e.setValue(F,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Id(Tn,Us),wt&&ct.fog===!0&&pt.refreshFogUniforms(Tn,wt),pt.refreshMaterialUniforms(Tn,ct,O,G,m.state.transmissionRenderTarget[D.id]),hs.upload(F,Ih(Vt),Tn,I)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(hs.upload(F,Ih(Vt),Tn,I),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&_e.setValue(F,"center",j.center),_e.setValue(F,"modelViewMatrix",j.modelViewMatrix),_e.setValue(F,"normalMatrix",j.normalMatrix),_e.setValue(F,"modelMatrix",j.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let ln=ct.uniformsGroups;for(let Zn=0,$n=ln.length;Zn<$n;Zn++){let Lh=ln[Zn];Y.update(Lh,pn),Y.bind(Lh,pn)}}return pn}function Id(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function Pd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,K,at){lt.get(D.texture).__webglTexture=K,lt.get(D.depthTexture).__webglTexture=at;let ct=lt.get(D);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=at===void 0,ct.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,K){let at=lt.get(D);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,at=0){T=D,S=K,E=at;let ct=!0,j=null,wt=!1,Lt=!1;if(D){let Bt=lt.get(D);if(Bt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(Bt.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(Bt.__hasExternalTextures)I.rebindTextures(D,lt.get(D.texture).__webglTexture,lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let kt=D.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&lt.has(kt)&&(D.width!==kt.image.width||D.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}let Kt=D.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);let te=lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(te[K])?j=te[K][at]:j=te[K],wt=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?j=lt.get(D).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[at]:j=te,R.copy(D.viewport),P.copy(D.scissor),U=D.scissorTest}else R.copy(W).multiplyScalar(O).floor(),P.copy(tt).multiplyScalar(O).floor(),U=Z;if(ht.bindFramebuffer(F.FRAMEBUFFER,j)&&ct&&ht.drawBuffers(D,j),ht.viewport(R),ht.scissor(P),ht.setScissorTest(U),wt){let Bt=lt.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt.__webglTexture,at)}else if(Lt){let Bt=lt.get(D.texture),Kt=K||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,at||0,Kt)}M=-1},this.readRenderTargetPixels=function(D,K,at,ct,j,wt,Lt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){ht.bindFramebuffer(F.FRAMEBUFFER,Ot);try{let Bt=D.texture,Kt=Bt.format,te=Bt.type;if(!bt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ct&&at>=0&&at<=D.height-j&&F.readPixels(K,at,ct,j,Yt.convert(Kt),Yt.convert(te),wt)}finally{let Bt=T!==null?lt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(D,K,at,ct,j,wt,Lt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){let Bt=D.texture,Kt=Bt.format,te=Bt.type;if(!bt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=D.width-ct&&at>=0&&at<=D.height-j){ht.bindFramebuffer(F.FRAMEBUFFER,Ot);let kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(K,at,ct,j,Yt.convert(Kt),Yt.convert(te),0);let he=T!==null?lt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(F.FRAMEBUFFER,he);let ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Rp(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.deleteBuffer(kt),F.deleteSync(ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,K=null,at=0){D.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,D=arguments[1]);let ct=Math.pow(2,-at),j=Math.floor(D.image.width*ct),wt=Math.floor(D.image.height*ct),Lt=K!==null?K.x:0,Ot=K!==null?K.y:0;I.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Lt,Ot,j,wt),ht.unbindTexture()},this.copyTextureToTexture=function(D,K,at=null,ct=null,j=0){D.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,D=arguments[1],K=arguments[2],j=arguments[3]||0,at=null);let wt,Lt,Ot,Bt,Kt,te,kt,he,ye,ve=D.isCompressedTexture?D.mipmaps[j]:D.image;at!==null?(wt=at.max.x-at.min.x,Lt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Bt=at.min.x,Kt=at.min.y,te=at.isBox3?at.min.z:0):(wt=ve.width,Lt=ve.height,Ot=ve.depth||1,Bt=0,Kt=0,te=0),ct!==null?(kt=ct.x,he=ct.y,ye=ct.z):(kt=0,he=0,ye=0);let je=Yt.convert(K.format),ue=Yt.convert(K.type),Vt;K.isData3DTexture?(I.setTexture3D(K,0),Vt=F.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(I.setTexture2DArray(K,0),Vt=F.TEXTURE_2D_ARRAY):(I.setTexture2D(K,0),Vt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);let Nn=F.getParameter(F.UNPACK_ROW_LENGTH),fe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pn=F.getParameter(F.UNPACK_SKIP_PIXELS),Bi=F.getParameter(F.UNPACK_SKIP_ROWS),en=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let Us=D.isDataArrayTexture||D.isData3DTexture,_e=K.isDataArrayTexture||K.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let Tn=lt.get(D),zs=lt.get(K),ln=lt.get(Tn.__renderTarget),Zn=lt.get(zs.__renderTarget);ht.bindFramebuffer(F.READ_FRAMEBUFFER,ln.__webglFramebuffer),ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let $n=0;$n<Ot;$n++)Us&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(D).__webglTexture,j,te+$n),D.isDepthTexture?(_e&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(K).__webglTexture,j,ye+$n),F.blitFramebuffer(Bt,Kt,wt,Lt,kt,he,wt,Lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):_e?F.copyTexSubImage3D(Vt,j,kt,he,ye+$n,Bt,Kt,wt,Lt):F.copyTexSubImage2D(Vt,j,kt,he,ye+$n,Bt,Kt,wt,Lt);ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(Vt,j,kt,he,ye,wt,Lt,Ot,je,ue,ve.data):K.isCompressedArrayTexture?F.compressedTexSubImage3D(Vt,j,kt,he,ye,wt,Lt,Ot,je,ve.data):F.texSubImage3D(Vt,j,kt,he,ye,wt,Lt,Ot,je,ue,ve):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,kt,he,wt,Lt,je,ue,ve.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,kt,he,ve.width,ve.height,je,ve.data):F.texSubImage2D(F.TEXTURE_2D,j,kt,he,wt,Lt,je,ue,ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Bi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,en),j===0&&K.generateMipmaps&&F.generateMipmap(Vt),ht.unbindTexture()},this.copyTextureToTexture3D=function(D,K,at=null,ct=null,j=0){return D.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,ct=arguments[1]||null,D=arguments[2],K=arguments[3],j=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,at,ct,j)},this.initRenderTarget=function(D){lt.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),ht.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,ht.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Ro=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Co=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Io=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xe=new k,nr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ir=class extends hn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ts,Hs=new k,es=new k,ns=new k,is=new It,Gs=new It,yf=new $t,to=new k,Vs=new k,eo=new k,Lu=new It,dl=new It,Du=new It,Po=class extends Ie{constructor(t=new ir){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Io(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new nr(n,3,0,!1)),ts.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),yf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;no(to.set(-.5,-.5,0),ns,o,es,s,r),no(Vs.set(.5,-.5,0),ns,o,es,s,r),no(eo.set(.5,.5,0),ns,o,es,s,r),Lu.set(0,0),dl.set(1,0),Du.set(1,1);let a=t.ray.intersectTriangle(to,Vs,eo,!1,Hs);if(a===null&&(no(Vs.set(-.5,.5,0),ns,o,es,s,r),dl.set(0,1),a=t.ray.intersectTriangle(to,eo,Vs,!1,Hs),a===null))return;let l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:ii.getInterpolation(Hs,to,Vs,eo,Lu,dl,Du,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function no(i,t,e,n,s,r){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*is.x-s*is.y,Gs.y=s*is.x+r*is.y):Gs.copy(is),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(yf)}var yc=class extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,u=rn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new $t,Nu=new $t,io=[],Uu=new qn,w1=new $t,Ws=new St,Xs=new Yn,Se=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,w1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Uu.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Xs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Nu.multiplyMatrices(n,ss),Ws.matrixWorld=Nu,Ws.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yc(new Float32Array(s*this.count),s,this.count,Yc,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var rr=class extends hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lo=new k,Do=new k,zu=new $t,qs=new tr,so=new Yn,pl=new k,Fu=new k,vc=class extends Ie{constructor(t=new se,e=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lo.fromBufferAttribute(e,s-1),Do.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lo.distanceTo(Do);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;zu.copy(s).invert(),qs.copy(t.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=c){let m=u.getX(y),_=u.getX(y+1),x=ro(this,t,qs,l,m,_);x&&e.push(x)}if(this.isLineLoop){let y=u.getX(g-1),p=u.getX(d),m=ro(this,t,qs,l,y,p);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=c){let m=ro(this,t,qs,l,y,y+1);m&&e.push(m)}if(this.isLineLoop){let y=ro(this,t,qs,l,g-1,d);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ro(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Lo.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,r),e.distanceSqToSegment(Lo,Do,pl,Fu)>n)return;pl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(pl);if(!(l<t.near||l>t.far))return{distance:l,point:Fu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ou=new k,Bu=new k,No=class extends vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ou.fromBufferAttribute(e,s),Bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ou.distanceTo(Bu);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var or=class extends hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ku=new $t,_c=new tr,oo=new Yn,ao=new k,Uo=class extends Ie{constructor(t=new se,e=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;ku.copy(s).invert(),_c.copy(t.ray).applyMatrix4(ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=c.getX(g);ao.fromBufferAttribute(h,p),Hu(ao,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,y=d;g<y;g++)ao.fromBufferAttribute(h,g),Hu(ao,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hu(i,t,e,n,s,r,o){let a=_c.distanceSqToPoint(i);if(a<e){let l=new k;_c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var De=class extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zo=class i extends se{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new k,f=new It,d=new k,g=new k,y=new k,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-p,d.z=m*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let _=0;_<=e;_++){let x=n+_*u*s,v=Math.sin(x),b=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*b,o.push(h.x,h.y,h.z),f.x=_/e,f.y=S/(t.length-1),a.push(f.x,f.y);let E=l[3*S+0]*v,T=l[3*S+1],M=l[3*S+0]*b;c.push(E,T,M)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let v=x+_*t.length,b=v,S=v+t.length,E=v+t.length+1,T=v+1;r.push(b,S,T),r.push(E,T,S)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ar=class i extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new k,u=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ie=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,y=[],p=n/2,m=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function _(){let v=new k,b=new k,S=0,E=(e-t)/n;for(let T=0;T<=r;T++){let M=[],w=T/r,R=w*(e-t)+t;for(let P=0;P<=s;P++){let U=P/s,L=U*l+a,B=Math.sin(L),N=Math.cos(L);b.x=R*B,b.y=-w*n+p,b.z=R*N,h.push(b.x,b.y,b.z),v.set(B,E,N).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-w),M.push(g++)}y.push(M)}for(let T=0;T<s;T++)for(let M=0;M<r;M++){let w=y[M][T],R=y[M+1][T],P=y[M+1][T+1],U=y[M][T+1];(t>0||M!==0)&&(u.push(w,R,U),S+=3),(e>0||M!==r-1)&&(u.push(R,P,U),S+=3)}c.addGroup(m,S,0),m+=S}function x(v){let b=g,S=new It,E=new k,T=0,M=v===!0?t:e,w=v===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,p*w,0),f.push(0,w,0),d.push(.5,.5),g++;let R=g;for(let P=0;P<=s;P++){let L=P/s*l+a,B=Math.cos(L),N=Math.sin(L);E.x=M*N,E.y=p*w,E.z=M*B,h.push(E.x,E.y,E.z),f.push(0,w,0),S.x=B*.5+.5,S.y=N*.5*w+.5,d.push(S.x,S.y),g++}for(let P=0;P<s;P++){let U=b+P,L=R+P;v===!0?u.push(L,L+1,U):u.push(L+1,L,U),T+=3}c.addGroup(m,T,v===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fo=class i extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mc=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new k,v=new k,b=new k;for(let S=0;S<e.length;S+=3)d(e[S+0],x),d(e[S+1],v),d(e[S+2],b),l(x,v,b,_)}function l(_,x,v,b){let S=b+1,E=[];for(let T=0;T<=S;T++){E[T]=[];let M=_.clone().lerp(v,T/S),w=x.clone().lerp(v,T/S),R=S-T;for(let P=0;P<=R;P++)P===0&&T===S?E[T][P]=M:E[T][P]=M.clone().lerp(w,P/R)}for(let T=0;T<S;T++)for(let M=0;M<2*(S-T)-1;M++){let w=Math.floor(M/2);M%2===0?(f(E[T][w+1]),f(E[T+1][w]),f(E[T][w])):(f(E[T][w+1]),f(E[T+1][w+1]),f(E[T+1][w]))}}function c(_){let x=new k;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){let _=new k;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=p(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let x=o[_+0],v=o[_+2],b=o[_+4],S=Math.max(x,v,b),E=Math.min(x,v,b);S>.9&&E<.1&&(x<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let v=_*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){let _=new k,x=new k,v=new k,b=new k,S=new It,E=new It,T=new It;for(let M=0,w=0;M<r.length;M+=9,w+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),S.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),T.set(o[w+4],o[w+5]),b.copy(_).add(x).add(v).divideScalar(3);let R=p(b);y(S,w+0,_,R),y(E,w+2,x,R),y(T,w+4,v,R)}}function y(_,x,v,b){b<0&&_.x===1&&(o[x]=_.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var S1={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=C1(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return lr(r,o,e,a,l,d,0),o}};function vf(i,t,e,n,s){let r,o;if(s===k1(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Gu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Gu(r,i[r],i[r+1],o);return o&&Jo(o,o.next)&&(hr(o),o=o.next),o}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Jo(e,e.next)||we(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&N1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?T1(i,n,s,r):E1(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=A1(Ri(i),t,e),lr(i,t,e,n,s,r,2)):o===2&&R1(i,t,e,n,s,r):lr(Ri(i),t,e,n,s,r,1);break}}}function E1(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&os(s,a,r,l,o,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T1(i,t,e,n){let s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,y=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=bc(d,g,t,e,n),_=bc(y,p,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=m&&v&&v.z<=_;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&os(a,u,l,h,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&os(a,u,l,h,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&os(a,u,l,h,c,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&os(a,u,l,h,c,f,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function A1(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Jo(s,r)&&_f(s,n,n.next,r)&&cr(s,r)&&cr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function R1(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F1(o,a)){let l=Mf(o,a);o=Ri(o,o.next),l=Ri(l,l.next),lr(o,t,e,n,s,r,0),lr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function C1(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=vf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(z1(c));for(s.sort(I1),r=0;r<s.length;r++)e=P1(s[r],e);return e}function I1(i,t){return i.x-t.x}function P1(i,t){let e=L1(i,t);if(!e)return t;let n=Mf(e,i);return Ri(n,n.next),Ri(e,e.next)}function L1(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),cr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&D1(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function D1(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function N1(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,U1(s)}function U1(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function z1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function os(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function F1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!O1(i,t)&&(cr(i,t)&&cr(t,i)&&B1(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Jo(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Jo(i,t){return i.x===t.x&&i.y===t.y}function _f(i,t,e,n){let s=co(we(i,t,e)),r=co(we(i,t,n)),o=co(we(e,n,i)),a=co(we(e,n,t));return!!(s!==r&&o!==a||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function O1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_f(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function cr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function B1(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mf(i,t){let e=new wc(i.i,i.x,i.y),n=new wc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gu(i,t,e,n){let s=new wc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k1(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Vu(t),Wu(n,t);let o=t.length;e.forEach(Vu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wu(n,e[l]);let a=S1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ur=class i extends Mc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var fn=class i extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new k,f=new k,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let _=[],x=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let S=b/e;h.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(S+v,1-x),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let x=u[m][_+1],v=u[m][_],b=u[m+1][_],S=u[m+1][_+1];(m!==0||o>0)&&d.push(x,v,S),(m!==n-1||l<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pn=class i extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new k,h=new k,f=new k;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let y=g/s*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(y),h.y=(t+e*Math.cos(p))*Math.sin(y),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(y,p,_),o.push(p,m,_)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Oo=class extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ce=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ci=class extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Ms=class extends hn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gt=class extends hn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ho(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function H1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fh:r=t,a=2*e-n;break;case Oh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fh:o=t,l=2*n-e;break;case Oh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,_=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*y+.5*g,v=d*p-d*y;for(let b=0;b!==a;++b)r[b]=m*o[u+b]+_*o[c+b]+x*o[l+b]+v*o[h+b];return r}},Ec=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Tc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ho(e,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ho(t.times,Array),values:ho(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case ec:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&H1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ec;var Ii=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=xo;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends Mn{};Ac.prototype.ValueTypeName="color";var Rc=class extends Mn{};Rc.prototype.ValueTypeName="number";var Cc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ae.slerpFlat(r,0,o,c-a,o,c,l);return r}},Bo=class extends Mn{InterpolantFactoryMethodLinear(t){return new Cc(this.times,this.values,this.getValueSize(),t)}};Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=xo;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends Mn{};Ic.prototype.ValueTypeName="vector";var Pc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},G1=new Pc,Lc=class{constructor(t){this.manager=t!==void 0?t:G1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ko=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ml=new $t,Xu=new k,qu=new k,fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dc=class extends fr{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=gs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ho=class extends ws{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Yu=new $t,Ys=new k,gl=new k,Nc=class extends fr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),gl.copy(n.position),gl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gl),n.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu)}},Go=class extends ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Uc=class extends fr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zu(){return performance.now()}var Qc="\\[\\]\\.:\\/",V1=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",W1="[^"+Qc.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",th),q1=/(WCOD+)?/.source.replace("WCOD",W1),Y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Z1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),$1=new RegExp("^"+X1+q1+Y1+Z1+"$"),J1=["material","materials","bones","map"],zc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(V1,"")}static parseTrackName(t){let e=$1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);J1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=zc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);var Ts=new Map;window.BDS_DATA=(i,t,e)=>{let n=Ts.get(i);n&&(Ts.delete(i),n.resolve({fmt:t,b64:e}))};function K1(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function j1(i){let t=new DecompressionStream("gzip"),e=new Blob([i]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function Q1(i,t){return new Promise((e,n)=>{Ts.set(i,{resolve:e});let s=document.createElement("script");s.src=t,s.async=!0,s.onerror=()=>{Ts.delete(i),n(new Error("Impossibile caricare "+t))},s.onload=()=>{s.remove(),setTimeout(()=>{Ts.has(i)&&(Ts.delete(i),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(s)})}async function Li(i,t){let{fmt:e,b64:n}=await Q1(i,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let s=await j1(K1(n));return e==="bin"?s:JSON.parse(new TextDecoder().decode(s))}var Ko=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var jo=class{constructor(t,e,n){let s=t.height;this.nx=s.nx,this.nz=s.nz,this.step=s.step,this.x0=s.x0,this.z0=s.z0;let r=new Uint16Array(e);this.h=new Float32Array(r.length);for(let c=0;c<r.length;c++)this.h[c]=r[c]*s.scale;this.proj=t.proj;let o=t.landcover;this.lc=o,this.lcW=o.w,this.lcH=o.h,this.mpp=o.mpp;let a=document.createElement("canvas");a.width=o.w,a.height=o.h;let l=a.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0),this.lcPixels=l.getImageData(0,0,o.w,o.h).data,this.lcCanvas=a,this.texture=new De(a),this.texture.colorSpace=Me,this.texture.anisotropy=8,this.texture.wrapS=this.texture.wrapT=vn,this.classCache=new Map,this.palette=Object.entries(o.palette).map(([c,u])=>({k:c,c:u})),this.palette.push({k:"default",c:o.default})}height(t,e){let n=(t-this.x0)/this.step,s=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(s);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=s-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,u=this.h;if(a+l<=1)return u[c]+(u[c+1]-u[c])*a+(u[c+this.nx]-u[c])*l;let h=u[c+this.nx+1];return h+(u[c+this.nx]-h)*(1-a)+(u[c+1]-h)*(1-l)}inside(t,e){return t>=this.x0&&e>=this.z0&&t<=this.x0+(this.nx-1)*this.step&&e<=this.z0+(this.nz-1)*this.step}landClass(t,e){let n=Math.floor((t-this.proj.xmin)/this.mpp),s=Math.floor((e-this.proj.zmin)/this.mpp);if(n<0||s<0||n>=this.lcW||s>=this.lcH)return"default";let r=(s*this.lcW+n)*4,o=this.lcPixels,a=o[r]<<16|o[r+1]<<8|o[r+2],l=this.classCache.get(a);if(l===void 0){let c=1e9;for(let u of this.palette){let h=(u.c[0]-o[r])**2+(u.c[1]-o[r+1])**2+(u.c[2]-o[r+2])**2;h<c&&(c=h,l=u.k)}this.classCache.set(a,l)}return l}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t){let e=new Gt({map:this.texture}),n=this.proj;return e.onBeforeCompile=s=>{s.uniforms.detailMap={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D detailMap;`).replace("#include <map_fragment>",`#include <map_fragment>
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);`)},e}buildChunk(t,e,n,s,r,o=0){let a=Math.round(n/s)+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),u=this.proj.xmax-this.proj.xmin,h=this.proj.zmax-this.proj.zmin;for(let p=0;p<a;p++)for(let m=0;m<a;m++){let _=t+m*s,x=e+p*s,v=p*a+m;l[v*3]=_,l[v*3+1]=this.height(_,x)-o,l[v*3+2]=x,c[v*2]=(_-this.proj.xmin)/u,c[v*2+1]=1-(x-this.proj.zmin)/h}let f=new Uint32Array((a-1)*(a-1)*6),d=0;for(let p=0;p<a-1;p++)for(let m=0;m<a-1;m++){let _=p*a+m,x=_+1,v=_+a,b=v+1;f[d++]=_,f[d++]=v,f[d++]=x,f[d++]=x,f[d++]=v,f[d++]=b}let g=new se;g.setAttribute("position",new ge(l,3)),g.setAttribute("uv",new ge(c,2)),g.setIndex(new ge(f,1)),g.computeVertexNormals();let y=new St(g,r);return y.receiveShadow=!0,y}};var oe=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,s=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(s,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,s){this.i.push(t,e,n,t,n,s)}get empty(){return this.i.length===0}build(){let t=new se;return t.setAttribute("position",new Zt(this.p,3)),this.c&&t.setAttribute("color",new Zt(this.c,3)),this.u&&t.setAttribute("uv",new Zt(this.u,2)),t.setIndex(this.n>65535?new ys(this.i,1):new xs(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new St(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Te(i){return i=i^61^i>>>16,i=i+(i<<3)|0,i^=i>>>4,i=Math.imul(i,668265261),i^=i>>>15,(i>>>0)/4294967296}function bf(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s][0],a=e[s][1],l=e[r][0],c=e[r][1];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Di(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new De(s);return r.colorSpace=Me,n&&(r.wrapS=r.wrapT=ai),r.anisotropy=8,r}function wf(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=16,r=new Float32Array(s*s);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let u=l/i*s,h=c/i*s,f=Math.floor(u),d=Math.floor(h),g=u-f,y=h-d,p=(x,v)=>r[(v+s)%s*s+(x+s)%s],m=g*g*(3-2*g),_=y*y*(3-2*y);return(p(f,d)*(1-m)+p(f+1,d)*m)*(1-_)+(p(f,d+1)*(1-m)+p(f+1,d+1)*m)*_};for(let l=0;l<i;l++)for(let c=0;c<i;c++){let u=(l*i+c)*4;n.data[u]=140+Math.random()*115*.9,n.data[u+1]=o(c,l)*255,n.data[u+2]=128,n.data[u+3]=255}e.putImageData(n,0,0);let a=new De(t);return a.wrapS=a.wrapT=ai,a.anisotropy=8,a}var Sf=4,Qo=null;function Ni(){if(Qo)return Qo;let i=Di(256,256,t=>{t.clearRect(0,0,256,256);let e="#ffffff";t.fillStyle=e,t.fillRect(0,6,256,4),t.fillRect(0,54,256,4);for(let n=0;n<10;n++){let s=n*25.6+11;t.fillRect(s,2,3.5,60),t.beginPath(),t.moveTo(s-2,4),t.lineTo(s+1.75,0),t.lineTo(s+5.5,4),t.fill()}t.strokeStyle=e,t.lineWidth=1.6;for(let n=-8;n<24;n++)t.beginPath(),t.moveTo(n*16,64),t.lineTo(n*16+64,128),t.stroke(),t.beginPath(),t.moveTo(n*16+64,64),t.lineTo(n*16,128),t.stroke();t.fillRect(0,65,256,3),t.fillRect(0,124,256,3),t.fillStyle="#ffffff",t.fillRect(0,140,256,12),t.fillRect(0,166,256,12);for(let n of[6,134])t.fillRect(n,130,14,62);t.fillRect(0,194,256,5),t.fillRect(0,250,256,6),t.fillRect(0,214,256,3);for(let n=0;n<16;n++)t.fillRect(n*16+6,194,3,62);t.lineWidth=2;for(let n=0;n<8;n++)t.beginPath(),t.arc(n*32+16,214,9,Math.PI,0),t.stroke();t.fillRect(0,192,4,64),t.fillRect(252,192,4,64)});return i.wrapT=vn,i.anisotropy=4,Qo={grille:new Gt({map:i,vertexColors:!0,alphaTest:.45,side:re,transparent:!1}),solid:new Gt({vertexColors:!0})},Qo}var ty=i=>[1-(i+1)/Sf+.004,1-i/Sf-.004];function mr(i,t,e,n,s,r,o,a,l,c,u,h,f=0){let d=Math.hypot(s-t,r-e),[g,y]=ty(c),p=f+d/u,m=i.v(t,n+a,e,h[0],h[1],h[2],f,g),_=i.v(s,o+a,r,h[0],h[1],h[2],p,g),x=i.v(s,o+l,r,h[0],h[1],h[2],p,y),v=i.v(t,n+l,e,h[0],h[1],h[2],f,y);return i.quad(m,_,x,v),p}function on(i,t,e,n,s,r,o,a,l,c){let u=s/2,h=o/2,f=[a*u,l*u],d=[-l*h,a*h],g=(m,_,x)=>[t+f[0]*m+d[0]*x,e+_*r,n+f[1]*m+d[1]*x],y=[1,.62,.8,.8,.72,.72];[[g(-1,1,-1),g(-1,1,1),g(1,1,1),g(1,1,-1)],[g(-1,0,-1),g(1,0,-1),g(1,0,1),g(-1,0,1)],[g(-1,0,1),g(1,0,1),g(1,1,1),g(-1,1,1)],[g(1,0,-1),g(-1,0,-1),g(-1,1,-1),g(1,1,-1)],[g(1,0,1),g(1,0,-1),g(1,1,-1),g(1,1,1)],[g(-1,0,-1),g(-1,0,1),g(-1,1,1),g(-1,1,-1)]].forEach((m,_)=>{let x=y[_],v=m.map(b=>i.v(b[0],b[1],b[2],c[0]*x,c[1]*x,c[2]*x));i.quad(v[0],v[1],v[2],v[3])})}var gr=[.17,.19,.18],ey=[.13,.22,.16],ny=[.45,.32,.2],iy=[.62,.64,.62],ea=[[.86,.8,.66],[.78,.7,.55],[.72,.72,.7],[.82,.62,.48],[.62,.36,.28]];function Ef(i,t,e,n,s,r,o){let a=Te(o)<.6?gr:ey,l=ea[Math.floor(Te(o+7)*ea.length)],c=n===4?Math.min(.6,s*.35):0,u=0;for(let h=0;h<e.length-1;h++){let[f,d]=e[h],[g,y]=e[h+1],p=Math.hypot(g-f,y-d);if(p<.2)continue;let m=(g-f)/p,_=(y-d)/p,x=Math.max(1,Math.ceil(p/6));for(let v=0;v<x;v++){let b=f+(g-f)*v/x,S=d+(y-d)*v/x,E=f+(g-f)*(v+1)/x,T=d+(y-d)*(v+1)/x,M=r.height(b,S),w=r.height(E,T);if(n===4){let U=p/x,L=Math.min(M,w);on(i,(b+E)/2,L-.3,(S+T)/2,U+.02,c+.3+Math.abs(w-M)*.5,.28,m,_,l),on(i,(b+E)/2,Math.max(M,w)+c-.02,(S+T)/2,U+.04,.06,.34,m,_,[.74,.73,.7])}u=mr(t,b,S,M,E,T,w,c,s,n===5?1:n===6?2:0,n===6?5:1.2,n===6?ny:n===5?iy:a,u)}if(n===5||n===7){let v=Math.max(1,Math.round(p/2.5));for(let b=0;b<=v;b++){let S=f+(g-f)*b/v,E=d+(y-d)*b/v;on(i,S,r.height(S,E)-.2,E,.06,s+.25,.06,m,_,n===5?[.36,.4,.36]:a)}}}}var ta=(i,t)=>Math.atan2(-t,i),na=class{constructor(t,e,n){this.R=t,this.T=e,this.col=n,this.dyn=[]}baseY(t,e){let n=this.R.surfaceAt(t,e,1e9);return n&&n.road?n.h:this.T.height(t,e)+.02}leafGeo(t,e,n){let s=new oe(!0,!0);return mr(s,0,0,0,t,0,0,.08,e,n===4?1:3,n===3?1.1:1.6,gr),s.build()}build(t,e){let n=e&&e.gt;if(!n||!n.length)return null;let s=Ni(),r=new oe(!0,!1),o=new oe(!0,!0),a=new jt;for(let l=0;l<n.length;l+=6){let c=n[l],u=n[l+1]/10,h=n[l+2]/10,f=n[l+3]/1800*Math.PI,d=n[l+4]/10,g=n[l+5],y=Math.sin(f),p=Math.cos(f),m=p,_=-y,x=this.baseY(u,h),v=Math.round(u*7+h*13),b=u-y*d/2,S=h-p*d/2,E=u+y*d/2,T=h+p*d/2,M=c===3?1.25:1.8,w=ea[Math.floor(Te(v)*ea.length)];if(c<=1||c===3){let P=c===3?.3:.42;for(let U of[-1,1]){let L=u+y*(d/2+P/2)*U,B=h+p*(d/2+P/2)*U;on(r,L,x-.3,B,P,M+.6,P,y,p,w),on(r,L,x+M+.3,B,P+.08,.08,P+.08,y,p,[.7,.69,.66])}}else if(c===2)on(r,b-y*.25,x,S-p*.25,.38,1.05,.38,y,p,[.92,.92,.9]),on(r,b-y*.25,x+.75,S-p*.25,.4,.12,.4,y,p,[.8,.1,.08]),on(r,E,x,T,.1,.85,.1,y,p,[.85,.85,.85]);else for(let[P,U]of[[b,S],[E,T]])on(r,P,x,U,.12,.9,.12,y,p,[.85,.2,.15]);if(g===2){this.addDynamic(a,t,c,u,x,h,y,p,d,M);continue}let R=g===1;if(R&&this.col.addPolygon(t,Float32Array.from([b-m*.2,S-_*.2,E-m*.2,T-_*.2,E+m*.2,T+_*.2,b+m*.2,S+_*.2])),c===0){let P=d>2.6,U=P?d/2:d,L=P?[[b,S,y,p],[E,T,-y,-p]]:[[b,S,y,p]];for(let[B,N,G,O]of L){let q=R?G:m,$=R?O:_;mr(o,B,N,x,B+q*U,N+$*U,x,.08,M,3,1.6,gr)}}else if(c===1){let P=R?0:d;mr(o,b+y*P+m*.18,S+p*P+_*.18,x,E+y*P+m*.18,T+p*P+_*.18,x,.08,M,3,1.6,gr)}else if(c===3){let P=R?0:1.2,U=y*Math.cos(P)+m*Math.sin(P),L=p*Math.cos(P)+_*Math.sin(P);mr(o,b,S,x,b+U*d,S+L*d,x,.06,M,3,1.1,gr)}else if(c===2)this.boom(r,b,S,x,y,p,d,R?0:1.45);else if(c===4&&R)for(let U=0;U<8;U++){let L=U/8,B=(U+1)/8,N=q=>.3*4*q*(1-q),G=b+(E-b)*(L+B)/2,O=S+(T-S)*(L+B)/2;on(r,G,x+.8-N((L+B)/2),O,d/8,.04,.04,y,p,U%2?[.85,.15,.1]:[.95,.95,.95])}}if(r.empty||a.add(r.mesh(s.solid,!0)),!o.empty){let l=o.mesh(s.grille,!0);l.customDepthMaterial=this.depthMat(),a.add(l)}return a.userData.dispose=()=>{this.dyn=this.dyn.filter(l=>l.tile!==t?!0:(l.colObj&&this.col.remove(l.colObj),!1))},a}depthMat(){return this._depth||(this._depth=new Ai({depthPacking:pr,map:Ni().grille.map,alphaTest:.45,side:re})),this._depth}boom(t,e,n,s,r,o,a,l){let c=Math.max(2,Math.round(a/.5));for(let u=0;u<c;u++){let h=u%2?[.8,.08,.06]:[.95,.95,.95],f=(u+.5)/c*a;l>.7?on(t,e,s+.95+u/c*a,n,.09,a/c+.005,.06,r,o,h):on(t,e+r*f,s+.905,n+o*f,a/c+.005,.09,.06,r,o,h)}}addDynamic(t,e,n,s,r,o,a,l,c,u){let h=l,f=-a,d=s-a*c/2,g=o-l*c/2,y=s+a*c/2,p=o+l*c/2,m={tile:e,kind:n,x:s,z:o,w:c,open:0,target:0,hold:0,parts:[],colObj:null,ring:Float32Array.from([d-h*.2,g-f*.2,y-h*.2,p-f*.2,y+h*.2,p+f*.2,d+h*.2,g+f*.2])},_=Ni();if(n===2||n===4){let x=new oe(!0,!1),v=Math.max(2,Math.round(c/.5));for(let E=0;E<v;E++)on(x,(E+.5)/v*c,-.045,0,c/v+.005,.09,.06,1,0,E%2?[.8,.08,.06]:[.95,.95,.95]);let b=new jt,S=x.mesh(_.solid,!0);b.position.set(d,r+.95,g),b.rotation.y=ta(a,l),b.add(S),t.add(b),m.parts.push({obj:S,apply:E=>{S.rotation.z=E*1.45}})}else if(n===1){let x=new St(this.leafGeo(c,u,n),_.grille);x.castShadow=!0,x.customDepthMaterial=this.depthMat(),x.rotation.y=ta(a,l),t.add(x),m.parts.push({obj:x,apply:v=>{x.position.set(d+a*c*v+h*.18,r,g+l*c*v+f*.18)}})}else{let x=c>2.6,v=x?c/2:c,b=this.leafGeo(v,u,n),S=x?[[d,g,a,l],[y,p,-a,-l]]:[[d,g,a,l]];for(let[E,T,M,w]of S){let R=new St(b,_.grille);R.castShadow=!0,R.customDepthMaterial=this.depthMat(),R.position.set(E,r,T),t.add(R);let P=ta(M,w),U=ta(h,f);for(;U-P>Math.PI;)U-=2*Math.PI;for(;U-P<-Math.PI;)U+=2*Math.PI;m.parts.push({obj:R,apply:L=>{R.rotation.y=P+(U-P)*L}})}}for(let x of m.parts)x.apply(0);m.colObj=this.col.addPolygon(e,m.ring),this.dyn.push(m)}update(t,e){for(let n of this.dyn){let s=!1;for(let a of e)if(Math.abs(a.x-n.x)<14&&Math.abs(a.z-n.z)<14&&Math.hypot(a.x-n.x,a.z-n.z)<11+n.w/2){s=!0;break}if(s?n.hold=3:n.hold-=t,n.target=n.hold>0?1:0,n.open===n.target)continue;let r=n.kind===2||n.kind===4?.9:.45;n.open=n.target>n.open?Math.min(1,n.open+t*r):Math.max(0,n.open-t*r);for(let a of n.parts)a.apply(n.open);let o=n.open<.8;o&&!n.colObj?n.colObj=this.col.addPolygon(n.tile,n.ring):!o&&n.colObj&&(this.col.remove(n.colObj),n.colObj=null)}}};var Ht={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},Nt={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256,AISLE:512},Jt={GATE:14,SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},sy=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],ia=.18,ui=32,ry=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],oy=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],Tf=1.6,ay=.13,Af={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function ly(i){let t=Af[i];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var sa=class{constructor(t,e,n){this.terrain=e,this.names=t.names;let s=n.proj;this.xmin=s.xmin,this.zmin=s.zmin,this.xmax=s.xmax,this.zmax=s.zmax,this.tileSize=n.tile;let r=t.wayHead||8,o=t.nodes.length/2,a=new Array(o),l=new Array(o),c=new Array(o).fill(0),u=0,h=0;for(let p=0;p<o;p++)u+=t.nodes[p*2],h+=t.nodes[p*2+1],a[p]=u/10,l[p]=h/10;for(let p=0;p<t.dh.length;p+=2)c[t.dh[p]]=t.dh[p+1]/10;this.ways=t.ways.map(p=>{let m=r>8,_={name:this.names[p[0]],ref:this.names[p[1]],cls:p[2],flags:p[3],lanes:p[4],speed:p[5],layer:p[6],widthTag:p[7]/10,surf:m?p[8]:0,sw:m?p[9]:0,lit:m?p[10]:0,lf:m?p[11]:0,lb:m?p[12]:0,turnF:m?this.names[p[13]]:"",turnB:m?this.names[p[14]]:"",dest:m?this.names[p[15]]:"",nodes:p.slice(r)};return _.oneway=!!(_.flags&Nt.ONEWAY),_.drivable=!(_.flags&Nt.NOCAR),this.layout(_),_}),this.smooth(a,l,c),this.fixRoundabouts(a,l);let f=a.length;this.nx=Float32Array.from(a),this.nz=Float32Array.from(l),this.dh=Float32Array.from(c),this.nodeCount=f,this.ntag=new Uint8Array(f),this.ndir=new Uint8Array(f);let d=r>8?3:2;for(let p=0;p<t.ntags.length;p+=d)this.ntag[t.ntags[p]]=t.ntags[p+1],d===3&&(this.ndir[t.ntags[p]]=t.ntags[p+2]);this.junctionNames=new Map;for(let p=0;p<(t.mj||[]).length;p+=3)this.junctionNames.set(t.mj[p],{name:this.names[t.mj[p+1]],ref:this.names[t.mj[p+2]]});for(let p of this.ways){p.nodes=Int32Array.from(p.nodes);let m=p.nodes.length;p.cum=new Float32Array(m);for(let _=1;_<m;_++){let x=p.nodes[_-1],v=p.nodes[_];p.cum[_]=p.cum[_-1]+Math.hypot(this.nx[v]-this.nx[x],this.nz[v]-this.nz[x])}if(p.len=p.cum[m-1],p.abs=!!(p.flags&(Nt.BRIDGE|Nt.TUNNEL)),p.abs){let _=p.nodes[0],x=p.nodes[m-1];p.h0=e.height(this.nx[_],this.nz[_])+this.dh[_],p.h1=e.height(this.nx[x],this.nz[x])+this.dh[x]}}for(let p of this.ways){if(p.speed>0){p.limit=p.speed,p.limitMapped=!0;continue}let m=this.pointAt(p,p.len/2),_=e.isUrban(m[0],m[1]),x=p.cls,v;x===0?v=p.flags&Nt.LINK?80:130:x===1?v=p.flags&Nt.LINK?60:_?70:110:x<=4?v=p.flags&Nt.LINK||_?50:90:x===5?v=_?50:70:x===6?v=50:v=30,p.flags&Nt.ROUNDABOUT&&(v=Math.min(v,50)),p.limit=v,p.limitMapped=!1}let g=new Int32Array(f+1);this.ways.forEach(p=>{for(let m of p.nodes)g[m+1]++});for(let p=0;p<f;p++)g[p+1]+=g[p];this.adjStart=g,this.adjWay=new Int32Array(g[f]),this.adjPos=new Int32Array(g[f]);let y=g.slice(0,f);this.ways.forEach((p,m)=>{for(let _=0;_<p.nodes.length;_++){let x=p.nodes[_],v=y[x]++;this.adjWay[v]=m,this.adjPos[v]=_}}),this.degree=new Uint8Array(f),this.degMain=new Uint8Array(f),this.w1=new Float32Array(f),this.w2=new Float32Array(f),this.m1=new Float32Array(f),this.m2=new Float32Array(f),this.onRb=new Uint8Array(f),this.ways.forEach(p=>{let m=p.cls<=Ht.LIVING&&p.drivable;for(let _=0;_<p.nodes.length;_++){let x=p.nodes[_],v=(_>0?1:0)+(_<p.nodes.length-1?1:0);this.degree[x]+=v,m&&(this.degMain[x]+=v),p.width>this.w1[x]?(this.w2[x]=this.w1[x],this.w1[x]=p.width):p.width>this.w2[x]&&(this.w2[x]=p.width),m&&(p.width>this.m1[x]?(this.m2[x]=this.m1[x],this.m1[x]=p.width):p.width>this.m2[x]&&(this.m2[x]=p.width)),p.flags&Nt.ROUNDABOUT&&(this.onRb[x]=1)}}),this.grid=new Map,this.tileSegs=new Map,this.ways.forEach((p,m)=>{let _=p.width/2+1;for(let x=0;x<p.nodes.length-1;x++){let v=p.nodes[x],b=p.nodes[x+1],S=this.nx[v],E=this.nz[v],T=this.nx[b],M=this.nz[b],w=m*16384+x,R=Math.floor((Math.min(S,T)-_-this.xmin)/ui),P=Math.floor((Math.max(S,T)+_-this.xmin)/ui),U=Math.floor((Math.min(E,M)-_-this.zmin)/ui),L=Math.floor((Math.max(E,M)+_-this.zmin)/ui);for(let G=U;G<=L;G++)for(let O=R;O<=P;O++){let q=G*4096+O,$=this.grid.get(q);$||this.grid.set(q,$=[]),$.push(w)}let B=this.tileKey((S+T)/2,(E+M)/2),N=this.tileSegs.get(B);N||this.tileSegs.set(B,N=[]),N.push(w)}}),this.rails=t.rails.map(p=>({p:p.p,bridge:p.b,tunnel:p.t,name:p.n})),this.tileRails=new Map,this.rails.forEach((p,m)=>{for(let _=0;_<p.p.length-1;_++){let x=this.tileKey((p.p[_][0]+p.p[_+1][0])/2,(p.p[_][1]+p.p[_+1][1])/2),v=this.tileRails.get(x);v||this.tileRails.set(x,v=[]),v.push(m*16384+_)}if(p.bridge){let _=p.p[0],x=p.p[p.p.length-1];p.h0=e.height(_[0],_[1]),p.h1=e.height(x[0],x[1]),p.cum=[0];for(let v=1;v<p.p.length;v++)p.cum.push(p.cum[v-1]+Math.hypot(p.p[v][0]-p.p[v-1][0],p.p[v][1]-p.p[v-1][1]))}}),this.findRoundabouts(),this.buildStreetIndex(n)}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=ry[e],s,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&Nt.LINK)?2:1:2);t.oneway?(s=o,r=0):t.lf||t.lb?(s=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-s)):o<=1?(s=.5,r=.5):(s=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(s+r))):e===Ht.TRACK?a=3.2:e===Ht.SERVICE?a=t.flags&Nt.AISLE?t.oneway?4.5:5.5:t.oneway?3.5:4.6:e===Ht.PEDESTRIAN?a=6:(t.flags&Nt.ROUNDABOUT&&!t.lanes&&(s=e<=3?1.6:1.4),a=(s+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&s===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(s+r)*n>a&&(n=a/(s+r)),t.width=a,t.lw=n,t.nF=s,t.nB=r,t.sh=(a-(s+r)*n)/2,t.cOff=-a/2+t.sh+r*n}fixRoundabouts(t,e){let n=new Map,s=l=>{for(;n.get(l)!==l;)n.set(l,n.get(n.get(l))),l=n.get(l);return l},r=this.ways.filter(l=>l.flags&Nt.ROUNDABOUT);for(let l of r){for(let c of l.nodes)n.has(c)||n.set(c,c);for(let c=1;c<l.nodes.length;c++){let u=s(l.nodes[c-1]),h=s(l.nodes[c]);u!==h&&n.set(u,h)}}let o=new Map;for(let l of n.keys()){let c=s(l);o.has(c)||o.set(c,[]),o.get(c).push(l)}let a=new Map;for(let[l,c]of o){let u=0,h=0;for(let d of c)u+=t[d],h+=e[d];u/=c.length,h/=c.length;let f=0;for(let d of c)f+=Math.hypot(t[d]-u,e[d]-h);f/=c.length,a.set(l,Math.max(4.5,Math.min(9,f*.5,2*(f-2))))}for(let l of r){if(l.widthTag>2)continue;let c=a.get(s(l.nodes[0]));if(!c)continue;let u=l.lanes>=2&&c>=7.5?2:1;l.width=c,l.nF=u,l.nB=0,l.sh=.4,l.lw=(c-.8)/u,l.cOff=-c/2+l.sh}}coveredBy(t,e,n,s=0,r=!0){let o=this.ways[t],a=u=>u.flags&Nt.ROUNDABOUT?-1:u.cls*2+(u.flags&Nt.LINK?1:0),l=a(o),c=!1;return this.segmentsNear(e,n,.5,(u,h)=>{if(c||u===t)return;let f=this.ways[u];if(f.layer!==o.layer&&(o.abs||f.abs)||!r&&a(f)>l)return;let d=f.nodes[h],g=f.nodes[h+1],y=this.nx[d],p=this.nz[d],m=this.nx[g]-y,_=this.nz[g]-p,x=m*m+_*_;if(x<1e-6)return;let v=((e-y)*m+(n-p)*_)/x;if(v<0||v>1)return;let b=Math.sqrt(x);h===0&&v*b<.3||h===f.nodes.length-2&&(1-v)*b<.3||Math.abs((e-y)*_-(n-p)*m)/b>f.width/2+s||(c=!0)}),c}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}smooth(t,e,n){let s=t.length,r=new Uint8Array(s),o=new Map;this.ways.forEach((c,u)=>{let h=c.nodes;for(let f=0;f<h.length;f++)r[h[f]]+=(f>0?1:0)+(f<h.length-1?1:0);for(let f of[0,h.length-1]){let d=o.get(h[f]);d||o.set(h[f],d=[]),d.push([u,f])}});let a=(c,u)=>{let h=this.ways[c],f=h.nodes,d=f[u];if(f[0]===f[f.length-1]&&f.length>3)return u===0?f[f.length-2]:f[1];if(r[d]!==2)return-1;for(let[g,y]of o.get(d)||[]){if(g===c)continue;let p=this.ways[g].nodes;return y===0?p[1]:p[p.length-2]}return-1},l=(c,u)=>{let h=this.ways[c].nodes,f=h[u],d=u>0?h[u-1]:a(c,u),g=u<h.length-1?h[u+1]:a(c,u),y=0,p=0,m=0,_=0,x=0;if(d>=0){let E=Math.hypot(t[f]-t[d],e[f]-e[d])||1;y=(t[f]-t[d])/E,p=(e[f]-e[d])/E}if(g>=0){let E=Math.hypot(t[g]-t[f],e[g]-e[f])||1;m=(t[g]-t[f])/E,_=(e[g]-e[f])/E}d>=0&&g>=0&&(x=Math.acos(Math.max(-1,Math.min(1,y*m+p*_))));let v=y+m,b=p+_,S=Math.hypot(v,b);return S<1e-6?null:[v/S,b/S,x]};this.ways.forEach((c,u)=>{let h=c.nodes;if(h.length<2)return;let f=[h[0]],d=l(u,0);for(let g=0;g<h.length-1;g++){let y=h[g],p=h[g+1],m=l(u,g+1),_=t[p]-t[y],x=e[p]-e[y],v=Math.hypot(_,x);if(v>3&&d&&m){let b=_/v,S=x/v,E=Math.acos(Math.max(-1,Math.min(1,d[0]*b+d[1]*S))),T=Math.acos(Math.max(-1,Math.min(1,m[0]*b+m[1]*S))),M=Math.max(E,T);if(M>.03&&M<1.1){let w=v*M/4,R=Math.min(10,Math.ceil(Math.sqrt(w/.04)));if(R>=2){let P=d[2]>.6?Math.min(v,7):v,U=m[2]>.6?Math.min(v,7):v;for(let L=1;L<R;L++){let B=L/R,N=B*B,G=N*B,O=2*G-3*N+1,q=G-2*N+B,$=-2*G+3*N,W=G-N;t.push(O*t[y]+q*P*d[0]+$*t[p]+W*U*m[0]),e.push(O*e[y]+q*P*d[1]+$*e[p]+W*U*m[1]),n.push(n[y]+(n[p]-n[y])*B),f.push(t.length-1)}}}}f.push(p),d=m}c.nodes=f})}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let s=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[s]+(this.nx[r]-this.nx[s])*a,this.nz[s]+(this.nz[r]-this.nz[s])*a,n,a]}heightOn(t,e,n,s,r){let o=this.ways[t];if(o.abs){let c=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?c/o.len:0)+ia}let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(s,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+ia}segmentsNear(t,e,n,s){let r=Math.floor((t-n-this.xmin)/ui),o=Math.floor((t+n-this.xmin)/ui),a=Math.floor((e-n-this.zmin)/ui),l=Math.floor((e+n-this.zmin)/ui),c=this._seen||(this._seen=new Set);c.clear();for(let u=a;u<=l;u++)for(let h=r;h<=o;h++){let f=this.grid.get(u*4096+h);if(f)for(let d of f)c.has(d)||(c.add(d),s(Math.floor(d/16384),d%16384))}}projectOnSeg(t,e,n,s){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],u=this.nx[a]-l,h=this.nz[a]-c,f=u*u+h*h||1e-9,d=((n-l)*u+(s-c)*h)/f;d=d<0?0:d>1?1:d;let g=l+u*d,y=c+h*d;return{t:d,px:g,pz:y,d:Math.hypot(n-g,s-y),dx:u,dz:h}}surfaceAt(t,e,n=1e9){let s=null,r=-1e9;this.segmentsNear(t,e,8,(a,l)=>{let c=this.ways[a],u=this.projectOnSeg(a,l,t,e);if(u.d>c.width/2+.35)return;let h=this.heightOn(a,l,u.t,t,e);h<=n+1.3&&(h>r+.01||Math.abs(h-r)<=.01&&s&&u.d<s.d)&&(r=h,s={wi:a,k:l,t:u.t,d:u.d})});let o=this.terrain.height(t,e);return s&&r>=o-.6?{h:r,road:s}:s&&o>n+1.3?{h:r,road:s}:{h:o,road:null}}nearest(t,e,n=40,s=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(s&&!s(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:sy[t.cls]}findRoundabouts(){let t=new Map,e=o=>{for(;t.get(o)!==o;)t.set(o,t.get(t.get(o))),o=t.get(o);return o},n=(o,a)=>{o=e(o),a=e(a),o!==a&&t.set(o,a)};this.ways.forEach(o=>{if(o.flags&Nt.ROUNDABOUT){for(let a of o.nodes)t.has(a)||t.set(a,a);for(let a=1;a<o.nodes.length;a++)n(o.nodes[a-1],o.nodes[a])}});let s=new Map;for(let o of t.keys()){let a=e(o);s.has(a)||s.set(a,[]),s.get(a).push(o)}let r=new Map;this.ways.forEach(o=>{if(o.flags&Nt.ROUNDABOUT)for(let a of o.nodes)r.set(a,Math.max(r.get(a)||0,o.width))}),this.roundabouts=[];for(let o of s.values()){if(o.length<4)continue;let a=0,l=0;for(let y of o)a+=this.nx[y],l+=this.nz[y];a/=o.length,l/=o.length;let c=1e9,u=0,h=0,f=0;for(let y of o){let p=Math.hypot(this.nx[y]-a,this.nz[y]-l);c=Math.min(c,p),u=Math.max(u,p),h=Math.max(h,r.get(y)),f+=this.dh[y]}if(u>c*1.8||u>120)continue;let d=c-h/2-.3;if(d<1.2)continue;let g=o.map(y=>{let p=Math.hypot(this.nx[y]-a,this.nz[y]-l),m=Math.max(.1,(p-r.get(y)/2-.1)/p);return[Math.atan2(this.nz[y]-l,this.nx[y]-a),a+(this.nx[y]-a)*m,l+(this.nz[y]-l)*m]}).sort((y,p)=>y[0]-p[0]).map(y=>[y[1],y[2]]);this.roundabouts.push({x:a,z:l,r:d,dh:f/o.length,poly:g})}}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,s]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:s,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(s,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),u=new Float32Array(e).fill(1e9),h=new Float32Array(e),f=y=>{let p=t.width>=s[y]-.01?r[y]:s[y];return p>0?p/2+a:0},d=-1e9,g=0;for(let y=0;y<e;y++){let p=t.nodes[y];if(o[p]>=3){let m=f(p);m>0&&(d=t.cum[y],g=m)}l[y]=d,c[y]=g}d=1e9,g=0;for(let y=e-1;y>=0;y--){let p=t.nodes[y];if(o[p]>=3){let m=f(p);m>0&&(d=t.cum[y],g=m)}u[y]=d,h[y]=g}return{pc:l,pr:c,nc:u,nr:h}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let s of this.tileSegs.get(t)||[]){let r=Math.floor(s/16384),o=s%16384,a=this.ways[r];if(a.flags&Nt.ROUNDABOUT||!a.drivable||a.cls>=Ht.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=Di(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let u=0;u<c.data.length;u+=4){let h=104+Math.random()*64+(Math.random()<.03?50:0);c.data[u]=c.data[u+1]=c.data[u+2]=h}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let u=0;u<6;u++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=Di(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let u=0;u<l/c;u++)for(let h=-1;h<a/c;h++){let f=120+Math.random()*60,d=h*c+(u%2?c/2:0),g=u*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,g+2,c-4,c-4,5),o.fill()}}),n=Di(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),s=Di(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(h,f)=>{let d=Af[h];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(h,f,d)=>{o.save(),o.translate(h,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},u=h=>{o.fillRect(56,70,16,54),o.fillRect(h>0?64:34,62,30,16),l(64+h*44,70,h*Math.PI/2)};a("through",c),a("left",()=>u(-1)),a("right",()=>u(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Gt({map:t,vertexColors:!0}),-2,-4),stone:r(new Gt({map:e,vertexColors:!0}),-2,-4),path:r(new Gt({map:t,vertexColors:!0}),-1,-2),walk:new Gt({map:n,vertexColors:!0,side:re}),mark:r(new Gt({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Gt({map:s,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Gt({color:11052186,side:re}),barrier:new Gt({vertexColors:!0,side:re}),guard:new Gt({color:13159632,side:re}),island:new Gt({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,s=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;s+=u/f,r+=h/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1;s+=u/f,r+=h/f}let o=Math.hypot(s,r)||1;s/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],u=this.nx[c]-this.nx[l],h=this.nz[c]-this.nz[l],f=Math.hypot(u,h)||1,d=-r*(-h/f)+s*(u/f);a=1/Math.max(.5,d)}return[-r*a,s*a]}wayColor(t){return t.flags&Nt.NOCAR||t.surf===1?[1,1,1]:t.flags&Nt.UNPAVED?[.95,.82,.62]:oy[t.cls]}edgeH(t,e,n,s,r){let o=this.ways[t];if(o.abs)return this.heightOn(t,e,n,s,r);let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(s,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+ia}addDecal(t,e,n,s,r,o,a,l,c,u,h){let f=ly(h);if(!f)return;let d=-l,g=a,y=[[-c/2,-u/2,f[0],f[1]],[c/2,-u/2,f[2],f[1]],[c/2,u/2,f[2],f[3]],[-c/2,u/2,f[0],f[3]]].map(([p,m,_,x])=>{let v=r+d*p+a*m,b=o+g*p+l*m;return t.v(v,this.edgeH(e,n,s,v,b)+.035,b,1,1,1,_,x)});t.quad(y[0],y[1],y[2],y[3])}buildTile(t){let e=new jt,n=this.tileSegs.get(t)||[],s=this.materials(),r=new oe(!0,!0),o=new oe(!0,!0),a=new oe(!0,!1),l=new oe(!1,!1),c=new oe(!1,!1),u=new oe(!0,!0),h=new oe(!0,!0),f=this.terrain,d=5,g=new Set;for(let p of n){let m=Math.floor(p/16384),_=p%16384,x=this.ways[m],v=x.nodes[_],b=x.nodes[_+1],S=this.nx[v],E=this.nz[v],T=this.nx[b],M=this.nz[b],w=Math.hypot(T-S,M-E);if(w<.05)continue;let R=(T-S)/w,P=(M-E)/w,U=-P,L=R,B=this.miter(x,_),N=this.miter(x,_+1),G=x.width/2,O=Math.max(1,Math.ceil(w/d)),q=this.wayColor(x),$=x.surf===1||!!(x.flags&Nt.NOCAR),W=$?o:r,tt=$?.6:.2,Z=x.abs||this.dh[v]>.3||this.dh[b]>.3,z=-1,H=-1,J=[];for(let Q=0;Q<=O;Q++){let X=Q/O,it=S+(T-S)*X,ut=E+(M-E)*X,ot=B[0]+(N[0]-B[0])*X,nt=B[1]+(N[1]-B[1])*X,xt=it-ot*G,F=ut-nt*G,vt=it+ot*G,yt=ut+nt*G,bt=this.edgeH(m,_,X,xt,F),ht=this.edgeH(m,_,X,vt,yt),Ut=W.v(xt,bt,F,q[0],q[1],q[2],xt*tt,F*tt),lt=W.v(vt,ht,yt,q[0],q[1],q[2],vt*tt,yt*tt);z>=0&&W.quad(z,H,lt,Ut),z=Ut,H=lt,J.push([xt,bt,F,vt,ht,yt,ot,nt])}for(let[Q,X]of[[0,v],[x.nodes.length-1,b]]){if(Q===0?_!==0:_!==x.nodes.length-2)continue;let it=X*2+($?1:0);if(g.has(it)||x.flags&Nt.ROUNDABOUT)continue;g.add(it);let ut=this.nx[X],ot=this.nz[X],nt=Q===0?0:1,xt=W.v(ut,this.edgeH(m,_,nt,ut,ot),ot,q[0],q[1],q[2],ut*tt,ot*tt),F=[];for(let vt=0;vt<14;vt++){let yt=vt/14*Math.PI*2,bt=ut+Math.cos(yt)*G,ht=ot+Math.sin(yt)*G;F.push(W.v(bt,this.edgeH(m,_,nt,bt,ht),ht,q[0],q[1],q[2],bt*tt,ht*tt))}for(let vt=0;vt<14;vt++)W.tri(xt,F[(vt+1)%14],F[vt])}if(Z){for(let Q=0;Q<2;Q++)for(let X=0;X<J.length-1;X++){let it=J[X],ut=J[X+1],ot=it[Q*3],nt=it[Q*3+1],xt=it[Q*3+2],F=ut[Q*3],vt=ut[Q*3+1],yt=ut[Q*3+2],bt=f.height(ot,xt),ht=f.height(F,yt);if(nt-bt<.35&&vt-ht<.35||this.coveredBy(m,(ot+F)/2,(xt+yt)/2,.3))continue;let Ut=x.abs?Math.max(bt-1,nt-1.4):bt-.5,lt=x.abs?Math.max(ht-1,vt-1.4):ht-.5,I=l.v(ot,nt,xt),A=l.v(F,vt,yt),V=l.v(F,lt,yt),rt=l.v(ot,Ut,xt);l.quad(I,A,V,rt);let st=l.v(ot,nt+1,xt),et=l.v(F,vt+1,yt),ft=l.v(F,vt,yt),pt=l.v(ot,nt,xt);l.quad(st,et,ft,pt)}if(x.abs&&x.flags&Nt.BRIDGE)for(let Q=1;Q<J.length-1;Q+=4){let X=J[Q],it=(X[0]+X[3])/2,ut=(X[2]+X[5])/2,ot=(X[1]+X[4])/2,nt=f.height(it,ut);if(ot-nt<3)continue;let xt=.6,F=[[-xt,-xt],[xt,-xt],[xt,xt],[-xt,xt]];for(let vt=0;vt<4;vt++){let[yt,bt]=F[vt],[ht,Ut]=F[(vt+1)%4],lt=l.v(it+yt,ot-.5,ut+bt),I=l.v(it+ht,ot-.5,ut+Ut),A=l.v(it+ht,nt-1,ut+Ut),V=l.v(it+yt,nt-1,ut+bt);l.quad(lt,I,A,V)}}}if(x.cls<=Ht.TRUNK&&!(x.flags&Nt.LINK)&&!Z){let Q=this.zones(x).mark;for(let X=0;X<2;X++)for(let it=0;it<J.length-1;it++){let ut=x.cum[_]+it/O*w,ot=x.cum[_]+(it+1)/O*w;if(ut-Q.pc[_]<8||Q.nc[_+1]-ot<8)continue;let nt=J[it],xt=J[it+1],F=X?1:-1,vt=.4*F;if(this.coveredBy(m,(nt[X*3]+xt[X*3])/2+U*vt,(nt[X*3+2]+xt[X*3+2])/2+L*vt,.8))continue;let yt=nt[X*3]+U*vt,bt=nt[X*3+2]+L*vt,ht=nt[X*3+1],Ut=xt[X*3]+U*vt,lt=xt[X*3+2]+L*vt,I=xt[X*3+1],A=c.v(yt,ht+.85,bt),V=c.v(Ut,I+.85,lt),rt=c.v(Ut,I+.5,lt),st=c.v(yt,ht+.5,bt);if(c.quad(A,V,rt,st),it%2===0){let et=c.v(yt,ht+.85,bt),ft=c.v(yt+R*.12,ht+.85,bt+P*.12),pt=c.v(yt+R*.12,ht-.2,bt+P*.12),_t=c.v(yt,ht-.2,bt);c.quad(et,ft,pt,_t)}}}this.buildSidewalk(u,m,_,J,O,w),this.buildMarkings(a,m,_)}let y=new oe(!0,!1);for(let p of this.roundabouts){if(this.tileKey(p.x,p.z)!==t)continue;let m=f.height(p.x,p.z)+p.dh+ia+.22,_=p.poly,x=_.length,v=Math.min(1.6,p.r*.3),b=y.v(p.x,m+.25+Math.min(1.2,p.r*.06),p.z,.3,.52,.2),E=[[0,m-.6,.86,.86,.83],[0,m,.86,.86,.83],[.25,m,.62,.55,.5],[v,m+.06,.62,.55,.5],[v,m+.25,.8,.8,.78],[v+.25,m+.25,.33,.56,.22]].map(([M,w,R,P,U])=>_.map(([L,B])=>{let N=Math.hypot(L-p.x,B-p.z)||1,G=Math.max(.05,(N-M)/N);return y.v(p.x+(L-p.x)*G,w,p.z+(B-p.z)*G,R,P,U)}));for(let M=0;M<E.length-1;M++)for(let w=0;w<x;w++){let R=(w+1)%x;y.quad(E[M][w],E[M+1][w],E[M+1][R],E[M][R])}let T=E[E.length-1];for(let M=0;M<x;M++)y.tri(b,T[(M+1)%x],T[M])}return this.buildNodeMarks(t,a,r),this.buildLaneArrows(t,h),this.buildRoundaboutEntries(t,a),this.buildRails(t,r,l),r.empty||e.add(r.mesh(s.road)),o.empty||e.add(o.mesh(s.stone)),u.empty||e.add(u.mesh(s.walk)),a.empty||e.add(a.mesh(s.mark)),h.empty||e.add(h.mesh(s.decal)),l.empty||e.add(l.mesh(s.wall,!0)),c.empty||e.add(c.mesh(s.guard)),y.empty||e.add(y.mesh(s.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&Nt.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<Ht.PRIMARY||t.cls>Ht.RESIDENTIAL||t.flags&(Nt.LINK|Nt.ROUNDABOUT|Nt.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,s,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],u=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!u)return;let h=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let g=0;g<2;g++){if(!(u&(g?2:1)))continue;let y=g?1:-1,p=null;for(let m=0;m<=r;m++){let _=a.cum[n]+m/r*o,x=s[m],v=m/r,b=x[g*3],S=x[g*3+1],E=x[g*3+2],T=b+x[6]*y*Tf,M=E+x[7]*y*Tf;if((_-h.pc[n]<40||h.nc[n+1]-_<40)&&this.coveredBy(e,(b+T)/2,(E+M)/2,1)){p=null;continue}let R=this.edgeH(e,n,v,T,M),P=Math.max(S,R)+ay,U=[t.v(b,S-.05,E,d[0],d[1],d[2],0,_*.5),t.v(b,P,E,d[0],d[1],d[2],.1,_*.5),t.v(b,P,E,f[0],f[1],f[2],0,_*.6),t.v(T,P,M,f[0],f[1],f[2],1,_*.6),t.v(T,P,M,d[0],d[1],d[2],0,_*.5),t.v(T,Math.min(R,this.terrain.height(T,M))-.4,M,d[0],d[1],d[2],.1,_*.5)];if(p)for(let L=0;L<6;L+=2)y>0?t.quad(p[L],p[L+1],U[L+1],U[L]):t.quad(p[L],U[L],U[L+1],p[L+1]);p=U}}}buildMarkings(t,e,n){let s=this.ways[e];if(s.cls>=Ht.SERVICE||!s.drivable||s.flags&Nt.UNPAVED||s.surf===1)return;let r=s.nodes[n],o=s.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],u=this.nz[o],h=Math.hypot(c-a,u-l);if(h<.3)return;let f=(c-a)/h,d=(u-l)/h,g=this.miter(s,n),y=this.miter(s,n+1),p=s.width/2,m=this.zones(s).mark,_=this.zones(s).walk,x=s.cum[n],v=[],b=s.limit<=50,S=s.flags&Nt.ROUNDABOUT;if(s.cls<=Ht.TERTIARY||S||s.width>=7){let R=Math.max(.3,s.sh*.85);v.push({off:-p+R,wdt:.15,dash:0,edge:!0},{off:p-R,wdt:.15,dash:0,edge:!0})}let E=b?[3,4.5]:[4.5,7.5];if(S)s.nF>=2&&v.push({off:-p+s.sh+s.lw,wdt:.12,dash:[3,4.5]});else if(!s.oneway&&s.nF>=1&&s.nB>=1&&s.width>=5.4){let R=(m.nc[n+1]-(x+h)<22||x-m.pc[n]<22)&&s.cls<=Ht.TERTIARY;s.nF+s.nB>=4?v.push({off:s.cOff-.14,wdt:.12,dash:0},{off:s.cOff+.14,wdt:.12,dash:0}):v.push({off:s.cOff,wdt:.15,dash:R?0:E});for(let P=1;P<s.nF;P++)v.push({off:s.cOff+s.lw*P,wdt:.12,dash:E});for(let P=1;P<s.nB;P++)v.push({off:s.cOff-s.lw*P,wdt:.12,dash:E})}else if(s.oneway&&s.nF>=2)for(let R=1;R<s.nF;R++)v.push({off:-p+s.sh+s.lw*R,wdt:.15,dash:[4.5,7.5]});let T=s.cls<=Ht.TRUNK||s.flags&Nt.LINK?220:35,M=x-_.pc[n]<T||_.nc[n+1]-(x+h)<T,w=M?1.25:5;for(let R of v){let P=[];for(let N=0;N<h;N+=w)P.push(N);if(R.dash){let N=R.dash[0]+R.dash[1];for(let G=Math.floor(x/N)*N;G<x+h;G+=N)G>x&&P.push(G-x),G+R.dash[0]>x&&G+R.dash[0]<x+h&&P.push(G+R.dash[0]-x)}P.push(h),P.sort((N,G)=>N-G);let U=-1,L=-1,B=-1;for(let N=0;N<P.length-1;N++){let G=P[N],O=P[N+1];if(O-G<.02)continue;let q=(G+O)/2,$=q/h,W=!R.dash||(x+q)%(R.dash[0]+R.dash[1])<R.dash[0];if(W&&M){let tt=g[0]+(y[0]-g[0])*$,Z=g[1]+(y[1]-g[1])*$;this.coveredBy(e,a+f*q+tt*R.off,l+d*q+Z*R.off,R.edge?.1:0,!!R.edge)&&(W=!1)}if(!W){U=-1;continue}for(let tt of U>=0&&B===G?[O]:[G,O]){let Z=tt/h,z=g[0]+(y[0]-g[0])*Z,H=g[1]+(y[1]-g[1])*Z,J=a+f*tt+z*R.off,Q=l+d*tt+H*R.off,X=J-z*R.wdt/2,it=Q-H*R.wdt/2,ut=J+z*R.wdt/2,ot=Q+H*R.wdt/2,nt=t.v(X,this.edgeH(e,n,Z,X,it)+.02,it,1,1,1),xt=t.v(ut,this.edgeH(e,n,Z,ut,ot)+.02,ot,1,1,1);U>=0&&t.quad(U,L,xt,nt),U=nt,L=xt}B=O}}}buildNodeMarks(t,e,n){let s=new Set,r=[Jt.CROSSING,Jt.CROSSING_SIGNALS,Jt.BUMP,Jt.TABLE,Jt.MINI_RB,Jt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let u of[l,l+1]){let h=c.nodes[u],f=this.ntag[h];if(!f||s.has(h)||!r.includes(f)||c.cls>=Ht.SERVICE&&f!==Jt.TURNING)continue;s.add(h);let d=Math.min(u,c.nodes.length-2),g=c.nodes[d],y=c.nodes[d+1],p=this.nx[y]-this.nx[g],m=this.nz[y]-this.nz[g],_=Math.hypot(p,m)||1,x=p/_,v=m/_,b=-v,S=x,E=this.nx[h],T=this.nz[h],M=c.width/2,w=u===d?0:1,R=(P,U,L,B,N,G=.025)=>{let O=[[P,L],[U,L],[U,B],[P,B]].map(([q,$])=>{let W=E+b*q+x*$,tt=T+S*q+v*$;return e.v(W,this.edgeH(a,d,w,W,tt)+G,tt,N[0],N[1],N[2])});e.quad(O[0],O[1],O[2],O[3])};if(f===Jt.CROSSING||f===Jt.CROSSING_SIGNALS)for(let P=-M+.55;P<=M-.55;P+=1)R(P-.25,P+.25,-1.5,1.5,[1,1,1]);else if(f===Jt.BUMP){let P=0;for(let U=-M+.2;U<M-.2;U+=.5,P++)R(U,Math.min(M-.2,U+.5),-.45,.45,P%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===Jt.TABLE){R(-M+.1,M-.1,-2.6,2.6,[.72,.36,.3],.05);for(let P=-M+.6;P<=M-.6;P+=1)R(P-.25,P+.25,-1.5,1.5,[1,1,1],.07)}else if(f===Jt.MINI_RB){let P=this.edgeH(a,d,w,E,T)+.03,U=e.v(E,P+.08,T,1,1,1),L=[];for(let B=0;B<16;B++){let N=B/16*6.2832;L.push(e.v(E+Math.cos(N)*1.5,P,T+Math.sin(N)*1.5,1,1,1))}for(let B=0;B<16;B++)e.tri(U,L[(B+1)%16],L[B])}else if(f===Jt.TURNING){let P=this.wayColor(c),U=Math.max(7,M+3),L=n.v(E,this.edgeH(a,d,w,E,T),T,P[0],P[1],P[2],E*.2,T*.2),B=[];for(let N=0;N<20;N++){let G=N/20*6.2832,O=E+Math.cos(G)*U,q=T+Math.sin(G)*U;B.push(n.v(O,this.edgeH(a,d,w,O,q),q,P[0],P[1],P[2],O*.2,q*.2))}for(let N=0;N<20;N++)n.tri(L,B[(N+1)%20],B[N])}}}}buildLaneArrows(t,e){let n=new Set;for(let s of this.tileSegs.get(t)||[]){let r=Math.floor(s/16384),o=s%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,u=r*2+(l>0?0:1);if(!c||n.has(u)||o!==(l>0?a.nodes.length-2:0))continue;n.add(u);let h=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/h.length;for(let g of a.len>70?[9,32]:[9]){if(g>a.len-4)continue;let[y,p,m,_]=this.pointAt(a,l>0?a.len-g:g),x=a.nodes[m],v=a.nodes[m+1],b=this.nx[v]-this.nx[x],S=this.nz[v]-this.nz[x],E=Math.hypot(b,S)||1;b=b/E*l,S=S/E*l;let T=-S,M=b,w=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;h.forEach((R,P)=>{let U=new Set(R.split(";").map(B=>B.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(B=>B==="left"||B==="right"||B==="through"));if(!U.size)return;let L=w+d*(P+.5);this.addDecal(e,r,m,_,y+T*L,p+M*L,b,S,Math.min(1.5,d*.5),4.2,[...U].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let s=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,u=this.w1[n.nd]/2+.5,h=this.nx[n.nd]-r*u,f=this.nz[n.nd]-o*u,d=s.oneway?-s.width/2+.3:(n.dir>0?s.cOff:-s.cOff)+.15,g=s.width/2-.3;for(let y=d;y+.5<=g;y+=.75){let p=[[y,-.3],[y+.5,-.3],[y+.25,.35]].map(([m,_])=>{let x=h+l*m-r*_,v=f+c*m-o*_;return e.v(x,this.edgeH(n.wi,n.k,n.t,x,v)+.03,v,1,1,1)});e.tri(p[0],p[1],p[2]),e.tri(p[0],p[2],p[1])}}}buildRails(t,e){let n=this.terrain;for(let s of this.tileRails.get(t)||[]){let r=Math.floor(s/16384),o=s%16384,a=this.rails[r],[l,c]=a.p[o],[u,h]=a.p[o+1],f=Math.hypot(u-l,h-c);if(f<.1)continue;let d=(u-l)/f,g=(h-c)/f,y=-g,p=d,m=Math.max(1,Math.ceil(f/6)),_=(x,v,b)=>{if(a.bridge&&a.cum){let S=a.cum[o]+b*f;return a.h0+(a.h1-a.h0)*S/(a.cum[a.cum.length-1]||1)+.25}return n.height(x,v)+.25};for(let[x,v,b]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let S=-1,E=-1;for(let T=0;T<=m;T++){let M=T/m,w=l+(u-l)*M+y*x,R=c+(h-c)*M+p*x,P=_(w,R,M)+(b?.16:0),U=w-y*v/2,L=R-p*v/2,B=w+y*v/2,N=R+p*v/2,G=b?[.35,.33,.32]:[.75,.68,.58],O=e.v(U,P,L,...G,U*.3,L*.3),q=e.v(B,P,N,...G,B*.3,N*.3);S>=0&&e.quad(S,E,q,O),S=O,E=q}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new oe(!0,!0),s=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],u=0,h=0;for(let x=3;x<r.length;x+=2)u+=r[x],h+=r[x+1],c.push([u/10,h/10]);if(c.length<2)continue;let f=[],d=0;for(let x=0;x<c.length-1;x++){let v=Math.hypot(c[x+1][0]-c[x][0],c[x+1][1]-c[x][1]),b=Math.max(1,Math.ceil(v/6));for(let S=0;S<b;S++)f.push([c[x][0]+(c[x+1][0]-c[x][0])*S/b,c[x][1]+(c[x+1][1]-c[x][1])*S/b,d+v*S/b]);d+=v}f.push([c[c.length-1][0],c[c.length-1][1],d]);let g=s[o],y=e.height(f[0][0],f[0][1]),p=e.height(f[f.length-1][0],f[f.length-1][1]),m=-1,_=-1;for(let x=0;x<f.length;x++){let v=f[Math.min(f.length-1,x+1)],b=f[Math.max(0,x-1)],S=v[0]-b[0],E=v[1]-b[1],T=Math.hypot(S,E)||1;S/=T,E/=T;let M=-E,w=S,R=f[x][0],P=f[x][1],U=d>0?f[x][2]/d:0,L=R-M*a/2,B=P-w*a/2,N=R+M*a/2,G=P+w*a/2,O=l?y+(p-y)*U+Math.sin(Math.PI*U)*Math.min(5.5,d*.12)+.1:0,q=n.v(L,l?O:e.height(L,B)+.1,B,g[0],g[1],g[2],L*.3,B*.3),$=n.v(N,l?O:e.height(N,G)+.1,G,g[0],g[1],g[2],N*.3,G*.3);m>=0&&n.quad(m,_,$,q),m=q,_=$}}return n.empty?null:n.mesh(this.materials().path)}buildStalls(t){if(!t||!t.pk||!t.pk.length)return null;let e=this.terrain,n=new oe(!0,!1),s=t.pk,r=(o,a,l,c,u)=>{let h=l-o,f=c-a,d=Math.hypot(h,f)||1,g=-f/d*u/2,y=h/d*u/2,p=[[o-g,a-y],[o+g,a+y],[l+g,c+y],[l-g,c-y]].map(([m,_])=>n.v(m,e.height(m,_)+.1,_,1,1,1));n.quad(p[0],p[1],p[2],p[3])};for(let o=0;o<s.length;o+=5){let a=s[o]/10,l=s[o+1]/10,c=s[o+2]/10*Math.PI/180,u=s[o+3]/10,h=(s[o+4]>>1)/10,f=s[o+4]&1,d=Math.sin(c),g=Math.cos(c),y=-g,p=d;if(f===0)for(let m of[1,-1])r(a+y*m*u/2-d*h/2,l+p*m*u/2-g*h/2,a+y*m*u/2+d*h/2,l+p*m*u/2+g*h/2,.1);else for(let m of[1,-1])r(a+d*m*h/2-y*u/2,l+g*m*h/2-p*u/2,a+d*m*h/2+y*u/2,l+g*m*h/2+p*u/2,.1)}return n.empty?null:n.mesh(this.materials().mark)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let s=this.terrain,r=new oe(!0,!1),o=new oe(!0,!1),a=new oe(!0,!0),l=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let u of t.ba){let h=l[u[0]],f=u[1]/10,d=[],g=0,y=0;for(let p=2;p<u.length;p+=2)g+=u[p],y+=u[p+1],d.push([g/10,y/10]);if(u[0]>=4){if(Ef(o,a,d,u[0],f,s,u[2]+u[3]*31),e&&u[0]!==7)for(let p=0;p<d.length-1;p++){let[m,_]=d[p],[x,v]=d[p+1],b=Math.hypot(x-m,v-_);if(b<1.5)continue;let S=-(v-_)/b*.3,E=(x-m)/b*.3;e.addPolygon(n,Float32Array.from([m-S,_-E,x-S,v-E,x+S,v+E,m+S,_+E]))}continue}for(let p=0;p<d.length-1;p++){let[m,_]=d[p],[x,v]=d[p+1],b=Math.hypot(x-m,v-_);if(b<.2)continue;let S=-(v-_)/b*h.th/2,E=(x-m)/b*h.th/2,T=Math.max(1,Math.ceil(b/8));for(let M=0;M<T;M++){let w=M/T,R=(M+1)/T,P=m+(x-m)*w,U=_+(v-_)*w,L=m+(x-m)*R,B=_+(v-_)*R,N=s.height(P,U),G=s.height(L,B),O=u[0]===3?.45:-.3,q=h.c,$=[q[0]*.8,q[1]*.8,q[2]*.8],W=[[P-S,U-E,N],[L-S,B-E,G],[L+S,B+E,G],[P+S,U+E,N]],tt=W.map(([Z,z,H])=>r.v(Z,H+f,z,q[0],q[1],q[2]));r.quad(tt[0],tt[1],tt[2],tt[3]);for(let[Z,z]of[[0,1],[2,3]]){let H=W[Z],J=W[z],Q=r.v(H[0],H[2]+f,H[1],$[0],$[1],$[2]),X=r.v(J[0],J[2]+f,J[1],$[0],$[1],$[2]),it=r.v(J[0],J[2]+O,J[1],$[0],$[1],$[2]),ut=r.v(H[0],H[2]+O,H[1],$[0],$[1],$[2]);r.quad(Q,X,it,ut)}}if(e&&u[0]!==3&&b>1.5){let M=Math.max(.4,h.th/2),w=-(v-_)/b*M,R=(x-m)/b*M;e.addPolygon(n,Float32Array.from([m-w,_-R,x-w,v-R,x+w,v+R,m+w,_+R]))}}}let c=new jt;if(r.empty||c.add(r.mesh(this.materials().barrier,!0)),o.empty||c.add(o.mesh(Ni().solid,!0)),!a.empty){let u=a.mesh(Ni().grille,!0);u.customDepthMaterial=new Ai({depthPacking:pr,map:Ni().grille.map,alphaTest:.45,side:re}),c.add(u)}return c.children.length?c:null}};var Rf=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],Cf=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],If=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],Pf=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],Lf=new Rt;function cy(){let e=()=>{let y=document.createElement("canvas");return y.width=y.height=512,y},n=e(),s=e(),r=e(),o=e(),a=e(),l=n.getContext("2d"),c=r.getContext("2d"),u=s.getContext("2d"),h=o.getContext("2d"),f=a.getContext("2d");for(let y of[l,u,f])y.fillStyle="#ffffff",y.fillRect(0,0,512,512);for(let y of[c,h])y.fillStyle="#000",y.fillRect(0,0,512,512);for(let y of[l,u,f])for(let p=0;p<2500;p++)y.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,y.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8);let d=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"];for(let y=0;y<8;y++)for(let p=0;p<8;p++){let m=p*64,_=y*64,x=64*.34,v=64*.52,b=m+(64-x)/2,S=_+64*.22;l.fillStyle="#d8d2c4",l.fillRect(b-3,S-3,x+6,v+7),l.fillStyle="#2f3438",l.fillRect(b,S,x,v),l.fillStyle="#5c6a72",l.fillRect(b+2,S+2,x/2-3,v-4),l.fillRect(b+x/2+1,S+2,x/2-3,v-4);let E=Math.random(),T=d[(p*7+y*3)%d.length];l.fillStyle=T,E<.6?(l.fillRect(b-x/2-2,S,x/2,v),l.fillRect(b+x+2,S,x/2,v)):E<.85&&l.fillRect(b,S,x,v),l.fillStyle="rgba(0,0,0,0.25)";for(let M=0;M<6;M++)l.fillRect(b-x/2-2,S+M*v/6,x*2+4,1);if(E<.85||Math.random()<.3){let M=Math.random()<.35;c.fillStyle=M?Math.random()<.5?"#ffd890":"#fff0c0":"#000",E>=.6&&E<.85&&(c.fillStyle="#000"),c.fillRect(b,S,x,v)}u.fillStyle="rgba(0,0,0,0.08)",u.fillRect(m,_,2,64),y%2===0&&(u.fillStyle="#4b5a63",u.fillRect(m+3,_+64*.3,58,64*.3),h.fillStyle=Math.random()<.25?"#e8f0ff":"#000",h.fillRect(m+3,_+64*.3,58,64*.3))}let g=(y,p=!0)=>{let m=new De(y);return m.wrapS=m.wrapT=ai,m.anisotropy=8,p&&(m.colorSpace=Me),m};return{res:g(n),ind:g(s),plain:g(a),emiR:g(r),emiI:g(o)}}var ra=class{constructor(t){this.terrain=t;let e=cy();this.mats={res:new Gt({map:e.res,vertexColors:!0,emissiveMap:e.emiR,emissive:16777215,emissiveIntensity:0}),ind:new Gt({map:e.ind,vertexColors:!0,emissiveMap:e.emiI,emissive:16777215,emissiveIntensity:0}),plain:new Gt({map:e.plain,vertexColors:!0}),roof:new Gt({vertexColors:!0,side:re})}}setNight(t){this.mats.res.emissiveIntensity=t*.55,this.mats.ind.emissiveIntensity=t*.4}build(t,e,n){let s=this.terrain,r={res:new oe,ind:new oe,plain:new oe},o=new oe(!0,!1),a=t.s,l=[];for(let u of t.b){let h=u[0],f=u[1]/10,d=u[2]/10,g=u[3],y=u[4],p=a[u[5]],m=a[u[6]],_=a[u[7]],x=[],v=0,b=0;for(let Z=8;Z<u.length;Z+=2)v+=u[Z],b+=u[Z+1],x.push(v/10,b/10);let S=x.length/2;if(S<3)continue;let E=0,T=0,M=0,w=1e9,R=-1e9;for(let Z=0;Z<S;Z++){let z=(Z+1)%S;E+=x[Z*2]*x[z*2+1]-x[z*2]*x[Z*2+1],T+=x[Z*2],M+=x[Z*2+1];let H=s.height(x[Z*2],x[Z*2+1]);w=Math.min(w,H),R=Math.max(R,H)}E=Math.abs(E/2),T/=S,M/=S;let P=Te(Math.floor(x[0]*10)*7919+Math.floor(x[1]*10)),U=Te(Math.floor(x[1]*10)*104729+17),L=h;if(L===0&&(L=E<45?6:E>1800?3:2),!(f>0))if(g>0)f=g*3.1+.6;else switch(L){case 1:f=6.2+P*2.5;break;case 2:f=E>500?11+P*7:7+P*4;break;case 3:f=7.5+P*4;break;case 4:f=7+P*5;break;case 5:f=13+Math.min(10,E/80);break;case 6:f=2.8+P*.8;break;case 7:f=10+P*4;break;case 8:f=28+P*12;break;case 9:f=6+P*2;break;default:f=4+P*3}let B=w-.6+d,N=(w+R)/2+f,G=L===3||L===4?"ind":L===5||L===6||L===8||L===9||L===10?"plain":"res",O;if(m&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(m))try{Lf.set(m),O=Lf.clone()}catch{O=null}O||(O=new Rt(G==="ind"?Cf[Math.floor(U*Cf.length)]:L===8||L===5?U<.5?"#d8c9a8":"#c9a77f":Rf[Math.floor(U*Rf.length)])),O.convertSRGBToLinear();let q=r[G],$=0;for(let Z=0;Z<S;Z++){let z=(Z+1)%S,H=x[Z*2],J=x[Z*2+1],Q=x[z*2],X=x[z*2+1],it=Math.hypot(Q-H,X-J),ut=$/24,ot=($+it)/24,nt=Math.max(1,Math.round(it/3)),xt=ut+nt/8,F=0,vt=(N-B)/24,yt=q.v(H,B,J,O.r,O.g,O.b,ut,vt),bt=q.v(H,N,J,O.r,O.g,O.b,ut,F),ht=q.v(Q,N,X,O.r,O.g,O.b,xt,F),Ut=q.v(Q,B,X,O.r,O.g,O.b,xt,vt);q.quad(yt,bt,ht,Ut),$+=it}let W,tt=(L===1||L===2&&(E<1400||g<=4)||L===5||L===9||L===7&&E<900||L===6&&E>18)&&y!==1;if(_&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(_))try{W=new Rt(_)}catch{W=null}W||(W=new Rt(tt?If[Math.floor(P*If.length)]:Pf[Math.floor(P*Pf.length)])),W.convertSRGBToLinear(),this.roof(o,x,S,N,tt,W,E,L,O,U),e&&e.addPolygon(n,Float32Array.from(x)),p&&(L===5||L===8||h===7)&&l.push({name:p,x:T,z:M,y:N+4})}let c=new jt;for(let u of["res","ind","plain"])r[u].empty||c.add(r[u].mesh(this.mats[u],!0));return o.empty||c.add(o.mesh(this.mats.roof,!0)),{group:c,labels:l}}offsetRing(t,e,n){let s=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],u=t[a*2]-t[r*2],h=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(u,h)||1;l/=f,c/=f,u/=d,h/=d;let g=-c,y=l,p=-h,m=u,_=Math.max(.35,1+g*p+y*m);s[r*2]=t[r*2]+n*(g+p)/_,s[r*2+1]=t[r*2+1]+n*(y+m)/_}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=s[o*2]*s[a*2+1]-s[a*2]*s[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],u=s[a*2]-s[o*2],h=s[a*2+1]-s[o*2+1];if(l*u+c*h<=0)return null}if(r<=0)return null}return s}roof(t,e,n,s,r,o,a,l,c,u){let h=(x,v,b,S=o)=>{let E=v[0]-x[0],T=v[2]-x[2],M=b[0]-x[0],w=b[2]-x[2],R=T*M-E*w,P=t.v(x[0],x[1],x[2],S.r,S.g,S.b),U=t.v(v[0],v[1],v[2],S.r,S.g,S.b),L=t.v(b[0],b[1],b[2],S.r,S.g,S.b);R>=0?t.tri(P,U,L):t.tri(P,L,U)},f=(x,v,b,S,E)=>{h(x,v,b,E),h(x,b,S,E)},d=o.clone().multiplyScalar(.84),g=o.clone().multiplyScalar(1.06),y=.45,p=(x,v,b)=>{if(u>.55)return;let S=.3,E=1.1,T=c.clone().multiplyScalar(.9),M=[[x-S,v-S],[x+S,v-S],[x+S,v+S],[x-S,v+S]];for(let w=0;w<4;w++){let[R,P]=M[w],[U,L]=M[(w+1)%4];f([R,b-.6,P],[U,b-.6,L],[U,b+E,L],[R,b+E,P],T)}f([M[0][0],b+E,M[0][1]],[M[1][0],b+E,M[1][1]],[M[2][0],b+E,M[2][1]],[M[3][0],b+E,M[3][1]],d)};if(r&&n===4&&a<2500){let x=[0,1,2,3].map($=>[e[$*2],e[$*2+1]]),v=Math.hypot(x[1][0]-x[0][0],x[1][1]-x[0][1]),b=Math.hypot(x[2][0]-x[1][0],x[2][1]-x[1][1]),S=b>v?[x[1],x[2],x[3],x[0]]:x,E=Math.max(v,b),T=Math.min(v,b),M=(S[0][0]+S[1][0]+S[2][0]+S[3][0])/4,w=(S[0][1]+S[1][1]+S[2][1]+S[3][1])/4,R=(S[1][0]-S[0][0]+(S[2][0]-S[3][0]))/2/E,P=(S[1][1]-S[0][1]+(S[2][1]-S[3][1]))/2/E,U=Math.min(T*.27,5),L=this.offsetRing(S.flat(),4,-y),B=[0,1,2,3].map($=>[L[$*2],s-y*.5,L[$*2+1]]),N=u>.4,G=N?E/2+y:Math.max(0,E/2-T/2),O=[M-R*G,s+U,w-P*G],q=[M+R*G,s+U,w+P*G];if(f(B[0],B[1],q,O,g),f(B[2],B[3],O,q,o),N){let $=[0,1,2,3].map(W=>[S[W][0],s,S[W][1]]);h($[1],$[2],[M+R*E/2,s+U,w+P*E/2],c),h($[3],$[0],[M-R*E/2,s+U,w-P*E/2],c)}else h(B[1],B[2],q,d),h(B[3],B[0],O,d);p(M+R*E*.2,w+P*E*.2,s+U);return}if(r&&a<6e3&&n<=60){let x=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),v=this.offsetRing(e,n,x);if(v||(x*=.5,v=this.offsetRing(e,n,x)),v){let b=this.offsetRing(e,n,-y),S=s+x*.5;for(let M=0;M<n;M++){let w=(M+1)%n;f([b[M*2],s-y*.4,b[M*2+1]],[b[w*2],s-y*.4,b[w*2+1]],[v[w*2],S,v[w*2+1]],[v[M*2],S,v[M*2+1]],M%2?o:d)}let E=[];for(let M=0;M<n;M++)E.push(new It(v[M*2],v[M*2+1]));let T=[];try{T=Ci.triangulateShape(E,[])}catch{T=[]}for(let[M,w,R]of T)h([E[M].x,S,E[M].y],[E[w].x,S,E[w].y],[E[R].x,S,E[R].y],g);(l===1||l===2)&&p(v[0]*.5+v[2]*.5,v[1]*.5+v[3]*.5,S);return}}let m=[];for(let x=0;x<n;x++)m.push(new It(e[x*2],e[x*2+1]));let _;try{_=Ci.triangulateShape(m,[])}catch{return}for(let[x,v,b]of _)h([m[x].x,s-.25,m[x].y],[m[v].x,s-.25,m[v].y],[m[b].x,s-.25,m[b].y])}};var hy={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},oa=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new ur(1,1),s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r),a=s.getY(r),l=s.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));s.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new Fo(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new ie(.12,.18,1,5),this.crownMat=new Gt({color:16777215}),this.trunkMat=new Gt({color:5981746})}build(t,e,n,s,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,u=l.xmin+e*c,h=l.zmin+n*c,f=[],d=(N,G,O,q=!1,$=!1)=>f.push([N,G,O,q,$]);if(t){for(let N=0;N<t.tr.length;N+=2)d(t.tr[N]/10,t.tr[N+1]/10,.9+Te(N)*.5);for(let N of t.rows){let G=0,O=0,q=[];for(let $=0;$<N.length;$+=2)G+=N[$],O+=N[$+1],q.push([G/10,O/10]);for(let $=0;$<q.length-1;$++){let W=Math.hypot(q[$+1][0]-q[$][0],q[$+1][1]-q[$][1]);for(let tt=0;tt<W;tt+=7)d(q[$][0]+(q[$+1][0]-q[$][0])*tt/W,q[$][1]+(q[$+1][1]-q[$][1])*tt/W,.8+Te($*31+tt)*.4,!1,Te(N.length*7+N[0])<.45)}}}let g=11,y=e*7919+n*104729|0;for(let N=h+g/2;N<h+c;N+=g)for(let G=u+g/2;G<u+c;G+=g){y++;let O=G+(Te(y)-.5)*g,q=N+(Te(y*3+1)-.5)*g,$=a.landClass(O,q),W=(hy[$]||0)*o;Te(y*7+5)>W||d(O,q,.75+Te(y*11)*.6,($==="forest"||$==="wood")&&Te(y*13)<.12)}let p=f.filter(([N,G])=>{let O=l.nearest(N,G,9);return!O||O.d>l.ways[O.wi].width/2+1.5});if(!p.length)return null;let m=p.length,_=p.filter(N=>N[3]).length,x=new Se(this.crownGeo,this.crownMat,m-_),v=_?new Se(this.coneGeo,this.crownMat,_):null,b=new Se(this.trunkGeo,this.trunkMat,m),S=new $t,E=new Ae,T=new k,M=new k,w=new Rt,R=new k(0,1,0),P=0,U=0,L=0;for(let[N,G,O,q,$]of p){let W=a.height(N,G),tt=(q?10:$?13:6.5)*O*(.8+Te(P*5+1)*.5),Z=(q?2.1:$?1.5:2.6+Te(P*9)*1.4)*O;E.setFromAxisAngle(R,Te(P*17)*6.28),M.set(N,W+tt*.3,G),T.set(1,tt*.6,1),S.compose(M,E,T),b.setMatrixAt(P,S);let z=.75+Te(P*23)*.4;if(q)M.set(N,W+tt*.55,G),T.set(Z,tt*.85,Z),S.compose(M,E,T),v.setMatrixAt(L,S),w.setRGB(.1*z,.26*z,.12*z),v.setColorAt(L++,w);else{M.set(N,W+tt*.62,G),T.set(Z,$?tt*.42:Z*1.05,Z),S.compose(M,E,T),x.setMatrixAt(U,S);let H=Te(P*41)<.06;w.setRGB(H?.42*z:.17*z,H?.3*z:(.29+Te(P*31)*.07)*z,.09*z),x.setColorAt(U++,w)}s&&s.addCircle(r,N,G,.35*O),P++}x.castShadow=!0,b.castShadow=!1,x.computeBoundingSphere(),b.computeBoundingSphere();let B=new jt;return B.add(x,b),v&&(v.castShadow=!0,v.computeBoundingSphere(),B.add(v)),B}};var xr=44;function vr(i,t){let e=(t%xr+xr)%xr,n=i===0?e:(e+xr/2)%xr;return n<17?"G":n<20.5?"Y":"R"}function Ue(i,t,e,n,s,r,o,a,l){let c=Math.cos(a),u=Math.sin(a),h=[];for(let[f,d,g]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let y=f*s/2,p=g*o/2;h.push([t+y*c+p*u,e+d*r/2,n-y*u+p*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(g=>i.v(h[g][0],h[g][1],h[g][2],l[0],l[1],l[2],0,0));i.quad(d[0],d[1],d[2],d[3])}}function Ln(i,t,e,n,s,r,o,a){let l=Math.cos(o),c=Math.sin(o),u=l,h=-c,f=i.v(t-u*s/2,e-r/2,n-h*s/2,1,1,1,a[0],a[1]),d=i.v(t+u*s/2,e-r/2,n+h*s/2,1,1,1,a[2],a[1]),g=i.v(t+u*s/2,e+r/2,n+h*s/2,1,1,1,a[2],a[3]),y=i.v(t-u*s/2,e+r/2,n-h*s/2,1,1,1,a[0],a[3]);i.quad(f,d,g,y)}var nh=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back"];function yr(i,t=!1){let e=nh.indexOf(i),n=e%8,s=Math.floor(e/8)+(t?4:0);return[n/8,1-(s+1)/8,(n+1)/8,1-s/8]}function uy(i,t){let s=(h,f)=>{i.beginPath(),i.arc(64,64,h,0,7),i.fillStyle=f,i.fill()},r=(h,f)=>{i.beginPath(),h.forEach(([d,g],y)=>y?i.lineTo(d,g):i.moveTo(d,g)),i.closePath(),i.fillStyle=f,i.fill()},o=(h,f,d,g,y,p)=>{i.beginPath(),i.roundRect(h,f,d,g,y),i.fillStyle=p,i.fill()},a=(h,f,d,g=67)=>{i.fillStyle=d,i.font=`bold ${f}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText(h,64,g)},l="#c8101a",c="#0a4fa6",u=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(t.startsWith("s")){s(62,l),s(47,"#fff");let h=t.slice(1);a(h,h.length>2?46:58,"#111");return}switch(t){case"stop":{let h=f=>Array.from({length:8},(d,g)=>{let y=(g+.5)/8*Math.PI*2;return[64+Math.cos(y)*f,64+Math.sin(y)*f]});r(h(63),"#fff"),r(h(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{s(62,"#fff"),s(58,c),i.strokeStyle="#fff",i.lineWidth=11;for(let h=0;h<3;h++){let f=h*2.094+.5,d=f+1.35;i.beginPath(),i.arc(64,64,30,f,d,!1),i.stroke();let g=64+Math.cos(f)*30,y=64+Math.sin(f)*30;i.save(),i.translate(g,y),i.rotate(f-Math.PI/2),i.beginPath(),i.moveTo(0,-17),i.lineTo(13,6),i.lineTo(-13,6),i.closePath(),i.fillStyle="#fff",i.fill(),i.restore()}break}case"noentry":s(62,"#fff"),s(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),i.fillStyle="#111",i.beginPath(),i.arc(66,52,7,0,7),i.fill(),i.strokeStyle="#111",i.lineWidth=6,i.lineCap="round",i.beginPath(),i.moveTo(64,62),i.lineTo(62,82),i.lineTo(50,100),i.moveTo(62,82),i.lineTo(76,100),i.moveTo(52,74),i.lineTo(64,66),i.lineTo(78,76),i.stroke(),i.lineCap="butt";break}case"bump":u(),i.fillStyle="#111",i.beginPath(),i.moveTo(36,96),i.quadraticCurveTo(64,56,92,96),i.closePath(),i.fill();break;case"warn":u(),a("!",56,"#111",76);break;case"level":{i.lineCap="butt";for(let h of[1,-1])i.save(),i.translate(64,64),i.rotate(h*.55),i.fillStyle=l,i.fillRect(-62,-13,124,26),i.fillStyle="#fff",i.fillRect(-56,-8,112,16),i.fillStyle=l,i.fillRect(-62,-13,16,26),i.fillRect(46,-13,16,26),i.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),i.strokeStyle="#111",i.lineWidth=5,i.beginPath(),i.moveTo(74,60),i.lineTo(86,60),i.lineTo(86,86),i.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":i.fillStyle="#7d8185",i.fillRect(0,0,128,128);break;default:break}}function fy(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");nh.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",uy(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let s=new De(i);return s.colorSpace=Me,s.anisotropy=8,s}var eh=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,s){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),s(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new De(this.cv);return t.colorSpace=Me,t.anisotropy=8,new Gt({map:t,vertexColors:!0})}};function Ui(i,t,e,n,s="bold"){for(i.font=`${s} ${n}px Arial`;i.measureText(t).width>e&&n>9;)n-=1,i.font=`${s} ${n}px Arial`;return n}var aa=class{constructor(t,e,n,s){this.roads=t,this.terrain=e,this.comuneAt=n;let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Gt({map:fy(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Gt({vertexColors:!0,side:re}),this.lights=[0,1].map(()=>({R:new Oe({color:3342336}),Y:new Oe({color:3351040}),G:new Oe({color:8704})})),this.greenMat=new Oe({color:2162528}),this.lampMat=new Oe({color:5592400}),this.lampPoleMat=new Gt({color:5593178}),this.lampPoleGeo=new ie(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new zt(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new Oe({map:new De(o),transparent:!0,blending:oi,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new un(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of s?s.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let u=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(u)||this.places.set(u,[]),this.places.get(u).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let s=vr(n,t),r=this.lights[n];r.R.color.setHex(s==="R"?16722458:2754566),r.Y.color.setHex(s==="Y"?16756736:2760196),r.G.color.setHex(s==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let s=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let u of this.places.get(l*1e4+c)||[]){let h=Math.hypot(u.x-t,u.z-e);h<r&&(r=h,s=u.n)}return s}approaches(t){let e=this.roads,n=[];for(let s=e.adjStart[t];s<e.adjStart[t+1];s++){let r=e.ways[e.adjWay[s]],o=e.adjPos[s];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[s],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[s],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,s=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjStart[r];c<n.adjStart[r+1];c++){let u=n.ways[n.adjWay[c]],h=n.adjPos[c];for(let f of[u.nodes[h-1],u.nodes[h+1]])f!==void 0&&f!==s&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),s=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,s=-1;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;s=n.ways[o].limit}}return s}traceDestination(t,e,n,s){let r=this.roads,o=this.comuneOfNode(s),a=this.placeNear(r.nx[s],r.nz[s],600),l=0,c=s;for(let u=0;u<1500&&l<7e3;u++){let h=r.ways[t],f=e+n,d=h.nodes[e];if(f<0||f>=h.nodes.length){let y=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),p=null,m=1.15,_=(b,S,E,T)=>{let M=r.ways[b],w=M.nodes[S+E];if(w===void 0)return;let R=Math.atan2(r.nx[w]-r.nx[T],r.nz[w]-r.nz[T])-y;for(;R>Math.PI;)R-=2*Math.PI;for(;R<-Math.PI;)R+=2*Math.PI;Math.abs(R)<m&&(m=Math.abs(R),p=[b,S,E])},x=(b,S)=>{for(let E=r.adjStart[b];E<r.adjStart[b+1];E++){let T=r.adjWay[E],M=r.ways[T],w=r.adjPos[E];if(!(!M.drivable||M.cls>Ht.UNCLASSIFIED)&&!(T===t&&w===e)){if(M.flags&Nt.ROUNDABOUT){S||v(T,w);continue}w<M.nodes.length-1&&_(T,w,1,S?d:b),w>0&&!M.oneway&&_(T,w,-1,S?d:b)}}},v=(b,S)=>{let E=b,T=S;for(let M=0;M<120;M++){let w=r.ways[E];if(T>=w.nodes.length-1){let P=w.nodes[w.nodes.length-1],U=!1;if(w.nodes[0]===P&&w.nodes.length>2)T=0,U=!0;else for(let L=r.adjStart[P];L<r.adjStart[P+1];L++){let B=r.adjWay[L];if(B!==E&&r.ways[B].flags&Nt.ROUNDABOUT&&r.adjPos[L]===0){E=B,T=0,U=!0;break}}if(!U)return}T++;let R=(w===r.ways[E],r.ways[E].nodes[T]);if(R===d)return;r.degree[R]>=3&&x(R,!0)}};if(x(d,!1),!p)return null;c=d,[t,e,n]=p;continue}let g=h.nodes[f];if(l+=Math.hypot(r.nx[g]-r.nx[d],r.nz[g]-r.nz[d]),c=d,e=f,u%6===0&&l>250){let y=this.comuneOfNode(g);if(y&&o&&y!==o)return{name:y,dist:l};let p=this.placeNear(r.nx[g],r.nz[g]);if(p&&p!==a&&p!==o&&l>500)return{name:p,dist:l}}}return null}build(t,e){let n=this.roads,s=this.terrain,r=n.tileSegs.get(t)||[],o=new oe(!0,!1),a=new oe(!0,!0),l=new oe(!0,!0),c=new oe(!0,!1),u=new oe(!0,!0),h=[0,1].map(()=>({R:new oe(!1,!1),Y:new oe(!1,!1),G:new oe(!1,!1)})),f=new oe(!1,!1),d=new eh,g=[],y=[],p=[],m=[.42,.43,.44],_=(W,tt=.7)=>({uv:yr(W),back:yr(W,!0),w:tt,h:tt}),x=(W,tt,Z,z,H,J=2)=>{if(H=H.filter(ot=>ot&&ot.uv),!H.length)return;let Q=Math.atan2(-Z,-z),X=s.height(W,tt),it=H.reduce((ot,nt)=>ot+nt.h+.06,0);Ue(o,W,X+(J+it)/2,tt,.07,J+it,.07,Q,m);let ut=X+J+it;for(let ot of H)ut-=ot.h/2+.03,Ln(ot.text?l:a,W-Z*.05,ut,tt-z*.05,ot.w,ot.h,Q,ot.uv),ot.text&&ot.double?Ln(l,W+Z*.05,ut,tt+z*.05,ot.w,ot.h,Q+Math.PI,ot.uv):Ln(a,W+Z*.05,ut,tt+z*.05,ot.w,ot.h,Q+Math.PI,ot.back||yr("back")),ut-=ot.h/2+.03},v=W=>{let tt=d.add("st"+W,190,42,(Z,z,H)=>{Z.fillStyle="#f7f7f2",Z.fillRect(0,0,z,H),Z.strokeStyle="#1b2f6b",Z.lineWidth=3,Z.strokeRect(2.5,2.5,z-5,H-5),Z.fillStyle="#16255a",Z.textAlign="center",Z.textBaseline="middle",Ui(Z,W,z-16,22),Z.fillText(W,z/2,H/2+1)});return tt&&{uv:tt,w:1.25,h:.28,text:!0,double:!0}},b=(W,tt)=>{let Z=d.add("tw"+(tt?"E":"S")+W,300,116,(z,H,J)=>{z.fillStyle="#fff",z.fillRect(0,0,H,J),z.strokeStyle="#111",z.lineWidth=6,z.strokeRect(7,7,H-14,J-14),z.fillStyle="#111",z.textAlign="center",z.textBaseline="middle",Ui(z,W,H-44,50),z.fillText(W,H/2,J/2+2),tt&&(z.strokeStyle="#c8101a",z.lineWidth=12,z.beginPath(),z.moveTo(16,J-16),z.lineTo(H-16,16),z.stroke())});return Z&&{uv:Z,w:2.1,h:.82,text:!0}},S=(W,tt,Z)=>{let z=tt?`${W}  ${tt}`:W,H=d.add("dr"+(Z?"B":"W")+z,300,64,(J,Q,X)=>{J.fillStyle=Z?"#0a4fa6":"#fff",J.fillRect(0,0,Q,X),J.strokeStyle=Z?"#fff":"#111",J.lineWidth=3,J.strokeRect(3.5,3.5,Q-7,X-7),J.fillStyle=Z?"#fff":"#111",J.beginPath(),J.moveTo(34,12),J.lineTo(54,34),J.lineTo(41,34),J.lineTo(41,54),J.lineTo(27,54),J.lineTo(27,34),J.lineTo(14,34),J.closePath(),J.fill(),J.textAlign="left",J.textBaseline="middle",Ui(J,z,Q-76,30),J.fillText(z,66,X/2+2)});return H&&{uv:H,w:1.9,h:.42,text:!0}},E=(W,tt)=>{let Z=26+W.length*46,z=d.add("bd"+tt+W.join("|"),400,Z,(H,J,Q)=>{let X={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[tt],it=tt==="white"?"#111":"#fff";H.fillStyle=X,H.fillRect(0,0,J,Q),H.strokeStyle=it,H.lineWidth=4,H.strokeRect(5,5,J-10,Q-10),H.fillStyle=it,H.textBaseline="middle",W.forEach((ut,ot)=>{let nt=36+ot*46;H.textAlign="left",Ui(H,ut,J-90,34),H.fillText(ut,22,nt)}),H.beginPath(),H.moveTo(J-28,18),H.lineTo(J-28,46),H.lineTo(J-56,18),H.closePath(),H.fill(),H.lineWidth=8,H.strokeStyle=it,H.beginPath(),H.moveTo(J-62,52),H.lineTo(J-36,26),H.stroke()});return z&&{uv:z,w:3.2,h:3.2*Z/400,text:!0}},T=W=>{let tt=d.add("rf"+W,130,56,(Z,z,H)=>{let J=/^A\d/.test(W);Z.fillStyle="#fff",Z.fillRect(0,0,z,H),Z.fillStyle=J?"#0b7a3b":"#0a4fa6",Z.fillRect(4,4,z-8,H-8),Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle",Ui(Z,W,z-18,30),Z.fillText(W,z/2,H/2+2)});return tt&&{uv:tt,w:.8,h:.34,text:!0}},M=W=>{let tt=d.add("bs"+W,190,36,(Z,z,H)=>{Z.fillStyle="#f2c417",Z.fillRect(0,0,z,H),Z.fillStyle="#111",Z.textAlign="center",Z.textBaseline="middle",Ui(Z,W,z-12,20),Z.fillText(W,z/2,H/2+1)});return tt&&{uv:tt,w:1,h:.2,text:!0,double:!0}},w=W=>{let tt=d.add("ft"+W,150,150,(Z,z,H)=>{Z.fillStyle="#f4f4f4",Z.fillRect(0,0,z,H),Z.fillStyle="#d6202a",Z.fillRect(0,0,z,52),Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle",Ui(Z,W||"CARBURANTI",z-14,26),Z.fillText(W||"CARBURANTI",z/2,27),Z.fillStyle="#111",Z.font="bold 20px Arial",Z.textAlign="left",Z.fillText("Benzina",10,80),Z.fillText("Gasolio",10,108),Z.fillText("GPL",10,134),Z.fillStyle="#0b7a3b",Z.textAlign="right",Z.fillText("1.7"+W.length%9,z-10,80),Z.fillText("1.6"+W.length*3%9,z-10,108),Z.fillText("0.7"+W.length*7%9,z-10,134)});return tt&&{uv:tt,w:1.5,h:1.5,text:!0,double:!0}},R=W=>nh.includes("s"+W)?_("s"+W,.66):null,P=(W,tt,Z,z,H)=>n.heightOn(W,tt,Z,z,H),U=(W,tt,Z,z,H,J)=>{let Q=-z,X=Z,it=W.w.width/2,ut=n.nx[tt]-Z*(H+.8),ot=n.nz[tt]-z*(H+.8),nt=W.w.oneway?-it+.3:(W.fwd?W.w.cOff:-W.w.cOff)+.1,xt=it-.3,F=P(W.wi,W.seg,W.t,ut,ot)+.03;if(J)for(let vt=nt;vt+.5<=xt;vt+=.75){let yt=[[vt,-.3],[vt+.5,-.3],[vt+.25,.35]].map(([bt,ht])=>c.v(ut+Q*bt-Z*ht,F,ot+X*bt-z*ht));c.tri(yt[0],yt[1],yt[2]),c.tri(yt[0],yt[2],yt[1])}else{let vt=c.v(ut+Q*nt-Z*.25,F,ot+X*nt-z*.25),yt=c.v(ut+Q*xt-Z*.25,F,ot+X*xt-z*.25),bt=c.v(ut+Q*xt+Z*.25,F,ot+X*xt+z*.25),ht=c.v(ut+Q*nt+Z*.25,F,ot+X*nt+z*.25);c.quad(vt,yt,bt,ht)}return[ut+Q*(nt+xt)/2,ot+X*(nt+xt)/2,xt-nt]},L=new Set,B=new Set,N=new Set,G=0;for(let W of r){let tt=Math.floor(W/16384),Z=W%16384,z=n.ways[tt];if(!z.drivable)continue;let H=z.nodes[Z],J=z.nodes[Z+1],Q=n.nx[H],X=n.nz[H],it=n.nx[J],ut=n.nz[J],ot=Math.hypot(it-Q,ut-X);if(ot<.3)continue;let nt=(it-Q)/ot,xt=(ut-X)/ot,F=-xt,vt=nt,yt=z.width/2,bt=z.nodes.length-2,ht=yt+.9;for(let lt of[H,J]){if(L.has(lt))continue;L.add(lt);let I=n.ntag[lt];if(n.degMain[lt]>=3&&G<240){let st=new Set;for(let et=n.adjStart[lt];et<n.adjStart[lt+1];et++){let ft=n.ways[n.adjWay[et]],pt=n.adjPos[et];if(!ft.name||!ft.drivable||ft.cls>Ht.LIVING||st.has(ft.name)||B.has(ft.name+"@"+lt))continue;st.add(ft.name),B.add(ft.name+"@"+lt);let _t=pt<ft.nodes.length-1?ft.nodes[pt+1]:ft.nodes[pt-1],Xt=n.nx[_t]-n.nx[lt],mt=n.nz[_t]-n.nz[lt],At=Math.hypot(Xt,mt)||1;Xt/=At,mt/=At;let Ft=n.w1[lt]/2+2.4,Wt=ft.width/2+.9,Et=n.nx[lt]+Xt*Ft-mt*Wt,qt=n.nz[lt]+mt*Ft+Xt*Wt,Yt=v(ft.name);Yt&&(x(Et,qt,-mt,Xt,[Yt],2.45),G++)}}if(!I)continue;let A=this.approaches(lt).filter(st=>st.w.cls<=Ht.SERVICE);if(!A.length)continue;let V=n.degMain[lt]>=3,rt=st=>{let et=n.nx[lt]-n.nx[st.from],ft=n.nz[lt]-n.nz[st.from],pt=Math.hypot(et,ft)||1;return[et/pt,ft/pt,pt]};if(I===Jt.SIGNALS||I===Jt.STOP||I===Jt.GIVE_WAY||I===Jt.CROSSING_SIGNALS){let st=A,et=n.ndir[lt];if(et&&!V){let ft=A.filter(pt=>pt.fwd===(et===1));ft.length&&(st=ft)}else if(I!==Jt.SIGNALS&&I!==Jt.CROSSING_SIGNALS&&V){let ft=Math.min(...A.map(pt=>pt.w.cls));st=A.filter(pt=>pt.w.cls>ft),st.length||(st=A.slice(0,1))}else if(!V&&I!==Jt.CROSSING_SIGNALS){let ft=A.filter(pt=>this.leadsToJunction(lt,pt.from));ft.length&&(st=ft)}for(let ft of st){let[pt,_t,Xt]=rt(ft),mt=-_t,At=pt,Ft=ft.w.width/2,Wt=V?Math.min(Xt*.6+2,n.w1[lt]/2+1.5):I===Jt.CROSSING_SIGNALS?2.5:0,Et=n.nx[lt]-pt*Wt+mt*(Ft+.9),qt=n.nz[lt]-_t*Wt+At*(Ft+.9),Yt=Math.atan2(-pt,-_t);if(I===Jt.SIGNALS||I===Jt.CROSSING_SIGNALS){let ae=s.height(Et,qt);Ue(o,Et,ae+1.55,qt,.09,3.1,.09,Yt,m),Ue(o,Et,ae+3,qt,.38,1.05,.3,Yt,[.1,.1,.1]);let Y=-pt*.16,Tt=-_t*.16;if(I===Jt.SIGNALS){let dt=Math.abs(pt)>Math.abs(_t)?1:0,gt=h[dt];Ue(gt.R,Et+Y,ae+3.33,qt+Tt,.22,.22,.04,Yt,[1,1,1]),Ue(gt.Y,Et+Y,ae+3,qt+Tt,.22,.22,.04,Yt,[1,1,1]),Ue(gt.G,Et+Y,ae+2.67,qt+Tt,.22,.22,.04,Yt,[1,1,1]),y.push({node:lt,group:dt})}else Ue(f,Et+Y,ae+2.67,qt+Tt,.22,.22,.04,Yt,[1,1,1]);U(ft,lt,pt,_t,Wt+(I===Jt.CROSSING_SIGNALS?.5:0),!1)}else if(I===Jt.STOP){x(Et,qt,pt,_t,[_("stop",.75)]);let[ae,Y,Tt]=U(ft,lt,pt,_t,Wt,!1);ft.w.cls<=Ht.RESIDENTIAL&&Tt>2&&n.addDecal(u,ft.wi,ft.seg,ft.t,ae-pt*2.6,Y-_t*2.6,pt,_t,Math.min(2.4,Tt-.4),3,"stop")}else x(Et,qt,pt,_t,[_("giveway",.8)]),U(ft,lt,pt,_t,Wt,!0)}}else if(I===Jt.CROSSING&&!V&&z.cls<=Ht.UNCLASSIFIED)for(let st of A){let[et,ft]=rt(st);x(n.nx[lt]-et*2.6-ft*(st.w.width/2+.9),n.nz[lt]-ft*2.6+et*(st.w.width/2+.9),et,ft,[_("ped",.6)])}else if(I===Jt.BUMP||I===Jt.TABLE)for(let st of A){let[et,ft]=rt(st);x(n.nx[lt]-et*7-ft*(st.w.width/2+.9),n.nz[lt]-ft*7+et*(st.w.width/2+.9),et,ft,[_("bump",.8),I===Jt.TABLE?null:R(30)])}else if(I===Jt.LEVEL_CROSSING)for(let st of A){let[et,ft]=rt(st),pt=n.nx[lt]-et*5-ft*(st.w.width/2+.9),_t=n.nz[lt]-ft*5+et*(st.w.width/2+.9);x(pt,_t,et,ft,[_("level",.95)],1.7);let Xt=s.height(pt,_t),mt=Math.atan2(-et,-ft);Ue(o,pt-et*.8,Xt+.55,_t-ft*.8,.3,1.1,.3,mt,[.75,.75,.75]);for(let At=0;At<6;At++)Ue(o,pt-et*.8+ft*.25,Xt+1.4+At*.7,_t-ft*.8-et*.25,.1,.7,.1,mt,At%2?[.85,.1,.1]:[.95,.95,.95])}}let Ut=z.limitMapped&&z.cls<=Ht.RESIDENTIAL&&z.len>80&&!(z.flags&Nt.ROUNDABOUT);if(Z===0&&Ut&&this.neighbourLimit(H,tt)!==z.limit){let lt=Math.min(14,z.len*.3),[I,A]=n.pointAt(z,lt);x(I+F*ht,A+vt*ht,nt,xt,[R(z.limit)],2.1)}if(Z===bt&&!z.oneway&&Ut&&this.neighbourLimit(J,tt)!==z.limit){let lt=Math.min(14,z.len*.3),[I,A]=n.pointAt(z,z.len-lt);x(I-F*ht,A-vt*ht,-nt,-xt,[R(z.limit)],2.1)}if(z.oneway&&!(z.flags&(Nt.ROUNDABOUT|Nt.LINK))&&z.cls>=Ht.TERTIARY&&z.cls<=Ht.LIVING&&z.len>25){let lt=(I,A)=>{for(let V=n.adjStart[I];V<n.adjStart[I+1];V++){let rt=n.adjWay[V],st=n.ways[rt];if(rt!==tt&&st.oneway&&(st.name===z.name||n.degMain[I]<3)&&n.adjPos[V]===(A?st.nodes.length-1:0))return!0}return!1};if(Z===0&&n.degMain[H]>=3&&!n.onRb[H]&&!lt(H,!0)){let[I,A]=n.pointAt(z,Math.min(6,z.len*.3));x(I+F*ht,A+vt*ht,nt,xt,[_("oneway",.6)])}if(Z===bt&&n.degMain[J]>=3&&!n.onRb[J]&&!lt(J,!1)){let I=Math.min(z.len*.3,n.w1[J]/2+1.5);for(let A of[1,-1])x(it-nt*I+F*ht*A,ut-xt*I+vt*ht*A,-nt,-xt,[_("noentry",.6)])}}if(Z===0&&z.dest&&z.len>30){let lt=z.dest.split("|"),I=lt[lt.length-1].split(";").map(rt=>rt.trim()).filter(Boolean).slice(0,4);lt.length>1&&(I[0]=lt[0].split(";")[0]+"  "+I[0]);let A=z.cls===0?"green":z.cls<=3||z.limit>50?"blue":"white",V=E(I,A);if(V){let[rt,st]=n.pointAt(z,Math.min(18,z.len*.4)),et=rt+F*(ht+1.8),ft=st+vt*(ht+1.8),pt=s.height(et,ft),_t=Math.atan2(-nt,-xt);for(let Xt of[1,-1])Ue(o,et+F*1.3*Xt,pt+1.6+V.h/2,ft+vt*1.3*Xt,.1,3.2+V.h,.1,_t,m);Ln(l,et-nt*.08,pt+3.2+V.h/2,ft-xt*.08,V.w,V.h,_t,V.uv),Ln(a,et+nt*.08,pt+3.2+V.h/2,ft+xt*.08,V.w,V.h,_t+Math.PI,yr("back"))}}if(z.ref&&z.cls<=Ht.TERTIARY&&!(z.flags&(Nt.LINK|Nt.ROUNDABOUT))&&z.len>160){let lt=z.ref.split(";")[0].trim();if(Z===0&&n.degMain[H]>=3&&!N.has(lt+H)){N.add(lt+H);let[I,A]=n.pointAt(z,38);x(I+F*ht,A+vt*ht,nt,xt,[T(lt)],1.9)}if(Z===bt&&!z.oneway&&n.degMain[J]>=3&&!N.has(lt+J)){N.add(lt+J);let[I,A]=n.pointAt(z,z.len-38);x(I-F*ht,A-vt*ht,-nt,-xt,[T(lt)],1.9)}}if(z.cls<=Ht.RESIDENTIAL&&z.cls>=Ht.TRUNK&&!(z.flags&(Nt.LINK|Nt.BRIDGE|Nt.TUNNEL|Nt.ROUNDABOUT))){let lt=this.comuneOfNode(H),I=this.comuneOfNode(J);if(lt&&I&&lt!==I){let A=0,V=1;for(let et=0;et<10;et++){let ft=(A+V)/2;this.comuneAt(Q+(it-Q)*ft,X+(ut-X)*ft)===lt?A=ft:V=ft}let rt=Q+(it-Q)*A,st=X+(ut-X)*A;this.townSign(o,l,a,rt+F*(ht+.4),st+vt*(ht+.4),nt,xt,b(I,!1),b(I,!0)),z.oneway||this.townSign(o,l,a,rt-F*(ht+.4),st-vt*(ht+.4),-nt,-xt,b(lt,!1),b(lt,!0))}}if(z.cls>=Ht.PRIMARY&&z.cls<=Ht.LIVING&&!z.abs&&!(z.flags&Nt.ROUNDABOUT)&&z.lit!==2){let lt=z.cum[Z];for(let I=Math.ceil(lt/30)*30-lt;I<ot;I+=30){let A=Q+nt*I,V=X+xt*I;if(z.lit!==1&&!s.isUrban(A,V))continue;let rt=Math.floor((lt+I)/30+.5)%2===0||z.oneway?1:-1,st=A+F*rt*(yt+1.1),et=V+vt*rt*(yt+1.1),ft=n.nearest(st,et,6);ft&&ft.d<n.ways[ft.wi].width/2+.4||g.push([st,s.height(st,et),et,Math.atan2(vt*rt,-F*rt)])}}}for(let W of n.roundaboutEntries(t)){let tt=n.ways[W.wi],Z=n.nx[W.nd]-n.nx[W.from],z=n.nz[W.nd]-n.nz[W.from],H=Math.hypot(Z,z)||1;Z/=H,z/=H;let J=n.w1[W.nd]/2+2.5,Q=!1,X=0,it=W.dir>0?tt.nodes.length-1:0;for(;X<30&&it-W.dir>=0&&it-W.dir<tt.nodes.length;){let nt=tt.nodes[it],xt=tt.nodes[it-W.dir];if(X+=Math.hypot(n.nx[xt]-n.nx[nt],n.nz[xt]-n.nz[nt]),it-=W.dir,n.ntag[xt]===Jt.GIVE_WAY||n.ntag[xt]===Jt.STOP){Q=!0;break}}let ut=n.nx[W.nd]-Z*J-z*(tt.width/2+.9),ot=n.nz[W.nd]-z*J+Z*(tt.width/2+.9);x(ut,ot,Z,z,[Q?null:_("giveway",.8),_("roundabout",.62)])}let O=new Set;for(let W of r){let tt=Math.floor(W/16384),Z=W%16384,z=n.ways[tt];if(z.flags&Nt.ROUNDABOUT||!z.drivable||z.cls>Ht.TERTIARY)continue;let H=z.nodes.length-2;for(let[J,Q]of[[0,1],[z.nodes.length-1,-1]]){if((Q>0?Z!==0:Z!==H)||Q<0&&z.oneway)continue;let X=z.nodes[J];if(!n.onRb[X]||O.has(tt*2+(Q>0?0:1)))continue;O.add(tt*2+(Q>0?0:1));let it=this.traceDestination(tt,J,Q,X);if(!it)continue;let ut=z.nodes[J+Q],ot=n.nx[ut]-n.nx[X],nt=n.nz[ut]-n.nz[X],xt=Math.hypot(ot,nt)||1;ot/=xt,nt/=xt;let F=z.limit>50||z.cls<=Ht.SECONDARY,vt=S(it.name,F?Math.max(1,Math.round(it.dist/1e3)):0,F),yt=n.w1[X]/2+3.5;x(n.nx[X]+ot*yt-nt*(z.width/2+1.2),n.nz[X]+nt*yt+ot*(z.width/2+1.2),ot,nt,[vt],2.3)}}for(let[W,tt,Z,z]of e&&e.pt||[]){let H=tt/10,J=Z/10,Q=e.s[z]||"",X=n.nearest(H,J,30,ht=>ht.drivable&&ht.cls<=Ht.SERVICE),it=0,ut=1;if(X){let ht=Math.hypot(X.dx,X.dz)||1;it=X.dx/ht,ut=X.dz/ht}let ot=X&&Math.sign((H-X.px)*-ut+(J-X.pz)*it)||1,nt=X?n.ways[X.wi].width/2:0,xt=X?Math.max(X.d,nt+1):0,F=X?X.px-ut*ot*xt:H,vt=X?X.pz+it*ot*xt:J,yt=it*ot,bt=ut*ot;if(W===1){x(F,vt,yt,bt,[_("bus",.5),Q?M(Q):null],2);let ht=s.height(F,vt),Ut=Math.atan2(-yt,-bt),lt=-ut*ot,I=it*ot,A=F+yt*2.2+lt*.9,V=vt+bt*2.2+I*.9;Ue(o,A,ht+2.45,V,1.5,.08,3,Ut,[.25,.3,.34]),Ue(o,A+lt*.7,ht+1.25,V+I*.7,.05,2.4,3,Ut,[.55,.68,.74]);for(let rt of[-1.45,1.45])Ue(o,A+yt*rt-lt*.6,ht+1.2,V+bt*rt-I*.6,.07,2.4,.07,Ut,m)}else if(W===2){let ht=X?Math.atan2(it*ot,ut*ot):0;g.push([H,s.height(H,J),J,ht,1])}else if(W===3&&X){let ht=[...this.places.values()].flat().find(V=>V.n===Q),Ut=yt,lt=bt;if(ht){let V=Math.sign((ht.x-F)*it+(ht.z-vt)*ut)||1;Ut=it*V,lt=ut*V}let I=X.px-lt*(nt+1.3),A=X.pz+Ut*(nt+1.3);this.townSign(o,l,a,I,A,Ut,lt,b(Q,!1),b(Q,!0))}else if(W===4&&X){x(F,vt,yt,bt,[_("camera",.9)],2),p.push([X.px+it*ot*14,X.pz+ut*ot*14]);let ht=s.height(F,vt),Ut=Math.atan2(-yt,-bt);Ue(o,F+yt*14,ht+1.4,vt+bt*14,.5,2.8,.5,Ut,[.95,.5,.1]),Ue(o,F+yt*14-yt*.26,ht+2.3,vt+bt*14-bt*.26,.3,.3,.04,Ut,[.05,.05,.05])}else if(W===5){let ht=w(Q);if(ht){let Ut=s.height(F,vt),lt=Math.atan2(-yt,-bt);Ue(o,F,Ut+2.6,vt,1.6,5.2,.3,lt,[.9,.9,.9]),Ln(l,F-yt*.16,Ut+4.3,vt-bt*.16,ht.w,ht.h,lt,ht.uv),Ln(l,F+yt*.16,Ut+4.3,vt+bt*.16,ht.w,ht.h,lt+Math.PI,ht.uv)}}}let q=new jt,$=[];if(o.empty||q.add(o.mesh(this.poleMat,!0)),a.empty||q.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let W=d.material();$.push(W),q.add(l.mesh(W))}c.empty||q.add(c.mesh(this.markMat)),u.empty||q.add(u.mesh(this.decalMat));for(let W=0;W<2;W++)for(let tt of["R","Y","G"])h[W][tt].empty||q.add(h[W][tt].mesh(this.lights[W][tt]));if(f.empty||q.add(f.mesh(this.greenMat)),g.length){let W=g.filter(ot=>ot[4]),tt=g.filter(ot=>ot[4]||!W.some(nt=>Math.hypot(nt[0]-ot[0],nt[2]-ot[2])<22)),Z=new Se(this.lampPoleGeo,this.lampPoleMat,tt.length),z=new Se(this.lampHeadGeo,this.lampMat,tt.length),H=new Se(this.poolGeo,this.poolMat,tt.length),J=new $t,Q=new Ae,X=new k(0,1,0),it=new k(1,1,1),ut=new k;tt.forEach(([ot,nt,xt,F],vt)=>{Q.setFromAxisAngle(X,F),ut.set(ot,nt,xt),J.compose(ut,Q,it),Z.setMatrixAt(vt,J),z.setMatrixAt(vt,J),H.setMatrixAt(vt,J)}),Z.computeBoundingSphere(),z.computeBoundingSphere(),H.computeBoundingSphere(),H.renderOrder=2,q.add(Z,z,H)}return q.userData.dispose=()=>{for(let W of $)W.map.dispose(),W.dispose()},{group:q,signals:y,lamps:g,cameras:p}}townSign(t,e,n,s,r,o,a,l,c){if(!l)return;let u=this.terrain,h=u.height(s,r),f=Math.atan2(-o,-a),d=-a,g=o,y=[.42,.43,.44];Ue(t,s-d*.75,h+1.35,r-g*.75,.08,2.7,.08,f,y),Ue(t,s+d*.75,h+1.35,r+g*.75,.08,2.7,.08,f,y),Ln(e,s-o*.06,h+2.25,r-a*.06,l.w,l.h,f,l.uv),c?Ln(e,s+o*.06,h+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):Ln(n,s+o*.06,h+2.25,r+a*.06,l.w,l.h,f+Math.PI,yr("back"))}};var la=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,s,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(s/24);for(let u=l;u<=c;u++)for(let h=o;h<=a;h++)r(u*1e5+h)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,s=>{let r=this.grid.get(s);r||this.grid.set(s,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e){let n=1e9,s=1e9,r=-1e9,o=-1e9;for(let l=0;l<e.length;l+=2)n=Math.min(n,e[l]),r=Math.max(r,e[l]),s=Math.min(s,e[l+1]),o=Math.max(o,e[l+1]);if(r-n<1.5&&o-s<1.5)return null;let a={ring:e,tile:t,minx:n,minz:s,maxx:r,maxz:o};return this._add(t,a),a}addCircle(t,e,n,s){let r={x:e,z:n,r:s,tile:t,minx:e-s,minz:n-s,maxx:e+s,maxz:n+s};return this._add(t,r),r}remove(t){this._cells(t.minx,t.minz,t.maxx,t.maxz,n=>{let s=this.grid.get(n);if(!s)return;let r=s.indexOf(t);r>=0&&s.splice(r,1),s.length||this.grid.delete(n)});let e=this.byTile.get(t.tile);if(e){let n=e.indexOf(t);n>=0&&e.splice(n,1)}}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let s of e)this._cells(s.minx,s.minz,s.maxx,s.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}resolveCircle(t,e,n){let s=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=dy(t,e,n,l.ring);else{let u=t-l.x,h=e-l.z,f=Math.hypot(u,h);f<n+l.r&&(c={nx:f>1e-6?u/f:1,nz:f>1e-6?h/f:0,depth:n+l.r-f})}c&&(!s||c.depth>s.depth)&&(s=c)}}),s}};function dy(i,t,e,n){let s=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=s-1;f<s;d=f++){let g=n[f*2],y=n[f*2+1],p=n[d*2],m=n[d*2+1];y>t!=m>t&&i<(p-g)*(t-y)/(m-y)+g&&(r=!r);let _=g-p,x=y-m,v=_*_+x*x||1e-9,b=((i-p)*_+(t-m)*x)/v;b=b<0?0:b>1?1:b;let S=p+_*b,E=m+x*b,T=Math.hypot(i-S,t-E);T<o&&(o=T,a=S,l=E)}if(!r&&o>=e)return null;let c=i-a,u=t-l,h=Math.hypot(c,u)||1e-6;return c/=h,u/=h,r?{nx:-c,nz:-u,depth:o+e}:{nx:c,nz:u,depth:e-o}}var wn={darkMetal:new Gt({color:3620675}),greyMetal:new Gt({color:4344399}),midMetal:new Gt({color:5002330}),wood:new Gt({color:8016432}),woodDark:new Gt({color:6044964}),stone:new Gt({color:9407104}),soil:new Gt({color:4142122}),hedge:new Gt({color:4025145}),binBody:new Gt({color:3951169}),binLid:new Gt({color:3227449}),red:new Gt({color:11545120}),white:new Gt({color:15790318}),signBlue:new Gt({color:2183567}),roof:new Gt({color:3159099}),glass:new ce({color:12374749,metalness:0,roughness:.1,transparent:!0,opacity:.28,side:re,depthWrite:!1})};function Sn(i){let t=i.map(a=>a.index?a.toNonIndexed():a),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=0;for(let a of t){let l=a.attributes.position.array;n.set(l,r*3),a.attributes.normal&&s.set(a.attributes.normal.array,r*3),r+=a.attributes.position.count}let o=new se;return o.setAttribute("position",new ge(n,3)),o.setAttribute("normal",new ge(s,3)),o.computeVertexNormals(),o}function Df(i,t,e,{shadow:n=!0}={}){let s=new Se(i,t,e);s.castShadow=n,s.count=e;let r=new $t,o=new Ae,a=new Ze,l=new k,c=new k(1,1,1);return{mesh:s,setAt:(h,f,d,g=0,y=0)=>{a.set(0,g,0),o.setFromEuler(a),l.set(f,y,d),r.compose(l,o,c),s.setMatrixAt(h,r),s.instanceMatrix.needsUpdate=!0},count:e}}function ca(i,t,{shadow:e=!0}={}){let n=new jt,s=i.map(({geom:h,material:f})=>{let d=new Se(h,f,t);return d.castShadow=e,d.count=t,n.add(d),d}),r=new $t,o=new Ae,a=new Ze,l=new k,c=new k(1,1,1);return{mesh:n,setAt:(h,f,d,g=0,y=0)=>{a.set(0,g,0),o.setFromEuler(a),l.set(f,y,d),r.compose(l,o,c);for(let p of s)p.setMatrixAt(h,r),p.instanceMatrix.needsUpdate=!0},count:t}}function Nf(i){let t=new ie(.075,.1,.82,8);t.translate(0,.41,0);let e=new fn(.085,8,5,0,Math.PI*2,0,Math.PI/2);e.translate(0,.82,0);let n=new ie(.11,.11,.06,8);n.translate(0,.1,0);let s=Sn([t,e,n]);return Df(s,wn.darkMetal,i)}function Uf(i){let t=new ie(.05,.05,.55,6);t.translate(0,.28,0);let e=new ie(.11,.14,.08,8);e.translate(0,.04,0);let n=new ie(.19,.17,.5,9);n.translate(0,.82,0);let s=new Pn(.19,.02,5,9).rotateX(Math.PI/2);s.translate(0,1.07,0);let r=Sn([t,e,n,s]),o=new ie(.215,.2,.06,9);o.translate(0,1.12,0);let a=new fn(.2,9,5,0,Math.PI*2,0,Math.PI/2.6);a.translate(0,1.13,0);let l=Sn([o,a]);return ca([{geom:r,material:wn.binBody},{geom:l,material:wn.binLid}],i)}function zf(i){let s=[];for(let c=0;c<3;c++){let u=new zt(1.8,.04,.11);u.translate(0,.45,-.18+c*.15),s.push(u)}for(let c=0;c<3;c++){let u=new zt(1.8,.11,.035);u.translate(0,.85-.02+c*.15,-.28),s.push(u)}let r=Sn(s),o=[];for(let c of[-1,1]){let u=c*.8200000000000001,h=new zt(.05,.45,.05);h.translate(u,.45/2,.12);let f=new zt(.05,.85+.1,.05);f.translate(u,(.85+.1)/2,-.28);let d=new zt(.05,.05,.55);d.translate(u,.45,-.08),o.push(h,f,d)}let a=new zt(1.8-.2,.04,.04);a.translate(0,.12,0),o.push(a);let l=Sn(o);return ca([{geom:r,material:wn.wood},{geom:l,material:wn.darkMetal}],i)}function Ff(i){let t=[];for(let r=0;r<3;r++){let o=(r-1)*.75,a=new zt(.06,.78,.06);a.translate(o-.7/2,.78/2,0);let l=new zt(.06,.78,.06);l.translate(o+.7/2,.78/2,0);let c=new zt(.7+.06,.06,.06);c.translate(o,.78,0),t.push(a,l,c)}return Df(Sn(t),wn.darkMetal,i)}function Of(i){let t=new ie(.09,.13,.95,8);t.translate(0,.475,0);let e=new ie(.16,.2,.08,8);e.translate(0,.04,0);let n=new ie(.17,.13,.1,10);n.translate(0,.9,0);let s=new ie(.13,.11,.07,10);s.translate(0,.94,0);let r=Sn([t,e,n]),o=new ie(.015,.015,.14,5).rotateX(Math.PI/2.4);o.translate(0,1,.06);let a=new fn(.03,6,5);return a.translate(0,1.02,-.09),ca([{geom:r,material:wn.greyMetal},{geom:Sn([s]),material:wn.midMetal},{geom:Sn([o,a]),material:wn.darkMetal}],i)}function Bf(i){let t=new ie(.23,.25,.07,6);t.translate(0,.035,0);let e=new ie(.135,.165,.6,9);e.translate(0,.37,0);let n=new ie(.115,.175,.1,9);n.translate(0,.72,0);let s=new fn(.125,9,5,0,Math.PI*2,0,Math.PI/2);s.translate(0,.77,0);let r=new ie(.085,.085,.1,8).rotateX(Math.PI/2);r.translate(0,.5,.15);let o=Sn([t,e,n,s,r]),a=[];for(let u of[-1,1]){let h=new ie(.062,.062,.07,6).rotateZ(Math.PI/2);h.translate(u*.165,.46,0),a.push(h)}let l=new ie(.092,.092,.04,8).rotateX(Math.PI/2);l.translate(0,.5,.21);let c=new ie(.045,.05,.07,5);return c.translate(0,.88,0),a.push(l,c),ca([{geom:o,material:wn.red},{geom:Sn(a),material:wn.darkMetal}],i)}function Hf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new se,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=kf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let g=kf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function kf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new ge(o,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let y=u.getComponent(f,g);a.setComponent(f+h,g,y)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var py={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},ha=class{constructor(t,e,n,s,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=s,this.settings=r,this.collision=new la,this.gates=new na(s,n,this.collision),this.tiles=new Map,this.queue=[],this.detail=wf(256),this.terrainMat=n.makeMaterial(this.detail),this.farMat=n.makeMaterial(this.detail),this.buildings=new ra(n),this.vegetation=new oa(n,s),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,u=-1e9;for(let h of o.rings)for(let f of h)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),u=Math.max(u,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:u}}),this.signage=new aa(s,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.cameras=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new jt,t.add(this.root),this.buildFar(),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let s=!1;for(let r of n.rings)bf(t,e,r)&&(s=!s);if(s)return n.n}return null}buildFar(){let t=this.meta.proj,e=2e3,n=80;this.far=new jt;for(let s=t.zmin;s<t.zmax;s+=e)for(let r=t.xmin;r<t.xmax;r+=e){let o=this.terrain.buildChunk(r,s,e,n,this.farMat,1.5);o.receiveShadow=!1,this.far.add(o)}this.root.add(this.far)}buildWaters(){let t=new Ms({color:4157327,specular:10070715,shininess:80,transparent:!0,opacity:.92,side:re});this.waterMat=t;let e=new jt;for(let n of this.meta.waters)for(let s of n.o){if(s.length<4)continue;let r=s.map(g=>new It(g[0],g[1])),o=(n.i||[]).filter(g=>g.length>=4).map(g=>g.map(y=>new It(y[0],y[1]))),a;try{a=Ci.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=l.map(g=>this.terrain.height(g.x,g.y)).sort((g,y)=>g-y),u=c[Math.floor(c.length*.3)]+.35,h=new Float32Array(l.length*3);l.forEach((g,y)=>{h[y*3]=g.x,h[y*3+1]=u,h[y*3+2]=g.y});let f=[];for(let[g,y,p]of a)f.push(g,p,y);let d=new se;d.setAttribute("position",new ge(h,3)),d.setIndex(f),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(d.setIndex(f.map((g,y)=>f[y-y%3+[0,2,1][y%3]])),d.computeVertexNormals()),e.add(new St(d,t))}this.root.add(e)}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,s=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let l=r-o;l<=r+o;l++)for(let c=s-o;c<=s+o;c++){if(c<0||l<0||c>=this.meta.tilesX||l>=this.meta.tilesZ)continue;let u=n.xmin+(c+.5)*1e3,h=n.zmin+(l+.5)*1e3,f=Math.hypot(u-t,h-e);if(f>(o+.3)*1e3)continue;if(a.add(l*1e3+c),!this.tiles.has(l*1e3+c)){let g={i:c,j:l,key:l*1e3+c,parts:{},state:"new",d:f};this.tiles.set(g.key,g)}let d=this.tiles.get(l*1e3+c);d.d=f,d.vegWanted=f<1700}for(let[l,c]of this.tiles)!a.has(l)&&c.d>(o+.9)*1e3?this.unload(c):a.has(l)||(c.d=Math.hypot(n.xmin+(c.i+.5)*1e3-t,n.zmin+(c.j+.5)*1e3-e))}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(s=>{s.geometry&&s.geometry.dispose(),s.isSprite&&s.material.map&&(s.material.map.dispose(),s.material.dispose())}))}this.collision.removeTile(t.key),this.traffic&&this.traffic.removeTile(t.key),this.cameras=this.cameras.filter(e=>e.tile!==t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((s,r)=>s.d-r.d);for(let s of n){if(performance.now()-e>t)return!1;if(s.state==="new"){s.state="loading",this.tileSet.has(s.key)?Li("t_"+s.i+"_"+s.j,`data/tiles/t_${s.i}_${s.j}.js`).then(c=>{s.data=c,s.state="ready"}).catch(()=>{s.data=null,s.state="ready"}):(s.data=null,s.state="ready");continue}if(s.state!=="ready"||s.dead)continue;let r=this.meta.proj,o=r.xmin+s.i*1e3,a=r.zmin+s.j*1e3,l=(c,u)=>{s.parts[c]=u,u&&this.root.add(u)};if(!("terrain"in s.parts)){l("terrain",this.terrain.buildChunk(o,a,1e3,20,this.terrainMat));continue}if(!("roads"in s.parts)){l("roads",this.roads.buildTile(s.key));continue}if(!("signs"in s.parts)){let c=this.signage.build(s.key,s.data);for(let u of c.signals)this.signals.push({...u,tile:s.key});for(let u of c.cameras||[])this.cameras.push({x:u[0],z:u[1],tile:s.key});l("signs",c.group);continue}if(!("buildings"in s.parts)){if(s.data){let c=this.buildings.build(s.data,this.collision,s.key);l("buildings",c.group)}else l("buildings",null);for(let c of this.roads.roundabouts)this.roads.tileKey(c.x,c.z)===s.key&&this.collision.addCircle(s.key,c.x,c.z,c.r);continue}if(!("paths"in s.parts)){let c=new jt,u=this.roads.buildPaths(s.data),h=this.roads.buildBarriers(s.data,this.collision,s.key),f=this.buildPower(s),d=this.roads.buildStalls(s.data);for(let g of[u,h,f,d])g&&c.add(g);l("paths",c.children.length?c:null);continue}if(!("gates"in s.parts)){l("gates",this.gates.build(s.key,s.data));continue}if(!("props"in s.parts)){l("props",this.buildProps(s)),this.traffic&&this.traffic.computeParkSpots(s.key,s.data);continue}if(!("labels"in s.parts)){l("labels",this.buildLabels(s));continue}if(s.vegWanted&&!("veg"in s.parts)){l("veg",this.vegetation.build(s.data,s.i,s.j,this.collision,s.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=9,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,s=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=_=>_[0]>=s&&_[0]<s+1e3&&_[1]>=r&&_[1]<r+1e3,a=30,l=[],c=[],u=this.terrain;for(let _ of e)for(let x=0;x<_.length;x++){if(!o(_[x]))continue;let v=_[x],b=_[x-1]||_[x+1],S=_[x+1]||_[x-1],E=S[0]-b[0],T=S[1]-b[1],M=Math.hypot(E,T)||1;if(E/=M,T/=M,c.push([v[0],u.height(v[0],v[1]),v[1],Math.atan2(E,T)]),x<_.length-1){let w=_[x+1],R=u.height(v[0],v[1])+a,P=u.height(w[0],w[1])+a,U=Math.hypot(w[0]-v[0],w[1]-v[1]),L=-(w[1]-v[1])/(U||1),B=(w[0]-v[0])/(U||1);for(let[N,G]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let O=0;O<8;O++)for(let q of[O/8,(O+1)/8]){let $=Math.min(9,U*.03)*4*q*(1-q);l.push(v[0]+(w[0]-v[0])*q+L*N,R+(P-R)*q+G-$,v[1]+(w[1]-v[1])*q+B*N)}}}if(!c.length)return null;let h=new jt;if(l.length){let _=new se;_.setAttribute("position",new Zt(l,3)),this.wireMat=this.wireMat||new rr({color:2763822}),h.add(new No(_,this.wireMat))}if(!this.towerGeo){let _=[],x=new ie(.12,.2,a,4);for(let[v,b]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let S=x.clone();S.rotateZ(-v*.08),S.rotateX(b*.08),S.translate(v*1.6,a/2,b*1.6),_.push(S)}for(let[v,b]of[[a-4,11],[a,8]]){let S=new zt(b,.25,.25);S.translate(0,v,0),_.push(S)}for(let v=5;v<a;v+=6){let b=new zt(3.4-v*.06,.12,3.4-v*.06);b.translate(0,v,0),_.push(b)}this.towerGeo=Hf(_.map(v=>v.toNonIndexed())),this.towerMat=new Gt({color:9080982})}let f=new Se(this.towerGeo,this.towerMat,c.length),d=new $t,g=new Ae,y=new k(0,1,0),p=new k(1,1,1),m=new k;return c.forEach(([_,x,v,b],S)=>{g.setFromAxisAngle(y,b),m.set(_,x-.5,v),d.compose(m,g,p),f.setMatrixAt(S,d),this.collision.addCircle(t.key,_,v,2.2)}),f.computeBoundingSphere(),h.add(f),h}buildProps(t){let e=t.data&&t.data.pt||[],n={10:zf,11:Uf,12:Nf,13:Bf,14:Ff,15:Of},s={};for(let o of e)n[o[0]]&&(s[o[0]]=s[o[0]]||[]).push(o);let r=new jt;for(let o of Object.keys(s)){let a=s[o],l=n[o](a.length);a.forEach((c,u)=>{let h=c[1]/10,f=c[2]/10,d=(c[1]*7+c[2]*13)%628/100,g=this.roads.nearest(h,f,25,m=>m.drivable);g&&(+o==10||+o==14)&&(d=Math.atan2(g.px-h,g.pz-f));let y=+o==10?parseFloat(t.data.s[c[3]]):NaN;Number.isNaN(y)||(d=Math.PI-y*Math.PI/180);let p=g&&g.d<this.roads.ways[g.wi].width/2+1.9&&this.roads.sidewalkSides(this.roads.ways[g.wi],h,f);l.setAt(u,h,f,d,this.terrain.height(h,f)+(p?.31:.08)),(+o==12||+o==13)&&this.collision.addCircle(t.key,h,f,.16)}),l.mesh.traverse(c=>{c.isInstancedMesh&&(c.computeBoundingSphere(),c.castShadow=!0)}),r.add(l.mesh)}return r.children.length?r:null}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,s=e.zmin+t.j*1e3,r=new jt;for(let o of this.meta.landmarks){let[a,l,c,u]=o;if(l<n||l>=n+1e3||c<s||c>=s+1e3||a===5||a===11||a===9||!u)continue;let h=document.createElement("canvas"),f=h.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(u).width+30);h.width=d,h.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=py[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(u,d/2,26);let g=new De(h);g.colorSpace=Me;let y=new Po(new ir({map:g,depthTest:!0,fog:!1,transparent:!0})),p=this.terrain.height(l,c)+(a===1?32:a===12?6:18);y.position.set(l,p,c),y.scale.set(d/48*3.2,3.2,1),y.userData.lm=!0,r.add(y)}return r}updateLabels(t){for(let e of this.tiles.values()){let n=e.parts.labels;if(n)for(let s of n.children){let r=s.position.distanceTo(t.position);if(s.visible=this.labelsOn&&r<650&&r>15,s.visible){let o=Math.max(1,r/120);s.scale.set(s.scale.x/s.scale.y*3.2*o,3.2*o,1)}}}}};var ua=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new fn(4500,32,16);this.uniforms={top:{value:new Rt},horizon:{value:new Rt},sunDir:{value:new k},sunCol:{value:new Rt},cloudCol:{value:new Rt},time:{value:0},cover:{value:.5}};let s=new Re({uniforms:this.uniforms,side:Ge,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
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
        }`});this.dome=new St(n,s),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,u=Math.random()*Math.PI*2,h=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(u)*h*4e3,c*4e3,Math.sin(u)*h*4e3)}let o=new se;o.setAttribute("position",new Zt(r,3)),this.starMat=new or({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Uo(o,this.starMat),this.stars.frustumCulled=!1,t.add(this.stars),this.sun=new Vo(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new ko(12375295,5922880,.9),t.add(this.hemi),t.fog=new Ro(13622246,400,2600),this.sunDir=new k,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),s=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(s),o=Math.asin(r),a=Math.atan2(Math.sin(s),Math.cos(s)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=cf.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let u=new Rt(659490).lerp(new Rt(4030417),l),h=new Rt(1317418).lerp(new Rt(13229034),l).lerp(new Rt(15771752),c*.6);this.uniforms.top.value.copy(u),this.uniforms.horizon.value.copy(h),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(h),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.25+.85*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.25*l+.05,.27*l+.05,.2*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new k(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var fi={x:0,y:1,z:0},my=()=>0;function Gf(i,t){return my(i,t)}function Vf(){return fi}var ih={car:{halfL:2.215,halfW:1.08},wagon:{halfL:2.315,halfW:1.08},van:{halfL:2.355,halfW:1.11},bus:{halfL:5.037,halfW:1.42}},Wf=["car","car","car","wagon","car","van","car","car","wagon","van","car","bus"];function zi(i){return Wf[i%Wf.length]}function Xf(i,t,e){let n=i.length,s=[],r=[];for(let l=0;l<n;l++){let[c,u]=i[l],h=t[l],f=e[l];s.push(-h,u,c,h,u,c),s.push(-h,u,c,-h,f,c),s.push(h,u,c,h,f,c),s.push(-h,f,c,h,f,c),s.push(-h,u,c,h,u,c,-h,f,c,h,f,c)}let o=(l,c)=>l*12+c;for(let l=0;l<n-1;l++)r.push(o(l,0),o(l,1),o(l+1,0),o(l,1),o(l+1,1),o(l+1,0)),r.push(o(l,2),o(l+1,2),o(l,3),o(l+1,2),o(l+1,3),o(l,3)),r.push(o(l,4),o(l,5),o(l+1,4),o(l+1,4),o(l,5),o(l+1,5)),r.push(o(l,6),o(l+1,6),o(l,7),o(l+1,6),o(l+1,7),o(l,7));r.push(o(0,8),o(0,10),o(0,9),o(0,9),o(0,10),o(0,11));let a=n-1;return r.push(o(a,8),o(a,9),o(a,10),o(a,9),o(a,11),o(a,10)),{pos:s,idx:r}}function Mr({pos:i,idx:t}){let e=new se;return e.setAttribute("position",new Zt(i,3)),e.setIndex(t),e.computeVertexNormals(),e}var qf=1.12,br=i=>i.wheelR*2+.02,_r=.34;function gy(i){return i>=1?0:i<=_r?1:.5*(1+Math.cos(Math.PI*(i-_r)/(1-_r)))}function Yf(i,t){let e=br(i),n=i.wheelR*qf;return t.map(([s])=>{let r=0;for(let o of i.wheelZ)r=Math.max(r,gy(Math.abs(s-o)/n));return i.sill+(e-i.sill)*r})}function Zf(i){let t=i.profile.map(r=>[r[0],r[1]]),e=i.widths.slice(),n=i.wheelR*qf,s=[];for(let r of i.wheelZ)for(let o of[-1,-_r,_r,1])s.push(r+o*n);s.sort((r,o)=>o-r);for(let r of s){let o=-1;for(let l=0;l<t.length-1;l++)if(t[l][0]>r&&r>t[l+1][0]){o=l;break}if(o<0||Math.abs(t[o][0]-r)<.03||Math.abs(t[o+1][0]-r)<.03)continue;let a=(t[o][0]-r)/(t[o][0]-t[o+1][0]);t.splice(o+1,0,[r,t[o][1]+(t[o+1][1]-t[o][1])*a]),e.splice(o+1,0,e[o]+(e[o+1]-e[o])*a)}return{profile:t,widths:e}}function $f(i){let t=wr(i),e=i.tumble||0,n=[];for(let s of i.pillars||[]){let[r,o]=i.cab[s],a=i.cabw[s],l=o-t[s]-.04;if(!(l<=.1))for(let c of[1,-1])n.push(tn(.04,l,i.bus?.16:.09,(a+e*.5+.004)*c,t[s]+l/2,r))}return n}function Jf(i){let t=sh(i),e=wr(i),n=[],s=e[0]+(i.bus?.22:.02),r=i.cab[0][0]-(i.bus?.3:.22);for(let o of[1,-1])n.push(tn(.16,.12,.07,(t.halfW+.08)*o,s,r));return n}function xy(i){let{profile:t,widths:e}=Zf(i);return Mr(Xf(t,e,Yf(i,t)))}var wr=i=>i.cabBase||i.cab.map(()=>i.beltY);function Kf(i,t=!1){let e=i.cab,n=i.cabw,s=wr(i),r=i.tumble||0,[o,a]=i.roofSlice,l=!(o===0&&a===0),c=e.length+a,u=[],h=[];for(let g=0;g<e.length;g++){let[y,p]=e[g],m=n[g],_=m+r,x=s[g];u.push(-m,p,y,m,p,y),u.push(-_,x,y,-m,p,y),u.push(_,x,y,m,p,y),u.push(-_,x,y,_,x,y,-m,p,y,m,p,y)}let f=(g,y)=>g*10+y;for(let g=0;g<e.length-1;g++)t&&l&&g>=o&&g<c-1||h.push(f(g,0),f(g,1),f(g+1,0),f(g,1),f(g+1,1),f(g+1,0)),h.push(f(g,3),f(g+1,3),f(g,2),f(g+1,3),f(g+1,2),f(g,2)),h.push(f(g,5),f(g,4),f(g+1,5),f(g+1,5),f(g,4),f(g+1,4));h.push(f(0,8),f(0,6),f(0,9),f(0,9),f(0,6),f(0,7));let d=e.length-1;return h.push(f(d,8),f(d,9),f(d,6),f(d,9),f(d,7),f(d,6)),Mr({pos:u,idx:h})}function jf(i){let[t,e]=i.roofSlice;if(t===0&&e===0)return null;let n=i.cab.slice(t,i.cab.length+e),s=i.cabw.slice(t,i.cabw.length+e);if(n.length<2)return null;let r=i.crown||0,o=[],a=[];for(let c=0;c<n.length;c++){let[u,h]=n[c],f=c/(n.length-1),d=s[c]*(1-.04*f)+.03,g=h+.006;o.push(-d,g,u,0,g+r,u,d,g,u)}let l=(c,u)=>c*3+u;for(let c=0;c<n.length-1;c++)a.push(l(c,0),l(c,1),l(c+1,0),l(c,1),l(c+1,1),l(c+1,0)),a.push(l(c,1),l(c,2),l(c+1,1),l(c,2),l(c+1,2),l(c+1,1));return{pos:o,idx:a}}var fa=new Rt;function Qf(){return{pos:[],idx:[],col:[]}}function Je(i,t,e){let n=t.attributes.position,s=i.pos.length/3;fa.set(e);for(let o=0;o<n.count;o++)i.pos.push(n.getX(o),n.getY(o),n.getZ(o)),i.col.push(fa.r,fa.g,fa.b);let r=t.index;if(r)for(let o=0;o<r.count;o++)i.idx.push(s+r.getX(o));else for(let o=0;o<n.count;o++)i.idx.push(s+o);t.dispose()}function td(i){let t=new se;return t.setAttribute("position",new Zt(i.pos,3)),t.setAttribute("color",new Zt(i.col,3)),t.setIndex(i.idx),t.computeVertexNormals(),t}var tn=(i,t,e,n,s,r)=>new zt(i,t,e).translate(n,s,r),Ke={glass:3360604,black:1316378,bumper:1776929,lamp:16054271,tail:14688300,amber:14717984,under:723982,rim:12172998,tyre:1381914},Fi={car:{sill:.24,profile:[[2.21,.74],[2.12,.86],[1.9,.91],[1.45,.95],[1.05,.98],[.55,1],[0,1],[-.6,1.01],[-1.1,1.02],[-1.55,1],[-1.95,.93],[-2.21,.8]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.89,.84,.76],cab:[[1,1.02],[.48,1.38],[-.05,1.44],[-.62,1.43],[-1.02,1.3],[-1.35,1.06]],cabw:[.75,.76,.76,.75,.71,.61],tumble:.12,pillars:[2],beltY:1,wheelZ:[1.32,-1.32],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.02},wagon:{sill:.24,profile:[[2.24,.74],[2.15,.86],[1.92,.91],[1.48,.95],[1.08,.98],[.55,1],[0,1.01],[-.65,1.02],[-1.25,1.03],[-1.8,1.03],[-2.2,1],[-2.38,.86]],widths:[.74,.83,.88,.9,.89,.88,.88,.89,.91,.9,.87,.8],cab:[[1.02,1.03],[.5,1.42],[-.05,1.5],[-.9,1.5],[-1.72,1.49],[-2.14,1.26]],cabw:[.77,.79,.79,.79,.78,.73],tumble:.09,pillars:[2,4],beltY:1,wheelZ:[1.35,-1.38],wheelX:.76,wheelR:.33,wheelW:.22,roofSlice:[1,-1],crown:.035},van:{sill:.26,profile:[[2.28,.8],[2.22,.96],[2,1.02],[1.72,1.06],[1.3,1.1],[.6,1.12],[-.2,1.12],[-1,1.13],[-1.7,1.13],[-2.15,1.12],[-2.35,1.05],[-2.42,.88]],widths:[.78,.86,.9,.92,.94,.94,.94,.94,.94,.93,.9,.84],cab:[[1.78,1.05],[1.12,1.62],[.72,1.84],[-.3,1.86],[-1.3,1.85],[-2.05,1.8],[-2.28,1.4]],cabw:[.87,.89,.9,.9,.9,.88,.8],cabBase:[1.04,1.1,1.11,1.12,1.13,1.13,1.12],tumble:.04,pillars:[2,4],beltY:1.1,wheelZ:[1.42,-1.42],wheelX:.79,wheelR:.35,wheelW:.24,roofSlice:[2,-1],crown:.04},bus:{sill:.42,profile:[[5.05,1.16],[4.98,1.17],[4.86,1.58],[4.55,1.59],[2,1.58],[-1.5,1.58],[-4.05,1.58],[-4.28,2.16],[-5,2.18]],widths:[1.14,1.2,1.25,1.25,1.25,1.25,1.25,1.25,1.17],cab:[[5.02,2.72],[4.8,2.86],[2.2,2.9],[-1.5,2.9],[-4.05,2.88],[-4.92,2.8]],cabw:[1.2,1.24,1.26,1.26,1.24,1.18],cabBase:[1.15,1.58,1.6,1.6,1.6,2.22],tumble:0,pillars:[1,2,3,4],beltY:1.6,wheelZ:[3.55,-3.15],wheelX:1.05,wheelR:.5,wheelW:.28,roofSlice:[1,0],crown:.05,bus:!0}};function sh(i){let t=i.profile.map(h=>h[0]),e=Math.max(...t),n=Math.min(...t),s=Math.max(...i.widths),r=i.widths[0],o=i.widths[i.widths.length-1],a=i.profile[0][1],l=i.profile[i.profile.length-1][1],c=a-i.sill,u=l-i.sill;return{noseZ:e,tailZ:n,halfW:s,noseW:r,rearW:o,faceTop:a,rearTop:l,fh:c,rh:u,headY:i.sill+c*(i.bus?.42:.74),headH:c*.26,grilleY:i.sill+c*(i.bus?.14:.44),grilleH:c*.24,lampY:i.sill+u*(i.bus?.36:.66),lampH:u*.3,bumperY:i.sill+c*.12,bumperH:c*.3}}function yy(i){let{profile:t,widths:e}=Zf(i),n=Xf(t,e,Yf(i,t)),s=jf(i);if(s){let r=n.pos.length/3;n.pos.push(...s.pos);for(let o of s.idx)n.idx.push(r+o)}for(let r of[...$f(i),...Jf(i)]){let o=n.pos.length/3,a=r.attributes.position,l=r.index;for(let c=0;c<a.count;c++)n.pos.push(a.getX(c),a.getY(c),a.getZ(c));for(let c=0;c<l.count;c++)n.idx.push(o+l.getX(c));r.dispose()}return Mr(n)}function vy(i){let t=Qf(),e=sh(i),n=Kf(i,!0);Je(t,n,Ke.glass);let s=i.wheelX-i.wheelW/2-.02,r=i.sill*.7;if(Je(t,tn(s*2,br(i)-r,(e.noseZ-e.tailZ)*.84,0,(br(i)+r)/2,(e.noseZ+e.tailZ)/2),Ke.under),Je(t,tn(e.noseW*1.92,e.bumperH,.1,0,e.bumperY,e.noseZ-.04),Ke.bumper),Je(t,tn(e.rearW*1.92,e.bumperH,.1,0,e.bumperY,e.tailZ+.04),Ke.bumper),i.bus){for(let o of[4.3,.6,-1.4])Je(t,tn(.04,1.14,1.05,-(e.halfW+.005),i.sill+.6,o),Ke.black);Je(t,tn(e.noseW*1.3,.24,.05,0,2.54,e.noseZ-.01),Ke.black);for(let o of[1,-1])Je(t,tn(.36,e.headH,.06,.74*o,e.headY,e.noseZ-.018),Ke.lamp),Je(t,tn(.32,e.lampH,.06,.86*o,e.lampY,e.tailZ+.018),Ke.tail)}else{Je(t,tn(e.noseW*1.1,e.grilleH,.07,0,e.grilleY,e.noseZ-.023),Ke.black);let o=e.noseW*.56;for(let a of[1,-1])Je(t,tn(.34,e.headH,.07,o*a,e.headY,e.noseZ-.023),Ke.lamp),Je(t,tn(.12,e.headH*.8,.06,(o+.24)*a,e.headY,e.noseZ-.036),Ke.amber),Je(t,tn(e.rearW*.58,e.lampH,.07,e.rearW*.58*a,e.lampY,e.tailZ+.023),Ke.tail);Je(t,tn(e.rearW*.56,e.lampH*.7,.05,0,e.lampY-e.rh*.22,e.tailZ+.018),Ke.black)}return td(t)}function _y(i){let t=Qf(),e=i.wheelR,n=i.wheelW;Je(t,new ie(e,e,n,14).rotateZ(Math.PI/2),Ke.tyre);for(let s of[1,-1])Je(t,new ar(e*.6,12).rotateY(s*Math.PI/2).translate(s*(n/2+.004),0,0),Ke.rim);return td(t)}var da=[15264493,15922165,12172998,9147035,4869975,1776930,11613743,3103891,2113387,3104067,12034938,8007482,3562091,13206827];function rh(i){let t=new ci({color:16777215,metalness:.4,roughness:.4,clearcoat:.6,clearcoatRoughness:.3,side:re}),e=new ce({vertexColors:!0,roughness:.35,metalness:.2,side:re}),n=new ce({vertexColors:!0,roughness:.75,metalness:.15}),s=new jt,r=Object.keys(Fi),o={};for(let T of r)o[T]=[];for(let T=0;T<i;T++)o[zi(T)].push(T);let a={},l=new Array(i);for(let T of r){let M=o[T].length;if(M===0)continue;let w=Fi[T],R=new Se(yy(w),t,M),P=new Se(vy(w),e,M),U=new Se(_y(w),n,M*4);R.castShadow=!0,R.frustumCulled=!1,P.frustumCulled=!1,U.frustumCulled=!1,s.add(R,P,U),a[T]={body:R,trim:P,wheels:U,spec:w},o[T].forEach((L,B)=>{l[L]={type:T,local:B}})}let c=new Float32Array(i).fill(NaN),u=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),d=new Float32Array(i),g=new $t,y=new $t,p=new $t,m=new $t,_=new Rt,x=new k(0,1,0),v=new k,b=new Ae,S=new $t;return{group:s,setAt:(T,M,w,R,P=0,U=Gf(M,w))=>{let L=l[T];if(!L)return;let{body:B,trim:N,wheels:G,spec:O}=a[L.type],q=Vf(M,w,U);v.set(q.x,q.y,q.z),b.setFromUnitVectors(x,v),S.makeRotationFromQuaternion(b),g.makeRotationY(R).premultiply(S).setPosition(M,U,w),B.setMatrixAt(L.local,g),N.setMatrixAt(L.local,g),_.set(da[P%da.length]),B.setColorAt(L.local,_);let $=Math.sin(R),W=Math.cos(R),tt=0;if(c[T]===c[T]){let Q=M-c[T],X=w-u[T];Q*Q+X*X<36&&(tt=Q*$+X*W);let it=R-h[T];for(;it>Math.PI;)it-=Math.PI*2;for(;it<-Math.PI;)it+=Math.PI*2;let ut=O.wheelZ[0]-O.wheelZ[1],ot=Math.abs(tt)>.004?Math.max(-.6,Math.min(.6,it*ut/tt)):0;d[T]+=(ot-d[T])*.3}c[T]=M,u[T]=w,h[T]=R,f[T]=(f[T]+tt/O.wheelR)%(Math.PI*2);let[Z,z]=O.wheelZ,H=O.wheelX,J=O.wheelR;for(let Q=0;Q<4;Q++){let X=Q<2,it=Q%2?-H:H;y.makeRotationX(f[T]),X&&d[T]&&(p.makeRotationY(d[T]),y.premultiply(p)),y.setPosition(it,J,X?Z:z),m.multiplyMatrices(g,y),G.setMatrixAt(L.local*4+Q,m)}B.instanceMatrix.needsUpdate=!0,N.instanceMatrix.needsUpdate=!0,G.instanceMatrix.needsUpdate=!0,B.instanceColor&&(B.instanceColor.needsUpdate=!0)},count:i,palette:da.length}}var As={tireGeo:new Pn(.3,.12,14,26).rotateY(Math.PI/2),rimBarrelGeo:new ie(.2,.2,.19,22).rotateZ(Math.PI/2),rimLipGeo:new Pn(.185,.03,8,24).rotateY(Math.PI/2),hubGeo:new ie(.06,.06,.12,14).rotateZ(Math.PI/2),spokeGeo:new zt(.05,.17,.045),brakeGeo:new ie(.15,.15,.03,20).rotateZ(Math.PI/2)},Rs={tire:new ce({color:1316121,roughness:.85,metalness:.1}),rim:new ce({color:14672874,metalness:.5,roughness:.34}),lip:new ce({color:16054010,metalness:.6,roughness:.22}),hub:new ce({color:3816772,metalness:.45,roughness:.4}),brake:new ce({color:5527647,metalness:.3,roughness:.6})};function My(){let i=new jt,t=new St(As.tireGeo,Rs.tire),e=new St(As.brakeGeo,Rs.brake);e.position.x=.04;let n=new St(As.rimLipGeo,Rs.lip);n.position.x=.095;let s=new St(As.rimBarrelGeo,Rs.rim),r=new St(As.hubGeo,Rs.hub);r.position.x=.085,i.add(t,e,s,n,r);let o=.115;for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=new St(As.spokeGeo,Rs.rim);c.rotation.x=-l,c.position.set(.088,Math.cos(l)*o,-Math.sin(l)*o),i.add(c)}return i}function ed(i=12726047,{police:t=!1,body:e="car"}={}){let n=Fi[e]||Fi.car,s=new jt,r=t?15922423:i,o=sh(n),{noseZ:a,tailZ:l,halfW:c,noseW:u,rearW:h}=o,f=n.beltY,[d,g]=n.wheelZ,y=n.wheelX,p=n.wheelR,m=wr(n),_=n.tumble||0,x=new ci({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),v=new ce({color:1118742,roughness:.6,metalness:.3}),b=new ce({color:15396338,metalness:.55,roughness:.22});s.add(new St(xy(n),x));let S=new ce({color:723982,roughness:1}),E=y-n.wheelW/2-.02;s.add(new St(new zt(E*2,br(n)-.1,(a-l)*.8).translate(0,(br(n)+.1)/2,(a+l)/2),S));let T=new ce({color:1710879,roughness:.65,metalness:.2}),M=Math.abs(d-g)-n.wheelR*2.2;if(M>.3)for(let X of[1,-1]){let it=new St(new zt(.06,.13,M),T);it.position.set((c-.05)*X,n.sill+.04,(d+g)/2),s.add(it)}let w=new Pn(n.wheelR*1.26,n.wheelR*.11,8,16,Math.PI).rotateY(Math.PI/2);for(let[X,it]of[[y,d],[-y,d],[y,g],[-y,g]]){let ut=new St(w,x);ut.position.set(X+.02*Math.sign(X),p,it),s.add(ut)}let R=new ce({color:3948616,roughness:.85,metalness:.05});{let X=n.cab,it=n.cabw,ut=[],ot=[];for(let F=0;F<X.length;F++){let[vt,yt]=X[F],bt=it[F]*.9,ht=(it[F]+_)*.9;ut.push(-ht,m[F]-.02,vt,ht,m[F]-.02,vt,-bt,yt-.06,vt,bt,yt-.06,vt)}let nt=(F,vt)=>F*4+vt;for(let F=0;F<X.length-1;F++)ot.push(nt(F,2),nt(F+1,2),nt(F,3),nt(F,3),nt(F+1,2),nt(F+1,3)),ot.push(nt(F,0),nt(F,2),nt(F+1,0),nt(F+1,0),nt(F,2),nt(F+1,2)),ot.push(nt(F,1),nt(F+1,1),nt(F,3),nt(F+1,1),nt(F+1,3),nt(F,3));ot.push(nt(0,0),nt(0,1),nt(0,2),nt(0,1),nt(0,3),nt(0,2));let xt=X.length-1;ot.push(nt(xt,0),nt(xt,2),nt(xt,1),nt(xt,1),nt(xt,2),nt(xt,3)),s.add(new St(Mr({pos:ut,idx:ot}),R))}let P=new ci({color:3360604,metalness:.25,roughness:.12,transparent:!0,opacity:.94,clearcoat:.7,clearcoatRoughness:.1,side:re});s.add(new St(Kf(n,!0),P));let U=new ci({color:r,metalness:.35,roughness:.42,clearcoat:.5,clearcoatRoughness:.35,side:re}),L=jf(n);if(L){s.add(new St(Mr(L),U));let[X]=n.roofSlice,[it,ut]=n.cab[X],ot=n.cabw[X],nt=new St(new zt(ot*2,.03,.06),U);nt.position.set(0,ut-.005,it+.02),s.add(nt)}let B=new ce({color:13225430,metalness:.7,roughness:.28}),N=n.cab[0][0],G=n.cab[n.cab.length-1][0],O=Math.max(...n.cabw)+_;for(let X of[1,-1]){let it=new St(new zt(.025,.03,Math.abs(N-G)-.08),B);it.position.set((O+.01)*X,f+.02,(N+G)/2),s.add(it)}let q=new ce({color:r,metalness:.35,roughness:.42});for(let X of $f(n))s.add(new St(X,q));let $=new ce({color:15208991,emissive:12584978,emissiveIntensity:.8,roughness:.28,metalness:.1}),W=new ce({color:1513500,roughness:.55,metalness:.25});if(n.bus){let X=new St(new zt(u*1.3,.26,.05),new ce({color:1119002,emissive:2240536,emissiveIntensity:.25,roughness:.5}));X.position.set(0,2.54,a-.01),s.add(X);for(let ot of[1,-1]){let nt=new St(new zt(.36,.22,.06),new ce({color:15988479,emissive:12374256,emissiveIntensity:.3,roughness:.2}));nt.position.set(.74*ot,o.headY,a-.02),s.add(nt);let xt=new St(new zt(.4,.26,.02),b);xt.position.set(.74*ot,o.headY,a-.05),s.add(xt);let F=new St(new zt(.32,.34,.06),$);F.position.set(.86*ot,o.lampY,l+.03),s.add(F)}let it=new St(new zt(u*1.92,o.bumperH,.12),W);it.position.set(0,o.bumperY,a-.05);let ut=new St(new zt(h*1.92,o.bumperH,.12),W);ut.position.set(0,o.bumperY,l+.05),s.add(it,ut);for(let ot of[4.3,.6,-1.4]){let nt=new St(new zt(.04,1.14,1.05),v);nt.position.set(-(c+.005),n.sill+.6,ot),s.add(nt)}}else{let X=u*1.1,it=new St(new zt(X,o.grilleH,.07),v);it.position.set(0,o.grilleY,a-.04),s.add(it);let ut=new ce({color:2829876,metalness:.6,roughness:.4});for(let V=0;V<3;V++){let rt=new St(new zt(X-.03,.02,.02),ut);rt.position.set(0,o.grilleY-.05+V*.05,a-.015),s.add(rt)}let ot=new St(new zt(u*1.4,.09,.05),v);ot.position.set(0,n.sill+.05,a-.05),s.add(ot);let nt=new ce({color:658189,roughness:.5,metalness:.2}),xt=new ce({color:14673650,emissive:11453672,emissiveIntensity:.25,metalness:.5,roughness:.25}),F=new ci({color:13623551,metalness:0,roughness:.05,transparent:!0,opacity:.35,clearcoat:1}),vt=new ce({color:13796895,roughness:.35,metalness:.1}),yt=u*.56;for(let V of[1,-1]){let rt=new St(new zt(.34,o.headH,.1),nt);rt.position.set(yt*V,o.headY,a-.09),s.add(rt);let st=new St(new zt(.28,.12,.02),xt);st.position.set(yt*V,o.headY,a-.045),s.add(st);let et=new St(new zt(.35,.16,.02),b);et.position.set(yt*V,o.headY,a-.03),s.add(et);let ft=new St(new zt(.3,.13,.015),F);ft.position.set(yt*V,o.headY,a-.018),s.add(ft);let pt=new St(new zt(.12,.11,.06),vt);pt.position.set((yt+.24)*V,o.headY,a-.05),s.add(pt)}let bt=new St(new ar(.05,16),b);bt.position.set(0,o.grilleY,a-.003),s.add(bt);let ht=o.lampY,Ut=l+.035;for(let V of[1,-1]){let rt=new St(new zt(h*.68,.2,.04),new ce({color:1180422,roughness:.5,metalness:.2}));rt.position.set(h*.58*V,ht,Ut+.03),s.add(rt);let st=new St(new zt(h*.6,.17,.07),$);st.position.set(h*.58*V,ht,Ut),s.add(st)}let lt=new St(new zt(h*.56,.14,.04),new ce({color:1118742,roughness:.6,metalness:.3}));lt.position.set(0,ht-.03,Ut+.03),s.add(lt);let I=new St(new zt(h*.44,.07,.02),b);I.position.set(0,ht-.03,Ut+.005),s.add(I);let A=(V,rt,st)=>{let et=new St(new zt(V,o.bumperH,.09),W);return et.position.set(0,o.bumperY,rt+st*.04),et};s.add(A(u*1.92,a,-1),A(h*1.92,l,1));for(let V of[1,-1]){let rt=new St(new ie(.045,.045,.06,12).rotateX(Math.PI/2),b);rt.position.set(c*.42*V,n.sill-.02,l+.05),s.add(rt)}}let tt=new ce({color:r,metalness:.5,roughness:.35}),Z=new ce({color:547,metalness:.9,roughness:.1});for(let X of Jf(n))s.add(new St(X,tt));{let X=wr(n)[0]+(n.bus?.22:.02),it=n.cab[0][0]-(n.bus?.3:.22);for(let ut of[1,-1]){let ot=new St(new zt(.02,.09,.05),Z);ot.position.set((c+.16)*ut,X,it),s.add(ot)}}let z=[["wheelFL",y,d],["wheelFR",-y,d],["wheelRL",y,g],["wheelRR",-y,g]],H=p/.3;for(let[X,it,ut]of z){let ot=new jt;ot.name=X,ot.position.set(it,p,ut);let nt=My();nt.scale.setScalar(H),ot.add(nt),s.add(ot)}if(t){let X=Math.max(...n.cab.map(nt=>nt[1])),it=new St(new zt(.66,.05,.3),v);it.position.set(0,X+.05,.05),s.add(it);let ut=new St(new zt(.3,.1,.3),new ce({color:2245836,emissive:2250239,emissiveIntensity:1.6}));ut.position.set(-.17,X+.11,.05);let ot=new St(new zt(.3,.1,.3),new ce({color:13378082,emissive:16720418,emissiveIntensity:1.6}));ot.position.set(.17,X+.11,.05),s.add(ut,ot),s.userData.lightbar={blue:ut.material,red:ot.material}}let J=new Ho(16773583,0,80,.62,.5,1.2);J.position.set(0,o.headY+.2,a-.05),J.target.position.set(0,.2,a+10),s.add(J,J.target),s.userData.headlight=J;let Q=new Go(16722450,0,1.4,3.4);return Q.position.set(0,o.lampY,l+.05),s.add(Q),s.userData.tailGlow=Q,s.traverse(X=>{X.isMesh&&(X.castShadow=!0)}),s}function nd(i,t,{sz:e=1,sy:n=1,sx:s=1,wheelR:r}={}){let o=Fi[t],a=JSON.parse(JSON.stringify(o));return a.profile=o.profile.map(([l,c])=>[l*e,c*n]),a.widths=o.widths.map(l=>l*s),a.cab=o.cab.map(([l,c])=>[l*e,c*n]),a.cabw=o.cabw.map(l=>l*s),o.cabBase&&(a.cabBase=o.cabBase.map(l=>l*n)),a.beltY=o.beltY*n,a.wheelZ=o.wheelZ.map(l=>l*e),a.wheelX=o.wheelX*s,r&&(a.sill=o.sill+(r-o.wheelR)*.6,a.wheelR=r),Fi[i]=a,a}function id(i){return Fi[i]}var oh=da;var Sr=[{id:"city",base:"wagon",sz:.79,sy:1.03,sx:.9,name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",base:"wagon",sz:.926,sy:.975,sx:.98,name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",base:"car",sz:1.075,sy:1,sx:1.005,name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",base:"wagon",sz:.985,sy:1.12,sx:1.02,name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",base:"car",sz:1.007,sy:.89,sx:1.055,name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",base:"van",sz:1.149,sy:1.26,sx:1.09,name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35},{id:"bus",hidden:!0,base:"bus",sz:1,sy:1,sx:1,name:"Autobus di linea",desc:"",body:"bus",L:10.05,W:2.5,H:2.9,wb:5.9,color:"#d9651c",mass:11500,kw:210,nm:1100,rpmMax:2400,gears:[6.3,3.4,2,1.35,1,.78],final:5.2,drive:"R",cda:3.6,brake:62e3,steer:.72,grip:.85,wheelR:.48}];for(let i of Sr)i.base!=="bus"&&nd("bds-"+i.id,i.base,{sz:i.sz,sy:i.sy,sx:i.sx,wheelR:i.wheelR});var by=i=>i.base==="bus"?"bus":"bds-"+i.id,sd=new Gt({color:2237478});function rd(i,t={}){let e=new jt,n=by(i),s=id(n),r=ed(new Rt(t.color||i.color).getHex(),{body:n}),o=r.children[0]&&r.children[0].material;o&&(o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=2),e.add(r);let a=["wheelFL","wheelFR","wheelRL","wheelRR"].map((g,y)=>{let p=r.getObjectByName(g);return p&&(p.rotation.order="YXZ"),{pivot:p,front:y<2}}).filter(g=>g.pivot),l=s.beltY,c=Math.max(...s.cab.map(g=>g[1])),u=null,h=null,f=null,d=null;if(t.interior){u=new jt;let g=s.widths.reduce((H,J)=>Math.max(H,J),0)*2,y=g*.22,[p,m]=s.cab[0],_=Math.min(c-.17,Math.max(l+.2,l+.55*(c-l))),x=p-.95,v=new k(y,_,x),b=new Gt({color:2829616}),S=new Gt({color:3816512,side:re}),E=x+.6,T=Math.min(_-.2,m+.04),M=Math.max(.4,p-E),w=new St(new zt(g-.1,.42,M),b);w.position.set(0,T-.21,E+M/2),u.add(w);let R=_-.18-T;if(R>.04){let H=new St(new zt(.56,R+.05,.3),b);H.position.set(y,T+R/2-.02,E+.15),u.add(H)}f=document.createElement("canvas"),f.width=256,f.height=96,d=new De(f),d.colorSpace=Me;let P=new St(new un(.4,.15),new Oe({map:d,toneMapped:!1}));P.position.set(y,_-.28,E-.005),P.lookAt(v),u.add(P),h=new jt,h.add(new St(new Pn(.185,.02,8,32),new Gt({color:1381653})));for(let H of[0,2.1,4.2]){let J=new St(new zt(.17,.028,.02),sd);J.position.set(Math.cos(H-Math.PI/2)*.085,Math.sin(H-Math.PI/2)*.085,0),J.rotation.z=H-Math.PI/2,h.add(J)}let U=new St(new ie(.055,.055,.06,12),sd);U.rotation.x=Math.PI/2,h.add(U);let L=new jt;L.position.set(y,_-.34,x+.47),L.rotation.x=-.42,L.add(h);let B=new St(new ie(.035,.045,.3,8),b);B.rotation.x=Math.PI/2-.42,B.position.set(0,-.06,.16),L.add(B),u.add(L);let N=s.cab[1]?s.cab[1][0]:p-.5,G=s.cab[1]?s.cab[1][1]:c,O=s.cab[s.cab.length-2][0];for(let H of[1,-1]){let J=new k(H*(g/2-.1),m,p-.05),Q=new k(H*(g/2-.16),G-.03,N),X=new St(new zt(.08,J.distanceTo(Q),.1),S);X.position.copy(J).add(Q).multiplyScalar(.5),X.lookAt(Q),X.rotateX(Math.PI/2),u.add(X);let it=new St(new un(Math.max(.6,p-x+.6),l-.3),S);it.rotation.y=Math.PI/2,it.position.set(H*(g/2-.06),(l+.3)/2,(p+x-.6)/2),u.add(it)}let q=new St(new un(g-.1,Math.max(.5,N-.12-O)),new Gt({color:11841445,emissive:3157546,side:re}));q.rotation.x=Math.PI/2,q.position.set(0,Math.min(c,G+.02)-.04,(N-.12+O)/2),u.add(q);let $=new St(new zt(.15,.045,.02),new Gt({color:5593180}));$.position.set(0,G-.075,N-.02),u.add($);let W=s.profile[1]||s.profile[0],tt=g/2-.18,Z=new se;Z.setAttribute("position",new Zt([-tt,m-.02,p,tt,m-.02,p,tt,W[1],W[0],-tt,m-.02,p,tt,W[1],W[0],-tt,W[1],W[0]],3)),Z.computeVertexNormals();let z=new St(Z,new Ms({color:t.color||i.color,shininess:60,specular:4473924,side:re}));u.add(z),u.visible=!1,e.add(u),e.userData.eye=v.clone()}return{root:e,ext:r,wheels:a,headlight:r.userData.headlight,tailGlow:r.userData.tailGlow,interior:u,steeringWheel:h,dashCanvas:f,dashTex:d,exterior:[r]}}function od(i,t,e,n,s,r,o){let a=i.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/s);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var pa=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let s=this.world.roads.surfaceAt(t,e,1e9);this.y=s.h,this.surface=s}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),s=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return s=Math.min(s,e.kw*1e3/Math.max(r,1)),s}update(t,e){let s=t/4;for(let r=0;r<4;r++)this.step(s,e)}step(t,e){let n=this.spec,s=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let mt=r;r=o,o=mt}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),u=e.steer*c,h=e.analogWheel?20:Math.abs(u)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-h*t,Math.min(h*t,u-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),g=Math.cos(this.h),y=-Math.sin(this.h),p=s.roads.surfaceAt(this.x,this.z,this.y);this.surface=p;let m=!!p.road,_=m?s.roads.ways[p.road.wi]:null,x=!1;if(!m){let mt=s.terrain.landClass(this.x,this.z);x=mt==="parking"||mt==="parking_space"||mt==="pedestrian"}let v=n.grip*(m?_.flags&64?.78:1:x?.95:.68),b=m?_.flags&64?.03:.013:x?.016:.06;n.drive==="A"&&!m&&(v*=1.12,b*=.7),this.mu=v;let S=s.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,E=s.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,T=Math.atan2(S-E,this.L),M=n.W*.8,w=s.roads.surfaceAt(this.x+g*M/2,this.z+y*M/2,this.y+.5).h,R=s.roads.surfaceAt(this.x-g*M/2,this.z-y*M/2,this.y+.5).h,P=Math.atan2(w-R,M),U=this.m*9.81*Math.cos(T),L=U*this.b/this.L-this.m*this.ax*this.hcg/this.L,B=U*this.a/this.L+this.m*this.ax*this.hcg/this.L;L=Math.max(L,U*.15),B=Math.max(B,U*.15),this.airborne&&(L=B=0);let N=this.gear>0?n.gears[this.gear-1]:3.6,G=Math.abs(this.u)/n.wheelR*30/Math.PI,O=G*N*n.final,q=900+r*2600;if((this.gear===1||this.gear===-1)&&O<q&&(O=O*.4+q*.6),O=Math.max(800,O),this.rpm+=(O-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let mt=n.rpmMax*(.55+.37*r);if(this.rpm>mt&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let At=G*n.gears[this.gear-2]*n.final,Ft=n.rpmMax*(.28+.3*r);this.rpm<Ft&&At<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let $=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&($=this.torque(this.rpm)*N*n.final*.88/n.wheelR*r),this.gear<0&&($=this.u<-7?0:-$*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&($-=Math.sign(this.u)*this.torque(this.rpm)*.12*N*n.final/n.wheelR*(this.rpm/n.rpmMax));let W=n.drive==="F"?L:n.drive==="R"?B:L+B,tt=v*W;this.wheelSpin=Math.abs($)>tt?Math.min(1,(Math.abs($)-tt)/tt):0,$=Math.max(-tt,Math.min(tt,$));let Z=0,z=n.brake*o;Math.abs(this.u)>.05&&(Z=-Math.sign(this.u)*Math.min(z,v*(L+B)));let H=0;this.handbrake>0&&Math.abs(this.u)>.05&&(H=-Math.sign(this.u)*v*B*.8*this.handbrake);let J=Math.max(Math.abs(this.u),.5),Q=this.u>=0?1:-1,X=Math.atan2(this.v+this.a*this.w,J)-this.steer*Q,it=Math.atan2(this.v-this.b*this.w,J),ut=(mt,At,Ft)=>{let Et=-(12*At)*mt,qt=Ft*At;return Math.abs(Et)>qt&&(Et=Math.sign(Et)*qt*Math.max(.75,1-.25*(Math.abs(Et)/qt-1))),Et},ot=v*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(ot*=1-.35*this.wheelSpin);let nt=ut(X,L,v),xt=ut(it,B,ot);this.slip=Math.max(Math.abs(it),Math.abs(X)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let F=-.5*1.2*n.cda*this.u*Math.abs(this.u),vt=Math.abs(this.u)>.05?-Math.sign(this.u)*b*(L+B):0,yt=-this.m*9.81*Math.sin(T),bt=this.m*9.81*Math.sin(P)*.5,ht=Math.cos(this.steer),Ut=Math.sin(this.steer),lt=$+Z+H+F+vt+yt-nt*Ut,I=xt+nt*ht+bt;this.airborne&&(lt=F+yt*0,I=0);let A=lt/this.m+this.v*this.w,V=I/this.m-this.u*this.w,rt=this.airborne?0:(this.a*nt*ht-this.b*xt)/this.I,st=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let mt=1.1*v*9.81/Math.abs(this.u);Math.abs(this.w)>mt&&(this.w+=(Math.sign(this.w)*mt-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=A*t,this.v+=V*t,this.w+=rt*t,Math.sign(st)!==Math.sign(this.u)&&Math.abs($)<1&&st!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(yt)<z+b*U+1500&&(this.u=0);let et=Math.min(1,Math.abs(this.u)/4),ft=this.u*Math.tan(this.steer)/this.L;this.w=this.w*et+ft*(1-et),this.v*=1-(1-et)*Math.min(1,t*8),this.ax=this.ax+(lt/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(I/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let pt=f*this.u+g*this.v,_t=d*this.u+y*this.v;this.x+=pt*t,this.z+=_t*t,this.collide();let Xt=s.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=Xt&&(this.y=Xt,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-Xt>.35&&this.y-Xt<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(Xt-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=Xt),this.pitch+=(T-this.pitch)*Math.min(1,t*10),this.roll+=(P-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),s=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+s*a,u=e.collision.resolveCircle(l,c,r),h=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(h&&(!u||h.depth>u.depth)&&(u=h),!u)continue;this.x+=u.nx*u.depth,this.z+=u.nz*u.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),g=n*this.u+f*this.v,y=s*this.u+d*this.v,p=g*u.nx+y*u.nz;p<0&&(g-=1.25*p*u.nx,y-=1.25*p*u.nz,g*=.8,y*=.8,this.impact=Math.max(this.impact,Math.min(1,-p/12)),this.u=g*n+y*s,this.v=g*f+y*d,this.w*=.5,h&&h.car&&(h.car.bumped=3))}}};var ma=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[]}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),s=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(s?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,buttons:new Set};(e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45);let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c)continue;let u=c.axes,h=d=>c.buttons[d]?c.buttons[d].value:0;if(this.wheelCfg.enabled){let d=this.wheelCfg,g=p=>{if(p===void 0)return 0;let m=d.invertPedals?(1-p)/2:(p+1)/2;return m<.03?0:Math.min(1,m)},y=u[d.steerAxis]||0;(Math.abs(y)>.005||g(u[d.throttleAxis])>0||g(u[d.brakeAxis])>0)&&(a.steer=-y,a.analogWheel=!0,a.throttle=Math.max(a.throttle,g(u[d.throttleAxis])),a.brake=Math.max(a.brake,g(u[d.brakeAxis])))}else if(c.mapping==="standard"){let d=u[0]||0;Math.abs(d)>.08&&(a.steer=-Math.sign(d)*Math.pow(Math.abs(d),1.6)),a.throttle=Math.max(a.throttle,h(7)),a.brake=Math.max(a.brake,h(6)),(h(0)>.5||h(5)>.5)&&(a.handbrake=1)}let f=this.padPrev[c.index]||[];c.buttons.forEach((d,g)=>{d.pressed&&!f[g]&&a.buttons.add(g)}),this.padPrev[c.index]=c.buttons.map(d=>d.pressed)}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}};var ah=72,di=1e6,ad=14,ga=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.group=new jt,this.fleet=rh(ah);let e=t.settings&&t.settings.parked||288;this.parkFleet=rh(e),this.group.add(this.fleet.group,this.parkFleet.group),this.free=[];for(let a=ah-1;a>=0;a--)this.free.push(a),this.fleet.setAt(a,di,di,0,0,-100);this.parkPools={car:[],wagon:[],van:[]};for(let a=0;a<e;a++){this.parkFleet.setAt(a,di,di,0,0,-100);let l=zi(a);this.parkPools[l]&&this.parkPools[l].push(a)}let n=document.createElement("canvas");n.width=32,n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(16,60,2,16,40,44);r.addColorStop(0,"rgba(255,240,200,0.9)"),r.addColorStop(.5,"rgba(255,235,190,0.28)"),r.addColorStop(1,"rgba(255,230,180,0)"),s.fillStyle=r,s.fillRect(0,0,32,64),this.beamMat=new Oe({map:new De(n),transparent:!0,blending:oi,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});let o=new un(5,16);o.rotateX(-Math.PI/2),o.rotateY(Math.PI),o.translate(0,.12,10.5),this.beams=new Se(o,this.beamMat,ah),this.beams.frustumCulled=!1,this.beams.visible=!1,this.group.add(this.beams),this.statics=[],this.obstacles=[],this.parkSpots=new Map,this.parkTimer=0,this.spawnTimer=0,this.time=0,this._m=new $t,this._q=new Ae,this._up=new k(0,1,0),this._p=new k,this._s=new k(1,1,1)}setNight(t){this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beams.visible=t>.31}release(t){this.fleet.setAt(t.slot,di,di,0,0,-100),this.free.push(t.slot)}clear(){for(let t of this.cars)this.release(t);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;if(this.free.length)for(let s=0;s<6;s++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,_=>_.drivable&&_.cls<=Ht.LIVING&&!(_.flags&Nt.PRIVATE));if(!c)continue;let u=n.ways[c.wi],h=this.free.length-1-Math.floor(Math.random()*Math.min(6,this.free.length));if(zi(this.free[h])==="bus"&&u.cls>Ht.TERTIARY&&(h=this.free.findIndex(_=>zi(_)!=="bus"),h<0))return;let f=u.oneway||Math.random()<.5?1:-1,d=u.cum[c.k+1]-u.cum[c.k],g=(f>0?c.t:1-c.t)*d;if(this.cars.some(_=>Math.hypot(_.x-c.px,_.z-c.pz)<25))continue;let y=this.free.splice(h,1)[0],p=zi(y),m={slot:y,type:p,box:ih[p],colour:Math.floor(Math.random()*ad),wi:c.wi,k:c.k,dir:f,s:g,speed:Math.min(u.limit,50)/3.6*.7,x:c.px,z:c.pz,y:0,h:0,slope:0,mood:(p==="bus"?.74:.86)+Math.random()*.2,next:null,yield:!1,bumped:0,stuck:0};this.chooseNext(m),this.cars.push(m),this.place(m,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[s,r]=this.segEnds(t),o=t.k+t.dir,a=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if(t.yield=!1,!a&&e.degree[r]<3){t.next={wi:t.wi,k:o,dir:t.dir,turn:0};return}let l=[],c=Math.atan2(e.nx[r]-e.nx[s],e.nz[r]-e.nz[s]);for(let f=e.adjStart[r];f<e.adjStart[r+1];f++){let d=e.adjWay[f],g=e.adjPos[f],y=e.ways[d];if(!y.drivable||y.cls>Ht.LIVING||y.flags&Nt.PRIVATE||t.type==="bus"&&y.cls>Ht.UNCLASSIFIED)continue;let p=[];g<y.nodes.length-1&&p.push({wi:d,k:g,dir:1,to:y.nodes[g+1]}),g>0&&!y.oneway&&p.push({wi:d,k:g-1,dir:-1,to:y.nodes[g-1]});for(let m of p){if(m.wi===t.wi&&m.k===t.k&&m.dir===-t.dir)continue;let x=Math.atan2(e.nx[m.to]-e.nx[r],e.nz[m.to]-e.nz[r])-c;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;let v=1+Math.max(0,6-y.cls)*.5;Math.abs(x)<.4&&(v*=2.5),Math.abs(x)>2.6&&(v*=.05),l.push({...m,turn:x,wgt:v})}}if(!l.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let u=Math.random()*l.reduce((f,d)=>f+d.wgt,0);t.next=l[l.length-1];for(let f of l)if(u-=f.wgt,u<=0){t.next=f;break}let h=e.ways[t.next.wi];t.yield=t.next.wi!==t.wi&&(h.flags&Nt.ROUNDABOUT&&!(n.flags&Nt.ROUNDABOUT)||n.flags&Nt.LINK&&!(h.flags&Nt.LINK)||h.cls<n.cls)}place(t,e){let n=this.R,s=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],u=n.nz[o],h=Math.hypot(c-a,u-l)||.01,f=Math.min(1,t.s/h),d=(c-a)/h,g=(u-l)/h,y=n.laneCenter(s,t.dir),p=a+d*t.s-g*y,m=l+g*t.s+d*y,_=t.dir>0?f:1-f,x=n.heightOn(t.wi,t.k,_,p,m),v=Math.min(1,(t.s+2)/h),b=t.dir>0?v:1-v,S=n.heightOn(t.wi,t.k,b,p+d*(v-f)*h,m+g*(v-f)*h),E=v>f?(S-x)/((v-f)*h):t.slope;t.slope+=(E-t.slope)*Math.min(1,(e||1)*5),t.x=p,t.z=m,t.y=x;let T=Math.atan2(d,g);e===0&&(t.h=T);let M=T-t.h;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;t.h+=M*Math.min(1,e*6)}draw(t){let e=Math.sin(t.h),n=Math.cos(t.h),s=Math.hypot(t.slope,1);fi.x=-e*t.slope/s,fi.y=1/s,fi.z=-n*t.slope/s,this.fleet.setAt(t.slot,t.x,t.z,t.h,t.colour,t.y),this.beams.visible&&(this._q.setFromAxisAngle(this._up,t.h),this._p.set(t.x+e*(t.box.halfL-2.2),t.y,t.z+n*(t.box.halfL-2.2)),this._m.compose(this._p,this._q,this._s),this.beams.setMatrixAt(t.slot,this._m))}update(t,e,n){this.time=n;let s=this.R,r=e.x,o=e.z;for(let u=this.cars.length-1;u>=0;u--){let h=this.cars[u];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.release(h),this.cars.splice(u,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15),this.parkTimer-=t,this.parkTimer<=0&&(this.parkTimer=1.5,this.refreshParked(r,o));let a=Math.sin(e.h),l=Math.cos(e.h),c=Math.max(0,e.u);for(let u of this.cars){let h=s.ways[u.wi],[f,d]=this.segEnds(u),y=Math.hypot(s.nx[d]-s.nx[f],s.nz[d]-s.nz[f])-u.s,p=Math.sin(u.h),m=Math.cos(u.h),_=h.limit/3.6*u.mood;if(u.next&&Math.abs(u.next.turn)>.35){let L=Math.abs(u.next.turn)>1?5.5:9;_=Math.min(_,Math.sqrt(L*L+2*2.2*Math.max(0,y-3)))}let x=1e9,v=0,b=(L,B,N,G,O,q)=>{let $=L-u.x,W=B-u.z,tt=$*p+W*m;if(tt<=0||tt>60)return;let Z=Math.abs($*m-W*p),z=G*p+O*m;if(Z>(z>.3?2:1.4))return;let H=tt-u.box.halfL-q-.4;H<x&&(x=H,v=N*Math.max(0,z))};for(let L of this.cars)L!==u&&b(L.x,L.z,L.speed,Math.sin(L.h),Math.cos(L.h),L.box.halfL);e.active!==!1&&b(r,o,c,a,l,2.2);for(let L of this.statics)b(L.x,L.z,0,Math.sin(L.h),Math.cos(L.h),L.box.halfL);for(let L of this.obstacles)b(L[0],L[1],0,0,0,.6);let S=s.ntag[d]===Jt.SIGNALS?d:u.next&&s.ntag[this.nodeAfter(u)]===Jt.SIGNALS&&y<35?-2:-1;if(S!==-1){let L=S===d?y:y+20,B=Math.abs(p)>Math.abs(m)?1:0,N=vr(B,n);if((N==="R"||N==="Y"&&L>14)&&L>1.5){let G=L-3.5-u.box.halfL+2.2;G<x&&(x=Math.max(.1,G),v=0)}}if(u.yield&&y<18&&y>.3){let L=s.nx[d],B=s.nz[d],N=!1,G=(O,q,$,W,tt,Z)=>{if(N||$<1.5||Z===u.wi)return;let z=L-O,H=B-q,J=Math.hypot(z,H);J>10+$*3.2||J<.5||(z*W+H*tt)/J<.6||(N=!0)};for(let O of this.cars)O!==u&&G(O.x,O.z,O.speed,Math.sin(O.h),Math.cos(O.h),O.wi);if(e.active!==!1&&G(r,o,c,a,l,e.wi),N){let O=y-2.2-u.box.halfL+2.2;O<x&&(x=Math.max(.1,O),v=0)}}u.bumped>0&&(u.bumped-=t,_=0);let E=u.type==="bus"?1.1:1.6,T=2.4,M=2.2,w=1.25,R=u.speed,P=E*(1-Math.pow(Math.max(0,R)/Math.max(.1,_),4));if(x<1e8){let L=M+R*w+R*(R-v)/(2*Math.sqrt(E*T));P-=E*Math.pow(Math.max(0,L)/Math.max(.3,x),2)}P=Math.max(-9,P),u.speed=Math.max(0,R+P*t),u.speed<.1?u.stuck+=t:u.stuck=0,u.s+=u.speed*t;let U=0;for(;U++<8;){let[L,B]=this.segEnds(u),N=Math.hypot(s.nx[B]-s.nx[L],s.nz[B]-s.nz[L]);if(u.s<N)break;u.s-=N;let G=u.next||{wi:u.wi,k:u.k,dir:-u.dir};u.wi=G.wi,u.k=G.k,u.dir=G.dir,this.chooseNext(u)}this.place(u,t),this.draw(u)}this.beams.visible&&(this.beams.instanceMatrix.needsUpdate=!0)}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}take(t){let e=this.cars.indexOf(t);return e<0?null:(this.cars.splice(e,1),this.release(t),{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h})}nearestCar(t,e,n,s=2.5){let r=null,o=n;for(let a of this.cars){let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<o&&a.speed<=s&&(o=l,r=a)}return r}computeParkSpots(t,e){let n=this.world.terrain,s=this.world.collision,r=e&&e.pk||[],o=[],a=(l,c)=>{let u=Math.imul(l|0,374761393)+Math.imul(c|0,668265263)|0;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};for(let l=0;l<r.length;l+=5){let c=r[l]/10,u=r[l+1]/10,h=r[l+3]/10,f=(r[l+4]>>1)/10,d=r[l+4]&1,g=.55+.4*a(Math.floor(c/70),Math.floor(u/70));if(a(r[l],r[l+1])>g)continue;let y=r[l+2]/10*Math.PI/180;d===0&&a(r[l+1],r[l])<.45&&(y+=Math.PI);let p=a(r[l]+7,r[l+1]+13),m=p<.7||h<2.35?"car":p<.9?"wagon":f>=5?"van":"wagon",_=ih[m],x=Math.sin(y),v=Math.cos(y),b=[s.addCircle(t,c+x*1.1,u+v*1.1,_.halfW-.08),s.addCircle(t,c-x*1.1,u-v*1.1,_.halfW-.08)];o.push({x:c,z:u,y:n.height(c,u)+.06,h:y,type:m,box:_,colour:Math.floor(a(r[l]+3,r[l+1]+5)*ad),taken:!1,objs:b})}this.parkSpots.set(t,o),this.parkTimer=0}removeTile(t){this.parkSpots.delete(t),this.parkTimer=0}refreshParked(t,e){let n={car:[],wagon:[],van:[]};for(let s of this.parkSpots.values())for(let r of s){if(r.taken)continue;let o=Math.hypot(r.x-t,r.z-e);o<520&&(r._d=o,n[r.type].push(r))}fi.x=0,fi.y=1,fi.z=0;for(let s of Object.keys(n)){let r=n[s].sort((a,l)=>a._d-l._d),o=this.parkPools[s];for(let a=0;a<o.length;a++){let l=r[a];l?this.parkFleet.setAt(o[a],l.x,l.z,l.h,l.colour,l.y):this.parkFleet.setAt(o[a],di,di,0,0,-100)}}}nearestParked(t,e,n){let s=null,r=n;for(let o of this.parkSpots.values())for(let a of o){if(a.taken)continue;let l=Math.hypot(a.x-t,a.z-e)-a.box.halfW;l<r&&(r=l,s=a)}return s}takeParked(t){t.taken=!0;for(let e of t.objs)this.world.collision.remove(e);return this.parkTimer=0,{type:t.type,colour:t.colour,x:t.x,z:t.z,h:t.h}}resolveCircle(t,e,n,s=null){let r=null,o=(a,l)=>{if(a===s)return;let c=Math.sin(a.h),u=Math.cos(a.h),h=a.box.halfW,f=Math.max(0,a.box.halfL-h);if(Math.abs(a.x-t)>f+h+n||Math.abs(a.z-e)>f+h+n)return;let d=Math.max(1,Math.ceil(f/h));for(let g=-d;g<=d;g++){let y=f*g/d,p=a.x+c*y,m=a.z+u*y,_=t-p,x=e-m,v=Math.hypot(_,x);v<n+h&&(!r||n+h-v>r.depth)&&(r={nx:v>1e-6?_/v:1,nz:v>1e-6?x/v:0,depth:n+h-v,car:l?a:null})}};for(let a of this.cars)o(a,!0);for(let a of this.statics)o(a,!1);return r}};var lh=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,s=this.v,r=n.length;for(n.push(t),s.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[s[o],s[r]]=[s[r],s[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],s=t.pop(),r=e.pop();if(t.length){t[0]=s,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},xa=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,s=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===Ht.PEDESTRIAN)return;let u=Math.max(10,l.limit)/3.6,h=1;l.flags&Nt.PRIVATE&&(h=6),l.cls===Ht.SERVICE&&(h=l.flags&Nt.AISLE?5:1.8),l.cls===Ht.TRACK&&(h=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],g=l.nodes[f+1];if(e.ntag[d]===Jt.GATE||e.ntag[g]===Jt.GATE)continue;let p=(l.cum[f+1]-l.cum[f])/u*h;s.push(d,g,p,c,f),l.oneway||s.push(g,d,p,c,f)}});let r=s.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[s[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[s[l*5]]++;this.eTo[c]=s[l*5+1],this.eCost[c]=s[l*5+2],this.eWay[c]=s[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,s,r){let o=this.R,a=N=>N.drivable&&N.cls!==Ht.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(s,r,400,a);if(!l||!c)return null;let u=++this.run,h=new lh,f=Math.sin(n),d=Math.cos(n),g=o.ways[l.wi],y=g.nodes[l.k],p=g.nodes[l.k+1],m=g.cum[l.k+1]-g.cum[l.k],_=Math.max(10,g.limit)/3.6,x=l.dx*f+l.dz*d,v=(N,G)=>{this.stamp[N]!==u&&(this.stamp[N]=u,this.dist[N]=1e18,this.closed[N]=0),G<this.dist[N]&&(this.dist[N]=G,this.prev[N]=-1,this.prevWay[N]=l.wi,h.push(G+this.h(N,s,r),N))},b=25;v(p,(1-l.t)*m/_+(x<0?b:0)),g.oneway||v(y,l.t*m/_+(x>0?b:0));let S=o.ways[c.wi],E=S.nodes[c.k],T=S.nodes[c.k+1],M=new Set([E,T]),w=-1,R=0;for(;h.size;){let N=h.pop();if(this.closed[N])continue;if(this.closed[N]=1,M.has(N)){w=N;break}if(++R>4e5)break;let G=this.dist[N];for(let O=this.eStart[N];O<this.eStart[N+1];O++){let q=this.eTo[O];this.stamp[q]!==u&&(this.stamp[q]=u,this.dist[q]=1e18,this.closed[q]=0);let $=G+this.eCost[O];$<this.dist[q]&&(this.dist[q]=$,this.prev[q]=N,this.prevWay[q]=this.eWay[O],h.push($+this.h(q,s,r),q))}}if(w<0)return null;let P=[],U=[];for(let N=w;N>=0;N=this.prev[N])P.push(N),U.push(this.prevWay[N]);P.reverse(),U.reverse();let L=[[l.px,l.pz]];for(let N of P)L.push([o.nx[N],o.nz[N]]);L.push([c.px,c.pz]);let B={pts:L,nodes:P,ways:U,dest:[c.px,c.pz],destRaw:[s,r],time:this.dist[w]};B.cum=[0];for(let N=1;N<L.length;N++)B.cum.push(B.cum[N-1]+Math.hypot(L[N][0]-L[N-1][0],L[N][1]-L[N-1][1]));return B.length=B.cum[B.cum.length-1],B.steps=this.instructions(B),B}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:s,ways:r,pts:o,cum:a}=t,l=u=>{let h=e.ways[u];return h.name||h.ref||""},c=1;for(;c<s.length-1;){let u=s[c],h=r[c],f=r[c+1],d=e.ways[h].flags&Nt.ROUNDABOUT,g=e.ways[f].flags&Nt.ROUNDABOUT,y=o[c],p=o[c+1],m=o[c+2];if(!d&&g){let R=0,P=c+1;for(;P<s.length-1&&e.ways[r[P+1]].flags&Nt.ROUNDABOUT;)this.hasExit(s[P],r[P])&&R++,P++;R++;let U=P+1<r.length?l(r[P+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:R,name:U,text:`Alla rotatoria prendi la ${R}\xAA uscita`+(U?` verso ${U}`:"")}),c=P+1;continue}if(d){c++;continue}if(e.degree[u]<3){c++;continue}let _=Math.atan2(p[0]-y[0],p[1]-y[1]),v=Math.atan2(m[0]-p[0],m[1]-p[1])-_;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let b=v*180/Math.PI,S=l(h),E=l(f),T=E!==S;if(Math.abs(b)<25&&!T){c++;continue}if(Math.abs(b)<25&&T&&!this.realChoice(u,h)){c++;continue}let M,w;Math.abs(b)<25?(M="straight",w="Prosegui dritto"):b>=25&&b<55?(M="slight-left",w="Tieni la sinistra"):b>=55&&b<150?(M="left",w="Svolta a sinistra"):b<=-25&&b>-55?(M="slight-right",w="Tieni la destra"):b<=-55&&b>-150?(M="right",w="Svolta a destra"):(M="uturn",w="Fai inversione a U"),E&&(w+=(M==="straight"?" su ":" in ")+E),n.push({i:c,d:a[c+1],type:M,name:E,text:w}),c++}return n.push({i:s.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let s=n.adjStart[t];s<n.adjStart[t+1];s++){let r=n.ways[n.adjWay[s]];if(!(r.flags&Nt.ROUNDABOUT)&&r.drivable&&r.cls<Ht.SERVICE+1){let o=n.adjPos[s];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,s=0;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++)n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=Ht.LIVING&&s++;return s>=2}};function ld(i,t,e){let{pts:n,cum:s}=i,r=1e9,o=0,a=0,l=Math.max(0,(i._lastI||0)-30),c=Math.min(n.length-1,(i._lastI||0)+200);for(let u=l;u<c;u++){let h=n[u][0],f=n[u][1],d=n[u+1][0]-h,g=n[u+1][1]-f,y=d*d+g*g||1e-9,p=((t-h)*d+(e-f)*g)/y;p=Math.max(0,Math.min(1,p));let m=Math.hypot(t-h-d*p,e-f-g*p);m<r&&(r=m,o=s[u]+Math.sqrt(y)*p,a=u)}return i._lastI=a,{off:r,s:o,i:a}}var wy=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],Sy=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],Ey={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},ya=class{constructor(t,e){this.world=t,this.R=t.roads,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.R.ways.forEach((n,s)=>{n.cls<=Ht.TERTIARY&&n.drivable&&this.major.push(s)}),this.waters=e.waters,this.comuni=e.comuni.map(n=>{let s=null,r=0;for(let o of n.rings){let a=0,l=0,c=0;for(let u=0;u<o.length;u++){let h=(u+1)%o.length,f=o[u][0]*o[h][1]-o[h][0]*o[u][1];a+=f,l+=(o[u][0]+o[h][0])*f,c+=(o[u][1]+o[h][1])*f}Math.abs(a)>r&&(r=Math.abs(a),s=[l/(3*a),c/(3*a)])}return{...n,label:s}}),this.night=!1}drawMini(t,e,n){let s=this.mini,r=this.miniCtx,o=s.width,a=s.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,u=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let h=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(h),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,u,n),this.drawRoads(r,t.x,t.z,u,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(h+Math.PI)*0+Math.cos(h-Math.PI/2)*(o/2-16),d=a/2+Math.sin(h-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,s,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>s+3e3||Math.abs(a[0][1]-n)>s+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,u)=>u?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,s,r,o,a){let l=this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let h of this.major)c[l.ways[h].cls].push(h*16384-1);else l.segmentsNear(e,n,s,(h,f)=>{let d=l.ways[h];a&&r<.35&&d.cls>=Ht.SERVICE||c[d.cls].push(h*16384+f)});let u=o?Sy:wy;for(let h=0;h<2;h++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let g=[12,11,9,8,7,6,6,5,4,3,5][f],y=Math.max(a?1:1.6,g*r);if(h===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(y+(a?1.2:2.2))/r):(t.strokeStyle=u[f],t.lineWidth=y/r),!(h===0&&f>=Ht.SERVICE)){t.beginPath();for(let p of d){let m=Math.floor((p+1)/16384),_=p-m*16384,x=l.ways[m];if(_<0)for(let v=0;v<x.nodes.length;v++){let b=x.nodes[v];v?t.lineTo(l.nx[b],l.nz[b]):t.moveTo(l.nx[b],l.nz[b])}else{let v=x.nodes[_],b=x.nodes[_+1];t.moveTo(l.nx[v],l.nz[v]),t.lineTo(l.nx[b],l.nz[b])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,s){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);s?t.moveTo(s.x,s.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let s=this.big,r=this.bigCtx,o=s.width,a=s.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let h of this.comuni){let f=this.meta.featured.includes(h.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of h.rings)d.forEach((g,y)=>y?r.lineTo(g[0],g[1]):r.moveTo(g[0],g[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let h of this.meta.rivers)h.w==="stream"&&l<.3||h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let h of this.R.rails)h.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let h of this.meta.landmarks){if(h[0]===11||h[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(h[1],h[2]);f<0||d<0||f>o||d>a||(r.fillText(Ey[h[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(h[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let h of this.meta.places){if(h.t==="town"||h.t==="city"||(h.t==="hamlet"||h.t==="neighbourhood"||h.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(h.x,h.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(h.n,f,d),r.fillStyle="#4a4a4a",r.fillText(h.n,f,d))}}for(let h of this.comuni){if(!h.label)continue;let f=this.meta.featured.includes(h.n),[d,g]=this.toScreen(h.label[0],h.label[1]);d<-100||g<-50||d>o+100||g>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(h.n.toUpperCase(),d,g),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(h.n.toUpperCase(),d,g))}if(n){let[h,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",h+6,f-12)}if(t){let[h,f]=this.toScreen(t.x,t.z);r.save(),r.translate(h,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let u=[50,100,200,500,1e3,2e3,5e3].find(h=>h*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,u*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(u>=1e3?u/1e3+" km":u+" m",20,a-42)}};var va=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let s=t.sampleRate*2,r=t.createBuffer(1,s,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<s;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}horn(t){if(this.ctx){if(t&&!this.hornOsc){let e=this.ctx,n=e.createGain();n.gain.value=this.muted?0:.12,n.connect(e.destination),this.hornOsc=[420,525].map(s=>{let r=e.createOscillator();return r.type="square",r.frequency.value=s,r.connect(n),r.start(),r}),this.hornGain=n}else if(!t&&this.hornOsc){for(let e of this.hornOsc)e.stop();this.hornGain.disconnect(),this.hornOsc=null}}}update(t,e,n,s){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+s*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+s*1500,r,.1)}};function Ma(){return{spine:0,spineZ:0,twist:0,neck:0,headYaw:0,headZ:0,hipLs:0,hipLz:0,hipRs:0,hipRz:0,kneeL:0,kneeR:0,ankL:0,ankR:0,shLs:0,shLz:0,shRs:0,shRz:0,elbL:0,elbR:0}}var Er=[["spine",-.55,.45,26,5.5,"swing",0],["spineZ",-.4,.4,26,5.5,"lean",0],["twist",-.55,.55,18,5,"zero",0],["neck",-.75,.62,34,4.6,"swing",0],["headZ",-.55,.55,34,4.6,"lean",0],["headYaw",-.9,.9,20,5,"zero",0],["hipLs",-2.05,.45,30,4.2,"swing",0],["hipRs",-2.05,.45,30,4.2,"swing",0],["hipLz",-.3,.55,30,4.2,"lean",.1],["hipRz",-.55,.3,30,4.2,"lean",-.1],["shLs",-2.9,1.5,22,3.4,"swing",0],["shRs",-2.9,1.5,22,3.4,"swing",0],["shLz",-.35,1.75,22,3.4,"lean",.22],["shRz",-1.75,.35,22,3.4,"lean",-.22],["kneeL",0,2.3,26,4,"slack",.3],["kneeR",0,2.3,26,4,"slack",.3],["elbL",0,2.4,24,3.6,"slack",.35],["elbR",0,2.4,24,3.6,"slack",.35],["ankL",-.55,.45,30,4.4,"slack",-.15],["ankR",-.55,.45,30,4.4,"slack",-.15]],_a=(i,t,e)=>i<t?t:i>e?e:i;function hh({facing:i,scale:t,x:e,z:n,travelX:s,travelZ:r,awayX:o,awayZ:a,speed:l,pose:c,rand:u}){let h=_a((Math.abs(l)-1.5)/23,0,1.45),f=.908*t,d=Math.min(l*.62,5+9*h),g=1.1+4.9*h,y=(.6+1.6*h)*(.4+u()*.6),p=2.2+5*h,m=-r,_=s,x={e:h,scale:t,hipRest:f,x:e,z:n,y:f,vx:s*d+o*y,vz:r*d+a*y,vy:g,qx:0,qy:Math.sin(i/2),qz:0,qw:Math.cos(i/2),wx:m*p,wy:(u()-.5)*(1.5+5*h),wz:_*p,col:new Float64Array(9),pose:c?{...c}:Ma(),vel:Ma(),phase:"air",t:0,airborne:0,grounded:0,bumps:0,settleFor:0,restFor:5+3*(.5*u()+.5*Math.min(1,h)),riseFor:1.15+(1.9-1.15)*Math.min(1,h),riseT:0,riseFrom:null,yawOut:i,lieSign:u()<.5?1:-1,done:!1,rand:u};ba(x);let v=5+13*h;for(let[b]of Er)x.vel[b]=(u()-.5)*v;return x}function ba(i){let{qx:t,qy:e,qz:n,qw:s}=i,r=i.col;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*s),r[2]=2*(t*n-e*s),r[3]=2*(t*e-n*s),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*s),r[6]=2*(t*n+e*s),r[7]=2*(e*n-t*s),r[8]=1-2*(t*t+e*e)}var ch=[[.7,.12],[.42,.15],[0,.15],[-.45,.1],[-.86,.05]];function uh(i,t){if(i.t+=t,i.phase==="rise"){Ry(i,t);return}i.vy-=11.5*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;let{wx:e,wy:n,wz:s,qx:r,qy:o,qz:a,qw:l}=i,c=t*.5,u=r+c*(e*l+n*a-s*o),h=o+c*(n*l+s*r-e*a),f=a+c*(s*l+e*o-n*r),d=l-c*(e*r+n*o+s*a),g=1/(Math.hypot(u,h,f,d)||1);i.qx=u*g,i.qy=h*g,i.qz=f*g,i.qw=d*g,ba(i);let y=i.col,p=!1;for(let x=0;x<ch.length;x++){let v=ch[x][0]*i.scale,b=y[3]*v,S=y[4]*v,E=y[5]*v,T=ch[x][1]*i.scale-(i.y+S);if(T<=0)continue;p=!0,i.y+=T*.55;let M=i.vx+(i.wy*E-i.wz*S),w=i.vy+(i.wz*b-i.wx*E),R=i.vz+(i.wx*S-i.wy*b);if(w>=0)continue;let P=(b*b+E*E)/.16,U=-(1+.17)*w/(1+P);i.vy+=U,i.wx+=-E*U/.16,i.wz+=b*U/.16;let L=Math.hypot(M,R);if(L>1e-4){let B=Math.min(.55*U,L),N=-M/L*B,G=-R/L*B;i.vx+=N,i.vz+=G,i.wy+=(E*N-b*G)/.16*.5}if(U>.9&&i.bumps++,U>.6){let B=Math.min(9,U*2.4);for(let[N]of Er)i.vel[N]+=(i.rand()-.5)*B}}if(p){i.grounded+=t;let x=Math.exp(-3.2*t);i.wx*=x,i.wy*=x,i.wz*=x,i.vx*=Math.exp(-1.9*t),i.vz*=Math.exp(-1.9*t)}else i.airborne+=t,i.grounded=0;Ay(i,t);let m=Math.hypot(i.wx,i.wy,i.wz),_=Math.hypot(i.vx,i.vy,i.vz);if(i.phase==="air"&&p&&i.grounded>.12&&m<1.1&&_<.7){i.phase="down",i.settleFor=0;let x=y[6],v=y[8];x*x+v*v<.04&&(x=y[3],v=y[5]),i.yawOut=Math.atan2(x,v)}if(i.phase==="down"){if(i.settleFor+=t,i.settleFor<.45){let x=Math.min(1,t*7);Ty(i,x),ba(i)}i.vx*=Math.exp(-5*t),i.vz*=Math.exp(-5*t),i.wx*=Math.exp(-6*t),i.wy*=Math.exp(-6*t),i.wz*=Math.exp(-6*t),i.settleFor>i.restFor+.45&&(i.phase="rise",i.riseT=0,i.riseFrom={qx:i.qx,qy:i.qy,qz:i.qz,qw:i.qw,y:i.y,pose:{...i.pose}})}}function Ty(i,t){let e=i.yawOut/2,n=Math.sin(e),s=Math.cos(e),r=i.lieSign*Math.SQRT1_2,o=Math.SQRT1_2,a=s*r,l=n*o,c=-n*r,u=s*o,h=i.qx*a+i.qy*l+i.qz*c+i.qw*u,f=a,d=l,g=c,y=u;h<0&&(f=-f,d=-d,g=-g,y=-y),i.qx+=(f-i.qx)*t,i.qy+=(d-i.qy)*t,i.qz+=(g-i.qz)*t,i.qw+=(y-i.qw)*t;let p=1/(Math.hypot(i.qx,i.qy,i.qz,i.qw)||1);i.qx*=p,i.qy*=p,i.qz*=p,i.qw*=p}function Ay(i,t){let e=i.col,n=-e[1],s=-e[4],r=-e[7],o=Math.asin(_a(n,-1,1)),a=Math.atan2(-r,-s),l=i.pose,c=i.vel,u=i.phase==="down"?1:0;for(let h=0;h<Er.length;h++){let f=Er[h],d=f[0],g=f[1],y=f[2],p=f[6],m=f[3]*(1+u*.6),_=f[4]*(1+u*1.4),x=f[5],v=x==="swing"?_a(a+p,g,y):x==="lean"?_a(o+p,g,y):x==="slack"?p:0,b=c[d]+(m*(v-l[d])-_*c[d])*t,S=l[d]+b*t;S<g?(S=g,b*=-.18):S>y&&(S=y,b*=-.18),c[d]=b,l[d]=S}}function Ry(i,t){i.riseT+=t;let e=Math.min(1,i.riseT/i.riseFor),n=i.riseFrom,s=e*e*(3-2*e),r=i.yawOut/2,o=0,a=Math.sin(r),l=0,c=Math.cos(r),h=n.qx*o+n.qy*a+n.qz*l+n.qw*c<0?-1:1;i.qx=n.qx+(h*o-n.qx)*s,i.qy=n.qy+(h*a-n.qy)*s,i.qz=n.qz+(h*l-n.qz)*s,i.qw=n.qw+(h*c-n.qw)*s;let f=1/(Math.hypot(i.qx,i.qy,i.qz,i.qw)||1);i.qx*=f,i.qy*=f,i.qz*=f,i.qw*=f,ba(i);let d=.46*i.hipRest;i.y=e<.5?n.y+(d-n.y)*cd(e/.5):d+(i.hipRest-d)*cd((e-.5)/.5);let g=Math.sin(Math.min(1,e*1.6)*Math.PI)*.9;for(let[y]of Er){let p=n.pose[y],m=0;y==="kneeL"||y==="kneeR"?m=g:y==="hipLs"||y==="hipRs"?m=-g*.75:y==="spine"?m=-.35*(1-s):y==="shLz"?m=.18:y==="shRz"&&(m=-.18),i.pose[y]=p+(m-p)*s,i.vel[y]=0}e>=1&&(i.done=!0)}var cd=i=>i*i*(3-2*i);var Cy=[12999502,5144518,5873770,13018190,9068230,5155270],Iy=[3949392,2830134,7039587,9407362,5720896,4608831,12170151,8208186,3099205,5330526],Py=.34,hd=[3093568,2303531,4015703,4866616,6971991,2832970,5591114,9274740,11117460,5205391,7306636,12433062];function ud(i){return(.2126*(i>>16&255)+.7152*(i>>8&255)+.0722*(i&255))/255}var Ly=.15,Dy=[15782580,15254430,14132856,12091218,9263675,6307884],Ny=[1775124,2759958,4862755,7031338,10516800,13218430,9341830,5854286],Uy=[9187114,2903932,1907999,4156229,11576460,7166860],fd=[1710620,2565160,3813160,4539722],zy=[3881528,5916214,3095882,7037527,8011578],Fy=.34,Oy=1.75;var Is=.43,Ps=.42,fh=.058,By=.085,ky=.092,dd=.372,Hy=.44,Gy=.196,dh=.3,ph=.265,__=Is+Ps+fh;function Vy(i){let t=i()<.5,e=t?1.58+i()*.16:1.7+i()*.18;return{female:t,scale:e/Oy,shoulder:t?.88+i()*.07:1+i()*.11,depth:.92+i()*.26,hipW:t?1.04+i()*.1:.94+i()*.08,limb:(t?.9:1)+i()*.14}}function Wy(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function En(i){let t=0,e=0;for(let c of i)t+=c.attributes.position.count,e+=c.index.count;let n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Uint16Array(e),o=0,a=0;for(let c of i){n.set(c.attributes.position.array,o*3),s.set(c.attributes.normal.array,o*3);let u=c.index.array;for(let h=0;h<u.length;h++)r[a+h]=u[h]+o;o+=c.attributes.position.count,a+=u.length,c.dispose()}let l=new se;return l.setAttribute("position",new ge(n,3)),l.setAttribute("normal",new ge(s,3)),l.setIndex(new ge(r,1)),l.computeVertexNormals(),l}function wa(i,t,e,n=6){let s=new ie(i,t,e,n,1,!1);return s.translate(0,-e/2,0),s}function Sa(i,t=6,e=4){return new fn(i,t,e)}function Tr(i,t,e){return new zt(i,t,e)}function Xy(){let i=Sa(.1,9,6);i.scale(.84,1.13,1.16),i.translate(0,.176,.008);let t=Tr(.102,.072,.112);t.translate(0,.12,.04);let e=new ie(.05,.058,.09,6);e.translate(0,.045,-.008);let n=Tr(.024,.028,.034);n.translate(0,.158,.122);let s=En([e,t,i,n]),r=new fn(.104,9,6,Math.PI/2+.6,Math.PI*2-1.2,0,1.92);r.scale(.89,1.17,1.2),r.translate(0,.174,.008);let o=En([r]),a=Tr(.175,.22,.062);a.translate(0,.005,-.062);let l=En([a]),c=T=>{let M=new zo(T.map(([w,R])=>new It(w,R)),8);return M.scale(1,1,.66),M},u=En([c([[.001,-.115],[.176,-.11],[.182,-.06],[.158,.02],[.196,.24],[.188,.345],[.168,.405],[.118,.452],[.068,.49],[.001,.5]])]),h=En([c([[.001,.125],[.148,.12],[.166,.02],[.17,-.05],[.16,-.09],[.001,-.095]])]),f=.05,d=En([Sa(.049),wa(.047,.04,dh)]),g=wa(.037,.031,ph+f);g.translate(0,f,0);let y=Sa(.044,5,4);y.scale(.85,1.25,.62),y.translate(0,-ph-.035,0);let p=En([g,y]),m=En([Sa(.086),wa(.082,.06,Is)]),_=wa(.057,.043,Ps+.06);_.translate(0,.06,0);let x=En([_]),v=Tr(.088,.055,.235);v.translate(0,-.03,.052);let b=En([v]),S=Tr(.24,.28,.13);S.translate(0,-.15,0);let E=En([S]);return{head:s,hair:o,hairLong:l,chest:u,pelvis:h,upperArm:d,forearm:p,thigh:m,shin:x,foot:b,bag:E}}function qy(i,t,e,n,s,r,o){let a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o),d=a,g=0,y=-l,p=l*u,m=c,_=a*u,x=l*c,v=-u,b=a*c;i[0]=d*h+p*f,i[1]=g*h+m*f,i[2]=y*h+_*f,i[3]=-d*f+p*h,i[4]=-g*f+m*h,i[5]=-y*f+_*h,i[6]=x,i[7]=v,i[8]=b,i[9]=t,i[10]=e,i[11]=n}function Yy(i,t,e,n,s){i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=e,i[10]=n,i[11]=s}function Cs(i,t,e,n,s,r,o,a){let l=t[0],c=t[1],u=t[2],h=t[3],f=t[4],d=t[5],g=t[6],y=t[7],p=t[8];i[9]=t[9]+l*e+h*n+g*s,i[10]=t[10]+c*e+f*n+y*s,i[11]=t[11]+u*e+d*n+p*s;let m=Math.cos(a),_=Math.sin(a),x=Math.cos(r),v=Math.sin(r),b=Math.cos(o),S=Math.sin(o),E=m,T=-_,M=_*v,w=x,R=m*v,P=E*b+M*S,U=w*S,L=T*b+R*S,B=-E*S+M*b,N=w*b,G=-T*S+R*b,O=_*x,q=-v,$=m*x;i[0]=l*P+h*U+g*L,i[1]=c*P+f*U+y*L,i[2]=u*P+d*U+p*L,i[3]=l*B+h*N+g*G,i[4]=c*B+f*N+y*G,i[5]=u*B+d*N+p*G,i[6]=l*O+h*q+g*$,i[7]=c*O+f*q+y*$,i[8]=u*O+d*q+p*$}function Oi(i,t,e,n){let s=t[0],r=t[1],o=t[2],a=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8];i[9]=t[9]+a*e,i[10]=t[10]+l*e,i[11]=t[11]+c*e;let d=Math.cos(n),g=Math.sin(n);i[0]=s,i[1]=r,i[2]=o,i[3]=a*d+u*g,i[4]=l*d+h*g,i[5]=c*d+f*g,i[6]=-a*g+u*d,i[7]=-l*g+h*d,i[8]=-c*g+f*d}function Ve(i,t,e,n,s,r){let o=i.instanceMatrix.array,a=t*16;o[a]=e[0]*n,o[a+1]=e[1]*n,o[a+2]=e[2]*n,o[a+3]=0,o[a+4]=e[3]*s,o[a+5]=e[4]*s,o[a+6]=e[5]*s,o[a+7]=0,o[a+8]=e[6]*r,o[a+9]=e[7]*r,o[a+10]=e[8]*r,o[a+11]=0,o[a+12]=e[9],o[a+13]=e[10],o[a+14]=e[11],o[a+15]=1}function Ea(i,t){let e=i.instanceMatrix.array,n=t*16;for(let s=0;s<16;s++)e[n+s]=0;e[n]=1e-5,e[n+5]=1e-5,e[n+10]=1e-5,e[n+15]=1,e[n+13]=-60}var pd=(i,t,e)=>i<t?t:i>e?e:i;function md(i,t=20260919){let e=Wy(t),n=Xy(),s=new Gt,r={},o=["head","hair","hairLong","chest","pelvis","armL","armR","foreL","foreR","thighL","thighR","shinL","shinR","footL","footR","bag"],a={head:"head",hair:"hair",hairLong:"hairLong",chest:"chest",pelvis:"pelvis",armL:"upperArm",armR:"upperArm",foreL:"forearm",foreR:"forearm",thighL:"thigh",thighR:"thigh",shinL:"shin",shinR:"shin",footL:"foot",footR:"foot",bag:"bag"};for(let x of o)r[x]=new Se(n[a[x]],s,i);let l=o.map(x=>r[x]),c=new jt;for(let x of l)x.instanceMatrix.setUsage(lf),x.frustumCulled=!1,c.add(x);for(let x of[r.chest,r.pelvis,r.head,r.thighL,r.thighR,r.bag])x.castShadow=!0;let u=new Rt,h=x=>x[e()*x.length|0],f=[];for(let x=0;x<i;x++){let v=Vy(e),b={phase:e()*Math.PI*2,build:v,pace:1.02+e()*.52,lean:.03+e()*.07,swagger:.85+e()*.35,bag:e()<Fy,bagSide:e()<.5?1:-1,idle:0,gait:1,pose:Ma(),rag:null};f.push(b);let S=e()<Py,E=h(S?Cy:Iy),T=h(hd);for(let L=0;L<10&&Math.abs(ud(T)-ud(E))<Ly;L++)T=h(hd);let M=h(Dy),w=e()<.1,R=e()<.14;b.longHair=!w&&!R&&e()<.34,b.bald=w,b.hatted=R;let P=e()<.45?E:M;r.chest.setColorAt(x,u.setHex(E)),r.armL.setColorAt(x,u.setHex(E)),r.armR.setColorAt(x,u.setHex(E)),r.foreL.setColorAt(x,u.setHex(P)),r.foreR.setColorAt(x,u.setHex(P)),r.head.setColorAt(x,u.setHex(M)),r.pelvis.setColorAt(x,u.setHex(T)),r.thighL.setColorAt(x,u.setHex(T)),r.thighR.setColorAt(x,u.setHex(T)),r.shinL.setColorAt(x,u.setHex(T)),r.shinR.setColorAt(x,u.setHex(T)),r.footL.setColorAt(x,u.setHex(h(fd))),r.footR.setColorAt(x,u.setHex(h(fd)));let U=h(R?Uy:Ny);r.hair.setColorAt(x,u.setHex(U)),r.hairLong.setColorAt(x,u.setHex(U)),r.bag.setColorAt(x,u.setHex(h(zy)))}for(let x of l)x.instanceColor&&(x.instanceColor.needsUpdate=!0);let d={root:new Float64Array(12),chest:new Float64Array(12),head:new Float64Array(12),armL:new Float64Array(12),armR:new Float64Array(12),foreL:new Float64Array(12),foreR:new Float64Array(12),thighL:new Float64Array(12),thighR:new Float64Array(12),shinL:new Float64Array(12),shinR:new Float64Array(12),footL:new Float64Array(12),footR:new Float64Array(12),bag:new Float64Array(12)};function g(x){return .2+.26*Math.min(1.7,x.gait)}function y(x,v,b){let S=x.phase,E=Math.sin(S),T=Math.cos(S),M=g(x)*(x.idle>0?0:1),w=Math.max(0,x.gait-1),R=M*E,P=-M*E;v.hipLs=R,v.hipRs=P,v.kneeL=p(S,M,w),v.kneeR=p(S+Math.PI,M,w);let U=.62,L=.38,B=-(R+v.kneeL),N=-(P+v.kneeR);v.ankL=pd(B+U*Math.max(0,E)**1.4-L*Math.max(0,-E)**1.6,-1.05,.4),v.ankR=pd(N+U*Math.max(0,-E)**1.4-L*Math.max(0,E)**1.6,-1.05,.4),v.hipLz=.02,v.hipRz=-.02;let G=-R*.62*x.swagger*(1+w*.5);v.shLs=G,v.shRs=-G;let O=.11+(x.build.shoulder-.95)*.35+w*.06;v.shLz=O,v.shRz=-O,v.elbL=.34+2.05*Math.max(0,-G)-.18*Math.max(0,G)+w*.55,v.elbR=.34+2.05*Math.max(0,G)-.18*Math.max(0,-G)+w*.55,x.bag&&(x.bagSide>0?(v.shLs*=.25,v.elbL=.32,v.shLz=O*1.5):(v.shRs*=.25,v.elbR=.32,v.shRz=-O*1.5)),v.twist=-.26*E*(1+w*.4),v.spine=-.02+.03*Math.abs(T)+Math.sin(b*1.6+x.phase*.1)*.012,v.spineZ=.035*T,v.headZ=-v.spineZ*.8,v.neck=.13-v.spine*.5}function p(x,v,b){let S=Math.max(0,-Math.cos(x)),E=Math.max(0,Math.sin(x));return .08+(2.1+b*1.4)*v*S**1.15+(.75+b)*v*E**2}function m(x,v){let b=.062*Math.max(0,-x.ankL),S=.062*Math.max(0,-x.ankR),E=Is*Math.cos(x.hipLs)+Ps*Math.cos(x.hipLs+x.kneeL)+fh+b,T=Is*Math.cos(x.hipRs)+Ps*Math.cos(x.hipRs+x.kneeR)+fh+S;return Math.max(E,T)*v}function _(x,v,b){let S=v.build,E=S.scale,T=S.limb*E,M=d.root;Cs(d.chest,M,0,ky*E,0,b.spine,b.spineZ,b.twist),Cs(d.head,d.chest,0,Hy*E,0,b.neck,b.headZ,b.headYaw);let w=Gy*S.shoulder*E;Cs(d.armL,d.chest,w,dd*E,0,b.shLs,b.shLz,0),Cs(d.armR,d.chest,-w,dd*E,0,b.shRs,b.shRz,0),Oi(d.foreL,d.armL,-dh*E,-b.elbL),Oi(d.foreR,d.armR,-dh*E,-b.elbR);let R=By*S.hipW*E;if(Cs(d.thighL,M,R,0,0,b.hipLs,b.hipLz,0),Cs(d.thighR,M,-R,0,0,b.hipRs,b.hipRz,0),Oi(d.shinL,d.thighL,-Is*E,b.kneeL),Oi(d.shinR,d.thighR,-Is*E,b.kneeR),Oi(d.footL,d.shinL,-Ps*E,b.ankL),Oi(d.footR,d.shinR,-Ps*E,b.ankR),Ve(r.pelvis,x,M,E*S.hipW,E,E*S.depth),Ve(r.chest,x,d.chest,E*S.shoulder,E,E*S.depth),Ve(r.head,x,d.head,E,E,E),v.bald?Ea(r.hair,x):Ve(r.hair,x,d.head,E*(v.hatted?1.1:1),E*(v.hatted?1.12:1),E*(v.hatted?1.1:1)),v.longHair?Ve(r.hairLong,x,d.head,E,E,E):Ea(r.hairLong,x),Ve(r.armL,x,d.armL,T,E,T),Ve(r.armR,x,d.armR,T,E,T),Ve(r.foreL,x,d.foreL,T,E,T),Ve(r.foreR,x,d.foreR,T,E,T),Ve(r.thighL,x,d.thighL,T,E,T),Ve(r.thighR,x,d.thighR,T,E,T),Ve(r.shinL,x,d.shinL,T,E,T),Ve(r.shinR,x,d.shinR,T,E,T),Ve(r.footL,x,d.footL,T,E,T),Ve(r.footR,x,d.footR,T,E,T),v.bag){let P=v.bagSide>0?d.foreL:d.foreR,U=v.bagSide>0?b.elbL:b.elbR;Oi(d.bag,P,-(ph+.05)*E,U*.5),Ve(r.bag,x,d.bag,E,E,E)}else Ea(r.bag,x)}return{group:c,people:f,rand:e,count:i,drawWalking(x,v,b,S,E,T){let M=f[x],w=M.build.scale;y(M,M.pose,T),qy(d.root,v,b+m(M.pose,w),S,E+.12*Math.sin(M.phase)*(M.idle>0?0:1),M.lean+.12*Math.max(0,M.gait-1),.022*Math.cos(M.phase)),_(x,M,M.pose)},drawRagdoll(x,v,b){Yy(d.root,v.col,v.x,b+v.y,v.z),_(x,f[x],v.pose)},hideAt(x){for(let v of l)Ea(v,x)},commit(){for(let x of l)x.instanceMatrix.needsUpdate=!0}}}var Ls=90,mh=i=>i.cls>=Ht.PRIMARY&&!(i.flags&(Nt.LINK|Nt.TUNNEL|Nt.PRIVATE))&&i.cls!==Ht.TRACK,Ta=class{constructor(t){this.world=t,this.R=t.roads,this.T=t.terrain,this.crowd=md(Ls),this.group=this.crowd.group,this.peds=this.crowd.people,this.target=45,this.active=0,this.clock=0,this.onHit=null;for(let e=0;e<Ls;e++)this.peds[e].alive=!1,this.crowd.hideAt(e);this.me=Ls-1,this.peds[this.me].reserved=!0,this.peds[this.me].bag=!1,this.crowd.commit(),this.spawnTimer=0}setTarget(t){this.target=Math.min(Ls,t)}latTarget(t,e){return t.flags&Nt.NOCAR?e*t.width*.3:e*(t.width/2+.85)}spawn(t,e,n){let s=this.R,r=this.peds[n];for(let o=0;o<5;o++){let a=Math.random()*Math.PI*2,l=35+Math.random()*130,c=t+Math.cos(a)*l,u=e+Math.sin(a)*l;if(!this.T.isUrban(c,u)&&Math.random()<.85)continue;let h=s.nearest(c,u,45,mh);if(!h)continue;let f=s.ways[h.wi];if(f.cls<=Ht.SECONDARY&&f.limit>50)continue;r.wi=h.wi,r.k=h.k,r.dir=Math.random()<.5?1:-1;let d=f.cum[h.k+1]-f.cum[h.k];return r.s=(r.dir>0?h.t:1-h.t)*d,r.side=Math.random()<.5?1:-1,r.lat=this.latTarget(f,r.side)*(.9+Math.random()*.25),r.latGoal=r.lat,r.alive=!0,r.rag=null,r.down=0,r.flee=0,r.wait=0,r.crossing=!1,r.idle=Math.random()<.12?3+Math.random()*8:0,r.gait=1,r.h=0,r.x=h.px,r.z=h.pz,r.y=0,this.place(r,0,!0),!0}return!1}ends(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}place(t,e,n=!1){let s=this.R,r=s.ways[t.wi],o=r.nodes[t.k],a=r.nodes[t.k+1],l=s.nx[o],c=s.nz[o],u=s.nx[a],h=s.nz[a],f=Math.hypot(u-l,h-c)||.01,d=(u-l)/f,g=(h-c)/f,y=t.dir>0?t.s:f-t.s,p=l+d*y-g*t.lat,m=c+g*y+d*t.lat,_=n?1:Math.min(1,e*5),x=t.x,v=t.z;t.x+=(p-t.x)*_,t.z+=(m-t.z)*_;let b=t.x-x,S=t.z-v;if(n)t.h=Math.atan2(d*t.dir,g*t.dir);else if(b*b+S*S>1e-7){let M=Math.atan2(b,S)-t.h;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;t.h+=M*Math.min(1,e*8)}let E=Math.abs(t.lat)<r.width/2+.2;t.onRoad=E&&!(r.flags&Nt.NOCAR);let T=Math.min(1,Math.max(0,y/f));t.y=E?s.heightOn(t.wi,t.k,T,t.x,t.z):this.T.height(t.x,t.z)+(r.sw!==4&&this.R.sidewalkSides(r,t.x,t.z)?.31:.12)}next(t){let e=this.R,n=e.ways[t.wi],[s,r]=this.ends(t),o=t.dir>0?t.k+1===n.nodes.length-1:t.k===0;if((e.ntag[r]===Jt.CROSSING||e.ntag[r]===Jt.CROSSING_SIGNALS)&&Math.random()<.4&&!(n.flags&Nt.NOCAR)&&(t.side=-t.side,t.wait=.01),!o&&e.degree[r]<3){t.k+=t.dir;return}let a=Math.atan2(e.nx[r]-e.nx[s],e.nz[r]-e.nz[s]),l=[];for(let _=e.adjStart[r];_<e.adjStart[r+1];_++){let x=e.adjWay[_],v=e.adjPos[_],b=e.ways[x];if(!(!mh(b)||b.cls<=Ht.SECONDARY&&b.limit>50))for(let[S,E,T]of[[v,1,b.nodes[v+1]],[v-1,-1,b.nodes[v-1]]]){if(T===void 0||x===t.wi&&S===t.k)continue;let M=Math.atan2(e.nx[T]-e.nx[r],e.nz[T]-e.nz[r])-a;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;l.push({wi:x,k:S,dir:E,wgt:(Math.abs(M)<.5?3:Math.abs(M)>2.6?.1:1)*(b.flags&Nt.NOCAR?2.5:1)*(b.cls>=Ht.SERVICE?.4:1)})}}if(!l.length){t.dir=-t.dir;return}let c=Math.random()*l.reduce((_,x)=>_+x.wgt,0),u=l[l.length-1];for(let _ of l)if(c-=_.wgt,c<=0){u=_;break}let h=e.ways[u.wi],f=h.nodes[u.k],d=h.nodes[u.k+1],g=e.nx[d]-e.nx[f],y=e.nz[d]-e.nz[f],p=Math.hypot(g,y)||1,m=((t.x-e.nx[f])*-y+(t.z-e.nz[f])*g)/p;t.wi=u.wi,t.k=u.k,t.dir=u.dir,t.side=m>=0?1:-1,t.lat=Math.max(-h.width/2-2.5,Math.min(h.width/2+2.5,m))}update(t,e,n,s,r){this.clock+=t;let o=this.R,a=this.crowd;this.spawnTimer-=t;let l=0;for(let u=0;u<Ls;u++){let h=this.peds[u];h.alive&&Math.hypot(h.x-e,h.z-n)>230&&(h.alive=!1,a.hideAt(u)),h.alive&&l++}if(l<this.target&&this.spawnTimer<=0){this.spawnTimer=.08;let u=this.peds.findIndex(h=>!h.alive&&!h.reserved);u>=0&&this.spawn(e,n,u)}this.active=l;let c=[];for(let u=0;u<Ls;u++){let h=this.peds[u];if(!h.alive)continue;if(h.rag){uh(h.rag,t),h.x=h.rag.x,h.z=h.rag.z;let b=o.surfaceAt(h.x,h.z,h.y+1).h;a.drawRagdoll(u,h.rag,b),c.push([h.x,h.z]),h.rag.done&&(h.rag=null,h.flee=4,h.h=Math.atan2(h.x-e,h.z-n),this.rejoin(h));continue}let f=o.ways[h.wi],d=!1,g=null;for(let b of s){let S=h.x-b.x,E=h.z-b.z,T=S*S+E*E;if(T>900)continue;let M=Math.hypot(b.vx,b.vz),w=Math.sin(b.h),R=Math.cos(b.h),P=S*w+E*R,U=S*R-E*w;if(Math.abs(P)<b.halfL+.25&&Math.abs(U)<b.halfW+.25)M>1.6?g=b:(h.x+=(U>=0?R:-R)*.05,h.z+=(U>=0?-w:w)*.05);else if(M>2.5){let L=b.vx/M,B=b.vz/M,N=S*L+E*B,G=Math.abs(S*B-E*L);N>0&&N<4+M*1.4&&G<b.halfW+1.3&&(d=!0,h.fleeSide=S*B-E*L>=0?1:-1,h.fdx=B*h.fleeSide,h.fdz=-L*h.fleeSide)}if(r&&b.player&&T<400){let L=Math.max(M,1);(S*(b.vx||w)+E*(b.vz||R))/L>-2&&(d=!0,h.fdx=U>=0?R:-R,h.fdz=U>=0?-w:w)}}if(g){let b=Math.hypot(g.vx,g.vz),S=g.vx/b,E=g.vz/b,T=h.x-g.x,M=h.z-g.z,w=Math.hypot(T,M)||1;h.rag=hh({facing:h.h,scale:h.build.scale,x:h.x,z:h.z,travelX:S,travelZ:E,awayX:T/w,awayZ:M/w,speed:b,pose:h.pose,rand:a.rand}),this.onHit&&this.onHit(h,b,g),a.drawRagdoll(u,h.rag,h.y);continue}d&&(h.flee=1.6);let y=h.pace;if(h.flee>0){if(h.flee-=t,h.gait+=(1.6-h.gait)*Math.min(1,t*6),h.fdx!==void 0&&h.flee>.6){h.x+=h.fdx*3.6*t,h.z+=h.fdz*3.6*t;let b=this.world.collision.resolveCircle(h.x,h.z,.3);b&&(h.x+=b.nx*b.depth,h.z+=b.nz*b.depth)}h.flee<=0&&this.rejoin(h),h.phase+=t*Math.PI*3.4/.55,h.y=o.surfaceAt(h.x,h.z,h.y+1).h,a.drawWalking(u,h.x,h.y,h.z,h.fdx!==void 0?Math.atan2(h.fdx,h.fdz):h.h,this.clock);continue}if(h.idle>0){h.idle-=t,h.gait+=(0-h.gait)*Math.min(1,t*5),h.phase+=t*.7,a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock);continue}let p=this.latTarget(f,h.side);if(h.wait>0){let b=!1;for(let S of s){let E=Math.hypot(S.vx,S.vz);if(E<1.5)continue;let T=h.x-S.x,M=h.z-S.z,w=Math.hypot(T,M);w<12+E*3&&(T*S.vx+M*S.vz)/(w*E)>.5&&(b=!0)}h.wait+=t,!b||h.wait>9?h.wait=0:y=0}h.wait<=0&&(h.lat+=Math.max(-1.4*t,Math.min(1.4*t,p-h.lat)));let m=Math.abs(p-h.lat)>.3,_=m?y*.25:y;h.gait+=((y>0?1:0)-h.gait)*Math.min(1,t*5),h.s+=_*t;let x=.2+.26*Math.min(1.7,h.gait);h.phase+=t*Math.PI*Math.max(_,m&&y>0?1.2:0)/Math.max(.25,x);let v=0;for(;v++<6;){let[b,S]=this.ends(h),E=Math.hypot(o.nx[S]-o.nx[b],o.nz[S]-o.nz[b]);if(h.s<E)break;h.s-=E,this.next(h)}this.place(h,t),h.onRoad&&c.push([h.x,h.z]),a.drawWalking(u,h.x,h.y,h.z,h.h,this.clock)}return a.commit(),c}drawPlayer(t,e,n,s,r,o,a,l){let c=this.peds[this.me];if(!t){this.crowd.hideAt(this.me),this.crowd.commit();return}c.gait+=(Math.min(1.7,o)-c.gait)*Math.min(1,l*8),c.idle=Math.abs(a)<.15?1:0;let u=.2+.26*Math.min(1.7,c.gait);c.phase+=l*Math.PI*Math.abs(a)/Math.max(.25,u),this.crowd.drawWalking(this.me,e,n,s,r,this.clock),this.crowd.commit()}rejoin(t){let e=this.R,n=e.nearest(t.x,t.z,40,mh);if(!n){t.alive=!1;return}let s=e.ways[n.wi],r=s.cum[n.k+1]-s.cum[n.k],o=Math.hypot(n.dx,n.dz)||1;t.wi=n.wi,t.k=n.k,t.s=(t.dir>0?n.t:1-n.t)*r;let a=((t.x-n.px)*-n.dz+(t.z-n.pz)*n.dx)/o;t.side=a>=0?1:-1,t.lat=a,t.wait=0,t.fdx=void 0}near(t,e,n){return this.peds.filter(s=>s.alive&&!s.rag&&Math.hypot(s.x-t,s.z-e)<n)}};var Aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Zy=new _s(-1,1,1,-1,0,1),gh=class extends se{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},$y=new gh,pi=class{constructor(t){this._mesh=new St($y,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Zy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ra=class extends an{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hi.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ar=class extends an{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ca=class extends an{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ia=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ra(Aa),this.copyPass.material.blending=In,this.clock=new Wo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ar!==void 0&&(o instanceof Ar?n=!0:o instanceof Ca&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pa=class extends an{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var gd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ds=class i extends an{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ye(r,o,{type:bn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ye(r,o,{type:bn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=gd;this.highPassUniforms=hi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Aa;this.copyUniforms=hi.clone(u.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new Oe,this.fsQuad=new pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ds.BlurDirectionX=new It(1,0);Ds.BlurDirectionY=new It(0,1);var xd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var La=class extends an{constructor(){super();let t=xd;this.uniforms=hi.clone(t.uniforms),this.material=new Oo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mt=i=>document.getElementById(i),Ns={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5,bloom:!1,peds:20,parked:132},mid:{viewTiles:2,shadows:!0,pixelRatio:1.25,trees:.8,bloom:!0,peds:45,parked:288},high:{viewTiles:3,shadows:!0,pixelRatio:2,trees:1,bloom:!0,peds:70,parked:432}},C={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0,foot:{on:!1,x:0,z:0,y:0,h:0,u:0,gait:0},orbit:{yaw:0,pitch:0,idle:9},licence:20,fines:0,cool:{}},Ir=()=>C.foot.on?C.foot:C.vehicle;window.BDS=C;async function Jy(){let i=(a,l)=>{Mt("loadbar").style.width=(a*100).toFixed(0)+"%",l&&(Mt("loadmsg").textContent=l)};i(.05,"Caricamento della cartografia reale\u2026");let t=0,e=a=>a.then(l=>(t++,i(.05+t/4*.6),l)),[n,s,r,o]=await Promise.all([e(Li("meta","data/meta.js")),e(Li("roads","data/roads.js")),e(Li("height","data/height.js")),e(Li("landcover","data/landcover.js"))]);i(.7,"Costruzione della rete stradale ("+s.ways.length.toLocaleString("it")+" vie OSM)\u2026"),await new Promise(a=>setTimeout(a,20)),C.meta=n,C.proj=new Ko(n.proj),C.terrain=new jo(n,r,o),C.roads=new sa(s,C.terrain,n),i(.9,"Preparazione del navigatore\u2026"),await new Promise(a=>setTimeout(a,20)),C.router=new xa(C.roads),i(1,"Pronto"),Mt("loading").classList.add("hidden"),wh()}function Ky(i,t){let e=C.roads,n=e.streets.get(i)||[],s=null;for(let r of n){let o=C.world.comuneAt(r.x,r.z);t&&o!==t||(!s||r.len>s.len)&&(s=r)}return s}var Na={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function jy(){let i=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(i.get("lat")||t.lat||0),n=+(i.get("lon")||t.lon||0);return e&&n?(C.pickedStart=C.proj.fromLatLon(e,n),"picked"):null}function Qy(){let i=C.meta,t=[];t.push({id:"casa",label:Na.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of i.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=i.comuni.map(n=>n.n).filter(n=>!i.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function wh(){if(Mt("menu").classList.remove("hidden"),C.meta.dbgt&&C.meta.dbgt.length&&!Mt("dbgtcredit")){let n=document.createElement("div");n.id="dbgtcredit",n.textContent=`Forme e altezze degli edifici: DBGT \u2013 Database Geo-Topografico di Regione Lombardia (${C.meta.dbgt.join(", ")}).`,document.querySelector("#menu .credits").appendChild(n)}let t=Mt("cars");t.innerHTML="",Sr.forEach((n,s)=>{if(n.hidden)return;let r=document.createElement("div");r.className="car panel"+(s===C.carIdx?" sel":""),r.innerHTML=`<div class="sw" style="background:${n.color}"></div><b>${n.name}</b><small>${n.desc}</small>
      <div class="spec"><span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span></div>`,r.onclick=()=>{C.carIdx=s,[...t.children].forEach(o=>o.classList.toggle("sel",o===r))},t.appendChild(r)});let e=Mt("start");e.innerHTML="";for(let n of Qy()){let s=document.createElement("option");s.value=n.id,s.textContent=n.label,e.appendChild(s)}if(C.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}Mt("go").onclick=()=>sv(),Mt("pickstart").onclick=()=>{wd(),Td("start")}}function wd(){if(C.renderer)return;let i=Mt("game"),t=Ns[Mt("quality").value]||Ns.mid;C.settings={...t};let e=new Ao({canvas:i,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=Oc,e.toneMapping=dr,e.toneMappingExposure=1.2,C.renderer=e;let n=new Co;C.scene=n,C.camera=new Fe(62,innerWidth/innerHeight,.5,5e3),C.sky=new ua(n,C.meta.proj.lat0),C.world=new ha(n,C.meta,C.terrain,C.roads,C.settings),C.traffic=new ga(C.world),C.world.traffic=C.traffic,n.add(C.traffic.group),C.peds=new Ta(C.world),C.peds.setTarget(t.peds),C.peds.onHit=(r,o,a)=>{a.player&&Mh("ped",o)},n.add(C.peds.group),t.bloom&&(C.composer=new Ia(e),C.composer.addPass(new Pa(n,C.camera)),C.bloom=new Ds(new It(innerWidth,innerHeight),0,.4,.82),C.composer.addPass(C.bloom),C.composer.addPass(new La));let s=null;i.addEventListener("mousedown",r=>{s=[r.clientX,r.clientY]}),addEventListener("mouseup",()=>{s=null}),addEventListener("mousemove",r=>{!s||C.mapOpen||C.paused||!C.started||(C.orbit.yaw-=(r.clientX-s[0])*.006,C.orbit.pitch=Math.max(-.25,Math.min(1.1,C.orbit.pitch+(r.clientY-s[1])*.004)),C.orbit.idle=0,s=[r.clientX,r.clientY])}),C.maps=new ya(C.world,C.meta),C.input=new ma,C.audio=new va,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),C.composer&&C.composer.setSize(innerWidth,innerHeight),C.camera.aspect=innerWidth/innerHeight,C.camera.updateProjectionMatrix(),C.mapOpen&&(C.maps.resizeBig(),C.mapDirty=!0)}),cv(),hv(),requestAnimationFrame(Rd)}function Fa(i){let t=C.roads,e=C.world,n=(s,r,o=!1)=>{let a=t.ways[s],[l,c,u]=t.pointAt(a,a.len*r),h=a.nodes[u],f=a.nodes[u+1],d=Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let g=Math.cos(d-Math.atan2(t.nx[f]-t.nx[h],t.nz[f]-t.nz[h]))>0,y=t.laneCenter(a,g?1:-1);return{x:l-Math.cos(d)*y,z:c+Math.sin(d)*y,h:d}};if(i==="picked"&&C.pickedStart){let s=t.nearest(C.pickedStart[0],C.pickedStart[1],300,r=>r.drivable&&r.cls<=Ht.SERVICE);if(s)return n(s.wi,(t.ways[s.wi].cum[s.k]+(t.ways[s.wi].cum[s.k+1]-t.ways[s.wi].cum[s.k])*s.t)/t.ways[s.wi].len)}if(i==="casa"){if(jy()==="picked")return Fa("picked");let s=-1;if(t.ways.forEach((r,o)=>{if(r.name!==Na.street||!r.drivable||r.cls>Ht.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===Na.comune&&(s<0||r.len>t.ways[s].len)&&(s=o)}),s>=0)return n(s,Na.frac);i="comune:Giussano"}if(i==="viamilano"){let s=Ky("Via Milano","Giussano");if(s)return n(s.wi,.35,!0);i="comune:Giussano"}if(i.startsWith("comune:")){let s=i.slice(7),r=C.meta.places.find(c=>c.n===s&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=C.maps.comuni.find(u=>u.n===s);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=Ht.RESIDENTIAL&&c.cls>=Ht.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function Sd(i=Sr[C.carIdx],t=null){C.carModel&&C.scene.remove(C.carModel.root),C.vehicle=new pa(i,C.world),C.carModel=rd(i,{interior:!0,color:t}),C.scene.add(C.carModel.root),C.lightsOn=!1}var yd={car:["compact","sedan","sport","sedan"],wagon:["city","suv","compact"],van:["van"],bus:["bus"]},Ed=()=>({halfL:C.vehicle.spec.L/2,halfW:C.vehicle.spec.W/2});function tv(){let i=C.vehicle,t=C.foot;if(Math.abs(i.u)>2.5){We("Fermati prima di scendere",1200);return}let e=Math.cos(i.h),n=-Math.sin(i.h);t.x=i.x+e*(i.spec.W/2+.75),t.z=i.z+n*(i.spec.W/2+.75),t.h=i.h,t.u=0,t.y=i.y,t.on=!0,(C.camMode===1||C.camMode===2)&&(C.camMode=0),C.orbit.yaw=0,C.camInit=!0,We("A piedi \u2014 F per salire su un veicolo",1800)}function ev(){let i=C.foot,t=C.vehicle,e=C.traffic,n=Math.hypot(t.x-i.x,t.z-i.z)-t.spec.W/2,s=e.nearestCar(i.x,i.z,2.6),r=e.nearestParked(i.x,i.z,2.6),o=s?Math.hypot(s.x-i.x,s.z-i.z)-s.box.halfW:1e9,a=r?Math.hypot(r.x-i.x,r.z-i.z)-r.box.halfW:1e9,l=Math.min(n,o,a);if(l>2.6){We("Nessun veicolo abbastanza vicino",1200);return}if(l!==n){let c=C.carModel;c.interior.visible=!1;for(let d of c.exterior)d.visible=!0;if(e.statics.push({x:t.x,z:t.z,h:t.h,box:Ed(),model:c}),C.carModel=null,e.statics.length>6){let d=e.statics.shift();C.scene.remove(d.model.root)}let u=l===o?e.take(s):e.takeParked(r),h=yd[u.type]||yd.car,f=Sr.find(d=>d.id===h[u.colour%h.length]);Sd(f,"#"+oh[u.colour%oh.length].toString(16).padStart(6,"0")),C.vehicle.place(u.x,u.z,u.h),We(f.name,1500)}i.on=!1,C.orbit.yaw=0,C.camInit=!0}function nv(i,t){let e=C.foot,n=C.input.keys,s=n.has("ShiftLeft")||n.has("ShiftRight");e.h+=t.steer*2.6*i;let o=((n.has("KeyW")||n.has("ArrowUp")||t.throttle>.3?1:0)-(n.has("KeyS")||n.has("ArrowDown")||t.brake>.3?.55:0))*(s?6.2:2.3);e.u+=(o-e.u)*Math.min(1,i*8),e.x+=Math.sin(e.h)*e.u*i,e.z+=Math.cos(e.h)*e.u*i;let a={x:C.vehicle.x,z:C.vehicle.z,h:C.vehicle.h,box:Ed()};for(let l=0;l<2;l++){let c=C.world.collision.resolveCircle(e.x,e.z,.32);c&&(e.x+=c.nx*c.depth,e.z+=c.nz*c.depth),C.traffic.statics.push(a);let u=C.traffic.resolveCircle(e.x,e.z,.32);C.traffic.statics.pop(),u&&(e.x+=u.nx*u.depth,e.z+=u.nz*u.depth)}e.surface=C.roads.surfaceAt(e.x,e.z,e.y+.7),e.y=e.surface.h,e.gait=Math.abs(e.u)/2.3}function Mh(i,t,e=i){let n=performance.now();if(C.cool[e]&&n-C.cool[e]<(i==="camera"?2e4:5e3))return;C.cool[e]=n;let s=0,r=0,o="";if(i==="ped")s=870,r=8,o="Hai urtato un pedone!";else if(i==="red")s=167,r=6,o="Passaggio con il rosso";else if(i==="camera"){let a=t;a<=10?(s=42,r=0):a<=40?(s=173,r=3):a<=60?(s=543,r=6):(s=845,r=10),o=`Autovelox: +${Math.round(a)} km/h oltre il limite`;let l=Mt("flash");l.classList.remove("go"),l.offsetWidth,l.classList.add("go")}C.fines+=s,C.licence-=r,We(`\u{1F6A8} ${o} \u2014 multa \u20AC ${s}${r?`, \u2212${r} punti`:""}`,3200),C.licence<=0&&(C.licence=20,setTimeout(()=>We("\u{1FAAA} Patente sospesa! Corso di recupero: riparti da 20 punti",4e3),3300)),Mt("licence").textContent=`\u{1FAAA} ${C.licence} punti \xB7 multe \u20AC ${C.fines.toLocaleString("it")}`}function iv(i,t,e){if(C.foot.on||!i.surface||!i.surface.road)return;let n=C.roads,s=i.surface.road,r=n.ways[s.wi];if(i.u>3)for(let o of[r.nodes[s.k],r.nodes[s.k+1]]){if(n.ntag[o]!==Jt.SIGNALS||Math.hypot(n.nx[o]-i.x,n.nz[o]-i.z)>4.5)continue;let a=Math.sin(i.h),l=Math.cos(i.h);vr(Math.abs(a)>Math.abs(l)?1:0,e/1e3)==="R"&&Mh("red",0,"red"+o)}if(t>r.limit+5)for(let o of C.world.cameras)Math.hypot(o.x-i.x,o.z-i.z)<16&&Mh("camera",t-r.limit,"cam"+Math.round(o.x)+"_"+Math.round(o.z))}function sv(){C.audio&&C.audio.start(),wd(),C.settings.viewTiles=(Ns[Mt("quality").value]||Ns.mid).viewTiles,C.traffic.target=+Mt("traffic").value,Mt("ptraffic").value=Mt("traffic").value,C.sky.hours=+Mt("tod").value,Sd();let i=Fa(Mt("start").value);C.vehicle.place(i.x,i.z,i.h),C.traffic.clear();for(let t of C.traffic.statics)C.scene.remove(t.model.root);C.traffic.statics=[],C.foot.on=!1,C.orbit.yaw=0,C.orbit.pitch=0,C.peds.setTarget((Ns[Mt("quality").value]||Ns.mid).peds),C.camInit=!0,Mt("menu").classList.add("hidden"),Mt("hud").classList.remove("hidden"),C.started=!0,C.paused=!1,C.loadingWorld=!0,We("Caricamento della zona\u2026",1500),C.audio.start()}function rv(){let i=C.vehicle,t=C.roads,e=t.nearest(i.x,i.z,300,a=>a.drivable&&a.cls<=Ht.SERVICE);if(!e)return;let n=t.ways[e.wi],s=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[s],t.nz[r]-t.nz[s]);!n.oneway&&Math.cos(o-i.h)<0&&(o+=Math.PI),i.place(e.px,e.pz,o),We("Rimesso in strada",1200)}var Ua=0;function We(i,t=2500){let e=Mt("toast");e.textContent=i,e.classList.add("show"),Ua=performance.now()+t}function Cr(i){if(!(!C.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(i);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var ov={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function za(i){return i>=1e3?(i/1e3).toFixed(i>=1e4?0:1).replace(".",",")+" km":Math.round(i/10)*10+" m"}function av(i){let t=Ir();if(!C.route){Mt("nav").classList.add("hidden");return}let e=C.route,n=ld(e,t.x,t.z);if(n.off>40){if(C.offT=(C.offT||0)+i,C.offT>2.5){C.offT=0,Sh(!0);return}}else C.offT=0;let s=e.length-n.s;if(s<25){We("\u{1F3C1} Sei arrivato a destinazione!",4e3),Cr("Sei arrivato a destinazione"),C.route=null,C.dest=null,Mt("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);Mt("nav").classList.remove("hidden"),Mt("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":ov[r.type]||"\u2B06",Mt("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",Mt("navd").textContent=za(o),Mt("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));Mt("naveta").textContent=`Destinazione: ${za(s)} \xB7 circa ${Math.max(1,Math.round(s/a/60))} min`,C.lastStep!==r&&(C.lastStep=r,C.announced=0),C.announced===0&&o<400&&o>120&&(C.announced=1,Cr(`Tra ${za(o).replace(","," virgola ")}, ${r.text}`)),C.announced<=1&&o<70&&(C.announced=2,Cr(r.text))}function Sh(i){if(!C.dest)return;let t=Ir(),e=C.router.route(t.x,t.z,t.h,C.dest[0],C.dest[1]);if(C.route=e,!e){We("Nessun percorso trovato verso la destinazione");return}C.lastStep=null,i?Cr("Ricalcolo del percorso"):(We(`Percorso calcolato: ${za(e.length)}`),Cr("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var xh=0,yh=0,vh=performance.now();function lv(i){let t=Ir(),e=C.roads,n=C.vehicle;xh+=i,yh++;let s=performance.now();if(s-vh>1e3&&(Mt("fps").textContent=Math.round(yh*1e3/(s-vh))+" fps",yh=0,vh=s),Ua&&performance.now()>Ua&&(Mt("toast").classList.remove("show"),Ua=0),xh<.1)return;xh=0;let r=Math.abs(t.u*3.6);Mt("spd").textContent=Math.round(r),Mt("gear").textContent=C.foot.on?"A PIEDI":n.gear<0?"R":Math.abs(n.u)<.3&&n.throttle<.05?"D":"D"+n.gear,Mt("gear").style.fontSize=C.foot.on?"14px":"",Mt("rpmbar").style.width=(C.foot.on?0:Math.min(100,n.rpm/n.spec.rpmMax*100))+"%";let o=t.surface&&t.surface.road,a=o?o.wi:-1;if(a<0){let y=e.nearest(t.x,t.z,25,p=>p.drivable);y&&(a=y.wi)}let l=C.world.comuneAt(t.x,t.z);if(a>=0){let y=e.ways[a];Mt("roadname").textContent=e.displayName(y),Mt("limitv").textContent=y.limit,Mt("limit").classList.toggle("hidden",C.foot.on),Mt("limitest").textContent=y.limitMapped?"":"indicativo",Mt("limit").classList.toggle("over",r>y.limit*1.1+3),C.curLimit=y.limit}else Mt("roadname").textContent="Fuori strada",Mt("limit").classList.add("hidden"),C.curLimit=0;let c="",u=1e9;for(let y of C.meta.places){if(y.t==="town"||y.t==="city"||y.t==="locality")continue;let p=Math.hypot(y.x-t.x,y.z-t.z);p<u&&p<700&&(u=p,c=y.n)}Mt("roadcomune").textContent=(l||"Fuori dai confini mappati")+(c&&c!==l?" \xB7 "+c:"");let[h,f]=C.proj.toLatLon(t.x,t.z),d=(-t.h*180/Math.PI%360+360+180)%360,g=["N","NE","E","SE","S","SO","O","NO"];Mt("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${f.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(d)}\xB0 ${g[Math.round(d/45)%8]}`,Mt("alt").textContent="",Mt("clock").textContent="\u{1F552} "+C.sky.clock(),Mt("tspeed").textContent=C.sky.speed===0?"\u23F8":C.sky.speed===1?"1\xD7":C.sky.speed+"\xD7",!C.foot.on&&C.carModel.dashCanvas&&C.camMode===1&&od(C.carModel.dashCanvas,C.carModel.dashTex,r,n.rpm,n.spec.rpmMax,Mt("gear").textContent,C.curLimit)}function Td(i){C.mapOpen=!0,C.mapMode=i||"dest",Mt("mapview").classList.remove("hidden"),C.maps.resizeBig();let t=C.vehicle;if(C.started&&t)C.maps.cx=t.x,C.maps.cz=t.z,C.maps.zoom=.35;else{let e=Fa("casa");C.maps.cx=e.x,C.maps.cz=e.z,C.maps.zoom=.12}Mt("setdest").classList.toggle("hidden",!C.started),Mt("teleport").textContent=C.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",Mt("mapinfo").textContent=C.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",C.mapDirty=!0,Mt("search").value="",Mt("results").innerHTML=""}function Rr(){C.mapOpen=!1,Mt("mapview").classList.add("hidden"),C.started||wh()}function vd(i,t,e){C.mapSel=[i,t];let n=C.world.comuneAt(i,t),s=C.roads.nearest(i,t,150,o=>o.drivable),r=e||(s?C.roads.displayName(C.roads.ways[s.wi]):"Punto selezionato");C.mapSelLabel=r+(n?", "+n:""),Mt("mapinfo").innerHTML=`<b>${C.mapSelLabel}</b><br>${C.proj.toLatLon(i,t).map(o=>o.toFixed(5)).join(", ")}`,C.mapDirty=!0,C.started&&C.mapMode==="dest"&&Ad()}function Ad(){C.mapSel&&(C.dest=C.mapSel.slice(),Sh(!1),C.mapDirty=!0)}function cv(){let i=Mt("bigmap"),t=null,e=!1;i.addEventListener("mousedown",s=>{t=[s.clientX,s.clientY,C.maps.cx,C.maps.cz],e=!1}),addEventListener("mousemove",s=>{if(!t||!C.mapOpen)return;let r=s.clientX-t[0],o=s.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),C.maps.cx=t[2]-r/C.maps.zoom,C.maps.cz=t[3]-o/C.maps.zoom,C.mapDirty=!0}),addEventListener("mouseup",s=>{if(t&&!e&&C.mapOpen&&s.target===i){let[r,o]=C.maps.toWorld(s.clientX,s.clientY);vd(r,o)}t=null}),i.addEventListener("wheel",s=>{s.preventDefault();let[r,o]=C.maps.toWorld(s.clientX,s.clientY),a=Math.exp(-s.deltaY*.0015);C.maps.zoom=Math.max(.03,Math.min(6,C.maps.zoom*a));let[l,c]=C.maps.toWorld(s.clientX,s.clientY);C.maps.cx+=r-l,C.maps.cz+=o-c,C.mapDirty=!0},{passive:!1}),Mt("closemap").onclick=Rr,Mt("setdest").onclick=()=>{Ad(),Rr()},Mt("cleardest").onclick=()=>{C.route=null,C.dest=null,C.mapDirty=!0},Mt("teleport").onclick=()=>{if(!C.mapSel)return;if(!C.started){C.pickedStart=C.mapSel.slice(),Rr(),Mt("pickinfo").textContent="Partenza: "+C.mapSelLabel;return}C.pickedStart=C.mapSel.slice();let s=Fa("picked");C.vehicle.place(s.x,s.z,s.h),C.foot.on=!1,C.traffic.clear(),C.camInit=!0,C.loadingWorld=!0,Rr(),C.dest&&Sh(!0)};let n=Mt("search");n.addEventListener("input",()=>{let s=n.value.trim().toLowerCase(),r=[];if(s.length>=2){for(let a of C.maps.comuni)a.n.toLowerCase().includes(s)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of C.meta.places)a.n.toLowerCase().includes(s)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of C.meta.landmarks)a[3].toLowerCase().includes(s)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(C.world.comuneAt(a[1],a[2])?" \xB7 "+C.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of C.roads.streets){if(!a.toLowerCase().includes(s))continue;let c=new Map;for(let u of l){let h=C.world.comuneAt(u.x,u.z)||"\u2014";(!c.has(h)||c.get(h).len<u.len)&&c.set(h,u)}for(let[u,h]of c)r.push({n:a,sub:"Via \xB7 "+u,x:h.x,z:h.z});if(++o>40)break}}Mt("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{C.maps.cx=o.x,C.maps.cz=o.z,C.maps.zoom=Math.max(C.maps.zoom,.8),vd(o.x,o.z,o.n)},Mt("results").appendChild(a)}})}function hv(){Mt("resume").onclick=()=>bh(!1),Mt("tomenu").onclick=()=>{bh(!1),C.started=!1,Mt("hud").classList.add("hidden"),wh()},Mt("ptraffic").onchange=n=>{C.traffic.target=+n.target.value,C.traffic.target||C.traffic.clear()},Mt("ptime").onchange=n=>{C.sky.speed=+n.target.value},Mt("pvoice").onchange=n=>{C.voice=n.target.value==="1"},Mt("paudio").onchange=n=>{C.audio.muted=n.target.value==="0"};let i=C.input.wheelCfg,t=(n,s)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=s};t(Mt("axsteer"),i.steerAxis),t(Mt("axthr"),i.throttleAxis),t(Mt("axbrk"),i.brakeAxis),Mt("wheelon").checked=i.enabled,Mt("axinv").checked=i.invertPedals;let e=()=>{i.enabled=Mt("wheelon").checked,i.steerAxis=+Mt("axsteer").value,i.throttleAxis=+Mt("axthr").value,i.brakeAxis=+Mt("axbrk").value,i.invertPedals=Mt("axinv").checked,C.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])Mt(n).onchange=e}function bh(i){C.paused=i,Mt("pause").classList.toggle("hidden",!i),i&&(Mt("ptime").value=String(C.sky.speed))}var Da=new k,_d=new k,uv=new k,fv=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function dv(i,t){let e=C.vehicle,n=C.camera,s=C.carModel,r=C.foot,o=C.orbit,a=r.on?0:C.camMode;if(C.debugCam){n.position.set(...C.debugCam.pos),n.lookAt(...C.debugCam.look),n.near=1,n.updateProjectionMatrix(),s.interior.visible=!1;for(let l of s.exterior)l.visible=!0;return}s.interior.visible=a===1;for(let l of s.exterior)l.visible=a!==1;if(document.body.classList.toggle("cockpit",a===1),o.idle+=i,o.idle>2.2&&(r.on?Math.abs(r.u)>.5:Math.abs(e.u)>2)&&(o.yaw*=Math.exp(-i*2.5),o.pitch*=Math.exp(-i*2.5)),a===0||a===3){let l=r.on?r:e,c=r.on?5.6:(a===0?4.2:8)+e.spec.L*.75,u=r.on?2.5:a===0?2.1+e.spec.H*.4:4.2,h=r.on?1.3:1.2,f=l.h+o.yaw+(t?Math.PI:0),d=Math.cos(o.pitch),g=Math.sin(o.pitch),y=uv.set(l.x-Math.sin(f)*c*d,l.y+u+c*g,l.z-Math.cos(f)*c*d),p=C.roads.surfaceAt(y.x,y.z,l.y+3).h;y.y=Math.max(y.y,p+.8),C.camInit&&(Da.copy(y),C.camInit=!1),Da.lerp(y,1-Math.exp(-i*(t||o.idle<.3?30:r.on?9:7))),n.position.copy(Da);let m=r.on?.5:4;_d.set(l.x+Math.sin(f)*m,l.y+h,l.z+Math.cos(f)*m),n.lookAt(_d),n.near=.5}else{let l=a===1?s.root.userData.eye.clone():new k(0,e.spec.H*.82+.05,e.spec.L*.18);s.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(s.root.matrixWorld));let c=(t?Math.PI:0)+o.yaw,u=30,h=new k(Math.sin(c)*u,(a===1?-3.2:-.9)-o.pitch*u*.5,Math.cos(c)*u).add(a===1?s.root.userData.eye:new k(0,e.spec.H*.82,0)).applyMatrix4(s.root.matrixWorld);n.lookAt(h),n.near=.08,Da.copy(n.position)}n.updateProjectionMatrix()}var Md=performance.now(),_h=0;function Rd(i){requestAnimationFrame(Rd);let t=Math.min(.05,(i-Md)/1e3);if(Md=i,!C.renderer)return;if(C.mapOpen){C.input.read(t),(C.input.consume("KeyM")||C.input.consume("Escape"))&&Rr(),C.mapDirty&&(C.maps.drawBig(C.started?Ir():null,C.route,C.dest||(C.mapMode==="start"?null:C.mapSel)),C.mapDirty=!1),C.mapSel&&C.mapMode==="start"&&C.started;return}if(!C.started)return;let e=C.input;if(e.consume("Escape")&&bh(!C.paused),C.paused){let m=e.axesSnapshot();Mt("axes").textContent=m?`${m.id}: `+m.axes.map((_,x)=>`${x}:${_.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let n=e.read(t);if((e.consume("KeyC")||n.buttons.has(3))&&(C.camMode=(C.camMode+1)%4,We(fv[C.camMode],1e3)),e.consume("KeyM")||n.buttons.has(8)){Td("dest");return}if(e.consume("KeyN")&&Mt("mini-wrap").classList.toggle("hidden"),(e.consume("KeyH")||n.buttons.has(2))&&(C.lightsOn=!C.lightsOn,We(C.lightsOn?"Fari accesi":"Fari spenti",900)),e.consume("KeyR")&&!C.foot.on&&rv(),e.consume("KeyK")&&(C.world.labelsOn=!C.world.labelsOn,We(C.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),e.consume("KeyT")){let m=[30,300,0,1];C.sky.speed=m[(m.indexOf(C.sky.speed)+1)%m.length],We("Velocit\xE0 del tempo: "+(C.sky.speed?C.sky.speed+"\xD7":"ferma"),1e3)}(e.consume("Equal")||e.consume("NumpadAdd"))&&(C.sky.hours=(C.sky.hours+1)%24),(e.consume("Minus")||e.consume("NumpadSubtract"))&&(C.sky.hours=(C.sky.hours+23)%24),(e.consume("KeyF")||e.consume("Enter")||n.buttons.has(1))&&(C.foot.on?ev():tv());let s=!C.foot.on&&(e.keys.has("KeyE")||!!n.hornPad);C.audio.horn(s);let r=C.vehicle,o=C.foot,a=Ir();if(C.world.update(a.x,a.z),C.world.pump(C.loadingWorld?40:7),C.loadingWorld)if(C.world.ready(r.x,r.z)){C.loadingWorld=!1;let m=C.roads.surfaceAt(r.x,r.z,1e9);r.y=m.h}else n.throttle=0,n.brake=1;C.loadingWorld||(o.on?(r.update(t,{throttle:0,brake:1,steer:0,handbrake:1}),nv(t,n)):r.update(t,n));let l=Math.sin(r.h),c=Math.cos(r.h),u=Math.cos(r.h),h=-Math.sin(r.h),f=[{x:r.x,z:r.z,h:r.h,vx:l*r.u+u*r.v,vz:c*r.u+h*r.v,halfL:r.spec.L/2,halfW:r.spec.W/2,player:!0}];for(let m of C.traffic.cars)Math.abs(m.x-a.x)<90&&Math.abs(m.z-a.z)<90&&f.push({x:m.x,z:m.z,h:m.h,vx:Math.sin(m.h)*m.speed,vz:Math.cos(m.h)*m.speed,halfL:m.box.halfL,halfW:m.box.halfW});let d=C.loadingWorld?[]:C.peds.update(t,a.x,a.z,f,s);o.on&&d.push([o.x,o.z]),C.traffic.obstacles=d,C.traffic.update(t,{x:r.x,z:r.z,h:r.h,u:r.u,wi:r.surface&&r.surface.road?r.surface.road.wi:-1},i/1e3);let g=[{x:r.x,z:r.z}];for(let m of C.traffic.cars)Math.abs(m.x-a.x)<300&&Math.abs(m.z-a.z)<300&&g.push(m);C.world.gates.update(t,g),C.peds.drawPlayer(o.on,o.x,o.y,o.z,o.h,o.gait,o.u,t);let y=C.carModel;y.root.position.set(r.x,r.y,r.z),y.root.rotation.set(-(r.pitch+r.dynPitch),r.h,r.roll+r.dynRoll,"YXZ");for(let m of y.wheels)m.pivot.rotation.x=r.wheelSpinAngle||0,m.front&&(m.pivot.rotation.y=r.steer);y.steeringWheel&&(y.steeringWheel.rotation.z=-r.steer*7);let p=!o.on&&(C.lightsOn||C.sky.night>.55);y.headlight&&(y.headlight.intensity=p?70:0),y.tailGlow&&(y.tailGlow.intensity=r.brake>.05&&!o.on?2.2:p?.6:0),bd.set(a.x,a.y,a.z),C.sky.update(t,bd),C.world.buildings.setNight(C.sky.night),C.world.signage.update(i/1e3,C.sky.night),C.traffic.setNight(C.sky.night),dv(t,e.keys.has("KeyV")),C.world.updateLabels(C.camera),lv(t),av(t),iv(r,Math.abs(r.u)*3.6,i),_h+=t,_h>.05&&!Mt("mini-wrap").classList.contains("hidden")&&(_h=0,C.maps.drawMini(a,C.route,C.sky.night>.5)),o.on?C.audio.update(800,0,0,0):C.audio.update(r.rpm,r.throttle,Math.abs(r.u)*3.6,r.slip),r.impact>.25&&!o.on&&We("\u{1F4A5} Urto!",700),r.impact=0,C.composer&&C.sky.night>.2?(C.bloom.strength=C.sky.night*.55,C.composer.render()):C.renderer.render(C.scene,C.camera)}var bd=new k;Jy().catch(i=>{console.error(i),Mt("loadmsg").textContent="Errore: "+i.message+" \u2014 apri il gioco con un browser recente (Chrome, Edge, Firefox)."});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
