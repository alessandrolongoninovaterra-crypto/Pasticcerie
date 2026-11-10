(()=>{var Yl="170";var Bu=0,Rc=1,ku=2;var Gh=1,Zl=2,An=3,$n=0,Oe=1,_e=2,Yn=0,zi=1,Vi=2,Cc=3,Ic=4,Hu=5,ai=100,Vu=101,Gu=102,Wu=103,Xu=104,qu=200,Yu=201,Zu=202,$u=203,va=204,Ma=205,Ju=206,Ku=207,ju=208,Qu=209,tf=210,ef=211,nf=212,sf=213,rf=214,ba=0,Sa=1,wa=2,Gi=3,Ea=4,Ta=5,Aa=6,Ra=7,ho=0,of=1,af=2,Zn=0,lf=1,cf=2,hf=3,uf=4,ff=5,df=6,pf=7;var Wh=300,Wi=301,Xi=302,Ca=303,Ia=304,uo=306,Jn=1e3,Cn=1001,Pa=1002,qe=1003,mf=1004;var Xs=1005;var pn=1006,ko=1007;var ci=1008;var Ln=1009,Xh=1010,qh=1011,Ms=1012,$l=1013,hi=1014,mn=1015,Ns=1016,Jl=1017,Kl=1018,qi=1020,Yh=35902,Zh=1021,$h=1022,an=1023,Jh=1024,Kh=1025,Bi=1026,Yi=1027,jl=1028,Ql=1029,jh=1030,tc=1031;var ec=1033,wr=33776,Er=33777,Tr=33778,Ar=33779,La=35840,Da=35841,Ua=35842,Na=35843,Oa=36196,Fa=37492,za=37496,Ba=37808,ka=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Za=37817,$a=37818,Ja=37819,Ka=37820,ja=37821,Rr=36492,Qa=36494,tl=36495,Qh=36283,el=36284,nl=36285,il=36286;var Cr=2300,sl=2301,Ho=2302,Pc=2400,Lc=2401,Dc=2402;var gf=3200,xf=3201;var nc=0,_f=1,Xn="",me="srgb",Qi="srgb-linear",fo="linear",ce="srgb";var xi=7680;var Uc=519,yf=512,vf=513,Mf=514,tu=515,bf=516,Sf=517,wf=518,Ef=519,rl=35044;var Nc="300 es",In=2e3,Ir=2001,Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=1234567,gs=Math.PI/180,Zi=180/Math.PI;function gn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function ic(s,t){return(s%t+t)%t}function Tf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Af(s,t,e){return s!==t?(e-s)/(t-s):0}function xs(s,t,e){return(1-e)*s+e*t}function Rf(s,t,e,n){return xs(s,t,1-Math.exp(-e*n))}function Cf(s,t=1){return t-Math.abs(ic(s,t*2)-t)}function If(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Lf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Df(s,t){return s+Math.random()*(t-s)}function Uf(s){return s*(.5-Math.random())}function Nf(s){s!==void 0&&(Oc=s);let t=Oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Of(s){return s*gs}function Ff(s){return s*Zi}function zf(s){return(s&s-1)===0&&s!==0}function Bf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hf(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var eu={DEG2RAD:gs,RAD2DEG:Zi,generateUUID:gn,clamp:Pe,euclideanModulo:ic,mapLinear:Tf,inverseLerp:Af,lerp:xs,damp:Rf,pingpong:Cf,smoothstep:If,smootherstep:Pf,randInt:Lf,randFloat:Df,randFloatSpread:Uf,seededRandom:Nf,degToRad:Of,radToDeg:Ff,isPowerOfTwo:zf,ceilPowerOfTwo:Bf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:Hf,normalize:le,denormalize:on},bt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],x=i[4],y=i[7],T=i[2],S=i[5],E=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*x+l*S,r[6]=o*m+a*y+l*E,r[1]=c*_+h*v+u*T,r[4]=c*p+h*x+u*S,r[7]=c*m+h*y+u*E,r[2]=f*_+d*v+g*T,r[5]=f*p+d*x+g*S,r[8]=f*m+d*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new Jt;function nu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vf(){let s=Pr("canvas");return s.style.display="block",s}var Fc={};function ps(s){s in Fc||(Fc[s]=!0,console.warn(s))}function Gf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],kc=[.3127,.329],Hc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Qi]:{primaries:zc,whitePoint:kc,transfer:fo,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:zc,whitePoint:kc,transfer:ce,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});var _i,ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Pr("canvas")),_i.width=t.width,_i.height=t.height;let n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qf=0,Lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Go(i[o].image)):r.push(Go(i[o]))}else r=Go(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yf=0,He=class s extends Kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Cn,i=Cn,r=pn,o=ci,a=an,l=Ln,c=s.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=gn(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Wh;He.DEFAULT_ANISOTROPY=1;var Me=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(d+1)/2,T=(m+1)/2,S=(h+f)/4,E=(u+_)/4,A=(g+p)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=E/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=A/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=E/r,i=A/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Dr=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let T=Math.sqrt(x),S=Math.atan2(T,m*v);p=Math.sin(p*S)/T,a=Math.sin(a*S)/T}let y=a*v;if(l=l*p+f*y,c=c*p+d*y,h=h*p+g*y,u=u*p+_*y,p===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new H,Gc=new Ve,Un=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Ys.subVectors(this.max,ss),yi.subVectors(t.a,ss),vi.subVectors(t.b,ss),Mi.subVectors(t.c,ss),Bn.subVectors(vi,yi),kn.subVectors(Mi,vi),ti.subVectors(yi,Mi);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ti.z,ti.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ti.z,0,-ti.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ti.y,ti.x,0];return!Xo(e,yi,vi,Mi,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,yi,vi,Mi,Ys))?!1:(Zs.crossVectors(Bn,kn),e=[Zs.x,Zs.y,Zs.z],Xo(e,yi,vi,Mi,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new H,new H,new H,new H,new H,new H,new H,new H],nn=new H,qs=new Un,yi=new H,vi=new H,Mi=new H,Bn=new H,kn=new H,ti=new H,ss=new H,Ys=new H,Zs=new H,ei=new H;function Xo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);let a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zf=new Un,rs=new H,qo=new H,Nn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(qo)),this.expandByPoint(rs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new H,Yo=new H,$s=new H,Hn=new H,Zo=new H,Js=new H,$o=new H,bs=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yo.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Yo);let r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=Hn.dot(this.direction),l=-Hn.dot($s),c=Hn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yo).addScaledVector($s,f),d}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){Zo.subVectors(e,t),Js.subVectors(n,t),$o.crossVectors(Zo,Js);let o=this.direction.dot($o),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);let l=a*this.direction.dot(Js.crossVectors(Hn,Js));if(l<0)return null;let c=a*this.direction.dot(Zo.cross(Hn));if(c<0||l+c>o)return null;let h=-a*Hn.dot($o);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),o=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Jf)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Vn.crossVectors(n,We),Vn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Vn.crossVectors(n,We)),Vn.normalize(),Ks.crossVectors(We,Vn),i[0]=Vn.x,i[4]=Ks.x,i[8]=We.x,i[1]=Vn.y,i[5]=Ks.y,i[9]=We.y,i[2]=Vn.z,i[6]=Ks.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],y=n[11],T=n[15],S=i[0],E=i[4],A=i[8],b=i[12],M=i[1],I=i[5],N=i[9],D=i[13],O=i[2],V=i[6],L=i[10],W=i[14],z=i[3],G=i[7],F=i[11],Z=i[15];return r[0]=o*S+a*M+l*O+c*z,r[4]=o*E+a*I+l*V+c*G,r[8]=o*A+a*N+l*L+c*F,r[12]=o*b+a*D+l*W+c*Z,r[1]=h*S+u*M+f*O+d*z,r[5]=h*E+u*I+f*V+d*G,r[9]=h*A+u*N+f*L+d*F,r[13]=h*b+u*D+f*W+d*Z,r[2]=g*S+_*M+p*O+m*z,r[6]=g*E+_*I+p*V+m*G,r[10]=g*A+_*N+p*L+m*F,r[14]=g*b+_*D+p*W+m*Z,r[3]=v*S+x*M+y*O+T*z,r[7]=v*E+x*I+y*V+T*G,r[11]=v*A+x*N+y*L+T*F,r[15]=v*b+x*D+y*W+T*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=u*p*c-_*f*c+_*l*d-a*p*d-u*l*m+a*f*m,x=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,y=h*_*c-g*u*c+g*a*d-o*_*d-h*a*m+o*u*m,T=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,S=e*v+n*x+i*y+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=v*E,t[1]=(_*f*r-u*p*r-_*i*d+n*p*d+u*i*m-n*f*m)*E,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=x*E,t[5]=(h*p*r-g*f*r+g*i*d-e*p*d-h*i*m+e*f*m)*E,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=y*E,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*m-e*u*m)*E,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=T*E,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,p=o*u,m=a*u,v=l*c,x=l*h,y=l*u,T=n.x,S=n.y,E=n.z;return i[0]=(1-(_+m))*T,i[1]=(d+y)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+x)*E,i[9]=(p-v)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=bi.set(i[0],i[1],i[2]).length(),o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);let c=1/r,h=1/o,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===In)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ir)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=In){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,g,_;if(a===In)g=(o+r)*u,_=-2*u;else if(a===Ir)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},bi=new H,sn=new ee,$f=new H(0,0,0),Jf=new H(1,1,1),Vn=new H,Ks=new H,We=new H,Wc=new ee,Xc=new Ve,ln=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,qc=new H,Si=new Ve,wn=new ee,js=new H,os=new H,jf=new H,Qf=new Ve,Yc=new H(1,0,0),Zc=new H(0,1,0),$c=new H(0,0,1),Jc={type:"added"},td={type:"removed"},wi={type:"childadded",child:null},Jo={type:"childremoved",child:null},Se=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new ln,n=new Ve,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(os,js,this.up):wn.lookAt(js,os,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(wn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Se.DEFAULT_UP=new H(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new H,En=new H,Ko=new H,Tn=new H,Ei=new H,Ti=new H,Kc=new H,jo=new H,Qo=new H,ta=new H,ea=new Me,na=new Me,ia=new Me,qn=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){rn.subVectors(i,e),En.subVectors(n,e),Ko.subVectors(t,e);let o=rn.dot(rn),a=rn.dot(En),l=rn.dot(Ko),c=En.dot(En),h=En.dot(Ko),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),En.subVectors(t,e),rn.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ei.subVectors(i,n),Ti.subVectors(r,n),jo.subVectors(t,n);let l=Ei.dot(jo),c=Ti.dot(jo);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,i);let h=Ei.dot(Qo),u=Ti.dot(Qo);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ei,o);ta.subVectors(t,r);let d=Ei.dot(ta),g=Ti.dot(ta);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ti,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Kc.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Kc,a);let m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Ei,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function sa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=ic(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return ie.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Pe(Ue.r*255,0,255))*65536+Math.round(Pe(Ue.g*255,0,255))*256+Math.round(Pe(Ue.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,i=Ue.g,r=Ue.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=me){ie.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,i=Ue.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Qs);let n=xs(Gn.h,Qs.h,e),i=xs(Gn.s,Qs.s,e),r=xs(Gn.l,Qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Ut;Ut.NAMES=iu;var ed=0,cn=class extends Kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=gn(),this.name="",this.blending=zi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=Ma,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fe=class extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new H,tr=new bt,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}};var $i=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ji=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},nd=0,$e=new ee,ra=new Se,Ai=new H,Xe=new Un,as=new Un,Re=new H,he=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?Ji:$i)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Xe.min,as.min),Xe.expandByPoint(Re),Re.addVectors(Xe.max,as.max),Xe.expandByPoint(Re)):(Xe.expandByPoint(as.min),Xe.expandByPoint(as.max))}Xe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(t,c),Re.add(Ai)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new H,l[A]=new H;let c=new H,h=new H,u=new H,f=new bt,d=new bt,g=new bt,_=new H,p=new H;function m(A,b,M){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[A].add(_),a[b].add(_),a[M].add(_),l[A].add(p),l[b].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,b=v.length;A<b;++A){let M=v[A],I=M.start,N=M.count;for(let D=I,O=I+N;D<O;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let x=new H,y=new H,T=new H,S=new H;function E(A){T.fromBufferAttribute(i,A),S.copy(T);let b=a[A];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(S,b);let I=y.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,I)}for(let A=0,b=v.length;A<b;++A){let M=v[A],I=M.start,N=M.count;for(let D=I,O=I+N;D<O;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jc=new ee,ni=new bs,er=new Nn,Qc=new H,nr=new H,ir=new H,sr=new H,oa=new H,rr=new H,th=new H,or=new H,qt=class extends Se{constructor(t=new he,e=new Fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(oa.fromBufferAttribute(u,t),o?rr.addScaledVector(oa,h):rr.addScaledVector(oa.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(er.containsPoint(ni.origin)===!1&&(ni.intersectSphere(er,Qc)===null||ni.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(jc.copy(r).invert(),ni.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,T=x;y<T;y+=3){let S=a.getX(y),E=a.getX(y+1),A=a.getX(y+2);i=ar(this,m,t,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=ar(this,o,t,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,T=x;y<T;y+=3){let S=y,E=y+1,A=y+2;i=ar(this,m,t,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let v=p,x=p+1,y=p+2;i=ar(this,o,t,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function id(s,t,e,n,i,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===$n,a),l===null)return null;or.copy(a),or.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:s}}function ar(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,nr),s.getVertexPosition(l,ir),s.getVertexPosition(c,sr);let h=id(s,t,e,n,nr,ir,sr,th);if(h){let u=new H;qn.getBarycoord(th,nr,ir,sr,u),i&&(h.uv=qn.getInterpolatedAttribute(i,a,l,c,u,new bt)),r&&(h.uv1=qn.getInterpolatedAttribute(r,a,l,c,u,new bt)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};qn.getNormal(nr,ir,sr,f.normal),h.face=f,h.barycoord=u}return h}var we=class s extends he{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,p,m,v,x,y,T,S,E,A,b){let M=y/E,I=T/A,N=y/2,D=T/2,O=S/2,V=E+1,L=A+1,W=0,z=0,G=new H;for(let F=0;F<L;F++){let Z=F*I-D;for(let X=0;X<V;X++){let k=X*M-N;G[_]=k*v,G[p]=Z*x,G[m]=O,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[m]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(X/E),u.push(1-F/A),W+=1}}for(let F=0;F<A;F++)for(let Z=0;Z<E;Z++){let X=f+Z+V*F,k=f+Z+V*(F+1),B=f+(Z+1)+V*(F+1),q=f+(Z+1)+V*F;l.push(X,k,q),l.push(k,B,q),z+=6}a.addGroup(d,z,b),d+=z,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let n=Ki(s[e]);for(let i in n)t[i]=n[i]}return t}function sd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function su(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var rd={clone:Ki,merge:Be},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Nr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=new H,eh=new bt,nh=new bt,Ne=class extends Nr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ri=-90,Ci=1,cl=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Ri,Ci,t,e);i.layers=this.layers,this.add(i);let r=new Ne(Ri,Ci,t,e);r.layers=this.layers,this.add(r);let o=new Ne(Ri,Ci,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Ri,Ci,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Ri,Ci,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Or=class extends He{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hl=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Or(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new we(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Yn});r.uniforms.tEquirect.value=e;let o=new qt(i,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=pn),new cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},aa=new H,ld=new H,cd=new Jt,Rn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=aa.subVectors(n,e).cross(ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cd.getNormalMatrix(t),i=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Nn,lr=new H,Ss=class{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,p-d,y-m).normalize(),n[1].setComponents(l+r,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+h,p+g,y+v).normalize(),n[3].setComponents(l-o,f-h,p-g,y-v).normalize(),n[4].setComponents(l-a,f-u,p-_,y-x).normalize(),e===In)n[5].setComponents(l+a,f+u,p+_,y+x).normalize();else if(e===Ir)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(lr.x=i.normal.x>0?t.max.x:t.min.x,lr.y=i.normal.y>0?t.max.y:t.min.y,lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ru(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function hd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ke=class s extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*f-o;for(let x=0;x<c;x++){let y=x*u-r;g.push(y,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let x=v+c*m,y=v+c*(m+1),T=v+1+c*(m+1),S=v+1+c*m;d.push(x,y,S),d.push(y,T,S)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Fm=`#define TOON
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
}`,zm=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:dd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:xd,aomap_pars_fragment:_d,batching_pars_vertex:yd,batching_vertex:vd,begin_vertex:Md,beginnormal_vertex:bd,bsdfs:Sd,iridescence_fragment:wd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Id,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Od,displacementmap_pars_vertex:Fd,displacementmap_vertex:zd,emissivemap_fragment:Bd,emissivemap_pars_fragment:kd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Gd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:ip,envmap_vertex:Yd,fog_vertex:Zd,fog_pars_vertex:$d,fog_fragment:Jd,fog_pars_fragment:Kd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:fp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:xp,map_pars_fragment:_p,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Sp,morphcolor_vertex:wp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Ip,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Fp,opaque_fragment:zp,packing:Bp,premultiplied_alpha_fragment:kp,project_vertex:Hp,dithering_fragment:Vp,dithering_pars_fragment:Gp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:$p,skinbase_vertex:Jp,skinning_pars_vertex:Kp,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:tm,specularmap_pars_fragment:em,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:fm,backgroundCube_frag:dm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:xm,distanceRGBA_vert:_m,distanceRGBA_frag:ym,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:bm,linedashed_frag:Sm,meshbasic_vert:wm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Im,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:zm,points_frag:Bm,shadow_vert:km,shadow_frag:Hm,sprite_vert:Vm,sprite_frag:Gm},Rt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},dn={basic:{uniforms:Be([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Be([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Be([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Be([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Be([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Be([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Be([Rt.points,Rt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Be([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Be([Rt.common,Rt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Be([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Be([Rt.sprite,Rt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Be([Rt.common,Rt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Be([Rt.lights,Rt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};dn.physical={uniforms:Be([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var cr={r:0,b:0,g:0},si=new ln,Wm=new ee;function Xm(s,t,e,n,i,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1,y=g(v);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===uo)?(h===void 0&&(h=new qt(new we(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Ki(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),si.copy(x.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(si)),h.material.toneMapped=ie.getTransfer(y.colorSpace)!==ce,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qt(new Ke(2,2),new Je({name:"BackgroundMaterial",uniforms:Ki(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,x){v.getRGB(cr,su(s)),n.buffers.color.setClear(cr.r,cr.g,cr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:_,addToRenderList:p}}function qm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(M,I,N,D,O){let V=!1,L=u(D,N,I);r!==L&&(r=L,c(r.object)),V=d(M,D,N,O),V&&g(M,D,N,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(M,I,N,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,N){let D=N.wireframe===!0,O=n[M.id];O===void 0&&(O={},n[M.id]=O);let V=O[I.id];V===void 0&&(V={},O[I.id]=V);let L=V[D];return L===void 0&&(L=f(l()),V[D]=L),L}function f(M){let I=[],N=[],D=[];for(let O=0;O<e;O++)I[O]=0,N[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,I,N,D){let O=r.attributes,V=I.attributes,L=0,W=N.getAttributes();for(let z in W)if(W[z].location>=0){let F=O[z],Z=V[z];if(Z===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),F===void 0||F.attribute!==Z||Z&&F.data!==Z.data)return!0;L++}return r.attributesNum!==L||r.index!==D}function g(M,I,N,D){let O={},V=I.attributes,L=0,W=N.getAttributes();for(let z in W)if(W[z].location>=0){let F=V[z];F===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));let Z={};Z.attribute=F,F&&F.data&&(Z.data=F.data),O[z]=Z,L++}r.attributes=O,r.attributesNum=L,r.index=D}function _(){let M=r.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function p(M){m(M,0)}function m(M,I){let N=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;N[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),O[M]!==I&&(s.vertexAttribDivisor(M,I),O[M]=I)}function v(){let M=r.newAttributes,I=r.enabledAttributes;for(let N=0,D=I.length;N<D;N++)I[N]!==M[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function x(M,I,N,D,O,V,L){L===!0?s.vertexAttribIPointer(M,I,N,O,V):s.vertexAttribPointer(M,I,N,D,O,V)}function y(M,I,N,D){_();let O=D.attributes,V=N.getAttributes(),L=I.defaultAttributeValues;for(let W in V){let z=V[W];if(z.location>=0){let G=O[W];if(G===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){let F=G.normalized,Z=G.itemSize,X=t.get(G);if(X===void 0)continue;let k=X.buffer,B=X.type,q=X.bytesPerElement,it=B===s.INT||B===s.UNSIGNED_INT||G.gpuType===$l;if(G.isInterleavedBufferAttribute){let Y=G.data,ft=Y.stride,gt=G.offset;if(Y.isInstancedInterleavedBuffer){for(let ut=0;ut<z.locationSize;ut++)m(z.location+ut,Y.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ut=0;ut<z.locationSize;ut++)p(z.location+ut);s.bindBuffer(s.ARRAY_BUFFER,k);for(let ut=0;ut<z.locationSize;ut++)x(z.location+ut,Z/z.locationSize,B,F,ft*q,(gt+Z/z.locationSize*ut)*q,it)}else{if(G.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)m(z.location+Y,G.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Y=0;Y<z.locationSize;Y++)p(z.location+Y);s.bindBuffer(s.ARRAY_BUFFER,k);for(let Y=0;Y<z.locationSize;Y++)x(z.location+Y,Z/z.locationSize,B,F,Z*q,Z/z.locationSize*Y*q,it)}}else if(L!==void 0){let F=L[W];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(z.location,F);break;case 3:s.vertexAttrib3fv(z.location,F);break;case 4:s.vertexAttrib4fv(z.location,F);break;default:s.vertexAttrib1fv(z.location,F)}}}}v()}function T(){A();for(let M in n){let I=n[M];for(let N in I){let D=I[N];for(let O in D)h(D[O].object),delete D[O];delete I[N]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let N in I){let D=I[N];for(let O in D)h(D[O].object),delete D[O];delete I[N]}delete n[M.id]}function E(M){for(let I in n){let N=n[I];if(N[M.id]===void 0)continue;let D=N[M.id];for(let O in D)h(D[O].object),delete D[O];delete N[M.id]}}function A(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Ym(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==an&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let A=E===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ln&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==mn&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:T,maxSamples:S}}function $m(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Rn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,x=v*4,y=m.clippingState||null;l.value=y,y=h(g,f,x,d);for(let T=0;T!==x;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Jm(s){let t=new WeakMap;function e(o,a){return a===Ca?o.mapping=Wi:a===Ia&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new hl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fr=class extends Nr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,ih=[.125,.215,.35,.446,.526,.582],li=20,la=new Fr,sh=new Ut,ca=null,ha=0,ua=0,fa=!1,oi=(1+Math.sqrt(5))/2,Ii=1/oi,rh=[new H(-oi,Ii,0),new H(oi,Ii,0),new H(-Ii,0,oi),new H(Ii,0,oi),new H(0,oi,-Ii),new H(0,oi,Ii),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=fa,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ns,format:an,colorSpace:Qi,depthBuffer:!1},i=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(r)),this._blurMaterial=jm(r,t,e)}return i}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,i){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sh),h.toneMapping=Zn,h.autoClear=!1;let d=new Fe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new qt(new we,d),_=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(sh),_=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;hr(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Wi||t.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rh[(i-r-1)%rh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new qt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*li-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);let m=[],v=0;for(let E=0;E<li;++E){let A=E/_,b=Math.exp(-A*A/2);m.push(b),E===0?v+=b:E<p&&(v+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let y=this._sizeLods[i],T=3*y*(i>x-Oi?i-x+Oi:0),S=4*(this._cubeSize-y);hr(e,T,S,3*y,2*y),l.setRenderTarget(e),l.render(u,la)}};function Km(s){let t=[],e=[],n=[],i=s,r=s-Oi+1+ih.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Oi?l=ih[o-s+Oi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*d),x=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let S=0;S<d;S++){let E=S%3*2/3-1,A=S>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(b,_*g*S),x.set(f,p*g*S);let M=[S,S,S,S,S,S];y.set(M,m*g*S)}let T=new he;T.setAttribute("position",new ge(v,_)),T.setAttribute("uv",new ge(x,p)),T.setAttribute("faceIndex",new ge(y,m)),t.push(T),i>Oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(s,t,e){let n=new Dn(s,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jm(s,t,e){let n=new Float32Array(li),i=new H(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ah(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function lh(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function Qm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ca||l===Ia,h=l===Wi||l===Xi;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new zr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function t0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function e0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){let T=v[x+0],S=v[x+1],E=v[x+2];f.push(T,S,S,E,E,T)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){let T=x+0,S=x+1,E=x+2;f.push(T,S,S,E,E,T)}}else return;let p=new(nu(f)?Ji:$i)(f,1);p.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function n0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=d[v]*_[v];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function s0(s,t,e){let n=new WeakMap,i=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*T*4*u),E=new Dr(S,y,T,u);E.type=mn,E.needsUpdate=!0;let A=x*4;for(let M=0;M<u;M++){let I=p[M],N=m[M],D=v[M],O=y*T*4*M;for(let V=0;V<I.count;V++){let L=V*A;d===!0&&(i.fromBufferAttribute(I,V),S[O+L+0]=i.x,S[O+L+1]=i.y,S[O+L+2]=i.z,S[O+L+3]=0),g===!0&&(i.fromBufferAttribute(N,V),S[O+L+4]=i.x,S[O+L+5]=i.y,S[O+L+6]=i.z,S[O+L+7]=0),_===!0&&(i.fromBufferAttribute(D,V),S[O+L+8]=i.x,S[O+L+9]=i.y,S[O+L+10]=i.z,S[O+L+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new bt(y,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function r0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Br=class extends He{constructor(t,e,n,i,r,o,a,l,c,h=Bi){if(h!==Bi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=hi),n===void 0&&h===Yi&&(n=qi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ou=new He,ch=new Br(1,1),au=new Dr,lu=new ll,cu=new Or,hh=[],uh=[],fh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function ts(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=hh[i];if(r===void 0&&(r=new Float32Array(i),hh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function po(s,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function o0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function a0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function h0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ph.set(n),s.uniformMatrix2fv(this.addr,!1,ph),Te(e,n)}}function u0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;dh.set(n),s.uniformMatrix3fv(this.addr,!1,dh),Te(e,n)}}function f0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;fh.set(n),s.uniformMatrix4fv(this.addr,!1,fh),Te(e,n)}}function d0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function x0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function M0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ch.compareFunction=tu,r=ch):r=ou,e.setTexture2D(t||r,i)}function b0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lu,i)}function S0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cu,i)}function w0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||au,i)}function E0(s){switch(s){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return _0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return w0}}function T0(s,t){s.uniform1fv(this.addr,t)}function A0(s,t){let e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function R0(s,t){let e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function C0(s,t){let e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function I0(s,t){let e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function P0(s,t){let e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function L0(s,t){let e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function D0(s,t){s.uniform1iv(this.addr,t)}function U0(s,t){s.uniform2iv(this.addr,t)}function N0(s,t){s.uniform3iv(this.addr,t)}function O0(s,t){s.uniform4iv(this.addr,t)}function F0(s,t){s.uniform1uiv(this.addr,t)}function z0(s,t){s.uniform2uiv(this.addr,t)}function B0(s,t){s.uniform3uiv(this.addr,t)}function k0(s,t){s.uniform4uiv(this.addr,t)}function H0(s,t,e){let n=this.cache,i=t.length,r=po(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ou,r[o])}function V0(s,t,e){let n=this.cache,i=t.length,r=po(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||lu,r[o])}function G0(s,t,e){let n=this.cache,i=t.length,r=po(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||cu,r[o])}function W0(s,t,e){let n=this.cache,i=t.length,r=po(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||au,r[o])}function X0(s){switch(s){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return I0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return z0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}var ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E0(e.type)}},fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}},dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},da=/(\w+)(\])?(\[|\.)?/g;function mh(s,t){s.seq.push(t),s.map[t.id]=t}function q0(s,t,e){let n=s.name,i=n.length;for(da.lastIndex=0;;){let r=da.exec(n),o=da.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){mh(e,c===void 0?new ul(a,s,t):new fl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new dl(a),mh(e,u)),e=u}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);q0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function gh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Y0=37297,Z0=0;function $0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var xh=new Jt;function J0(s){ie._getMatrix(xh,ie.workingColorSpace,s);let t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case fo:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _h(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+$0(s.getShaderSource(t),o)}else return i}function K0(s,t){let e=J0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(s,t){let e;switch(t){case lf:e="Linear";break;case cf:e="Reinhard";break;case hf:e="Cineon";break;case uf:e="ACESFilmic";break;case df:e="AgX";break;case pf:e="Neutral";break;case ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ur=new H;function Q0(){ie.getLuminanceCoefficients(ur);let s=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function eg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ng(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ms(s){return s!==""}function yh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(ig,rg)}var sg=new Map;function rg(s,t){let e=Kt[t];if(e===void 0){let n=sg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(s){return s.replace(og,ag)}function ag(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function lg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function ug(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ho:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function fg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=lg(e),c=cg(e),h=hg(e),u=ug(e),f=fg(e),d=tg(e),g=eg(r),_=i.createProgram(),p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`)):(p=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),m=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),o=pl(o),o=yh(o,e),o=vh(o,e),a=pl(a),a=yh(a,e),a=vh(a,e),o=Mh(o),a=Mh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=v+p+o,y=v+m+a,T=gh(i,i.VERTEX_SHADER,x),S=gh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,S),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(T).trim(),O=i.getShaderInfoLog(S).trim(),V=!0,L=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,S);else{let W=_h(i,T,"vertex"),z=_h(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+W+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||O==="")&&(L=!1);L&&(I.diagnostics={runnable:V,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(T),i.deleteShader(S),A=new Hi(i,_),b=ng(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Y0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=S,this}var pg=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gl(t),e.set(t,n)),n}},gl=class{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}};function mg(s,t,e,n,i,r,o){let a=new Ur,l=new ml,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,I,N,D){let O=N.fog,V=D.geometry,L=b.isMeshStandardMaterial?N.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||L),z=W&&W.mapping===uo?W.image.height:null,G=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=F!==void 0?F.length:0,X=0;V.morphAttributes.position!==void 0&&(X=1),V.morphAttributes.normal!==void 0&&(X=2),V.morphAttributes.color!==void 0&&(X=3);let k,B,q,it;if(G){let ae=dn[G];k=ae.vertexShader,B=ae.fragmentShader}else k=b.vertexShader,B=b.fragmentShader,l.update(b),q=l.getVertexShaderID(b),it=l.getFragmentShaderID(b);let Y=s.getRenderTarget(),ft=s.state.buffers.depth.getReversed(),gt=D.isInstancedMesh===!0,ut=D.isBatchedMesh===!0,xt=!!b.map,j=!!b.matcap,nt=!!W,P=!!b.aoMap,dt=!!b.lightMap,rt=!!b.bumpMap,at=!!b.normalMap,mt=!!b.displacementMap,ot=!!b.emissiveMap,lt=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,K=b.clearcoat>0,et=b.dispersion>0,st=b.iridescence>0,J=b.sheen>0,Mt=b.transmission>0,yt=w&&!!b.anisotropyMap,St=K&&!!b.clearcoatMap,Bt=K&&!!b.clearcoatNormalMap,vt=K&&!!b.clearcoatRoughnessMap,Ct=st&&!!b.iridescenceMap,Nt=st&&!!b.iridescenceThicknessMap,Dt=J&&!!b.sheenColorMap,Tt=J&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Ht=!!b.specularColorMap,ne=!!b.specularIntensityMap,$=Mt&&!!b.transmissionMap,At=Mt&&!!b.thicknessMap,pt=!!b.gradientMap,_t=!!b.alphaMap,Lt=b.alphaTest>0,It=!!b.alphaHash,Zt=!!b.extensions,ve=Zn;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ve=s.toneMapping);let Le={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:B,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ut,batchingColor:ut&&D._colorsTexture!==null,instancing:gt,instancingColor:gt&&D.instanceColor!==null,instancingMorph:gt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qi,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:j,envMap:nt,envMapMode:nt&&W.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:dt,bumpMap:rt,normalMap:at,displacementMap:f&&mt,emissiveMap:ot,normalMapObjectSpace:at&&b.normalMapType===_f,normalMapTangentSpace:at&&b.normalMapType===nc,metalnessMap:lt,roughnessMap:R,anisotropy:w,anisotropyMap:yt,clearcoat:K,clearcoatMap:St,clearcoatNormalMap:Bt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:st,iridescenceMap:Ct,iridescenceThicknessMap:Nt,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:Tt,specularMap:Wt,specularColorMap:Ht,specularIntensityMap:ne,transmission:Mt,transmissionMap:$,thicknessMap:At,gradientMap:pt,opaque:b.transparent===!1&&b.blending===zi&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:Lt,alphaHash:It,combine:b.combine,mapUv:xt&&_(b.map.channel),aoMapUv:P&&_(b.aoMap.channel),lightMapUv:dt&&_(b.lightMap.channel),bumpMapUv:rt&&_(b.bumpMap.channel),normalMapUv:at&&_(b.normalMap.channel),displacementMapUv:mt&&_(b.displacementMap.channel),emissiveMapUv:ot&&_(b.emissiveMap.channel),metalnessMapUv:lt&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:yt&&_(b.anisotropyMap.channel),clearcoatMapUv:St&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(b.sheenRoughnessMap.channel),specularMapUv:Wt&&_(b.specularMap.channel),specularColorMapUv:Ht&&_(b.specularColorMap.channel),specularIntensityMapUv:ne&&_(b.specularIntensityMap.channel),transmissionMapUv:$&&_(b.transmissionMap.channel),thicknessMapUv:At&&_(b.thicknessMap.channel),alphaMapUv:_t&&_(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(at||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(xt||_t),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ft,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:X,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:ot&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_e,flipSided:b.side===Oe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(M,b),x(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let M=g[b.type],I;if(M){let N=dn[M];I=rd.clone(N.uniforms)}else I=b.uniforms;return I}function T(b,M){let I;for(let N=0,D=h.length;N<D;N++){let O=h[N];if(O.cacheKey===M){I=O,++I.usedTimes;break}}return I===void 0&&(I=new dg(s,M,b,r),h.push(I)),I}function S(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:A}}function gg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function xg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,f,d,g,_,p){let m=o(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,g,_,p){let m=o(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||xg),n.length>1&&n.sort(f||Sh),i.length>1&&i.sort(f||Sh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function _g(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new wh,s.set(n,[o])):i>=r.length?(o=new wh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ut};break;case"SpotLight":e={position:new H,direction:new H,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function vg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Mg=0;function bg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sg(s){let t=new yg,e=vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new ee,o=new ee;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,v=0,x=0,y=0,T=0,S=0,E=0;c.sort(bg);for(let b=0,M=c.length;b<M;b++){let I=c[b],N=I.color,D=I.intensity,O=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*D,u+=N.g*D,f+=N.b*D;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],D);E++}else if(I.isDirectionalLight){let L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,z=e.get(I);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=L,d++}else if(I.isSpotLight){let L=t.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(N).multiplyScalar(D),L.distance=O,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[_]=L;let W=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,W.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[_]=W.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=V,y++}_++}else if(I.isRectAreaLight){let L=t.get(I);L.color.copy(N).multiplyScalar(D),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=L,p++}else if(I.isPointLight){let L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let W=I.shadow,z=e.get(I);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=L,g++}else if(I.isHemisphereLight){let L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(D),L.groundColor.copy(I.groundColor).multiplyScalar(D),n.hemi[m]=L,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==y||A.numSpotMaps!==T||A.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=y,A.numSpotMaps=T,A.numLightProbes=E,n.version=Mg++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(x.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Eh(s){let t=new Sg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Eh(s),t.set(i,[a])):r>=o.length?(a=new Eh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xl=class extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_l=class extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(s,t,e){let n=new Ss,i=new bt,r=new bt,o=new Me,a=new xl({depthPacking:xf}),l=new _l,c={},h=e.maxTextureSize,u={[$n]:Oe,[Oe]:$n,[_e]:_e},f=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let m=this.type;this.render=function(S,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Yn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=m!==An&&this.type===An,O=m===An&&this.type!==An;for(let V=0,L=S.length;V<L;V++){let W=S[V],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let G=z.getFrameExtents();if(i.multiply(G),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,z.mapSize.y=r.y)),z.map===null||D===!0||O===!0){let Z=this.type!==An?{minFilter:qe,magFilter:qe}:{};z.map!==null&&z.map.dispose(),z.map=new Dn(i.x,i.y,Z),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let F=z.getViewportCount();for(let Z=0;Z<F;Z++){let X=z.getViewport(Z);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),N.viewport(o),z.updateMatrices(W,Z),n=z.getFrustum(),y(E,A,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===An&&v(z,A),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(b,M,I)};function v(S,E){let A=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Dn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,A,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,A,d,_,null)}function x(S,E,A,b){let M=null,I=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)M=I;else if(M=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=M.uuid,D=E.uuid,O=c[N];O===void 0&&(O={},c[N]=O);let V=O[D];V===void 0&&(V=M.clone(),O[D]=V,E.addEventListener("dispose",T)),M=V}if(M.visible=E.visible,M.wireframe=E.wireframe,b===An?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=s.properties.get(M);N.light=A}return M}function y(S,E,A,b,M){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===An)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let D=t.update(S),O=S.material;if(Array.isArray(O)){let V=D.groups;for(let L=0,W=V.length;L<W;L++){let z=V[L],G=O[z.materialIndex];if(G&&G.visible){let F=x(S,G,b,M);S.onBeforeShadow(s,S,E,A,D,F,z),s.renderBufferDirect(A,null,D,F,S,z),S.onAfterShadow(s,S,E,A,D,F,z)}}}else if(O.visible){let V=x(S,O,b,M);S.onBeforeShadow(s,S,E,A,D,V,null),s.renderBufferDirect(A,null,D,V,S,null),S.onAfterShadow(s,S,E,A,D,V,null)}}let N=S.children;for(let D=0,O=N.length;D<O;D++)y(N[D],E,A,b,M)}function T(S){S.target.removeEventListener("dispose",T);for(let A in c){let b=c[A],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Rg={[ba]:Sa,[wa]:Aa,[Ea]:Ra,[Gi]:Ta,[Sa]:ba,[Aa]:wa,[Ra]:Ea,[Ta]:Gi};function Cg(s,t){function e(){let $=!1,At=new Me,pt=null,_t=new Me(0,0,0,0);return{setMask:function(Lt){pt!==Lt&&!$&&(s.colorMask(Lt,Lt,Lt,Lt),pt=Lt)},setLocked:function(Lt){$=Lt},setClear:function(Lt,It,Zt,ve,Le){Le===!0&&(Lt*=ve,It*=ve,Zt*=ve),At.set(Lt,It,Zt,ve),_t.equals(At)===!1&&(s.clearColor(Lt,It,Zt,ve),_t.copy(At))},reset:function(){$=!1,pt=null,_t.set(-1,0,0,0)}}}function n(){let $=!1,At=!1,pt=null,_t=null,Lt=null;return{setReversed:function(It){if(At!==It){let Zt=t.get("EXT_clip_control");At?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let ve=Lt;Lt=null,this.setClear(ve)}At=It},getReversed:function(){return At},setTest:function(It){It?Y(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(It){pt!==It&&!$&&(s.depthMask(It),pt=It)},setFunc:function(It){if(At&&(It=Rg[It]),_t!==It){switch(It){case ba:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case wa:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case Ea:s.depthFunc(s.EQUAL);break;case Ta:s.depthFunc(s.GEQUAL);break;case Aa:s.depthFunc(s.GREATER);break;case Ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=It}},setLocked:function(It){$=It},setClear:function(It){Lt!==It&&(At&&(It=1-It),s.clearDepth(It),Lt=It)},reset:function(){$=!1,pt=null,_t=null,Lt=null,At=!1}}}function i(){let $=!1,At=null,pt=null,_t=null,Lt=null,It=null,Zt=null,ve=null,Le=null;return{setTest:function(ae){$||(ae?Y(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(ae){At!==ae&&!$&&(s.stencilMask(ae),At=ae)},setFunc:function(ae,tn,vn){(pt!==ae||_t!==tn||Lt!==vn)&&(s.stencilFunc(ae,tn,vn),pt=ae,_t=tn,Lt=vn)},setOp:function(ae,tn,vn){(It!==ae||Zt!==tn||ve!==vn)&&(s.stencilOp(ae,tn,vn),It=ae,Zt=tn,ve=vn)},setLocked:function(ae){$=ae},setClear:function(ae){Le!==ae&&(s.clearStencil(ae),Le=ae)},reset:function(){$=!1,At=null,pt=null,_t=null,Lt=null,It=null,Zt=null,ve=null,Le=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,v=null,x=null,y=null,T=null,S=null,E=new Ut(0,0,0),A=0,b=!1,M=null,I=null,N=null,D=null,O=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,W=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),L=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),L=W>=2);let G=null,F={},Z=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),k=new Me().fromArray(Z),B=new Me().fromArray(X);function q($,At,pt,_t){let Lt=new Uint8Array(4),It=s.createTexture();s.bindTexture($,It),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<pt;Zt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(At+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return It}let it={};it[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),it[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),it[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(s.DEPTH_TEST),o.setFunc(Gi),rt(!1),at(Rc),Y(s.CULL_FACE),P(Yn);function Y($){h[$]!==!0&&(s.enable($),h[$]=!0)}function ft($){h[$]!==!1&&(s.disable($),h[$]=!1)}function gt($,At){return u[$]!==At?(s.bindFramebuffer($,At),u[$]=At,$===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=At),$===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=At),!0):!1}function ut($,At){let pt=d,_t=!1;if($){pt=f.get(At),pt===void 0&&(pt=[],f.set(At,pt));let Lt=$.textures;if(pt.length!==Lt.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let It=0,Zt=Lt.length;It<Zt;It++)pt[It]=s.COLOR_ATTACHMENT0+It;pt.length=Lt.length,_t=!0}}else pt[0]!==s.BACK&&(pt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(pt)}function xt($){return g!==$?(s.useProgram($),g=$,!0):!1}let j={[ai]:s.FUNC_ADD,[Vu]:s.FUNC_SUBTRACT,[Gu]:s.FUNC_REVERSE_SUBTRACT};j[Wu]=s.MIN,j[Xu]=s.MAX;let nt={[qu]:s.ZERO,[Yu]:s.ONE,[Zu]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[tf]:s.SRC_ALPHA_SATURATE,[ju]:s.DST_COLOR,[Ju]:s.DST_ALPHA,[$u]:s.ONE_MINUS_SRC_COLOR,[Ma]:s.ONE_MINUS_SRC_ALPHA,[Qu]:s.ONE_MINUS_DST_COLOR,[Ku]:s.ONE_MINUS_DST_ALPHA,[ef]:s.CONSTANT_COLOR,[nf]:s.ONE_MINUS_CONSTANT_COLOR,[sf]:s.CONSTANT_ALPHA,[rf]:s.ONE_MINUS_CONSTANT_ALPHA};function P($,At,pt,_t,Lt,It,Zt,ve,Le,ae){if($===Yn){_===!0&&(ft(s.BLEND),_=!1);return}if(_===!1&&(Y(s.BLEND),_=!0),$!==Hu){if($!==p||ae!==b){if((m!==ai||y!==ai)&&(s.blendEquation(s.FUNC_ADD),m=ai,y=ai),ae)switch($){case zi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vi:s.blendFunc(s.ONE,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,x=null,T=null,S=null,E.set(0,0,0),A=0,p=$,b=ae}return}Lt=Lt||At,It=It||pt,Zt=Zt||_t,(At!==m||Lt!==y)&&(s.blendEquationSeparate(j[At],j[Lt]),m=At,y=Lt),(pt!==v||_t!==x||It!==T||Zt!==S)&&(s.blendFuncSeparate(nt[pt],nt[_t],nt[It],nt[Zt]),v=pt,x=_t,T=It,S=Zt),(ve.equals(E)===!1||Le!==A)&&(s.blendColor(ve.r,ve.g,ve.b,Le),E.copy(ve),A=Le),p=$,b=!1}function dt($,At){$.side===_e?ft(s.CULL_FACE):Y(s.CULL_FACE);let pt=$.side===Oe;At&&(pt=!pt),rt(pt),$.blending===zi&&$.transparent===!1?P(Yn):P($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let _t=$.stencilWrite;a.setTest(_t),_t&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ot($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt($){M!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),M=$)}function at($){$!==Bu?(Y(s.CULL_FACE),$!==I&&($===Rc?s.cullFace(s.BACK):$===ku?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),I=$}function mt($){$!==N&&(L&&s.lineWidth($),N=$)}function ot($,At,pt){$?(Y(s.POLYGON_OFFSET_FILL),(D!==At||O!==pt)&&(s.polygonOffset(At,pt),D=At,O=pt)):ft(s.POLYGON_OFFSET_FILL)}function lt($){$?Y(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function R($){$===void 0&&($=s.TEXTURE0+V-1),G!==$&&(s.activeTexture($),G=$)}function w($,At,pt){pt===void 0&&(G===null?pt=s.TEXTURE0+V-1:pt=G);let _t=F[pt];_t===void 0&&(_t={type:void 0,texture:void 0},F[pt]=_t),(_t.type!==$||_t.texture!==At)&&(G!==pt&&(s.activeTexture(pt),G=pt),s.bindTexture($,At||it[$]),_t.type=$,_t.texture=At)}function K(){let $=F[G];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Bt(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function vt(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Dt($){k.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),k.copy($))}function Tt($){B.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),B.copy($))}function Wt($,At){let pt=c.get(At);pt===void 0&&(pt=new WeakMap,c.set(At,pt));let _t=pt.get($);_t===void 0&&(_t=s.getUniformBlockIndex(At,$.name),pt.set($,_t))}function Ht($,At){let _t=c.get(At).get($);l.get(At)!==_t&&(s.uniformBlockBinding(At,_t,$.__bindingPointIndex),l.set(At,_t))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},G=null,F={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,v=null,x=null,y=null,T=null,S=null,E=new Ut(0,0,0),A=0,b=!1,M=null,I=null,N=null,D=null,O=null,k.set(0,0,s.canvas.width,s.canvas.height),B.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ft,bindFramebuffer:gt,drawBuffers:ut,useProgram:xt,setBlending:P,setMaterial:dt,setFlipSided:rt,setCullFace:at,setLineWidth:mt,setPolygonOffset:ot,setScissorTest:lt,activeTexture:R,bindTexture:w,unbindTexture:K,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:Ct,texImage3D:Nt,updateUBOMapping:Wt,uniformBlockBinding:Ht,texStorage2D:Bt,texStorage3D:vt,texSubImage2D:J,texSubImage3D:Mt,compressedTexSubImage2D:yt,compressedTexSubImage3D:St,scissor:Dt,viewport:Tt,reset:ne}}function Th(s,t,e,n){let i=Ig(n);switch(e){case Zh:return s*t;case Jh:return s*t;case Kh:return s*t*2;case jl:return s*t/i.components*i.byteLength;case Ql:return s*t/i.components*i.byteLength;case jh:return s*t*2/i.components*i.byteLength;case tc:return s*t*2/i.components*i.byteLength;case $h:return s*t*3/i.components*i.byteLength;case an:return s*t*4/i.components*i.byteLength;case ec:return s*t*4/i.components*i.byteLength;case wr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Da:case Na:return Math.max(s,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(s,8)*Math.max(t,8)/2;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Rr:case Qa:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qh:case el:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(s){switch(s){case Ln:case Xh:return{byteLength:1,components:1};case Ms:case qh:case Ns:return{byteLength:2,components:1};case Jl:case Kl:return{byteLength:2,components:4};case hi:case $l:case mn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Pg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):Pr("canvas")}function _(R,w,K){let et=1,st=lt(R);if((st.width>K||st.height>K)&&(et=K/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(et*st.width),Mt=Math.floor(et*st.height);u===void 0&&(u=g(J,Mt));let yt=w?g(J,Mt):u;return yt.width=J,yt.height=Mt,yt.getContext("2d").drawImage(R,0,0,J,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+J+"x"+Mt+")."),yt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,w,K,et,st=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=w;if(w===s.RED&&(K===s.FLOAT&&(J=s.R32F),K===s.HALF_FLOAT&&(J=s.R16F),K===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(J=s.R8UI),K===s.UNSIGNED_SHORT&&(J=s.R16UI),K===s.UNSIGNED_INT&&(J=s.R32UI),K===s.BYTE&&(J=s.R8I),K===s.SHORT&&(J=s.R16I),K===s.INT&&(J=s.R32I)),w===s.RG&&(K===s.FLOAT&&(J=s.RG32F),K===s.HALF_FLOAT&&(J=s.RG16F),K===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(J=s.RG8UI),K===s.UNSIGNED_SHORT&&(J=s.RG16UI),K===s.UNSIGNED_INT&&(J=s.RG32UI),K===s.BYTE&&(J=s.RG8I),K===s.SHORT&&(J=s.RG16I),K===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(J=s.RGB8UI),K===s.UNSIGNED_SHORT&&(J=s.RGB16UI),K===s.UNSIGNED_INT&&(J=s.RGB32UI),K===s.BYTE&&(J=s.RGB8I),K===s.SHORT&&(J=s.RGB16I),K===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),K===s.UNSIGNED_INT&&(J=s.RGBA32UI),K===s.BYTE&&(J=s.RGBA8I),K===s.SHORT&&(J=s.RGBA16I),K===s.INT&&(J=s.RGBA32I)),w===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){let Mt=st?fo:ie.getTransfer(et);K===s.FLOAT&&(J=s.RGBA32F),K===s.HALF_FLOAT&&(J=s.RGBA16F),K===s.UNSIGNED_BYTE&&(J=Mt===ce?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(R,w){let K;return R?w===null||w===hi||w===qi?K=s.DEPTH24_STENCIL8:w===mn?K=s.DEPTH32F_STENCIL8:w===Ms&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===hi||w===qi?K=s.DEPTH_COMPONENT24:w===mn?K=s.DEPTH_COMPONENT32F:w===Ms&&(K=s.DEPTH_COMPONENT16),K}function T(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==pn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function S(R){let w=R.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&h.delete(w)}function E(R){let w=R.target;w.removeEventListener("dispose",E),M(w)}function A(R){let w=n.get(R);if(w.__webglInit===void 0)return;let K=R.source,et=f.get(K);if(et){let st=et[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(R),Object.keys(et).length===0&&f.delete(K)}n.remove(R)}function b(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let K=R.source,et=f.get(K);delete et[w.__cacheKey],o.memory.textures--}function M(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let st=0;st<w.__webglFramebuffer[et].length;st++)s.deleteFramebuffer(w.__webglFramebuffer[et][st]);else s.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)s.deleteFramebuffer(w.__webglFramebuffer[et]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let K=R.textures;for(let et=0,st=K.length;et<st;et++){let J=n.get(K[et]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(K[et])}n.remove(R)}let I=0;function N(){I=0}function D(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function O(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function V(R,w){let K=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(K,R,w);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+w)}function L(R,w){let K=n.get(R);if(R.version>0&&K.__version!==R.version){B(K,R,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+w)}function W(R,w){let K=n.get(R);if(R.version>0&&K.__version!==R.version){B(K,R,w);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+w)}function z(R,w){let K=n.get(R);if(R.version>0&&K.__version!==R.version){q(K,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+w)}let G={[Jn]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},F={[qe]:s.NEAREST,[mf]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[ko]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},Z={[yf]:s.NEVER,[Ef]:s.ALWAYS,[vf]:s.LESS,[tu]:s.LEQUAL,[Mf]:s.EQUAL,[wf]:s.GEQUAL,[bf]:s.GREATER,[Sf]:s.NOTEQUAL};function X(R,w){if(w.type===mn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===pn||w.magFilter===ko||w.magFilter===Xs||w.magFilter===ci||w.minFilter===pn||w.minFilter===ko||w.minFilter===Xs||w.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,G[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,G[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,G[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,F[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,F[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qe||w.minFilter!==Xs&&w.minFilter!==ci||w.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function k(R,w){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",S));let et=w.source,st=f.get(et);st===void 0&&(st={},f.set(et,st));let J=O(w);if(J!==R.__cacheKey){st[J]===void 0&&(st[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),st[J].usedTimes++;let Mt=st[R.__cacheKey];Mt!==void 0&&(st[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(w)),R.__cacheKey=J,R.__webglTexture=st[J].texture}return K}function B(R,w,K){let et=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=s.TEXTURE_3D);let st=k(R,w),J=w.source;e.bindTexture(et,R.__webglTexture,s.TEXTURE0+K);let Mt=n.get(J);if(J.version!==Mt.__version||st===!0){e.activeTexture(s.TEXTURE0+K);let yt=ie.getPrimaries(ie.workingColorSpace),St=w.colorSpace===Xn?null:ie.getPrimaries(w.colorSpace),Bt=w.colorSpace===Xn||yt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let vt=_(w.image,!1,i.maxTextureSize);vt=ot(w,vt);let Ct=r.convert(w.format,w.colorSpace),Nt=r.convert(w.type),Dt=x(w.internalFormat,Ct,Nt,w.colorSpace,w.isVideoTexture);X(et,w);let Tt,Wt=w.mipmaps,Ht=w.isVideoTexture!==!0,ne=Mt.__version===void 0||st===!0,$=J.dataReady,At=T(w,vt);if(w.isDepthTexture)Dt=y(w.format===Yi,w.type),ne&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Dt,vt.width,vt.height):e.texImage2D(s.TEXTURE_2D,0,Dt,vt.width,vt.height,0,Ct,Nt,null));else if(w.isDataTexture)if(Wt.length>0){Ht&&ne&&e.texStorage2D(s.TEXTURE_2D,At,Dt,Wt[0].width,Wt[0].height);for(let pt=0,_t=Wt.length;pt<_t;pt++)Tt=Wt[pt],Ht?$&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Ct,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,pt,Dt,Tt.width,Tt.height,0,Ct,Nt,Tt.data);w.generateMipmaps=!1}else Ht?(ne&&e.texStorage2D(s.TEXTURE_2D,At,Dt,vt.width,vt.height),$&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt.width,vt.height,Ct,Nt,vt.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,vt.width,vt.height,0,Ct,Nt,vt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Dt,Wt[0].width,Wt[0].height,vt.depth);for(let pt=0,_t=Wt.length;pt<_t;pt++)if(Tt=Wt[pt],w.format!==an)if(Ct!==null)if(Ht){if($)if(w.layerUpdates.size>0){let Lt=Th(Tt.width,Tt.height,w.format,w.type);for(let It of w.layerUpdates){let Zt=Tt.data.subarray(It*Lt/Tt.data.BYTES_PER_ELEMENT,(It+1)*Lt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,It,Tt.width,Tt.height,1,Ct,Zt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,vt.depth,Ct,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,Dt,Tt.width,Tt.height,vt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?$&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,vt.depth,Ct,Nt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,Dt,Tt.width,Tt.height,vt.depth,0,Ct,Nt,Tt.data)}else{Ht&&ne&&e.texStorage2D(s.TEXTURE_2D,At,Dt,Wt[0].width,Wt[0].height);for(let pt=0,_t=Wt.length;pt<_t;pt++)Tt=Wt[pt],w.format!==an?Ct!==null?Ht?$&&e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,Dt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?$&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Ct,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,pt,Dt,Tt.width,Tt.height,0,Ct,Nt,Tt.data)}else if(w.isDataArrayTexture)if(Ht){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Dt,vt.width,vt.height,vt.depth),$)if(w.layerUpdates.size>0){let pt=Th(vt.width,vt.height,w.format,w.type);for(let _t of w.layerUpdates){let Lt=vt.data.subarray(_t*pt/vt.data.BYTES_PER_ELEMENT,(_t+1)*pt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,Ct,Nt,Lt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ct,Nt,vt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,vt.width,vt.height,vt.depth,0,Ct,Nt,vt.data);else if(w.isData3DTexture)Ht?(ne&&e.texStorage3D(s.TEXTURE_3D,At,Dt,vt.width,vt.height,vt.depth),$&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ct,Nt,vt.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,vt.width,vt.height,vt.depth,0,Ct,Nt,vt.data);else if(w.isFramebufferTexture){if(ne)if(Ht)e.texStorage2D(s.TEXTURE_2D,At,Dt,vt.width,vt.height);else{let pt=vt.width,_t=vt.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(s.TEXTURE_2D,Lt,Dt,pt,_t,0,Ct,Nt,null),pt>>=1,_t>>=1}}else if(Wt.length>0){if(Ht&&ne){let pt=lt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,At,Dt,pt.width,pt.height)}for(let pt=0,_t=Wt.length;pt<_t;pt++)Tt=Wt[pt],Ht?$&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ct,Nt,Tt):e.texImage2D(s.TEXTURE_2D,pt,Dt,Ct,Nt,Tt);w.generateMipmaps=!1}else if(Ht){if(ne){let pt=lt(vt);e.texStorage2D(s.TEXTURE_2D,At,Dt,pt.width,pt.height)}$&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,Nt,vt)}else e.texImage2D(s.TEXTURE_2D,0,Dt,Ct,Nt,vt);p(w)&&m(et),Mt.__version=J.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function q(R,w,K){if(w.image.length!==6)return;let et=k(R,w),st=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+K);let J=n.get(st);if(st.version!==J.__version||et===!0){e.activeTexture(s.TEXTURE0+K);let Mt=ie.getPrimaries(ie.workingColorSpace),yt=w.colorSpace===Xn?null:ie.getPrimaries(w.colorSpace),St=w.colorSpace===Xn||Mt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Bt=w.isCompressedTexture||w.image[0].isCompressedTexture,vt=w.image[0]&&w.image[0].isDataTexture,Ct=[];for(let _t=0;_t<6;_t++)!Bt&&!vt?Ct[_t]=_(w.image[_t],!0,i.maxCubemapSize):Ct[_t]=vt?w.image[_t].image:w.image[_t],Ct[_t]=ot(w,Ct[_t]);let Nt=Ct[0],Dt=r.convert(w.format,w.colorSpace),Tt=r.convert(w.type),Wt=x(w.internalFormat,Dt,Tt,w.colorSpace),Ht=w.isVideoTexture!==!0,ne=J.__version===void 0||et===!0,$=st.dataReady,At=T(w,Nt);X(s.TEXTURE_CUBE_MAP,w);let pt;if(Bt){Ht&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Wt,Nt.width,Nt.height);for(let _t=0;_t<6;_t++){pt=Ct[_t].mipmaps;for(let Lt=0;Lt<pt.length;Lt++){let It=pt[Lt];w.format!==an?Dt!==null?Ht?$&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,Wt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,It.width,It.height,Dt,Tt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,Wt,It.width,It.height,0,Dt,Tt,It.data)}}}else{if(pt=w.mipmaps,Ht&&ne){pt.length>0&&At++;let _t=lt(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Wt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){Ht?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ct[_t].width,Ct[_t].height,Dt,Tt,Ct[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Wt,Ct[_t].width,Ct[_t].height,0,Dt,Tt,Ct[_t].data);for(let Lt=0;Lt<pt.length;Lt++){let Zt=pt[Lt].image[_t].image;Ht?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,Zt.width,Zt.height,Dt,Tt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,Wt,Zt.width,Zt.height,0,Dt,Tt,Zt.data)}}else{Ht?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt,Tt,Ct[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Wt,Dt,Tt,Ct[_t]);for(let Lt=0;Lt<pt.length;Lt++){let It=pt[Lt];Ht?$&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,Dt,Tt,It.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,Wt,Dt,Tt,It.image[_t])}}}p(w)&&m(s.TEXTURE_CUBE_MAP),J.__version=st.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function it(R,w,K,et,st,J){let Mt=r.convert(K.format,K.colorSpace),yt=r.convert(K.type),St=x(K.internalFormat,Mt,yt,K.colorSpace),Bt=n.get(w),vt=n.get(K);if(vt.__renderTarget=w,!Bt.__hasExternalTextures){let Ct=Math.max(1,w.width>>J),Nt=Math.max(1,w.height>>J);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,J,St,Ct,Nt,w.depth,0,Mt,yt,null):e.texImage2D(st,J,St,Ct,Nt,0,Mt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),at(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,st,vt.__webglTexture,0,rt(w)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,st,vt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(R,w,K){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let et=w.depthTexture,st=et&&et.isDepthTexture?et.type:null,J=y(w.stencilBuffer,st),Mt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=rt(w);at(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,J,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,R)}else{let et=w.textures;for(let st=0;st<et.length;st++){let J=et[st],Mt=r.convert(J.format,J.colorSpace),yt=r.convert(J.type),St=x(J.internalFormat,Mt,yt,J.colorSpace),Bt=rt(w);K&&at(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,St,w.width,w.height):at(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt,St,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,St,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let st=et.__webglTexture,J=rt(w);if(w.depthTexture.format===Bi)at(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(w.depthTexture.format===Yi)at(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function gt(R){let w=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let et=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let st=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),w.__depthDisposeCallback=st}w.__boundDepthTexture=et}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ft(w.__webglFramebuffer,R)}else if(K){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=s.createRenderbuffer(),Y(w.__webglDepthbuffer[et],R,!1);else{let st=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Y(w.__webglDepthbuffer,R,!1);else{let et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(R,w,K){let et=n.get(R);w!==void 0&&it(et.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&gt(R)}function xt(R){let w=R.texture,K=n.get(R),et=n.get(w);R.addEventListener("dispose",E);let st=R.textures,J=R.isWebGLCubeRenderTarget===!0,Mt=st.length>1;if(Mt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=w.version,o.memory.textures++),J){K.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[yt]=[];for(let St=0;St<w.mipmaps.length;St++)K.__webglFramebuffer[yt][St]=s.createFramebuffer()}else K.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)K.__webglFramebuffer[yt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let yt=0,St=st.length;yt<St;yt++){let Bt=n.get(st[yt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&at(R)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<st.length;yt++){let St=st[yt];K.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);let Bt=r.convert(St.format,St.colorSpace),vt=r.convert(St.type),Ct=x(St.internalFormat,Bt,vt,St.colorSpace,R.isXRRenderTarget===!0),Nt=rt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Ct,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),X(s.TEXTURE_CUBE_MAP,w);for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)it(K.__webglFramebuffer[yt][St],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else it(K.__webglFramebuffer[yt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(w)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let yt=0,St=st.length;yt<St;yt++){let Bt=st[yt],vt=n.get(Bt);e.bindTexture(s.TEXTURE_2D,vt.__webglTexture),X(s.TEXTURE_2D,Bt),it(K.__webglFramebuffer,R,Bt,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),p(Bt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,et.__webglTexture),X(yt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)it(K.__webglFramebuffer[St],R,w,s.COLOR_ATTACHMENT0,yt,St);else it(K.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,yt,0);p(w)&&m(yt),e.unbindTexture()}R.depthBuffer&&gt(R)}function j(R){let w=R.textures;for(let K=0,et=w.length;K<et;K++){let st=w[K];if(p(st)){let J=v(R),Mt=n.get(st).__webglTexture;e.bindTexture(J,Mt),m(J),e.unbindTexture()}}}let nt=[],P=[];function dt(R){if(R.samples>0){if(at(R)===!1){let w=R.textures,K=R.width,et=R.height,st=s.COLOR_BUFFER_BIT,J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(R),yt=w.length>1;if(yt)for(let St=0;St<w.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let St=0;St<w.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);let Bt=n.get(w[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,K,et,0,0,K,et,st,s.NEAREST),l===!0&&(nt.length=0,P.length=0,nt.push(s.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(J),P.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let St=0;St<w.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);let Bt=n.get(w[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function rt(R){return Math.min(i.maxSamples,R.samples)}function at(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function mt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ot(R,w){let K=R.colorSpace,et=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Qi&&K!==Xn&&(ie.getTransfer(K)===ce?(et!==an||st!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=L,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=ut,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=at}function Lg(s,t){function e(n,i=Xn){let r,o=ie.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===Jl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return s.BYTE;if(n===qh)return s.SHORT;if(n===Ms)return s.UNSIGNED_SHORT;if(n===$l)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===Ns)return s.HALF_FLOAT;if(n===Zh)return s.ALPHA;if(n===$h)return s.RGB;if(n===an)return s.RGBA;if(n===Jh)return s.LUMINANCE;if(n===Kh)return s.LUMINANCE_ALPHA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===Yi)return s.DEPTH_STENCIL;if(n===jl)return s.RED;if(n===Ql)return s.RED_INTEGER;if(n===jh)return s.RG;if(n===tc)return s.RG_INTEGER;if(n===ec)return s.RGBA_INTEGER;if(n===wr||n===Er||n===Tr||n===Ar)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Fa||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Fa)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yl=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dg={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new He,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends Kn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new vl,p=e.getContextAttributes(),m=null,v=null,x=[],y=[],T=new bt,S=null,E=new Ne;E.viewport=new Me;let A=new Ne;A.viewport=new Me;let b=[E,A],M=new yl,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=x[B];return q===void 0&&(q=new _s,x[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=x[B];return q===void 0&&(q=new _s,x[B]=q),q.getGripSpace()},this.getHand=function(B){let q=x[B];return q===void 0&&(q=new _s,x[B]=q),q.getHandSpace()};function D(B){let q=y.indexOf(B.inputSource);if(q===-1)return;let it=x[q];it!==void 0&&(it.update(B.inputSource,B.frame,c||o),it.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let B=0;B<x.length;B++){let q=y[B];q!==null&&(y[B]=null,x[B].disconnect(q))}I=null,N=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,v=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Dn(d.framebufferWidth,d.framebufferHeight,{format:an,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,it=null,Y=null;p.depth&&(Y=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=p.stencil?Yi:Bi,it=p.stencil?qi:hi);let ft={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(ft),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Dn(f.textureWidth,f.textureHeight,{format:an,type:Ln,depthTexture:new Br(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(B){for(let q=0;q<B.removed.length;q++){let it=B.removed[q],Y=y.indexOf(it);Y>=0&&(y[Y]=null,x[Y].disconnect(it))}for(let q=0;q<B.added.length;q++){let it=B.added[q],Y=y.indexOf(it);if(Y===-1){for(let gt=0;gt<x.length;gt++)if(gt>=y.length){y.push(it),Y=gt;break}else if(y[gt]===null){y[gt]=it,Y=gt;break}if(Y===-1)break}let ft=x[Y];ft&&ft.connect(it)}}let L=new H,W=new H;function z(B,q,it){L.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(it.matrixWorld);let Y=L.distanceTo(W),ft=q.projectionMatrix.elements,gt=it.projectionMatrix.elements,ut=ft[14]/(ft[10]-1),xt=ft[14]/(ft[10]+1),j=(ft[9]+1)/ft[5],nt=(ft[9]-1)/ft[5],P=(ft[8]-1)/ft[0],dt=(gt[8]+1)/gt[0],rt=ut*P,at=ut*dt,mt=Y/(-P+dt),ot=mt*-P;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ot),B.translateZ(mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ft[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let lt=ut+mt,R=xt+mt,w=rt-ot,K=at+(Y-ot),et=j*xt/R*lt,st=nt*xt/R*lt;B.projectionMatrix.makePerspective(w,K,et,st,lt,R),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function G(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let q=B.near,it=B.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(it=_.depthFar)),M.near=A.near=E.near=q,M.far=A.far=E.far=it,(I!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far),E.layers.mask=B.layers.mask|2,A.layers.mask=B.layers.mask|4,M.layers.mask=E.layers.mask|A.layers.mask;let Y=B.parent,ft=M.cameras;G(M,Y);for(let gt=0;gt<ft.length;gt++)G(ft[gt],Y);ft.length===2?z(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),F(B,M,Y)};function F(B,q,it){it===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(it.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Z=null;function X(B,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Y=!1;it.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let gt=0;gt<it.length;gt++){let ut=it[gt],xt=null;if(d!==null)xt=d.getViewport(ut);else{let nt=u.getViewSubImage(f,ut);xt=nt.viewport,gt===0&&(t.setRenderTargetTextures(v,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(v))}let j=b[gt];j===void 0&&(j=new Ne,j.layers.enable(gt),j.viewport=new Me,b[gt]=j),j.matrix.fromArray(ut.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ut.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(xt.x,xt.y,xt.width,xt.height),gt===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(j)}let ft=i.enabledFeatures;if(ft&&ft.includes("depth-sensing")){let gt=u.getDepthInformation(it[0]);gt&&gt.isValid&&gt.texture&&_.init(t,gt,i.renderState)}}for(let it=0;it<x.length;it++){let Y=y[it],ft=x[it];Y!==null&&ft!==void 0&&ft.update(Y,q,c||o)}Z&&Z(B,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let k=new ru;k.setAnimationLoop(X),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}},ri=new ln,Og=new ee;function Fg(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,su(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Oe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Oe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),x=v.envMap,y=v.envMapRotation;x&&(p.envMap.value=x,ri.copy(y),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(ri)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Oe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));let T=x.program;n.updateUBOMapping(v,T);let S=t.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){let x=u();v.__bindingPointIndex=x;let y=s.createBuffer(),T=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,E=y.length;S<E;S++){let A=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,M=A.length;b<M;b++){let I=A[b];if(d(I,S,b,T)===!0){let N=I.__offset,D=Array.isArray(I.value)?I.value:[I.value],O=0;for(let V=0;V<D.length;V++){let L=D[V],W=_(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,N+O,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,O),O+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,y,T){let S=v.value,E=x+"_"+y;if(T[E]===void 0)return typeof S=="number"||typeof S=="boolean"?T[E]=S:T[E]=S.clone(),!0;{let A=T[E];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[E]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(v){let x=v.uniforms,y=0,T=16;for(let E=0,A=x.length;E<A;E++){let b=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,I=b.length;M<I;M++){let N=b[M],D=Array.isArray(N.value)?N.value:[N.value];for(let O=0,V=D.length;O<V;O++){let L=D[O],W=_(L),z=y%T,G=z%W.boundary,F=z+G;y+=G,F!==0&&T-F<W.storage&&(y+=T-F),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=W.storage}}}let S=y%T;return S>0&&(y+=T-S),v.__size=y,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){let x=v.target;x.removeEventListener("dispose",p);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var kr=class{constructor(t={}){let{canvas:e=Vf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,m=null,v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Zn,this.toneMappingExposure=1;let y=this,T=!1,S=0,E=0,A=null,b=-1,M=null,I=new Me,N=new Me,D=null,O=new Ut(0),V=0,L=e.width,W=e.height,z=1,G=null,F=null,Z=new Me(0,0,L,W),X=new Me(0,0,L,W),k=!1,B=new Ss,q=!1,it=!1,Y=new ee,ft=new ee,gt=new H,ut=new Me,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function nt(){return A===null?z:1}let P=n;function dt(C,Q){return e.getContext(C,Q)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",It,!1),P===null){let Q="webgl2";if(P=dt(Q,C),P===null)throw dt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let rt,at,mt,ot,lt,R,w,K,et,st,J,Mt,yt,St,Bt,vt,Ct,Nt,Dt,Tt,Wt,Ht,ne,$;function At(){rt=new t0(P),rt.init(),Ht=new Lg(P,rt),at=new Zm(P,rt,t,Ht),mt=new Cg(P,rt),at.reverseDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),ot=new i0(P),lt=new gg,R=new Pg(P,rt,mt,lt,at,Ht,ot),w=new Jm(y),K=new Qm(y),et=new hd(P),ne=new qm(P,et),st=new e0(P,et,ot,ne),J=new r0(P,st,et,ot),Dt=new s0(P,at,R),vt=new $m(lt),Mt=new mg(y,w,K,rt,at,ne,vt),yt=new Fg(y,lt),St=new _g,Bt=new wg(rt),Nt=new Xm(y,w,K,mt,J,d,l),Ct=new Ag(y,J,at),$=new zg(P,ot,at,mt),Tt=new Ym(P,rt,ot),Wt=new n0(P,rt,ot),ot.programs=Mt.programs,y.capabilities=at,y.extensions=rt,y.properties=lt,y.renderLists=St,y.shadowMap=Ct,y.state=mt,y.info=ot}At();let pt=new Ml(y,P);this.xr=pt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let C=rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(L,W,!1))},this.getSize=function(C){return C.set(L,W)},this.setSize=function(C,Q,ct=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,W=Q,e.width=Math.floor(C*z),e.height=Math.floor(Q*z),ct===!0&&(e.style.width=C+"px",e.style.height=Q+"px"),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(L*z,W*z).floor()},this.setDrawingBufferSize=function(C,Q,ct){L=C,W=Q,z=ct,e.width=Math.floor(C*ct),e.height=Math.floor(Q*ct),this.setViewport(0,0,C,Q)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,Q,ct,ht){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,Q,ct,ht),mt.viewport(I.copy(Z).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,Q,ct,ht){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,Q,ct,ht),mt.scissor(N.copy(X).multiplyScalar(z).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(C){mt.setScissorTest(k=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(C=!0,Q=!0,ct=!0){let ht=0;if(C){let tt=!1;if(A!==null){let Et=A.texture.format;tt=Et===ec||Et===tc||Et===Ql}if(tt){let Et=A.texture.type,Pt=Et===Ln||Et===hi||Et===Ms||Et===qi||Et===Jl||Et===Kl,Ot=Nt.getClearColor(),Ft=Nt.getClearAlpha(),Xt=Ot.r,$t=Ot.g,zt=Ot.b;Pt?(g[0]=Xt,g[1]=$t,g[2]=zt,g[3]=Ft,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Xt,_[1]=$t,_[2]=zt,_[3]=Ft,P.clearBufferiv(P.COLOR,0,_))}else ht|=P.COLOR_BUFFER_BIT}Q&&(ht|=P.DEPTH_BUFFER_BIT),ct&&(ht|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),St.dispose(),Bt.dispose(),lt.dispose(),w.dispose(),K.dispose(),J.dispose(),ne.dispose(),$.dispose(),Mt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",vc),pt.removeEventListener("sessionend",Mc),Qn.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let C=ot.autoReset,Q=Ct.enabled,ct=Ct.autoUpdate,ht=Ct.needsUpdate,tt=Ct.type;At(),ot.autoReset=C,Ct.enabled=Q,Ct.autoUpdate=ct,Ct.needsUpdate=ht,Ct.type=tt}function It(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Zt(C){let Q=C.target;Q.removeEventListener("dispose",Zt),ve(Q)}function ve(C){Le(C),lt.remove(C)}function Le(C){let Q=lt.get(C).programs;Q!==void 0&&(Q.forEach(function(ct){Mt.releaseProgram(ct)}),C.isShaderMaterial&&Mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ct,ht,tt,Et){Q===null&&(Q=xt);let Pt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ot=Ou(C,Q,ct,ht,tt);mt.setMaterial(ht,Pt);let Ft=ct.index,Xt=1;if(ht.wireframe===!0){if(Ft=st.getWireframeAttribute(ct),Ft===void 0)return;Xt=2}let $t=ct.drawRange,zt=ct.attributes.position,se=$t.start*Xt,fe=($t.start+$t.count)*Xt;Et!==null&&(se=Math.max(se,Et.start*Xt),fe=Math.min(fe,(Et.start+Et.count)*Xt)),Ft!==null?(se=Math.max(se,0),fe=Math.min(fe,Ft.count)):zt!=null&&(se=Math.max(se,0),fe=Math.min(fe,zt.count));let de=fe-se;if(de<0||de===1/0)return;ne.setup(tt,ht,Ot,ct,Ft);let ke,re=Tt;if(Ft!==null&&(ke=et.get(Ft),re=Wt,re.setIndex(ke)),tt.isMesh)ht.wireframe===!0?(mt.setLineWidth(ht.wireframeLinewidth*nt()),re.setMode(P.LINES)):re.setMode(P.TRIANGLES);else if(tt.isLine){let kt=ht.linewidth;kt===void 0&&(kt=1),mt.setLineWidth(kt*nt()),tt.isLineSegments?re.setMode(P.LINES):tt.isLineLoop?re.setMode(P.LINE_LOOP):re.setMode(P.LINE_STRIP)}else tt.isPoints?re.setMode(P.POINTS):tt.isSprite&&re.setMode(P.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)re.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))re.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let kt=tt._multiDrawStarts,Mn=tt._multiDrawCounts,oe=tt._multiDrawCount,en=Ft?et.get(Ft).bytesPerElement:1,gi=lt.get(ht).currentProgram.getUniforms();for(let Ge=0;Ge<oe;Ge++)gi.setValue(P,"_gl_DrawID",Ge),re.render(kt[Ge]/en,Mn[Ge])}else if(tt.isInstancedMesh)re.renderInstances(se,de,tt.count);else if(ct.isInstancedBufferGeometry){let kt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Mn=Math.min(ct.instanceCount,kt);re.renderInstances(se,de,Mn)}else re.render(se,de)};function ae(C,Q,ct){C.transparent===!0&&C.side===_e&&C.forceSinglePass===!1?(C.side=Oe,C.needsUpdate=!0,Ws(C,Q,ct),C.side=$n,C.needsUpdate=!0,Ws(C,Q,ct),C.side=_e):Ws(C,Q,ct)}this.compile=function(C,Q,ct=null){ct===null&&(ct=C),m=Bt.get(ct),m.init(Q),x.push(m),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),C!==ct&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights();let ht=new Set;return C.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Et=tt.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){let Ot=Et[Pt];ae(Ot,ct,tt),ht.add(Ot)}else ae(Et,ct,tt),ht.add(Et)}),x.pop(),m=null,ht},this.compileAsync=function(C,Q,ct=null){let ht=this.compile(C,Q,ct);return new Promise(tt=>{function Et(){if(ht.forEach(function(Pt){lt.get(Pt).currentProgram.isReady()&&ht.delete(Pt)}),ht.size===0){tt(C);return}setTimeout(Et,10)}rt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let tn=null;function vn(C){tn&&tn(C)}function vc(){Qn.stop()}function Mc(){Qn.start()}let Qn=new ru;Qn.setAnimationLoop(vn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(C){tn=C,pt.setAnimationLoop(C),C===null?Qn.stop():Qn.start()},pt.addEventListener("sessionstart",vc),pt.addEventListener("sessionend",Mc),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(Q),Q=pt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,Q,A),m=Bt.get(C,x.length),m.init(Q),x.push(m),ft.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B.setFromProjectionMatrix(ft),it=this.localClippingEnabled,q=vt.init(this.clippingPlanes,it),p=St.get(C,v.length),p.init(),v.push(p),pt.enabled===!0&&pt.isPresenting===!0){let Et=y.xr.getDepthSensingMesh();Et!==null&&Bo(Et,Q,-1/0,y.sortObjects)}Bo(C,Q,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(G,F),j=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,j&&Nt.addToRenderList(p,C),this.info.render.frame++,q===!0&&vt.beginShadows();let ct=m.state.shadowsArray;Ct.render(ct,C,Q),q===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ht=p.opaque,tt=p.transmissive;if(m.setupLights(),Q.isArrayCamera){let Et=Q.cameras;if(tt.length>0)for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++){let Ft=Et[Pt];Sc(ht,tt,C,Ft)}j&&Nt.render(C);for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++){let Ft=Et[Pt];bc(p,C,Ft,Ft.viewport)}}else tt.length>0&&Sc(ht,tt,C,Q),j&&Nt.render(C),bc(p,C,Q);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,Q),ne.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&vt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Bo(C,Q,ct,ht){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){ht&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);let Pt=J.update(C),Ot=C.material;Ot.visible&&p.push(C,Pt,Ot,ct,ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){let Pt=J.update(C),Ot=C.material;if(ht&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ut.copy(Pt.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(ft)),Array.isArray(Ot)){let Ft=Pt.groups;for(let Xt=0,$t=Ft.length;Xt<$t;Xt++){let zt=Ft[Xt],se=Ot[zt.materialIndex];se&&se.visible&&p.push(C,Pt,se,ct,ut.z,zt)}}else Ot.visible&&p.push(C,Pt,Ot,ct,ut.z,null)}}let Et=C.children;for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++)Bo(Et[Pt],Q,ct,ht)}function bc(C,Q,ct,ht){let tt=C.opaque,Et=C.transmissive,Pt=C.transparent;m.setupLightsView(ct),q===!0&&vt.setGlobalState(y.clippingPlanes,ct),ht&&mt.viewport(I.copy(ht)),tt.length>0&&Gs(tt,Q,ct),Et.length>0&&Gs(Et,Q,ct),Pt.length>0&&Gs(Pt,Q,ct),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Sc(C,Q,ct,ht){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ht.id]===void 0&&(m.state.transmissionRenderTarget[ht.id]=new Dn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Ns:Ln,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let Et=m.state.transmissionRenderTarget[ht.id],Pt=ht.viewport||I;Et.setSize(Pt.z,Pt.w);let Ot=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(O),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),j&&Nt.render(ct);let Ft=y.toneMapping;y.toneMapping=Zn;let Xt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),m.setupLightsView(ht),q===!0&&vt.setGlobalState(y.clippingPlanes,ht),Gs(C,ct,ht),R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et),rt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let zt=0,se=Q.length;zt<se;zt++){let fe=Q[zt],de=fe.object,ke=fe.geometry,re=fe.material,kt=fe.group;if(re.side===_e&&de.layers.test(ht.layers)){let Mn=re.side;re.side=Oe,re.needsUpdate=!0,wc(de,ct,ht,ke,re,kt),re.side=Mn,re.needsUpdate=!0,$t=!0}}$t===!0&&(R.updateMultisampleRenderTarget(Et),R.updateRenderTargetMipmap(Et))}y.setRenderTarget(Ot),y.setClearColor(O,V),Xt!==void 0&&(ht.viewport=Xt),y.toneMapping=Ft}function Gs(C,Q,ct){let ht=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,Et=C.length;tt<Et;tt++){let Pt=C[tt],Ot=Pt.object,Ft=Pt.geometry,Xt=ht===null?Pt.material:ht,$t=Pt.group;Ot.layers.test(ct.layers)&&wc(Ot,Q,ct,Ft,Xt,$t)}}function wc(C,Q,ct,ht,tt,Et){C.onBeforeRender(y,Q,ct,ht,tt,Et),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(y,Q,ct,ht,C,Et),tt.transparent===!0&&tt.side===_e&&tt.forceSinglePass===!1?(tt.side=Oe,tt.needsUpdate=!0,y.renderBufferDirect(ct,Q,ht,tt,C,Et),tt.side=$n,tt.needsUpdate=!0,y.renderBufferDirect(ct,Q,ht,tt,C,Et),tt.side=_e):y.renderBufferDirect(ct,Q,ht,tt,C,Et),C.onAfterRender(y,Q,ct,ht,tt,Et)}function Ws(C,Q,ct){Q.isScene!==!0&&(Q=xt);let ht=lt.get(C),tt=m.state.lights,Et=m.state.shadowsArray,Pt=tt.state.version,Ot=Mt.getParameters(C,tt.state,Et,Q,ct),Ft=Mt.getProgramCacheKey(Ot),Xt=ht.programs;ht.environment=C.isMeshStandardMaterial?Q.environment:null,ht.fog=Q.fog,ht.envMap=(C.isMeshStandardMaterial?K:w).get(C.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,Xt===void 0&&(C.addEventListener("dispose",Zt),Xt=new Map,ht.programs=Xt);let $t=Xt.get(Ft);if($t!==void 0){if(ht.currentProgram===$t&&ht.lightsStateVersion===Pt)return Tc(C,Ot),$t}else Ot.uniforms=Mt.getUniforms(C),C.onBeforeCompile(Ot,y),$t=Mt.acquireProgram(Ot,Ft),Xt.set(Ft,$t),ht.uniforms=Ot.uniforms;let zt=ht.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=vt.uniform),Tc(C,Ot),ht.needsLights=zu(C),ht.lightsStateVersion=Pt,ht.needsLights&&(zt.ambientLightColor.value=tt.state.ambient,zt.lightProbe.value=tt.state.probe,zt.directionalLights.value=tt.state.directional,zt.directionalLightShadows.value=tt.state.directionalShadow,zt.spotLights.value=tt.state.spot,zt.spotLightShadows.value=tt.state.spotShadow,zt.rectAreaLights.value=tt.state.rectArea,zt.ltc_1.value=tt.state.rectAreaLTC1,zt.ltc_2.value=tt.state.rectAreaLTC2,zt.pointLights.value=tt.state.point,zt.pointLightShadows.value=tt.state.pointShadow,zt.hemisphereLights.value=tt.state.hemi,zt.directionalShadowMap.value=tt.state.directionalShadowMap,zt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,zt.spotShadowMap.value=tt.state.spotShadowMap,zt.spotLightMatrix.value=tt.state.spotLightMatrix,zt.spotLightMap.value=tt.state.spotLightMap,zt.pointShadowMap.value=tt.state.pointShadowMap,zt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=$t,ht.uniformsList=null,$t}function Ec(C){if(C.uniformsList===null){let Q=C.currentProgram.getUniforms();C.uniformsList=Hi.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Tc(C,Q){let ct=lt.get(C);ct.outputColorSpace=Q.outputColorSpace,ct.batching=Q.batching,ct.batchingColor=Q.batchingColor,ct.instancing=Q.instancing,ct.instancingColor=Q.instancingColor,ct.instancingMorph=Q.instancingMorph,ct.skinning=Q.skinning,ct.morphTargets=Q.morphTargets,ct.morphNormals=Q.morphNormals,ct.morphColors=Q.morphColors,ct.morphTargetsCount=Q.morphTargetsCount,ct.numClippingPlanes=Q.numClippingPlanes,ct.numIntersection=Q.numClipIntersection,ct.vertexAlphas=Q.vertexAlphas,ct.vertexTangents=Q.vertexTangents,ct.toneMapping=Q.toneMapping}function Ou(C,Q,ct,ht,tt){Q.isScene!==!0&&(Q=xt),R.resetTextureUnits();let Et=Q.fog,Pt=ht.isMeshStandardMaterial?Q.environment:null,Ot=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qi,Ft=(ht.isMeshStandardMaterial?K:w).get(ht.envMap||Pt),Xt=ht.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,$t=!!ct.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),zt=!!ct.morphAttributes.position,se=!!ct.morphAttributes.normal,fe=!!ct.morphAttributes.color,de=Zn;ht.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(de=y.toneMapping);let ke=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,re=ke!==void 0?ke.length:0,kt=lt.get(ht),Mn=m.state.lights;if(q===!0&&(it===!0||C!==M)){let Ze=C===M&&ht.id===b;vt.setState(ht,C,Ze)}let oe=!1;ht.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Mn.state.version||kt.outputColorSpace!==Ot||tt.isBatchedMesh&&kt.batching===!1||!tt.isBatchedMesh&&kt.batching===!0||tt.isBatchedMesh&&kt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&kt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&kt.instancing===!1||!tt.isInstancedMesh&&kt.instancing===!0||tt.isSkinnedMesh&&kt.skinning===!1||!tt.isSkinnedMesh&&kt.skinning===!0||tt.isInstancedMesh&&kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&kt.instancingMorph===!1&&tt.morphTexture!==null||kt.envMap!==Ft||ht.fog===!0&&kt.fog!==Et||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==vt.numPlanes||kt.numIntersection!==vt.numIntersection)||kt.vertexAlphas!==Xt||kt.vertexTangents!==$t||kt.morphTargets!==zt||kt.morphNormals!==se||kt.morphColors!==fe||kt.toneMapping!==de||kt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,kt.__version=ht.version);let en=kt.currentProgram;oe===!0&&(en=Ws(ht,Q,tt));let gi=!1,Ge=!1,ns=!1,pe=en.getUniforms(),fn=kt.uniforms;if(mt.useProgram(en.program)&&(gi=!0,Ge=!0,ns=!0),ht.id!==b&&(b=ht.id,Ge=!0),gi||M!==C){mt.buffers.depth.getReversed()?(Y.copy(C.projectionMatrix),Wf(Y),Xf(Y),pe.setValue(P,"projectionMatrix",Y)):pe.setValue(P,"projectionMatrix",C.projectionMatrix),pe.setValue(P,"viewMatrix",C.matrixWorldInverse);let Fn=pe.map.cameraPosition;Fn!==void 0&&Fn.setValue(P,gt.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&pe.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ge=!0,ns=!0)}if(tt.isSkinnedMesh){pe.setOptional(P,tt,"bindMatrix"),pe.setOptional(P,tt,"bindMatrixInverse");let Ze=tt.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),pe.setValue(P,"boneTexture",Ze.boneTexture,R))}tt.isBatchedMesh&&(pe.setOptional(P,tt,"batchingTexture"),pe.setValue(P,"batchingTexture",tt._matricesTexture,R),pe.setOptional(P,tt,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",tt._indirectTexture,R),pe.setOptional(P,tt,"batchingColorTexture"),tt._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",tt._colorsTexture,R));let is=ct.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Dt.update(tt,ct,en),(Ge||kt.receiveShadow!==tt.receiveShadow)&&(kt.receiveShadow=tt.receiveShadow,pe.setValue(P,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(fn.envMap.value=Ft,fn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&Q.environment!==null&&(fn.envMapIntensity.value=Q.environmentIntensity),Ge&&(pe.setValue(P,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&Fu(fn,ns),Et&&ht.fog===!0&&yt.refreshFogUniforms(fn,Et),yt.refreshMaterialUniforms(fn,ht,z,W,m.state.transmissionRenderTarget[C.id]),Hi.upload(P,Ec(kt),fn,R)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Hi.upload(P,Ec(kt),fn,R),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&pe.setValue(P,"center",tt.center),pe.setValue(P,"modelViewMatrix",tt.modelViewMatrix),pe.setValue(P,"normalMatrix",tt.normalMatrix),pe.setValue(P,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){let Ze=ht.uniformsGroups;for(let Fn=0,zn=Ze.length;Fn<zn;Fn++){let Ac=Ze[Fn];$.update(Ac,en),$.bind(Ac,en)}}return en}function Fu(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function zu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,Q,ct){lt.get(C.texture).__webglTexture=Q,lt.get(C.depthTexture).__webglTexture=ct;let ht=lt.get(C);ht.__hasExternalTextures=!0,ht.__autoAllocateDepthBuffer=ct===void 0,ht.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Q){let ct=lt.get(C);ct.__webglFramebuffer=Q,ct.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,ct=0){A=C,S=Q,E=ct;let ht=!0,tt=null,Et=!1,Pt=!1;if(C){let Ft=lt.get(C);if(Ft.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(P.FRAMEBUFFER,null),ht=!1;else if(Ft.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Ft.__hasExternalTextures)R.rebindTextures(C,lt.get(C.texture).__webglTexture,lt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let zt=C.depthTexture;if(Ft.__boundDepthTexture!==zt){if(zt!==null&&lt.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}let Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);let $t=lt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Q])?tt=$t[Q][ct]:tt=$t[Q],Et=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?tt=lt.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?tt=$t[ct]:tt=$t,I.copy(C.viewport),N.copy(C.scissor),D=C.scissorTest}else I.copy(Z).multiplyScalar(z).floor(),N.copy(X).multiplyScalar(z).floor(),D=k;if(mt.bindFramebuffer(P.FRAMEBUFFER,tt)&&ht&&mt.drawBuffers(C,tt),mt.viewport(I),mt.scissor(N),mt.setScissorTest(D),Et){let Ft=lt.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft.__webglTexture,ct)}else if(Pt){let Ft=lt.get(C.texture),Xt=Q||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,ct||0,Xt)}b=-1},this.readRenderTargetPixels=function(C,Q,ct,ht,tt,Et,Pt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){mt.bindFramebuffer(P.FRAMEBUFFER,Ot);try{let Ft=C.texture,Xt=Ft.format,$t=Ft.type;if(!at.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-ht&&ct>=0&&ct<=C.height-tt&&P.readPixels(Q,ct,ht,tt,Ht.convert(Xt),Ht.convert($t),Et)}finally{let Ft=A!==null?lt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(P.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ct,ht,tt,Et,Pt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){let Ft=C.texture,Xt=Ft.format,$t=Ft.type;if(!at.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=C.width-ht&&ct>=0&&ct<=C.height-tt){mt.bindFramebuffer(P.FRAMEBUFFER,Ot);let zt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.bufferData(P.PIXEL_PACK_BUFFER,Et.byteLength,P.STREAM_READ),P.readPixels(Q,ct,ht,tt,Ht.convert(Xt),Ht.convert($t),0);let se=A!==null?lt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(P.FRAMEBUFFER,se);let fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Gf(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Et),P.deleteBuffer(zt),P.deleteSync(fe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Q=null,ct=0){C.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1]);let ht=Math.pow(2,-ct),tt=Math.floor(C.image.width*ht),Et=Math.floor(C.image.height*ht),Pt=Q!==null?Q.x:0,Ot=Q!==null?Q.y:0;R.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,ct,0,0,Pt,Ot,tt,Et),mt.unbindTexture()},this.copyTextureToTexture=function(C,Q,ct=null,ht=null,tt=0){C.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),ht=arguments[0]||null,C=arguments[1],Q=arguments[2],tt=arguments[3]||0,ct=null);let Et,Pt,Ot,Ft,Xt,$t,zt,se,fe,de=C.isCompressedTexture?C.mipmaps[tt]:C.image;ct!==null?(Et=ct.max.x-ct.min.x,Pt=ct.max.y-ct.min.y,Ot=ct.isBox3?ct.max.z-ct.min.z:1,Ft=ct.min.x,Xt=ct.min.y,$t=ct.isBox3?ct.min.z:0):(Et=de.width,Pt=de.height,Ot=de.depth||1,Ft=0,Xt=0,$t=0),ht!==null?(zt=ht.x,se=ht.y,fe=ht.z):(zt=0,se=0,fe=0);let ke=Ht.convert(Q.format),re=Ht.convert(Q.type),kt;Q.isData3DTexture?(R.setTexture3D(Q,0),kt=P.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(R.setTexture2DArray(Q,0),kt=P.TEXTURE_2D_ARRAY):(R.setTexture2D(Q,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment);let Mn=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),gi=P.getParameter(P.UNPACK_SKIP_ROWS),Ge=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$t);let ns=C.isDataArrayTexture||C.isData3DTexture,pe=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let fn=lt.get(C),is=lt.get(Q),Ze=lt.get(fn.__renderTarget),Fn=lt.get(is.__renderTarget);mt.bindFramebuffer(P.READ_FRAMEBUFFER,Ze.__webglFramebuffer),mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let zn=0;zn<Ot;zn++)ns&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,lt.get(C).__webglTexture,tt,$t+zn),C.isDepthTexture?(pe&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,lt.get(Q).__webglTexture,tt,fe+zn),P.blitFramebuffer(Ft,Xt,Et,Pt,zt,se,Et,Pt,P.DEPTH_BUFFER_BIT,P.NEAREST)):pe?P.copyTexSubImage3D(kt,tt,zt,se,fe+zn,Ft,Xt,Et,Pt):P.copyTexSubImage2D(kt,tt,zt,se,fe+zn,Ft,Xt,Et,Pt);mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pe?C.isDataTexture||C.isData3DTexture?P.texSubImage3D(kt,tt,zt,se,fe,Et,Pt,Ot,ke,re,de.data):Q.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,tt,zt,se,fe,Et,Pt,Ot,ke,de.data):P.texSubImage3D(kt,tt,zt,se,fe,Et,Pt,Ot,ke,re,de):C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,tt,zt,se,Et,Pt,ke,re,de.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,tt,zt,se,de.width,de.height,ke,de.data):P.texSubImage2D(P.TEXTURE_2D,tt,zt,se,Et,Pt,ke,re,de);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,gi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge),tt===0&&Q.generateMipmaps&&P.generateMipmap(kt),mt.unbindTexture()},this.copyTextureToTexture3D=function(C,Q,ct=null,ht=null,tt=0){return C.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ct=arguments[0]||null,ht=arguments[1]||null,C=arguments[2],Q=arguments[3],tt=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Q,ct,ht,tt)},this.initRenderTarget=function(C){lt.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),mt.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,mt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Hr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vr=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ze=new H,ws=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Es=class extends cn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pi,ls=new H,Li=new H,Di=new H,Ui=new bt,cs=new bt,hu=new ee,fr=new H,hs=new H,dr=new H,Ah=new bt,pa=new bt,Rh=new bt,Wr=class extends Se{constructor(t=new Es){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gr(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new ws(n,3,0,!1)),Pi.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;pr(fr.set(-.5,-.5,0),Di,o,Li,i,r),pr(hs.set(.5,-.5,0),Di,o,Li,i,r),pr(dr.set(.5,.5,0),Di,o,Li,i,r),Ah.set(0,0),pa.set(1,0),Rh.set(1,1);let a=t.ray.intersectTriangle(fr,hs,dr,!1,ls);if(a===null&&(pr(hs.set(-.5,.5,0),Di,o,Li,i,r),pa.set(0,1),a=t.ray.intersectTriangle(fr,dr,hs,!1,ls),a===null))return;let l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:qn.getInterpolation(ls,fr,hs,dr,Ah,pa,Rh,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pr(s,t,e,n,i,r){Ui.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(cs.x=r*Ui.x-i*Ui.y,cs.y=i*Ui.x+r*Ui.y):cs.copy(Ui),s.copy(t),s.x+=cs.x,s.y+=cs.y,s.applyMatrix4(hu)}var bl=class extends He{constructor(t=null,e=1,n=1,i,r,o,a,l,c=qe,h=qe,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new ee,Ch=new ee,mr=[],Ih=new Un,Bg=new ee,us=new qt,fs=new Nn,je=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Ih.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),fs.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),Ch.multiplyMatrices(n,Ni),us.matrixWorld=Ch,us.raycast(t,mr);for(let o=0,a=mr.length;o<a;o++){let l=mr[o];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bl(new Float32Array(i*this.count),i,this.count,jl,mn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var As=class extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xr=new H,qr=new H,Ph=new ee,ds=new bs,gr=new Nn,ma=new H,Lh=new H,Sl=class extends Se{constructor(t=new he,e=new As){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Xr.fromBufferAttribute(e,i-1),qr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xr.distanceTo(qr);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;Ph.copy(i).invert(),ds.copy(t.ray).applyMatrix4(Ph);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){let m=h.getX(_),v=h.getX(_+1),x=xr(this,t,ds,l,m,v);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(d),m=xr(this,t,ds,l,_,p);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){let m=xr(this,t,ds,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=xr(this,t,ds,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Xr.fromBufferAttribute(o,i),qr.fromBufferAttribute(o,r),e.distanceSqToSegment(Xr,qr,ma,Lh)>n)return;ma.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:Lh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Dh=new H,Uh=new H,Yr=class extends Sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Dh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dh.distanceTo(Uh);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rs=class extends cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nh=new ee,wl=new bs,_r=new Nn,yr=new H,Zr=class extends Se{constructor(t=new he,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;Nh.copy(i).invert(),wl.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let p=c.getX(g);yr.fromBufferAttribute(u,p),Oh(yr,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)yr.fromBufferAttribute(u,g),Oh(yr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oh(s,t,e,n,i,r,o){let a=wl.distanceSqToPoint(s);if(a<e){let l=new H;wl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ae=class extends He{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new bt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,i=[],r=[],o=[],a=new H,l=new ee;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Pe(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends Qe{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},El=class extends Cs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var vr=new H,ga=new rc,xa=new rc,_a=new rc,Tl=class extends Qe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(vr.subVectors(i[0],i[1]).add(i[0]),c=vr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(vr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ga.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),xa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),_a.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),_a.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ga.calc(l),xa.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function kg(s,t){let e=1-s;return e*e*t}function Hg(s,t){return 2*(1-s)*s*t}function Vg(s,t){return s*s*t}function ys(s,t,e,n){return kg(s,t)+Hg(s,e)+Vg(s,n)}function Gg(s,t){let e=1-s;return e*e*e*t}function Wg(s,t){let e=1-s;return 3*e*e*s*t}function Xg(s,t){return 3*(1-s)*s*s*t}function qg(s,t){return s*s*s*t}function vs(s,t,e,n,i){return Gg(s,t)+Wg(s,e)+Xg(s,n)+qg(s,i)}var $r=class extends Qe{constructor(t=new bt,e=new bt,n=new bt,i=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new bt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,i.x,r.x,o.x,a.x),vs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Al=class extends Qe{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,i.x,r.x,o.x,a.x),vs(t,i.y,r.y,o.y,a.y),vs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jr=class extends Qe{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rl=class extends Qe{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends Qe{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ys(t,i.x,r.x,o.x),ys(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cl=class extends Qe{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ys(t,i.x,r.x,o.x),ys(t,i.y,r.y,o.y),ys(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Fh(a,l.x,c.x,h.x,u.x),Fh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new bt().fromArray(i))}return this}},Il=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:Tl,CubicBezierCurve:$r,CubicBezierCurve3:Al,EllipseCurve:Cs,LineCurve:Jr,LineCurve3:Rl,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:Cl,SplineCurve:jr}),Pl=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Il[i.type]().fromJSON(i))}return this}},Qr=class extends Pl{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Jr(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Kr(this.currentPoint.clone(),new bt(t,e),new bt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new $r(this.currentPoint.clone(),new bt(t,e),new bt(n,i),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Cs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Ye=class s extends he{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],p=n/2,m=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function v(){let y=new H,T=new H,S=0,E=(e-t)/n;for(let A=0;A<=r;A++){let b=[],M=A/r,I=M*(e-t)+t;for(let N=0;N<=i;N++){let D=N/i,O=D*l+a,V=Math.sin(O),L=Math.cos(O);T.x=I*V,T.y=-M*n+p,T.z=I*L,u.push(T.x,T.y,T.z),y.set(V,E,L).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-M),b.push(g++)}_.push(b)}for(let A=0;A<i;A++)for(let b=0;b<r;b++){let M=_[b][A],I=_[b+1][A],N=_[b+1][A+1],D=_[b][A+1];(t>0||b!==0)&&(h.push(M,I,D),S+=3),(e>0||b!==r-1)&&(h.push(I,N,D),S+=3)}c.addGroup(m,S,0),m+=S}function x(y){let T=g,S=new bt,E=new H,A=0,b=y===!0?t:e,M=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*M,0),f.push(0,M,0),d.push(.5,.5),g++;let I=g;for(let N=0;N<=i;N++){let O=N/i*l+a,V=Math.cos(O),L=Math.sin(O);E.x=b*L,E.y=p*M,E.z=b*V,u.push(E.x,E.y,E.z),f.push(0,M,0),S.x=V*.5+.5,S.y=L*.5*M+.5,d.push(S.x,S.y),g++}for(let N=0;N<i;N++){let D=T+N,O=I+N;y===!0?h.push(O,O+1,D):h.push(O+1,O,D),A+=3}c.addGroup(m,A,y===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},to=class s extends Ye{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ll=class s extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new H,y=new H,T=new H;for(let S=0;S<e.length;S+=3)d(e[S+0],x),d(e[S+1],y),d(e[S+2],T),l(x,y,T,v)}function l(v,x,y,T){let S=T+1,E=[];for(let A=0;A<=S;A++){E[A]=[];let b=v.clone().lerp(y,A/S),M=x.clone().lerp(y,A/S),I=S-A;for(let N=0;N<=I;N++)N===0&&A===S?E[A][N]=b:E[A][N]=b.clone().lerp(M,N/I)}for(let A=0;A<S;A++)for(let b=0;b<2*(S-A)-1;b++){let M=Math.floor(b/2);b%2===0?(f(E[A][M+1]),f(E[A+1][M]),f(E[A][M])):(f(E[A][M+1]),f(E[A+1][M+1]),f(E[A+1][M]))}}function c(v){let x=new H;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let v=new H;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let y=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(y,1-T)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],y=o[v+2],T=o[v+4],S=Math.max(x,y,T),E=Math.min(x,y,T);S>.9&&E<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,x){let y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let v=new H,x=new H,y=new H,T=new H,S=new bt,E=new bt,A=new bt;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),S.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),T.copy(v).add(x).add(y).divideScalar(3);let I=p(T);_(S,M+0,v,I),_(E,M+2,x,I),_(A,M+4,y,I)}}function _(v,x,y,T){T<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Is=class extends Qr{constructor(t){super(t),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Qr().fromJSON(i))}return this}},Yg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=uu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=jg(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ps(r,o,e,a,l,d,0),o}};function uu(s,t,e,n,i){let r,o;if(i===cx(s,t,e,n)>0)for(r=t;r<e;r+=n)o=zh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=zh(r,s[r],s[r+1],o);return o&&mo(o,o.next)&&(Ds(o),o=o.next),o}function ui(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(mo(e,e.next)||ye(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ix(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?$g(s,n,i,r):Zg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ds(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Jg(ui(s),t,e),Ps(s,t,e,n,i,r,2)):o===2&&Kg(s,t,e,n,i,r):Ps(ui(s),t,e,n,i,r,1);break}}}function Zg(s){let t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Fi(i,a,r,l,o,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ye(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Dl(d,g,t,e,n),v=Dl(_,p,t,e,n),x=s.prevZ,y=s.nextZ;for(;x&&x.z>=m&&y&&y.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Fi(a,h,l,u,c,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Fi(a,h,l,u,c,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Fi(a,h,l,u,c,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Fi(a,h,l,u,c,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!mo(i,r)&&fu(i,n,n.next,r)&&Ls(i,r)&&Ls(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ds(n),Ds(n.next),n=s=r),n=n.next}while(n!==s);return ui(n)}function Kg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ox(o,a)){let l=du(o,a);o=ui(o,o.next),l=ui(l,l.next),Ps(o,t,e,n,i,r,0),Ps(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jg(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=uu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(rx(c));for(i.sort(Qg),r=0;r<i.length;r++)e=tx(i[r],e);return e}function Qg(s,t){return s.x-t.x}function tx(s,t){let e=ex(s,t);if(!e)return t;let n=du(e,s);return ui(n,n.next),ui(e,e.next)}function ex(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Fi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ls(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&nx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function nx(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function ix(s,t,e,n){let i=s;do i.z===0&&(i.z=Dl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sx(i)}function sx(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Dl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function rx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Fi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ox(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ax(s,t)&&(Ls(s,t)&&Ls(t,s)&&lx(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||mo(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function mo(s,t){return s.x===t.x&&s.y===t.y}function fu(s,t,e,n){let i=br(ye(s,t,e)),r=br(ye(s,t,n)),o=br(ye(e,n,s)),a=br(ye(e,n,t));return!!(i!==r&&o!==a||i===0&&Mr(s,e,t)||r===0&&Mr(s,n,t)||o===0&&Mr(e,s,n)||a===0&&Mr(e,t,n))}function Mr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function br(s){return s>0?1:s<0?-1:0}function ax(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ls(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function lx(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function du(s,t){let e=new Ul(s.i,s.x,s.y),n=new Ul(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zh(s,t,e,n){let i=new Ul(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ds(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ul(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var xn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Bh(t),kh(n,t);let o=t.length;e.forEach(Bh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,kh(n,e[l]);let a=Yg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Bh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function kh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var eo=class s extends he{constructor(t=new Is([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:hx,x,y=!1,T,S,E,A;m&&(x=m.getSpacedPoints(h),y=!0,f=!1,T=m.computeFrenetFrames(h,!1),S=new H,E=new H,A=new H),f||(p=0,d=0,g=0,_=0);let b=a.extractPoints(c),M=b.shape,I=b.holes;if(!xn.isClockWise(M)){M=M.reverse();for(let j=0,nt=I.length;j<nt;j++){let P=I[j];xn.isClockWise(P)&&(I[j]=P.reverse())}}let D=xn.triangulateShape(M,I),O=M;for(let j=0,nt=I.length;j<nt;j++){let P=I[j];M=M.concat(P)}function V(j,nt,P){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(nt,P)}let L=M.length,W=D.length;function z(j,nt,P){let dt,rt,at,mt=j.x-nt.x,ot=j.y-nt.y,lt=P.x-j.x,R=P.y-j.y,w=mt*mt+ot*ot,K=mt*R-ot*lt;if(Math.abs(K)>Number.EPSILON){let et=Math.sqrt(w),st=Math.sqrt(lt*lt+R*R),J=nt.x-ot/et,Mt=nt.y+mt/et,yt=P.x-R/st,St=P.y+lt/st,Bt=((yt-J)*R-(St-Mt)*lt)/(mt*R-ot*lt);dt=J+mt*Bt-j.x,rt=Mt+ot*Bt-j.y;let vt=dt*dt+rt*rt;if(vt<=2)return new bt(dt,rt);at=Math.sqrt(vt/2)}else{let et=!1;mt>Number.EPSILON?lt>Number.EPSILON&&(et=!0):mt<-Number.EPSILON?lt<-Number.EPSILON&&(et=!0):Math.sign(ot)===Math.sign(R)&&(et=!0),et?(dt=-ot,rt=mt,at=Math.sqrt(w)):(dt=mt,rt=ot,at=Math.sqrt(w/2))}return new bt(dt/at,rt/at)}let G=[];for(let j=0,nt=O.length,P=nt-1,dt=j+1;j<nt;j++,P++,dt++)P===nt&&(P=0),dt===nt&&(dt=0),G[j]=z(O[j],O[P],O[dt]);let F=[],Z,X=G.concat();for(let j=0,nt=I.length;j<nt;j++){let P=I[j];Z=[];for(let dt=0,rt=P.length,at=rt-1,mt=dt+1;dt<rt;dt++,at++,mt++)at===rt&&(at=0),mt===rt&&(mt=0),Z[dt]=z(P[dt],P[at],P[mt]);F.push(Z),X=X.concat(Z)}for(let j=0;j<p;j++){let nt=j/p,P=d*Math.cos(nt*Math.PI/2),dt=g*Math.sin(nt*Math.PI/2)+_;for(let rt=0,at=O.length;rt<at;rt++){let mt=V(O[rt],G[rt],dt);Y(mt.x,mt.y,-P)}for(let rt=0,at=I.length;rt<at;rt++){let mt=I[rt];Z=F[rt];for(let ot=0,lt=mt.length;ot<lt;ot++){let R=V(mt[ot],Z[ot],dt);Y(R.x,R.y,-P)}}}let k=g+_;for(let j=0;j<L;j++){let nt=f?V(M[j],X[j],k):M[j];y?(E.copy(T.normals[0]).multiplyScalar(nt.x),S.copy(T.binormals[0]).multiplyScalar(nt.y),A.copy(x[0]).add(E).add(S),Y(A.x,A.y,A.z)):Y(nt.x,nt.y,0)}for(let j=1;j<=h;j++)for(let nt=0;nt<L;nt++){let P=f?V(M[nt],X[nt],k):M[nt];y?(E.copy(T.normals[j]).multiplyScalar(P.x),S.copy(T.binormals[j]).multiplyScalar(P.y),A.copy(x[j]).add(E).add(S),Y(A.x,A.y,A.z)):Y(P.x,P.y,u/h*j)}for(let j=p-1;j>=0;j--){let nt=j/p,P=d*Math.cos(nt*Math.PI/2),dt=g*Math.sin(nt*Math.PI/2)+_;for(let rt=0,at=O.length;rt<at;rt++){let mt=V(O[rt],G[rt],dt);Y(mt.x,mt.y,u+P)}for(let rt=0,at=I.length;rt<at;rt++){let mt=I[rt];Z=F[rt];for(let ot=0,lt=mt.length;ot<lt;ot++){let R=V(mt[ot],Z[ot],dt);y?Y(R.x,R.y+x[h-1].y,x[h-1].x+P):Y(R.x,R.y,u+P)}}}B(),q();function B(){let j=i.length/3;if(f){let nt=0,P=L*nt;for(let dt=0;dt<W;dt++){let rt=D[dt];ft(rt[2]+P,rt[1]+P,rt[0]+P)}nt=h+p*2,P=L*nt;for(let dt=0;dt<W;dt++){let rt=D[dt];ft(rt[0]+P,rt[1]+P,rt[2]+P)}}else{for(let nt=0;nt<W;nt++){let P=D[nt];ft(P[2],P[1],P[0])}for(let nt=0;nt<W;nt++){let P=D[nt];ft(P[0]+L*h,P[1]+L*h,P[2]+L*h)}}n.addGroup(j,i.length/3-j,0)}function q(){let j=i.length/3,nt=0;it(O,nt),nt+=O.length;for(let P=0,dt=I.length;P<dt;P++){let rt=I[P];it(rt,nt),nt+=rt.length}n.addGroup(j,i.length/3-j,1)}function it(j,nt){let P=j.length;for(;--P>=0;){let dt=P,rt=P-1;rt<0&&(rt=j.length-1);for(let at=0,mt=h+p*2;at<mt;at++){let ot=L*at,lt=L*(at+1),R=nt+dt+ot,w=nt+rt+ot,K=nt+rt+lt,et=nt+dt+lt;gt(R,w,K,et)}}}function Y(j,nt,P){l.push(j),l.push(nt),l.push(P)}function ft(j,nt,P){ut(j),ut(nt),ut(P);let dt=i.length/3,rt=v.generateTopUV(n,i,dt-3,dt-2,dt-1);xt(rt[0]),xt(rt[1]),xt(rt[2])}function gt(j,nt,P,dt){ut(j),ut(nt),ut(dt),ut(nt),ut(P),ut(dt);let rt=i.length/3,at=v.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);xt(at[0]),xt(at[1]),xt(at[3]),xt(at[1]),xt(at[2]),xt(at[3])}function ut(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function xt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ux(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Il[i.type]().fromJSON(i)),new s(n,t.options)}},hx={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new bt(r,o),new bt(a,l),new bt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-u),new bt(f,1-g),new bt(_,1-m)]:[new bt(a,1-l),new bt(h,1-u),new bt(d,1-g),new bt(p,1-m)]}};function ux(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var no=class s extends Ll{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var io=class s extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new H,f=new H,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let v=[],x=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let S=T/e;u.x=-t*Math.cos(i+S*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+S*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(S+y,1-x),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let x=h[m][v+1],y=h[m][v],T=h[m+1][v],S=h[m+1][v+1];(m!==0||o>0)&&d.push(x,y,S),(m!==n-1||l<Math.PI)&&d.push(y,T,S)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var so=class s extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new H,u=new H,f=new H;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var On=class extends cn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yt=class extends cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Sr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ji=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends ji{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:r=t,a=2*e-n;break;case Dc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=t,l=2*n-e;break;case Dc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[c+T]+x*o[l+T]+y*o[u+T];return r}},Ol=class extends ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Fl=class extends ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case sl:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&fx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=sl;var fi=class extends hn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Cr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends hn{};zl.prototype.ValueTypeName="color";var Bl=class extends hn{};Bl.prototype.ValueTypeName="number";var kl=class extends ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ve.slerpFlat(r,0,o,c-a,o,c,l);return r}},ro=class extends hn{InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends hn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Cr;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends hn{};Hl.prototype.ValueTypeName="vector";var Vl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},dx=new Vl,Gl=class{constructor(t){this.manager=t!==void 0?t:dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},oo=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ya=new ee,Hh=new H,Vh=new H,ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wl=class extends ao{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Zi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},lo=class extends Us{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xl=class extends ao{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oc="\\[\\]\\.:\\/",px=new RegExp("["+oc+"]","g"),ac="[^"+oc+"]",mx="[^"+oc.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",ac),xx=/(WCOD+)?/.source.replace("WCOD",mx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),vx=new RegExp("^"+gx+xx+_x+yx+"$"),Mx=["material","materials","bones","map"],ql=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(px,"")}static parseTrackName(t){let e=vx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=ql;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);var es=new Map;window.BDS_DATA=(s,t,e)=>{let n=es.get(s);n&&(es.delete(s),n.resolve({fmt:t,b64:e}))};function bx(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function Sx(s){let t=new DecompressionStream("gzip"),e=new Blob([s]).stream().pipeThrough(t);return await new Response(e).arrayBuffer()}function wx(s,t){return new Promise((e,n)=>{es.set(s,{resolve:e});let i=document.createElement("script");i.src=t,i.async=!0,i.onerror=()=>{es.delete(s),n(new Error("Impossibile caricare "+t))},i.onload=()=>{i.remove(),setTimeout(()=>{es.has(s)&&(es.delete(s),n(new Error("Dati mancanti in "+t)))},0)},document.head.appendChild(i)})}async function pi(s,t){let{fmt:e,b64:n}=await wx(s,t);if(e==="png"){let r=new Image;return r.src="data:image/png;base64,"+n,await r.decode(),r}let i=await Sx(bx(n));return e==="bin"?i:JSON.parse(new TextDecoder().decode(i))}var go=class{constructor(t){Object.assign(this,t)}toLatLon(t,e){return[this.lat0-e/this.kz,this.lon0+t/this.kx]}fromLatLon(t,e){return[(e-this.lon0)*this.kx,-(t-this.lat0)*this.kz]}};var xo=class{constructor(t,e,n){let i=t.height;this.nx=i.nx,this.nz=i.nz,this.step=i.step,this.x0=i.x0,this.z0=i.z0;let r=new Uint16Array(e);this.h=new Float32Array(r.length);for(let c=0;c<r.length;c++)this.h[c]=r[c]*i.scale;this.proj=t.proj;let o=t.landcover;this.lc=o,this.lcW=o.w,this.lcH=o.h,this.mpp=o.mpp;let a=document.createElement("canvas");a.width=o.w,a.height=o.h;let l=a.getContext("2d",{willReadFrequently:!0});l.drawImage(n,0,0),this.lcPixels=l.getImageData(0,0,o.w,o.h).data,this.lcCanvas=a,this.texture=new Ae(a),this.texture.colorSpace=me,this.texture.anisotropy=8,this.texture.wrapS=this.texture.wrapT=Cn,this.classCache=new Map,this.palette=Object.entries(o.palette).map(([c,h])=>({k:c,c:h})),this.palette.push({k:"default",c:o.default})}height(t,e){let n=(t-this.x0)/this.step,i=(e-this.z0)/this.step,r=Math.floor(n),o=Math.floor(i);r<0?r=0:r>this.nx-2&&(r=this.nx-2),o<0?o=0:o>this.nz-2&&(o=this.nz-2);let a=n-r,l=i-o;a=a<0?0:a>1?1:a,l=l<0?0:l>1?1:l;let c=o*this.nx+r,h=this.h;if(a+l<=1)return h[c]+(h[c+1]-h[c])*a+(h[c+this.nx]-h[c])*l;let u=h[c+this.nx+1];return u+(h[c+this.nx]-u)*(1-a)+(h[c+1]-u)*(1-l)}inside(t,e){return t>=this.x0&&e>=this.z0&&t<=this.x0+(this.nx-1)*this.step&&e<=this.z0+(this.nz-1)*this.step}landClass(t,e){let n=Math.floor((t-this.proj.xmin)/this.mpp),i=Math.floor((e-this.proj.zmin)/this.mpp);if(n<0||i<0||n>=this.lcW||i>=this.lcH)return"default";let r=(i*this.lcW+n)*4,o=this.lcPixels,a=o[r]<<16|o[r+1]<<8|o[r+2],l=this.classCache.get(a);if(l===void 0){let c=1e9;for(let h of this.palette){let u=(h.c[0]-o[r])**2+(h.c[1]-o[r+1])**2+(h.c[2]-o[r+2])**2;u<c&&(c=u,l=h.k)}this.classCache.set(a,l)}return l}isUrban(t,e){let n=this.landClass(t,e);return n==="residential"||n==="commercial"||n==="retail"||n==="industrial"||n==="parking"||n==="construction"}makeMaterial(t){let e=new Yt({map:this.texture}),n=this.proj;return e.onBeforeCompile=i=>{i.uniforms.detailMap={value:t},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D detailMap;`).replace("#include <map_fragment>",`#include <map_fragment>
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);`)},e}buildChunk(t,e,n,i,r,o=0){let a=Math.round(n/i)+1,l=new Float32Array(a*a*3),c=new Float32Array(a*a*2),h=this.proj.xmax-this.proj.xmin,u=this.proj.zmax-this.proj.zmin;for(let p=0;p<a;p++)for(let m=0;m<a;m++){let v=t+m*i,x=e+p*i,y=p*a+m;l[y*3]=v,l[y*3+1]=this.height(v,x)-o,l[y*3+2]=x,c[y*2]=(v-this.proj.xmin)/h,c[y*2+1]=1-(x-this.proj.zmin)/u}let f=new Uint32Array((a-1)*(a-1)*6),d=0;for(let p=0;p<a-1;p++)for(let m=0;m<a-1;m++){let v=p*a+m,x=v+1,y=v+a,T=y+1;f[d++]=v,f[d++]=y,f[d++]=x,f[d++]=x,f[d++]=y,f[d++]=T}let g=new he;g.setAttribute("position",new ge(l,3)),g.setAttribute("uv",new ge(c,2)),g.setIndex(new ge(f,1)),g.computeVertexNormals();let _=new qt(g,r);return _.receiveShadow=!0,_}};var ue=class{constructor(t=!0,e=!0){this.p=[],this.c=t?[]:null,this.u=e?[]:null,this.i=[],this.n=0}v(t,e,n,i=1,r=1,o=1,a=0,l=0){return this.p.push(t,e,n),this.c&&this.c.push(i,r,o),this.u&&this.u.push(a,l),this.n++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.i.length===0}build(){let t=new he;return t.setAttribute("position",new Qt(this.p,3)),this.c&&t.setAttribute("color",new Qt(this.c,3)),this.u&&t.setAttribute("uv",new Qt(this.u,2)),t.setIndex(this.n>65535?new Ji(this.i,1):new $i(this.i,1)),t.computeVertexNormals(),t.computeBoundingSphere(),t}mesh(t,e=!1){let n=new qt(this.build(),t);return n.castShadow=e,n.receiveShadow=!0,n}};function Ce(s){return s=s^61^s>>>16,s=s+(s<<3)|0,s^=s>>>4,s=Math.imul(s,668265261),s^=s>>>15,(s>>>0)/4294967296}function pu(s,t,e){let n=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let o=e[i][0],a=e[i][1],l=e[r][0],c=e[r][1];a>t!=c>t&&s<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Os(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Ae(i);return r.colorSpace=me,n&&(r.wrapS=r.wrapT=Jn),r.anisotropy=8,r}function mu(s=256){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createImageData(s,s),i=16,r=new Float32Array(i*i);for(let l=0;l<r.length;l++)r[l]=Math.random();let o=(l,c)=>{let h=l/s*i,u=c/s*i,f=Math.floor(h),d=Math.floor(u),g=h-f,_=u-d,p=(x,y)=>r[(y+i)%i*i+(x+i)%i],m=g*g*(3-2*g),v=_*_*(3-2*_);return(p(f,d)*(1-m)+p(f+1,d)*m)*(1-v)+(p(f,d+1)*(1-m)+p(f+1,d+1)*m)*v};for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=(l*s+c)*4;n.data[h]=140+Math.random()*115*.9,n.data[h+1]=o(c,l)*255,n.data[h+2]=128,n.data[h+3]=255}e.putImageData(n,0,0);let a=new Ae(t);return a.wrapS=a.wrapT=Jn,a.anisotropy=8,a}var Gt={MOTORWAY:0,TRUNK:1,PRIMARY:2,SECONDARY:3,TERTIARY:4,UNCLASSIFIED:5,RESIDENTIAL:6,LIVING:7,SERVICE:8,TRACK:9,PEDESTRIAN:10},Vt={ONEWAY:1,ROUNDABOUT:2,BRIDGE:4,TUNNEL:8,LINK:16,PRIVATE:32,UNPAVED:64,NOCAR:128,OVERPASS:256},jt={SIGNALS:1,STOP:2,GIVE_WAY:3,CROSSING:4,MINI_RB:5,LEVEL_CROSSING:6,BUMP:7,CROSSING_SIGNALS:10,TABLE:11,TURNING:12,JUNCTION:13},Ex=["Autostrada","Superstrada","Strada principale","Strada secondaria","Strada terziaria","Strada locale","Strada residenziale","Zona residenziale","Strada di servizio","Strada sterrata","Area pedonale"],_o=.18,jn=32,Tx=[3.75,3.6,3.5,3.3,3.1,2.9,2.8,2.6,2.5,2.5,3],Ax=[[.5,.5,.52],[.52,.52,.54],[.55,.55,.57],[.57,.57,.58],[.6,.6,.6],[.62,.62,.62],[.64,.64,.64],[.68,.66,.63],[.66,.66,.66],[.9,.85,.75],[1,1,1]],gu=1.6,Rx=.13,xu={through:[0,0],left:[1,0],right:[2,0],"left;through":[3,0],"right;through":[0,1],"left;right":[1,1],stop:[2,1,2],bike:[0,2],tri:[1,2]};function Cx(s){let t=xu[s];if(!t)return null;let e=(t[2]||1)/4;return[t[0]/4,1-(t[1]+1)/4,t[0]/4+e,1-t[1]/4]}var yo=class{constructor(t,e,n){this.terrain=e,this.names=t.names;let i=n.proj;this.xmin=i.xmin,this.zmin=i.zmin,this.xmax=i.xmax,this.zmax=i.zmax,this.tileSize=n.tile;let r=t.wayHead||8,o=t.nodes.length/2,a=new Array(o),l=new Array(o),c=new Array(o).fill(0),h=0,u=0;for(let p=0;p<o;p++)h+=t.nodes[p*2],u+=t.nodes[p*2+1],a[p]=h/10,l[p]=u/10;for(let p=0;p<t.dh.length;p+=2)c[t.dh[p]]=t.dh[p+1]/10;this.ways=t.ways.map(p=>{let m=r>8,v={name:this.names[p[0]],ref:this.names[p[1]],cls:p[2],flags:p[3],lanes:p[4],speed:p[5],layer:p[6],widthTag:p[7]/10,surf:m?p[8]:0,sw:m?p[9]:0,lit:m?p[10]:0,lf:m?p[11]:0,lb:m?p[12]:0,turnF:m?this.names[p[13]]:"",turnB:m?this.names[p[14]]:"",dest:m?this.names[p[15]]:"",nodes:p.slice(r)};return v.oneway=!!(v.flags&Vt.ONEWAY),v.drivable=!(v.flags&Vt.NOCAR),this.layout(v),v}),this.smooth(a,l,c);let f=a.length;this.nx=Float32Array.from(a),this.nz=Float32Array.from(l),this.dh=Float32Array.from(c),this.nodeCount=f,this.ntag=new Uint8Array(f),this.ndir=new Uint8Array(f);let d=r>8?3:2;for(let p=0;p<t.ntags.length;p+=d)this.ntag[t.ntags[p]]=t.ntags[p+1],d===3&&(this.ndir[t.ntags[p]]=t.ntags[p+2]);this.junctionNames=new Map;for(let p=0;p<(t.mj||[]).length;p+=3)this.junctionNames.set(t.mj[p],{name:this.names[t.mj[p+1]],ref:this.names[t.mj[p+2]]});for(let p of this.ways){p.nodes=Int32Array.from(p.nodes);let m=p.nodes.length;p.cum=new Float32Array(m);for(let v=1;v<m;v++){let x=p.nodes[v-1],y=p.nodes[v];p.cum[v]=p.cum[v-1]+Math.hypot(this.nx[y]-this.nx[x],this.nz[y]-this.nz[x])}if(p.len=p.cum[m-1],p.abs=!!(p.flags&(Vt.BRIDGE|Vt.TUNNEL)),p.abs){let v=p.nodes[0],x=p.nodes[m-1];p.h0=e.height(this.nx[v],this.nz[v])+this.dh[v],p.h1=e.height(this.nx[x],this.nz[x])+this.dh[x]}}for(let p of this.ways){if(p.speed>0){p.limit=p.speed,p.limitMapped=!0;continue}let m=this.pointAt(p,p.len/2),v=e.isUrban(m[0],m[1]),x=p.cls,y;x===0?y=p.flags&Vt.LINK?80:130:x===1?y=p.flags&Vt.LINK?60:v?70:110:x<=4?y=p.flags&Vt.LINK||v?50:90:x===5?y=v?50:70:x===6?y=50:y=30,p.flags&Vt.ROUNDABOUT&&(y=Math.min(y,50)),p.limit=y,p.limitMapped=!1}let g=new Int32Array(f+1);this.ways.forEach(p=>{for(let m of p.nodes)g[m+1]++});for(let p=0;p<f;p++)g[p+1]+=g[p];this.adjStart=g,this.adjWay=new Int32Array(g[f]),this.adjPos=new Int32Array(g[f]);let _=g.slice(0,f);this.ways.forEach((p,m)=>{for(let v=0;v<p.nodes.length;v++){let x=p.nodes[v],y=_[x]++;this.adjWay[y]=m,this.adjPos[y]=v}}),this.degree=new Uint8Array(f),this.degMain=new Uint8Array(f),this.w1=new Float32Array(f),this.w2=new Float32Array(f),this.m1=new Float32Array(f),this.m2=new Float32Array(f),this.onRb=new Uint8Array(f),this.ways.forEach(p=>{let m=p.cls<=Gt.LIVING&&p.drivable;for(let v=0;v<p.nodes.length;v++){let x=p.nodes[v],y=(v>0?1:0)+(v<p.nodes.length-1?1:0);this.degree[x]+=y,m&&(this.degMain[x]+=y),p.width>this.w1[x]?(this.w2[x]=this.w1[x],this.w1[x]=p.width):p.width>this.w2[x]&&(this.w2[x]=p.width),m&&(p.width>this.m1[x]?(this.m2[x]=this.m1[x],this.m1[x]=p.width):p.width>this.m2[x]&&(this.m2[x]=p.width)),p.flags&Vt.ROUNDABOUT&&(this.onRb[x]=1)}}),this.grid=new Map,this.tileSegs=new Map,this.ways.forEach((p,m)=>{let v=p.width/2+1;for(let x=0;x<p.nodes.length-1;x++){let y=p.nodes[x],T=p.nodes[x+1],S=this.nx[y],E=this.nz[y],A=this.nx[T],b=this.nz[T],M=m*16384+x,I=Math.floor((Math.min(S,A)-v-this.xmin)/jn),N=Math.floor((Math.max(S,A)+v-this.xmin)/jn),D=Math.floor((Math.min(E,b)-v-this.zmin)/jn),O=Math.floor((Math.max(E,b)+v-this.zmin)/jn);for(let W=D;W<=O;W++)for(let z=I;z<=N;z++){let G=W*4096+z,F=this.grid.get(G);F||this.grid.set(G,F=[]),F.push(M)}let V=this.tileKey((S+A)/2,(E+b)/2),L=this.tileSegs.get(V);L||this.tileSegs.set(V,L=[]),L.push(M)}}),this.rails=t.rails.map(p=>({p:p.p,bridge:p.b,tunnel:p.t,name:p.n})),this.tileRails=new Map,this.rails.forEach((p,m)=>{for(let v=0;v<p.p.length-1;v++){let x=this.tileKey((p.p[v][0]+p.p[v+1][0])/2,(p.p[v][1]+p.p[v+1][1])/2),y=this.tileRails.get(x);y||this.tileRails.set(x,y=[]),y.push(m*16384+v)}if(p.bridge){let v=p.p[0],x=p.p[p.p.length-1];p.h0=e.height(v[0],v[1]),p.h1=e.height(x[0],x[1]),p.cum=[0];for(let y=1;y<p.p.length;y++)p.cum.push(p.cum[y-1]+Math.hypot(p.p[y][0]-p.p[y-1][0],p.p[y][1]-p.p[y-1][1]))}}),this.findRoundabouts(),this.buildStreetIndex(n)}tileKey(t,e){return Math.floor((e-this.zmin)/this.tileSize)*1e3+Math.floor((t-this.xmin)/this.tileSize)}layout(t){let e=t.cls,n=Tx[e],i,r,o=t.lanes||(t.oneway?e<=1&&!(t.flags&Vt.LINK)?2:1:2);t.oneway?(i=o,r=0):t.lf||t.lb?(i=t.lf||Math.max(1,o-t.lb),r=t.lb||Math.max(1,o-i)):o<=1?(i=.5,r=.5):(i=Math.ceil(o/2),r=Math.floor(o/2));let a;t.widthTag>2&&t.widthTag<30?(a=t.widthTag,n=Math.min(n+.5,a/(i+r))):e===Gt.TRACK?a=3.2:e===Gt.SERVICE?a=t.oneway?3.5:4.6:e===Gt.PEDESTRIAN?a=6:(t.flags&Vt.ROUNDABOUT&&!t.lanes&&(i=e<=3?1.6:1.4),a=(i+r)*n,!t.oneway&&o<=1&&(a=Math.max(4.2,n*1.5)),t.oneway&&i===1&&(a=Math.max(a+.8,4.2)),e<=1?a+=1.8:e<=3&&(a+=.8)),(i+r)*n>a&&(n=a/(i+r)),t.width=a,t.lw=n,t.nF=i,t.nB=r,t.sh=(a-(i+r)*n)/2,t.cOff=-a/2+t.sh+r*n}laneCenter(t,e=1){return t.oneway?t.nF>=2?-t.width/2+t.sh+t.lw*(Math.floor(t.nF)-.5):0:t.nF<1?t.width/4:e>0?t.cOff+t.lw*(t.nF-.5):t.lw*(t.nB-.5)-t.cOff}smooth(t,e,n){let i=t.length,r=new Uint8Array(i),o=new Map;this.ways.forEach((c,h)=>{let u=c.nodes;for(let f=0;f<u.length;f++)r[u[f]]+=(f>0?1:0)+(f<u.length-1?1:0);for(let f of[0,u.length-1]){let d=o.get(u[f]);d||o.set(u[f],d=[]),d.push([h,f])}});let a=(c,h)=>{let u=this.ways[c],f=u.nodes,d=f[h];if(f[0]===f[f.length-1]&&f.length>3)return h===0?f[f.length-2]:f[1];if(r[d]!==2)return-1;for(let[g,_]of o.get(d)||[]){if(g===c)continue;let p=this.ways[g].nodes;return _===0?p[1]:p[p.length-2]}return-1},l=(c,h)=>{let u=this.ways[c].nodes,f=u[h],d=h>0?u[h-1]:a(c,h),g=h<u.length-1?u[h+1]:a(c,h),_=0,p=0,m=0,v=0,x=0;if(d>=0){let E=Math.hypot(t[f]-t[d],e[f]-e[d])||1;_=(t[f]-t[d])/E,p=(e[f]-e[d])/E}if(g>=0){let E=Math.hypot(t[g]-t[f],e[g]-e[f])||1;m=(t[g]-t[f])/E,v=(e[g]-e[f])/E}d>=0&&g>=0&&(x=Math.acos(Math.max(-1,Math.min(1,_*m+p*v))));let y=_+m,T=p+v,S=Math.hypot(y,T);return S<1e-6?null:[y/S,T/S,x]};this.ways.forEach((c,h)=>{let u=c.nodes;if(u.length<2)return;let f=[u[0]],d=l(h,0);for(let g=0;g<u.length-1;g++){let _=u[g],p=u[g+1],m=l(h,g+1),v=t[p]-t[_],x=e[p]-e[_],y=Math.hypot(v,x);if(y>3&&d&&m){let T=v/y,S=x/y,E=Math.acos(Math.max(-1,Math.min(1,d[0]*T+d[1]*S))),A=Math.acos(Math.max(-1,Math.min(1,m[0]*T+m[1]*S))),b=Math.max(E,A);if(b>.03&&b<1.1){let M=y*b/4,I=Math.min(10,Math.ceil(Math.sqrt(M/.04)));if(I>=2){let N=d[2]>.6?Math.min(y,7):y,D=m[2]>.6?Math.min(y,7):y;for(let O=1;O<I;O++){let V=O/I,L=V*V,W=L*V,z=2*W-3*L+1,G=W-2*L+V,F=-2*W+3*L,Z=W-L;t.push(z*t[_]+G*N*d[0]+F*t[p]+Z*D*m[0]),e.push(z*e[_]+G*N*d[1]+F*e[p]+Z*D*m[1]),n.push(n[_]+(n[p]-n[_])*V),f.push(t.length-1)}}}}f.push(p),d=m}c.nodes=f})}pointAt(t,e){let n=0;for(;n<t.nodes.length-2&&t.cum[n+1]<e;)n++;let i=t.nodes[n],r=t.nodes[n+1],o=t.cum[n+1]-t.cum[n]||1,a=Math.min(1,Math.max(0,(e-t.cum[n])/o));return[this.nx[i]+(this.nx[r]-this.nx[i])*a,this.nz[i]+(this.nz[r]-this.nz[i])*a,n,a]}heightOn(t,e,n,i,r){let o=this.ways[t];if(o.abs){let c=o.cum[e]+n*(o.cum[e+1]-o.cum[e]);return o.h0+(o.h1-o.h0)*(o.len>0?c/o.len:0)+_o}let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(i,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+_o}segmentsNear(t,e,n,i){let r=Math.floor((t-n-this.xmin)/jn),o=Math.floor((t+n-this.xmin)/jn),a=Math.floor((e-n-this.zmin)/jn),l=Math.floor((e+n-this.zmin)/jn),c=this._seen||(this._seen=new Set);c.clear();for(let h=a;h<=l;h++)for(let u=r;u<=o;u++){let f=this.grid.get(h*4096+u);if(f)for(let d of f)c.has(d)||(c.add(d),i(Math.floor(d/16384),d%16384))}}projectOnSeg(t,e,n,i){let r=this.ways[t],o=r.nodes[e],a=r.nodes[e+1],l=this.nx[o],c=this.nz[o],h=this.nx[a]-l,u=this.nz[a]-c,f=h*h+u*u||1e-9,d=((n-l)*h+(i-c)*u)/f;d=d<0?0:d>1?1:d;let g=l+h*d,_=c+u*d;return{t:d,px:g,pz:_,d:Math.hypot(n-g,i-_),dx:h,dz:u}}surfaceAt(t,e,n=1e9){let i=null,r=-1e9;this.segmentsNear(t,e,8,(a,l)=>{let c=this.ways[a],h=this.projectOnSeg(a,l,t,e);if(h.d>c.width/2+.35)return;let u=this.heightOn(a,l,h.t,t,e);u<=n+1.3&&(u>r+.01||Math.abs(u-r)<=.01&&i&&h.d<i.d)&&(r=u,i={wi:a,k:l,t:h.t,d:h.d})});let o=this.terrain.height(t,e);return i&&r>=o-.6?{h:r,road:i}:i&&o>n+1.3?{h:r,road:i}:{h:o,road:null}}nearest(t,e,n=40,i=null){let r=null;return this.segmentsNear(t,e,n,(o,a)=>{let l=this.ways[o];if(i&&!i(l))return;let c=this.projectOnSeg(o,a,t,e);c.d<=n&&(!r||c.d<r.d)&&(r={wi:o,k:a,t:c.t,d:c.d,px:c.px,pz:c.pz,dx:c.dx,dz:c.dz})}),r}displayName(t){return t.name?t.ref?`${t.name} (${t.ref})`:t.name:t.ref?t.ref:Ex[t.cls]}findRoundabouts(){let t=new Map,e=o=>{for(;t.get(o)!==o;)t.set(o,t.get(t.get(o))),o=t.get(o);return o},n=(o,a)=>{o=e(o),a=e(a),o!==a&&t.set(o,a)};this.ways.forEach(o=>{if(o.flags&Vt.ROUNDABOUT){for(let a of o.nodes)t.has(a)||t.set(a,a);for(let a=1;a<o.nodes.length;a++)n(o.nodes[a-1],o.nodes[a])}});let i=new Map;for(let o of t.keys()){let a=e(o);i.has(a)||i.set(a,[]),i.get(a).push(o)}let r=new Map;this.ways.forEach(o=>{if(o.flags&Vt.ROUNDABOUT)for(let a of o.nodes)r.set(a,Math.max(r.get(a)||0,o.width))}),this.roundabouts=[];for(let o of i.values()){if(o.length<4)continue;let a=0,l=0;for(let g of o)a+=this.nx[g],l+=this.nz[g];a/=o.length,l/=o.length;let c=1e9,h=0,u=0,f=0;for(let g of o){let _=Math.hypot(this.nx[g]-a,this.nz[g]-l);c=Math.min(c,_),h=Math.max(h,_),u=Math.max(u,r.get(g)),f+=this.dh[g]}if(h>c*1.8||h>120)continue;let d=c-u/2-.3;d<1.2||this.roundabouts.push({x:a,z:l,r:d,dh:f/o.length})}}buildStreetIndex(){this.streets=new Map,this.ways.forEach((t,e)=>{if(!t.name||!t.drivable)return;let[n,i]=this.pointAt(t,t.len/2),r=this.streets.get(t.name);r||this.streets.set(t.name,r=[]),r.push({wi:e,x:n,z:i,len:t.len})})}zones(t){if(t.zn)return t.zn;let e=t.nodes.length,n=(i,r,o,a)=>{let l=new Float32Array(e).fill(-1e9),c=new Float32Array(e),h=new Float32Array(e).fill(1e9),u=new Float32Array(e),f=_=>{let p=t.width>=i[_]-.01?r[_]:i[_];return p>0?p/2+a:0},d=-1e9,g=0;for(let _=0;_<e;_++){let p=t.nodes[_];if(o[p]>=3){let m=f(p);m>0&&(d=t.cum[_],g=m)}l[_]=d,c[_]=g}d=1e9,g=0;for(let _=e-1;_>=0;_--){let p=t.nodes[_];if(o[p]>=3){let m=f(p);m>0&&(d=t.cum[_],g=m)}h[_]=d,u[_]=g}return{pc:l,pr:c,nc:h,nr:u}};return t.zn={mark:n(this.m1,this.m2,this.degMain,2.2),walk:n(this.w1,this.w2,this.degree,.9)},t.zn}roundaboutEntries(t){let e=[],n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(a.flags&Vt.ROUNDABOUT||!a.drivable||a.cls>=Gt.SERVICE)continue;let l=a.nodes.length-1;o===l-1&&this.onRb[a.nodes[l]]&&!n.has(r*2)&&(n.add(r*2),e.push({wi:r,k:o,t:1,nd:a.nodes[l],from:a.nodes[l-1],dir:1})),o===0&&!a.oneway&&this.onRb[a.nodes[0]]&&!n.has(r*2+1)&&(n.add(r*2+1),e.push({wi:r,k:0,t:0,nd:a.nodes[0],from:a.nodes[1],dir:-1}))}return e}materials(){if(this._mats)return this._mats;let t=Os(256,256,(o,a,l)=>{o.fillStyle="#7a7a7a",o.fillRect(0,0,a,l);let c=o.getImageData(0,0,a,l);for(let h=0;h<c.data.length;h+=4){let u=104+Math.random()*64+(Math.random()<.03?50:0);c.data[h]=c.data[h+1]=c.data[h+2]=u}o.putImageData(c,0,0),o.globalAlpha=.08,o.strokeStyle="#000";for(let h=0;h<6;h++)o.lineWidth=1+Math.random()*3,o.beginPath(),o.moveTo(Math.random()*a,Math.random()*l),o.bezierCurveTo(Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l,Math.random()*a,Math.random()*l),o.stroke()}),e=Os(256,256,(o,a,l)=>{o.fillStyle="#5c564e",o.fillRect(0,0,a,l);let c=32;for(let h=0;h<l/c;h++)for(let u=-1;u<a/c;u++){let f=120+Math.random()*60,d=u*c+(h%2?c/2:0),g=h*c;o.fillStyle=`rgb(${f+12},${f+4},${f-8})`,o.beginPath(),o.roundRect(d+2,g+2,c-4,c-4,5),o.fill()}}),n=Os(128,128,(o,a,l)=>{o.fillStyle="#b9b6ae",o.fillRect(0,0,a,l);for(let c=0;c<900;c++)o.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,o.fillRect(Math.random()*a,Math.random()*l,3,3);o.strokeStyle="rgba(0,0,0,0.22)",o.lineWidth=2,o.strokeRect(0,0,a,l)}),i=Os(512,512,o=>{o.clearRect(0,0,512,512),o.fillStyle="#fff",o.strokeStyle="#fff";let a=(u,f)=>{let d=xu[u];o.save(),o.translate(d[0]*128,d[1]*128),f(),o.restore()},l=(u,f,d)=>{o.save(),o.translate(u,f),o.rotate(d),o.beginPath(),o.moveTo(0,-30),o.lineTo(26,12),o.lineTo(-26,12),o.closePath(),o.fill(),o.restore()},c=()=>{o.fillRect(56,44,16,80),l(64,34,0)},h=u=>{o.fillRect(56,70,16,54),o.fillRect(u>0?64:34,62,30,16),l(64+u*44,70,u*Math.PI/2)};a("through",c),a("left",()=>h(-1)),a("right",()=>h(1)),a("left;through",()=>{c(),o.fillRect(34,78,30,14),l(20,85,-Math.PI/2)}),a("right;through",()=>{c(),o.fillRect(64,78,30,14),l(108,85,Math.PI/2)}),a("left;right",()=>{o.fillRect(56,70,16,54),o.fillRect(30,62,68,16),l(20,70,-Math.PI/2),l(108,70,Math.PI/2)}),a("stop",()=>{o.font="bold 150px Arial",o.textAlign="center",o.textBaseline="middle",o.save(),o.translate(128,66),o.scale(.74,.85),o.fillText("STOP",0,0),o.restore()}),a("bike",()=>{o.lineWidth=7,o.beginPath(),o.arc(36,84,20,0,7),o.stroke(),o.beginPath(),o.arc(92,84,20,0,7),o.stroke(),o.beginPath(),o.moveTo(36,84),o.lineTo(56,50),o.lineTo(84,50),o.lineTo(92,84),o.moveTo(56,50),o.lineTo(66,84),o.lineTo(36,84),o.stroke()}),a("tri",()=>{o.beginPath(),o.moveTo(64,120),o.lineTo(20,20),o.lineTo(108,20),o.closePath(),o.fill()})},!1),r=(o,a,l)=>(o.polygonOffset=!0,o.polygonOffsetFactor=a,o.polygonOffsetUnits=l,o);return this._mats={road:r(new Yt({map:t,vertexColors:!0}),-2,-4),stone:r(new Yt({map:e,vertexColors:!0}),-2,-4),path:r(new Yt({map:t,vertexColors:!0}),-1,-2),walk:new Yt({map:n,vertexColors:!0,side:_e}),mark:r(new Yt({color:15921902,vertexColors:!0}),-4,-8),decal:r(new Yt({map:i,color:15921902,transparent:!0,alphaTest:.35,depthWrite:!1}),-5,-10),wall:new Yt({color:11052186,side:_e}),barrier:new Yt({vertexColors:!0,side:_e}),guard:new Yt({color:13159632,side:_e}),island:new Yt({vertexColors:!0})},this._mats}miter(t,e){let n=t.nodes.length,i=0,r=0;if(e>0){let l=t.nodes[e-1],c=t.nodes[e],h=this.nx[c]-this.nx[l],u=this.nz[c]-this.nz[l],f=Math.hypot(h,u)||1;i+=h/f,r+=u/f}if(e<n-1){let l=t.nodes[e],c=t.nodes[e+1],h=this.nx[c]-this.nx[l],u=this.nz[c]-this.nz[l],f=Math.hypot(h,u)||1;i+=h/f,r+=u/f}let o=Math.hypot(i,r)||1;i/=o,r/=o;let a=1;if(e>0&&e<n-1){let l=t.nodes[e],c=t.nodes[e+1],h=this.nx[c]-this.nx[l],u=this.nz[c]-this.nz[l],f=Math.hypot(h,u)||1,d=-r*(-u/f)+i*(h/f);a=1/Math.max(.5,d)}return[-r*a,i*a]}wayColor(t){return t.flags&Vt.NOCAR||t.surf===1?[1,1,1]:t.flags&Vt.UNPAVED?[.95,.82,.62]:Ax[t.cls]}edgeH(t,e,n,i,r){let o=this.ways[t];if(o.abs)return this.heightOn(t,e,n,i,r);let a=o.nodes[e],l=o.nodes[e+1];return this.terrain.height(i,r)+this.dh[a]+(this.dh[l]-this.dh[a])*n+_o}addDecal(t,e,n,i,r,o,a,l,c,h,u){let f=Cx(u);if(!f)return;let d=-l,g=a,_=[[-c/2,-h/2,f[0],f[1]],[c/2,-h/2,f[2],f[1]],[c/2,h/2,f[2],f[3]],[-c/2,h/2,f[0],f[3]]].map(([p,m,v,x])=>{let y=r+d*p+a*m,T=o+g*p+l*m;return t.v(y,this.edgeH(e,n,i,y,T)+.035,T,1,1,1,v,x)});t.quad(_[0],_[1],_[2],_[3])}buildTile(t){let e=new te,n=this.tileSegs.get(t)||[],i=this.materials(),r=new ue(!0,!0),o=new ue(!0,!0),a=new ue(!0,!1),l=new ue(!1,!1),c=new ue(!1,!1),h=new ue(!0,!0),u=new ue(!0,!0),f=this.terrain,d=5,g=new Set;for(let p of n){let m=Math.floor(p/16384),v=p%16384,x=this.ways[m],y=x.nodes[v],T=x.nodes[v+1],S=this.nx[y],E=this.nz[y],A=this.nx[T],b=this.nz[T],M=Math.hypot(A-S,b-E);if(M<.05)continue;let I=(A-S)/M,N=(b-E)/M,D=-N,O=I,V=this.miter(x,v),L=this.miter(x,v+1),W=x.width/2,z=Math.max(1,Math.ceil(M/d)),G=this.wayColor(x),F=x.surf===1||!!(x.flags&Vt.NOCAR),Z=F?o:r,X=F?.6:.2,k=x.abs||this.dh[y]>.3||this.dh[T]>.3,B=-1,q=-1,it=[];for(let Y=0;Y<=z;Y++){let ft=Y/z,gt=S+(A-S)*ft,ut=E+(b-E)*ft,xt=V[0]+(L[0]-V[0])*ft,j=V[1]+(L[1]-V[1])*ft,nt=gt-xt*W,P=ut-j*W,dt=gt+xt*W,rt=ut+j*W,at=this.edgeH(m,v,ft,nt,P),mt=this.edgeH(m,v,ft,dt,rt),ot=Z.v(nt,at,P,G[0],G[1],G[2],nt*X,P*X),lt=Z.v(dt,mt,rt,G[0],G[1],G[2],dt*X,rt*X);B>=0&&Z.quad(B,q,lt,ot),B=ot,q=lt,it.push([nt,at,P,dt,mt,rt,xt,j])}for(let[Y,ft]of[[0,y],[x.nodes.length-1,T]]){if(Y===0?v!==0:v!==x.nodes.length-2)continue;let gt=ft*2+(F?1:0);if(g.has(gt)||x.flags&Vt.ROUNDABOUT)continue;g.add(gt);let ut=this.nx[ft],xt=this.nz[ft],j=Y===0?0:1,nt=Z.v(ut,this.edgeH(m,v,j,ut,xt),xt,G[0],G[1],G[2],ut*X,xt*X),P=[];for(let dt=0;dt<14;dt++){let rt=dt/14*Math.PI*2,at=ut+Math.cos(rt)*W,mt=xt+Math.sin(rt)*W;P.push(Z.v(at,this.edgeH(m,v,j,at,mt),mt,G[0],G[1],G[2],at*X,mt*X))}for(let dt=0;dt<14;dt++)Z.tri(nt,P[(dt+1)%14],P[dt])}if(k){for(let Y=0;Y<2;Y++)for(let ft=0;ft<it.length-1;ft++){let gt=it[ft],ut=it[ft+1],xt=gt[Y*3],j=gt[Y*3+1],nt=gt[Y*3+2],P=ut[Y*3],dt=ut[Y*3+1],rt=ut[Y*3+2],at=f.height(xt,nt),mt=f.height(P,rt);if(j-at<.35&&dt-mt<.35)continue;let ot=x.abs?Math.max(at-1,j-1.4):at-.5,lt=x.abs?Math.max(mt-1,dt-1.4):mt-.5,R=l.v(xt,j,nt),w=l.v(P,dt,rt),K=l.v(P,lt,rt),et=l.v(xt,ot,nt);l.quad(R,w,K,et);let st=l.v(xt,j+1,nt),J=l.v(P,dt+1,rt),Mt=l.v(P,dt,rt),yt=l.v(xt,j,nt);l.quad(st,J,Mt,yt)}if(x.abs&&x.flags&Vt.BRIDGE)for(let Y=1;Y<it.length-1;Y+=4){let ft=it[Y],gt=(ft[0]+ft[3])/2,ut=(ft[2]+ft[5])/2,xt=(ft[1]+ft[4])/2,j=f.height(gt,ut);if(xt-j<3)continue;let nt=.6,P=[[-nt,-nt],[nt,-nt],[nt,nt],[-nt,nt]];for(let dt=0;dt<4;dt++){let[rt,at]=P[dt],[mt,ot]=P[(dt+1)%4],lt=l.v(gt+rt,xt-.5,ut+at),R=l.v(gt+mt,xt-.5,ut+ot),w=l.v(gt+mt,j-1,ut+ot),K=l.v(gt+rt,j-1,ut+at);l.quad(lt,R,w,K)}}}if(x.cls<=Gt.TRUNK&&!(x.flags&Vt.LINK)&&!k){let Y=this.zones(x).mark;for(let ft=0;ft<2;ft++)for(let gt=0;gt<it.length-1;gt++){let ut=x.cum[v]+gt/z*M,xt=x.cum[v]+(gt+1)/z*M;if(ut-Y.pc[v]<40||Y.nc[v+1]-xt<40)continue;let j=it[gt],nt=it[gt+1],P=ft?1:-1,dt=.4*P,rt=j[ft*3]+D*dt,at=j[ft*3+2]+O*dt,mt=j[ft*3+1],ot=nt[ft*3]+D*dt,lt=nt[ft*3+2]+O*dt,R=nt[ft*3+1],w=c.v(rt,mt+.85,at),K=c.v(ot,R+.85,lt),et=c.v(ot,R+.5,lt),st=c.v(rt,mt+.5,at);if(c.quad(w,K,et,st),gt%2===0){let J=c.v(rt,mt+.85,at),Mt=c.v(rt+I*.12,mt+.85,at+N*.12),yt=c.v(rt+I*.12,mt-.2,at+N*.12),St=c.v(rt,mt-.2,at);c.quad(J,Mt,yt,St)}}}this.buildSidewalk(h,m,v,it,z,M),this.buildMarkings(a,m,v)}let _=new ue(!0,!1);for(let p of this.roundabouts){if(this.tileKey(p.x,p.z)!==t)continue;let m=f.height(p.x,p.z)+p.dh+_o+.22,v=32,x=Math.max(.5,p.r-Math.min(1.6,p.r*.3)),y=_.v(p.x,m+.25+Math.min(1.2,p.r*.06),p.z,.3,.52,.2),S=[[p.r,m-.5,.86,.86,.83],[p.r,m,.86,.86,.83],[p.r-.25,m,.62,.55,.5],[x,m+.06,.62,.55,.5],[x,m+.25,.8,.8,.78],[Math.max(.2,x-.25),m+.25,.33,.56,.22]].map(([A,b,M,I,N])=>{let D=[];for(let O=0;O<v;O++){let V=O/v*Math.PI*2;D.push(_.v(p.x+Math.cos(V)*A,b,p.z+Math.sin(V)*A,M,I,N))}return D});for(let A=0;A<S.length-1;A++)for(let b=0;b<v;b++){let M=(b+1)%v;_.quad(S[A][b],S[A+1][b],S[A+1][M],S[A][M])}let E=S[S.length-1];for(let A=0;A<v;A++)_.tri(y,E[(A+1)%v],E[A])}return this.buildNodeMarks(t,a,r),this.buildLaneArrows(t,u),this.buildRoundaboutEntries(t,a),this.buildRails(t,r,l),r.empty||e.add(r.mesh(i.road)),o.empty||e.add(o.mesh(i.stone)),h.empty||e.add(h.mesh(i.walk)),a.empty||e.add(a.mesh(i.mark)),u.empty||e.add(u.mesh(i.decal)),l.empty||e.add(l.mesh(i.wall,!0)),c.empty||e.add(c.mesh(i.guard)),_.empty||e.add(_.mesh(i.island)),e}sidewalkSides(t,e,n){return!t.drivable||t.flags&Vt.TUNNEL?0:t.sw===1?3:t.sw===2?1:t.sw===3?2:t.sw===4||t.cls<Gt.PRIMARY||t.cls>Gt.RESIDENTIAL||t.flags&(Vt.LINK|Vt.ROUNDABOUT|Vt.UNPAVED)||t.limit>50?0:this.terrain.isUrban(e,n)?3:0}buildSidewalk(t,e,n,i,r,o){let a=this.ways[e],l=a.nodes[n],c=a.nodes[n+1],h=this.sidewalkSides(a,(this.nx[l]+this.nx[c])/2,(this.nz[l]+this.nz[c])/2);if(!h)return;let u=this.zones(a).walk,f=[.93,.92,.9],d=[.74,.73,.7];for(let g=0;g<2;g++){if(!(h&(g?2:1)))continue;let _=g?1:-1,p=null;for(let m=0;m<=r;m++){let v=a.cum[n]+m/r*o;if(v-u.pc[n]<u.pr[n]||u.nc[n+1]-v<u.nr[n+1]){p=null;continue}let x=i[m],y=m/r,T=x[g*3],S=x[g*3+1],E=x[g*3+2],A=T+x[6]*_*gu,b=E+x[7]*_*gu,M=this.edgeH(e,n,y,A,b),I=Math.max(S,M)+Rx,N=[t.v(T,S-.05,E,d[0],d[1],d[2],0,v*.5),t.v(T,I,E,d[0],d[1],d[2],.1,v*.5),t.v(T,I,E,f[0],f[1],f[2],0,v*.6),t.v(A,I,b,f[0],f[1],f[2],1,v*.6),t.v(A,I,b,d[0],d[1],d[2],0,v*.5),t.v(A,Math.min(M,this.terrain.height(A,b))-.4,b,d[0],d[1],d[2],.1,v*.5)];if(p)for(let D=0;D<6;D+=2)_>0?t.quad(p[D],p[D+1],N[D+1],N[D]):t.quad(p[D],N[D],N[D+1],p[D+1]);p=N}}}buildMarkings(t,e,n){let i=this.ways[e];if(i.cls>=Gt.SERVICE||!i.drivable||i.flags&Vt.UNPAVED||i.surf===1)return;let r=i.nodes[n],o=i.nodes[n+1],a=this.nx[r],l=this.nz[r],c=this.nx[o],h=this.nz[o],u=Math.hypot(c-a,h-l);if(u<.3)return;let f=(c-a)/u,d=(h-l)/u,g=this.miter(i,n),_=this.miter(i,n+1),p=i.width/2,m=this.zones(i).mark,v=i.cum[n],x=Math.max(0,m.pc[n]+m.pr[n]-v),y=Math.max(0,v+u-(m.nc[n+1]-m.nr[n+1]));if(x+y>=u)return;let T=[],S=i.limit<=50,E=i.flags&Vt.ROUNDABOUT;if(i.cls<=Gt.TERTIARY||E||i.width>=7){let b=Math.max(.3,i.sh*.85);T.push({off:-p+b,wdt:.15,dash:0},{off:p-b,wdt:.15,dash:0})}let A=S?[3,4.5]:[4.5,7.5];if(!E){if(!i.oneway&&i.nF>=1&&i.nB>=1&&i.width>=5.4){let b=(m.nc[n+1]-(v+u)<22||v-m.pc[n]<22)&&i.cls<=Gt.TERTIARY;i.nF+i.nB>=4?T.push({off:i.cOff-.14,wdt:.12,dash:0},{off:i.cOff+.14,wdt:.12,dash:0}):T.push({off:i.cOff,wdt:.15,dash:b?0:A});for(let M=1;M<i.nF;M++)T.push({off:i.cOff+i.lw*M,wdt:.12,dash:A});for(let M=1;M<i.nB;M++)T.push({off:i.cOff-i.lw*M,wdt:.12,dash:A})}else if(i.oneway&&i.nF>=2)for(let b=1;b<i.nF;b++)T.push({off:-p+i.sh+i.lw*b,wdt:.15,dash:[4.5,7.5]})}for(let b of T){let M=[];if(!b.dash)M.push([x,u-y]);else{let[I,N]=b.dash,D=I+N;for(let O=Math.floor(v/D)*D;O<v+u;O+=D){let V=Math.max(O-v,x),L=Math.min(O+I-v,u-y);L>V+.05&&M.push([V,L])}}for(let[I,N]of M){if(N-I<.05)continue;let D=Math.max(1,Math.ceil((N-I)/5)),O=-1,V=-1;for(let L=0;L<=D;L++){let W=I+(N-I)*L/D,z=W/u,G=g[0]+(_[0]-g[0])*z,F=g[1]+(_[1]-g[1])*z,Z=a+f*W+G*b.off,X=l+d*W+F*b.off,k=Z-G*b.wdt/2,B=X-F*b.wdt/2,q=Z+G*b.wdt/2,it=X+F*b.wdt/2,Y=t.v(k,this.edgeH(e,n,z,k,B)+.02,B,1,1,1),ft=t.v(q,this.edgeH(e,n,z,q,it)+.02,it,1,1,1);O>=0&&t.quad(O,V,ft,Y),O=Y,V=ft}}}}buildNodeMarks(t,e,n){let i=new Set,r=[jt.CROSSING,jt.CROSSING_SIGNALS,jt.BUMP,jt.TABLE,jt.MINI_RB,jt.TURNING];for(let o of this.tileSegs.get(t)||[]){let a=Math.floor(o/16384),l=o%16384,c=this.ways[a];if(c.drivable)for(let h of[l,l+1]){let u=c.nodes[h],f=this.ntag[u];if(!f||i.has(u)||!r.includes(f)||c.cls>=Gt.SERVICE&&f!==jt.TURNING)continue;i.add(u);let d=Math.min(h,c.nodes.length-2),g=c.nodes[d],_=c.nodes[d+1],p=this.nx[_]-this.nx[g],m=this.nz[_]-this.nz[g],v=Math.hypot(p,m)||1,x=p/v,y=m/v,T=-y,S=x,E=this.nx[u],A=this.nz[u],b=c.width/2,M=h===d?0:1,I=(N,D,O,V,L,W=.025)=>{let z=[[N,O],[D,O],[D,V],[N,V]].map(([G,F])=>{let Z=E+T*G+x*F,X=A+S*G+y*F;return e.v(Z,this.edgeH(a,d,M,Z,X)+W,X,L[0],L[1],L[2])});e.quad(z[0],z[1],z[2],z[3])};if(f===jt.CROSSING||f===jt.CROSSING_SIGNALS)for(let N=-b+.55;N<=b-.55;N+=1)I(N-.25,N+.25,-1.5,1.5,[1,1,1]);else if(f===jt.BUMP){let N=0;for(let D=-b+.2;D<b-.2;D+=.5,N++)I(D,Math.min(b-.2,D+.5),-.45,.45,N%2?[.12,.12,.12]:[1,.82,.1],.06)}else if(f===jt.TABLE){I(-b+.1,b-.1,-2.6,2.6,[.72,.36,.3],.05);for(let N=-b+.6;N<=b-.6;N+=1)I(N-.25,N+.25,-1.5,1.5,[1,1,1],.07)}else if(f===jt.MINI_RB){let N=this.edgeH(a,d,M,E,A)+.03,D=e.v(E,N+.08,A,1,1,1),O=[];for(let V=0;V<16;V++){let L=V/16*6.2832;O.push(e.v(E+Math.cos(L)*1.5,N,A+Math.sin(L)*1.5,1,1,1))}for(let V=0;V<16;V++)e.tri(D,O[(V+1)%16],O[V])}else if(f===jt.TURNING){let N=this.wayColor(c),D=Math.max(7,b+3),O=n.v(E,this.edgeH(a,d,M,E,A),A,N[0],N[1],N[2],E*.2,A*.2),V=[];for(let L=0;L<20;L++){let W=L/20*6.2832,z=E+Math.cos(W)*D,G=A+Math.sin(W)*D;V.push(n.v(z,this.edgeH(a,d,M,z,G),G,N[0],N[1],N[2],z*.2,G*.2))}for(let L=0;L<20;L++)n.tri(O,V[(L+1)%20],V[L])}}}}buildLaneArrows(t,e){let n=new Set;for(let i of this.tileSegs.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.ways[r];if(!(!a.turnF&&!a.turnB||!a.drivable))for(let l of[1,-1]){let c=l>0?a.turnF:a.turnB,h=r*2+(l>0?0:1);if(!c||n.has(h)||o!==(l>0?a.nodes.length-2:0))continue;n.add(h);let u=c.split("|"),d=(l>0?a.oneway?a.width-2*a.sh:a.nF*a.lw:a.nB*a.lw)/u.length;for(let g of a.len>70?[9,32]:[9]){if(g>a.len-4)continue;let[_,p,m,v]=this.pointAt(a,l>0?a.len-g:g),x=a.nodes[m],y=a.nodes[m+1],T=this.nx[y]-this.nx[x],S=this.nz[y]-this.nz[x],E=Math.hypot(T,S)||1;T=T/E*l,S=S/E*l;let A=-S,b=T,M=l>0?a.oneway?-a.width/2+a.sh:a.cOff:-a.cOff;u.forEach((I,N)=>{let D=new Set(I.split(";").map(V=>V.replace("slight_","").replace("sharp_","").replace("reverse","left")).filter(V=>V==="left"||V==="right"||V==="through"));if(!D.size)return;let O=M+d*(N+.5);this.addDecal(e,r,m,v,_+A*O,p+b*O,T,S,Math.min(1.5,d*.5),4.2,[...D].sort().join(";"))})}}}}buildRoundaboutEntries(t,e){for(let n of this.roundaboutEntries(t)){let i=this.ways[n.wi],r=this.nx[n.nd]-this.nx[n.from],o=this.nz[n.nd]-this.nz[n.from],a=Math.hypot(r,o)||1;r/=a,o/=a;let l=-o,c=r,h=this.w1[n.nd]/2+.5,u=this.nx[n.nd]-r*h,f=this.nz[n.nd]-o*h,d=i.oneway?-i.width/2+.3:(n.dir>0?i.cOff:-i.cOff)+.15,g=i.width/2-.3;for(let _=d;_+.5<=g;_+=.75){let p=[[_,-.3],[_+.5,-.3],[_+.25,.35]].map(([m,v])=>{let x=u+l*m-r*v,y=f+c*m-o*v;return e.v(x,this.edgeH(n.wi,n.k,n.t,x,y)+.03,y,1,1,1)});e.tri(p[0],p[1],p[2]),e.tri(p[0],p[2],p[1])}}}buildRails(t,e){let n=this.terrain;for(let i of this.tileRails.get(t)||[]){let r=Math.floor(i/16384),o=i%16384,a=this.rails[r],[l,c]=a.p[o],[h,u]=a.p[o+1],f=Math.hypot(h-l,u-c);if(f<.1)continue;let d=(h-l)/f,g=(u-c)/f,_=-g,p=d,m=Math.max(1,Math.ceil(f/6)),v=(x,y,T)=>{if(a.bridge&&a.cum){let S=a.cum[o]+T*f;return a.h0+(a.h1-a.h0)*S/(a.cum[a.cum.length-1]||1)+.25}return n.height(x,y)+.25};for(let[x,y,T]of[[0,3.4,!1],[-.72,.08,!0],[.72,.08,!0]]){let S=-1,E=-1;for(let A=0;A<=m;A++){let b=A/m,M=l+(h-l)*b+_*x,I=c+(u-c)*b+p*x,N=v(M,I,b)+(T?.16:0),D=M-_*y/2,O=I-p*y/2,V=M+_*y/2,L=I+p*y/2,W=T?[.35,.33,.32]:[.75,.68,.58],z=e.v(D,N,O,...W,D*.3,O*.3),G=e.v(V,N,L,...W,V*.3,L*.3);S>=0&&e.quad(S,E,G,z),S=z,E=G}}}}buildPaths(t){if(!t||!t.pa||!t.pa.length)return null;let e=this.terrain,n=new ue(!0,!0),i=[[.95,.93,.88],[.95,.5,.42],[.9,.78,.6],[.8,.8,.8],[.96,.95,.92]];for(let r of t.pa){let o=r[0],a=r[1]/10,l=r[2],c=[],h=0,u=0;for(let x=3;x<r.length;x+=2)h+=r[x],u+=r[x+1],c.push([h/10,u/10]);if(c.length<2)continue;let f=[],d=0;for(let x=0;x<c.length-1;x++){let y=Math.hypot(c[x+1][0]-c[x][0],c[x+1][1]-c[x][1]),T=Math.max(1,Math.ceil(y/6));for(let S=0;S<T;S++)f.push([c[x][0]+(c[x+1][0]-c[x][0])*S/T,c[x][1]+(c[x+1][1]-c[x][1])*S/T,d+y*S/T]);d+=y}f.push([c[c.length-1][0],c[c.length-1][1],d]);let g=i[o],_=e.height(f[0][0],f[0][1]),p=e.height(f[f.length-1][0],f[f.length-1][1]),m=-1,v=-1;for(let x=0;x<f.length;x++){let y=f[Math.min(f.length-1,x+1)],T=f[Math.max(0,x-1)],S=y[0]-T[0],E=y[1]-T[1],A=Math.hypot(S,E)||1;S/=A,E/=A;let b=-E,M=S,I=f[x][0],N=f[x][1],D=d>0?f[x][2]/d:0,O=I-b*a/2,V=N-M*a/2,L=I+b*a/2,W=N+M*a/2,z=l?_+(p-_)*D+Math.sin(Math.PI*D)*Math.min(5.5,d*.12)+.1:0,G=n.v(O,l?z:e.height(O,V)+.1,V,g[0],g[1],g[2],O*.3,V*.3),F=n.v(L,l?z:e.height(L,W)+.1,W,g[0],g[1],g[2],L*.3,W*.3);m>=0&&n.quad(m,v,F,G),m=G,v=F}}return n.empty?null:n.mesh(this.materials().path)}buildBarriers(t,e,n){if(!t||!t.ba||!t.ba.length)return null;let i=this.terrain,r=new ue(!0,!1),o=[{c:[.72,.68,.6],th:.3},{c:[.2,.36,.14],th:.9},{c:[.56,.54,.5],th:.5},{c:[.75,.77,.8],th:.08}];for(let a of t.ba){let l=o[a[0]],c=a[1]/10,h=[],u=0,f=0;for(let d=2;d<a.length;d+=2)u+=a[d],f+=a[d+1],h.push([u/10,f/10]);for(let d=0;d<h.length-1;d++){let[g,_]=h[d],[p,m]=h[d+1],v=Math.hypot(p-g,m-_);if(v<.2)continue;let x=-(m-_)/v*l.th/2,y=(p-g)/v*l.th/2,T=Math.max(1,Math.ceil(v/8));for(let S=0;S<T;S++){let E=S/T,A=(S+1)/T,b=g+(p-g)*E,M=_+(m-_)*E,I=g+(p-g)*A,N=_+(m-_)*A,D=i.height(b,M),O=i.height(I,N),V=a[0]===3?.45:-.3,L=l.c,W=[L[0]*.8,L[1]*.8,L[2]*.8],z=[[b-x,M-y,D],[I-x,N-y,O],[I+x,N+y,O],[b+x,M+y,D]],G=z.map(([F,Z,X])=>r.v(F,X+c,Z,L[0],L[1],L[2]));r.quad(G[0],G[1],G[2],G[3]);for(let[F,Z]of[[0,1],[2,3]]){let X=z[F],k=z[Z],B=r.v(X[0],X[2]+c,X[1],W[0],W[1],W[2]),q=r.v(k[0],k[2]+c,k[1],W[0],W[1],W[2]),it=r.v(k[0],k[2]+V,k[1],W[0],W[1],W[2]),Y=r.v(X[0],X[2]+V,X[1],W[0],W[1],W[2]);r.quad(B,q,it,Y)}}if(e&&a[0]!==3&&v>1.5){let S=Math.max(.4,l.th/2),E=-(m-_)/v*S,A=(p-g)/v*S;e.addPolygon(n,Float32Array.from([g-E,_-A,p-E,m-A,p+E,m+A,g+E,_+A]))}}}return r.empty?null:r.mesh(this.materials().barrier,!0)}};var _u=["#eadcbc","#e9cf9f","#dcab6e","#f1e8d6","#ddb7a2","#cdbb9f","#f0dc9e","#c4bcae","#e3c08e","#d9c7a6","#efe2c4","#c98f6a"],yu=["#c6c6c0","#a8aeb0","#d4cfc2","#b9b4a6","#9aa3a6","#cfd2cf"],vu=["#b8694a","#a9603f","#c27752","#9e5b43","#b5704f","#a46a52","#8f5d4c"],Mu=["#8d8a84","#7d7b77","#9a968e","#6f6e6a"],bu=new Ut;function Ix(){let e=()=>{let _=document.createElement("canvas");return _.width=_.height=512,_},n=e(),i=e(),r=e(),o=e(),a=e(),l=n.getContext("2d"),c=r.getContext("2d"),h=i.getContext("2d"),u=o.getContext("2d"),f=a.getContext("2d");for(let _ of[l,h,f])_.fillStyle="#ffffff",_.fillRect(0,0,512,512);for(let _ of[c,u])_.fillStyle="#000",_.fillRect(0,0,512,512);for(let _ of[l,h,f])for(let p=0;p<2500;p++)_.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,_.fillRect(Math.random()*512,Math.random()*512,3+Math.random()*8,3+Math.random()*8);let d=["#3f6b3a","#4d5f2f","#6b4a2b","#355e4e","#5a3d27"];for(let _=0;_<8;_++)for(let p=0;p<8;p++){let m=p*64,v=_*64,x=64*.34,y=64*.52,T=m+(64-x)/2,S=v+64*.22;l.fillStyle="#d8d2c4",l.fillRect(T-3,S-3,x+6,y+7),l.fillStyle="#2f3438",l.fillRect(T,S,x,y),l.fillStyle="#5c6a72",l.fillRect(T+2,S+2,x/2-3,y-4),l.fillRect(T+x/2+1,S+2,x/2-3,y-4);let E=Math.random(),A=d[(p*7+_*3)%d.length];l.fillStyle=A,E<.6?(l.fillRect(T-x/2-2,S,x/2,y),l.fillRect(T+x+2,S,x/2,y)):E<.85&&l.fillRect(T,S,x,y),l.fillStyle="rgba(0,0,0,0.25)";for(let b=0;b<6;b++)l.fillRect(T-x/2-2,S+b*y/6,x*2+4,1);if(E<.85||Math.random()<.3){let b=Math.random()<.35;c.fillStyle=b?Math.random()<.5?"#ffd890":"#fff0c0":"#000",E>=.6&&E<.85&&(c.fillStyle="#000"),c.fillRect(T,S,x,y)}h.fillStyle="rgba(0,0,0,0.08)",h.fillRect(m,v,2,64),_%2===0&&(h.fillStyle="#4b5a63",h.fillRect(m+3,v+64*.3,58,64*.3),u.fillStyle=Math.random()<.25?"#e8f0ff":"#000",u.fillRect(m+3,v+64*.3,58,64*.3))}let g=(_,p=!0)=>{let m=new Ae(_);return m.wrapS=m.wrapT=Jn,m.anisotropy=8,p&&(m.colorSpace=me),m};return{res:g(n),ind:g(i),plain:g(a),emiR:g(r),emiI:g(o)}}var vo=class{constructor(t){this.terrain=t;let e=Ix();this.mats={res:new Yt({map:e.res,vertexColors:!0,emissiveMap:e.emiR,emissive:16777215,emissiveIntensity:0}),ind:new Yt({map:e.ind,vertexColors:!0,emissiveMap:e.emiI,emissive:16777215,emissiveIntensity:0}),plain:new Yt({map:e.plain,vertexColors:!0}),roof:new Yt({vertexColors:!0,side:_e})}}setNight(t){this.mats.res.emissiveIntensity=t*.9,this.mats.ind.emissiveIntensity=t*.6}build(t,e,n){let i=this.terrain,r={res:new ue,ind:new ue,plain:new ue},o=new ue(!0,!1),a=t.s,l=[];for(let h of t.b){let u=h[0],f=h[1]/10,d=h[2]/10,g=h[3],_=h[4],p=a[h[5]],m=a[h[6]],v=a[h[7]],x=[],y=0,T=0;for(let k=8;k<h.length;k+=2)y+=h[k],T+=h[k+1],x.push(y/10,T/10);let S=x.length/2;if(S<3)continue;let E=0,A=0,b=0,M=1e9,I=-1e9;for(let k=0;k<S;k++){let B=(k+1)%S;E+=x[k*2]*x[B*2+1]-x[B*2]*x[k*2+1],A+=x[k*2],b+=x[k*2+1];let q=i.height(x[k*2],x[k*2+1]);M=Math.min(M,q),I=Math.max(I,q)}E=Math.abs(E/2),A/=S,b/=S;let N=Ce(Math.floor(x[0]*10)*7919+Math.floor(x[1]*10)),D=Ce(Math.floor(x[1]*10)*104729+17),O=u;if(O===0&&(O=E<45?6:E>1800?3:2),!(f>0))if(g>0)f=g*3.1+.6;else switch(O){case 1:f=6.2+N*2.5;break;case 2:f=E>500?11+N*7:7+N*4;break;case 3:f=7.5+N*4;break;case 4:f=7+N*5;break;case 5:f=13+Math.min(10,E/80);break;case 6:f=2.8+N*.8;break;case 7:f=10+N*4;break;case 8:f=28+N*12;break;case 9:f=6+N*2;break;default:f=4+N*3}let V=M-.6+d,L=(M+I)/2+f,W=O===3||O===4?"ind":O===5||O===6||O===8||O===9||O===10?"plain":"res",z;if(m&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(m))try{bu.set(m),z=bu.clone()}catch{z=null}z||(z=new Ut(W==="ind"?yu[Math.floor(D*yu.length)]:O===8||O===5?D<.5?"#d8c9a8":"#c9a77f":_u[Math.floor(D*_u.length)])),z.convertSRGBToLinear();let G=r[W],F=0;for(let k=0;k<S;k++){let B=(k+1)%S,q=x[k*2],it=x[k*2+1],Y=x[B*2],ft=x[B*2+1],gt=Math.hypot(Y-q,ft-it),ut=F/24,xt=(F+gt)/24,j=Math.max(1,Math.round(gt/3)),nt=ut+j/8,P=0,dt=(L-V)/24,rt=G.v(q,V,it,z.r,z.g,z.b,ut,dt),at=G.v(q,L,it,z.r,z.g,z.b,ut,P),mt=G.v(Y,L,ft,z.r,z.g,z.b,nt,P),ot=G.v(Y,V,ft,z.r,z.g,z.b,nt,dt);G.quad(rt,at,mt,ot),F+=gt}let Z,X=(O===1||O===2&&(E<1400||g<=4)||O===5||O===9||O===7&&E<900||O===6&&E>18)&&_!==1;if(v&&/^#?[0-9a-f]{6}$|^[a-z]+$/i.test(v))try{Z=new Ut(v)}catch{Z=null}Z||(Z=new Ut(X?vu[Math.floor(N*vu.length)]:Mu[Math.floor(N*Mu.length)])),Z.convertSRGBToLinear(),this.roof(o,x,S,L,X,Z,E,O,z,D),e&&e.addPolygon(n,Float32Array.from(x)),p&&(O===5||O===8||u===7)&&l.push({name:p,x:A,z:b,y:L+4})}let c=new te;for(let h of["res","ind","plain"])r[h].empty||c.add(r[h].mesh(this.mats[h],!0));return o.empty||c.add(o.mesh(this.mats.roof,!0)),{group:c,labels:l}}offsetRing(t,e,n){let i=new Array(e*2);for(let r=0;r<e;r++){let o=(r+e-1)%e,a=(r+1)%e,l=t[r*2]-t[o*2],c=t[r*2+1]-t[o*2+1],h=t[a*2]-t[r*2],u=t[a*2+1]-t[r*2+1],f=Math.hypot(l,c)||1,d=Math.hypot(h,u)||1;l/=f,c/=f,h/=d,u/=d;let g=-c,_=l,p=-u,m=h,v=Math.max(.35,1+g*p+_*m);i[r*2]=t[r*2]+n*(g+p)/v,i[r*2+1]=t[r*2+1]+n*(_+m)/v}if(n>0){let r=0;for(let o=0;o<e;o++){let a=(o+1)%e;r+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1];let l=t[a*2]-t[o*2],c=t[a*2+1]-t[o*2+1],h=i[a*2]-i[o*2],u=i[a*2+1]-i[o*2+1];if(l*h+c*u<=0)return null}if(r<=0)return null}return i}roof(t,e,n,i,r,o,a,l,c,h){let u=(x,y,T,S=o)=>{let E=y[0]-x[0],A=y[2]-x[2],b=T[0]-x[0],M=T[2]-x[2],I=A*b-E*M,N=t.v(x[0],x[1],x[2],S.r,S.g,S.b),D=t.v(y[0],y[1],y[2],S.r,S.g,S.b),O=t.v(T[0],T[1],T[2],S.r,S.g,S.b);I>=0?t.tri(N,D,O):t.tri(N,O,D)},f=(x,y,T,S,E)=>{u(x,y,T,E),u(x,T,S,E)},d=o.clone().multiplyScalar(.84),g=o.clone().multiplyScalar(1.06),_=.45,p=(x,y,T)=>{if(h>.55)return;let S=.3,E=1.1,A=c.clone().multiplyScalar(.9),b=[[x-S,y-S],[x+S,y-S],[x+S,y+S],[x-S,y+S]];for(let M=0;M<4;M++){let[I,N]=b[M],[D,O]=b[(M+1)%4];f([I,T-.6,N],[D,T-.6,O],[D,T+E,O],[I,T+E,N],A)}f([b[0][0],T+E,b[0][1]],[b[1][0],T+E,b[1][1]],[b[2][0],T+E,b[2][1]],[b[3][0],T+E,b[3][1]],d)};if(r&&n===4&&a<2500){let x=[0,1,2,3].map(F=>[e[F*2],e[F*2+1]]),y=Math.hypot(x[1][0]-x[0][0],x[1][1]-x[0][1]),T=Math.hypot(x[2][0]-x[1][0],x[2][1]-x[1][1]),S=T>y?[x[1],x[2],x[3],x[0]]:x,E=Math.max(y,T),A=Math.min(y,T),b=(S[0][0]+S[1][0]+S[2][0]+S[3][0])/4,M=(S[0][1]+S[1][1]+S[2][1]+S[3][1])/4,I=(S[1][0]-S[0][0]+(S[2][0]-S[3][0]))/2/E,N=(S[1][1]-S[0][1]+(S[2][1]-S[3][1]))/2/E,D=Math.min(A*.27,5),O=this.offsetRing(S.flat(),4,-_),V=[0,1,2,3].map(F=>[O[F*2],i-_*.5,O[F*2+1]]),L=h>.4,W=L?E/2+_:Math.max(0,E/2-A/2),z=[b-I*W,i+D,M-N*W],G=[b+I*W,i+D,M+N*W];if(f(V[0],V[1],G,z,g),f(V[2],V[3],z,G,o),L){let F=[0,1,2,3].map(Z=>[S[Z][0],i,S[Z][1]]);u(F[1],F[2],[b+I*E/2,i+D,M+N*E/2],c),u(F[3],F[0],[b-I*E/2,i+D,M-N*E/2],c)}else u(V[1],V[2],G,d),u(V[3],V[0],z,d);p(b+I*E*.2,M+N*E*.2,i+D);return}if(r&&a<6e3&&n<=60){let x=Math.max(1.2,Math.min(4.2,Math.sqrt(a)*.2)),y=this.offsetRing(e,n,x);if(y||(x*=.5,y=this.offsetRing(e,n,x)),y){let T=this.offsetRing(e,n,-_),S=i+x*.5;for(let b=0;b<n;b++){let M=(b+1)%n;f([T[b*2],i-_*.4,T[b*2+1]],[T[M*2],i-_*.4,T[M*2+1]],[y[M*2],S,y[M*2+1]],[y[b*2],S,y[b*2+1]],b%2?o:d)}let E=[];for(let b=0;b<n;b++)E.push(new bt(y[b*2],y[b*2+1]));let A=[];try{A=xn.triangulateShape(E,[])}catch{A=[]}for(let[b,M,I]of A)u([E[b].x,S,E[b].y],[E[M].x,S,E[M].y],[E[I].x,S,E[I].y],g);(l===1||l===2)&&p(y[0]*.5+y[2]*.5,y[1]*.5+y[3]*.5,S);return}}let m=[];for(let x=0;x<n;x++)m.push(new bt(e[x*2],e[x*2+1]));let v;try{v=xn.triangulateShape(m,[])}catch{return}for(let[x,y,T]of v)u([m[x].x,i-.25,m[x].y],[m[y].x,i-.25,m[y].y],[m[T].x,i-.25,m[T].y])}};var Px={forest:.85,wood:.85,scrub:.35,park:.18,garden:.12,cemetery:.08,residential:.035,grass:.03,meadow:.012,farmland:.004,default:.02,recreation_ground:.04,village_green:.05,orchard:.3,wetland:.2},Mo=class{constructor(t,e){this.terrain=t,this.roads=e;let n=new no(1,1),i=n.attributes.position;for(let r=0;r<i.count;r++){let o=i.getX(r),a=i.getY(r),l=i.getZ(r),c=.85+.3*Math.abs(Math.sin(o*5.1+a*3.7+l*4.3));i.setXYZ(r,o*c,a*c*.9+.1,l*c)}n.computeVertexNormals(),this.crownGeo=n,this.coneGeo=new to(1,1,7),this.coneGeo.translate(0,.15,0),this.trunkGeo=new Ye(.12,.18,1,5),this.crownMat=new Yt({color:16777215}),this.trunkMat=new Yt({color:5981746})}build(t,e,n,i,r,o=1){let a=this.terrain,l=this.roads,c=l.tileSize,h=l.xmin+e*c,u=l.zmin+n*c,f=[],d=(L,W,z,G=!1,F=!1)=>f.push([L,W,z,G,F]);if(t){for(let L=0;L<t.tr.length;L+=2)d(t.tr[L]/10,t.tr[L+1]/10,.9+Ce(L)*.5);for(let L of t.rows){let W=0,z=0,G=[];for(let F=0;F<L.length;F+=2)W+=L[F],z+=L[F+1],G.push([W/10,z/10]);for(let F=0;F<G.length-1;F++){let Z=Math.hypot(G[F+1][0]-G[F][0],G[F+1][1]-G[F][1]);for(let X=0;X<Z;X+=7)d(G[F][0]+(G[F+1][0]-G[F][0])*X/Z,G[F][1]+(G[F+1][1]-G[F][1])*X/Z,.8+Ce(F*31+X)*.4,!1,Ce(L.length*7+L[0])<.45)}}}let g=11,_=e*7919+n*104729|0;for(let L=u+g/2;L<u+c;L+=g)for(let W=h+g/2;W<h+c;W+=g){_++;let z=W+(Ce(_)-.5)*g,G=L+(Ce(_*3+1)-.5)*g,F=a.landClass(z,G),Z=(Px[F]||0)*o;Ce(_*7+5)>Z||d(z,G,.75+Ce(_*11)*.6,(F==="forest"||F==="wood")&&Ce(_*13)<.12)}let p=f.filter(([L,W])=>{let z=l.nearest(L,W,9);return!z||z.d>l.ways[z.wi].width/2+1.5});if(!p.length)return null;let m=p.length,v=p.filter(L=>L[3]).length,x=new je(this.crownGeo,this.crownMat,m-v),y=v?new je(this.coneGeo,this.crownMat,v):null,T=new je(this.trunkGeo,this.trunkMat,m),S=new ee,E=new Ve,A=new H,b=new H,M=new Ut,I=new H(0,1,0),N=0,D=0,O=0;for(let[L,W,z,G,F]of p){let Z=a.height(L,W),X=(G?10:F?13:6.5)*z*(.8+Ce(N*5+1)*.5),k=(G?2.1:F?1.5:2.6+Ce(N*9)*1.4)*z;E.setFromAxisAngle(I,Ce(N*17)*6.28),b.set(L,Z+X*.3,W),A.set(1,X*.6,1),S.compose(b,E,A),T.setMatrixAt(N,S);let B=.75+Ce(N*23)*.4;if(G)b.set(L,Z+X*.55,W),A.set(k,X*.85,k),S.compose(b,E,A),y.setMatrixAt(O,S),M.setRGB(.1*B,.26*B,.12*B),y.setColorAt(O++,M);else{b.set(L,Z+X*.62,W),A.set(k,F?X*.42:k*1.05,k),S.compose(b,E,A),x.setMatrixAt(D,S);let q=Ce(N*41)<.06;M.setRGB(q?.42*B:.17*B,q?.3*B:(.29+Ce(N*31)*.07)*B,.09*B),x.setColorAt(D++,M)}i&&i.addCircle(r,L,W,.35*z),N++}x.castShadow=!0,T.castShadow=!1,x.computeBoundingSphere(),T.computeBoundingSphere();let V=new te;return V.add(x,T),y&&(y.castShadow=!0,y.computeBoundingSphere(),V.add(y)),V}};var Fs=44;function cc(s,t){let e=(t%Fs+Fs)%Fs,n=s===0?e:(e+Fs/2)%Fs;return n<17?"G":n<20.5?"Y":"R"}function Ie(s,t,e,n,i,r,o,a,l){let c=Math.cos(a),h=Math.sin(a),u=[];for(let[f,d,g]of[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]){let _=f*i/2,p=g*o/2;u.push([t+_*c+p*h,e+d*r/2,n-_*h+p*c])}for(let f of[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]]){let d=f.map(g=>s.v(u[g][0],u[g][1],u[g][2],l[0],l[1],l[2],0,0));s.quad(d[0],d[1],d[2],d[3])}}function _n(s,t,e,n,i,r,o,a){let l=Math.cos(o),c=Math.sin(o),h=l,u=-c,f=s.v(t-h*i/2,e-r/2,n-u*i/2,1,1,1,a[0],a[1]),d=s.v(t+h*i/2,e-r/2,n+u*i/2,1,1,1,a[2],a[1]),g=s.v(t+h*i/2,e+r/2,n+u*i/2,1,1,1,a[2],a[3]),_=s.v(t-h*i/2,e+r/2,n-u*i/2,1,1,1,a[0],a[3]);s.quad(f,d,g,_)}var hc=["stop","giveway","roundabout","noentry","oneway","ped","bump","level","warn","parking","bus","fuel","camera","deadend","s10","s20","s30","s40","s50","s60","s70","s80","s90","s100","s110","s130","back"];function zs(s,t=!1){let e=hc.indexOf(s),n=e%8,i=Math.floor(e/8)+(t?4:0);return[n/8,1-(i+1)/8,(n+1)/8,1-i/8]}function Lx(s,t){let i=(u,f)=>{s.beginPath(),s.arc(64,64,u,0,7),s.fillStyle=f,s.fill()},r=(u,f)=>{s.beginPath(),u.forEach(([d,g],_)=>_?s.lineTo(d,g):s.moveTo(d,g)),s.closePath(),s.fillStyle=f,s.fill()},o=(u,f,d,g,_,p)=>{s.beginPath(),s.roundRect(u,f,d,g,_),s.fillStyle=p,s.fill()},a=(u,f,d,g=67)=>{s.fillStyle=d,s.font=`bold ${f}px Arial`,s.textAlign="center",s.textBaseline="middle",s.fillText(u,64,g)},l="#c8101a",c="#0a4fa6",h=()=>{r([[64,6],[124,118],[4,118]],l),r([[64,30],[103,106],[25,106]],"#fff")};if(t.startsWith("s")){i(62,l),i(47,"#fff");let u=t.slice(1);a(u,u.length>2?46:58,"#111");return}switch(t){case"stop":{let u=f=>Array.from({length:8},(d,g)=>{let _=(g+.5)/8*Math.PI*2;return[64+Math.cos(_)*f,64+Math.sin(_)*f]});r(u(63),"#fff"),r(u(57),l),a("STOP",38,"#fff");break}case"giveway":r([[4,8],[124,8],[64,122]],l),r([[28,22],[100,22],[64,96]],"#fff");break;case"roundabout":{i(62,"#fff"),i(58,c),s.strokeStyle="#fff",s.lineWidth=11;for(let u=0;u<3;u++){let f=u*2.094+.5,d=f+1.35;s.beginPath(),s.arc(64,64,30,f,d,!1),s.stroke();let g=64+Math.cos(f)*30,_=64+Math.sin(f)*30;s.save(),s.translate(g,_),s.rotate(f-Math.PI/2),s.beginPath(),s.moveTo(0,-17),s.lineTo(13,6),s.lineTo(-13,6),s.closePath(),s.fillStyle="#fff",s.fill(),s.restore()}break}case"noentry":i(62,"#fff"),i(58,l),o(22,53,84,22,3,"#fff");break;case"oneway":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(55,48,18,60,2,"#fff"),r([[64,16],[96,58],[32,58]],"#fff");break;case"ped":{o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),r([[64,18],[112,106],[16,106]],"#fff"),s.fillStyle="#111",s.beginPath(),s.arc(66,52,7,0,7),s.fill(),s.strokeStyle="#111",s.lineWidth=6,s.lineCap="round",s.beginPath(),s.moveTo(64,62),s.lineTo(62,82),s.lineTo(50,100),s.moveTo(62,82),s.lineTo(76,100),s.moveTo(52,74),s.lineTo(64,66),s.lineTo(78,76),s.stroke(),s.lineCap="butt";break}case"bump":h(),s.fillStyle="#111",s.beginPath(),s.moveTo(36,96),s.quadraticCurveTo(64,56,92,96),s.closePath(),s.fill();break;case"warn":h(),a("!",56,"#111",76);break;case"level":{s.lineCap="butt";for(let u of[1,-1])s.save(),s.translate(64,64),s.rotate(u*.55),s.fillStyle=l,s.fillRect(-62,-13,124,26),s.fillStyle="#fff",s.fillRect(-56,-8,112,16),s.fillStyle=l,s.fillRect(-62,-13,16,26),s.fillRect(46,-13,16,26),s.restore();break}case"parking":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),a("P",92,"#fff",70);break;case"bus":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(22,34,84,60,6,"#fff"),a("BUS",34,"#111");break;case"fuel":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(24,22,80,84,6,"#fff"),o(44,36,30,58,3,"#111"),o(49,42,20,16,2,"#fff"),s.strokeStyle="#111",s.lineWidth=5,s.beginPath(),s.moveTo(74,60),s.lineTo(86,60),s.lineTo(86,86),s.stroke();break;case"camera":o(2,20,124,88,6,"#fff"),o(6,24,116,80,4,c),a("CONTROLLO",15,"#fff",44),a("ELETTRONICO",15,"#fff",62),a("VELOCIT\xC0",17,"#fff",84);break;case"deadend":o(4,4,120,120,8,"#fff"),o(8,8,112,112,6,c),o(54,40,20,70,2,"#fff"),o(34,22,60,22,2,l);break;case"back":s.fillStyle="#7d8185",s.fillRect(0,0,128,128);break;default:break}}function Dx(){let s=document.createElement("canvas");s.width=s.height=1024;let t=s.getContext("2d"),e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");hc.forEach((r,o)=>{n.clearRect(0,0,128,128),n.globalCompositeOperation="source-over",Lx(n,r),t.drawImage(e,o%8*128,Math.floor(o/8)*128),n.globalCompositeOperation="source-in",n.fillStyle="#7d8185",n.fillRect(0,0,128,128),t.drawImage(e,o%8*128,(Math.floor(o/8)+4)*128)});let i=new Ae(s);return i.colorSpace=me,i.anisotropy=8,i}var lc=class{constructor(t=1024){this.S=t,this.x=0,this.y=0,this.rowH=0,this.map=new Map,this.cv=null}add(t,e,n,i){if(this.map.has(t))return this.map.get(t);if(this.cv||(this.cv=document.createElement("canvas"),this.cv.width=this.cv.height=this.S,this.ctx=this.cv.getContext("2d")),this.x+e>this.S&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.S)return null;let r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,e,n),r.clip(),i(r,e,n),r.restore();let o=this.S,a=.5,l=[(this.x+a)/o,1-(this.y+n-a)/o,(this.x+e-a)/o,1-(this.y+a)/o];return this.map.set(t,l),this.x+=e+2,this.rowH=Math.max(this.rowH,n),l}material(){let t=new Ae(this.cv);return t.colorSpace=me,t.anisotropy=8,new Yt({map:t,vertexColors:!0})}};function mi(s,t,e,n,i="bold"){for(s.font=`${i} ${n}px Arial`;s.measureText(t).width>e&&n>9;)n-=1,s.font=`${i} ${n}px Arial`;return n}var bo=class{constructor(t,e,n,i){this.roads=t,this.terrain=e,this.comuneAt=n;let r=t.materials();this.markMat=r.mark,this.decalMat=r.decal,this.stdMat=new Yt({map:Dx(),vertexColors:!0,alphaTest:.5}),this.poleMat=new Yt({vertexColors:!0,side:_e}),this.lights=[0,1].map(()=>({R:new Fe({color:3342336}),Y:new Fe({color:3351040}),G:new Fe({color:8704})})),this.greenMat=new Fe({color:2162528}),this.lampMat=new Fe({color:5592400}),this.lampPoleMat=new Yt({color:5593178}),this.lampPoleGeo=new Ye(.07,.1,7,5),this.lampPoleGeo.translate(0,3.5,0),this.lampHeadGeo=new we(.9,.16,.34),this.lampHeadGeo.translate(.9,7,0);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,214,150,0.85)"),l.addColorStop(.45,"rgba(255,200,130,0.3)"),l.addColorStop(1,"rgba(255,190,120,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.poolMat=new Fe({map:new Ae(o),transparent:!0,blending:Vi,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12,fog:!1}),this.poolGeo=new Ke(17,17),this.poolGeo.rotateX(-Math.PI/2),this.poolGeo.translate(1.8,.3,0),this.nodeComune=new Map,this.places=new Map;for(let c of i?i.places:[]){if(!["town","city","village","hamlet","suburb","quarter"].includes(c.t))continue;let h=Math.floor(c.z/500)*1e4+Math.floor(c.x/500);this.places.has(h)||this.places.set(h,[]),this.places.get(h).push(c)}this.night=0}update(t,e){for(let n=0;n<2;n++){let i=cc(n,t),r=this.lights[n];r.R.color.setHex(i==="R"?16722458:2754566),r.Y.color.setHex(i==="Y"?16756736:2760196),r.G.color.setHex(i==="G"?2162528:403984)}this.night=e,this.lampMat.color.setHex(e>.3?16773832:7829882),this.poolMat.opacity=Math.max(0,e-.25)*.75,this.poolMat.visible=e>.26}comuneOfNode(t){let e=this.nodeComune.get(t);return e===void 0&&(e=this.comuneAt(this.roads.nx[t],this.roads.nz[t]),this.nodeComune.set(t,e)),e}placeNear(t,e,n=260){let i=null,r=n,o=Math.floor(t/500),a=Math.floor(e/500);for(let l=a-1;l<=a+1;l++)for(let c=o-1;c<=o+1;c++)for(let h of this.places.get(l*1e4+c)||[]){let u=Math.hypot(h.x-t,h.z-e);u<r&&(r=u,i=h.n)}return i}approaches(t){let e=this.roads,n=[];for(let i=e.adjStart[t];i<e.adjStart[t+1];i++){let r=e.ways[e.adjWay[i]],o=e.adjPos[i];r.drivable&&(o>0&&n.push({from:r.nodes[o-1],w:r,wi:e.adjWay[i],seg:o-1,t:1,fwd:!0}),o<r.nodes.length-1&&!r.oneway&&n.push({from:r.nodes[o+1],w:r,wi:e.adjWay[i],seg:o,t:0,fwd:!1}))}return n}leadsToJunction(t,e){let n=this.roads,i=e,r=t,o=0;for(let a=0;a<40&&o<60;a++){if(n.degMain[r]>=3)return!0;let l=-1;for(let c=n.adjStart[r];c<n.adjStart[r+1];c++){let h=n.ways[n.adjWay[c]],u=n.adjPos[c];for(let f of[h.nodes[u-1],h.nodes[u+1]])f!==void 0&&f!==i&&f!==r&&(l=f)}if(l<0)return!1;o+=Math.hypot(n.nx[l]-n.nx[r],n.nz[l]-n.nz[r]),i=r,r=l}return!1}neighbourLimit(t,e){let n=this.roads,i=-1;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++){let o=n.adjWay[r];if(!(o===e||!n.ways[o].drivable)){if(n.ways[o].cls===n.ways[e].cls)return n.ways[o].limit;i=n.ways[o].limit}}return i}traceDestination(t,e,n,i){let r=this.roads,o=this.comuneOfNode(i),a=this.placeNear(r.nx[i],r.nz[i],600),l=0,c=i;for(let h=0;h<1500&&l<7e3;h++){let u=r.ways[t],f=e+n,d=u.nodes[e];if(f<0||f>=u.nodes.length){let _=Math.atan2(r.nx[d]-r.nx[c],r.nz[d]-r.nz[c]),p=null,m=1.15,v=(T,S,E,A)=>{let b=r.ways[T],M=b.nodes[S+E];if(M===void 0)return;let I=Math.atan2(r.nx[M]-r.nx[A],r.nz[M]-r.nz[A])-_;for(;I>Math.PI;)I-=2*Math.PI;for(;I<-Math.PI;)I+=2*Math.PI;Math.abs(I)<m&&(m=Math.abs(I),p=[T,S,E])},x=(T,S)=>{for(let E=r.adjStart[T];E<r.adjStart[T+1];E++){let A=r.adjWay[E],b=r.ways[A],M=r.adjPos[E];if(!(!b.drivable||b.cls>Gt.UNCLASSIFIED)&&!(A===t&&M===e)){if(b.flags&Vt.ROUNDABOUT){S||y(A,M);continue}M<b.nodes.length-1&&v(A,M,1,S?d:T),M>0&&!b.oneway&&v(A,M,-1,S?d:T)}}},y=(T,S)=>{let E=T,A=S;for(let b=0;b<120;b++){let M=r.ways[E];if(A>=M.nodes.length-1){let N=M.nodes[M.nodes.length-1],D=!1;if(M.nodes[0]===N&&M.nodes.length>2)A=0,D=!0;else for(let O=r.adjStart[N];O<r.adjStart[N+1];O++){let V=r.adjWay[O];if(V!==E&&r.ways[V].flags&Vt.ROUNDABOUT&&r.adjPos[O]===0){E=V,A=0,D=!0;break}}if(!D)return}A++;let I=(M===r.ways[E],r.ways[E].nodes[A]);if(I===d)return;r.degree[I]>=3&&x(I,!0)}};if(x(d,!1),!p)return null;c=d,[t,e,n]=p;continue}let g=u.nodes[f];if(l+=Math.hypot(r.nx[g]-r.nx[d],r.nz[g]-r.nz[d]),c=d,e=f,h%6===0&&l>250){let _=this.comuneOfNode(g);if(_&&o&&_!==o)return{name:_,dist:l};let p=this.placeNear(r.nx[g],r.nz[g]);if(p&&p!==a&&p!==o&&l>500)return{name:p,dist:l}}}return null}build(t,e){let n=this.roads,i=this.terrain,r=n.tileSegs.get(t)||[],o=new ue(!0,!1),a=new ue(!0,!0),l=new ue(!0,!0),c=new ue(!0,!1),h=new ue(!0,!0),u=[0,1].map(()=>({R:new ue(!1,!1),Y:new ue(!1,!1),G:new ue(!1,!1)})),f=new ue(!1,!1),d=new lc,g=[],_=[],p=[.42,.43,.44],m=(F,Z=.7)=>({uv:zs(F),back:zs(F,!0),w:Z,h:Z}),v=(F,Z,X,k,B,q=2)=>{if(B=B.filter(ut=>ut&&ut.uv),!B.length)return;let it=Math.atan2(-X,-k),Y=i.height(F,Z),ft=B.reduce((ut,xt)=>ut+xt.h+.06,0);Ie(o,F,Y+(q+ft)/2,Z,.07,q+ft,.07,it,p);let gt=Y+q+ft;for(let ut of B)gt-=ut.h/2+.03,_n(ut.text?l:a,F-X*.05,gt,Z-k*.05,ut.w,ut.h,it,ut.uv),ut.text&&ut.double?_n(l,F+X*.05,gt,Z+k*.05,ut.w,ut.h,it+Math.PI,ut.uv):_n(a,F+X*.05,gt,Z+k*.05,ut.w,ut.h,it+Math.PI,ut.back||zs("back")),gt-=ut.h/2+.03},x=F=>{let Z=d.add("st"+F,190,42,(X,k,B)=>{X.fillStyle="#f7f7f2",X.fillRect(0,0,k,B),X.strokeStyle="#1b2f6b",X.lineWidth=3,X.strokeRect(2.5,2.5,k-5,B-5),X.fillStyle="#16255a",X.textAlign="center",X.textBaseline="middle",mi(X,F,k-16,22),X.fillText(F,k/2,B/2+1)});return Z&&{uv:Z,w:1.25,h:.28,text:!0,double:!0}},y=(F,Z)=>{let X=d.add("tw"+(Z?"E":"S")+F,300,116,(k,B,q)=>{k.fillStyle="#fff",k.fillRect(0,0,B,q),k.strokeStyle="#111",k.lineWidth=6,k.strokeRect(7,7,B-14,q-14),k.fillStyle="#111",k.textAlign="center",k.textBaseline="middle",mi(k,F,B-44,50),k.fillText(F,B/2,q/2+2),Z&&(k.strokeStyle="#c8101a",k.lineWidth=12,k.beginPath(),k.moveTo(16,q-16),k.lineTo(B-16,16),k.stroke())});return X&&{uv:X,w:2.1,h:.82,text:!0}},T=(F,Z,X)=>{let k=Z?`${F}  ${Z}`:F,B=d.add("dr"+(X?"B":"W")+k,300,64,(q,it,Y)=>{q.fillStyle=X?"#0a4fa6":"#fff",q.fillRect(0,0,it,Y),q.strokeStyle=X?"#fff":"#111",q.lineWidth=3,q.strokeRect(3.5,3.5,it-7,Y-7),q.fillStyle=X?"#fff":"#111",q.beginPath(),q.moveTo(34,12),q.lineTo(54,34),q.lineTo(41,34),q.lineTo(41,54),q.lineTo(27,54),q.lineTo(27,34),q.lineTo(14,34),q.closePath(),q.fill(),q.textAlign="left",q.textBaseline="middle",mi(q,k,it-76,30),q.fillText(k,66,Y/2+2)});return B&&{uv:B,w:1.9,h:.42,text:!0}},S=(F,Z)=>{let X=26+F.length*46,k=d.add("bd"+Z+F.join("|"),400,X,(B,q,it)=>{let Y={green:"#0b7a3b",blue:"#0a4fa6",white:"#fff"}[Z],ft=Z==="white"?"#111":"#fff";B.fillStyle=Y,B.fillRect(0,0,q,it),B.strokeStyle=ft,B.lineWidth=4,B.strokeRect(5,5,q-10,it-10),B.fillStyle=ft,B.textBaseline="middle",F.forEach((gt,ut)=>{let xt=36+ut*46;B.textAlign="left",mi(B,gt,q-90,34),B.fillText(gt,22,xt)}),B.beginPath(),B.moveTo(q-28,18),B.lineTo(q-28,46),B.lineTo(q-56,18),B.closePath(),B.fill(),B.lineWidth=8,B.strokeStyle=ft,B.beginPath(),B.moveTo(q-62,52),B.lineTo(q-36,26),B.stroke()});return k&&{uv:k,w:3.2,h:3.2*X/400,text:!0}},E=F=>{let Z=d.add("rf"+F,130,56,(X,k,B)=>{let q=/^A\d/.test(F);X.fillStyle="#fff",X.fillRect(0,0,k,B),X.fillStyle=q?"#0b7a3b":"#0a4fa6",X.fillRect(4,4,k-8,B-8),X.fillStyle="#fff",X.textAlign="center",X.textBaseline="middle",mi(X,F,k-18,30),X.fillText(F,k/2,B/2+2)});return Z&&{uv:Z,w:.8,h:.34,text:!0}},A=F=>{let Z=d.add("bs"+F,190,36,(X,k,B)=>{X.fillStyle="#f2c417",X.fillRect(0,0,k,B),X.fillStyle="#111",X.textAlign="center",X.textBaseline="middle",mi(X,F,k-12,20),X.fillText(F,k/2,B/2+1)});return Z&&{uv:Z,w:1,h:.2,text:!0,double:!0}},b=F=>{let Z=d.add("ft"+F,150,150,(X,k,B)=>{X.fillStyle="#f4f4f4",X.fillRect(0,0,k,B),X.fillStyle="#d6202a",X.fillRect(0,0,k,52),X.fillStyle="#fff",X.textAlign="center",X.textBaseline="middle",mi(X,F||"CARBURANTI",k-14,26),X.fillText(F||"CARBURANTI",k/2,27),X.fillStyle="#111",X.font="bold 20px Arial",X.textAlign="left",X.fillText("Benzina",10,80),X.fillText("Gasolio",10,108),X.fillText("GPL",10,134),X.fillStyle="#0b7a3b",X.textAlign="right",X.fillText("1.7"+F.length%9,k-10,80),X.fillText("1.6"+F.length*3%9,k-10,108),X.fillText("0.7"+F.length*7%9,k-10,134)});return Z&&{uv:Z,w:1.5,h:1.5,text:!0,double:!0}},M=F=>hc.includes("s"+F)?m("s"+F,.66):null,I=(F,Z,X,k,B)=>n.heightOn(F,Z,X,k,B),N=(F,Z,X,k,B,q)=>{let it=-k,Y=X,ft=F.w.width/2,gt=n.nx[Z]-X*(B+.8),ut=n.nz[Z]-k*(B+.8),xt=F.w.oneway?-ft+.3:(F.fwd?F.w.cOff:-F.w.cOff)+.1,j=ft-.3,nt=I(F.wi,F.seg,F.t,gt,ut)+.03;if(q)for(let P=xt;P+.5<=j;P+=.75){let dt=[[P,-.3],[P+.5,-.3],[P+.25,.35]].map(([rt,at])=>c.v(gt+it*rt-X*at,nt,ut+Y*rt-k*at));c.tri(dt[0],dt[1],dt[2]),c.tri(dt[0],dt[2],dt[1])}else{let P=c.v(gt+it*xt-X*.25,nt,ut+Y*xt-k*.25),dt=c.v(gt+it*j-X*.25,nt,ut+Y*j-k*.25),rt=c.v(gt+it*j+X*.25,nt,ut+Y*j+k*.25),at=c.v(gt+it*xt+X*.25,nt,ut+Y*xt+k*.25);c.quad(P,dt,rt,at)}return[gt+it*(xt+j)/2,ut+Y*(xt+j)/2,j-xt]},D=new Set,O=new Set,V=new Set,L=0;for(let F of r){let Z=Math.floor(F/16384),X=F%16384,k=n.ways[Z];if(!k.drivable)continue;let B=k.nodes[X],q=k.nodes[X+1],it=n.nx[B],Y=n.nz[B],ft=n.nx[q],gt=n.nz[q],ut=Math.hypot(ft-it,gt-Y);if(ut<.3)continue;let xt=(ft-it)/ut,j=(gt-Y)/ut,nt=-j,P=xt,dt=k.width/2,rt=k.nodes.length-2,at=dt+.9;for(let ot of[B,q]){if(D.has(ot))continue;D.add(ot);let lt=n.ntag[ot];if(n.degMain[ot]>=3&&L<240){let et=new Set;for(let st=n.adjStart[ot];st<n.adjStart[ot+1];st++){let J=n.ways[n.adjWay[st]],Mt=n.adjPos[st];if(!J.name||!J.drivable||J.cls>Gt.LIVING||et.has(J.name)||O.has(J.name+"@"+ot))continue;et.add(J.name),O.add(J.name+"@"+ot);let yt=Mt<J.nodes.length-1?J.nodes[Mt+1]:J.nodes[Mt-1],St=n.nx[yt]-n.nx[ot],Bt=n.nz[yt]-n.nz[ot],vt=Math.hypot(St,Bt)||1;St/=vt,Bt/=vt;let Ct=n.w1[ot]/2+2.4,Nt=J.width/2+.9,Dt=n.nx[ot]+St*Ct-Bt*Nt,Tt=n.nz[ot]+Bt*Ct+St*Nt,Wt=x(J.name);Wt&&(v(Dt,Tt,-Bt,St,[Wt],2.45),L++)}}if(!lt)continue;let R=this.approaches(ot).filter(et=>et.w.cls<=Gt.SERVICE);if(!R.length)continue;let w=n.degMain[ot]>=3,K=et=>{let st=n.nx[ot]-n.nx[et.from],J=n.nz[ot]-n.nz[et.from],Mt=Math.hypot(st,J)||1;return[st/Mt,J/Mt,Mt]};if(lt===jt.SIGNALS||lt===jt.STOP||lt===jt.GIVE_WAY||lt===jt.CROSSING_SIGNALS){let et=R,st=n.ndir[ot];if(st&&!w){let J=R.filter(Mt=>Mt.fwd===(st===1));J.length&&(et=J)}else if(lt!==jt.SIGNALS&&lt!==jt.CROSSING_SIGNALS&&w){let J=Math.min(...R.map(Mt=>Mt.w.cls));et=R.filter(Mt=>Mt.w.cls>J),et.length||(et=R.slice(0,1))}else if(!w&&lt!==jt.CROSSING_SIGNALS){let J=R.filter(Mt=>this.leadsToJunction(ot,Mt.from));J.length&&(et=J)}for(let J of et){let[Mt,yt,St]=K(J),Bt=-yt,vt=Mt,Ct=J.w.width/2,Nt=w?Math.min(St*.6+2,n.w1[ot]/2+1.5):lt===jt.CROSSING_SIGNALS?2.5:0,Dt=n.nx[ot]-Mt*Nt+Bt*(Ct+.9),Tt=n.nz[ot]-yt*Nt+vt*(Ct+.9),Wt=Math.atan2(-Mt,-yt);if(lt===jt.SIGNALS||lt===jt.CROSSING_SIGNALS){let Ht=i.height(Dt,Tt);Ie(o,Dt,Ht+1.55,Tt,.09,3.1,.09,Wt,p),Ie(o,Dt,Ht+3,Tt,.38,1.05,.3,Wt,[.1,.1,.1]);let ne=-Mt*.16,$=-yt*.16;if(lt===jt.SIGNALS){let At=Math.abs(Mt)>Math.abs(yt)?1:0,pt=u[At];Ie(pt.R,Dt+ne,Ht+3.33,Tt+$,.22,.22,.04,Wt,[1,1,1]),Ie(pt.Y,Dt+ne,Ht+3,Tt+$,.22,.22,.04,Wt,[1,1,1]),Ie(pt.G,Dt+ne,Ht+2.67,Tt+$,.22,.22,.04,Wt,[1,1,1]),_.push({node:ot,group:At})}else Ie(f,Dt+ne,Ht+2.67,Tt+$,.22,.22,.04,Wt,[1,1,1]);N(J,ot,Mt,yt,Nt+(lt===jt.CROSSING_SIGNALS?.5:0),!1)}else if(lt===jt.STOP){v(Dt,Tt,Mt,yt,[m("stop",.75)]);let[Ht,ne,$]=N(J,ot,Mt,yt,Nt,!1);J.w.cls<=Gt.RESIDENTIAL&&$>2&&n.addDecal(h,J.wi,J.seg,J.t,Ht-Mt*2.6,ne-yt*2.6,Mt,yt,Math.min(2.4,$-.4),3,"stop")}else v(Dt,Tt,Mt,yt,[m("giveway",.8)]),N(J,ot,Mt,yt,Nt,!0)}}else if(lt===jt.CROSSING&&!w&&k.cls<=Gt.UNCLASSIFIED)for(let et of R){let[st,J]=K(et);v(n.nx[ot]-st*2.6-J*(et.w.width/2+.9),n.nz[ot]-J*2.6+st*(et.w.width/2+.9),st,J,[m("ped",.6)])}else if(lt===jt.BUMP||lt===jt.TABLE)for(let et of R){let[st,J]=K(et);v(n.nx[ot]-st*7-J*(et.w.width/2+.9),n.nz[ot]-J*7+st*(et.w.width/2+.9),st,J,[m("bump",.8),lt===jt.TABLE?null:M(30)])}else if(lt===jt.LEVEL_CROSSING)for(let et of R){let[st,J]=K(et),Mt=n.nx[ot]-st*5-J*(et.w.width/2+.9),yt=n.nz[ot]-J*5+st*(et.w.width/2+.9);v(Mt,yt,st,J,[m("level",.95)],1.7);let St=i.height(Mt,yt),Bt=Math.atan2(-st,-J);Ie(o,Mt-st*.8,St+.55,yt-J*.8,.3,1.1,.3,Bt,[.75,.75,.75]);for(let vt=0;vt<6;vt++)Ie(o,Mt-st*.8+J*.25,St+1.4+vt*.7,yt-J*.8-st*.25,.1,.7,.1,Bt,vt%2?[.85,.1,.1]:[.95,.95,.95])}}let mt=k.limitMapped&&k.cls<=Gt.RESIDENTIAL&&k.len>80&&!(k.flags&Vt.ROUNDABOUT);if(X===0&&mt&&this.neighbourLimit(B,Z)!==k.limit){let ot=Math.min(14,k.len*.3),[lt,R]=n.pointAt(k,ot);v(lt+nt*at,R+P*at,xt,j,[M(k.limit)],2.1)}if(X===rt&&!k.oneway&&mt&&this.neighbourLimit(q,Z)!==k.limit){let ot=Math.min(14,k.len*.3),[lt,R]=n.pointAt(k,k.len-ot);v(lt-nt*at,R-P*at,-xt,-j,[M(k.limit)],2.1)}if(k.oneway&&!(k.flags&(Vt.ROUNDABOUT|Vt.LINK))&&k.cls>=Gt.TERTIARY&&k.cls<=Gt.LIVING&&k.len>25){let ot=(lt,R)=>{for(let w=n.adjStart[lt];w<n.adjStart[lt+1];w++){let K=n.adjWay[w],et=n.ways[K];if(K!==Z&&et.oneway&&(et.name===k.name||n.degMain[lt]<3)&&n.adjPos[w]===(R?et.nodes.length-1:0))return!0}return!1};if(X===0&&n.degMain[B]>=3&&!n.onRb[B]&&!ot(B,!0)){let[lt,R]=n.pointAt(k,Math.min(6,k.len*.3));v(lt+nt*at,R+P*at,xt,j,[m("oneway",.6)])}if(X===rt&&n.degMain[q]>=3&&!n.onRb[q]&&!ot(q,!1)){let lt=Math.min(k.len*.3,n.w1[q]/2+1.5);for(let R of[1,-1])v(ft-xt*lt+nt*at*R,gt-j*lt+P*at*R,-xt,-j,[m("noentry",.6)])}}if(X===0&&k.dest&&k.len>30){let ot=k.dest.split("|"),lt=ot[ot.length-1].split(";").map(K=>K.trim()).filter(Boolean).slice(0,4);ot.length>1&&(lt[0]=ot[0].split(";")[0]+"  "+lt[0]);let R=k.cls===0?"green":k.cls<=3||k.limit>50?"blue":"white",w=S(lt,R);if(w){let[K,et]=n.pointAt(k,Math.min(18,k.len*.4)),st=K+nt*(at+1.8),J=et+P*(at+1.8),Mt=i.height(st,J),yt=Math.atan2(-xt,-j);for(let St of[1,-1])Ie(o,st+nt*1.3*St,Mt+1.6+w.h/2,J+P*1.3*St,.1,3.2+w.h,.1,yt,p);_n(l,st-xt*.08,Mt+3.2+w.h/2,J-j*.08,w.w,w.h,yt,w.uv),_n(a,st+xt*.08,Mt+3.2+w.h/2,J+j*.08,w.w,w.h,yt+Math.PI,zs("back"))}}if(k.ref&&k.cls<=Gt.TERTIARY&&!(k.flags&(Vt.LINK|Vt.ROUNDABOUT))&&k.len>160){let ot=k.ref.split(";")[0].trim();if(X===0&&n.degMain[B]>=3&&!V.has(ot+B)){V.add(ot+B);let[lt,R]=n.pointAt(k,38);v(lt+nt*at,R+P*at,xt,j,[E(ot)],1.9)}if(X===rt&&!k.oneway&&n.degMain[q]>=3&&!V.has(ot+q)){V.add(ot+q);let[lt,R]=n.pointAt(k,k.len-38);v(lt-nt*at,R-P*at,-xt,-j,[E(ot)],1.9)}}if(k.cls<=Gt.RESIDENTIAL&&k.cls>=Gt.TRUNK&&!(k.flags&(Vt.LINK|Vt.BRIDGE|Vt.TUNNEL|Vt.ROUNDABOUT))){let ot=this.comuneOfNode(B),lt=this.comuneOfNode(q);if(ot&&lt&&ot!==lt){let R=0,w=1;for(let st=0;st<10;st++){let J=(R+w)/2;this.comuneAt(it+(ft-it)*J,Y+(gt-Y)*J)===ot?R=J:w=J}let K=it+(ft-it)*R,et=Y+(gt-Y)*R;this.townSign(o,l,a,K+nt*(at+.4),et+P*(at+.4),xt,j,y(lt,!1),y(lt,!0)),k.oneway||this.townSign(o,l,a,K-nt*(at+.4),et-P*(at+.4),-xt,-j,y(ot,!1),y(ot,!0))}}if(k.cls>=Gt.PRIMARY&&k.cls<=Gt.LIVING&&!k.abs&&!(k.flags&Vt.ROUNDABOUT)&&k.lit!==2){let ot=k.cum[X];for(let lt=Math.ceil(ot/30)*30-ot;lt<ut;lt+=30){let R=it+xt*lt,w=Y+j*lt;if(k.lit!==1&&!i.isUrban(R,w))continue;let K=Math.floor((ot+lt)/30+.5)%2===0||k.oneway?1:-1,et=R+nt*K*(dt+1.1),st=w+P*K*(dt+1.1),J=n.nearest(et,st,6);J&&J.d<n.ways[J.wi].width/2+.4||g.push([et,i.height(et,st),st,Math.atan2(P*K,-nt*K)])}}}for(let F of n.roundaboutEntries(t)){let Z=n.ways[F.wi],X=n.nx[F.nd]-n.nx[F.from],k=n.nz[F.nd]-n.nz[F.from],B=Math.hypot(X,k)||1;X/=B,k/=B;let q=n.w1[F.nd]/2+2.5,it=!1,Y=0,ft=F.dir>0?Z.nodes.length-1:0;for(;Y<30&&ft-F.dir>=0&&ft-F.dir<Z.nodes.length;){let xt=Z.nodes[ft],j=Z.nodes[ft-F.dir];if(Y+=Math.hypot(n.nx[j]-n.nx[xt],n.nz[j]-n.nz[xt]),ft-=F.dir,n.ntag[j]===jt.GIVE_WAY||n.ntag[j]===jt.STOP){it=!0;break}}let gt=n.nx[F.nd]-X*q-k*(Z.width/2+.9),ut=n.nz[F.nd]-k*q+X*(Z.width/2+.9);v(gt,ut,X,k,[it?null:m("giveway",.8),m("roundabout",.62)])}let W=new Set;for(let F of r){let Z=Math.floor(F/16384),X=F%16384,k=n.ways[Z];if(k.flags&Vt.ROUNDABOUT||!k.drivable||k.cls>Gt.TERTIARY)continue;let B=k.nodes.length-2;for(let[q,it]of[[0,1],[k.nodes.length-1,-1]]){if((it>0?X!==0:X!==B)||it<0&&k.oneway)continue;let Y=k.nodes[q];if(!n.onRb[Y]||W.has(Z*2+(it>0?0:1)))continue;W.add(Z*2+(it>0?0:1));let ft=this.traceDestination(Z,q,it,Y);if(!ft)continue;let gt=k.nodes[q+it],ut=n.nx[gt]-n.nx[Y],xt=n.nz[gt]-n.nz[Y],j=Math.hypot(ut,xt)||1;ut/=j,xt/=j;let nt=k.limit>50||k.cls<=Gt.SECONDARY,P=T(ft.name,nt?Math.max(1,Math.round(ft.dist/1e3)):0,nt),dt=n.w1[Y]/2+3.5;v(n.nx[Y]+ut*dt-xt*(k.width/2+1.2),n.nz[Y]+xt*dt+ut*(k.width/2+1.2),ut,xt,[P],2.3)}}for(let[F,Z,X,k]of e&&e.pt||[]){let B=Z/10,q=X/10,it=e.s[k]||"",Y=n.nearest(B,q,30,at=>at.drivable&&at.cls<=Gt.SERVICE),ft=0,gt=1;if(Y){let at=Math.hypot(Y.dx,Y.dz)||1;ft=Y.dx/at,gt=Y.dz/at}let ut=Y&&Math.sign((B-Y.px)*-gt+(q-Y.pz)*ft)||1,xt=Y?n.ways[Y.wi].width/2:0,j=Y?Math.max(Y.d,xt+1):0,nt=Y?Y.px-gt*ut*j:B,P=Y?Y.pz+ft*ut*j:q,dt=ft*ut,rt=gt*ut;if(F===1){v(nt,P,dt,rt,[m("bus",.5),it?A(it):null],2);let at=i.height(nt,P),mt=Math.atan2(-dt,-rt),ot=-gt*ut,lt=ft*ut,R=nt+dt*2.2+ot*.9,w=P+rt*2.2+lt*.9;Ie(o,R,at+2.45,w,1.5,.08,3,mt,[.25,.3,.34]),Ie(o,R+ot*.7,at+1.25,w+lt*.7,.05,2.4,3,mt,[.55,.68,.74]);for(let K of[-1.45,1.45])Ie(o,R+dt*K-ot*.6,at+1.2,w+rt*K-lt*.6,.07,2.4,.07,mt,p)}else if(F===2){let at=Y?Math.atan2(ft*ut,gt*ut):0;g.push([B,i.height(B,q),q,at,1])}else if(F===3&&Y){let at=[...this.places.values()].flat().find(w=>w.n===it),mt=dt,ot=rt;if(at){let w=Math.sign((at.x-nt)*ft+(at.z-P)*gt)||1;mt=ft*w,ot=gt*w}let lt=Y.px-ot*(xt+1.3),R=Y.pz+mt*(xt+1.3);this.townSign(o,l,a,lt,R,mt,ot,y(it,!1),y(it,!0))}else if(F===4&&Y){v(nt,P,dt,rt,[m("camera",.9)],2);let at=i.height(nt,P),mt=Math.atan2(-dt,-rt);Ie(o,nt+dt*14,at+1.4,P+rt*14,.5,2.8,.5,mt,[.95,.5,.1]),Ie(o,nt+dt*14-dt*.26,at+2.3,P+rt*14-rt*.26,.3,.3,.04,mt,[.05,.05,.05])}else if(F===5){let at=b(it);if(at){let mt=i.height(nt,P),ot=Math.atan2(-dt,-rt);Ie(o,nt,mt+2.6,P,1.6,5.2,.3,ot,[.9,.9,.9]),_n(l,nt-dt*.16,mt+4.3,P-rt*.16,at.w,at.h,ot,at.uv),_n(l,nt+dt*.16,mt+4.3,P+rt*.16,at.w,at.h,ot+Math.PI,at.uv)}}}let z=new te,G=[];if(o.empty||z.add(o.mesh(this.poleMat,!0)),a.empty||z.add(a.mesh(this.stdMat)),!l.empty&&d.cv){let F=d.material();G.push(F),z.add(l.mesh(F))}c.empty||z.add(c.mesh(this.markMat)),h.empty||z.add(h.mesh(this.decalMat));for(let F=0;F<2;F++)for(let Z of["R","Y","G"])u[F][Z].empty||z.add(u[F][Z].mesh(this.lights[F][Z]));if(f.empty||z.add(f.mesh(this.greenMat)),g.length){let F=g.filter(ut=>ut[4]),Z=g.filter(ut=>ut[4]||!F.some(xt=>Math.hypot(xt[0]-ut[0],xt[2]-ut[2])<22)),X=new je(this.lampPoleGeo,this.lampPoleMat,Z.length),k=new je(this.lampHeadGeo,this.lampMat,Z.length),B=new je(this.poolGeo,this.poolMat,Z.length),q=new ee,it=new Ve,Y=new H(0,1,0),ft=new H(1,1,1),gt=new H;Z.forEach(([ut,xt,j,nt],P)=>{it.setFromAxisAngle(Y,nt),gt.set(ut,xt,j),q.compose(gt,it,ft),X.setMatrixAt(P,q),k.setMatrixAt(P,q),B.setMatrixAt(P,q)}),X.computeBoundingSphere(),k.computeBoundingSphere(),B.computeBoundingSphere(),B.renderOrder=2,z.add(X,k,B)}return z.userData.dispose=()=>{for(let F of G)F.map.dispose(),F.dispose()},{group:z,signals:_,lamps:g}}townSign(t,e,n,i,r,o,a,l,c){if(!l)return;let h=this.terrain,u=h.height(i,r),f=Math.atan2(-o,-a),d=-a,g=o,_=[.42,.43,.44];Ie(t,i-d*.75,u+1.35,r-g*.75,.08,2.7,.08,f,_),Ie(t,i+d*.75,u+1.35,r+g*.75,.08,2.7,.08,f,_),_n(e,i-o*.06,u+2.25,r-a*.06,l.w,l.h,f,l.uv),c?_n(e,i+o*.06,u+2.25,r+a*.06,c.w,c.h,f+Math.PI,c.uv):_n(n,i+o*.06,u+2.25,r+a*.06,l.w,l.h,f+Math.PI,zs("back"))}};var So=class{constructor(){this.grid=new Map,this.byTile=new Map}_cells(t,e,n,i,r){let o=Math.floor(t/24),a=Math.floor(n/24),l=Math.floor(e/24),c=Math.floor(i/24);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++)r(h*1e5+u)}_add(t,e){this._cells(e.minx,e.minz,e.maxx,e.maxz,i=>{let r=this.grid.get(i);r||this.grid.set(i,r=[]),r.push(e)});let n=this.byTile.get(t);n||this.byTile.set(t,n=[]),n.push(e)}addPolygon(t,e){let n=1e9,i=1e9,r=-1e9,o=-1e9;for(let a=0;a<e.length;a+=2)n=Math.min(n,e[a]),r=Math.max(r,e[a]),i=Math.min(i,e[a+1]),o=Math.max(o,e[a+1]);r-n<1.5&&o-i<1.5||this._add(t,{ring:e,minx:n,minz:i,maxx:r,maxz:o})}addCircle(t,e,n,i){this._add(t,{x:e,z:n,r:i,minx:e-i,minz:n-i,maxx:e+i,maxz:n+i})}removeTile(t){let e=this.byTile.get(t);if(!e)return;let n=new Set(e);for(let i of e)this._cells(i.minx,i.minz,i.maxx,i.maxz,r=>{let o=this.grid.get(r);if(!o)return;let a=o.filter(l=>!n.has(l));a.length?this.grid.set(r,a):this.grid.delete(r)});this.byTile.delete(t)}resolveCircle(t,e,n){let i=null,r=new Set;return this._cells(t-n,e-n,t+n,e+n,o=>{let a=this.grid.get(o);if(a)for(let l of a){if(r.has(l)||(r.add(l),t+n<l.minx||t-n>l.maxx||e+n<l.minz||e-n>l.maxz))continue;let c=null;if(l.ring)c=Ux(t,e,n,l.ring);else{let h=t-l.x,u=e-l.z,f=Math.hypot(h,u);f<n+l.r&&(c={nx:f>1e-6?h/f:1,nz:f>1e-6?u/f:0,depth:n+l.r-f})}c&&(!i||c.depth>i.depth)&&(i=c)}}),i}};function Ux(s,t,e,n){let i=n.length/2,r=!1,o=1e9,a=0,l=0;for(let f=0,d=i-1;f<i;d=f++){let g=n[f*2],_=n[f*2+1],p=n[d*2],m=n[d*2+1];_>t!=m>t&&s<(p-g)*(t-_)/(m-_)+g&&(r=!r);let v=g-p,x=_-m,y=v*v+x*x||1e-9,T=((s-p)*v+(t-m)*x)/y;T=T<0?0:T>1?1:T;let S=p+v*T,E=m+x*T,A=Math.hypot(s-S,t-E);A<o&&(o=A,a=S,l=E)}if(!r&&o>=e)return null;let c=s-a,h=t-l,u=Math.hypot(c,h)||1e-6;return c/=u,h/=u,r?{nx:-c,nz:-h,depth:o+e}:{nx:c,nz:h,depth:e-o}}function Bs(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new he,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Su(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=Su(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Su(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ge(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Nx={1:"#7a3d1a",2:"#1d4f91",3:"#4b2f73",4:"#b3261e",6:"#6b4f1d",7:"#1f6b3a",8:"#2f6b2a",9:"#555",10:"#6b1d5a",12:"#1d6b8a",13:"#555"},wo=class{constructor(t,e,n,i,r){this.scene=t,this.meta=e,this.terrain=n,this.roads=i,this.settings=r,this.collision=new So,this.tiles=new Map,this.queue=[],this.detail=mu(256),this.terrainMat=n.makeMaterial(this.detail),this.farMat=n.makeMaterial(this.detail),this.buildings=new vo(n),this.vegetation=new Mo(n,i),this.comuniIdx=e.comuni.map(o=>{let a=1e9,l=1e9,c=-1e9,h=-1e9;for(let u of o.rings)for(let f of u)a=Math.min(a,f[0]),c=Math.max(c,f[0]),l=Math.min(l,f[1]),h=Math.max(h,f[1]);return{n:o.n,rings:o.rings,minx:a,minz:l,maxx:c,maxz:h}}),this.signage=new bo(i,n,(o,a)=>this.comuneAt(o,a),e),this.signals=[],this.tileSet=new Set(e.tiles.map(([o,a])=>a*1e3+o)),this.root=new te,t.add(this.root),this.buildFar(),this.buildWaters(),this.labelsOn=!0}comuneAt(t,e){for(let n of this.comuniIdx){if(t<n.minx||t>n.maxx||e<n.minz||e>n.maxz)continue;let i=!1;for(let r of n.rings)pu(t,e,r)&&(i=!i);if(i)return n.n}return null}buildFar(){let t=this.meta.proj,e=2e3,n=80;this.far=new te;for(let i=t.zmin;i<t.zmax;i+=e)for(let r=t.xmin;r<t.xmax;r+=e){let o=this.terrain.buildChunk(r,i,e,n,this.farMat,1.5);o.receiveShadow=!1,this.far.add(o)}this.root.add(this.far)}buildWaters(){let t=new On({color:4157327,specular:10070715,shininess:80,transparent:!0,opacity:.92,side:_e});this.waterMat=t;let e=new te;for(let n of this.meta.waters)for(let i of n.o){if(i.length<4)continue;let r=i.map(g=>new bt(g[0],g[1])),o=(n.i||[]).filter(g=>g.length>=4).map(g=>g.map(_=>new bt(_[0],_[1]))),a;try{a=xn.triangulateShape(r,o)}catch{continue}let l=r.concat(...o),c=l.map(g=>this.terrain.height(g.x,g.y)).sort((g,_)=>g-_),h=c[Math.floor(c.length*.3)]+.35,u=new Float32Array(l.length*3);l.forEach((g,_)=>{u[_*3]=g.x,u[_*3+1]=h,u[_*3+2]=g.y});let f=[];for(let[g,_,p]of a)f.push(g,p,_);let d=new he;d.setAttribute("position",new ge(u,3)),d.setIndex(f),d.computeVertexNormals(),d.attributes.normal.getY(0)<0&&(d.setIndex(f.map((g,_)=>f[_-_%3+[0,2,1][_%3]])),d.computeVertexNormals()),e.add(new qt(d,t))}this.root.add(e)}tileKeyAt(t,e){let n=this.meta.proj;return Math.floor((e-n.zmin)/1e3)*1e3+Math.floor((t-n.xmin)/1e3)}update(t,e){let n=this.meta.proj,i=Math.floor((t-n.xmin)/1e3),r=Math.floor((e-n.zmin)/1e3),o=this.settings.viewTiles,a=new Set;for(let l=r-o;l<=r+o;l++)for(let c=i-o;c<=i+o;c++){if(c<0||l<0||c>=this.meta.tilesX||l>=this.meta.tilesZ)continue;let h=n.xmin+(c+.5)*1e3,u=n.zmin+(l+.5)*1e3,f=Math.hypot(h-t,u-e);if(f>(o+.3)*1e3)continue;if(a.add(l*1e3+c),!this.tiles.has(l*1e3+c)){let g={i:c,j:l,key:l*1e3+c,parts:{},state:"new",d:f};this.tiles.set(g.key,g)}let d=this.tiles.get(l*1e3+c);d.d=f,d.vegWanted=f<1700}for(let[l,c]of this.tiles)!a.has(l)&&c.d>(o+.9)*1e3?this.unload(c):a.has(l)||(c.d=Math.hypot(n.xmin+(c.i+.5)*1e3-t,n.zmin+(c.j+.5)*1e3-e))}unload(t){for(let e of Object.keys(t.parts)){let n=t.parts[e];n&&(this.root.remove(n),n.userData.dispose&&n.userData.dispose(),n.traverse(i=>{i.geometry&&i.geometry.dispose(),i.isSprite&&i.material.map&&(i.material.map.dispose(),i.material.dispose())}))}this.collision.removeTile(t.key),this.signals=this.signals.filter(e=>e.tile!==t.key),this.tiles.delete(t.key),t.dead=!0}pump(t=10){let e=performance.now(),n=[...this.tiles.values()].sort((i,r)=>i.d-r.d);for(let i of n){if(performance.now()-e>t)return!1;if(i.state==="new"){i.state="loading",this.tileSet.has(i.key)?pi("t_"+i.i+"_"+i.j,`data/tiles/t_${i.i}_${i.j}.js`).then(c=>{i.data=c,i.state="ready"}).catch(()=>{i.data=null,i.state="ready"}):(i.data=null,i.state="ready");continue}if(i.state!=="ready"||i.dead)continue;let r=this.meta.proj,o=r.xmin+i.i*1e3,a=r.zmin+i.j*1e3,l=(c,h)=>{i.parts[c]=h,h&&this.root.add(h)};if(!("terrain"in i.parts)){l("terrain",this.terrain.buildChunk(o,a,1e3,20,this.terrainMat));continue}if(!("roads"in i.parts)){l("roads",this.roads.buildTile(i.key));continue}if(!("signs"in i.parts)){let c=this.signage.build(i.key,i.data);for(let h of c.signals)this.signals.push({...h,tile:i.key});l("signs",c.group);continue}if(!("buildings"in i.parts)){if(i.data){let c=this.buildings.build(i.data,this.collision,i.key);l("buildings",c.group)}else l("buildings",null);for(let c of this.roads.roundabouts)this.roads.tileKey(c.x,c.z)===i.key&&this.collision.addCircle(i.key,c.x,c.z,c.r);continue}if(!("paths"in i.parts)){let c=new te,h=this.roads.buildPaths(i.data),u=this.roads.buildBarriers(i.data,this.collision,i.key),f=this.buildPower(i);for(let d of[h,u,f])d&&c.add(d);l("paths",c.children.length?c:null);continue}if(!("labels"in i.parts)){l("labels",this.buildLabels(i));continue}if(i.vegWanted&&!("veg"in i.parts)){l("veg",this.vegetation.build(i.data,i.i,i.j,this.collision,i.key,this.settings.trees));continue}}return!0}ready(t,e){let n=this.tiles.get(this.tileKeyAt(t,e));return n&&"buildings"in n.parts}progress(){let t=0,e=0;for(let n of this.tiles.values())e+=7,t+=Object.keys(n.parts).length;return e?t/e:0}buildPower(t){let e=this.meta.power||[];if(!e.length)return null;let n=this.meta.proj,i=n.xmin+t.i*1e3,r=n.zmin+t.j*1e3,o=v=>v[0]>=i&&v[0]<i+1e3&&v[1]>=r&&v[1]<r+1e3,a=30,l=[],c=[],h=this.terrain;for(let v of e)for(let x=0;x<v.length;x++){if(!o(v[x]))continue;let y=v[x],T=v[x-1]||v[x+1],S=v[x+1]||v[x-1],E=S[0]-T[0],A=S[1]-T[1],b=Math.hypot(E,A)||1;if(E/=b,A/=b,c.push([y[0],h.height(y[0],y[1]),y[1],Math.atan2(E,A)]),x<v.length-1){let M=v[x+1],I=h.height(y[0],y[1])+a,N=h.height(M[0],M[1])+a,D=Math.hypot(M[0]-y[0],M[1]-y[1]),O=-(M[1]-y[1])/(D||1),V=(M[0]-y[0])/(D||1);for(let[L,W]of[[-5,-4],[5,-4],[-3.5,0],[3.5,0]])for(let z=0;z<8;z++)for(let G of[z/8,(z+1)/8]){let F=Math.min(9,D*.03)*4*G*(1-G);l.push(y[0]+(M[0]-y[0])*G+O*L,I+(N-I)*G+W-F,y[1]+(M[1]-y[1])*G+V*L)}}}if(!c.length)return null;let u=new te;if(l.length){let v=new he;v.setAttribute("position",new Qt(l,3)),this.wireMat=this.wireMat||new As({color:2763822}),u.add(new Yr(v,this.wireMat))}if(!this.towerGeo){let v=[],x=new Ye(.12,.2,a,4);for(let[y,T]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let S=x.clone();S.rotateZ(-y*.08),S.rotateX(T*.08),S.translate(y*1.6,a/2,T*1.6),v.push(S)}for(let[y,T]of[[a-4,11],[a,8]]){let S=new we(T,.25,.25);S.translate(0,y,0),v.push(S)}for(let y=5;y<a;y+=6){let T=new we(3.4-y*.06,.12,3.4-y*.06);T.translate(0,y,0),v.push(T)}this.towerGeo=Bs(v.map(y=>y.toNonIndexed())),this.towerMat=new Yt({color:9080982})}let f=new je(this.towerGeo,this.towerMat,c.length),d=new ee,g=new Ve,_=new H(0,1,0),p=new H(1,1,1),m=new H;return c.forEach(([v,x,y,T],S)=>{g.setFromAxisAngle(_,T),m.set(v,x-.5,y),d.compose(m,g,p),f.setMatrixAt(S,d),this.collision.addCircle(t.key,v,y,2.2)}),f.computeBoundingSphere(),u.add(f),u}buildLabels(t){let e=this.meta.proj,n=e.xmin+t.i*1e3,i=e.zmin+t.j*1e3,r=new te;for(let o of this.meta.landmarks){let[a,l,c,h]=o;if(l<n||l>=n+1e3||c<i||c>=i+1e3||a===5||a===11||a===9||!h)continue;let u=document.createElement("canvas"),f=u.getContext("2d");f.font="bold 30px Arial";let d=Math.min(900,f.measureText(h).width+30);u.width=d,u.height=48,f.font="bold 30px Arial",f.fillStyle="rgba(255,255,255,0.88)",f.beginPath(),f.roundRect(2,2,d-4,44,12),f.fill(),f.fillStyle=Nx[a]||"#333",f.textAlign="center",f.textBaseline="middle",f.fillText(h,d/2,26);let g=new Ae(u);g.colorSpace=me;let _=new Wr(new Es({map:g,depthTest:!0,fog:!1,transparent:!0})),p=this.terrain.height(l,c)+(a===1?32:a===12?6:18);_.position.set(l,p,c),_.scale.set(d/48*3.2,3.2,1),_.userData.lm=!0,r.add(_)}return r}updateLabels(t){for(let e of this.tiles.values()){let n=e.parts.labels;if(n)for(let i of n.children){let r=i.position.distanceTo(t.position);if(i.visible=this.labelsOn&&r<650&&r>15,i.visible){let o=Math.max(1,r/120);i.scale.set(i.scale.x/i.scale.y*3.2*o,3.2*o,1)}}}}};var Eo=class{constructor(t,e){this.scene=t,this.lat=e*Math.PI/180,this.hours=10.5,this.speed=30,this.dayOfYear=140,this.cover=.46;let n=new io(4500,32,16);this.uniforms={top:{value:new Ut},horizon:{value:new Ut},sunDir:{value:new H},sunCol:{value:new Ut},cloudCol:{value:new Ut},time:{value:0},cover:{value:.5}};let i=new Je({uniforms:this.uniforms,side:Oe,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
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
          gl_FragColor = vec4(c, 1.0); }`});this.dome=new qt(n,i),this.dome.renderOrder=-1,this.dome.frustumCulled=!1,t.add(this.dome);let r=[];for(let l=0;l<1500;l++){let c=Math.random()*2-1,h=Math.random()*Math.PI*2,u=Math.sqrt(1-c*c);c<.05||r.push(Math.cos(h)*u*4e3,c*4e3,Math.sin(h)*u*4e3)}let o=new he;o.setAttribute("position",new Qt(r,3)),this.starMat=new Rs({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Zr(o,this.starMat),this.stars.frustumCulled=!1,t.add(this.stars),this.sun=new co(16777215,2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-90,a.right=90,a.top=90,a.bottom=-90,a.near=10,a.far=800,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,t.add(this.sun,this.sun.target),this.hemi=new oo(12375295,5922880,.9),t.add(this.hemi),t.fog=new Hr(13622246,400,2600),this.sunDir=new H,this.night=0}update(t,e){this.hours=(this.hours+t*this.speed/3600+24)%24;let n=23.44*Math.PI/180*Math.sin(2*Math.PI*(284+this.dayOfYear)/365),i=(this.hours-13.2)*15*Math.PI/180,r=Math.sin(this.lat)*Math.sin(n)+Math.cos(this.lat)*Math.cos(n)*Math.cos(i),o=Math.asin(r),a=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(this.lat)-Math.tan(n)*Math.cos(this.lat));this.sunDir.set(-Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).normalize();let l=eu.smoothstep(Math.sin(o),-.12,.18),c=Math.max(0,1-Math.abs(Math.sin(o)-.05)*6)*l;this.night=1-l;let h=new Ut(659490).lerp(new Ut(4030417),l),u=new Ut(1317418).lerp(new Ut(13229034),l).lerp(new Ut(15771752),c*.6);this.uniforms.top.value.copy(h),this.uniforms.horizon.value.copy(u),this.uniforms.sunDir.value.copy(this.sunDir),this.uniforms.sunCol.value.setRGB(1,.85-c*.3,.6-c*.3).multiplyScalar(l),this.uniforms.cloudCol.value.setRGB(.07+.93*l,.08+.9*l-c*.12,.11+.87*l-c*.22),this.uniforms.time.value+=t*Math.max(1,this.speed/30),this.uniforms.cover.value=this.cover,this.scene.fog.color.copy(u),this.scene.fog.near=300+l*200,this.scene.fog.far=1500+l*1300,this.sun.intensity=2.6*l*Math.min(1,Math.max(0,Math.sin(o))*4),this.sun.color.setRGB(1,.92-c*.25,.82-c*.35),this.hemi.intensity=.25+.85*l,this.hemi.color.setRGB(.55+.2*l,.62+.2*l,.85+.1*l),this.hemi.groundColor.setRGB(.25*l+.05,.27*l+.05,.2*l+.08),this.starMat.opacity=Math.max(0,this.night-.3)*1.2;let f=this.sunDir.y>0?this.sunDir:new H(.3,1,.2).normalize();this.sun.position.set(e.x+f.x*300,e.y+f.y*300,e.z+f.z*300),this.sun.target.position.copy(e),this.dome.position.copy(e),this.stars.position.copy(e)}clock(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};var ks=[{id:"city",name:"Utilitaria 1.2",desc:"Piccola e agile: ideale per i centri storici e i parcheggi stretti.",body:"hatch",L:3.65,W:1.64,H:1.55,wb:2.3,color:"#b8322a",mass:980,kw:51,nm:102,rpmMax:6200,gears:[3.91,2.16,1.48,1.12,.89],final:4.07,drive:"F",cda:.68,brake:8500,steer:.62,grip:1,wheelR:.29},{id:"compact",name:"Compatta 1.5 Turbo",desc:"La berlina compatta da tutti i giorni, brillante e confortevole.",body:"hatch",L:4.28,W:1.79,H:1.46,wb:2.63,color:"#1f4f9a",mass:1280,kw:110,nm:250,rpmMax:6300,gears:[3.77,2.09,1.32,.98,.76,.63],final:3.87,drive:"F",cda:.66,brake:11e3,steer:.6,grip:1.03,wheelR:.315},{id:"sedan",name:"Berlina 2.0 Diesel",desc:"Grande stradista a trazione posteriore, ideale per la SS36.",body:"sedan",L:4.75,W:1.83,H:1.44,wb:2.85,color:"#3a3f45",mass:1560,kw:140,nm:400,rpmMax:4800,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:2.81,drive:"R",cda:.64,brake:13500,steer:.58,grip:1.05,wheelR:.33},{id:"suv",name:"SUV 2.0 4x4",desc:"Alto e robusto, a trazione integrale: va anche sulle strade bianche.",body:"suv",L:4.55,W:1.86,H:1.68,wb:2.68,color:"#e6e6e2",mass:1720,kw:150,nm:340,rpmMax:6e3,gears:[4.46,2.51,1.56,1.14,.85,.67],final:3.65,drive:"A",cda:.88,brake:14e3,steer:.58,grip:1,wheelR:.36},{id:"sport",name:"Coupe Sportiva V6",desc:"Motore potente e assetto rigido. Attenzione ai limiti!",body:"coupe",L:4.45,W:1.92,H:1.28,wb:2.6,color:"#e8b10c",mass:1450,kw:320,nm:520,rpmMax:7600,gears:[3.4,2.3,1.7,1.32,1.06,.87,.71],final:3.73,drive:"R",cda:.62,brake:17e3,steer:.56,grip:1.18,wheelR:.34},{id:"van",name:"Furgone 2.3",desc:"Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.",body:"van",L:5.4,W:2.05,H:2.35,wb:3.45,color:"#f2f2f0",mass:2150,kw:103,nm:330,rpmMax:4200,gears:[4.17,2.31,1.48,1,.8,.65],final:3.9,drive:"F",cda:1.35,brake:15e3,steer:.6,grip:.92,wheelR:.35}],wu=new On({color:1844524,emissive:329738,shininess:120,specular:8947848}),Ox=new Yt({color:1710618}),Fx=new Yt({color:12106944}),uc=new Yt({color:2237478}),zx=new Yt({color:16053488});function Bx(s){let t=s.L,e=s.H,n=-t/2,i=t/2,r=.3;switch(s.body){case"sedan":return{body:[[n,r],[i,r],[i,.62],[i-.12,.8],[i-1.1,.92],[i-1.85,e],[n+1.25,e],[n+.55,.98],[n,.95]],belt:.95};case"suv":return{body:[[n,r+.1],[i,r+.1],[i,.85],[i-.2,1.05],[i-1,1.12],[i-1.55,e],[n+.2,e],[n+.02,1.15],[n,1]],belt:1.12};case"coupe":return{body:[[n,r-.05],[i,r-.05],[i,.55],[i-.2,.68],[i-1.35,.8],[i-2.15,e],[n+1.25,e-.03],[n+.3,.88],[n,.85]],belt:.82};case"van":return{body:[[n,r+.05],[i,r+.05],[i,.95],[i-.25,1.12],[i-.85,1.3],[i-1.3,e],[n,e]],belt:1.3};default:return{body:[[n,r],[i,r],[i,.7],[i-.15,.86],[i-.85,.96],[i-1.5,e],[n+.25,e],[n+.05,1],[n,.9]],belt:.96}}}function Eu(s,t,e,n=.04){let i=new Is(s.map(([o,a])=>new bt(o,a))),r=new eo(i,{depth:t-n*2,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,steps:1});return r.translate(0,0,-(t-n*2)/2),r.rotateY(-Math.PI/2),new qt(r,e)}function kx(s,t){let e=s.body.filter(([,r])=>r>=s.belt-.001),n=e.reduce((r,o)=>r+o[0],0)/e.length,i=e.reduce((r,o)=>r+o[1],0)/e.length;return e.map(([r,o])=>[r+(n-r)*t,Math.max(s.belt+.04,o+(i-o)*t*1.8)])}function To(s,t={}){let e=new te,n=new te;e.add(n);let i=new On({color:t.color||s.color,shininess:80,specular:5592405}),r=Bx(s),o=Eu(r.body,s.W,i,.06);o.castShadow=!0,n.add(o);let a=kx(r,.08),l=Eu(a,s.W+.02,wu,0);n.add(l);let c=r.body,h=c.length,u=-1,f=-1;for(let L=0;L<h;L++)c[L][1]>=s.H-.01&&((u<0||c[L][0]>c[u][0])&&(u=L),(f<0||c[L][0]<c[f][0])&&(f=L));let d=[],g=(L,W)=>{let z=W[0]-L[0],G=W[1]-L[1],F=Math.hypot(z,G)||1,Z=G/F,X=-z/F,k=(L[0]+W[0])/2;Z*k<0&&(Z=-Z,X=-X);let B=s.W/2-.1,q=.075,it=[L[0]+Z*q,L[1]+X*q],Y=[W[0]+Z*q,W[1]+X*q];d.push(-B,it[1],it[0],B,it[1],it[0],B,Y[1],Y[0],-B,it[1],it[0],B,Y[1],Y[0],-B,Y[1],Y[0]),d.push(-B,it[1],it[0],B,Y[1],Y[0],B,it[1],it[0],-B,it[1],it[0],-B,Y[1],Y[0],B,Y[1],Y[0])},_=c[(u-1+h)%h];g([_[0]-.03,Math.max(_[1],r.belt)+.02],[c[u][0]-.03,c[u][1]-.04]);let p=c[(f+1)%h];g([c[f][0]+.03,c[f][1]-.04],[p[0]+.03,Math.max(p[1],r.belt)+.02]);let m=new he;m.setAttribute("position",new Qt(d,3)),m.computeVertexNormals();let v=new qt(m,wu);n.add(v);let x=new we(s.W+.02,.22,.2);for(let L of[1,-1]){let W=new qt(x,uc);W.position.set(0,.38,L*(s.L/2+.02)),n.add(W);let z=new qt(new we(.52,.11,.02),zx);z.position.set(0,.5,L*(s.L/2+.11)),n.add(z)}let y=new Yt({color:14540253,emissive:0}),T=new Yt({color:12588058,emissive:0}),S=s.body==="van"?.85:s.body==="suv"?.88:.66;for(let L of[1,-1]){let W=new qt(new we(.42,.13,.06),y);W.position.set(L*(s.W/2-.3),S,s.L/2+.06),n.add(W);let z=new qt(new we(.4,.17,.06),T);z.position.set(L*(s.W/2-.25),r.body[r.body.length-1][1]-.12,-s.L/2-.06),n.add(z)}let E=[],A=s.wheelR,b=new Ye(A,A,.22,16);b.rotateZ(Math.PI/2);let M=new Ye(A*.62,A*.62,.235,8);M.rotateZ(Math.PI/2);let I=s.W/2-.16;for(let[L,W,z]of[[1,1,!0],[-1,1,!0],[1,-1,!1],[-1,-1,!1]]){let G=new te;G.position.set(L*I,A,W*s.wb/2);let F=new te;F.add(new qt(b,Ox));let Z=new qt(M,Fx);F.add(Z),G.add(F),e.add(G),E.push({pivot:G,spin:F,front:z})}let N=null,D=null,O=null,V=null;if(t.interior){N=new te;let L=s.W*.22,W=r.belt+.28,z=s.body==="van"?s.wb/2+.05:s.wb/2-.35,G=new qt(new we(s.W-.12,.28,.5),new Yt({color:2829616}));G.position.set(0,r.belt-.06,z+.3),N.add(G),O=document.createElement("canvas"),O.width=256,O.height=96,V=new Ae(O),V.colorSpace=me;let F=new qt(new Ke(.42,.16),new Fe({map:V}));F.position.set(L,r.belt+.06,z+.1),F.rotation.set(-.35,Math.PI,0),N.add(F),D=new te;let Z=new qt(new so(.18,.018,8,28),new Yt({color:1381653}));D.add(Z);for(let xt of[0,2.1,4.2]){let j=new qt(new we(.17,.025,.02),uc);j.position.set(Math.cos(xt+Math.PI/2)*.085,Math.sin(xt+Math.PI/2)*.085,0),j.rotation.z=xt+Math.PI/2,D.add(j)}let X=new qt(new Ye(.05,.05,.05,12),uc);X.rotation.x=Math.PI/2,D.add(X);let k=new te;k.position.set(L,r.belt-.08,z-.12),k.rotation.x=-.45,k.add(D),N.add(k);let B=new Yt({color:3816511,side:_e}),q=r.body.filter(([,xt])=>xt>=s.H-.01).map(([xt])=>xt),it=Math.max(...q),Y=r.body.find(([xt,j])=>Math.abs(j-r.belt)<.06&&xt>0)||[s.L/2-.9,r.belt];for(let xt of[1,-1]){let j=new H(xt*(s.W/2-.08),r.belt,Y[0]-.05),nt=new H(xt*(s.W/2-.14),s.H-.03,it),P=j.distanceTo(nt),dt=new qt(new we(.07,P,.09),B);dt.position.copy(j).add(nt).multiplyScalar(.5),dt.lookAt(nt),dt.rotateX(Math.PI/2),N.add(dt)}let ft=new qt(new Ke(s.W-.1,Math.max(.5,it-Math.min(...q))),new Yt({color:10131086,side:_e}));ft.rotation.x=Math.PI/2,ft.position.set(0,s.H-.05,(it+Math.min(...q))/2),N.add(ft);let gt=new qt(new Ke(s.W-.2,1.2),i);gt.rotation.x=-Math.PI/2+.08,gt.position.set(0,r.belt-.12,z+1.1),N.add(gt);let ut=new qt(new we(.5,.7,.12),new Yt({color:2763306}));ut.position.set(-L,r.belt-.05,z-1),N.add(ut),N.visible=!1,e.add(N),e.userData.eye=new H(L,W+.06,z-.75)}return{root:e,body:n,shell:o,wheels:E,headMat:y,tailMat:T,interior:N,steeringWheel:D,dashCanvas:O,dashTex:V,paint:i,exterior:[o,l,v]}}function Tu(s,t,e,n,i,r,o){let a=s.getContext("2d");a.fillStyle="#07090b",a.fillRect(0,0,256,96),a.fillStyle="#0d1a22",a.fillRect(4,4,248,88),a.fillStyle="#9fe3ff",a.font="bold 44px Arial",a.textAlign="center",a.fillText(String(Math.round(e)),90,58),a.font="14px Arial",a.fillStyle="#6fa7c0",a.fillText("km/h",90,80),a.font="bold 30px Arial",a.fillStyle="#ffd36b",a.fillText(r,200,50);let l=Math.min(1,n/i);a.fillStyle="#1e2a30",a.fillRect(150,66,96,10),a.fillStyle=l>.88?"#ff4a3a":"#59c9ff",a.fillRect(150,66,96*l,10),o&&(a.fillStyle="#fff",a.font="bold 13px Arial",a.fillText("Limite "+o,200,90)),t.needsUpdate=!0}var Ao=class{constructor(t,e){this.spec=t,this.world=e,this.m=t.mass,this.L=t.wb,this.a=t.wb*(t.drive==="R"?.48:t.drive==="A"?.45:.42),this.b=t.wb-this.a,this.I=this.m*(this.a*this.a+this.b*this.b)*.55,this.hcg=t.H*.36,this.x=0,this.z=0,this.y=0,this.h=0,this.u=0,this.v=0,this.w=0,this.vy=0,this.airborne=!1,this.steer=0,this.gear=1,this.rpm=850,this.shiftT=0,this.pitch=0,this.roll=0,this.dynPitch=0,this.dynRoll=0,this.throttle=0,this.brake=0,this.handbrake=0,this.ax=0,this.ay=0,this.surface=null,this.mu=1,this.wheelSpin=0,this.revHold=0,this.impact=0,this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let i=this.world.roads.surfaceAt(t,e,1e9);this.y=i.h,this.surface=i}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),i=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return i=Math.min(i,e.kw*1e3/Math.max(r,1)),i}update(t,e){let i=t/4;for(let r=0;r<4;r++)this.step(i,e)}step(t,e){let n=this.spec,i=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let P=r;r=o,o=P}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),h=e.steer*c,u=e.analogWheel?20:Math.abs(h)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-u*t,Math.min(u*t,h-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),g=Math.cos(this.h),_=-Math.sin(this.h),p=i.roads.surfaceAt(this.x,this.z,this.y);this.surface=p;let m=!!p.road,v=m?i.roads.ways[p.road.wi]:null,x=n.grip*(m?v.flags&64?.78:1:.68),y=m?v.flags&64?.03:.013:.06;n.drive==="A"&&!m&&(x*=1.12,y*=.7),this.mu=x;let T=i.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,S=i.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,E=Math.atan2(T-S,this.L),A=n.W*.8,b=i.roads.surfaceAt(this.x+g*A/2,this.z+_*A/2,this.y+.5).h,M=i.roads.surfaceAt(this.x-g*A/2,this.z-_*A/2,this.y+.5).h,I=Math.atan2(b-M,A),N=this.m*9.81*Math.cos(E),D=N*this.b/this.L-this.m*this.ax*this.hcg/this.L,O=N*this.a/this.L+this.m*this.ax*this.hcg/this.L;D=Math.max(D,N*.15),O=Math.max(O,N*.15),this.airborne&&(D=O=0);let V=this.gear>0?n.gears[this.gear-1]:3.6,L=Math.abs(this.u)/n.wheelR*30/Math.PI,W=L*V*n.final,z=900+r*2600;if((this.gear===1||this.gear===-1)&&W<z&&(W=W*.4+z*.6),W=Math.max(800,W),this.rpm+=(W-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let P=n.rpmMax*(.55+.37*r);if(this.rpm>P&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let dt=L*n.gears[this.gear-2]*n.final,rt=n.rpmMax*(.28+.3*r);this.rpm<rt&&dt<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let G=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&(G=this.torque(this.rpm)*V*n.final*.88/n.wheelR*r),this.gear<0&&(G=this.u<-7?0:-G*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&(G-=Math.sign(this.u)*this.torque(this.rpm)*.12*V*n.final/n.wheelR*(this.rpm/n.rpmMax));let F=n.drive==="F"?D:n.drive==="R"?O:D+O,Z=x*F;this.wheelSpin=Math.abs(G)>Z?Math.min(1,(Math.abs(G)-Z)/Z):0,G=Math.max(-Z,Math.min(Z,G));let X=0,k=n.brake*o;Math.abs(this.u)>.05&&(X=-Math.sign(this.u)*Math.min(k,x*(D+O)));let B=0;this.handbrake>0&&Math.abs(this.u)>.05&&(B=-Math.sign(this.u)*x*O*.8*this.handbrake);let q=Math.max(Math.abs(this.u),.5),it=this.u>=0?1:-1,Y=Math.atan2(this.v+this.a*this.w,q)-this.steer*it,ft=Math.atan2(this.v-this.b*this.w,q),gt=(P,dt,rt,at,mt)=>{let ot=-at*dt*P,lt=rt*dt;return Math.abs(ot)>lt&&(ot=Math.sign(ot)*lt*Math.max(1-mt,1-mt*(Math.abs(ot)/lt-1))),ot},ut=x*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(ut*=1-.35*this.wheelSpin);let xt=Math.min(.95,Math.abs((n.drive!=="R"?G:0)+X*.65)/Math.max(1,x*D)),j=gt(Y,D,x*Math.sqrt(1-xt*xt),10,.2),nt=gt(ft,O,ut,15,this.handbrake>0?.3:.05);this.slip=0}place(t,e,n){this.x=t,this.z=e,this.h=n,this.u=this.v=this.w=0,this.vy=0,this.gear=1,this.steer=0;let i=this.world.roads.surfaceAt(t,e,1e9);this.y=i.h,this.surface=i}get speed(){return Math.hypot(this.u,this.v)}get kmh(){return this.u*3.6}torque(t){let e=this.spec,n=Math.min(1.05,t/e.rpmMax),i=e.nm*Math.max(.45,.6+1.1*n-.95*n*n),r=t*Math.PI/30;return i=Math.min(i,e.kw*1e3/Math.max(r,1)),i}update(t,e){let i=t/4;for(let r=0;r<4;r++)this.step(i,e)}step(t,e){let n=this.spec,i=this.world,r=e.throttle,o=e.brake;if(this.gear>0&&o>.1&&r<.05&&this.u<.4?(this.revHold+=t,this.revHold>.35&&(this.gear=-1,this.revHold=0)):this.gear<0&&r>.1&&this.u>-.4?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0,this.gear<0){let Bt=r;r=o,o=Bt}this.throttle=r,this.brake=o,this.handbrake=e.handbrake;let a=Math.abs(this.u),l=1.15*this.L*n.grip*9.81/Math.max(1,a*a),c=e.analogWheel?n.steer:Math.min(n.steer,Math.max(.035,l)),h=e.steer*c,u=e.analogWheel?20:Math.abs(h)<Math.abs(this.steer)?3.2:2;this.steer+=Math.max(-u*t,Math.min(u*t,h-this.steer));let f=Math.sin(this.h),d=Math.cos(this.h),g=Math.cos(this.h),_=-Math.sin(this.h),p=i.roads.surfaceAt(this.x,this.z,this.y);this.surface=p;let m=!!p.road,v=m?i.roads.ways[p.road.wi]:null,x=n.grip*(m?v.flags&64?.78:1:.68),y=m?v.flags&64?.03:.013:.06;n.drive==="A"&&!m&&(x*=1.12,y*=.7),this.mu=x;let T=i.roads.surfaceAt(this.x+f*this.a,this.z+d*this.a,this.y+.5).h,S=i.roads.surfaceAt(this.x-f*this.b,this.z-d*this.b,this.y+.5).h,E=Math.atan2(T-S,this.L),A=n.W*.8,b=i.roads.surfaceAt(this.x+g*A/2,this.z+_*A/2,this.y+.5).h,M=i.roads.surfaceAt(this.x-g*A/2,this.z-_*A/2,this.y+.5).h,I=Math.atan2(b-M,A),N=this.m*9.81*Math.cos(E),D=N*this.b/this.L-this.m*this.ax*this.hcg/this.L,O=N*this.a/this.L+this.m*this.ax*this.hcg/this.L;D=Math.max(D,N*.15),O=Math.max(O,N*.15),this.airborne&&(D=O=0);let V=this.gear>0?n.gears[this.gear-1]:3.6,L=Math.abs(this.u)/n.wheelR*30/Math.PI,W=L*V*n.final,z=900+r*2600;if((this.gear===1||this.gear===-1)&&W<z&&(W=W*.4+z*.6),W=Math.max(800,W),this.rpm+=(W-this.rpm)*Math.min(1,t*12),this.shiftT>0&&(this.shiftT-=t),this.gear>0&&this.shiftT<=0){let Bt=n.rpmMax*(.55+.37*r);if(this.rpm>Bt&&this.gear<n.gears.length)this.gear++,this.shiftT=.3;else if(this.gear>1){let vt=L*n.gears[this.gear-2]*n.final,Ct=n.rpmMax*(.28+.3*r);this.rpm<Ct&&vt<n.rpmMax*.85&&(this.gear--,this.shiftT=.25)}}let G=0;this.shiftT<=0&&this.rpm<n.rpmMax*1.02&&(G=this.torque(this.rpm)*V*n.final*.88/n.wheelR*r),this.gear<0&&(G=this.u<-7?0:-G*.6),r<.05&&Math.abs(this.u)>1&&this.gear>0&&(G-=Math.sign(this.u)*this.torque(this.rpm)*.12*V*n.final/n.wheelR*(this.rpm/n.rpmMax));let F=n.drive==="F"?D:n.drive==="R"?O:D+O,Z=x*F;this.wheelSpin=Math.abs(G)>Z?Math.min(1,(Math.abs(G)-Z)/Z):0,G=Math.max(-Z,Math.min(Z,G));let X=0,k=n.brake*o;Math.abs(this.u)>.05&&(X=-Math.sign(this.u)*Math.min(k,x*(D+O)));let B=0;this.handbrake>0&&Math.abs(this.u)>.05&&(B=-Math.sign(this.u)*x*O*.8*this.handbrake);let q=Math.max(Math.abs(this.u),.5),it=this.u>=0?1:-1,Y=Math.atan2(this.v+this.a*this.w,q)-this.steer*it,ft=Math.atan2(this.v-this.b*this.w,q),gt=(Bt,vt,Ct)=>{let Dt=-(12*vt)*Bt,Tt=Ct*vt;return Math.abs(Dt)>Tt&&(Dt=Math.sign(Dt)*Tt*Math.max(.75,1-.25*(Math.abs(Dt)/Tt-1))),Dt},ut=x*(this.handbrake>0?.45:1);this.wheelSpin>0&&n.drive==="R"&&(ut*=1-.35*this.wheelSpin);let xt=gt(Y,D,x),j=gt(ft,O,ut);this.slip=Math.max(Math.abs(ft),Math.abs(Y)-Math.abs(this.steer)*0)*(Math.abs(this.u)>5?1:0);let nt=-.5*1.2*n.cda*this.u*Math.abs(this.u),P=Math.abs(this.u)>.05?-Math.sign(this.u)*y*(D+O):0,dt=-this.m*9.81*Math.sin(E),rt=this.m*9.81*Math.sin(I)*.5,at=Math.cos(this.steer),mt=Math.sin(this.steer),ot=G+X+B+nt+P+dt-xt*mt,lt=j+xt*at+rt;this.airborne&&(ot=nt+dt*0,lt=0);let R=ot/this.m+this.v*this.w,w=lt/this.m-this.u*this.w,K=this.airborne?0:(this.a*xt*at-this.b*j)/this.I,et=this.u;if(!this.airborne&&this.handbrake===0&&Math.abs(this.u)>6){let Bt=1.1*x*9.81/Math.abs(this.u);Math.abs(this.w)>Bt&&(this.w+=(Math.sign(this.w)*Bt-this.w)*Math.min(1,t*6)),this.v*=1-Math.min(.5,t*1.2)}this.u+=R*t,this.v+=w*t,this.w+=K*t,Math.sign(et)!==Math.sign(this.u)&&Math.abs(G)<1&&et!==0&&(this.u=0),Math.abs(this.u)<.05&&r<.02&&Math.abs(dt)<k+y*N+1500&&(this.u=0);let st=Math.min(1,Math.abs(this.u)/4),J=this.u*Math.tan(this.steer)/this.L;this.w=this.w*st+J*(1-st),this.v*=1-(1-st)*Math.min(1,t*8),this.ax=this.ax+(ot/this.m-this.ax)*Math.min(1,t*6),this.ay=this.ay+(lt/this.m-this.ay)*Math.min(1,t*6),this.h+=this.w*t;let Mt=f*this.u+g*this.v,yt=d*this.u+_*this.v;this.x+=Mt*t,this.z+=yt*t,this.collide();let St=i.roads.surfaceAt(this.x,this.z,this.y).h;this.airborne?(this.vy-=9.81*t,this.y+=this.vy*t,this.y<=St&&(this.y=St,this.airborne=!1,this.impact=Math.max(this.impact,Math.min(1,-this.vy/8)),this.vy=0)):this.y-St>.35&&this.y-St<50?(this.airborne=!0,this.vy=Math.min(this.vy,0)):(this.vy=(St-this.y)/t,this.vy=Math.max(-5,Math.min(5,this.vy)),this.y=St),this.pitch+=(E-this.pitch)*Math.min(1,t*10),this.roll+=(I-this.roll)*Math.min(1,t*10),this.dynPitch+=(-this.ax*.006-this.dynPitch)*Math.min(1,t*5),this.dynRoll+=(this.ay*.008-this.dynRoll)*Math.min(1,t*5),this.wheelSpinAngle=(this.wheelSpinAngle||0)+this.u/n.wheelR*t}collide(){let t=this.spec,e=this.world,n=Math.sin(this.h),i=Math.cos(this.h),r=t.W/2,o=[t.L/2-r,0,-(t.L/2-r)];for(let a of o){let l=this.x+n*a,c=this.z+i*a,h=e.collision.resolveCircle(l,c,r),u=e.traffic?e.traffic.resolveCircle(l,c,r):null;if(u&&(!h||u.depth>h.depth)&&(h=u),!h)continue;this.x+=h.nx*h.depth,this.z+=h.nz*h.depth;let f=Math.cos(this.h),d=-Math.sin(this.h),g=n*this.u+f*this.v,_=i*this.u+d*this.v,p=g*h.nx+_*h.nz;p<0&&(g-=1.25*p*h.nx,_-=1.25*p*h.nz,g*=.8,_*=.8,this.impact=Math.max(this.impact,Math.min(1,-p/12)),this.u=g*n+_*i,this.v=g*f+_*d,this.w*=.5,u&&u.car&&(u.car.bumped=3))}}};var Ro=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steerKb=0,this.wheelCfg={enabled:!1,steerAxis:0,throttleAxis:2,brakeAxis:3,invertPedals:!0,deadzone:.04};try{Object.assign(this.wheelCfg,JSON.parse(localStorage.getItem("bds-wheel")||"{}"))}catch{}addEventListener("keydown",t=>{t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[]}saveWheel(){try{localStorage.setItem("bds-wheel",JSON.stringify(this.wheelCfg))}catch{}}consume(t){let e=this.pressed.has(t);return this.pressed.delete(t),e}read(t){let e=this.keys,n=e.has("KeyA")||e.has("ArrowLeft"),i=e.has("KeyD")||e.has("ArrowRight"),r=(n?1:0)-(i?1:0),o=r===0?5:Math.sign(r)!==Math.sign(this.steerKb)&&this.steerKb!==0?6:2.6;this.steerKb+=Math.max(-o*t,Math.min(o*t,r-this.steerKb));let a={throttle:e.has("KeyW")||e.has("ArrowUp")?1:0,brake:e.has("KeyS")||e.has("ArrowDown")?1:0,steer:this.steerKb,handbrake:e.has("Space")?1:0,analogWheel:!1,buttons:new Set};(e.has("ShiftLeft")||e.has("ShiftRight"))&&(a.throttle*=.45);let l=navigator.getGamepads?navigator.getGamepads():[];for(let c of l){if(!c)continue;let h=c.axes,u=d=>c.buttons[d]?c.buttons[d].value:0;if(this.wheelCfg.enabled){let d=this.wheelCfg,g=p=>{if(p===void 0)return 0;let m=d.invertPedals?(1-p)/2:(p+1)/2;return m<.03?0:Math.min(1,m)},_=h[d.steerAxis]||0;(Math.abs(_)>.005||g(h[d.throttleAxis])>0||g(h[d.brakeAxis])>0)&&(a.steer=-_,a.analogWheel=!0,a.throttle=Math.max(a.throttle,g(h[d.throttleAxis])),a.brake=Math.max(a.brake,g(h[d.brakeAxis])))}else if(c.mapping==="standard"){let d=h[0]||0;Math.abs(d)>.08&&(a.steer=-Math.sign(d)*Math.pow(Math.abs(d),1.6)),a.throttle=Math.max(a.throttle,u(7)),a.brake=Math.max(a.brake,u(6)),(u(0)>.5||u(5)>.5)&&(a.handbrake=1)}let f=this.padPrev[c.index]||[];c.buttons.forEach((d,g)=>{d.pressed&&!f[g]&&a.buttons.add(g)}),this.padPrev[c.index]=c.buttons.map(d=>d.pressed)}return a}axesSnapshot(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e)return{id:e.id,axes:[...e.axes]};return null}};var Au=["#e8e8e6","#1b1c1e","#8d939a","#c5c8cc","#24365e","#7a1515","#3d4a3a","#5a5f66","#f0f0ee","#2c2c30","#b0b4b8","#6b2f1c"];function Hx(s,t){let e=To(s,{color:t});e.root.updateMatrixWorld(!0);let n=[],i=[];return e.root.traverse(r=>{if(!r.isMesh)return;let o=r.geometry.clone().applyMatrix4(r.matrixWorld);o=o.index?o.toNonIndexed():o;for(let c of Object.keys(o.attributes))c!=="position"&&c!=="normal"&&o.deleteAttribute(c);if(r.material===e.headMat||r.material===e.tailMat){let c=new Ut(r.material===e.headMat?16774877:16719888),h=new Float32Array(o.attributes.position.count*3);for(let u=0;u<h.length;u+=3)h[u]=c.r,h[u+1]=c.g,h[u+2]=c.b;o.setAttribute("color",new ge(h,3)),i.push(o);return}let a=new Ut().copy(r.material.color),l=new Float32Array(o.attributes.position.count*3);for(let c=0;c<l.length;c+=3)l[c]=a.r,l[c+1]=a.g,l[c+2]=a.b;o.setAttribute("color",new ge(l,3)),n.push(o)}),{body:Bs(n),lights:Bs(i)}}var Co=class{constructor(t){this.world=t,this.R=t.roads,this.cars=[],this.target=35,this.bodyMat=new On({vertexColors:!0,shininess:70,specular:4473924});let e=document.createElement("canvas");e.width=32,e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(16,60,2,16,40,44);i.addColorStop(0,"rgba(255,240,200,0.9)"),i.addColorStop(.5,"rgba(255,235,190,0.28)"),i.addColorStop(1,"rgba(255,230,180,0)"),n.fillStyle=i,n.fillRect(0,0,32,64),this.beamMat=new Fe({map:new Ae(e),transparent:!0,blending:Vi,depthWrite:!1,opacity:0,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),this.beamGeo=new Ke(5,16),this.beamGeo.rotateX(-Math.PI/2),this.beamGeo.rotateY(Math.PI),this.beamGeo.translate(0,.12,9.5),this.lightMat=new Fe({vertexColors:!0}),this.lightMat.color.setScalar(.35),this.variants=[];let r=ks.filter(a=>a.id!=="sport"),o=0;for(let a of r)for(let l=0;l<3;l++){let c=a.id==="van"?l?"#f2f2f0":"#d8dde2":Au[o++%Au.length];this.variants.push({spec:a,...Hx(a,c)})}this.group=new te,this.spawnTimer=0,this.time=0}setNight(t){this.lightMat.color.setScalar(.35+t*.65),this.beamMat.opacity=Math.max(0,t-.3)*.8,this.beamMat.visible=t>.31}clear(){for(let t of this.cars)this.group.remove(t.mesh);this.cars=[]}segEnds(t){let e=this.R.ways[t.wi];return t.dir>0?[e.nodes[t.k],e.nodes[t.k+1]]:[e.nodes[t.k+1],e.nodes[t.k]]}spawn(t,e){let n=this.R;for(let i=0;i<6;i++){let r=Math.random()*Math.PI*2,o=180+Math.random()*480,a=t+Math.cos(r)*o,l=e+Math.sin(r)*o,c=n.nearest(a,l,70,v=>v.drivable&&v.cls<=Gt.LIVING&&!(v.flags&Vt.PRIVATE));if(!c)continue;let h=n.ways[c.wi],u=h.oneway||Math.random()<.5?1:-1,f=h.cum[c.k+1]-h.cum[c.k],d=(u>0?c.t:1-c.t)*f;if(this.cars.some(v=>Math.hypot(v.x-c.px,v.z-c.pz)<25))continue;let g=this.variants[Math.floor(Math.random()*this.variants.length)],_=new te,p=new qt(g.body,this.bodyMat);p.castShadow=!0,_.add(p,new qt(g.lights,this.lightMat),new qt(this.beamGeo,this.beamMat));let m={wi:c.wi,k:c.k,dir:u,s:d,speed:Math.min(h.limit,50)/3.6*.7,mesh:_,spec:g.spec,x:c.px,z:c.pz,y:0,h:0,mood:.86+Math.random()*.2,next:null,bumped:0,stuck:0};this.chooseNext(m),this.cars.push(m),this.group.add(_),this.place(m,0);return}}chooseNext(t){let e=this.R,n=e.ways[t.wi],[,i]=this.segEnds(t),r=t.k+t.dir;if(!(t.dir>0?t.k+1===n.nodes.length-1:t.k===0)&&e.degree[i]<3){t.next={wi:t.wi,k:r,dir:t.dir,turn:0};return}let a=[],[l]=this.segEnds(t),c=Math.atan2(e.nx[i]-e.nx[l],e.nz[i]-e.nz[l]);for(let u=e.adjStart[i];u<e.adjStart[i+1];u++){let f=e.adjWay[u],d=e.adjPos[u],g=e.ways[f];if(!g.drivable||g.cls>Gt.LIVING||g.flags&Vt.PRIVATE)continue;let _=[];d<g.nodes.length-1&&_.push({wi:f,k:d,dir:1,to:g.nodes[d+1]}),d>0&&!g.oneway&&_.push({wi:f,k:d-1,dir:-1,to:g.nodes[d-1]});for(let p of _){if(p.wi===t.wi&&p.k===t.k&&p.dir===-t.dir)continue;let v=Math.atan2(e.nx[p.to]-e.nx[i],e.nz[p.to]-e.nz[i])-c;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;let x=1+Math.max(0,6-g.cls)*.5;Math.abs(v)<.4&&(x*=2.5),Math.abs(v)>2.6&&(x*=.05),a.push({...p,turn:v,wgt:x})}}if(!a.length){t.next={wi:t.wi,k:t.k,dir:-t.dir,turn:Math.PI};return}let h=Math.random()*a.reduce((u,f)=>u+f.wgt,0);for(let u of a)if(h-=u.wgt,h<=0){t.next=u;return}t.next=a[a.length-1]}place(t,e){let n=this.R,i=n.ways[t.wi],[r,o]=this.segEnds(t),a=n.nx[r],l=n.nz[r],c=n.nx[o],h=n.nz[o],u=Math.hypot(c-a,h-l)||.01,f=Math.min(1,t.s/u),d=(c-a)/u,g=(h-l)/u,_=n.laneCenter(i,t.dir),p=a+d*t.s-g*_,m=l+g*t.s+d*_,v=t.dir>0?f:1-f;t.y=n.heightOn(t.wi,t.k,v,p,m),t.x=p,t.z=m;let x=Math.atan2(d,g);e===0&&(t.h=x);let y=x-t.h;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;t.h+=y*Math.min(1,e*6),t.mesh.position.set(t.x,t.y,t.z),t.mesh.rotation.set(0,t.h,0)}update(t,e,n){this.time=n;let i=this.R,r=e.x,o=e.z;for(let c=this.cars.length-1;c>=0;c--){let h=this.cars[c];(Math.hypot(h.x-r,h.z-o)>800||h.stuck>40)&&(this.group.remove(h.mesh),this.cars.splice(c,1))}this.spawnTimer-=t,this.cars.length<this.target&&this.spawnTimer<=0&&(this.spawn(r,o),this.spawnTimer=.15);let a=Math.sin(e.h),l=Math.cos(e.h);for(let c of this.cars){let h=i.ways[c.wi],[u,f]=this.segEnds(c),g=Math.hypot(i.nx[f]-i.nx[u],i.nz[f]-i.nz[u])-c.s,_=Math.sin(c.h),p=Math.cos(c.h),m=h.limit/3.6*c.mood;if(c.next&&Math.abs(c.next.turn)>.35){let D=Math.abs(c.next.turn)>1?5.5:9;m=Math.min(m,Math.sqrt(D*D+2*2.2*Math.max(0,g-3)))}let v=1e9,x=0,y=(D,O,V,L,W)=>{let z=D-c.x,G=O-c.z,F=z*_+G*p;if(F<=0||F>60)return;let Z=Math.abs(z*p-G*_),X=L*_+W*p;if(Z>(X>.3?2:1.4))return;let k=F-4.6;k<v&&(v=k,x=V*Math.max(0,X))};for(let D of this.cars)D!==c&&y(D.x,D.z,D.speed,Math.sin(D.h),Math.cos(D.h));y(r,o,Math.max(0,e.u),a,l);let T=i.ntag[f]===jt.SIGNALS?f:c.next&&i.ntag[this.nodeAfter(c)]===jt.SIGNALS&&g<35?-2:-1;if(T!==-1){let D=T===f?g:g+20,O=Math.abs(_)>Math.abs(p)?1:0,V=cc(O,n);if((V==="R"||V==="Y"&&D>14)&&D>1.5){let L=D-3.5;L<v&&(v=Math.max(.1,L),x=0)}}c.bumped>0&&(c.bumped-=t,m=0);let S=1.6,E=2.4,A=2.2,b=1.25,M=c.speed,I=S*(1-Math.pow(Math.max(0,M)/Math.max(.1,m),4));if(v<1e8){let D=A+M*b+M*(M-x)/(2*Math.sqrt(S*E));I-=S*Math.pow(Math.max(0,D)/Math.max(.3,v),2)}I=Math.max(-9,I),c.speed=Math.max(0,M+I*t),c.speed<.1?c.stuck+=t:c.stuck=0,c.s+=c.speed*t;let N=0;for(;N++<8;){let[D,O]=this.segEnds(c),V=Math.hypot(i.nx[O]-i.nx[D],i.nz[O]-i.nz[D]);if(c.s<V)break;c.s-=V;let L=c.next||{wi:c.wi,k:c.k,dir:-c.dir};c.wi=L.wi,c.k=L.k,c.dir=L.dir,this.chooseNext(c)}this.place(c,t)}}nodeAfter(t){let e=t.next,n=this.R.ways[e.wi];return e.dir>0?n.nodes[e.k+1]:n.nodes[e.k]}resolveCircle(t,e,n){let i=null;for(let r of this.cars){let o=Math.sin(r.h),a=Math.cos(r.h),l=r.spec.W/2;for(let c of[r.spec.L/2-l,-(r.spec.L/2-l)]){let h=r.x+o*c,u=r.z+a*c,f=t-h,d=e-u,g=Math.hypot(f,d);g<n+l&&(!i||n+l-g>i.depth)&&(i={nx:g>1e-6?f/g:1,nz:g>1e-6?d/g:0,depth:n+l-g,car:r})}}return i}};var fc=class{constructor(){this.k=[],this.v=[]}push(t,e){let n=this.k,i=this.v,r=n.length;for(n.push(t),i.push(e);r>0;){let o=r-1>>1;if(n[o]<=n[r])break;[n[o],n[r]]=[n[r],n[o]],[i[o],i[r]]=[i[r],i[o]],r=o}}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let o=0;for(;;){let a=2*o+1,l=a+1,c=o;if(a<t.length&&t[a]<t[c]&&(c=a),l<t.length&&t[l]<t[c]&&(c=l),c===o)break;[t[c],t[o]]=[t[o],t[c]],[e[c],e[o]]=[e[o],e[c]],o=c}}return n}get size(){return this.k.length}},Io=class{constructor(t){this.R=t;let e=t,n=e.nodeCount,i=[];e.ways.forEach((l,c)=>{if(!l.drivable||l.cls===Gt.PEDESTRIAN)return;let h=Math.max(10,l.limit)/3.6,u=1;l.flags&Vt.PRIVATE&&(u=6),l.cls===Gt.SERVICE&&(u=1.8),l.cls===Gt.TRACK&&(u=3);for(let f=0;f<l.nodes.length-1;f++){let d=l.nodes[f],g=l.nodes[f+1],p=(l.cum[f+1]-l.cum[f])/h*u;i.push(d,g,p,c,f),l.oneway||i.push(g,d,p,c,f)}});let r=i.length/5,o=new Int32Array(n+1);for(let l=0;l<r;l++)o[i[l*5]+1]++;for(let l=0;l<n;l++)o[l+1]+=o[l];let a=o.slice(0,n);this.eTo=new Int32Array(r),this.eCost=new Float32Array(r),this.eWay=new Int32Array(r);for(let l=0;l<r;l++){let c=a[i[l*5]]++;this.eTo[c]=i[l*5+1],this.eCost[c]=i[l*5+2],this.eWay[c]=i[l*5+3]}this.eStart=o,this.dist=new Float32Array(n),this.prev=new Int32Array(n),this.prevWay=new Int32Array(n),this.stamp=new Int32Array(n),this.closed=new Int32Array(n),this.run=0}route(t,e,n,i,r){let o=this.R,a=L=>L.drivable&&L.cls!==Gt.PEDESTRIAN,l=o.nearest(t,e,60,a),c=o.nearest(i,r,400,a);if(!l||!c)return null;let h=++this.run,u=new fc,f=Math.sin(n),d=Math.cos(n),g=o.ways[l.wi],_=g.nodes[l.k],p=g.nodes[l.k+1],m=g.cum[l.k+1]-g.cum[l.k],v=Math.max(10,g.limit)/3.6,x=l.dx*f+l.dz*d,y=(L,W)=>{this.stamp[L]!==h&&(this.stamp[L]=h,this.dist[L]=1e18,this.closed[L]=0),W<this.dist[L]&&(this.dist[L]=W,this.prev[L]=-1,this.prevWay[L]=l.wi,u.push(W+this.h(L,i,r),L))},T=25;y(p,(1-l.t)*m/v+(x<0?T:0)),g.oneway||y(_,l.t*m/v+(x>0?T:0));let S=o.ways[c.wi],E=S.nodes[c.k],A=S.nodes[c.k+1],b=new Set([E,A]),M=-1,I=0;for(;u.size;){let L=u.pop();if(this.closed[L])continue;if(this.closed[L]=1,b.has(L)){M=L;break}if(++I>4e5)break;let W=this.dist[L];for(let z=this.eStart[L];z<this.eStart[L+1];z++){let G=this.eTo[z];this.stamp[G]!==h&&(this.stamp[G]=h,this.dist[G]=1e18,this.closed[G]=0);let F=W+this.eCost[z];F<this.dist[G]&&(this.dist[G]=F,this.prev[G]=L,this.prevWay[G]=this.eWay[z],u.push(F+this.h(G,i,r),G))}}if(M<0)return null;let N=[],D=[];for(let L=M;L>=0;L=this.prev[L])N.push(L),D.push(this.prevWay[L]);N.reverse(),D.reverse();let O=[[l.px,l.pz]];for(let L of N)O.push([o.nx[L],o.nz[L]]);O.push([c.px,c.pz]);let V={pts:O,nodes:N,ways:D,dest:[c.px,c.pz],destRaw:[i,r],time:this.dist[M]};V.cum=[0];for(let L=1;L<O.length;L++)V.cum.push(V.cum[L-1]+Math.hypot(O[L][0]-O[L-1][0],O[L][1]-O[L-1][1]));return V.length=V.cum[V.cum.length-1],V.steps=this.instructions(V),V}h(t,e,n){return Math.hypot(this.R.nx[t]-e,this.R.nz[t]-n)/(130/3.6)}instructions(t){let e=this.R,n=[],{nodes:i,ways:r,pts:o,cum:a}=t,l=h=>{let u=e.ways[h];return u.name||u.ref||""},c=1;for(;c<i.length-1;){let h=i[c],u=r[c],f=r[c+1],d=e.ways[u].flags&Vt.ROUNDABOUT,g=e.ways[f].flags&Vt.ROUNDABOUT,_=o[c],p=o[c+1],m=o[c+2];if(!d&&g){let I=0,N=c+1;for(;N<i.length-1&&e.ways[r[N+1]].flags&Vt.ROUNDABOUT;)this.hasExit(i[N],r[N])&&I++,N++;I++;let D=N+1<r.length?l(r[N+1]):"";n.push({i:c,d:a[c+1],type:"roundabout",exit:I,name:D,text:`Alla rotatoria prendi la ${I}\xAA uscita`+(D?` verso ${D}`:"")}),c=N+1;continue}if(d){c++;continue}if(e.degree[h]<3){c++;continue}let v=Math.atan2(p[0]-_[0],p[1]-_[1]),y=Math.atan2(m[0]-p[0],m[1]-p[1])-v;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;let T=y*180/Math.PI,S=l(u),E=l(f),A=E!==S;if(Math.abs(T)<25&&!A){c++;continue}if(Math.abs(T)<25&&A&&!this.realChoice(h,u)){c++;continue}let b,M;Math.abs(T)<25?(b="straight",M="Prosegui dritto"):T>=25&&T<55?(b="slight-left",M="Tieni la sinistra"):T>=55&&T<150?(b="left",M="Svolta a sinistra"):T<=-25&&T>-55?(b="slight-right",M="Tieni la destra"):T<=-55&&T>-150?(b="right",M="Svolta a destra"):(b="uturn",M="Fai inversione a U"),E&&(M+=(b==="straight"?" su ":" in ")+E),n.push({i:c,d:a[c+1],type:b,name:E,text:M}),c++}return n.push({i:i.length,d:t.length,type:"arrive",text:"Sei arrivato a destinazione",name:""}),n}hasExit(t,e){let n=this.R;for(let i=n.adjStart[t];i<n.adjStart[t+1];i++){let r=n.ways[n.adjWay[i]];if(!(r.flags&Vt.ROUNDABOUT)&&r.drivable&&r.cls<Gt.SERVICE+1){let o=n.adjPos[i];if(!r.oneway||o<r.nodes.length-1)return!0}}return!1}realChoice(t,e){let n=this.R,i=0;for(let r=n.adjStart[t];r<n.adjStart[t+1];r++)n.adjWay[r]!==e&&n.ways[n.adjWay[r]].drivable&&n.ways[n.adjWay[r]].cls<=Gt.LIVING&&i++;return i>=2}};function Ru(s,t,e){let{pts:n,cum:i}=s,r=1e9,o=0,a=0,l=Math.max(0,(s._lastI||0)-30),c=Math.min(n.length-1,(s._lastI||0)+200);for(let h=l;h<c;h++){let u=n[h][0],f=n[h][1],d=n[h+1][0]-u,g=n[h+1][1]-f,_=d*d+g*g||1e-9,p=((t-u)*d+(e-f)*g)/_;p=Math.max(0,Math.min(1,p));let m=Math.hypot(t-u-d*p,e-f-g*p);m<r&&(r=m,o=i[h]+Math.sqrt(_)*p,a=h)}return s._lastI=a,{off:r,s:o,i:a}}var Vx=["#f39a4a","#f39a4a","#f7c94f","#f6e08f","#ffffff","#f2f2f2","#e6e9eb","#e6e9eb","#b9bfc3","#b39b7a","#d9d2c4"],Gx=["#ff9e45","#ff9e45","#ffd25c","#f2e2a0","#c9d3db","#b9c3cb","#a9b3bb","#a9b3bb","#7d878f","#7d6f5d","#8d877c"],Wx={1:"\u26EA",2:"\u{1F689}",3:"\u{1F3DB}",4:"\u{1F3E5}",5:"\u26FD",6:"\u{1F3F0}",7:"\u2605",8:"\u{1F333}",9:"\u{1F6D2}",10:"\u{1F3AD}",11:"\u{1F3EB}",12:"\u{1F4A7}",13:"\u26F0"},Po=class{constructor(t,e){this.world=t,this.R=t.roads,this.meta=e,this.mini=document.getElementById("minimap"),this.miniCtx=this.mini.getContext("2d"),this.big=document.getElementById("bigmap"),this.bigCtx=this.big.getContext("2d"),this.zoom=.35,this.cx=0,this.cz=0,this.major=[],this.R.ways.forEach((n,i)=>{n.cls<=Gt.TERTIARY&&n.drivable&&this.major.push(i)}),this.waters=e.waters,this.comuni=e.comuni.map(n=>{let i=null,r=0;for(let o of n.rings){let a=0,l=0,c=0;for(let h=0;h<o.length;h++){let u=(h+1)%o.length,f=o[h][0]*o[u][1]-o[u][0]*o[h][1];a+=f,l+=(o[h][0]+o[u][0])*f,c+=(o[h][1]+o[u][1])*f}Math.abs(a)>r&&(r=Math.abs(a),i=[l/(3*a),c/(3*a)])}return{...n,label:i}}),this.night=!1}drawMini(t,e,n){let i=this.mini,r=this.miniCtx,o=i.width,a=i.height,l=Math.abs(t.u*3.6),c=1.7-Math.min(1.1,l/110)*1,h=Math.hypot(o,a)/c*.62;r.save(),r.fillStyle=n?"#18222b":"#dfe6d6",r.fillRect(0,0,o,a),r.translate(o/2,a*.64);let u=-Math.PI/2-Math.atan2(Math.cos(t.h),Math.sin(t.h));r.rotate(u),r.scale(c,c),r.translate(-t.x,-t.z),this.drawWaters(r,t.x,t.z,h,n),this.drawRoads(r,t.x,t.z,h,c,n,!1),e&&this.drawRoute(r,e,c,t),r.restore(),r.save(),r.translate(o/2,a*.64),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-11),r.lineTo(8,9),r.lineTo(0,4),r.lineTo(-8,9),r.closePath(),r.fill(),r.stroke(),r.restore();let f=o/2+Math.sin(u+Math.PI)*0+Math.cos(u-Math.PI/2)*(o/2-16),d=a/2+Math.sin(u-Math.PI/2)*(a/2-16);r.fillStyle="rgba(0,0,0,0.55)",r.beginPath(),r.arc(f,d,10,0,7),r.fill(),r.fillStyle="#fff",r.font="bold 12px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("N",f,d+1)}drawWaters(t,e,n,i,r){t.fillStyle=r?"#1d3b57":"#9cc3e4";for(let o of this.waters){let a=o.o[0];if(!(!a||Math.abs(a[0][0]-e)>i+3e3||Math.abs(a[0][1]-n)>i+3e3)){t.beginPath();for(let l of o.o)l.forEach((c,h)=>h?t.lineTo(c[0],c[1]):t.moveTo(c[0],c[1])),t.closePath();t.fill()}}}drawRoads(t,e,n,i,r,o,a){let l=this.R,c=Array.from({length:11},()=>[]);if(a&&r<.18)for(let u of this.major)c[l.ways[u].cls].push(u*16384-1);else l.segmentsNear(e,n,i,(u,f)=>{let d=l.ways[u];a&&r<.35&&d.cls>=Gt.SERVICE||c[d.cls].push(u*16384+f)});let h=o?Gx:Vx;for(let u=0;u<2;u++)for(let f=10;f>=0;f--){let d=c[f];if(!d.length)continue;let g=[12,11,9,8,7,6,6,5,4,3,5][f],_=Math.max(a?1:1.6,g*r);if(u===0?(t.strokeStyle=o?"#0c1116":"#9aa19a",t.lineWidth=(_+(a?1.2:2.2))/r):(t.strokeStyle=h[f],t.lineWidth=_/r),!(u===0&&f>=Gt.SERVICE)){t.beginPath();for(let p of d){let m=Math.floor((p+1)/16384),v=p-m*16384,x=l.ways[m];if(v<0)for(let y=0;y<x.nodes.length;y++){let T=x.nodes[y];y?t.lineTo(l.nx[T],l.nz[T]):t.moveTo(l.nx[T],l.nz[T])}else{let y=x.nodes[v],T=x.nodes[v+1];t.moveTo(l.nx[y],l.nz[y]),t.lineTo(l.nx[T],l.nz[T])}}t.lineCap="round",t.stroke()}}}drawRoute(t,e,n,i){t.strokeStyle="rgba(20,110,255,0.9)",t.lineWidth=Math.max(5,7*n)/n,t.lineJoin="round",t.lineCap="round",t.beginPath();let r=Math.max(0,e._lastI||0);i?t.moveTo(i.x,i.z):t.moveTo(e.pts[0][0],e.pts[0][1]);for(let a=r+1;a<e.pts.length;a++)t.lineTo(e.pts[a][0],e.pts[a][1]);t.stroke();let o=e.dest;t.fillStyle="#e8262b",t.beginPath(),t.arc(o[0],o[1],7/n,0,7),t.fill()}resizeBig(){this.big.width=this.big.clientWidth*devicePixelRatio,this.big.height=this.big.clientHeight*devicePixelRatio}toScreen(t,e){let n=this.zoom*devicePixelRatio;return[(t-this.cx)*n+this.big.width/2,(e-this.cz)*n+this.big.height/2]}toWorld(t,e){let n=this.zoom*devicePixelRatio;return[(t*devicePixelRatio-this.big.width/2)/n+this.cx,(e*devicePixelRatio-this.big.height/2)/n+this.cz]}drawBig(t,e,n){let i=this.big,r=this.bigCtx,o=i.width,a=i.height,l=this.zoom*devicePixelRatio;r.save(),r.fillStyle="#e4e9dc",r.fillRect(0,0,o,a),r.translate(o/2,a/2),r.scale(l,l),r.translate(-this.cx,-this.cz);let c=Math.hypot(o,a)/2/l;for(let u of this.comuni){let f=this.meta.featured.includes(u.n);r.fillStyle=f?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.04)",r.beginPath();for(let d of u.rings)d.forEach((g,_)=>_?r.lineTo(g[0],g[1]):r.moveTo(g[0],g[1])),r.closePath();r.fill(),r.setLineDash([8/l,6/l]),r.strokeStyle="rgba(120,60,140,0.55)",r.lineWidth=1.5/l,r.stroke(),r.setLineDash([])}this.drawWaters(r,this.cx,this.cz,c+2e4,!1),r.strokeStyle="#8fbbe0",r.lineWidth=Math.max(1,6*l)/l,r.beginPath();for(let u of this.meta.rivers)u.w==="stream"&&l<.3||u.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));r.stroke(),r.strokeStyle="#6d6d6d",r.lineWidth=Math.max(1.5,3*l)/l,r.setLineDash([10/l,6/l]),r.beginPath();for(let u of this.R.rails)u.p.forEach((f,d)=>d?r.lineTo(f[0],f[1]):r.moveTo(f[0],f[1]));if(r.stroke(),r.setLineDash([]),this.drawRoads(r,this.cx,this.cz,c,l,!1,!0),e&&this.drawRoute(r,e,l,null),r.restore(),r.textAlign="center",r.textBaseline="middle",l>.6){r.font=`${13*devicePixelRatio}px Arial`;for(let u of this.meta.landmarks){if(u[0]===11||u[0]===5&&l<1.2)continue;let[f,d]=this.toScreen(u[1],u[2]);f<0||d<0||f>o||d>a||(r.fillText(Wx[u[0]]||"\u2022",f,d),l>1.2&&(r.fillStyle="#333",r.fillText(u[3],f,d+14*devicePixelRatio),r.fillStyle="#000"))}}if(l>.25){r.font=`italic ${12*devicePixelRatio}px Arial`;for(let u of this.meta.places){if(u.t==="town"||u.t==="city"||(u.t==="hamlet"||u.t==="neighbourhood"||u.t==="locality")&&l<.6)continue;let[f,d]=this.toScreen(u.x,u.z);f<0||d<0||f>o||d>a||(r.lineWidth=3,r.strokeStyle="rgba(255,255,255,0.85)",r.strokeText(u.n,f,d),r.fillStyle="#4a4a4a",r.fillText(u.n,f,d))}}for(let u of this.comuni){if(!u.label)continue;let f=this.meta.featured.includes(u.n),[d,g]=this.toScreen(u.label[0],u.label[1]);d<-100||g<-50||d>o+100||g>a+50||(r.font=`bold ${(f?17:13)*devicePixelRatio}px Arial`,r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.9)",r.strokeText(u.n.toUpperCase(),d,g),r.fillStyle=f?"#5a2a72":"#7b6d82",r.fillText(u.n.toUpperCase(),d,g))}if(n){let[u,f]=this.toScreen(n[0],n[1]);r.font=`${26*devicePixelRatio}px Arial`,r.fillText("\u{1F3C1}",u+6,f-12)}if(t){let[u,f]=this.toScreen(t.x,t.z);r.save(),r.translate(u,f),r.rotate(Math.atan2(Math.cos(t.h),Math.sin(t.h))+Math.PI/2),r.scale(devicePixelRatio,devicePixelRatio),r.fillStyle="#ff4136",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(9,10),r.lineTo(0,5),r.lineTo(-9,10),r.closePath(),r.fill(),r.stroke(),r.restore()}let h=[50,100,200,500,1e3,2e3,5e3].find(u=>u*l>80*devicePixelRatio)||5e3;r.fillStyle="#222",r.fillRect(20,a-30,h*l,4),r.font=`${12*devicePixelRatio}px Arial`,r.textAlign="left",r.fillText(h>=1e3?h/1e3+" km":h+" m",20,a-42)}};var Lo=class{constructor(){this.ctx=null,this.muted=!1}start(){if(!this.ctx)try{let t=new(window.AudioContext||window.webkitAudioContext);this.ctx=t,this.gain=t.createGain(),this.gain.gain.value=0;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=700,e.Q.value=2,this.filt=e,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o2=t.createOscillator(),this.o2.type="square";let n=t.createGain();n.gain.value=.35,this.o1.connect(e),this.o2.connect(n),n.connect(e);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=r.getChannelData(0);for(let a=0;a<i;a++)o[a]=Math.random()*2-1;this.noise=t.createBufferSource(),this.noise.buffer=r,this.noise.loop=!0,this.nf=t.createBiquadFilter(),this.nf.type="bandpass",this.nf.frequency.value=400,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nf),this.nf.connect(this.ng),this.ng.connect(t.destination),e.connect(this.gain),this.gain.connect(t.destination),this.o1.start(),this.o2.start(),this.noise.start()}catch{this.ctx=null}}update(t,e,n,i){if(!this.ctx)return;let r=this.ctx.currentTime,o=t/60*2;this.o1.frequency.setTargetAtTime(o,r,.03),this.o2.frequency.setTargetAtTime(o*.5,r,.03),this.filt.frequency.setTargetAtTime(400+t*.25+e*600,r,.05);let a=this.muted?0:.05+e*.06;this.gain.gain.setTargetAtTime(a,r,.05),this.ng.gain.setTargetAtTime(this.muted?0:Math.min(.12,n/300+i*.25),r,.1),this.nf.frequency.setTargetAtTime(300+n*6+i*1500,r,.1)}};var wt=s=>document.getElementById(s),Fo={low:{viewTiles:1,shadows:!1,pixelRatio:1,trees:.5},mid:{viewTiles:2,shadows:!0,pixelRatio:1.25,trees:.8},high:{viewTiles:3,shadows:!0,pixelRatio:2,trees:1}},U={started:!1,paused:!1,mapOpen:!1,camMode:0,route:null,dest:null,voice:!0,carIdx:0};window.BDS=U;async function Xx(){let s=(a,l)=>{wt("loadbar").style.width=(a*100).toFixed(0)+"%",l&&(wt("loadmsg").textContent=l)};s(.05,"Caricamento della cartografia reale\u2026");let t=0,e=a=>a.then(l=>(t++,s(.05+t/4*.6),l)),[n,i,r,o]=await Promise.all([e(pi("meta","data/meta.js")),e(pi("roads","data/roads.js")),e(pi("height","data/height.js")),e(pi("landcover","data/landcover.js"))]);s(.7,"Costruzione della rete stradale ("+i.ways.length.toLocaleString("it")+" vie OSM)\u2026"),await new Promise(a=>setTimeout(a,20)),U.meta=n,U.proj=new go(n.proj),U.terrain=new xo(n,r,o),U.roads=new yo(i,U.terrain,n),s(.9,"Preparazione del navigatore\u2026"),await new Promise(a=>setTimeout(a,20)),U.router=new Io(U.roads),s(1,"Pronto"),wt("loading").classList.add("hidden"),_c()}function qx(s,t){let e=U.roads,n=e.streets.get(s)||[],i=null;for(let r of n){let o=U.world.comuneAt(r.x,r.z);t&&o!==t||(!i||r.len>i.len)&&(i=r)}return i}var Uo={label:"Giussano \u2013 Via Arturo Toscanini 22A (casa)",street:"Via Arturo Toscanini",comune:"Giussano",frac:.5};function Yx(){let s=new URLSearchParams(location.search),t=window.BDS_START||{},e=+(s.get("lat")||t.lat||0),n=+(s.get("lon")||t.lon||0);return e&&n?(U.pickedStart=U.proj.fromLatLon(e,n),"picked"):null}function Zx(){let s=U.meta,t=[];t.push({id:"casa",label:Uo.label}),t.push({id:"viamilano",label:"Giussano \u2013 Via Milano"});for(let n of s.featured)t.push({id:"comune:"+n,label:n+" \u2013 centro"});let e=s.comuni.map(n=>n.n).filter(n=>!s.featured.includes(n)).sort();for(let n of e)t.push({id:"comune:"+n,label:n+" (fuori area principale)"});return t}function _c(){wt("menu").classList.remove("hidden");let t=wt("cars");t.innerHTML="",ks.forEach((n,i)=>{let r=document.createElement("div");r.className="car panel"+(i===U.carIdx?" sel":""),r.innerHTML=`<div class="sw" style="background:${n.color}"></div><b>${n.name}</b><small>${n.desc}</small>
      <div class="spec"><span>${Math.round(n.kw*1.36)} CV</span><span>${n.mass} kg</span><span>${n.gears.length} marce aut.</span><span>${{F:"Anteriore",R:"Posteriore",A:"4x4"}[n.drive]}</span></div>`,r.onclick=()=>{U.carIdx=i,[...t.children].forEach((o,a)=>o.classList.toggle("sel",a===i))},t.appendChild(r)});let e=wt("start");e.innerHTML="";for(let n of Zx()){let i=document.createElement("option");i.value=n.id,i.textContent=n.label,e.appendChild(i)}if(U.pickedStart){let n=document.createElement("option");n.value="picked",n.textContent="Punto scelto sulla mappa",e.prepend(n),e.value="picked"}wt("go").onclick=()=>Jx(),wt("pickstart").onclick=()=>{Lu(),Du("start")}}function Lu(){if(U.renderer)return;let s=wt("game"),t=Fo[wt("quality").value]||Fo.mid;U.settings={...t};let e=new kr({canvas:s,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,t.pixelRatio)),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=t.shadows,e.shadowMap.type=Zl,U.renderer=e;let n=new Vr;U.scene=n,U.camera=new Ne(62,innerWidth/innerHeight,.5,5e3),U.sky=new Eo(n,U.meta.proj.lat0),U.world=new wo(n,U.meta,U.terrain,U.roads,U.settings),U.traffic=new Co(U.world),U.world.traffic=U.traffic,n.add(U.traffic.group),U.maps=new Po(U.world,U.meta),U.input=new Ro,U.audio=new Lo,addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),U.camera.aspect=innerWidth/innerHeight,U.camera.updateProjectionMatrix(),U.mapOpen&&(U.maps.resizeBig(),U.mapDirty=!0)}),e_(),n_(),requestAnimationFrame(Nu)}function zo(s){let t=U.roads,e=U.world,n=(i,r,o=!1)=>{let a=t.ways[i],[l,c,h]=t.pointAt(a,a.len*r),u=a.nodes[h],f=a.nodes[h+1],d=Math.atan2(t.nx[f]-t.nx[u],t.nz[f]-t.nz[u]);o&&!a.oneway&&Math.cos(d)<0&&(d+=Math.PI);let g=Math.cos(d-Math.atan2(t.nx[f]-t.nx[u],t.nz[f]-t.nz[u]))>0,_=t.laneCenter(a,g?1:-1);return{x:l-Math.cos(d)*_,z:c+Math.sin(d)*_,h:d}};if(s==="picked"&&U.pickedStart){let i=t.nearest(U.pickedStart[0],U.pickedStart[1],300,r=>r.drivable&&r.cls<=Gt.SERVICE);if(i)return n(i.wi,(t.ways[i.wi].cum[i.k]+(t.ways[i.wi].cum[i.k+1]-t.ways[i.wi].cum[i.k])*i.t)/t.ways[i.wi].len)}if(s==="casa"){if(Yx()==="picked")return zo("picked");let i=-1;if(t.ways.forEach((r,o)=>{if(r.name!==Uo.street||!r.drivable||r.cls>Gt.RESIDENTIAL)return;let[a,l]=t.pointAt(r,r.len/2);e.comuneAt(a,l)===Uo.comune&&(i<0||r.len>t.ways[i].len)&&(i=o)}),i>=0)return n(i,Uo.frac);s="comune:Giussano"}if(s==="viamilano"){let i=qx("Via Milano","Giussano");if(i)return n(i.wi,.35,!0);s="comune:Giussano"}if(s.startsWith("comune:")){let i=s.slice(7),r=U.meta.places.find(c=>c.n===i&&(c.t==="town"||c.t==="city"||c.t==="village")),o,a;if(r)o=r.x,a=r.z;else{let c=U.maps.comuni.find(h=>h.n===i);[o,a]=c&&c.label?c.label:[0,0]}let l=t.nearest(o,a,400,c=>c.drivable&&c.cls<=Gt.RESIDENTIAL&&c.cls>=Gt.SECONDARY);if(l){let c=t.ways[l.wi];return n(l.wi,(c.cum[l.k]+(c.cum[l.k+1]-c.cum[l.k])*l.t)/c.len)}return{x:o,z:a,h:0}}return{x:0,z:0,h:0}}function $x(){U.carModel&&(U.scene.remove(U.carModel.root),U.scene.remove(U.headlights));let s=ks[U.carIdx];U.vehicle=new Ao(s,U.world),U.carModel=To(s,{interior:!0}),U.scene.add(U.carModel.root);let t=new te;for(let e of[1,-1]){let n=new lo(16773590,0,90,.5,.45,1.2);n.position.set(e*(s.W/2-.3),.7,s.L/2),n.target.position.set(e*1.5,-1.5,s.L/2+30),t.add(n,n.target)}U.headlights=t,U.carModel.root.add(t),U.lightsOn=!1}function Jx(){U.audio&&U.audio.start(),Lu(),U.settings.viewTiles=(Fo[wt("quality").value]||Fo.mid).viewTiles,U.traffic.target=+wt("traffic").value,wt("ptraffic").value=wt("traffic").value,U.sky.hours=+wt("tod").value,$x();let s=zo(wt("start").value);U.vehicle.place(s.x,s.z,s.h),U.traffic.clear(),U.camInit=!0,wt("menu").classList.add("hidden"),wt("hud").classList.remove("hidden"),U.started=!0,U.paused=!1,U.loadingWorld=!0,yn("Caricamento della zona\u2026",1500),U.audio.start()}function Kx(){let s=U.vehicle,t=U.roads,e=t.nearest(s.x,s.z,300,a=>a.drivable&&a.cls<=Gt.SERVICE);if(!e)return;let n=t.ways[e.wi],i=n.nodes[e.k],r=n.nodes[e.k+1],o=Math.atan2(t.nx[r]-t.nx[i],t.nz[r]-t.nz[i]);!n.oneway&&Math.cos(o-s.h)<0&&(o+=Math.PI),s.place(e.px,e.pz,o),yn("Rimesso in strada",1200)}var No=0;function yn(s,t=2500){let e=wt("toast");e.textContent=s,e.classList.add("show"),No=performance.now()+t}function Vs(s){if(!(!U.voice||!window.speechSynthesis))try{let t=new SpeechSynthesisUtterance(s);t.lang="it-IT",t.rate=1.05,speechSynthesis.cancel(),speechSynthesis.speak(t)}catch{}}var jx={left:"\u21B0",right:"\u21B1","slight-left":"\u2196","slight-right":"\u2197",straight:"\u2B06",uturn:"\u21B6",roundabout:"\u27F3",arrive:"\u{1F3C1}"};function Oo(s){return s>=1e3?(s/1e3).toFixed(s>=1e4?0:1).replace(".",",")+" km":Math.round(s/10)*10+" m"}function Qx(s){let t=U.vehicle;if(!U.route){wt("nav").classList.add("hidden");return}let e=U.route,n=Ru(e,t.x,t.z);if(n.off>40){if(U.offT=(U.offT||0)+s,U.offT>2.5){U.offT=0,yc(!0);return}}else U.offT=0;let i=e.length-n.s;if(i<25){yn("\u{1F3C1} Sei arrivato a destinazione!",4e3),Vs("Sei arrivato a destinazione"),U.route=null,U.dest=null,wt("nav").classList.add("hidden");return}let r=e.steps.find(l=>l.d>n.s+2)||e.steps[e.steps.length-1],o=Math.max(0,r.d-n.s);wt("nav").classList.remove("hidden"),wt("navarrow").textContent=r.type==="roundabout"?r.exit+"\u27F3":jx[r.type]||"\u2B06",wt("navarrow").style.fontSize=r.type==="roundabout"?"28px":"44px",wt("navd").textContent=Oo(o),wt("navt").textContent=r.text;let a=Math.max(8,e.length/Math.max(1,e.time));wt("naveta").textContent=`Destinazione: ${Oo(i)} \xB7 circa ${Math.max(1,Math.round(i/a/60))} min`,U.lastStep!==r&&(U.lastStep=r,U.announced=0),U.announced===0&&o<400&&o>120&&(U.announced=1,Vs(`Tra ${Oo(o).replace(","," virgola ")}, ${r.text}`)),U.announced<=1&&o<70&&(U.announced=2,Vs(r.text))}function yc(s){if(!U.dest)return;let t=U.vehicle,e=U.router.route(t.x,t.z,t.h,U.dest[0],U.dest[1]);if(U.route=e,!e){yn("Nessun percorso trovato verso la destinazione");return}U.lastStep=null,s?Vs("Ricalcolo del percorso"):(yn(`Percorso calcolato: ${Oo(e.length)}`),Vs("Percorso calcolato. "+(e.steps[0]?e.steps[0].text:"")))}var dc=0,pc=0,mc=performance.now();function t_(s){let t=U.vehicle,e=U.roads;dc+=s,pc++;let n=performance.now();if(n-mc>1e3&&(wt("fps").textContent=Math.round(pc*1e3/(n-mc))+" fps",pc=0,mc=n),No&&performance.now()>No&&(wt("toast").classList.remove("show"),No=0),dc<.1)return;dc=0;let i=Math.abs(t.u*3.6);wt("spd").textContent=Math.round(i),wt("gear").textContent=t.gear<0?"R":Math.abs(t.u)<.3&&t.throttle<.05?"D":"D"+t.gear,wt("rpmbar").style.width=Math.min(100,t.rpm/t.spec.rpmMax*100)+"%";let r=t.surface&&t.surface.road,o=r?r.wi:-1;if(o<0){let g=e.nearest(t.x,t.z,25,_=>_.drivable);g&&(o=g.wi)}let a=U.world.comuneAt(t.x,t.z);if(o>=0){let g=e.ways[o];wt("roadname").textContent=e.displayName(g),wt("limitv").textContent=g.limit,wt("limit").classList.remove("hidden"),wt("limitest").textContent=g.limitMapped?"":"indicativo",wt("limit").classList.toggle("over",i>g.limit*1.1+3),U.curLimit=g.limit}else wt("roadname").textContent="Fuori strada",wt("limit").classList.add("hidden"),U.curLimit=0;let l="",c=1e9;for(let g of U.meta.places){if(g.t==="town"||g.t==="city"||g.t==="locality")continue;let _=Math.hypot(g.x-t.x,g.z-t.z);_<c&&_<700&&(c=_,l=g.n)}wt("roadcomune").textContent=(a||"Fuori dai confini mappati")+(l&&l!==a?" \xB7 "+l:"");let[h,u]=U.proj.toLatLon(t.x,t.z),f=(-t.h*180/Math.PI%360+360+180)%360,d=["N","NE","E","SE","S","SO","O","NO"];wt("gps").innerHTML=`GPS ${h.toFixed(6)}\xB0 N, ${u.toFixed(6)}\xB0 E<br>Quota ${Math.round(t.y)} m s.l.m. \xB7 Rotta ${Math.round(f)}\xB0 ${d[Math.round(f/45)%8]}`,wt("alt").textContent="",wt("clock").textContent="\u{1F552} "+U.sky.clock(),wt("tspeed").textContent=U.sky.speed===0?"\u23F8":U.sky.speed===1?"1\xD7":U.sky.speed+"\xD7",U.carModel.dashCanvas&&U.camMode===1&&Tu(U.carModel.dashCanvas,U.carModel.dashTex,i,t.rpm,t.spec.rpmMax,wt("gear").textContent,U.curLimit)}function Du(s){U.mapOpen=!0,U.mapMode=s||"dest",wt("mapview").classList.remove("hidden"),U.maps.resizeBig();let t=U.vehicle;if(U.started&&t)U.maps.cx=t.x,U.maps.cz=t.z,U.maps.zoom=.35;else{let e=zo("casa");U.maps.cx=e.x,U.maps.cz=e.z,U.maps.zoom=.12}wt("setdest").classList.toggle("hidden",!U.started),wt("teleport").textContent=U.started?"\u{1F4CD} Teletrasportati qui":"\u{1F4CD} Parti da qui",wt("mapinfo").textContent=U.mapMode==="start"?"Clicca il punto di partenza.":"Clicca sulla mappa o cerca un luogo per impostare la destinazione.",U.mapDirty=!0,wt("search").value="",wt("results").innerHTML=""}function Hs(){U.mapOpen=!1,wt("mapview").classList.add("hidden"),U.started||_c()}function Cu(s,t,e){U.mapSel=[s,t];let n=U.world.comuneAt(s,t),i=U.roads.nearest(s,t,150,o=>o.drivable),r=e||(i?U.roads.displayName(U.roads.ways[i.wi]):"Punto selezionato");U.mapSelLabel=r+(n?", "+n:""),wt("mapinfo").innerHTML=`<b>${U.mapSelLabel}</b><br>${U.proj.toLatLon(s,t).map(o=>o.toFixed(5)).join(", ")}`,U.mapDirty=!0,U.started&&U.mapMode==="dest"&&Uu()}function Uu(){U.mapSel&&(U.dest=U.mapSel.slice(),yc(!1),U.mapDirty=!0)}function e_(){let s=wt("bigmap"),t=null,e=!1;s.addEventListener("mousedown",i=>{t=[i.clientX,i.clientY,U.maps.cx,U.maps.cz],e=!1}),addEventListener("mousemove",i=>{if(!t||!U.mapOpen)return;let r=i.clientX-t[0],o=i.clientY-t[1];Math.abs(r)+Math.abs(o)>4&&(e=!0),U.maps.cx=t[2]-r/U.maps.zoom,U.maps.cz=t[3]-o/U.maps.zoom,U.mapDirty=!0}),addEventListener("mouseup",i=>{if(t&&!e&&U.mapOpen&&i.target===s){let[r,o]=U.maps.toWorld(i.clientX,i.clientY);Cu(r,o)}t=null}),s.addEventListener("wheel",i=>{i.preventDefault();let[r,o]=U.maps.toWorld(i.clientX,i.clientY),a=Math.exp(-i.deltaY*.0015);U.maps.zoom=Math.max(.03,Math.min(6,U.maps.zoom*a));let[l,c]=U.maps.toWorld(i.clientX,i.clientY);U.maps.cx+=r-l,U.maps.cz+=o-c,U.mapDirty=!0},{passive:!1}),wt("closemap").onclick=Hs,wt("setdest").onclick=()=>{Uu(),Hs()},wt("cleardest").onclick=()=>{U.route=null,U.dest=null,U.mapDirty=!0},wt("teleport").onclick=()=>{if(!U.mapSel)return;if(!U.started){U.pickedStart=U.mapSel.slice(),Hs(),wt("pickinfo").textContent="Partenza: "+U.mapSelLabel;return}U.pickedStart=U.mapSel.slice();let i=zo("picked");U.vehicle.place(i.x,i.z,i.h),U.traffic.clear(),U.camInit=!0,U.loadingWorld=!0,Hs(),U.dest&&yc(!0)};let n=wt("search");n.addEventListener("input",()=>{let i=n.value.trim().toLowerCase(),r=[];if(i.length>=2){for(let a of U.maps.comuni)a.n.toLowerCase().includes(i)&&a.label&&r.push({n:a.n,sub:"Comune",x:a.label[0],z:a.label[1]});for(let a of U.meta.places)a.n.toLowerCase().includes(i)&&r.push({n:a.n,sub:{town:"Paese",village:"Paese",suburb:"Quartiere",hamlet:"Frazione",neighbourhood:"Rione",quarter:"Quartiere",locality:"Localit\xE0",city:"Citt\xE0"}[a.t]||a.t,x:a.x,z:a.z});for(let a of U.meta.landmarks)a[3].toLowerCase().includes(i)&&r.push({n:a[3],sub:["","Luogo di culto","Stazione","Municipio","Ospedale","Distributore","Storico","Attrazione","Parco","Supermercato","Cultura","Scuola","Acqua","Cima"][a[0]]+(U.world.comuneAt(a[1],a[2])?" \xB7 "+U.world.comuneAt(a[1],a[2]):""),x:a[1],z:a[2]});let o=0;for(let[a,l]of U.roads.streets){if(!a.toLowerCase().includes(i))continue;let c=new Map;for(let h of l){let u=U.world.comuneAt(h.x,h.z)||"\u2014";(!c.has(u)||c.get(u).len<h.len)&&c.set(u,h)}for(let[h,u]of c)r.push({n:a,sub:"Via \xB7 "+h,x:u.x,z:u.z});if(++o>40)break}}wt("results").innerHTML="";for(let o of r.slice(0,60)){let a=document.createElement("div");a.innerHTML=`${o.n} <small>${o.sub}</small>`,a.onclick=()=>{U.maps.cx=o.x,U.maps.cz=o.z,U.maps.zoom=Math.max(U.maps.zoom,.8),Cu(o.x,o.z,o.n)},wt("results").appendChild(a)}})}function n_(){wt("resume").onclick=()=>xc(!1),wt("tomenu").onclick=()=>{xc(!1),U.started=!1,wt("hud").classList.add("hidden"),_c()},wt("ptraffic").onchange=n=>{U.traffic.target=+n.target.value,U.traffic.target||U.traffic.clear()},wt("ptime").onchange=n=>{U.sky.speed=+n.target.value},wt("pvoice").onchange=n=>{U.voice=n.target.value==="1"},wt("paudio").onchange=n=>{U.audio.muted=n.target.value==="0"};let s=U.input.wheelCfg,t=(n,i)=>{n.innerHTML="";for(let r=0;r<10;r++){let o=document.createElement("option");o.value=r,o.textContent="Asse "+r,n.appendChild(o)}n.value=i};t(wt("axsteer"),s.steerAxis),t(wt("axthr"),s.throttleAxis),t(wt("axbrk"),s.brakeAxis),wt("wheelon").checked=s.enabled,wt("axinv").checked=s.invertPedals;let e=()=>{s.enabled=wt("wheelon").checked,s.steerAxis=+wt("axsteer").value,s.throttleAxis=+wt("axthr").value,s.brakeAxis=+wt("axbrk").value,s.invertPedals=wt("axinv").checked,U.input.saveWheel()};for(let n of["wheelon","axsteer","axthr","axbrk","axinv"])wt(n).onchange=e}function xc(s){U.paused=s,wt("pause").classList.toggle("hidden",!s),s&&(wt("ptime").value=String(U.sky.speed))}var Do=new H,Iu=new H,i_=new H,s_=["Visuale esterna","Visuale abitacolo","Visuale cofano","Visuale esterna lontana"];function r_(s,t){let e=U.vehicle,n=U.camera,i=U.carModel,r=Math.sin(e.h),o=Math.cos(e.h),a=U.camMode;if(U.debugCam){n.position.set(...U.debugCam.pos),n.lookAt(...U.debugCam.look),n.near=1,n.updateProjectionMatrix(),i.interior.visible=!1;for(let l of i.exterior)l.visible=!0;return}i.interior.visible=a===1;for(let l of i.exterior)l.visible=a!==1;if(a===0||a===3){let l=(a===0?4.2:8)+e.spec.L*.75,c=a===0?2.1+e.spec.H*.4:4.2,h=t?-1:1,u=i_.set(e.x-r*l*h,e.y+c,e.z-o*l*h),f=U.roads.surfaceAt(u.x,u.z,e.y+3).h;u.y=Math.max(u.y,f+1.2),U.camInit&&(Do.copy(u),U.camInit=!1),Do.lerp(u,1-Math.exp(-s*(t?30:7))),n.position.copy(Do),Iu.set(e.x+r*4*h,e.y+1.2,e.z+o*4*h),n.lookAt(Iu),n.near=.5}else{let l=a===1?i.root.userData.eye.clone():new H(0,e.spec.H*.82+.05,e.spec.L*.18);i.root.updateMatrixWorld(),n.position.copy(l.applyMatrix4(i.root.matrixWorld));let c=new H(0,a===1?-.6:-.9,t?-30:30).add(a===1?i.root.userData.eye:new H(0,e.spec.H*.82,0)).applyMatrix4(i.root.matrixWorld);n.lookAt(c),n.near=.08,Do.copy(n.position)}n.updateProjectionMatrix()}var Pu=performance.now(),gc=0;function Nu(s){requestAnimationFrame(Nu);let t=Math.min(.05,(s-Pu)/1e3);if(Pu=s,!U.renderer)return;if(U.mapOpen){U.input.read(t),(U.input.consume("KeyM")||U.input.consume("Escape"))&&Hs(),U.mapDirty&&(U.maps.drawBig(U.started?U.vehicle:null,U.route,U.dest||(U.mapMode==="start"?null:U.mapSel)),U.mapDirty=!1),U.mapSel&&U.mapMode==="start"&&U.started;return}if(!U.started)return;let e=U.input;if(e.consume("Escape")&&xc(!U.paused),U.paused){let l=e.axesSnapshot();wt("axes").textContent=l?`${l.id}: `+l.axes.map((c,h)=>`${h}:${c.toFixed(2)}`).join("  "):"Nessun dispositivo rilevato: collega il volante e premi un pedale.";return}let n=e.read(t);if((e.consume("KeyC")||n.buttons.has(3))&&(U.camMode=(U.camMode+1)%4,yn(s_[U.camMode],1e3)),e.consume("KeyM")||n.buttons.has(8)){Du("dest");return}if(e.consume("KeyN")&&wt("mini-wrap").classList.toggle("hidden"),(e.consume("KeyH")||n.buttons.has(2))&&(U.lightsOn=!U.lightsOn,yn(U.lightsOn?"Fari accesi":"Fari spenti",900)),(e.consume("KeyR")||n.buttons.has(1)&&!1)&&Kx(),e.consume("KeyK")&&(U.world.labelsOn=!U.world.labelsOn,yn(U.world.labelsOn?"Nomi dei luoghi visibili":"Nomi dei luoghi nascosti",1e3)),e.consume("KeyT")){let l=[30,300,0,1];U.sky.speed=l[(l.indexOf(U.sky.speed)+1)%l.length],yn("Velocit\xE0 del tempo: "+(U.sky.speed?U.sky.speed+"\xD7":"ferma"),1e3)}(e.consume("Equal")||e.consume("NumpadAdd"))&&(U.sky.hours=(U.sky.hours+1)%24),(e.consume("Minus")||e.consume("NumpadSubtract"))&&(U.sky.hours=(U.sky.hours+23)%24);let i=U.vehicle;U.world.update(i.x,i.z);let r=U.loadingWorld?40:7;if(U.world.pump(r),U.loadingWorld)if(U.world.ready(i.x,i.z)){U.loadingWorld=!1;let l=U.roads.surfaceAt(i.x,i.z,1e9);i.y=l.h}else n.throttle=0,n.brake=1;U.loadingWorld||i.update(t,n),U.traffic.update(t,i,s/1e3);let o=U.carModel;o.root.position.set(i.x,i.y,i.z),o.root.rotation.set(-(i.pitch+i.dynPitch),i.h,i.roll+i.dynRoll,"YXZ");for(let l of o.wheels)l.front&&(l.pivot.rotation.y=i.steer),l.spin.rotation.x=i.wheelSpinAngle||0;o.steeringWheel&&(o.steeringWheel.rotation.z=-i.steer*7),o.tailMat.emissive.setHex(i.brake>.05||i.gear<0?16718346:U.lightsOn||U.sky.night>.5?5570560:0);let a=U.lightsOn||U.sky.night>.55;o.headMat.emissive.setHex(a?16774360:0);for(let l of U.headlights.children)l.isSpotLight&&(l.intensity=a?60:0);U.sky.update(t,o.root.position),U.world.buildings.setNight(U.sky.night),U.world.signage.update(s/1e3,U.sky.night),U.traffic.setNight(U.sky.night),r_(t,e.keys.has("KeyV")),U.world.updateLabels(U.camera),t_(t),Qx(t),gc+=t,gc>.05&&!wt("mini-wrap").classList.contains("hidden")&&(gc=0,U.maps.drawMini(i,U.route,U.sky.night>.5)),U.audio.update(i.rpm,i.throttle,Math.abs(i.u)*3.6,i.slip),i.impact>.25&&yn("\u{1F4A5} Urto!",700),i.impact=0,U.renderer.render(U.scene,U.camera)}Xx().catch(s=>{console.error(s),wt("loadmsg").textContent="Errore: "+s.message+" \u2014 apri il gioco con un browser recente (Chrome, Edge, Firefox)."});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
