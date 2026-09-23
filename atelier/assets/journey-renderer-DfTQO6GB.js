import{s as Be,a as Xn,b as Vc,c as Wc,C as To,w as Ao}from"./index-CKefEM8o.js";const Wa="186",Xc=0,Co=1,qc=2,Ji=1,Yc=2,Ki=3,qn=0,Vt=1,wt=2,Rn=0,Qi=1,Ro=2,Po=3,Lo=4,Kc=5,Ti=100,Zc=101,$c=102,Jc=103,Qc=104,jc=200,eu=201,tu=202,nu=203,Gl=204,Hl=205,iu=206,su=207,ru=208,au=209,ou=210,lu=211,cu=212,uu=213,hu=214,Qr=0,jr=1,ea=2,ns=3,ta=4,na=5,ia=6,sa=7,Vl=0,fu=1,du=2,vn=0,Wl=1,Xl=2,ql=3,Yl=4,Kl=5,Zl=6,$l=7,Jl=300,si=301,Di=302,hr=303,fr=304,rr=306,Ys=1e3,Cn=1001,Ks=1002,Ut=1003,pu=1004,ps=1005,Et=1006,dr=1007,ti=1008,Zt=1009,Ql=1010,jl=1011,is=1012,Xa=1013,xn=1014,gn=1015,Mn=1016,qa=1017,Ya=1018,ss=1020,ec=35902,tc=35899,nc=1021,ic=1022,cn=1023,Dn=1026,ni=1027,sc=1028,Ka=1029,ri=1030,Za=1031,$a=1033,Hs=33776,Vs=33777,Ws=33778,Xs=33779,ra=35840,aa=35841,oa=35842,la=35843,ca=36196,ua=37492,ha=37496,fa=37488,da=37489,Zs=37490,pa=37491,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,Sa=37814,ya=37815,ba=37816,Ea=37817,wa=37818,Ta=37819,Aa=37820,Ca=37821,Ra=36492,Pa=36494,La=36495,Da=36283,Ua=36284,$s=36285,Ia=36286,mu=3200,Na=0,gu=1,Wn="",Rt="srgb",rs="srgb-linear",Js="linear",ct="srgb",pr=7680,_u=519,vu=512,xu=513,Mu=514,Ja=515,Su=516,yu=517,Qa=518,bu=519,Eu=35044,Do="300 es",_n=2e3,as=2001;function wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){const i=Qs("canvas");return i.style.display="block",i}const Uo={};function Io(...i){const e="THREE."+i.shift();console.log(e,...i)}function rc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=rc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=rc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){const e=i.join(" ");e in Uo||(Uo[e]=!0,Ve(...i))}function Au(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Cu={[Qr]:jr,[ea]:ia,[ta]:sa,[ns]:na,[jr]:Qr,[ia]:ea,[sa]:ta,[na]:ns};class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,Fa=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ru(i,e){return(i%e+e)%e}function gr(i,e,t){return(1-t)*i+t*e}function zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const uo=class uo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uo.prototype.isVector2=!0;let ce=uo;class In{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*S;m<0&&(u=-u,f=-f,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+S*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ho=class ho{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(No.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(No.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ho.prototype.isVector3=!0;let L=ho;const _r=new L,No=new In,fo=class fo{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],S=s[0],m=s[3],p=s[6],M=s[1],E=s[4],v=s[7],y=s[2],w=s[5],A=s[8];return r[0]=a*S+o*M+c*y,r[3]=a*m+o*E+c*w,r[6]=a*p+o*v+c*A,r[1]=l*S+h*M+d*y,r[4]=l*m+h*E+d*w,r[7]=l*p+h*v+d*A,r[2]=u*S+f*M+g*y,r[5]=u*m+f*E+g*w,r[8]=u*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vr.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fo.prototype.isMatrix3=!0;let Xe=fo;const vr=new Xe,Fo=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oo=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){const i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:e,whitePoint:n,transfer:Js,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const je=Pu();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class Lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=Qs("canvas")),hi.width=e.width,hi.height=e.height;const s=hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Du=0;class ja{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xr(s[a].image)):r.push(xr(s[a]))}else r=xr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Uu=0;const Mr=new L;class Lt extends oi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Cn,s=Cn,r=Et,a=ti,o=cn,c=Zt,l=Lt.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ni(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mr).x}get height(){return this.source.getSize(Mr).y}get depth(){return this.source.getSize(Mr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Jl;Lt.DEFAULT_ANISOTROPY=1;const po=class po{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(f+1)/2,y=(p+1)/2,w=(h+u)/4,A=(d+S)/4,_=(g+m)/4;return E>v&&E>y?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=A/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=_/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};po.prototype.isVector4=!0;let ft=po;class Iu extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Lt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ja(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bt extends Iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ac extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sr=class sr{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,S=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,S=l*d;t[0]=u+S*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,S=l*d;t[0]=u-S*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,S=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+S,t[1]=c*d,t[5]=S*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=S-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-S*d}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+S,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fu,e,Ou)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Bn.crossVectors(n,Xt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Bn.crossVectors(n,Xt)),Bn.normalize(),ms.crossVectors(Xt,Bn),s[0]=Bn.x,s[4]=ms.x,s[8]=Xt.x,s[1]=Bn.y,s[5]=ms.y,s[9]=Xt.y,s[2]=Bn.z,s[6]=ms.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],S=n[6],m=n[10],p=n[14],M=n[3],E=n[7],v=n[11],y=n[15],w=s[0],A=s[4],_=s[8],T=s[12],R=s[1],D=s[5],F=s[9],N=s[13],P=s[2],I=s[6],k=s[10],W=s[14],Q=s[3],q=s[7],K=s[11],j=s[15];return r[0]=a*w+o*R+c*P+l*Q,r[4]=a*A+o*D+c*I+l*q,r[8]=a*_+o*F+c*k+l*K,r[12]=a*T+o*N+c*W+l*j,r[1]=h*w+d*R+u*P+f*Q,r[5]=h*A+d*D+u*I+f*q,r[9]=h*_+d*F+u*k+f*K,r[13]=h*T+d*N+u*W+f*j,r[2]=g*w+S*R+m*P+p*Q,r[6]=g*A+S*D+m*I+p*q,r[10]=g*_+S*F+m*k+p*K,r[14]=g*T+S*N+m*W+p*j,r[3]=M*w+E*R+v*P+y*Q,r[7]=M*A+E*D+v*I+y*q,r[11]=M*_+E*F+v*k+y*K,r[15]=M*T+E*N+v*W+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],M=c*f-l*u,E=o*f-l*d,v=o*u-c*d,y=a*f-l*h,w=a*u-c*h,A=a*d-o*h;return t*(S*M-m*E+p*v)-n*(g*M-m*y+p*w)+s*(g*E-S*y+p*A)-r*(g*v-S*w+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],M=t*o-n*a,E=t*c-s*a,v=t*l-r*a,y=n*c-s*o,w=n*l-r*o,A=s*l-r*c,_=h*S-d*g,T=h*m-u*g,R=h*p-f*g,D=d*m-u*S,F=d*p-f*S,N=u*p-f*m,P=M*N-E*F+v*D+y*R-w*T+A*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=(o*N-c*F+l*D)*I,e[1]=(s*F-n*N-r*D)*I,e[2]=(S*A-m*w+p*y)*I,e[3]=(u*w-d*A-f*y)*I,e[4]=(c*R-a*N-l*T)*I,e[5]=(t*N-s*R+r*T)*I,e[6]=(m*v-g*A-p*E)*I,e[7]=(h*A-u*v+f*E)*I,e[8]=(a*F-o*R+l*_)*I,e[9]=(n*R-t*F-r*_)*I,e[10]=(g*w-S*v+p*M)*I,e[11]=(d*v-h*w-f*M)*I,e[12]=(o*T-a*D-c*_)*I,e[13]=(t*D-n*T+s*_)*I,e[14]=(S*E-g*y-m*M)*I,e[15]=(h*y-d*E+u*M)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,S=a*h,m=a*d,p=o*d,M=c*l,E=c*h,v=c*d,y=n.x,w=n.y,A=n.z;return s[0]=(1-(S+p))*y,s[1]=(f+v)*y,s[2]=(g-E)*y,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(m-M)*A,s[10]=(1-(u+S))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=fi.set(s[0],s[1],s[2]).length();const o=fi.set(s[4],s[5],s[6]).length(),c=fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);const l=1/a,h=1/o,d=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=_n,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,S;if(c)g=r/(a-r),S=a*r/(a-r);else if(o===_n)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===as)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,S;if(c)g=1/(a-r),S=a/(a-r);else if(o===_n)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===as)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};sr.prototype.isMatrix4=!0;let _t=sr;const fi=new L,nn=new _t,Fu=new L(0,0,0),Ou=new L(1,1,1),Bn=new L,ms=new L,Xt=new L,Bo=new _t,zo=new In;class Un{constructor(e=0,t=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bu=0;const ko=new L,di=new In,yn=new _t,gs=new L,ki=new L,zu=new L,ku=new In,Go=new L(1,0,0),Ho=new L(0,1,0),Vo=new L(0,0,1),Wo={type:"added"},Gu={type:"removed"},pi={type:"childadded",child:null},Sr={type:"childremoved",child:null};class kt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new L,t=new Un,n=new In,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ki,gs,this.up):yn.lookAt(gs,ki,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(yn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wo),pi.child=e,this.dispatchEvent(pi),pi.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gu),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hu={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Ru(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=br(a,r,e+1/3),this.g=br(a,r,e),this.b=br(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return je.workingToColorSpace(Ft.copy(this),e),Math.round(Qe(Ft.r*255,0,255))*65536+Math.round(Qe(Ft.g*255,0,255))*256+Math.round(Qe(Ft.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Rt){je.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(_s);const n=gr(zn.h,_s.h,t),s=gr(zn.s,_s.s,t),r=gr(zn.l,_s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new et;et.NAMES=lc;class eo extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new L,bn=new L,Er=new L,En=new L,mi=new L,gi=new L,Xo=new L,wr=new L,Tr=new L,Ar=new L,Cr=new ft,Rr=new ft,Pr=new ft;class ln{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),bn.subVectors(n,t),Er.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(bn),c=sn.dot(Er),l=bn.dot(bn),h=bn.dot(Er),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Cr.setScalar(0),Rr.setScalar(0),Pr.setScalar(0),Cr.fromBufferAttribute(e,t),Rr.fromBufferAttribute(e,n),Pr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Cr,r.x),a.addScaledVector(Rr,r.y),a.addScaledVector(Pr,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),bn.subVectors(e,t),sn.cross(bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;mi.subVectors(s,n),gi.subVectors(r,n),wr.subVectors(e,n);const c=mi.dot(wr),l=gi.dot(wr);if(c<=0&&l<=0)return t.copy(n);Tr.subVectors(e,s);const h=mi.dot(Tr),d=gi.dot(Tr);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(mi,a);Ar.subVectors(e,r);const f=mi.dot(Ar),g=gi.dot(Ar);if(g>=0&&f<=g)return t.copy(r);const S=f*l-c*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Xo.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Xo,o);const p=1/(m+S+u);return a=S*p,o=u*p,t.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),xs.subVectors(this.max,Gi),_i.subVectors(e.a,Gi),vi.subVectors(e.b,Gi),xi.subVectors(e.c,Gi),kn.subVectors(vi,_i),Gn.subVectors(xi,vi),Zn.subVectors(_i,xi);let t=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-Zn.z,Zn.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,Zn.z,0,-Zn.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-Zn.y,Zn.x,0];return!Lr(t,_i,vi,xi,xs)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,_i,vi,xi,xs))?!1:(Ms.crossVectors(kn,Gn),t=[Ms.x,Ms.y,Ms.z],Lr(t,_i,vi,xi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,vs=new Fi,_i=new L,vi=new L,xi=new L,kn=new L,Gn=new L,Zn=new L,Gi=new L,xs=new L,Ms=new L,$n=new L;function Lr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=e.dot($n),l=t.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const yt=new L,Ss=new ce;let Vu=0;class Ln extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class cc extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uc extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Wu=new Fi,Hi=new L,Dr=new L;class to{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(Dr)),this.expandByPoint(Hi.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xu=0;const Jt=new _t,Ur=new kt,Mi=new L,qt=new Fi,Vi=new Fi,Ct=new L;class Dt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?uc:cc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(qt.min,Vi.min),qt.expandByPoint(Ct),Ct.addVectors(qt.max,Vi.max),qt.expandByPoint(Ct)):(qt.expandByPoint(Vi.min),qt.expandByPoint(Vi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(e,l),Ct.add(Mi)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new L,c[_]=new L;const l=new L,h=new L,d=new L,u=new ce,f=new ce,g=new ce,S=new L,m=new L;function p(_,T,R){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[_].add(S),o[T].add(S),o[R].add(S),c[_].add(m),c[T].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){const R=M[_],D=R.start,F=R.count;for(let N=D,P=D+F;N<P;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new L,v=new L,y=new L,w=new L;function A(_){y.fromBufferAttribute(s,_),w.copy(y);const T=o[_];E.copy(T),E.sub(y.multiplyScalar(y.dot(T))).normalize(),v.crossVectors(w,T);const D=v.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,D)}for(let _=0,T=M.length;_<T;++_){const R=M[_],D=R.start,F=R.count;for(let N=D,P=D+F;N<P;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Ln(u,h,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ir=new L,qu=new L,Yu=new Xe;class Vn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ir.subVectors(n,t).cross(qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Ir),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yu.getNormalMatrix(e),s=this.coplanarPoint(Ir).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ku=0;class Oi extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Qi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tn=new L,Nr=new L,ys=new L,bs=new L;class Zu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nr.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(Nr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ys),o=bs.dot(this.direction),c=-bs.dot(ys),l=bs.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nr).addScaledVector(ys,u),f}intersectSphere(e,t){if(e.radius<0)return null;Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,v=Math.abs(c),y=Math.abs(l),w=Math.abs(h);let A,_,T,R,D,F,N,P,I,k,W,Q;if(v>=y&&v>=w?(T=c,F=d,I=g,Q=p,c>=0?(A=l,_=h,R=u,D=f,N=S,P=m,k=M,W=E):(A=h,_=l,R=f,D=u,N=m,P=S,k=E,W=M)):y>=w?(T=l,F=u,I=S,Q=M,l>=0?(A=h,_=c,R=f,D=d,N=m,P=g,k=E,W=p):(A=c,_=h,R=d,D=f,N=g,P=m,k=p,W=E)):(T=h,F=f,I=m,Q=E,h>=0?(A=c,_=l,R=d,D=u,N=g,P=S,k=p,W=M):(A=l,_=c,R=u,D=d,N=S,P=g,k=M,W=p)),T===0)return null;const q=A/T,K=_/T,j=1/T,fe=R-q*F,me=D-K*F,le=N-q*I,ie=P-K*I,de=k-q*Q,V=W-K*Q,Z=de*ie-V*le,ae=fe*V-me*de,Ae=le*me-ie*fe;if(s){if(Z<0||ae<0||Ae<0)return null}else if((Z<0||ae<0||Ae<0)&&(Z>0||ae>0||Ae>0))return null;const _e=Z+ae+Ae;if(_e===0)return null;const Ie=j*(Z*F+ae*I+Ae*Q);return(_e>0?Ie<0:Ie>0)?null:this.at(Ie/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class no extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qo=new _t,Jn=new Zu,Es=new to,Yo=new L,ws=new L,Ts=new L,As=new L,Fr=new L,Cs=new L,Ko=new L,Rs=new L;class ut extends kt{constructor(e=new Dt,t=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Fr.fromBufferAttribute(d,e),a?Cs.addScaledVector(Fr,h):Cs.addScaledVector(Fr.sub(t),h))}t.add(Cs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(Es.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Es,Yo)===null||Jn.origin.distanceToSquared(Yo)>(e.far-e.near)**2))&&(qo.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(qo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,y=E;v<y;v+=3){const w=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);s=Ps(this,p,e,n,l,h,d,w,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=Ps(this,a,e,n,l,h,d,M,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,y=E;v<y;v+=3){const w=v,A=v+1,_=v+2;s=Ps(this,p,e,n,l,h,d,w,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const M=m,E=m+1,v=m+2;s=Ps(this,a,e,n,l,h,d,M,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function $u(i,e,t,n,s,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===qn,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:i}}function Ps(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ws),i.getVertexPosition(c,Ts),i.getVertexPosition(l,As);const h=$u(i,e,t,n,ws,Ts,As,Ko);if(h){const d=new L;ln.getBarycoord(Ko,ws,Ts,As,d),s&&(h.uv=ln.getInterpolatedAttribute(s,o,c,l,d,new ce)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,c,l,d,new ce)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};ln.getNormal(ws,Ts,As,u.normal),h.face=u,h.barycoord=d}return h}class Ju extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ut,h=Ut,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new to,Qu=new ce(.5,.5),Ls=new L;class io{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],E=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-a,f-h,p-g,y-M).normalize(),s[1].setComponents(l+a,f+h,p+g,y+M).normalize(),s[2].setComponents(l+o,f+d,p+S,y+E).normalize(),s[3].setComponents(l-o,f-d,p-S,y-E).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,y-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,y-v).normalize(),t===_n)s[5].setComponents(l+c,f+u,p+m,y+v).normalize();else if(t===as)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Qu.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ls.x=s.normal.x>0?e.max.x:e.min.x,Ls.y=s.normal.y>0?e.max.y:e.min.y,Ls.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hc extends Lt{constructor(e=[],t=si,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class os extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends Lt{constructor(e,t,n=xn,s,r,a,o=Ut,c=Ut,l,h=Dn,d=1){if(h!==Dn&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ju extends ls{constructor(e,t=xn,n=si,s,r,a=Ut,o=Ut,c,l=Dn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fc extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class li extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(S,m,p,M,E,v,y,w,A,_,T){const R=v/A,D=y/_,F=v/2,N=y/2,P=w/2,I=A+1,k=_+1;let W=0,Q=0;const q=new L;for(let K=0;K<k;K++){const j=K*D-N;for(let fe=0;fe<I;fe++){const me=fe*R-F;q[S]=me*M,q[m]=j*E,q[p]=P,l.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(fe/A),d.push(1-K/_),W+=1}}for(let K=0;K<_;K++)for(let j=0;j<A;j++){const fe=u+j+I*K,me=u+j+I*(K+1),le=u+(j+1)+I*(K+1),ie=u+(j+1)+I*K;c.push(fe,me,ie),c.push(me,le,ie),Q+=6}o.addGroup(f,Q,T),f+=Q,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class An extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const S=[],m=n/2;let p=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function M(){const v=new L,y=new L;let w=0;const A=(t-e)/n;for(let _=0;_<=r;_++){const T=[],R=_/r,D=R*(t-e)+e;for(let F=0;F<=s;F++){const N=F/s,P=N*c+o,I=Math.sin(P),k=Math.cos(P);y.x=D*I,y.y=-R*n+m,y.z=D*k,d.push(y.x,y.y,y.z),v.set(I,A,k).normalize(),u.push(v.x,v.y,v.z),f.push(N,1-R),T.push(g++)}S.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const R=S[T][_],D=S[T+1][_],F=S[T+1][_+1],N=S[T][_+1];(e>0||T!==0)&&(h.push(R,D,N),w+=3),(t>0||T!==r-1)&&(h.push(D,F,N),w+=3)}l.addGroup(p,w,0),p+=w}function E(v){const y=g,w=new ce,A=new L;let _=0;const T=v===!0?e:t,R=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const P=F/s*c+o,I=Math.cos(P),k=Math.sin(P);A.x=T*k,A.y=m*R,A.z=T*I,d.push(A.x,A.y,A.z),u.push(0,R,0),w.x=I*.5+.5,w.y=k*.5*R+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const N=y+F,P=D+F;v===!0?h.push(P,P+1,N):h.push(P+1,P,N),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends An{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ji(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class so extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new L,v=new L,y=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],E),f(t[w+1],v),f(t[w+2],y),c(E,v,y,M)}function c(M,E,v,y){const w=y+1,A=[];for(let _=0;_<=w;_++){A[_]=[];const T=M.clone().lerp(v,_/w),R=E.clone().lerp(v,_/w),D=w-_;for(let F=0;F<=D;F++)F===0&&_===w?A[_][F]=T:A[_][F]=T.clone().lerp(R,F/D)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){const R=Math.floor(T/2);T%2===0?(u(A[_][R+1]),u(A[_+1][R]),u(A[_][R])):(u(A[_][R+1]),u(A[_+1][R+1]),u(A[_+1][R]))}}function l(M){const E=new L;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(M),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){const M=new L;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const v=m(M)/2/Math.PI+.5,y=p(M)/Math.PI+.5;a.push(v,1-y)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const E=a[M+0],v=a[M+2],y=a[M+4],w=Math.max(E,v,y),A=Math.min(E,v,y);w>.9&&A<.1&&(E<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){const v=M*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){const M=new L,E=new L,v=new L,y=new L,w=new ce,A=new ce,_=new ce;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),y.copy(M).add(E).add(v).divideScalar(3);const D=m(y);S(w,R+0,M,D),S(A,R+2,E,D),S(_,R+4,v,D)}}function S(M,E,v,y){y<0&&M.x===1&&(a[E]=M.x-1),v.x===0&&v.z===0&&(a[E]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.vertices,e.indices,e.radius,e.detail)}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ce:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],a=[],o=new L,c=new _t;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ro extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class eh extends ro{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ao(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Zo=new L,$o=new L,Or=new ao,Br=new ao,zr=new ao;class Oa extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),l=$o);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Or.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,S,m),Br.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,S,m),zr.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(Or.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Br.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),zr.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Or.calc(c),Br.calc(c),zr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function th(i,e){const t=1-i;return t*t*e}function nh(i,e){return 2*(1-i)*i*e}function ih(i,e){return i*i*e}function es(i,e,t,n){return th(i,e)+nh(i,t)+ih(i,n)}function sh(i,e){const t=1-i;return t*t*t*e}function rh(i,e){const t=1-i;return 3*t*t*i*e}function ah(i,e){return 3*(1-i)*i*i*e}function oh(i,e){return i*i*i*e}function ts(i,e,t,n,s){return sh(i,e)+rh(i,t)+ah(i,n)+oh(i,s)}class dc extends Sn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,s.x,r.x,a.x,o.x),ts(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lh extends Sn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,s.x,r.x,a.x,o.x),ts(e,s.y,r.y,a.y,o.y),ts(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pc extends Sn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends Sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mc extends Sn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(es(e,s.x,r.x,a.x),es(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends Sn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(es(e,s.x,r.x,a.x),es(e,s.y,r.y,a.y),es(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _c extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Jo(o,c.x,l.x,h.x,d.x),Jo(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var js=Object.freeze({__proto__:null,ArcCurve:eh,CatmullRomCurve3:Oa,CubicBezierCurve:dc,CubicBezierCurve3:lh,EllipseCurve:ro,LineCurve:pc,LineCurve3:ch,QuadraticBezierCurve:mc,QuadraticBezierCurve3:gc,SplineCurve:_c});class uh extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new js[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new js[s.type]().fromJSON(s))}return this}}class Qo extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pc(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new mc(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new dc(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _c(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new ro(e,t,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ba extends Qo{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Qo().fromJSON(s))}return this}}function hh(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=vc(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=gh(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let u=t;u<s;u+=t){const f=i[u],g=i[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return cs(r,a,t,o,c,l,0),a}function vc(i,e,t,n,s){let r;if(s===Ah(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=jo(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=jo(a/n|0,i[a],i[a+1],r);return r&&Ui(r,r.next)&&(hs(r),r=r.next),r}function ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ui(t,t.next)||xt(t.prev,t,t.next)===0)){if(hs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Sh(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?dh(i,n,s,r):fh(i)){e.push(c.i,i.i,l.i),hs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ph(ai(i),e),cs(i,e,t,n,s,r,2)):a===2&&mh(i,e,t,n,s,r):cs(ai(i),e,t,n,s,r,1);break}}}function fh(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Zi(s,o,r,c,a,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dh(i,e,t,n){const s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),S=Math.max(o,c,l),m=Math.max(h,d,u),p=za(f,g,e,t,n),M=za(S,m,e,t,n);let E=i.prevZ,v=i.nextZ;for(;E&&E.z>=p&&v&&v.z<=M;){if(E.x>=f&&E.x<=S&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Zi(o,h,c,d,l,u,E.x,E.y)&&xt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Zi(o,h,c,d,l,u,v.x,v.y)&&xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=S&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Zi(o,h,c,d,l,u,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Zi(o,h,c,d,l,u,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ph(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ui(n,s)&&Mc(n,t,t.next,s)&&us(n,s)&&us(s,n)&&(e.push(n.i,t.i,s.i),hs(t),hs(t.next),t=i=s),t=t.next}while(t!==i);return ai(t)}function mh(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Eh(a,o)){let c=Sc(a,o);a=ai(a,a.next),c=ai(c,c.next),cs(a,e,t,n,s,r,0),cs(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gh(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=vc(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(bh(l))}s.sort(_h);for(let r=0;r<s.length;r++)t=vh(s[r],t);return t}function _h(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function vh(i,e){const t=xh(i,e);if(!t)return e;const n=Sc(t,i);return ai(n,n.next),ai(t,t.next)}function xh(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Ui(i,t))return t;do{if(Ui(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&xc(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);us(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Mh(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Mh(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function Sh(i,e,t,n){let s=i;do s.z===0&&(s.z=za(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yh(s)}function yh(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function za(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xc(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Zi(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&xc(i,e,t,n,s,r,a,o)}function Eh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wh(i,e)&&(us(i,e)&&us(e,i)&&Th(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Ui(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ui(i,e){return i.x===e.x&&i.y===e.y}function Mc(i,e,t,n){const s=Us(xt(i,e,t)),r=Us(xt(i,e,n)),a=Us(xt(t,n,i)),o=Us(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ds(i,t,e)||r===0&&Ds(i,n,e)||a===0&&Ds(t,i,n)||o===0&&Ds(t,e,n))}function Ds(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Us(i){return i>0?1:i<0?-1:0}function wh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function us(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Th(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sc(i,e){const t=ka(i.i,i.x,i.y),n=ka(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jo(i,e,t,n){const s=ka(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ka(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ah(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ch{static triangulate(e,t,n=2){return hh(e,t,n)}}class Ai{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ai.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];el(e),tl(n,e);let a=e.length;t.forEach(el);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,tl(n,t[c]);const o=Ch.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function el(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function tl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class er extends Dt{constructor(e=new Ba([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Rh;let E,v=!1,y,w,A,_;if(p){E=p.getSpacedPoints(h),v=!0,u=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(h,ee),w=new L,A=new L,_=new L}u||(m=0,f=0,g=0,S=0);const T=o.extractPoints(l);let R=T.shape;const D=T.holes;if(!Ai.isClockWise(R)){R=R.reverse();for(let ee=0,re=D.length;ee<re;ee++){const oe=D[ee];Ai.isClockWise(oe)&&(D[ee]=oe.reverse())}}function N(ee){const oe=10000000000000001e-36;let ue=ee[0];for(let ge=1;ge<=ee.length;ge++){const ke=ge%ee.length,ze=ee[ke],He=ze.x-ue.x,We=ze.y-ue.y,U=He*He+We*We,at=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ue.x),Math.abs(ue.y)),Ze=oe*at*at;if(U<=Ze){ee.splice(ke,1),ge--;continue}ue=ze}}N(R),D.forEach(N);const P=D.length,I=R;for(let ee=0;ee<P;ee++){const re=D[ee];R=R.concat(re)}function k(ee,re,oe){return re||st("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,oe)}const W=R.length;function Q(ee,re,oe){let ue,ge,ke;const ze=ee.x-re.x,He=ee.y-re.y,We=oe.x-ee.x,U=oe.y-ee.y,at=ze*ze+He*He,Ze=ze*U-He*We;if(Math.abs(Ze)>Number.EPSILON){const C=Math.sqrt(at),x=Math.sqrt(We*We+U*U),z=re.x-He/C,X=re.y+ze/C,$=oe.x-U/x,he=oe.y+We/x,pe=(($-z)*U-(he-X)*We)/(ze*U-He*We);ue=z+ze*pe-ee.x,ge=X+He*pe-ee.y;const J=ue*ue+ge*ge;if(J<=2)return new ce(ue,ge);ke=Math.sqrt(J/2)}else{let C=!1;ze>Number.EPSILON?We>Number.EPSILON&&(C=!0):ze<-Number.EPSILON?We<-Number.EPSILON&&(C=!0):Math.sign(He)===Math.sign(U)&&(C=!0),C?(ue=-He,ge=ze,ke=Math.sqrt(at)):(ue=ze,ge=He,ke=Math.sqrt(at/2))}return new ce(ue/ke,ge/ke)}const q=[];for(let ee=0,re=I.length,oe=re-1,ue=ee+1;ee<re;ee++,oe++,ue++)oe===re&&(oe=0),ue===re&&(ue=0),q[ee]=Q(I[ee],I[oe],I[ue]);const K=[];let j,fe=q.concat();for(let ee=0,re=P;ee<re;ee++){const oe=D[ee];j=[];for(let ue=0,ge=oe.length,ke=ge-1,ze=ue+1;ue<ge;ue++,ke++,ze++)ke===ge&&(ke=0),ze===ge&&(ze=0),j[ue]=Q(oe[ue],oe[ke],oe[ze]);K.push(j),fe=fe.concat(j)}let me;if(m===0)me=Ai.triangulateShape(I,D);else{const ee=[],re=[];for(let oe=0;oe<m;oe++){const ue=oe/m,ge=f*Math.cos(ue*Math.PI/2),ke=g*Math.sin(ue*Math.PI/2)+S;for(let ze=0,He=I.length;ze<He;ze++){const We=k(I[ze],q[ze],ke);ae(We.x,We.y,-ge),ue===0&&ee.push(We)}for(let ze=0,He=P;ze<He;ze++){const We=D[ze];j=K[ze];const U=[];for(let at=0,Ze=We.length;at<Ze;at++){const C=k(We[at],j[at],ke);ae(C.x,C.y,-ge),ue===0&&U.push(C)}ue===0&&re.push(U)}}me=Ai.triangulateShape(ee,re)}const le=me.length,ie=g+S;for(let ee=0;ee<W;ee++){const re=u?k(R[ee],fe[ee],ie):R[ee];v?(A.copy(y.normals[0]).multiplyScalar(re.x),w.copy(y.binormals[0]).multiplyScalar(re.y),_.copy(E[0]).add(A).add(w),ae(_.x,_.y,_.z)):ae(re.x,re.y,0)}for(let ee=1;ee<=h;ee++)for(let re=0;re<W;re++){const oe=u?k(R[re],fe[re],ie):R[re];v?(A.copy(y.normals[ee]).multiplyScalar(oe.x),w.copy(y.binormals[ee]).multiplyScalar(oe.y),_.copy(E[ee]).add(A).add(w),ae(_.x,_.y,_.z)):ae(oe.x,oe.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){const re=ee/m,oe=f*Math.cos(re*Math.PI/2),ue=g*Math.sin(re*Math.PI/2)+S;for(let ge=0,ke=I.length;ge<ke;ge++){const ze=k(I[ge],q[ge],ue);ae(ze.x,ze.y,d+oe)}for(let ge=0,ke=D.length;ge<ke;ge++){const ze=D[ge];j=K[ge];for(let He=0,We=ze.length;He<We;He++){const U=k(ze[He],j[He],ue);v?ae(U.x,U.y+E[h-1].y,E[h-1].x+oe):ae(U.x,U.y,d+oe)}}}de(),V();function de(){const ee=s.length/3;if(u){let re=0,oe=W*re;for(let ue=0;ue<le;ue++){const ge=me[ue];Ae(ge[2]+oe,ge[1]+oe,ge[0]+oe)}re=h+m*2,oe=W*re;for(let ue=0;ue<le;ue++){const ge=me[ue];Ae(ge[0]+oe,ge[1]+oe,ge[2]+oe)}}else{for(let re=0;re<le;re++){const oe=me[re];Ae(oe[2],oe[1],oe[0])}for(let re=0;re<le;re++){const oe=me[re];Ae(oe[0]+W*h,oe[1]+W*h,oe[2]+W*h)}}n.addGroup(ee,s.length/3-ee,0)}function V(){const ee=s.length/3;let re=0;Z(I,re),re+=I.length;for(let oe=0,ue=D.length;oe<ue;oe++){const ge=D[oe];Z(ge,re),re+=ge.length}n.addGroup(ee,s.length/3-ee,1)}function Z(ee,re){let oe=ee.length;for(;--oe>=0;){const ue=oe;let ge=oe-1;ge<0&&(ge=ee.length-1);for(let ke=0,ze=h+m*2;ke<ze;ke++){const He=W*ke,We=W*(ke+1),U=re+ue+He,at=re+ge+He,Ze=re+ge+We,C=re+ue+We;_e(U,at,Ze,C)}}}function ae(ee,re,oe){c.push(ee),c.push(re),c.push(oe)}function Ae(ee,re,oe){Ie(ee),Ie(re),Ie(oe);const ue=s.length/3,ge=M.generateTopUV(n,s,ue-3,ue-2,ue-1);tt(ge[0]),tt(ge[1]),tt(ge[2])}function _e(ee,re,oe,ue){Ie(ee),Ie(re),Ie(ue),Ie(re),Ie(oe),Ie(ue);const ge=s.length/3,ke=M.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);tt(ke[0]),tt(ke[1]),tt(ke[3]),tt(ke[1]),tt(ke[2]),tt(ke[3])}function Ie(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function tt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ph(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new js[s.type]().fromJSON(s)),new er(n,e.options)}}const Rh={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],S=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-d),new ce(u,1-g),new ce(S,1-p)]:[new ce(o,1-c),new ce(h,1-d),new ce(f,1-g),new ce(m,1-p)]}};function Ph(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oo extends so{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oo(e.radius,e.detail)}}class Pt extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],S=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let E=0;E<l;E++){const v=E*d-r;g.push(v,-M,0),S.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const E=M+l*p,v=M+l*(p+1),y=M+1+l*(p+1),w=M+1+l*p;f.push(E,v,w),f.push(v,y,w)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(S,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ci extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,u=new L,f=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const M=[],E=p/n,v=a+E*o,y=e*Math.cos(v),w=Math.sqrt(e*e-y*y);let A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){const T=_/t,R=s+T*r;d.x=-w*Math.cos(R),d.y=y,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(T+A,1-E),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const E=h[p][M+1],v=h[p][M],y=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(E,v,w),(p!==n-1||c<Math.PI)&&f.push(v,y,w)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(S,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new L,f=new L,g=new L;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,v=(s+1)*S+m;c.push(p,M,v),c.push(M,E,v)}this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class nr extends Dt{constructor(e=new gc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new ce;let h=new L;const d=[],u=[],f=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(f,2));function S(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),p()}function m(E){h=e.getPointAt(E/t,h);const v=a.normals[E],y=a.binormals[E];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);c.x=T*v.x+_*y.x,c.y=T*v.y+_*y.y,c.z=T*v.z+_*y.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let v=1;v<=s;v++){const y=(s+1)*(E-1)+(v-1),w=(s+1)*E+(v-1),A=(s+1)*E+v,_=(s+1)*(E-1)+v;g.push(y,w,_),g.push(w,A,_)}}function M(){for(let E=0;E<=t;E++)for(let v=0;v<=s;v++)l.x=E/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new nr(new js[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Lh extends Oi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new et(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(nl(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(nl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const s in n)e[s]=n[s]}return e}function nl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Uh={clone:Ii,merge:Ht};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fh extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class on extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bh extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kr=new _t,il=new L,sl=new L;class zh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;il.setFromMatrixPosition(e.matrixWorld),t.position.copy(il),sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===as||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Is=new L,Ns=new In,fn=new L;class Ec extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Is,Ns,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Ns,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Is,Ns,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Ns,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new L,rl=new ce,al=new ce;class Kt extends Ec{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ar extends Ec{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kh extends zh{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Tc extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Si=-90,yi=1;class Gh extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Si,yi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Si,yi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Si,yi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Si,yi,e,t);o.layers=this.layers,this.add(o);const c=new Kt(Si,yi,e,t);c.layers=this.layers,this.add(c);const l=new Kt(Si,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hh extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mo=class mo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};mo.prototype.isMatrix2=!0;let ol=mo;function ll(i,e,t,n){const s=Vh(n);switch(t){case nc:return i*e;case sc:return i*e/s.components*s.byteLength;case Ka:return i*e/s.components*s.byteLength;case ri:return i*e*2/s.components*s.byteLength;case Za:return i*e*2/s.components*s.byteLength;case ic:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:case la:return Math.max(i,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(i,8)*Math.max(e,8)/2;case ca:case ua:case fa:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case Zs:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Pa:case La:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Da:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $s:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vh(i){switch(i){case Zt:case Ql:return{byteLength:1,components:1};case is:case jl:case Mn:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case xn:case Xa:case gn:return{byteLength:4,components:1};case ec:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function Ac(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wh(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const S=d[f];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Wf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
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
#endif`,nd=`#if defined( USE_POINTS_UV )
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
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
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
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
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
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ep=`#define DISTANCE
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
}`,tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#include <common>
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,up=`#define MATCAP
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
}`,hp=`#define MATCAP
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
}`,fp=`#define NORMAL
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
}`,dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pp=`#define PHONG
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
}`,mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,gp=`#define STANDARD
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
}`,_p=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,vp=`#define TOON
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
}`,xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Mp=`uniform float size;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,bp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Ep=`uniform float rotation;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:Kh,alphatest_fragment:Zh,alphatest_pars_fragment:$h,aomap_fragment:Jh,aomap_pars_fragment:Qh,batching_pars_vertex:jh,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:ff,color_pars_vertex:df,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:yf,colorspace_pars_fragment:bf,envmap_fragment:Ef,envmap_common_pars_fragment:wf,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Rf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:If,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Of,lights_toon_fragment:zf,lights_toon_pars_fragment:kf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,lightprobes_pars_fragment:Kf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:jf,map_pars_fragment:ed,map_particle_fragment:td,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:sd,morphinstance_vertex:rd,morphcolor_vertex:ad,morphnormal_vertex:od,morphtarget_pars_vertex:ld,morphtarget_vertex:cd,normal_fragment_begin:ud,normal_fragment_maps:hd,normal_pars_fragment:fd,normal_pars_vertex:dd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:vd,iridescence_pars_fragment:xd,opaque_fragment:Md,packing:Sd,premultiplied_alpha_fragment:yd,project_vertex:bd,dithering_fragment:Ed,dithering_pars_fragment:wd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Rd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Dd,skinning_pars_vertex:Ud,skinning_vertex:Id,skinnormal_vertex:Nd,specularmap_fragment:Fd,specularmap_pars_fragment:Od,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:kd,transmission_pars_fragment:Gd,uv_pars_fragment:Hd,uv_pars_vertex:Vd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:qd,background_frag:Yd,backgroundCube_vert:Kd,backgroundCube_frag:Zd,cube_vert:$d,cube_frag:Jd,depth_vert:Qd,depth_frag:jd,distance_vert:ep,distance_frag:tp,equirect_vert:np,equirect_frag:ip,linedashed_vert:sp,linedashed_frag:rp,meshbasic_vert:ap,meshbasic_frag:op,meshlambert_vert:lp,meshlambert_frag:cp,meshmatcap_vert:up,meshmatcap_frag:hp,meshnormal_vert:fp,meshnormal_frag:dp,meshphong_vert:pp,meshphong_frag:mp,meshphysical_vert:gp,meshphysical_frag:_p,meshtoon_vert:vp,meshtoon_frag:xp,points_vert:Mp,points_frag:Sp,shadow_vert:yp,shadow_frag:bp,sprite_vert:Ep,sprite_frag:wp},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},mn={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};mn.physical={uniforms:Ht([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Fs={r:0,b:0,g:0},Tp=new _t,Cc=new Xe;Cc.set(-1,0,0,0,1,0,0,0,1);function Ap(i,e,t,n,s,r){const a=new et(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const v=M.backgroundBlurriness>0;E=e.get(E,v)}return E}function g(M){let E=!1;const v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),E=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,E){const v=f(E);v&&(v.isCubeTexture||v.mapping===rr)?(l===void 0&&(l=new ut(new li(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Ii(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cc),l.material.toneMapped=je.getTransfer(v.colorSpace)!==ct,(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ut(new Pt(2,2),new zt({name:"BackgroundMaterial",uniforms:Ii(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=je.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(Fs,yc(i)),t.buffers.color.setClear(Fs.r,Fs.g,Fs.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:S,dispose:p}}function Cp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(D,F,N,P,I){let k=!1;const W=d(D,P,N,F);r!==W&&(r=W,l(r.object)),k=f(D,P,N,I),k&&g(D,P,N,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(D,F,N,P),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,F,N,P){const I=P.wireframe===!0;let k=n[F.id];k===void 0&&(k={},n[F.id]=k);const W=D.isInstancedMesh===!0?D.id:0;let Q=k[W];Q===void 0&&(Q={},k[W]=Q);let q=Q[N.id];q===void 0&&(q={},Q[N.id]=q);let K=q[I];return K===void 0&&(K=u(c()),q[I]=K),K}function u(D){const F=[],N=[],P=[];for(let I=0;I<t;I++)F[I]=0,N[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,F,N,P){const I=r.attributes,k=F.attributes;let W=0;const Q=N.getAttributes();for(const q in Q)if(Q[q].location>=0){const j=I[q];let fe=k[q];if(fe===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function g(D,F,N,P){const I={},k=F.attributes;let W=0;const Q=N.getAttributes();for(const q in Q)if(Q[q].location>=0){let j=k[q];j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),I[q]=fe,W++}r.attributes=I,r.attributesNum=W,r.index=P}function S(){const D=r.newAttributes;for(let F=0,N=D.length;F<N;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){const N=r.newAttributes,P=r.enabledAttributes,I=r.attributeDivisors;N[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),I[D]!==F&&(i.vertexAttribDivisor(D,F),I[D]=F)}function M(){const D=r.newAttributes,F=r.enabledAttributes;for(let N=0,P=F.length;N<P;N++)F[N]!==D[N]&&(i.disableVertexAttribArray(N),F[N]=0)}function E(D,F,N,P,I,k,W){W===!0?i.vertexAttribIPointer(D,F,N,I,k):i.vertexAttribPointer(D,F,N,P,I,k)}function v(D,F,N,P){S();const I=P.attributes,k=N.getAttributes(),W=F.defaultAttributeValues;for(const Q in k){const q=k[Q];if(q.location>=0){let K=I[Q];if(K===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const j=K.normalized,fe=K.itemSize,me=e.get(K);if(me===void 0)continue;const le=me.buffer,ie=me.type,de=me.bytesPerElement,V=ie===i.INT||ie===i.UNSIGNED_INT||K.gpuType===Xa;if(K.isInterleavedBufferAttribute){const Z=K.data,ae=Z.stride,Ae=K.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,Z.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,le);for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,fe/q.locationSize,ie,j,ae*de,(Ae+fe/q.locationSize*_e)*de,V)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Z=0;Z<q.locationSize;Z++)E(q.location+Z,fe/q.locationSize,ie,j,fe*de,fe/q.locationSize*Z*de,V)}}else if(W!==void 0){const j=W[Q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(q.location,j);break;case 3:i.vertexAttrib3fv(q.location,j);break;case 4:i.vertexAttrib4fv(q.location,j);break;default:i.vertexAttrib1fv(q.location,j)}}}}M()}function y(){T();for(const D in n){const F=n[D];for(const N in F){const P=F[N];for(const I in P){const k=P[I];for(const W in k)h(k[W].object),delete k[W];delete P[I]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const N in F){const P=F[N];for(const I in P){const k=P[I];for(const W in k)h(k[W].object),delete k[W];delete P[I]}}delete n[D.id]}function A(D){for(const F in n){const N=n[F];for(const P in N){const I=N[P];if(I[D.id]===void 0)continue;const k=I[D.id];for(const W in k)h(k[W].object),delete k[W];delete I[D.id]}}}function _(D){for(const F in n){const N=n[F],P=D.isInstancedMesh===!0?D.id:0,I=N[P];if(I!==void 0){for(const k in I){const W=I[k];for(const Q in W)h(W[Q].object),delete W[Q];delete I[k]}delete N[P],Object.keys(N).length===0&&delete n[F]}}}function T(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Rp(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zt&&A!==gn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ve("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:y,samples:w}}function Lp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Vn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,E=M*4;let v=p.clippingState||null;c.value=v,v=h(g,u,E,f);for(let y=0;y!==E;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,g!==!0||m===null){const p=f+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=f;E!==S;++E,v+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Ri=4,Dp=6,Up=20,Ip=256,Wi=new ar,cl=new et;let Gr=null,Hr=0,Vr=0,Wr=!1;const Np=new L,jn=new L;class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Np}=r;Gr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr,Hr,Vr),this._renderer.xr.enabled=Wr,e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Mn,format:cn,colorSpace:rs,depthBuffer:!1},s=hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fp(r)),this._blurMaterial=Bp(r,e,t),this._ggxMaterial=Op(r,e,t)}return s}_compileMaterial(e){const t=new ut(new Dt,e);this._renderer.compile(t,Wi)}_sceneToCubeUV(e,t,n,s,r){const c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(cl),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new li,new no({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(cl),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const y=this._cubeSize;bi(s,v*y,E>2?y:0,y,y),d.setRenderTarget(s),p&&d.render(S,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===si||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;bi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-Ri?n-g+Ri:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,bi(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Wi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,bi(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(o,Wi)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ri?s-this._lodMax+Ri:0),u=4*(this._cubeSize-h);bi(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,Wi)}}function Fp(i){const e=[],t=[];let n=i;const s=i-Ri+1+Dp;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),S=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,E=p>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(v,f*u*p);for(let y=0;y<u;y++){const w=h[y*2]*2-1,A=h[y*2+1]*2-1;p===0?jn.set(1,A,w):p===1?jn.set(-w,1,-A):p===2?jn.set(-w,A,1):p===3?jn.set(-1,A,-w):p===4?jn.set(-w,-1,A):jn.set(w,A,-1),jn.toArray(S,(p*u+y)*f)}}const m=new Dt;m.setAttribute("position",new Ln(g,f)),m.setAttribute("outputDirection",new Ln(S,f)),t.push(new ut(m,null)),n>Ri&&n--}return{lodMeshes:t,sizeLods:e}}function hl(i,e,t){const n=new Bt(i,e,t);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Op(i,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ip,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:or(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Bp(i,e,t){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:Up,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:or(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function fl(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:or(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function dl(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function or(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rc extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new li(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Rn});r.uniforms.tEquirect.value=t;const a=new ut(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Et),new Gh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function zp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===hr||f===fr)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new Rc(g.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===hr||f===fr,S=f===si||f===Di;if(g||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ul(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new ul(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===hr?u.mapping=si:f===fr&&(u.mapping=Di),u}function c(u){let f=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function kp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Gp(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(f!==null){const M=f.array;S=f.version;for(let E=0,v=M.length;E<v;E+=3){const y=M[E+0],w=M[E+1],A=M[E+2];u.push(y,w,w,A,A,y)}}else{const M=g.array;S=g.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const y=E+0,w=E+1,A=E+2;u.push(y,w,w,A,A,y)}}const m=new(g.count>=65535?uc:cc)(u,1);m.version=S;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Hp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wp(i,e,t){const n=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),S===!0&&(E=3);let v=o.attributes.position.count*E,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*y*4*d),A=new ac(w,v,y,d);A.type=gn,A.needsUpdate=!0;const _=E*4;for(let R=0;R<d;R++){const D=m[R],F=p[R],N=M[R],P=v*y*4*R;for(let I=0;I<D.count;I++){const k=I*_;f===!0&&(s.fromBufferAttribute(D,I),w[P+k+0]=s.x,w[P+k+1]=s.y,w[P+k+2]=s.z,w[P+k+3]=0),g===!0&&(s.fromBufferAttribute(F,I),w[P+k+4]=s.x,w[P+k+5]=s.y,w[P+k+6]=s.z,w[P+k+7]=0),S===!0&&(s.fromBufferAttribute(N,I),w[P+k+8]=s.x,w[P+k+9]=s.y,w[P+k+10]=s.z,w[P+k+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new ce(v,y)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xp(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const qp={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[ql]:"CINEON_TONE_MAPPING",[Yl]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function Yp(i,e,t,n,s,r){const a=new Bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Dt;l.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new rt([0,2,0,0,2,0],2));const h=new Fh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ut(l,h),u=new ar(-1,1,1,-1,0,1);let f=null,g=null,S=!1,m,p=null,M=[],E=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),c!==null&&c.setSize(v,y);for(let w=0;w<M.length;w++){const A=M[w];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;const y=a.width,w=a.height;M.length>0&&o===null&&(o=new Bt(y,w,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),c=new Bt(y,w,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const _=M[A];_.setSize&&_.setSize(y,w)}},this.begin=function(v,y){if(S||v.toneMapping===vn&&M.length===0)return!1;if(p=y,y!==null){const w=y.width,A=y.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=vn,!0},this.hasRenderPass=function(){return E},this.end=function(v,y){v.toneMapping=m,S=!0;let w=a,A=o;for(let _=0;_<M.length;_++){const T=M[_];T.enabled!==!1&&(T.render(v,A,w,y),T.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},je.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");const _=qp[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Pc=new Lt,Ga=new ls(1,1),Lc=new ac,Dc=new Nu,Uc=new hc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pl[s];if(r===void 0&&(r=new Float32Array(s),pl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lr(i,e){let t=ml[e];t===void 0&&(t=new Int32Array(e),ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;vl.set(n),i.uniformMatrix2fv(this.addr,!1,vl),At(t,n)}}function jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),At(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;gl.set(n),i.uniformMatrix4fv(this.addr,!1,gl),At(t,n)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=t.isReversedDepthBuffer()?Qa:Ja,r=Ga):r=Pc,t.setTexture2D(e||r,s)}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dc,s)}function hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uc,s)}function fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lc,s)}function dm(i){switch(i){case 5126:return Kp;case 35664:return Zp;case 35665:return $p;case 35666:return Jp;case 35674:return Qp;case 35675:return jp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return fm}}function pm(i,e){i.uniform1fv(this.addr,e)}function mm(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function _m(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function vm(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xm(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mm(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sm(i,e){i.uniform1iv(this.addr,e)}function ym(i,e){i.uniform2iv(this.addr,e)}function bm(i,e){i.uniform3iv(this.addr,e)}function Em(i,e){i.uniform4iv(this.addr,e)}function wm(i,e){i.uniform1uiv(this.addr,e)}function Tm(i,e){i.uniform2uiv(this.addr,e)}function Am(i,e){i.uniform3uiv(this.addr,e)}function Cm(i,e){i.uniform4uiv(this.addr,e)}function Rm(i,e,t){const n=this.cache,s=e.length,r=lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ga:a=Pc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Pm(i,e,t){const n=this.cache,s=e.length,r=lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dc,r[a])}function Lm(i,e,t){const n=this.cache,s=e.length,r=lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uc,r[a])}function Dm(i,e,t){const n=this.cache,s=e.length,r=lr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lc,r[a])}function Um(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return vm;case 35675:return xm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return ym;case 35668:case 35672:return bm;case 35669:case 35673:return Em;case 5125:return wm;case 36294:return Tm;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Dm}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dm(t.type)}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function xl(i,e){i.seq.push(e),i.map[e.id]=e}function Om(i,e,t){const n=i.name,s=n.length;for(Xr.lastIndex=0;;){const r=Xr.exec(n),a=Xr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xl(t,l===void 0?new Im(o,i,e):new Nm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Fm(o),xl(t,d)),t=d}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Om(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ml(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bm=37297;let zm=0;function km(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sl=new Xe;function Gm(i){je._getMatrix(Sl,je.workingColorSpace,i);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Js:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(e),o)}else return r}function Hm(i,e){const t=Gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Vm={[Wl]:"Linear",[Xl]:"Reinhard",[ql]:"Cineon",[Yl]:"ACESFilmic",[Zl]:"AgX",[$l]:"Neutral",[Kl]:"Custom"};function Wm(i,e){const t=Vm[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new L;function Xm(){je.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function Ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Km(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $i(i){return i!==""}function bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function El(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(Zm,Jm)}const $m=new Map;function Jm(i,e){let t=Ye[e];if(t===void 0){const n=$m.get(e);if(n!==void 0)t=Ye[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ha(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(i){return i.replace(Qm,jm)}function jm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const e0={[Ji]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function t0(i){return e0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const n0={[si]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE_UV"};function i0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":n0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const s0={[Di]:"ENVMAP_MODE_REFRACTION"};function r0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a0={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[du]:"ENVMAP_BLENDING_ADD"};function o0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a0[i.combine]||"ENVMAP_BLENDING_NONE"}function l0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function c0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=t0(t),l=i0(t),h=r0(t),d=o0(t),u=l0(t),f=qm(t),g=Ym(r),S=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),p.length>0&&(p+=`
`)):(m=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),p=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==vn?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Hm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),a=Ha(a),a=bl(a,t),a=El(a,t),o=Ha(o),o=bl(o,t),o=El(o,t),a=wl(a),o=wl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,v=M+p+o,y=Ml(s,s.VERTEX_SHADER,E),w=Ml(s,s.FRAGMENT_SHADER,v);s.attachShader(S,y),s.attachShader(S,w),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(S)||"",N=s.getShaderInfoLog(y)||"",P=s.getShaderInfoLog(w)||"",I=F.trim(),k=N.trim(),W=P.trim();let Q=!0,q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,y,w);else{const K=yl(s,y,"vertex"),j=yl(s,w,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+K+`
`+j)}else I!==""?Ve("WebGLProgram: Program Info Log:",I):(k===""||W==="")&&(q=!1);q&&(D.diagnostics={runnable:Q,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(y),s.deleteShader(w),_=new qs(s,S),T=Km(s,S)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,Bm)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=w,this}let u0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f0(e),t.set(e,n)),n}}class f0{constructor(e){this.id=u0++,this.code=e,this.usedTimes=0}}function d0(i){return i===ri||i===Zs||i===$s}function p0(i,e,t,n,s,r){const a=new oc,o=new h0,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,T,R,D,F,N){const P=D.fog,I=F.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||k,W),q=Q&&Q.mapping===rr?Q.image.height:null,K=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=j!==void 0?j.length:0;let me=0;I.morphAttributes.position!==void 0&&(me=1),I.morphAttributes.normal!==void 0&&(me=2),I.morphAttributes.color!==void 0&&(me=3);let le,ie,de,V;if(K){const pt=mn[K];le=pt.vertexShader,ie=pt.fragmentShader}else{le=_.vertexShader,ie=_.fragmentShader;const pt=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,pt,ot),de=pt.id,V=ot.id}const Z=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Ie=!!_.map,tt=!!_.matcap,ee=!!Q,re=!!_.aoMap,oe=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,ke=!!_.displacementMap,ze=!!_.emissiveMap,He=!!_.metalnessMap,We=!!_.roughnessMap,U=_.anisotropy>0,at=_.clearcoat>0,Ze=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,z=_.sheen>0,X=_.transmission>0,$=U&&!!_.anisotropyMap,he=at&&!!_.clearcoatMap,pe=at&&!!_.clearcoatNormalMap,J=at&&!!_.clearcoatRoughnessMap,ne=x&&!!_.iridescenceMap,ve=x&&!!_.iridescenceThicknessMap,Ne=z&&!!_.sheenColorMap,ye=z&&!!_.sheenRoughnessMap,xe=!!_.specularMap,Fe=!!_.specularColorMap,Ge=!!_.specularIntensityMap,qe=X&&!!_.transmissionMap,B=X&&!!_.thicknessMap,Me=!!_.gradientMap,te=!!_.alphaMap,Se=_.alphaTest>0,Te=!!_.alphaHash,se=!!_.extensions;let Oe=vn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const De={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:le,fragmentShader:ie,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:tt,envMap:ee,envMapMode:ee&&Q.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:oe,bumpMap:ue,normalMap:ge,displacementMap:ke,emissiveMap:ze,normalMapObjectSpace:ge&&_.normalMapType===gu,normalMapTangentSpace:ge&&_.normalMapType===Na,packedNormalMap:ge&&_.normalMapType===Na&&d0(_.normalMap.format),metalnessMap:He,roughnessMap:We,anisotropy:U,anisotropyMap:$,clearcoat:at,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:J,dispersion:Ze,retroreflection:C,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:ve,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:Fe,specularIntensityMap:Ge,transmission:X,transmissionMap:qe,thicknessMap:B,gradientMap:Me,opaque:_.transparent===!1&&_.blending===Qi&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:Se,alphaHash:Te,combine:_.combine,mapUv:Ie&&g(_.map.channel),aoMapUv:re&&g(_.aoMap.channel),lightMapUv:oe&&g(_.lightMap.channel),bumpMapUv:ue&&g(_.bumpMap.channel),normalMapUv:ge&&g(_.normalMap.channel),displacementMapUv:ke&&g(_.displacementMap.channel),emissiveMapUv:ze&&g(_.emissiveMap.channel),metalnessMapUv:He&&g(_.metalnessMap.channel),roughnessMapUv:We&&g(_.roughnessMap.channel),anisotropyMapUv:$&&g(_.anisotropyMap.channel),clearcoatMapUv:he&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(_.sheenRoughnessMap.channel),specularMapUv:xe&&g(_.specularMap.channel),specularColorMapUv:Fe&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:qe&&g(_.transmissionMap.channel),thicknessMapUv:B&&g(_.thicknessMap.channel),alphaMapUv:te&&g(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ge||U),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Ie||te),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wt,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const T=f[_.type];let R;if(T){const D=mn[T];R=Uh.clone(D.uniforms)}else R=_.uniforms;return R}function v(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new c0(i,T,_,s),l.push(R),h.set(T,R)),R}function y(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:A}}function m0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function g0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,S,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);const E=o(u,f,g,S,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(u,f,g,S,m,p){const M=o(u,f,g,S,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||g0),n.length>1&&n.sort(f||Al),s.length>1&&s.sort(f||Al)}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function _0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Cl,i.set(n,[a])):s>=r.length?(a=new Cl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function v0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new et};break;case"SpotLight":t={position:new L,direction:new L,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function x0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M0=0;function S0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y0(i){const e=new v0,t=x0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new _t,a=new _t;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,M=0,E=0,v=0,y=0,w=0,A=0,_=0,T=0,R=0;l.sort(S0);for(let F=0,N=l.length;F<N;F++){const P=l[F],I=P.color,k=P.intensity,W=P.distance;let Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ri?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*k,d+=I.g*k,u+=I.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],k);R++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=Q;const fe=K.getViewportCount();for(let me=0;me<fe;me++)n.sunShadowMatrix[S+me]=K.getMatrix(me),n.sunShadowCascade[S+me]=K._cascadeData[me];S+=fe,g++}n.sun[f]=q,f++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(I).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;const K=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=K.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=Q,A++}M++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(I).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=q,E++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=q,p++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[v]=q,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==A||D.numSpotMaps!==_||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=A,D.numSpotMaps=_,D.numLightProbes=R,n.version=M0++)}function c(l,h){let d=0,u=0,f=0,g=0,S=0,m=0;const p=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){const v=l[M];if(v.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(v.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const y=n.rectArea[S];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Rl(i){const e=new y0(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function b0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Rl(i),e.set(s,[o])):r>=a.length?(o=new Rl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],A0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Pl=new _t,Xi=new L,qr=new L;function C0(i,e,t){let n=new io;const s=new ce,r=new ce,a=new ft,o=new Oh,c=new Bh,l={},h=t.maxTextureSize,d={[qn]:Vt,[Vt]:qn,[wt]:wt},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:E0,fragmentShader:w0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ji;let p=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Yc&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ji);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Rn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==this.type;N&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(I=>I.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,I=w.length;P<I;P++){const k=w[P],W=k.shadow;if(W===void 0){Ve("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Q=W.getFrameExtents();s.multiply(Q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,W.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ki){if(k.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Bt(s.x,s.y,{format:ri,type:Mn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new ls(s.x,s.y,gn),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Dn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut}else k.isPointLight?(W.map=new Rc(s.x),W.map.depthTexture=new ju(s.x,xn)):(W.map=new Bt(s.x,s.y),W.map.depthTexture=new ls(s.x,s.y,xn)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Dn,this.type===Ji?(W.map.depthTexture.compareFunction=q?Qa:Ja,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,_);for(let j=0;j<K;j++){const fe=W.getCamera(j);if(k.isPointLight){const me=W.camera,le=W.matrix,ie=k.distance||me.far;ie!==me.far&&(me.far=ie,me.updateProjectionMatrix()),Xi.setFromMatrixPosition(k.matrixWorld),me.position.copy(Xi),qr.copy(me.position),qr.add(T0[j]),me.up.copy(A0[j]),me.lookAt(qr),me.updateMatrixWorld(),le.makeTranslation(-Xi.x,-Xi.y,-Xi.z),Pl.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pl,me.coordinateSystem,me.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,j),i.clear();else{j===0&&(i.setRenderTarget(W.map),i.clear());const me=W.getViewport(j);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),F.viewport(a)}n=W.getFrustum(j),v(A,_,fe,k,this.type)}W.isPointLightShadow!==!0&&this.type===Ki&&M(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,D)};function M(w,A){const _=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Bt(s.x,s.y,{format:ri,type:Mn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,f,S,null)}function E(w,A,_,T){let R=null;const D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=R.uuid,N=A.uuid;let P=l[F];P===void 0&&(P={},l[F]=P);let I=P[N];I===void 0&&(I=R.clone(),P[N]=I,A.addEventListener("dispose",y)),R=I}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Ki?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=i.properties.get(R);F.light=_}return R}function v(w,A,_,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ki)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const N=e.update(w),P=w.material;if(Array.isArray(P)){const I=N.groups;for(let k=0,W=I.length;k<W;k++){const Q=I[k],q=P[Q.materialIndex];if(q&&q.visible){const K=E(w,q,T,R);w.onBeforeShadow(i,w,A,_,N,K,Q),i.renderBufferDirect(_,null,N,K,w,Q),w.onAfterShadow(i,w,A,_,N,K,Q)}}}else if(P.visible){const I=E(w,P,T,R);w.onBeforeShadow(i,w,A,_,N,I,null),i.renderBufferDirect(_,null,N,I,w,null),w.onAfterShadow(i,w,A,_,N,I,null)}}const F=w.children;for(let N=0,P=F.length;N<P;N++)v(F[N],A,_,T,R)}function y(w){w.target.removeEventListener("dispose",y);for(const _ in l){const T=l[_],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function R0(i,e){function t(){let B=!1;const Me=new ft;let te=null;const Se=new ft(0,0,0,0);return{setMask:function(Te){te!==Te&&!B&&(i.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){B=Te},setClear:function(Te,se,Oe,De,pt){pt===!0&&(Te*=De,se*=De,Oe*=De),Me.set(Te,se,Oe,De),Se.equals(Me)===!1&&(i.clearColor(Te,se,Oe,De),Se.copy(Me))},reset:function(){B=!1,te=null,Se.set(-1,0,0,0)}}}function n(){let B=!1,Me=!1,te=null,Se=null,Te=null;return{setReversed:function(se){if(Me!==se){const Oe=e.get("EXT_clip_control");se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Me=se;const De=Te;Te=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(se){se?Z(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(se){te!==se&&!B&&(i.depthMask(se),te=se)},setFunc:function(se){if(Me&&(se=Cu[se]),Se!==se){switch(se){case Qr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=se}},setLocked:function(se){B=se},setClear:function(se){Te!==se&&(Te=se,Me&&(se=1-se),i.clearDepth(se))},reset:function(){B=!1,te=null,Se=null,Te=null,Me=!1}}}function s(){let B=!1,Me=null,te=null,Se=null,Te=null,se=null,Oe=null,De=null,pt=null;return{setTest:function(ot){B||(ot?Z(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ot){Me!==ot&&!B&&(i.stencilMask(ot),Me=ot)},setFunc:function(ot,tn,un){(te!==ot||Se!==tn||Te!==un)&&(i.stencilFunc(ot,tn,un),te=ot,Se=tn,Te=un)},setOp:function(ot,tn,un){(se!==ot||Oe!==tn||De!==un)&&(i.stencilOp(ot,tn,un),se=ot,Oe=tn,De=un)},setLocked:function(ot){B=ot},setClear:function(ot){pt!==ot&&(i.clearStencil(ot),pt=ot)},reset:function(){B=!1,Me=null,te=null,Se=null,Te=null,se=null,Oe=null,De=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,E=null,v=null,y=null,w=null,A=null,_=new et(0,0,0),T=0,R=!1,D=null,F=null,N=null,P=null,I=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=Q>=2);let K=null,j={};const fe=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),le=new ft().fromArray(fe),ie=new ft().fromArray(me);function de(B,Me,te,Se){const Te=new Uint8Array(4),se=i.createTexture();i.bindTexture(B,se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<te;Oe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Me+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return se}const V={};V[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ns),ue(!1),ge(Co),Z(i.CULL_FACE),re(Rn);function Z(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ae(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ae(B,Me){return u[B]!==Me?(i.bindFramebuffer(B,Me),u[B]=Me,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function _e(B,Me){let te=g,Se=!1;if(B){te=f.get(Me),te===void 0&&(te=[],f.set(Me,te));const Te=B.textures;if(te.length!==Te.length||te[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Oe=Te.length;se<Oe;se++)te[se]=i.COLOR_ATTACHMENT0+se;te.length=Te.length,Se=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Se=!0);Se&&i.drawBuffers(te)}function Ie(B){return S!==B?(i.useProgram(B),S=B,!0):!1}const tt={[Ti]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[$c]:i.FUNC_REVERSE_SUBTRACT};tt[Jc]=i.MIN,tt[Qc]=i.MAX;const ee={[jc]:i.ZERO,[eu]:i.ONE,[tu]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[au]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[uu]:i.CONSTANT_ALPHA,[hu]:i.ONE_MINUS_CONSTANT_ALPHA};function re(B,Me,te,Se,Te,se,Oe,De,pt,ot){if(B===Rn){m===!0&&(ae(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),B!==Kc){if(B!==p||ot!==R){if((M!==Ti||y!==Ti)&&(i.blendEquation(i.FUNC_ADD),M=Ti,y=Ti),ot)switch(B){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",B);break}else switch(B){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Po:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",B);break}E=null,v=null,w=null,A=null,_.set(0,0,0),T=0,p=B,R=ot}return}Te=Te||Me,se=se||te,Oe=Oe||Se,(Me!==M||Te!==y)&&(i.blendEquationSeparate(tt[Me],tt[Te]),M=Me,y=Te),(te!==E||Se!==v||se!==w||Oe!==A)&&(i.blendFuncSeparate(ee[te],ee[Se],ee[se],ee[Oe]),E=te,v=Se,w=se,A=Oe),(De.equals(_)===!1||pt!==T)&&(i.blendColor(De.r,De.g,De.b,pt),_.copy(De),T=pt),p=B,R=!1}function oe(B,Me){B.side===wt?ae(i.CULL_FACE):Z(i.CULL_FACE);let te=B.side===Vt;Me&&(te=!te),ue(te),B.blending===Qi&&B.transparent===!1?re(Rn):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Se=B.stencilWrite;o.setTest(Se),Se&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function ge(B){B!==Xc?(Z(i.CULL_FACE),B!==F&&(B===Co?i.cullFace(i.BACK):B===qc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),F=B}function ke(B){B!==N&&(W&&i.lineWidth(B),N=B)}function ze(B,Me,te){B?(Z(i.POLYGON_OFFSET_FILL),(P!==Me||I!==te)&&(P=Me,I=te,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,te))):ae(i.POLYGON_OFFSET_FILL)}function He(B){B?Z(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function We(B){B===void 0&&(B=i.TEXTURE0+k-1),K!==B&&(i.activeTexture(B),K=B)}function U(B,Me,te){te===void 0&&(K===null?te=i.TEXTURE0+k-1:te=K);let Se=j[te];Se===void 0&&(Se={type:void 0,texture:void 0},j[te]=Se),(Se.type!==B||Se.texture!==Me)&&(K!==te&&(i.activeTexture(te),K=te),i.bindTexture(B,Me||V[B]),Se.type=B,Se.texture=Me)}function at(){const B=j[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(B){st("WebGLState:",B)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(B){st("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){st("WebGLState:",B)}}function z(){try{i.texSubImage3D(...arguments)}catch(B){st("WebGLState:",B)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(B){st("WebGLState:",B)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(B){st("WebGLState:",B)}}function he(){try{i.texStorage2D(...arguments)}catch(B){st("WebGLState:",B)}}function pe(){try{i.texStorage3D(...arguments)}catch(B){st("WebGLState:",B)}}function J(){try{i.texImage2D(...arguments)}catch(B){st("WebGLState:",B)}}function ne(){try{i.texImage3D(...arguments)}catch(B){st("WebGLState:",B)}}function ve(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Ne(B,Me){d[B]!==Me&&(i.pixelStorei(B,Me),d[B]=Me)}function ye(B){le.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),le.copy(B))}function xe(B){ie.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function Fe(B,Me){let te=l.get(Me);te===void 0&&(te=new WeakMap,l.set(Me,te));let Se=te.get(B);Se===void 0&&(Se=i.getUniformBlockIndex(Me,B.name),te.set(B,Se))}function Ge(B,Me){const Se=l.get(Me).get(B);c.get(Me)!==Se&&(i.uniformBlockBinding(Me,Se,B.__bindingPointIndex),c.set(Me,Se))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,j={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,E=null,v=null,y=null,w=null,A=null,_=new et(0,0,0),T=0,R=!1,D=null,F=null,N=null,P=null,I=null,le.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ae,bindFramebuffer:Ae,drawBuffers:_e,useProgram:Ie,setBlending:re,setMaterial:oe,setFlipSided:ue,setCullFace:ge,setLineWidth:ke,setPolygonOffset:ze,setScissorTest:He,activeTexture:We,bindTexture:U,unbindTexture:at,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:J,texImage3D:ne,pixelStorei:Ne,getParameter:ve,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:pe,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:ye,viewport:xe,reset:qe}}function P0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,x){return g?new OffscreenCanvas(C,x):Qs("canvas")}function m(C,x,z){let X=1;const $=Ze(C);if(($.width>z||$.height>z)&&(X=z/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const he=Math.floor(X*$.width),pe=Math.floor(X*$.height);u===void 0&&(u=S(he,pe));const J=x?S(he,pe):u;return J.width=he,J.height=pe,J.getContext("2d").drawImage(C,0,0,he,pe),Ve("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+he+"x"+pe+")."),J}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,x,z,X,$,he=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),z===i.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),x===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),z===i.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),z===i.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const ne=he?Js:je.getTransfer($);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=ne===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),z===i.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(C,x){let z;return C?x===null||x===xn||x===ss?z=i.DEPTH24_STENCIL8:x===gn?z=i.DEPTH32F_STENCIL8:x===is&&(z=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===ss?z=i.DEPTH_COMPONENT24:x===gn?z=i.DEPTH_COMPONENT32F:x===is&&(z=i.DEPTH_COMPONENT16),z}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==Et?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(C){const x=C.target;x.removeEventListener("dispose",_),D(x)}function T(C){const x=n.get(C);if(x.__webglInit===void 0)return;const z=C.source,X=f.get(z);if(X){const $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(X).length===0&&f.delete(z)}n.remove(C)}function R(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const z=C.source,X=f.get(z);delete X[x.__cacheKey],a.memory.textures--}function D(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[X][$]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=C.textures;for(let X=0,$=z.length;X<$;X++){const he=n.get(z[X]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(z[X])}n.remove(C)}let F=0;function N(){F=0}function P(){return F}function I(C){F=C}function k(){const C=F;return C>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function W(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Q(C,x){const z=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const X=C.image;if(X===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(z,C,x);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function q(C,x){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ae(z,C,x);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function K(C,x){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ae(z,C,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function j(C,x){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Ae(z,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const fe={[Ys]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},me={[Ut]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},le={[vu]:i.NEVER,[bu]:i.ALWAYS,[xu]:i.LESS,[Ja]:i.LEQUAL,[Mu]:i.EQUAL,[Qa]:i.GEQUAL,[Su]:i.GREATER,[yu]:i.NOTEQUAL};function ie(C,x){if(x.type===gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Et||x.magFilter===dr||x.magFilter===ps||x.magFilter===ti||x.minFilter===Et||x.minFilter===dr||x.minFilter===ps||x.minFilter===ti)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,fe[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,fe[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,fe[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,me[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==ps&&x.minFilter!==ti||x.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function de(C,x){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const X=x.source;let $=f.get(X);$===void 0&&($={},f.set(X,$));const he=W(x);if(he!==C.__cacheKey){$[he]===void 0&&($[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[he].usedTimes++;const pe=$[C.__cacheKey];pe!==void 0&&($[C.__cacheKey].usedTimes--,pe.usedTimes===0&&R(x)),C.__cacheKey=he,C.__webglTexture=$[he].texture}return z}function V(C,x,z){return Math.floor(Math.floor(C/z)/x)}function Z(C,x,z,X){const he=C.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,X,x.data);else{he.sort((Ne,ye)=>Ne.start-ye.start);let pe=0;for(let Ne=1;Ne<he.length;Ne++){const ye=he[pe],xe=he[Ne],Fe=ye.start+ye.count,Ge=V(xe.start,x.width,4),qe=V(ye.start,x.width,4);xe.start<=Fe+1&&Ge===qe&&V(xe.start+xe.count-1,x.width,4)===Ge?ye.count=Math.max(ye.count,xe.start+xe.count-ye.start):(++pe,he[pe]=xe)}he.length=pe+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ne=0,ye=he.length;Ne<ye;Ne++){const xe=he[Ne],Fe=Math.floor(xe.start/4),Ge=Math.ceil(xe.count/4),qe=Fe%x.width,B=Math.floor(Fe/x.width),Me=Ge,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,qe,B,Me,te,z,X,x.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ae(C,x,z){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const $=de(C,x),he=x.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+z);const pe=n.get(he);if(he.version!==pe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const te=je.getPrimaries(je.workingColorSpace),Se=x.colorSpace===Wn?null:je.getPrimaries(x.colorSpace),Te=x.colorSpace===Wn||te===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=m(x.image,!1,s.maxTextureSize);ne=at(x,ne);const ve=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type);let ye=v(x.internalFormat,ve,Ne,x.normalized,x.colorSpace,x.isVideoTexture);ie(X,x);let xe;const Fe=x.mipmaps,Ge=x.isVideoTexture!==!0,qe=pe.__version===void 0||$===!0,B=he.dataReady,Me=w(x,ne);if(x.isDepthTexture)ye=y(x.format===ni,x.type),qe&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ve,Ne,null));else if(x.isDataTexture)if(Fe.length>0){Ge&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,ye,Fe[0].width,Fe[0].height);for(let te=0,Se=Fe.length;te<Se;te++)xe=Fe[te],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(i.TEXTURE_2D,te,ye,xe.width,xe.height,0,ve,Ne,xe.data);x.generateMipmaps=!1}else Ge?(qe&&t.texStorage2D(i.TEXTURE_2D,Me,ye,ne.width,ne.height),B&&Z(x,ne,ve,Ne)):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ve,Ne,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,ye,Fe[0].width,Fe[0].height,ne.depth);for(let te=0,Se=Fe.length;te<Se;te++)if(xe=Fe[te],x.format!==cn)if(ve!==null)if(Ge){if(B)if(x.layerUpdates.size>0){const Te=ll(xe.width,xe.height,x.format,x.type);for(const se of x.layerUpdates){const Oe=xe.data.subarray(se*Te/xe.data.BYTES_PER_ELEMENT,(se+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,se,xe.width,xe.height,1,ve,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,ve,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ye,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,ve,Ne,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ye,xe.width,xe.height,ne.depth,0,ve,Ne,xe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ge&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,ye,Fe[0].width,Fe[0].height);for(let te=0,Se=Fe.length;te<Se;te++)xe=Fe[te],x.format!==cn?ve!==null?Ge?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ye,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(i.TEXTURE_2D,te,ye,xe.width,xe.height,0,ve,Ne,xe.data)}else if(x.isDataArrayTexture)if(Ge){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,ye,ne.width,ne.height,ne.depth),B)if(x.layerUpdates.size>0){const te=ll(ne.width,ne.height,x.format,x.type);for(const Se of x.layerUpdates){const Te=ne.data.subarray(Se*te/ne.data.BYTES_PER_ELEMENT,(Se+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ne.width,ne.height,1,ve,Ne,Te)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Ne,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,ve,Ne,ne.data);else if(x.isData3DTexture)Ge?(qe&&t.texStorage3D(i.TEXTURE_3D,Me,ye,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Ne,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,ve,Ne,ne.data);else if(x.isFramebufferTexture){if(qe)if(Ge)t.texStorage2D(i.TEXTURE_2D,Me,ye,ne.width,ne.height);else{let te=ne.width,Se=ne.height;for(let Te=0;Te<Me;Te++)t.texImage2D(i.TEXTURE_2D,Te,ye,te,Se,0,ve,Ne,null),te>>=1,Se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(x),te.onpaint=Se=>{const Te=Se.changedElements;for(const se of d)Te.includes(se.image)&&(se.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const Te=i.RGBA,se=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,se,Oe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ge&&qe){const te=Ze(Fe[0]);t.texStorage2D(i.TEXTURE_2D,Me,ye,te.width,te.height)}for(let te=0,Se=Fe.length;te<Se;te++)xe=Fe[te],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve,Ne,xe):t.texImage2D(i.TEXTURE_2D,te,ye,ve,Ne,xe);x.generateMipmaps=!1}else if(Ge){if(qe){const te=Ze(ne);t.texStorage2D(i.TEXTURE_2D,Me,ye,te.width,te.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ne,ne)}else t.texImage2D(i.TEXTURE_2D,0,ye,ve,Ne,ne);p(x)&&M(X),pe.__version=he.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ae(C,x,z){if(x.image.length!==6)return;const X=de(C,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const he=n.get($);if($.version!==he.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const pe=je.getPrimaries(je.workingColorSpace),J=x.colorSpace===Wn?null:je.getPrimaries(x.colorSpace),ne=x.colorSpace===Wn||pe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Ne=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!ve&&!Ne?ye[se]=m(x.image[se],!0,s.maxCubemapSize):ye[se]=Ne?x.image[se].image:x.image[se],ye[se]=at(x,ye[se]);const xe=ye[0],Fe=r.convert(x.format,x.colorSpace),Ge=r.convert(x.type),qe=v(x.internalFormat,Fe,Ge,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,Me=he.__version===void 0||X===!0,te=$.dataReady;let Se=w(x,xe);ie(i.TEXTURE_CUBE_MAP,x);let Te;if(ve){B&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,qe,xe.width,xe.height);for(let se=0;se<6;se++){Te=ye[se].mipmaps;for(let Oe=0;Oe<Te.length;Oe++){const De=Te[Oe];x.format!==cn?Fe!==null?B?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,De.width,De.height,Fe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,qe,De.width,De.height,0,De.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,De.width,De.height,Fe,Ge,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,qe,De.width,De.height,0,Fe,Ge,De.data)}}}else{if(Te=x.mipmaps,B&&Me){Te.length>0&&Se++;const se=Ze(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,qe,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Fe,Ge,ye[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ye[se].width,ye[se].height,0,Fe,Ge,ye[se].data);for(let Oe=0;Oe<Te.length;Oe++){const pt=Te[Oe].image[se].image;B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,pt.width,pt.height,Fe,Ge,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,qe,pt.width,pt.height,0,Fe,Ge,pt.data)}}else{B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Ge,ye[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Fe,Ge,ye[se]);for(let Oe=0;Oe<Te.length;Oe++){const De=Te[Oe];B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Fe,Ge,De.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,qe,Fe,Ge,De.image[se])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),he.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _e(C,x,z,X,$,he){const pe=r.convert(z.format,z.colorSpace),J=r.convert(z.type),ne=v(z.internalFormat,pe,J,z.normalized,z.colorSpace),ve=n.get(x),Ne=n.get(z);if(Ne.__renderTarget=x,!ve.__hasExternalTextures){const ye=Math.max(1,x.width>>he),xe=Math.max(1,x.height>>he);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,he,ne,ye,xe,x.depth,0,pe,J,null):t.texImage2D($,he,ne,ye,xe,0,pe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Ne.__webglTexture,0,He(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Ne.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(C,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,he=y(x.stencilBuffer,$),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),he,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,C)}else{const X=x.textures;for(let $=0;$<X.length;$++){const he=X[$],pe=r.convert(he.format,he.colorSpace),J=r.convert(he.type),ne=v(he.internalFormat,pe,J,he.normalized,he.colorSpace);We(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),ne,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(C,x,z){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x.depthTexture);const ve=r.convert(x.depthTexture.format),Ne=r.convert(x.depthTexture.type);let ye;x.depthTexture.format===Dn?ye=i.DEPTH_COMPONENT24:x.depthTexture.format===ni&&(ye=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ye,x.width,x.height,0,ve,Ne,null)}}else Q(x.depthTexture,0);const he=$.__webglTexture,pe=He(x),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ne=x.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Dn)We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,he,0);else if(x.depthTexture.format===ni)We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(C){const x=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)tt(x.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?tt(x.__webglFramebuffer[0],C,0):tt(x.__webglFramebuffer,C,0)}else if(z){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[X],C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,he)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,x,z){const X=n.get(C);x!==void 0&&_e(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ee(C)}function oe(C){const x=C.texture,z=n.get(C),X=n.get(x);C.addEventListener("dispose",_);const $=C.textures,he=C.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),he){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ne=0;ne<x.mipmaps.length;ne++)z.__webglFramebuffer[J][ne]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pe)for(let J=0,ne=$.length;J<ne;J++){const ve=n.get($[J]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const ne=$[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ve=r.convert(ne.format,ne.colorSpace),Ne=r.convert(ne.type),ye=v(ne.internalFormat,ve,Ne,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),xe=He(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ye,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)_e(z.__webglFramebuffer[J][ne],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else _e(z.__webglFramebuffer[J],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,ne=$.length;J<ne;J++){const ve=$[J],Ne=n.get(ve);let ye=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ne.__webglTexture),ie(ye,ve),_e(z.__webglFramebuffer,C,ve,i.COLOR_ATTACHMENT0+J,ye,0),p(ve)&&M(ye)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),ie(J,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)_e(z.__webglFramebuffer[ne],C,x,i.COLOR_ATTACHMENT0,J,ne);else _e(z.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,J,0);p(x)&&M(J),t.unbindTexture()}C.depthBuffer&&ee(C)}function ue(C){const x=C.textures;for(let z=0,X=x.length;z<X;z++){const $=x[z];if(p($)){const he=E(C),pe=n.get($).__webglTexture;t.bindTexture(he,pe),M(he),t.unbindTexture()}}}const ge=[],ke=[];function ze(C){if(C.samples>0){if(We(C)===!1){const x=C.textures,z=C.width,X=C.height;let $=i.COLOR_BUFFER_BIT;const he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(C),J=x.length>1;if(J)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Ne=n.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,$,i.NEAREST),c===!0&&(ge.length=0,ke.length=0,ge.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ge.push(he),ke.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Ne=n.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(C){return Math.min(s.maxSamples,C.samples)}function We(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function at(C,x){const z=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==rs&&z!==Wn&&(je.getTransfer(z)===ct?(X!==cn||$!==Zt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",z)),x}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.getTextureUnits=P,this.setTextureUnits=I,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function L0(i,e){function t(n,s=Wn){let r;const a=je.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===jl)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===cn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===ri)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Hs||n===Vs||n===Ws||n===Xs)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===aa||n===oa||n===la)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ua||n===ha||n===fa||n===da||n===Zs||n===pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===ua)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fa)return r.COMPRESSED_R11_EAC;if(n===da)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zs)return r.COMPRESSED_RG11_EAC;if(n===pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===Sa||n===ya||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Pa||n===La)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Da||n===Ua||n===$s||n===Ia)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:D0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N0 extends oi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const S=typeof XRWebGLBinding<"u",m=new I0,p={},M=t.getContextAttributes();let E=null,v=null;const y=[],w=[],A=new ce;let _=null,T=null;const R=new Kt;R.viewport=new ft;const D=new Kt;D.viewport=new ft;const F=[R,D],N=new Hh;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=y[V];return Z===void 0&&(Z=new yr,y[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=y[V];return Z===void 0&&(Z=new yr,y[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=y[V];return Z===void 0&&(Z=new yr,y[V]=Z),Z.getHandSpace()};function k(V){const Z=w.indexOf(V.inputSource);if(Z===-1)return;const ae=y[Z];ae!==void 0&&(ae.update(V.inputSource,V.frame,l||a),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let V=0;V<y.length;V++){const Z=w[V];Z!==null&&(w[V]=null,y[V].disconnect(Z))}P=null,I=null,m.reset();for(const V in p)delete p[V];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,v=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){const V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ae=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?ni:Dn,Ae=M.stencil?ss:xn);const Ie={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Bt(u.textureWidth,u.textureHeight,{format:cn,type:Zt,depthTexture:new ls(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Bt(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(V){for(let Z=0;Z<V.removed.length;Z++){const ae=V.removed[Z],Ae=w.indexOf(ae);Ae>=0&&(w[Ae]=null,y[Ae].disconnect(ae))}for(let Z=0;Z<V.added.length;Z++){const ae=V.added[Z];let Ae=w.indexOf(ae);if(Ae===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=w.length){w.push(ae),Ae=Ie;break}else if(w[Ie]===null){w[Ie]=ae,Ae=Ie;break}if(Ae===-1)break}const _e=y[Ae];_e&&_e.connect(ae)}}const q=new L,K=new L;function j(V,Z,ae){q.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Ae=q.distanceTo(K),_e=Z.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,tt=_e[14]/(_e[10]-1),ee=_e[14]/(_e[10]+1),re=(_e[9]+1)/_e[5],oe=(_e[9]-1)/_e[5],ue=(_e[8]-1)/_e[0],ge=(Ie[8]+1)/Ie[0],ke=tt*ue,ze=tt*ge,He=Ae/(-ue+ge),We=He*-ue;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(He),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),_e[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const U=tt+He,at=ee+He,Ze=ke-We,C=ze+(Ae-We),x=re*ee/at*U,z=oe*ee/at*U;V.projectionMatrix.makePerspective(Ze,C,x,z,U,at),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function fe(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,ae=V.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),N.near=D.near=R.near=Z,N.far=D.far=R.far=ae,(P!==N.near||I!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,I=N.far),N.layers.mask=V.layers.mask|6,R.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;const Ae=V.parent,_e=N.cameras;fe(N,Ae);for(let Ie=0;Ie<_e.length;Ie++)fe(_e[Ie],Ae);_e.length===2?j(N,R,D):N.projectionMatrix.copy(R.projectionMatrix),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),me(V,N,Ae)};function me(V,Z,ae){ae===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Fa*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(V){return p[V]};let le=null;function ie(V,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ae=!1;ae.length!==N.cameras.length&&(N.cameras.length=0,Ae=!0);for(let ee=0;ee<ae.length;ee++){const re=ae[ee];let oe=null;if(f!==null)oe=f.getViewport(re);else{const ge=d.getViewSubImage(u,re);oe=ge.viewport,ee===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let ue=F[ee];ue===void 0&&(ue=new Kt,ue.layers.enable(ee),ue.viewport=new ft,F[ee]=ue),ue.matrix.fromArray(re.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(re.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(oe.x,oe.y,oe.width,oe.height),ee===0&&(N.matrix.copy(ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ae===!0&&N.cameras.push(ue)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const ee=d.getDepthInformation(ae[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(_e&&_e.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<ae.length;ee++){const re=ae[ee].camera;if(re){let oe=p[re];oe||(oe=new fc,p[re]=oe);const ue=d.getCameraImage(re);oe.sourceTexture=ue}}}}for(let ae=0;ae<y.length;ae++){const Ae=w[ae],_e=y[ae];Ae!==null&&_e!==void 0&&_e.update(Ae,Z,l||a)}le&&le(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const de=new Ac;de.setAnimationLoop(ie),this.setAnimationLoop=function(V){le=V},this.dispose=function(){}}}const F0=new _t,Ic=new Xe;Ic.set(-1,0,0,0,1,0,0,0,1);function O0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,v=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ic),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function l(v,y){let w=s[v.id];w===void 0&&(m(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",M));const A=y.program;n.updateUBOMapping(v,A);const _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){const y=d();v.__bindingPointIndex=y;const w=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=s[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,T=w.length;_<T;_++){const R=w[_];if(Array.isArray(R))for(let D=0,F=R.length;D<F;D++)f(R[D],_,D,A);else f(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,w,A){if(S(v,y,w,A)===!0){const _=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){const F=T[D],N=p(F);g(F,v.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function S(v,y,w,A){const _=v.value,T=y+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{const R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){const y=v.uniforms;let w=0;const A=16;for(let T=0,R=y.length;T<R;T++){const D=Array.isArray(y[T])?y[T]:[y[T]];for(let F=0,N=D.length;F<N;F++){const P=D[F],I=Array.isArray(P.value)?P.value:[P.value];for(let k=0,W=I.length;k<W;k++){const Q=I[k],q=p(Q),K=w%A,j=K%q.boundary,fe=K+j;w+=j,fe!==0&&A-fe<q.storage&&(w+=A-fe),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=q.storage}}}const _=w%A;return _>0&&(w+=A-_),v.__size=w,v.__cache={},this}function p(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function E(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}const z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function k0(){return dn===null&&(dn=new Ju(z0,16,16,ri,Mn),dn.name="DFG_LUT",dn.minFilter=Et,dn.magFilter=Et,dn.wrapS=Cn,dn.wrapT=Cn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class G0{constructor(e={}){const{canvas:t=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=f,m=new Set([$a,Za,Ka]),p=new Set([Zt,xn,is,ss,qa,Ya]),M=new Uint32Array(4),E=new Int32Array(4),v=new L;let y=null,w=null;const A=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,F=null,N=null,P=null,I=null;this._outputColorSpace=Rt;let k=0,W=0,Q=null,q=-1,K=null;const j=new ft,fe=new ft;let me=null;const le=new et(0);let ie=0,de=t.width,V=t.height,Z=1,ae=null,Ae=null;const _e=new ft(0,0,de,V),Ie=new ft(0,0,de,V);let tt=!1;const ee=new io;let re=!1,oe=!1;const ue=new _t,ge=new L,ke=new ft,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function We(){return Q===null?Z:1}let U=n;function at(b,O){return t.getContext(b,O)}let Ze,C,x,z,X,$,he,pe,J,ne,ve,Ne,ye,xe,Fe,Ge,qe,B,Me,te,Se,Te,se;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",tn,!1),U===null){const O="webgl2";if(U=at(O,b),U===null)throw at(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(b){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),st("WebGLRenderer: "+b.message),b}function Oe(){Ze=new kp(U),Ze.init(),Se=new L0(U,Ze),C=new Pp(U,Ze,e,Se),x=new R0(U,Ze),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),N=U.createFramebuffer(),P=U.createFramebuffer(),I=U.createFramebuffer(),z=new Vp(U),X=new m0,$=new P0(U,Ze,x,X,C,Se,z),he=new zp(R),pe=new Wh(U),Te=new Cp(U,pe),J=new Gp(U,pe,z,Te),ne=new Xp(U,J,pe,Te,z),B=new Wp(U,C,$),Fe=new Lp(X),ve=new p0(R,he,Ze,C,Te,Fe),Ne=new O0(R,X),ye=new _0,xe=new b0(Ze),qe=new Ap(R,he,x,ne,g,c),Ge=new C0(R,ne,C),se=new B0(U,z,C,x),Me=new Rp(U,Ze,z),te=new Hp(U,Ze,z),z.programs=ve.programs,R.capabilities=C,R.extensions=Ze,R.properties=X,R.renderLists=ye,R.shadowMap=Ge,R.state=x,R.info=z}S!==Zt&&(T=new Yp(S,t.width,t.height,o,s,r));const De=new N0(R,U);this.xr=De,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(de,V,!1))},this.getSize=function(b){return b.set(de,V)},this.setSize=function(b,O,Y=!0){if(De.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}de=b,V=O,t.width=Math.floor(b*Z),t.height=Math.floor(O*Z),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(de*Z,V*Z).floor()},this.setDrawingBufferSize=function(b,O,Y){de=b,V=O,Z=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(S===Zt){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,O,Y,G){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,O,Y,G),x.viewport(j.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(Ie)},this.setScissor=function(b,O,Y,G){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,O,Y,G),x.scissor(fe.copy(Ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){x.setScissorTest(tt=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){Ae=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let G=0;if(b){let H=!1;if(Q!==null){const we=Q.texture.format;H=m.has(we)}if(H){const we=Q.texture.type,Re=p.has(we),Ee=qe.getClearColor(),Pe=qe.getClearAlpha(),Ue=Ee.r,Ke=Ee.g,$e=Ee.b;Re?(M[0]=Ue,M[1]=Ke,M[2]=$e,M[3]=Pe,U.clearBufferuiv(U.COLOR,0,M)):(E[0]=Ue,E[1]=Ke,E[2]=$e,E[3]=Pe,U.clearBufferiv(U.COLOR,0,E))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),qe.dispose(),ye.dispose(),xe.dispose(),X.dispose(),he.dispose(),ne.dispose(),Te.dispose(),se.dispose(),ve.dispose(),De.dispose(),De.removeEventListener("sessionstart",_o),De.removeEventListener("sessionend",vo),Kn.stop()};function pt(b){b.preventDefault(),Io("WebGLRenderer: Context Lost."),D=!0}function ot(){Io("WebGLRenderer: Context Restored."),D=!1;const b=z.autoReset,O=Ge.enabled,Y=Ge.autoUpdate,G=Ge.needsUpdate,H=Ge.type;Oe(),z.autoReset=b,Ge.enabled=O,Ge.autoUpdate=Y,Ge.needsUpdate=G,Ge.type=H}function tn(b){st("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function un(b){const O=b.target;O.removeEventListener("dispose",un),Fc(O)}function Fc(b){Oc(b),X.remove(b)}function Oc(b){const O=X.get(b).programs;O!==void 0&&(O.forEach(function(Y){ve.releaseProgram(Y)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,G,H,we){O===null&&(O=ze);const Re=H.isMesh&&H.matrixWorld.determinantAffine()<0,Ee=kc(b,O,Y,G,H);x.setMaterial(G,Re);let Pe=Y.index,Ue=1;if(G.wireframe===!0){if(Pe=J.getWireframeAttribute(Y),Pe===void 0)return;Ue=2}const Ke=Y.drawRange,$e=Y.attributes.position;let Le=Ke.start*Ue,lt=(Ke.start+Ke.count)*Ue;we!==null&&(Le=Math.max(Le,we.start*Ue),lt=Math.min(lt,(we.start+we.count)*Ue)),Pe!==null?(Le=Math.max(Le,0),lt=Math.min(lt,Pe.count)):$e!=null&&(Le=Math.max(Le,0),lt=Math.min(lt,$e.count));const St=lt-Le;if(St<0||St===1/0)return;Te.setup(H,G,Ee,Y,Pe);let vt,dt=Me;if(Pe!==null&&(vt=pe.get(Pe),dt=te,dt.setIndex(vt)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*We()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(H.isLine){let It=G.linewidth;It===void 0&&(It=1),x.setLineWidth(It*We()),H.isLineSegments?dt.setMode(U.LINES):H.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else H.isPoints?dt.setMode(U.POINTS):H.isSprite&&dt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const It=H._multiDrawStarts,Ce=H._multiDrawCounts,Gt=H._multiDrawCount,it=Pe?pe.get(Pe).bytesPerElement:1,$t=X.get(G).currentProgram.getUniforms();for(let hn=0;hn<Gt;hn++)$t.setValue(U,"_gl_DrawID",hn),dt.render(It[hn]/it,Ce[hn])}else if(H.isInstancedMesh)dt.renderInstances(Le,St,H.count);else if(Y.isInstancedBufferGeometry){const It=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,It);dt.renderInstances(Le,St,Ce)}else dt.render(Le,St)};function go(b,O,Y,G){F!==null&&b.isNodeMaterial&&F.setObject(G,b),re===!0&&Fe.setState(b,Y,!1),b.transparent===!0&&b.side===wt&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,ds(b,O,G),b.side=qn,b.needsUpdate=!0,ds(b,O,G),b.side=wt):ds(b,O,G)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),F!==null&&F.renderStart(b,O,Y),w=xe.get(Y),w.init(O),_.push(w),Y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==Y&&b.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,re=Fe.init(this.clippingPlanes,oe),re===!0&&Fe.setGlobalState(this.clippingPlanes,O),F!==null&&Ge.render(w.state.shadowsArray,Y,O);const G=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const we=H.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){const Ee=we[Re];go(Ee,Y,O,H),G.add(Ee)}else go(we,Y,O,H),G.add(we)}),w=_.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(b,O,Y=null){const G=this.compile(b,O,Y);return new Promise(H=>{function we(){if(G.forEach(function(Re){const Pe=X.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&G.delete(Re)}),G.size===0){H(b);return}setTimeout(we,10)}Ze.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let cr=null;function Bc(b){cr&&cr(b)}function _o(){Kn.stop()}function vo(){Kn.start()}const Kn=new Ac;Kn.setAnimationLoop(Bc),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){cr=b,De.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},De.addEventListener("sessionstart",_o),De.addEventListener("sessionend",vo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,O);const Y=De.enabled===!0&&De.isPresenting===!0,G=T!==null&&(Q===null||Y)&&T.begin(R,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(O),O=De.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,O,Q),w=xe.get(b,_.length),w.init(O),w.state.textureUnits=$.getTextureUnits(),_.push(w),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(ue,_n,O.reversedDepth),oe=this.localClippingEnabled,re=Fe.init(this.clippingPlanes,oe),y=ye.get(b,A.length),y.init(),A.push(y),De.enabled===!0&&De.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&ur(Re,O,-1/0,R.sortObjects)}ur(b,O,0,R.sortObjects),y.finish(),F!==null&&F.updateLights(w.state.lightsArray),R.sortObjects===!0&&y.sort(ae,Ae),He=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,He&&qe.addToRenderList(y,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Fe.beginShadows();const H=w.state.shadowsArray;if(Ge.render(H,b,O),re===!0&&Fe.endShadows(),(G&&T.hasRenderPass())===!1){const Re=y.opaque,Ee=y.transmissive;if(w.setupLights(),O.isArrayCamera){const Pe=O.cameras;if(Ee.length>0)for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){const $e=Pe[Ue];Mo(Re,Ee,b,$e)}He&&qe.render(b);for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){const $e=Pe[Ue];xo(y,b,$e,$e.viewport)}}else Ee.length>0&&Mo(Re,Ee,b,O),He&&qe.render(b),xo(y,b,O)}Q!==null&&W===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),G&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,O),Te.resetDefaultState(),q=-1,K=null,_.pop(),_.length>0?(w=_[_.length-1],$.setTextureUnits(w.state.textureUnits),re===!0&&Fe.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,F!==null&&F.renderEnd()};function ur(b,O,Y,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ee)){G&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const Re=ne.update(b),Ee=b.material;Ee.visible&&y.push(b,Re,Ee,Y,ke.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ee))){const Re=ne.update(b),Ee=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ke.copy(Re.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){const Pe=Re.groups;for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){const $e=Pe[Ue],Le=Ee[$e.materialIndex];Le&&Le.visible&&y.push(b,Re,Le,Y,ke.z,$e,O)}}else Ee.visible&&y.push(b,Re,Ee,Y,ke.z,null,O)}}const we=b.children;for(let Re=0,Ee=we.length;Re<Ee;Re++)ur(we[Re],O,Y,G)}function xo(b,O,Y,G){const{opaque:H,transmissive:we,transparent:Re}=b;w.setupLightsView(Y),re===!0&&Fe.setGlobalState(R.clippingPlanes,Y),G&&x.viewport(j.copy(G)),H.length>0&&fs(H,O,Y),we.length>0&&fs(we,O,Y),Re.length>0&&fs(Re,O,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Mo(b,O,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Le=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Bt(1,1,{generateMipmaps:!0,type:Le?Mn:Zt,minFilter:ti,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const we=w.state.transmissionRenderTarget[G.id],Re=G.viewport||j;we.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const Ee=R.getRenderTarget(),Pe=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(le),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),He&&qe.render(Y);const Ke=R.toneMapping;R.toneMapping=vn;const $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),re===!0&&Fe.setGlobalState(R.clippingPlanes,G),fs(b,Y,G),$.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let lt=0,St=O.length;lt<St;lt++){const vt=O[lt],{object:dt,geometry:It,material:Ce,group:Gt}=vt;if(Ce.side===wt&&dt.layers.test(G.layers)){const it=Ce.side;Ce.side=Vt,Ce.needsUpdate=!0,So(dt,Y,G,It,Ce,Gt),Ce.side=it,Ce.needsUpdate=!0,Le=!0}}Le===!0&&($.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we))}R.setRenderTarget(Ee,Pe,Ue),R.setClearColor(le,ie),$e!==void 0&&(G.viewport=$e),R.toneMapping=Ke}function fs(b,O,Y){const G=O.isScene===!0?O.overrideMaterial:null;for(let H=0,we=b.length;H<we;H++){const Re=b[H],{object:Ee,geometry:Pe,group:Ue}=Re;let Ke=Re.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),Ee.layers.test(Y.layers)&&So(Ee,O,Y,Pe,Ke,Ue)}}function So(b,O,Y,G,H,we){F!==null&&H.isNodeMaterial&&F.setObject(b,H),b.onBeforeRender(R,O,Y,G,H,we),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(R,O,Y,G,b,we),H.transparent===!0&&H.side===wt&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,R.renderBufferDirect(Y,O,G,H,b,we),H.side=qn,H.needsUpdate=!0,R.renderBufferDirect(Y,O,G,H,b,we),H.side=wt):R.renderBufferDirect(Y,O,G,H,b,we),b.onAfterRender(R,O,Y,G,H,we)}function ds(b,O,Y){O.isScene!==!0&&(O=ze);const G=X.get(b),H=w.state.lights,we=w.state.shadowsArray,Re=H.state.version,Ee=ve.getParameters(b,H.state,we,O,Y,w.state.lightProbeGridArray),Pe=ve.getProgramCacheKey(Ee);let Ue=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=he.get(b.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",un),Ue=new Map,G.programs=Ue);let $e=Ue.get(Pe);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===Re)return bo(b,Ee),$e}else Ee.uniforms=ve.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,Y,Ee),b.onBeforeCompile(Ee,R),$e=ve.acquireProgram(Ee,Pe),Ue.set(Pe,$e),G.uniforms=Ee.uniforms;const Le=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Fe.uniform),bo(b,Ee),G.needsLights=Hc(b),G.lightsStateVersion=Re,G.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.sunLights.value=H.state.sun,Le.sunLightShadows.value=H.state.sunShadow,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.sunShadowMatrix.value=H.state.sunShadowMatrix,Le.sunShadowCascade.value=H.state.sunShadowCascade,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=$e,G.uniformsList=null,$e}function yo(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=qs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function bo(b,O){const Y=X.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function zc(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Y=0,G=b.length;Y<G;Y++){const H=b[Y];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function kc(b,O,Y,G,H){O.isScene!==!0&&(O=ze),$.resetTextureUnits();const we=O.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Ee=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:je.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=he.get(G.envMap||Re,Pe),Ke=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color;let vt=vn;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(vt=R.toneMapping);const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,It=dt!==void 0?dt.length:0,Ce=X.get(G),Gt=w.state.lights;if(re===!0&&(oe===!0||b!==K)){const mt=b===K&&G.id===q;Fe.setState(G,b,mt)}let it=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Gt.state.version||Ce.outputColorSpace!==Ee||H.isBatchedMesh&&Ce.batching===!1||!H.isBatchedMesh&&Ce.batching===!0||H.isBatchedMesh&&Ce.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ce.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||H.isInstancedMesh&&Ce.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ce.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ce.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ce.instancingMorph===!1&&H.morphTexture!==null||Ce.envMap!==Ue||G.fog===!0&&Ce.fog!==we||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Fe.numPlanes||Ce.numIntersection!==Fe.numIntersection)||Ce.vertexAlphas!==Ke||Ce.vertexTangents!==$e||Ce.morphTargets!==Le||Ce.morphNormals!==lt||Ce.morphColors!==St||Ce.toneMapping!==vt||Ce.morphTargetsCount!==It||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Ce.__version=G.version);let $t=Ce.currentProgram;it===!0&&($t=ds(G,O,H),F&&G.isNodeMaterial&&F.onUpdateProgram(G,$t,Ce));let hn=!1,Nn=!1,ci=!1;const ht=$t.getUniforms(),Mt=Ce.uniforms;if(x.useProgram($t.program)&&(hn=!0,Nn=!0,ci=!0),G.id!==q&&(q=G.id,Nn=!0),Ce.needsLights){const mt=zc(w.state.lightProbeGridArray,H);Ce.lightProbeGrid!==mt&&(Ce.lightProbeGrid=mt,Nn=!0)}if(hn||K!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",b.projectionMatrix),ht.setValue(U,"viewMatrix",b.matrixWorldInverse);const On=ht.map.cameraPosition;On!==void 0&&On.setValue(U,ge.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Nn=!0,ci=!0)}if(Ce.needsLights&&(Gt.state.sunShadowMap.length>0&&ht.setValue(U,"sunShadowMap",Gt.state.sunShadowMap,$),Gt.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Gt.state.directionalShadowMap,$),Gt.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Gt.state.spotShadowMap,$),Gt.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Gt.state.pointShadowMap,$)),H.isSkinnedMesh){ht.setOptional(U,H,"bindMatrix"),ht.setOptional(U,H,"bindMatrixInverse");const mt=H.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(U,"boneTexture",mt.boneTexture,$))}H.isBatchedMesh&&(ht.setOptional(U,H,"batchingTexture"),ht.setValue(U,"batchingTexture",H._matricesTexture,$),ht.setOptional(U,H,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",H._indirectTexture,$),ht.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",H._colorsTexture,$));const Fn=Y.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&B.update(H,Y,$t),(Nn||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,ht.setValue(U,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Mt.envMapIntensity.value=O.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=k0()),Nn){if(ht.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Gc(Mt,ci),we&&G.fog===!0&&Ne.refreshFogUniforms(Mt,we),Ne.refreshMaterialUniforms(Mt,G,Z,V,w.state.transmissionRenderTarget[b.id]),Ce.needsLights&&Ce.lightProbeGrid){const mt=Ce.lightProbeGrid;Mt.probesSH.value=mt.texture,Mt.probesMin.value.copy(mt.boundingBox.min),Mt.probesMax.value.copy(mt.boundingBox.max),Mt.probesResolution.value.copy(mt.resolution)}qs.upload(U,yo(Ce),Mt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qs.upload(U,yo(Ce),Mt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(U,"center",H.center),ht.setValue(U,"modelViewMatrix",H.modelViewMatrix),ht.setValue(U,"normalMatrix",H.normalMatrix),ht.setValue(U,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const mt=G.uniformsGroups;for(let On=0,ui=mt.length;On<ui;On++){const wo=mt[On];se.update(wo,$t),se.bind(wo,$t)}}return $t}function Gc(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Hc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,O,Y){const G=X.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(b.texture).__webglTexture=O,X.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Y=X.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){Q=b,k=O,W=Y;let G=null,H=!1,we=!1;if(b){const Ee=X.get(b);if(Ee.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Ee.__webglFramebuffer),j.copy(b.viewport),fe.copy(b.scissor),me=b.scissorTest,x.viewport(j),x.scissor(fe),x.setScissorTest(me),q=-1;return}else if(Ee.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(Ee.__hasExternalTextures)$.rebindTextures(b,X.get(b.texture).__webglTexture,X.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ke=b.depthTexture;if(Ee.__boundDepthTexture!==Ke){if(Ke!==null&&X.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const Ue=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?G=Ue[O][Y]:G=Ue[O],H=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?G=X.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[Y]:G=Ue,j.copy(b.viewport),fe.copy(b.scissor),me=b.scissorTest}else j.copy(_e).multiplyScalar(Z).floor(),fe.copy(Ie).multiplyScalar(Z).floor(),me=tt;if(Y!==0&&(G=N),x.bindFramebuffer(U.FRAMEBUFFER,G)&&x.drawBuffers(b,G),x.viewport(j),x.scissor(fe),x.setScissorTest(me),H){const Ee=X.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,Y)}else if(we){const Ee=O;for(let Pe=0;Pe<b.textures.length;Pe++){const Ue=X.get(b.textures[Pe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Y,Ee)}}else if(b!==null&&Y!==0){const Ee=X.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,Y)}q=-1};function Eo(b){const O=X.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=C.textureFormatReadable(b.format),O.__typeReadable=C.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Y,G,H,we,Re,Ee=0){if(!(b&&b.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){x.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ue=b.textures[Ee],Ke=Ue.format,$e=Ue.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);const Le=Eo(Ue);if(Le.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&Y>=0&&Y<=b.height-H&&U.readPixels(O,Y,G,H,Se.convert(Ke),Se.convert($e),we)}finally{const Ue=Q!==null?X.get(Q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,G,H,we,Re,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(O>=0&&O<=b.width-G&&Y>=0&&Y<=b.height-H){x.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ue=b.textures[Ee],Ke=Ue.format,$e=Ue.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee);const Le=Eo(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,we.byteLength,U.STREAM_READ),U.readPixels(O,Y,G,H,Se.convert(Ke),Se.convert($e),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const St=Q!==null?X.get(Q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,St);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Au(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,we),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(lt),U.deleteSync(vt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){const G=Math.pow(2,-Y),H=Math.floor(b.image.width*G),we=Math.floor(b.image.height*G),Re=O!==null?O.x:0,Ee=O!==null?O.y:0;$.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Re,Ee,H,we),x.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,G=null,H=0,we=0){let Re,Ee,Pe,Ue,Ke,$e,Le,lt,St;const vt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(Y!==null)Re=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Ke=Y.min.y,$e=Y.isBox3?Y.min.z:0;else{const Mt=Math.pow(2,-H);Re=Math.floor(vt.width*Mt),Ee=Math.floor(vt.height*Mt),b.isDataArrayTexture?Pe=vt.depth:b.isData3DTexture?Pe=Math.floor(vt.depth*Mt):Pe=1,Ue=0,Ke=0,$e=0}G!==null?(Le=G.x,lt=G.y,St=G.z):(Le=0,lt=0,St=0);const dt=Se.convert(O.format),It=Se.convert(O.type);let Ce;O.isData3DTexture?($.setTexture3D(O,0),Ce=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),Ce=U.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),Ce=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Gt=x.getParameter(U.UNPACK_ROW_LENGTH),it=x.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=x.getParameter(U.UNPACK_SKIP_PIXELS),hn=x.getParameter(U.UNPACK_SKIP_ROWS),Nn=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),x.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const ci=b.isDataArrayTexture||b.isData3DTexture,ht=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Mt=X.get(b),Fn=X.get(O),mt=X.get(Mt.__renderTarget),On=X.get(Fn.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let ui=0;ui<Pe;ui++)ci&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(b).__webglTexture,H,$e+ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(O).__webglTexture,we,St+ui)),U.blitFramebuffer(Ue,Ke,Re,Ee,Le,lt,Re,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||X.has(b)){const Mt=X.get(b),Fn=X.get(O);x.bindFramebuffer(U.READ_FRAMEBUFFER,P),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let mt=0;mt<Pe;mt++)ci?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,H,$e+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,H),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fn.__webglTexture,we,St+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fn.__webglTexture,we),H!==0?U.blitFramebuffer(Ue,Ke,Re,Ee,Le,lt,Re,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(Ce,we,Le,lt,St+mt,Ue,Ke,Re,Ee):U.copyTexSubImage2D(Ce,we,Le,lt,Ue,Ke,Re,Ee);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ce,we,Le,lt,St,Re,Ee,Pe,dt,It,vt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,we,Le,lt,St,Re,Ee,Pe,dt,vt.data):U.texSubImage3D(Ce,we,Le,lt,St,Re,Ee,Pe,dt,It,vt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,we,Le,lt,Re,Ee,dt,It,vt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,we,Le,lt,vt.width,vt.height,dt,vt.data):U.texSubImage2D(U.TEXTURE_2D,we,Le,lt,Re,Ee,dt,It,vt);x.pixelStorei(U.UNPACK_ROW_LENGTH,Gt),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),x.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),x.pixelStorei(U.UNPACK_SKIP_ROWS,hn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Nn),we===0&&O.generateMipmaps&&U.generateMipmap(Ce),x.unbindTexture()},this.initRenderTarget=function(b){X.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){k=0,W=0,Q=null,x.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const pn=1.06,en=1.5,qi=Math.PI,Yr=new L,Ll=new L,Dl=new L,Ot=new L,Bs=new L,Ei=new L,Ul=new L,zs=new ce,Kr=new In,Zr=new In,Il=new In,H0=new Un,$r=new L,ks=new L,wi=new L,Nl=new L(0,1,0);function V0(){const i=[],e=[],t=[];for(const r of[-1,1]){const a=[0,en/2],o=[[0,-en/2],[r*pn/2,-en/2],[r*pn/2,en/2-pn/2],[r*pn/2,en/2-pn*pn/(4*en)],[r*pn/2,en/2]];for(let c=0;c<4;c++){const l=a,h=o[r>0?c:c+1],d=o[r>0?c+1:c],u=(f,g)=>{const S=l[0]+(h[0]-l[0])*f/12+(d[0]-l[0])*g/12,m=l[1]+(h[1]-l[1])*f/12+(d[1]-l[1])*g/12;i.push(S,m,0),e.push(S/pn+.5,m/en+.5),t.push({side:r,corner:c>=2,wing:c===1||c===2})};for(let f=0;f<12;f++)for(let g=0;g<12-f;g++)u(f,g),u(f+1,g),u(f,g+1),f+g<11&&(u(f+1,g),u(f+1,g+1),u(f,g+1))}}const s=new Dt;return s.setAttribute("position",new rt(i,3)),s.setAttribute("uv",new rt(e,2)),s.computeVertexNormals(),{geometry:s,folds:t}}class W0{root=new gt;materials;page=V0();geometry=this.page.geometry;mesh;texture;uniforms={u_origin:{value:null},u_art:{value:null},u_original:{value:1},u_pencil:{value:0},u_paint:{value:0}};constructor(e,t){const n=new on({map:e,color:"#fff9ec",roughness:.98,side:wt,transparent:!0});n.forceSinglePass=!0,n.userData.sourceOpacity=1,this.uniforms.u_art.value=t??e??null,n.onBeforeCompile=s=>{Object.assign(s.uniforms,this.uniforms),s.vertexShader=`attribute vec2 originUv; varying vec2 v_originUv; varying vec2 v_leafUv;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
v_originUv=originUv;v_leafUv=uv;`),s.fragmentShader=`uniform sampler2D u_origin; uniform sampler2D u_art;
        uniform float u_original; uniform float u_pencil; uniform float u_paint;
        varying vec2 v_originUv; varying vec2 v_leafUv;
        vec3 leafLinear(vec3 c){return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c));}
        float leafLum(vec3 c){return dot(c,vec3(.299,.587,.114));}
        `+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        vec2 p=v_leafUv;
        vec3 art=texture2D(u_art,p).rgb;
        float l=leafLum(art),e=0.;
        e+=abs(l-leafLum(texture2D(u_art,p+vec2(.0015,0)).rgb));
        e+=abs(l-leafLum(texture2D(u_art,p+vec2(0,.0012)).rgb));
        float graphite=clamp(e*11.,0.,.8);
        float stroke=1.-smoothstep(u_pencil-.07,u_pencil+.03,1.-p.y+.035*sin(p.x*39.)+.014*sin(p.y*81.));
        float wash=1.-smoothstep(u_paint-.10,u_paint+.04,1.-p.y+.075*sin(p.x*8.+p.y*13.));
        vec3 blank=diffuseColor.rgb;
        vec3 drawing=mix(blank,vec3(.10,.085,.07),graphite*stroke);
        drawing=mix(drawing,art,clamp(wash,0.,1.));
        if(!gl_FrontFacing)drawing=mix(blank,drawing,.16);
        vec3 oldPage=leafLinear(texture2D(u_origin,v_originUv).rgb);
        diffuseColor.rgb=mix(drawing,oldPage,u_original);
      `),s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`
        outgoingLight=mix(outgoingLight,diffuseColor.rgb,u_original);
        outgoingLight=mix(outgoingLight*12.92,1.055*pow(max(outgoingLight,vec3(0)),vec3(1./2.4))-.055,step(vec3(.0031308),outgoingLight));
        #include <opaque_fragment>`)},n.customProgramCacheKey=()=>"atelier-anime-page-v1",this.materials=[n],this.geometry.setAttribute("originUv",new rt(new Float32Array(this.geometry.getAttribute("uv").count*2),2)),this.mesh=new ut(this.geometry,n),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.root.add(this.mesh)}update(e,t,n,s){if(this.root.visible=!!s,!s)return;const r=.32*(1-Be((e-9)/2.8));r>0&&t>0&&(e+=(11.8-e)*Be(t/r));const a=Math.max(0,(t-r)/(1-r)),o=this.geometry.getAttribute("uv"),c=this.geometry.getAttribute("originUv");if(this.texture!==s.texture){this.texture=s.texture,this.uniforms.u_origin.value=s.texture;for(let m=0;m<o.count;m++){const p=o.getX(m),M=1-o.getY(m),E=s.uvCorners;zs.copy(E[0]).lerp(E[1],p).multiplyScalar(1-M),zs.addScaledVector(E[2],(1-p)*M).addScaledVector(E[3],p*M),c.setXY(m,zs.x,zs.y)}c.needsUpdate=!0}const l=Be((e-.65)/1.95),h=Math.sin(Math.min(1,e/2.6)*qi),d=Be((e-9)/.95),u=Be((e-10)/1),f=Be((e-10.95)/.8);this.uniforms.u_original.value=1-Be((e-.73)/.8),this.uniforms.u_pencil.value=-.12+1.3*Be((e-2.8)/2.5),this.uniforms.u_paint.value=-.18+1.4*Be((e-5.1)/2.6),$r.set(0,.84+.04*Math.sin(e*1.1)*(1-f),.05),Kr.setFromEuler(H0.set(-.13-(1-l)*4.8-.5*f,-.1+.07*Math.sin(e*.7)*l-.32*f,-.025+.04*Math.sin(e*.8)*(1-f)));let g=1;if(a>0){const m=a,p=1-m;ks.set(.42,1.9,-.45),wi.copy(n).multiplyScalar(.6),wi.x-=.2,wi.y+=.4;const M=new L(0,.84,.05);$r.copy(M).multiplyScalar(p*p*p).addScaledVector(ks,3*p*p*m).addScaledVector(wi,3*p*m*m).addScaledVector(n,m*m*m),Ul.copy(ks).sub(M).multiplyScalar(3*p*p).addScaledVector(Ot.copy(wi).sub(ks),6*p*m).addScaledVector(Ot.copy(n).sub(wi),3*m*m).normalize(),Zr.setFromUnitVectors(Nl,Ul),Il.setFromAxisAngle(Nl,.42*Math.sin(m*qi)),Zr.multiply(Il),Kr.slerp(Zr,Be(m/.22)),g=1-.98*Be((m-.7)/.3)}const S=this.geometry.getAttribute("position");for(let m=0;m<o.count;m++){const p=o.getX(m),M=1-o.getY(m);Ot.set((p-.5)*pn,(.5-M)*en,0);const{side:E,corner:v,wing:y}=this.page.folds[m];v&&(Ei.set(0,en/2,0),Bs.set(E,-1,0).normalize(),Ot.sub(Ei).applyAxisAngle(Bs,E*(qi-.016)*d).add(Ei)),y&&(Ei.set(0,en/2,0),Bs.set(E*pn/2,-en,0).normalize(),Ot.sub(Ei).applyAxisAngle(Bs,E*(qi-.024)*u).add(Ei));const w=Math.sign(Ot.x),A=Math.abs(Ot.x);Ot.z-=.075*f*(1-Math.min(1,A/.1)),Ot.z+=.11*f*A,w&&(Ot.x*=1-.06*f),Ot.multiplyScalar(g).applyQuaternion(Kr).add($r),l<1&&(Ll.copy(s.corners[0]).lerp(s.corners[1],p),Dl.copy(s.corners[2]).lerp(s.corners[3],p),Yr.copy(Ll).lerp(Dl,M),Yr.y+=.002+h*.24*p*p,Ot.lerp(Yr,1-l),Ot.y+=.2*Math.sin(l*qi)),S.setXYZ(m,Ot.x,Ot.y,Ot.z)}S.needsUpdate=!0,this.geometry.computeVertexNormals()}dispose(){this.geometry.dispose(),this.materials.forEach(e=>e.dispose())}}const Je=(i,...e)=>({advance:i,strokes:e}),an={Д:Je(1.08,"M0 0 C.28 .09 .4 .64 .67 .97 C.46 1.05 .15 .78 .23 .35 C.32 -.04 .98 -.05 .96 .42 C.95 .75 .73 1.04 .67 .97 C.68 .58 .83 .04 1.08 .07","M.12 .10 C-.01 -.31 .04 -.38 .16 -.11 M.9 .09 C1.04 -.22 1.04 -.31 1.15 -.17"),В:Je(.92,"M0 0 C.19 .21 .34 .75 .45 .98 C.12 .96 .08 .63 .22 .57 C.42 .47 .88 .63 .83 .84 C.78 1.08 .48 1.04 .45 .98 C.4 .79 .27 .29 .27 .14 C.42 -.15 .94 -.04 .91 .31 C.89 .58 .52 .54 .37 .48 C.47 .17 .63 .02 .92 .08"),а:Je(.72,"M0 0 C.11 .13 .29 .66 .49 .6 C.19 .76 .03 .32 .17 .12 C.32 -.10 .48 .28 .55 .57 C.47 .26 .42 -.07 .72 .08"),в:Je(.65,"M0 0 C.22 .18 .57 .92 .39 1.01 C.20 1.10 .03 .32 .22 .29 C.43 .36 .69 .60 .49 .67 C.24 .71 .04 .09 .28 .02 C.48 -.04 .59 .09 .65 .08"),г:Je(.62,"M0 0 C.15 .23 .28 .63 .48 .59 C.69 .49 .21 .25 .27 .09 C.32 -.06 .50 .01 .62 .08"),д:Je(.72,"M0 0 C.16 .18 .32 .65 .49 .59 C.23 .73 .05 .35 .15 .13 C.28 -.05 .49 .16 .55 .55 C.48 .16 .48 -.36 .25 -.43 C-.02 -.53 .06 -.18 .38 -.06 C.56 .00 .61 .05 .72 .08"),е:Je(.57,"M0 0 C.16 .08 .58 .40 .43 .56 C.29 .71 .04 .38 .15 .14 C.24 -.05 .44 -.01 .57 .08"),ё:Je(.57,"M0 0 C.16 .08 .58 .40 .43 .56 C.29 .71 .04 .38 .15 .14 C.24 -.05 .44 -.01 .57 .08","M.26 .82 L.27 .84","M.48 .82 L.49 .84"),и:Je(.75,"M0 0 C.13 .10 .27 .48 .31 .60 C.25 .38 .09 .02 .26 .02 C.46 -.01 .55 .41 .62 .6 C.55 .34 .46 -.03 .75 .08"),й:Je(.75,"M0 0 C.13 .10 .27 .48 .31 .60 C.25 .38 .09 .02 .26 .02 C.46 -.01 .55 .41 .62 .6 C.55 .34 .46 -.03 .75 .08","M.33 .82 C.39 .67 .53 .67 .62 .82"),к:Je(.74,"M0 0 C.15 .16 .22 .49 .28 .61 C.25 .48 .12 .05 .20 .04 C.29 .23 .37 .38 .56 .59 C.40 .40 .23 .37 .32 .29 C.52 .30 .40 -.09 .74 .08"),м:Je(1,"M0 0 C.21 .03 .26 .44 .32 .59 C.21 .08 .27 -.05 .40 .06 C.57 .25 .60 .50 .65 .60 C.60 .30 .58 .02 .68 .02 C.85 -.01 .87 .45 .92 .58 C.82 .27 .81 -.03 1 .08"),н:Je(.74,"M0 0 C.12 .13 .25 .48 .29 .60 C.24 .38 .16 .10 .19 .04 C.23 .27 .39 .27 .54 .31 C.59 .40 .62 .55 .64 .60 C.58 .35 .48 -.03 .74 .08"),о:Je(.67,"M0 0 C.18 .16 .34 .63 .49 .59 C.16 .78 .00 .15 .24 .03 C.47 -.08 .64 .38 .49 .59 C.43 .67 .48 .34 .67 .36 C.71 .27 .61 .13 .67 .08"),п:Je(.76,"M0 0 C.16 .20 .24 .49 .28 .60 C.22 .39 .11 .06 .18 .02 C.32 .41 .50 .75 .61 .58 C.68 .47 .37 -.10 .76 .08"),р:Je(.7,"M0 0 C.16 .21 .23 .54 .29 .59 C.21 .30 .07 -.38 .12 -.45 C.16 -.40 .28 .37 .47 .56 C.66 .76 .67 .13 .46 .07 C.36 .03 .51 .02 .70 .08"),с:Je(.57,"M0 0 C.18 .18 .33 .68 .49 .54 C.42 .72 .15 .51 .14 .22 C.11 -.03 .35 -.04 .57 .08"),т:Je(1.05,"M0 0 C.13 .18 .24 .50 .28 .60 C.20 .40 .13 .13 .17 .02 C.32 .40 .49 .75 .57 .58 C.65 .41 .39 .12 .46 .02 C.63 .37 .80 .73 .89 .55 C.96 .35 .69 -.10 1.05 .08"),у:Je(.74,"M0 0 C.17 .18 .25 .49 .30 .60 C.23 .36 .10 .07 .26 .02 C.45 -.04 .57 .42 .62 .60 C.54 .34 .53 -.38 .26 -.45 C.02 -.52 .01 -.22 .38 -.06 C.54 .00 .65 .05 .74 .08"),ч:Je(.73,"M0 0 C.12 .15 .25 .47 .29 .60 C.20 .31 .19 .22 .32 .23 C.48 .23 .58 .47 .62 .60 C.55 .38 .44 -.04 .73 .08"),ш:Je(1.02,"M0 0 C.14 .16 .25 .47 .29 .60 C.22 .38 .10 .04 .26 .02 C.40 .00 .52 .46 .55 .59 C.48 .35 .38 .00 .53 .02 C.70 .02 .82 .47 .85 .6 C.77 .34 .72 -.04 1.02 .08"),щ:Je(1.06,"M0 0 C.14 .16 .25 .47 .29 .60 C.22 .38 .10 .04 .26 .02 C.40 .00 .52 .46 .55 .59 C.48 .35 .38 .00 .53 .02 C.70 .02 .82 .47 .85 .6 C.77 .34 .72 -.04 .94 .05 C1.06 .05 .92 -.35 .83 -.31 C.75 -.24 .94 -.02 1.06 .08"),ы:Je(1.03,"M0 0 C.13 .17 .26 .48 .29 .60 C.23 .35 .11 .00 .26 .02 C.49 .02 .56 .36 .39 .35 C.25 .32 .42 .01 .57 .02 C.76 .03 .86 .49 .89 .60 C.81 .34 .75 -.04 1.03 .08"),"!":Je(.34,"M.15 .25 C.23 .60 .26 .80 .28 .93","M.13 .03 L.15 .05"),",":Je(.27,"M.10 .05 C.15 -.01 .11 -.11 .04 -.16"),".":Je(.25,"M.11 .02 L.14 .04")},X0={D:Je(.98,"M.09 .01 C.28 .22 .40 .78 .42 .98 C.16 1.05 .09 .80 .23 .78 C.61 1.21 1.11 .80 .92 .32 C.80 -.02 .40 -.11 .23 .07 C.23 .19 .37 .07 .98 .08"),A:Je(.88,"M0 0 C.20 .21 .37 .75 .61 .98 C.52 .64 .39 .03 .59 .02 C.69 .01 .77 .06 .88 .08","M.17 .35 C.35 .34 .54 .36 .71 .39"),S:Je(.9,"M.85 .83 C.83 1.12 .24 1.11 .24 .77 C.21 .52 .79 .55 .74 .21 C.71 -.12 .12 -.05 .14 .20 C.15 .30 .25 .31 .26 .20 C.23 .06 .49 .01 .90 .08"),Y:Je(.96,"M.02 .74 C.16 1.12 .38 1.12 .34 .72 C.31 .29 .50 .36 .73 .96 C.67 .59 .62 -.20 .32 -.43 C.11 -.58 .03 -.27 .32 -.13 C.58 .03 .80 .04 .96 .08"),a:an.а,e:an.е,o:an.о,c:an.с,n:an.п,u:an.и,y:an.у,d:Je(.77,"M0 0 C.13 .17 .31 .66 .50 .59 C.23 .74 .04 .33 .17 .12 C.31 -.08 .51 .30 .63 .88 C.69 1.11 .43 1.05 .47 .73 C.48 .55 .32 -.10 .77 .08"),f:Je(.64,"M0 0 C.21 .28 .58 1.07 .36 1.08 C.12 1.09 .05 .32 .22 -.32 C.34 -.58 .51 -.30 .36 -.14 C.18 .02 .42 .03 .64 .08","M.10 .43 C.28 .42 .45 .47 .62 .50"),i:Je(.4,"M0 0 C.16 .14 .26 .43 .28 .58 C.20 .37 .08 .02 .25 .02 C.32 .02 .35 .06 .40 .08","M.31 .84 L.32 .87"),l:Je(.49,"M0 0 C.18 .23 .57 1.11 .34 1.05 C.15 .99 .02 .28 .17 .08 C.25 -.05 .39 .02 .49 .08"),r:Je(.64,"M0 0 C.18 .18 .27 .43 .31 .59 C.21 .39 .10 .06 .18 .02 C.24 .31 .46 .73 .58 .55 C.59 .44 .46 .38 .46 .47 C.39 .31 .35 -.03 .64 .08"),s:Je(.6,"M0 0 C.19 .17 .37 .47 .40 .64 C.37 .45 .22 .37 .25 .27 C.29 .17 .49 .10 .40 .01 C.28 -.09 .09 -.03 .12 .13 C.14 .20 .20 .20 .22 .12 C.25 .01 .43 .04 .60 .08"),t:Je(.58,"M0 0 C.19 .20 .34 .62 .43 .94 C.30 .60 .15 .09 .31 .02 C.39 -.03 .51 .03 .58 .08","M.12 .48 C.30 .49 .46 .53 .60 .55"),"!":an["!"],",":an[","],".":an["."]},Va=(i,e)=>.021*Math.pow(Math.abs(i)/.39,4)+.027*Math.pow(e/1.02,5);function Fl(i){const e=i.match(/[MLCQ]|-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/g),t=[];let n=0,s=0,r=0,a=0;const o=()=>Number(e[n++]),c=(l,h,d=!1)=>{t.length&&!d&&(a+=Math.hypot(l-s,h-r)),s=l,r=h,t.push({x:s,y:r,length:a})};for(;n<e.length;){const l=e[n++],h=s,d=r;if(l==="M"){c(o(),o(),!0);continue}if(l==="L"){c(o(),o());continue}if(l==="Q"){const u=o(),f=o(),g=o(),S=o();for(let m=1;m<=24;m++){const p=m/24,M=1-p;c(M*M*h+2*M*p*u+p*p*g,M*M*d+2*M*p*f+p*p*S)}continue}if(l==="C"){const u=o(),f=o(),g=o(),S=o(),m=o(),p=o();for(let M=1;M<=36;M++){const E=M/36,v=1-E;c(v*v*v*h+3*v*v*E*u+3*v*E*E*g+E*E*E*m,v*v*v*d+3*v*v*E*f+3*v*E*E*S+E*E*E*p)}}}return{length:a,at:l=>{const h=Math.max(0,Math.min(a,l));let d=0,u=t.length-1;for(;d<u;){const m=Math.ceil((d+u)/2);t[m].length<=h?d=m:u=m-1}const f=t[d],g=t[Math.min(d+1,t.length-1)],S=(h-f.length)/Math.max(1e-6,g.length-f.length);return{x:f.x+(g.x-f.x)*S,y:f.y+(g.y-f.y)*S}}}}function q0(){const i=Vc==="en"?X0:an,e=[Xn("Дорогой друг,"),Xn("Всё готово."),Xn("До встречи!"),Xn("Ваш помощник")],t=[],n=[],s=[];let r=0,a;const o=(h,d,u,f)=>{a&&(r+=Math.hypot(h-a.x,d-a.y)),a={x:h,y:d,lift:u,length:r,count:f},s.push(a)};e.forEach((h,d)=>{const u=[...h].reduce((p,M)=>p+(i[M]?.advance??.4),0),f=Math.min(.071,.65/u);let g=-u*f/2,S=!1;const m=.82-d*.17;for(const p of h){const M=i[p];if(!M){g+=.4*f,S=!1;continue}M.strokes.forEach((E,v)=>{let y=Fl(E);const w=y.at(0),A=v===0&&S&&!!a&&Math.abs(a.y-m)<.04;if(A&&a){const P=(a.x-g)/f,I=(a.y-m)/f;y=Fl(`M${P} ${I} Q${(P+w.x)/2} ${Math.min(I,w.y)} ${w.x} ${w.y} ${E}`)}const _=y.length,T=Math.max(3,Math.ceil(_/.025)),R=y.at(0),D=g+R.x*f,F=m+R.y*f;if(a&&!A){const P=a;for(let I=1;I<=8;I++){const k=I/8;o(P.x+(D-P.x)*k,P.y+(F-P.y)*k,Math.sin(k*Math.PI)*.028,n.length)}}const N=t.length/3;for(let P=0;P<=T;P++){const I=_*P/T,k=y.at(I),W=y.at(Math.max(0,I-.006)),Q=y.at(Math.min(_,I+.006)),q=g+k.x*f,K=m+k.y*f,j=Q.x-W.x,fe=Q.y-W.y,me=Math.hypot(j,fe)||1,le=.0016+7e-4*Math.max(0,-fe/me)+16e-5*Math.sin(P*.7);for(const ie of[-1,1]){const de=q-ie*fe/me*le,V=K+ie*j/me*le;t.push(de,V,Va(de,V)+.0025)}if(P){const ie=N+P*2;n.push(ie-2,ie-1,ie,ie-1,ie+1,ie)}o(q,K,0,n.length)}}),g+=M.advance*f,S=!/[.,!]/.test(p)}});const c=new Dt;c.setAttribute("position",new rt(t,3)),c.setIndex(n),c.computeVertexNormals();const l=new L;return{geometry:c,lines:e,at:h=>{const d=Math.max(0,Math.min(1,h))*r;let u=0,f=s.length-1;for(;u<f;){const v=Math.ceil((u+f)/2);s[v].length<=d?u=v:f=v-1}const g=s[u],S=s[Math.min(u+1,s.length-1)],m=(d-g.length)/Math.max(1e-6,S.length-g.length),p=g.x+(S.x-g.x)*m,M=g.y+(S.y-g.y)*m,E=g.lift+(S.lift-g.lift)*m;return c.setDrawRange(0,g.count),l.set(p,M,Va(p,M)+.004+E)}}}const nt=Math.PI,Ol=i=>Math.max(0,Math.min(1,i)),Jr="outgoingLight=mix(outgoingLight*12.92,1.055*pow(max(outgoingLight,vec3(0)),vec3(1.0/2.4))-.055,step(vec3(.0031308),outgoingLight));";class Y0{root=new gt;acts=[];geometries=[];materials=[];textures=[];surfaces=[];anime;key=new wc(16773332,2.2);ambient=new Tc(15331829,2.1);shadow;active=-1;constructor(e,t=[]){this.surfaces=t.map(s=>{const r=s.clone();return r.flipY=!0,r.colorSpace=Rt,r.needsUpdate=!0,this.textures.push(r),r}),e.add(this.root,this.key,this.key.target,this.ambient),this.root.visible=!1,this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024),this.key.shadow.normalBias=.008,this.key.shadow.bias=-25e-5,this.key.shadow.radius=3;const n=new Lh({opacity:.28,transparent:!0,depthWrite:!1,side:wt});this.materials.push(n),this.shadow=new ut(this.geo(new Pt(2.7,2)),n),this.shadow.rotation.x=-nt/2,this.shadow.position.y=.005,this.shadow.receiveShadow=!0,this.shadow.renderOrder=1.6,this.root.add(this.shadow)}geo(e){return this.geometries.push(e),e}material(e,t=!1){const n=new on({color:e,roughness:t?.63:.94,metalness:t?.26:0,side:wt,transparent:!0,depthWrite:!0});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",Jr+`
#include <opaque_fragment>`)},t&&this.surfaces[3]&&(n.map=this.surfaces[3],n.bumpMap=this.surfaces[3],n.bumpScale=7e-4),n.customProgramCacheKey=()=>"atelier-painted-light",n.userData.sourceOpacity=n.opacity,this.materials.push(n),n}inkMaterial(e="#e8c68b",t=.8){const n=new no({color:e,transparent:!0,opacity:t,depthWrite:!1,side:wt,toneMapped:!1});return n.userData.sourceOpacity=n.opacity,n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",Jr+`
#include <opaque_fragment>`)},n.customProgramCacheKey=()=>"atelier-foil-light",this.materials.push(n),n}mesh(e,t,n=this.root){const s=new ut(this.geo(e),t);return s.castShadow=!0,s.receiveShadow=!0,s.renderOrder=2,n.add(s),s}box(e,t,n,s,r){return this.mesh(new li(e,t,n),s,r)}paperTexture(){if(this.surfaces[0])return this.surfaces[0];const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#efe2c4",t.fillRect(0,0,256,256);let n=4217;for(let r=0;r<18e3;r++){n=n*16807%2147483647;const a=n%256;n=n*16807%2147483647;const o=n%256;t.fillStyle=r%3?"#9c83520a":"#fff9e116",t.fillRect(a,o,1,1)}const s=new os(e);return s.colorSpace=Rt,this.textures.push(s),s}paper(e="#ffffff"){const t=this.material(e);return t.map=this.paperTexture(),t}text(e,t,n,s=70,r="#53645c"){const a=document.createElement("canvas");a.width=768,a.height=Math.round(768*n/t);const o=a.getContext("2d");o.textAlign="center",o.textBaseline="middle",o.fillStyle=r,o.font=`${s}px Georgia`,o.fillText(e,384,a.height/2,724);const c=new os(a);c.colorSpace=Rt,this.textures.push(c);const l={value:0},h=this.material("#ffffff");h.map=c,h.alphaTest=.02,h.depthWrite=!1,h.onBeforeCompile=u=>{u.uniforms.u_inkReveal=l,u.fragmentShader=`uniform float u_inkReveal;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a*=1.0-smoothstep(u_inkReveal-.025,u_inkReveal,vMapUv.x);`).replace("#include <opaque_fragment>",Jr+`
#include <opaque_fragment>`)},h.customProgramCacheKey=()=>"atelier-written-ink";const d=new ut(this.geo(new Pt(t,n,24,8)),h);return d.renderOrder=2.2,{mesh:d,reveal:l}}line(e,t,n,s){const r=new nr(new Oa(e),56,t,5,!1),a=this.mesh(r,n,s);return a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=2.3,a}foldSheet(e,t,n,s){const r=new gt;s.add(r);const a=this.mesh(new Pt(e,t,18,12).translate(0,t/2,0),n,r);return{pivot:r,page:a}}ring(e,t,n,s){const r=this.mesh(new tr(e,t,6,72),n,s);return r.castShadow=!1,r}bird(e,t){const n=new gt;e.add(n);const s=(o,c)=>{const l=new Dt;return l.setAttribute("position",new rt(o,3)),l.computeVertexNormals(),this.mesh(l,t,c)};s([0,0,.11,-.038,.012,-.065,.038,.012,-.065],n),s([0,0,.11,0,.055,-.025,.038,.012,-.065],n);const r=new gt,a=new gt;return n.add(r,a),s([-.015,.014,.015,-.24,.025,-.055,-.055,-.004,-.11],r),s([.015,.014,.015,.055,-.004,-.11,.24,.025,-.055],a),{root:n,left:r,right:a}}act(e,t,n){return{root:e,materials:this.materials.slice(t),update:n}}animePage(){const e=new W0(this.surfaces[0],this.surfaces[4]);return this.anime=e,{root:e.root,materials:e.materials,update:(t,n,s,r)=>e.update(t,n,s,r)}}artistMagic(){const e=this.materials.length,t=new gt,n=this.inkMaterial("#d8bb81",.7),s=this.inkMaterial("#9dc7bf",.45),r=this.ring(.43,.004,n,t);r.position.set(.04,.48,-.07),r.scale.set(.85,1.14,1);const a=this.ring(.415,.0015,s,t);a.position.copy(r.position),a.scale.copy(r.scale);const o=Array.from({length:5},(l,h)=>{const d=Array.from({length:32},(g,S)=>{const m=S/31;return new L(-.025+m*.65,.49+m*.35+Math.sin(m*nt*2+h*.45)*.035,-.01+Math.sin(m*nt)*.15+h*.008)}),u=this.inkMaterial(h%2?"#dbb875":"#f2dfad",.4);return{line:this.line(d,.0017,u,t),material:u}}),c=Array.from({length:14},()=>this.mesh(new Ci(.005,5,4),n,t));return this.act(t,e,(l,h)=>{const d=Math.max(Be(l/.7)*(1-Be((l-1.7)/.9)),Be(h/.13)*(1-Be((h-.78)/.22)));r.position.x=.04+h*.14,a.position.copy(r.position),r.visible=a.visible=d>.001,r.scale.set(.85*d,1.14*d,1),a.scale.copy(r.scale),n.opacity=.58,s.opacity=.35,o.forEach(({line:u,material:f},g)=>{const S=Be((l-1.75)/.5)*(1-Be((l-6.9)/1));f.opacity=S*(.12+.2*(.5+.5*Math.sin(l*4.6+g))),u.rotation.z=Math.sin(l*.8+g)*.024,u.position.y=Math.sin(l*1.5+g)*.012,u.visible=S>.001}),c.forEach((u,f)=>{const g=((l-1.8)*.2+f/14)%1,S=Be((l-1.8)/.6)*(1-Be((l-7.1)/.8));u.visible=g>=0&&S>.01,u.position.set(-.025+g*.65,.5+g*.38+Math.sin(g*5+f)*.025,-.01+Math.sin(g*nt)*.15),u.scale.setScalar(Math.sin(Math.max(0,g)*nt)*S)})})}paperCity(){const e=this.materials.length,t=new gt,n=this.paper(),s=this.paper("#d4dac2"),r=this.material("#aa874c",!0),a=this.paper("#ffffff");this.surfaces[2]&&(a.map=this.surfaces[2]);const o=new gt;t.add(o);const c=this.box(.9,.01,.57,n,o);c.position.y=.01;const l=[-1,1].map(v=>{const y=this.foldSheet(.46,.58,n,o);return y.pivot.position.set(v*.23,.034,0),y.pivot.rotation.z=v*nt/2,{...y,side:v}}),h=[],d=(v,y,w,A,_)=>{const T=new gt;T.position.set(v,.043,y),t.add(T),h.push({pivot:T,delay:_});const R=this.paper();if(this.surfaces[1]){const N=this.surfaces[1].clone();N.wrapS=N.wrapT=Ys,N.repeat.set(.27,Math.max(.45,w/(A*3.7))),N.offset.x=.015,N.needsUpdate=!0,this.textures.push(N),R.map=N}const D=this.box(A,w,A*.8,R,T);D.position.y=w/2;const F=this.mesh(new ji(A*.81,A*.54,4),a,T);F.position.y=w+A*.24,F.rotation.y=nt/4;for(const N of[.032,w-.03]){const P=this.box(A*1.07,.015,A*.88,r,T);P.position.y=N}return T};d(-.33,-.13,.64,.16,1.3),d(.33,-.18,.78,.15,1.65),d(-.12,-.27,.88,.14,2.05),d(.12,-.23,.59,.18,2.3),d(-.37,.12,.31,.17,2.6),d(.36,.15,.39,.15,2.85);const u=new gt;u.position.set(0,.04,.15),t.add(u),h.push({pivot:u,delay:1.8});const f=new Ba;f.moveTo(-.24,0),f.lineTo(-.24,.34),f.absarc(0,.34,.24,nt,0,!0),f.lineTo(.24,0),f.lineTo(.17,0),f.lineTo(.17,.34),f.absarc(0,.34,.17,0,nt,!1),f.lineTo(-.17,0),f.closePath(),this.mesh(new er(f,{depth:.045,bevelEnabled:!0,bevelThickness:.002,bevelSize:.003,bevelSegments:2,curveSegments:24}),n,u),this.mesh(new tr(.202,.006,6,72,nt),r,u).position.set(0,.337,.051),this.box(.43,.028,.2,s,u).position.set(0,.01,.08);const m=new gt;m.position.set(0,.065,.28),t.add(m);for(let v=0;v<8;v++)this.box(.29,.012,.055,n,m).position.set(0,Math.sin(v/7*nt)*.075,v*.044);for(const v of[-1,1])this.line(Array.from({length:14},(y,w)=>new L(v*.155,.08+Math.sin(w/13*nt)*.075,w/13*.34)),.004,r,m);const p=this.mesh(new Ci(.045,20,12),r,t);p.position.set(.25,.94,-.18);const M=this.ring(.071,.002,r,t);M.position.copy(p.position);const E=[this.bird(t,n),this.bird(t,n)];return E.forEach(v=>v.root.scale.setScalar(.22)),this.act(t,e,(v,y)=>{const w=Be(y/.67),A=Be((y-.66)/.34);t.position.set(-5*A,Math.sin(A*nt)*.045,0),t.rotation.y=A*.3;const _=Be((v-.15)/1);o.scale.set(1,.2+.8*_,.2+.8*_),o.rotation.y=-.08*(1-_),o.scale.x=1-.72*Be((y-.44)/.25),l.forEach(({pivot:R,side:D})=>{R.rotation.x=-nt/2,R.rotation.z=D*((1-_)*.44+w*.48)*nt}),h.forEach(({pivot:R,delay:D})=>{const F=Be((v-D)/1.2)*(1-Be((y-(D-1.3)*.045)/.53));R.visible=v>=D,R.rotation.x=(1-F)*nt/2,R.rotation.z=Math.sin(F*nt)*.08}),m.scale.z=.01+.99*Be((v-3.6)/1.25)*(1-w),m.visible=v>3.6;const T=Be((v-4)/1.5)*(1-Be(y/.35));p.scale.setScalar(T),M.scale.setScalar(T),p.position.x=.22+Math.sin(v*.3)*.035,M.position.copy(p.position),E.forEach((R,D)=>{const F=Be((v-7.7)/1),N=Be((v-4.7-D*.4)/.5)*(1-F);R.root.visible=N>.001,R.root.scale.setScalar(.22*N);const P=(v-4.7)*1.4+D*nt;R.root.position.set(Math.cos(P)*.36,.78+Math.sin(P*.6)*.08+F*.18,Math.sin(P)*.24-F*.35),R.root.rotation.y=-P,R.left.rotation.z=Math.sin(v*9+D)*.4,R.right.rotation.z=-R.left.rotation.z})})}writingAtelier(){const e=this.materials.length,t=new gt,n=this.paper(),s=this.paper("#d1b889"),r=this.material("#b18e52",!0),a=this.material("#315e61"),o=new gt;t.add(o),this.box(.8,.019,.46,s,o).position.set(0,.014,.1);const l=this.foldSheet(.78,.34,n,o);l.pivot.position.set(0,.026,-.13);const h=new gt;t.add(h);const d=new Pt(.78,1.02,22,32).translate(0,.51,0),u=d.getAttribute("position");for(let P=0;P<u.count;P++)u.setZ(P,Va(u.getX(P),u.getY(P)));d.computeVertexNormals();const f=this.mesh(d,this.paper(),h),g=q0(),S=this.inkMaterial("#304d4a",1);S.depthWrite=!0;const m=this.mesh(g.geometry,S,h);m.castShadow=!1,m.receiveShadow=!1;const p={value:0},M={value:0};for(const P of[f.material,S]){const I=P.onBeforeCompile;P.onBeforeCompile=(k,W)=>{I.call(P,k,W),k.uniforms.u_flutter=p,k.uniforms.u_windTime=M,k.vertexShader=`uniform float u_flutter;uniform float u_windTime;
`+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=u_flutter*(.033*sin(position.y*12.0-u_windTime*8.0)+.014*sin(position.x*18.0+u_windTime*5.0))*smoothstep(0.0,.5,position.y);`)},P.customProgramCacheKey=()=>"handwritten-wind-"+P.type}const E=this.mesh(new An(.061,.052,.095,20),a,t),v=this.ring(.048,.006,r,t);v.rotation.x=nt/2;const y=new gt;t.add(y);const w=this.mesh(new An(.0026,.0016,.43,7),r,y);w.position.y=.215;const A=new Ba;A.moveTo(0,.12),A.bezierCurveTo(-.1,.28,-.08,.44,.024,.58),A.bezierCurveTo(.064,.43,.1,.25,0,.12);const _=this.mesh(new er(A,{depth:.0015,bevelEnabled:!1,curveSegments:16}),n,y);_.rotation.y=.26;for(let P=0;P<8;P++){const I=.18+P*.038;this.line([new L(0,I,.003),new L(-.053*Math.sin((I-.12)/.46*nt),I+.047,.009)],7e-4,r,y)}const T=this.mesh(new ji(.007,.029,5),r,y);T.position.y=.0145,T.rotation.z=nt;const R=new L,D=new L(.02,.037,.11),F=new L,N=new L;return this.act(t,e,(P,I,k)=>{const W=Be((P-.7)/1.05),Q=Be((I-.06)/.94),q=Be((I-.5)/.5);o.position.x=-5*q,l.pivot.rotation.x=-nt/2+Be((P-.25)/.85)*nt*(1-Be(I/.38));const K=Be((P-1.9)/5.5),j=g.at(K);if(h.position.copy(D),h.rotation.set(-(1-W)*nt/2,0,0),h.scale.set(1,.08+.92*W,1),I>0){F.set(-.4,1.6,-.4),N.copy(k).multiplyScalar(.56),N.x-=.9,N.y+=.6;const fe=1-Q;R.copy(D).multiplyScalar(fe**3).addScaledVector(F,3*fe*fe*Q).addScaledVector(N,3*fe*Q*Q).addScaledVector(k,Q**3),h.position.copy(R),h.rotation.set(-.25*Math.sin(Q*nt),Math.sin(Q*nt*1.7)*.65,-.22*Math.sin(Q*nt*2)),h.scale.multiplyScalar(1-.997*Q**3)}if(p.value=Be(I/.18)*(1-Be((I-.88)/.12)),M.value=P+I*3,E.position.set(-.46-5*q,.061,.23),v.position.set(-.46-5*q,.11,.23),P<1.9){const fe=Be((P-.25)/1.65),me=g.at(0);y.position.set(-.46+(me.x+.48)*fe,.11+(.037+me.y-.11)*fe+Math.sin(fe*nt)*.18,.23+(.11+me.z-.23)*fe),y.rotation.set(.12,0,.25-.6*fe)}else if(P<7.55)y.position.copy(j).add(D),y.rotation.set(.12,0,-.35+Math.sin(P*3)*.025);else{const fe=Be((P-7.55)/1.2),me=g.at(1);y.position.copy(me).add(D).lerp(new L(-.46,.11,.23),fe),y.position.y+=Math.sin(fe*nt)*.35,y.rotation.set(.12,0,-.35+.6*fe)}y.position.x-=5*q})}workingOrrery(){const e=this.materials.length,t=new gt,n=this.paper(),s=this.material("#b28d51",!0),r=this.material("#46756d"),a=this.inkMaterial("#f1d9a0",.75),o=this.mesh(new An(.28,.32,.055,48),r,t);o.position.y=.028;const c=this.mesh(new An(.285,.3,.035,40),r,t);c.visible=!1;const l=new gt;l.position.y=.09,t.add(l);const h=this.ring(.255,.025,s,l);h.rotation.x=nt/2;for(let m=0;m<18;m++){const p=this.box(.05,.018,.045,s,l),M=m/18*nt*2;p.position.set(Math.cos(M)*.268,0,Math.sin(M)*.268),p.rotation.y=-M}const d=this.mesh(new oo(.116,0),this.material("#a0c6b4",!0),t);d.position.y=.3;const u=[0,1].map(m=>{const p=this.ring(.17,.003,s,t);return p.position.y=.3,p.rotation.set(.4+m*1.2,.3+m*.8,0),p}),g=[new L(-.4,.42,.05),new L(.38,.66,-.07),new L(-.1,.91,-.06)].map((m,p)=>{const M=new gt;if(t.add(M),p===0){const _=this.box(.27,.16,.012,n,M);_.rotation.z=-.12,this.line([new L(-.13,.075,.014),new L(0,-.005,.018),new L(.13,.075,.014)],.0018,s,M)}else if(p===1){for(const _ of[-1,1]){const T=this.mesh(new An(.025,.025,.19,14),n,M);T.rotation.z=nt/2,T.position.y=_*.07}this.box(.19,.14,.005,n,M)}else for(let _=0;_<3;_++)this.mesh(new Ci(.022,12,8),s,M).position.set((_-1)*.066,.035+(_===1?.028:0),.016),this.mesh(new ji(.03,.075,3),n,M).position.set((_-1)*.066,-.027+(_===1?.028:0),0);const E=this.text([Xn("Письма"),Xn("Материалы"),Xn("Команда")][p],.42,.09,136,"#fff0d0");E.mesh.position.set(0,-.14,.035),M.add(E.mesh);const v=new Oa([new L(0,.32,.02),new L(m.x*.8,.23+m.y*.5,.18),m]),y=this.mesh(new nr(v,64,.0023,5,!1),a,t);y.castShadow=!1,y.renderOrder=2.3;const w=this.mesh(new Ci(.01,8,6),a,t),A=this.ring(.15,.002,a,M);return{group:M,target:m,label:E,track:v,thread:y,spark:w,halo:A}}),S=this.text(Xn("Для главного"),.66,.12,88,"#ead8b5");return S.mesh.position.set(.02,.12,.4),t.add(S.mesh),this.act(t,e,(m,p)=>{const M=Be(p/.63),E=Be((p-.69)/.31);t.position.set(4.5*E,Math.sin(E*nt)*.13,0),t.rotation.z=-E*nt*2,c.visible=p>.05,c.position.set(0,.7*(1-M)+.08,0),c.scale.setScalar(Be((p-.05)/.2));const v=Be((m-.3)/1.5),y=Ol((m-8)/2),w=m<8?m:8+2*(y-y**3+.5*y**4);d.position.y=.08+.22*v,d.scale.setScalar(.1+.9*v),d.rotation.y=w*.5,l.rotation.y=1.5*Be(m/2.5)+2.5*Be((m-3.2)/4.5),u.forEach((A,_)=>{A.rotation.z=w*(.25+_*.08),A.scale.setScalar(v)}),g.forEach((A,_)=>{const T=Be((m-.65-_*.5)/1.65),R=Be((m-2.4-_*1.5)/1.1);A.group.position.copy(A.target),A.group.position.x+=(1-T)*(.13*Math.sin(m*1.8+_)),A.group.position.y+=(1-T)*.09*Math.cos(m*1.4+_),A.group.rotation.set((1-T)*.35,(1-T)*.7,(1-T)*Math.sin(m+_)*.35),A.group.scale.setScalar(.2+.8*T),A.label.reveal.value=Be((m-1.5-_*.5)/1),A.thread.geometry.setDrawRange(0,Math.max(0,Math.floor(A.thread.geometry.index.count*R/3)*3));const D=Ol((m-2.4-_*1.5)/1.1);A.spark.visible=D>0&&D<1,A.spark.position.copy(A.track.getPoint(1-D)),A.halo.scale.setScalar(.6+R*.4),A.halo.visible=R>.9}),g.forEach(A=>{A.group.position.lerp(new L(0,.1,0),M),A.group.scale.multiplyScalar(1-M),A.thread.scale.setScalar(1-M),A.halo.visible&&=M<.05}),d.position.y=.08+(d.position.y-.08)*(1-M),d.scale.multiplyScalar(1-M),u.forEach(A=>A.scale.multiplyScalar(1-M)),l.scale.setScalar(1-M*.18),S.reveal.value=Be((m-7)/1.4)*(1-Be(p/.26))})}update(e,t,n,s,r=!1,a){this.root.visible=!!e&&e.departure<.99999,this.key.castShadow=r||!!e&&e.index!==1,this.key.position.copy(t).add(new L(-1.4,2.5,1.8).multiplyScalar(n)),this.key.target.position.copy(t);const o=this.key.shadow.camera,c=n*(e?.index===0?2.5:r?2.2:1.3);if(o.left=o.bottom=-c,o.right=o.top=c,o.near=.05,o.far=n*10,o.updateProjectionMatrix(),!!e){if(!this.acts[e.index]){const h=[()=>this.animePage(),()=>this.artistMagic(),()=>this.paperCity(),()=>this.writingAtelier(),()=>this.workingOrrery()][e.index]();this.acts[e.index]=h,this.root.add(h.root)}this.active!==e.index&&(this.active=e.index,this.acts.forEach((l,h)=>{l&&(l.root.visible=h===e.index)})),this.root.position.copy(t),this.root.rotation.z=-Math.atan(.035),this.root.scale.setScalar(n);for(const l of this.acts[e.index].materials)l.opacity=l.userData.sourceOpacity??1;this.acts[e.index].update(e.seconds,e.departure,s,a);for(const l of this.acts[e.index].materials)l.opacity*=e.opacity;this.shadow.scale.x=e.index===0?2.4:1,this.shadow.material.opacity=(e.index===1?0:.25)*(e.index===0?1-Be(e.departure/.8):1)*e.opacity}}dispose(){this.anime?.dispose();for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose();this.key.shadow.dispose()}}const K0=`
varying vec2 v_uv;
uniform float u_depth;
uniform float u_distance;
void main() {
  v_uv = uv;
  vec3 p = position;
  float z = p.z * u_depth;
  // At the reference camera every depth reconstructs the very same painting.
  // A camera movement, rather than a scale/fade switch, reveals the depth.
  p.xy *= (u_distance - z) / u_distance;
  p.z = z;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,ir=20,Z0=`
varying vec2 v_uv;
uniform sampler2D u_map;
uniform sampler2D u_mask;
uniform vec2 u_texel;
uniform vec2 u_polygon[${ir}];
uniform int u_count;
uniform float u_sketch;
uniform float u_night;
uniform float u_shadow;
bool inPolygon(vec2 p) {
  bool inside = false;
  vec2 a = u_polygon[u_count - 1];
  for (int i = 0; i < ${ir}; i++) {
    if (i >= u_count) break;
    vec2 b = u_polygon[i];
    if ((a.y > p.y) != (b.y > p.y) && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
    a = b;
  }
  return inside;
}
void main() {
  vec4 mask = texture2D(u_mask, v_uv);
  // Alpha is tested before depth is written. Transparent paper margins can never
  // erase a tabletop shadow or another object behind the cutout.
  if (mask.a < .025 || !inPolygon(v_uv)) discard;
  vec4 c = texture2D(u_map, v_uv);
  if (u_shadow > .5) { gl_FragColor = vec4(c.rgb, mask.a); return; }
  vec2 dx = vec2(u_texel.x, 0.0), dy = vec2(0.0, u_texel.y);
  float edge = length(texture2D(u_map, v_uv + dx).rgb - texture2D(u_map, v_uv - dx).rgb)
             + length(texture2D(u_map, v_uv + dy).rgb - texture2D(u_map, v_uv - dy).rgb);
  float lum = dot(c.rgb, vec3(.299, .587, .114));
  vec3 pencil = vec3(.966, .946, .88) - clamp(edge * .95 + (1.0 - lum) * .15, 0.0, .65) * vec3(.54, .51, .43);
  vec3 color = c.rgb * mix(vec3(1.0), vec3(.63, .72, .89), u_night * .5);
  gl_FragColor = vec4(mix(color, pencil, u_sketch), mask.a);
}`;function $0(i){return new ft(Math.min(...i.map(e=>e[0])),Math.min(...i.map(e=>e[1])),Math.max(...i.map(e=>e[0])),Math.max(...i.map(e=>e[1])))}class Nc{constructor(e,t,n,s,r,a){this.scene=e,this.image=t,this.mask=n,this.layers=s,this.projection=r;const o=new Map;for(const c of s)if(c.contactGroup){const l=o.get(c.contactGroup);(!l||r.surfaceDepth(...c.support)<r.surfaceDepth(...l))&&o.set(c.contactGroup,c.support)}for(const c of s){const l=c.contactGroup?o.get(c.contactGroup):void 0;this.add(l?{...c,support:l,surface:"grounded",relief:0}:c,t,n,!1)}a&&this.add({id:"painted-shadows",polygon:[[0,0],[1,0],[1,1],[0,1]],support:[.5,.9],surface:"table",lift:25e-5},a,a,!0)}scene;image;mask;layers;projection;meshes=[];depth={value:0};sketch={value:0};night={value:0};add(e,t,n,s){if(e.polygon.length<3||e.polygon.length>ir)throw new Error(`Invalid parallax outline: ${e.id}`);const r=$0(e.polygon),a=r.z-r.x,o=r.w-r.y,c=this.projection.width>this.projection.height?192:96,l=this.projection.width>this.projection.height?108:176,h=Math.floor(r.x*c),d=Math.floor(r.y*l),u=Math.ceil(r.z*c)-h,f=Math.ceil(r.w*l)-d,g=new Pt(1,1,u,f),S=g.getAttribute("position"),m=g.getAttribute("uv"),{width:p,height:M,distance:E,surfaceDepth:v}=this.projection,y=v(...e.support),w=E*(e.lift??.0012);for(let N=0;N<S.count;N++){const P=(h+N%(u+1))/c,I=(d+Math.floor(N/(u+1)))/l,k=e.surface==="upright"?E*(e.relief??0)*Math.sin(Math.PI*(P-r.x)/a)*Math.sin(Math.PI*(I-r.y)/o):0,W=v(P,I),Q=(e.surface==="table"?W:e.surface==="grounded"?Math.max(W,y):y)+w+k;S.setXYZ(N,(P-.5)*p,(.5-I)*M,Q),m.setXY(N,P,I)}const A=t.image,_=N=>N.toFixed(7),T=(e.exclude??[]).map((N,P)=>{const I=N.map((k,W)=>{const Q=N[(W+N.length-1)%N.length];return Q[1]===k[1]?"":`if ((p.y < ${_(Q[1])}) != (p.y < ${_(k[1])}) && p.x < ${_(Q[0])} + ${_((k[0]-Q[0])/(k[1]-Q[1]))} * (p.y - ${_(Q[1])})) inside = !inside;`}).join(`
`);return`bool excluded${P}(vec2 p) { bool inside = false; ${I} return inside; }`}),R=T.length?`if (${T.map((N,P)=>`excluded${P}(v_uv)`).join(" || ")}) discard;`:"",D=new zt({uniforms:{u_map:{value:t},u_mask:{value:n},u_depth:this.depth,u_distance:{value:E},u_texel:{value:new ce(1/A.width,1/A.height)},u_polygon:{value:Array.from({length:ir},(N,P)=>new ce(...e.polygon[P]??[0,0]))},u_count:{value:e.polygon.length},u_sketch:this.sketch,u_night:this.night,u_shadow:{value:s?1:0}},vertexShader:K0,fragmentShader:Z0.replace("void main() {",T.join(`
`)+`
void main() {
`+R),transparent:!0,side:wt,depthWrite:!s,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:s?-1:-2}),F=new ut(g,D);F.name=`painted:${e.id}`,F.frustumCulled=!1,F.renderOrder=s?1.15:3,this.meshes.push(F),this.scene.add(F)}update(e,t,n=0){this.depth.value=e,this.night.value=n;for(const s of this.meshes)s.visible=t}setSketch(e){this.sketch.value=e?1:0}dispose(){for(const e of this.meshes)this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}}class J0{constructor(e,t){this.scene=e,this.projection=t}scene;projection;paintings=new Map;setComposition(e,t){const n=t.source.image,s=t.cutouts.image,r=t.clean.image,a=n.width/n.height;if(Math.abs(s.width/s.height-a)>.003||Math.abs(r.width/r.height-a)>.003)throw new Error("Desk plates must share one registered canvas");if(Math.abs(a-this.projection.width/this.projection.height)>.015)throw new Error("Desk painting needs an orientation-specific composition; stretching is not supported");if(t.keep&&t.keep.length>20)throw new Error("Foreground occluder exceeds the supported outline size");this.paintings.get(e)?.layers.dispose(),t.cutouts.generateMipmaps=!1,t.cutouts.minFilter=t.cutouts.magFilter=Et;const c={...this.projection};if(t.tableHorizon!==void 0){const h=-(t.tableHorizon-.5)*c.height;c.surfaceDepth=(d,u)=>{const f=(.5-u)*c.height+.035*(d-.5)*c.width;return f>=h?0:Math.min(c.distance*.68,c.distance*(1-h/f))}}const l=t.keep?t.layers.map(h=>({...h,exclude:[...h.exclude??[],t.keep]})):t.layers;this.paintings.set(e,{art:t,layers:new Nc(this.scene,t.source,t.cutouts,l,c,t.shadows)})}composition(e){return this.paintings.get(e)?.art}update(e,t){for(const[n,s]of this.paintings)s.layers.update(t,n===e,n===1?1:0)}setSketch(e){for(const t of this.paintings.values())t.layers.setSketch(e)}dispose(){for(const e of this.paintings.values())e.layers.dispose()}}function Q0(i){const e=i?941:1672,t=i?1672:941,s=(i?[[0,1326],[132,1333],[167,1383],[202,1352],[318,1370],[492,1391],[505,1434],[334,1566],[40,1607],[0,1574]]:[[0,814],[155,752],[245,747],[311,756],[338,775],[387,760],[537,780],[547,808],[479,889],[225,875],[0,844]]).map(([o,c])=>[o/e,c/t]),r=i?[[0,.5],[.38,.5],[.38,1],[0,1]]:[[0,.48],[.328,.48],[.328,1],[0,1]],a=i?[[.5,.5],[1,.5],[1,1],[.5,1]]:[[.678,.48],[1,.48],[1,1],[.678,1]];return[{id:"open-art-book",polygon:s,support:i?[.23,.89]:[.176,.893],surface:"table",lift:.0045},{id:"left-tools-and-folios",polygon:r,exclude:[s],support:i?[.13,.767]:[.16,.773],surface:"grounded",lift:.0012},{id:"pigments-and-brushes",polygon:a,exclude:[s],support:i?[.78,.85]:[.85,.884],surface:"grounded",lift:.0012},{id:"loose-artwork",polygon:[[0,.48],[1,.48],[1,1],[0,1]],exclude:[s,r,a],support:[.5,.95],surface:"table",lift:.002}]}function j0(i){const e=i?941:1672,t=i?1672:941;return(i?[[167,1373],[484,1398],[8,1520],[410,1571]]:[[339,776],[530,785],[227,845],[476,869]]).map(([s,r])=>[s/e,r/t])}const eg=`
varying vec2 v_uv;uniform vec2 u_size;uniform vec2 u_floor;uniform vec3 u_anchor;uniform float u_scale;uniform vec3 u_poseBody;
void main(){v_uv=uv;float x=uv.x*u_size.x-u_floor.x;float y=(uv.y-1.0)*u_size.y+u_floor.y;
float plant=(1.0-smoothstep(0.0,230.0,y))*(1.0-smoothstep(-12.0,55.0,x))*u_poseBody.z;
x+=u_poseBody.y*(1.0-plant);y+=u_poseBody.x;x*=u_scale;y*=u_scale;
vec3 p=u_anchor+vec3(x,y-.035*x,0.0);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.0);}`,tg=`
varying vec2 v_uv;uniform sampler2D u_map;uniform sampler2D u_flow;
uniform float u_opacity;uniform float u_night;uniform float u_isPose;uniform vec2 u_size;uniform float u_paintBlend;
uniform vec2 u_poseGrid;uniform vec2 u_flowGrid;uniform vec4 u_frames;uniform float u_blend;uniform float u_flowRange;uniform float u_blink;uniform vec4 u_eyesA;uniform vec4 u_eyesB;uniform vec4 u_closedEyes;
vec2 tileUV(vec2 p,float id,vec2 grid){return vec2((mod(id,grid.x)+p.x)/grid.x,1.0-(floor(id/grid.x)+p.y)/grid.y);}
vec2 flowAt(vec2 p,float id){p=clamp(p,vec2(.005),vec2(.995));return(texture2D(u_flow,tileUV(p,id,u_flowGrid)).rg*255.0-128.0)*(u_flowRange/127.0)/u_size;}
vec4 baseDrawing(vec2 p,float id){if(p.x<0.0||p.x>1.0||p.y<0.0||p.y>1.0)return vec4(0);p=clamp(p,.5/u_size,1.0-.5/u_size);return texture2D(u_map,tileUV(p,id,u_poseGrid));}
vec4 drawing(vec2 p,float id,vec4 eyes){
 vec4 c=baseDrawing(p,id);if(u_blink<.001)return c;
 for(int eye=0;eye<2;eye++){
  vec2 center=(eye==0?eyes.xy:eyes.zw)/u_size,closed=(eye==0?u_closedEyes.xy:u_closedEyes.zw)/u_size;
  vec2 radius=vec2(20.0,15.5)/u_size,delta=(p-center)/radius;
  float mask=(1.0-smoothstep(.76,1.12,length(delta)))*smoothstep(0.0,.18,u_blink);
  if(mask>.001){vec2 squeeze=center+vec2(p.x-center.x,(p.y-center.y)/max(.10,1.0-.88*u_blink));vec4 moving=baseDrawing(squeeze,id),shut=baseDrawing(closed+delta*radius,9.0);c=mix(c,mix(moving,shut,smoothstep(.32,.86,u_blink)),mask);}
 }
 return c;
}

void main(){
vec4 c;
if(u_isPose<.5)c=texture2D(u_map,v_uv);
else{
 vec2 p=vec2(v_uv.x,1.0-v_uv.y),a=p,b=p;
 if(abs(u_frames.x-u_frames.y)<.5)c=drawing(p,u_frames.x,u_eyesA);
 else{
  for(int i=0;i<4;i++){a=mix(a,p-flowAt(a,u_frames.z)*u_blend,.72);b=mix(b,p-flowAt(b,u_frames.w)*(1.0-u_blend),.72);}
  vec4 ca=drawing(a,u_frames.x,u_eyesA),cb=drawing(b,u_frames.y,u_eyesB);c=mix(ca,cb,u_paintBlend);
 }
 c.rgb/=max(c.a,.001);
}
if(c.a<.045)discard;c.rgb*=mix(vec3(1.0),vec3(.89,.91,1.0),u_night);gl_FragColor=vec4(c.rgb,c.a*u_opacity);
}`,Qt=14,Bl=7.878,ng=8.3,zl="varying vec2 v_uv;uniform float u_depth;uniform float u_distance;void main(){v_uv=vec2(uv.x,1.0-uv.y);vec3 p=position;float z=p.z*u_depth;p.xy*=(u_distance-z)/u_distance;p.z=z;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}",lo=`varying vec2 v_uv;uniform sampler2D u_map;uniform sampler2D u_pencil;uniform sampler2D u_cleanPlate;uniform sampler2D u_cutouts;uniform float u_registered;uniform int u_keepCount;uniform vec2 u_keepPolygon[20];uniform float u_sketch;uniform float u_night;uniform float u_original;uniform float u_portrait;uniform vec2 u_texel;
bool keepPixel(vec2 p){if(u_keepCount<3)return false;bool inside=false;vec2 a=u_keepPolygon[u_keepCount-1];for(int i=0;i<20;i++){if(i>=u_keepCount)break;vec2 b=u_keepPolygon[i];if((a.y>p.y)!=(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)inside=!inside;a=b;}return inside;}
vec3 painted(vec2 uv){vec3 c=texture2D(u_map,uv).rgb;if(u_registered>.5){float mask=keepPixel(uv)?0.0:texture2D(u_cutouts,uv).a;c=mix(c,texture2D(u_cleanPlate,uv).rgb,smoothstep(.008,.025,mask));}return c;}
vec3 pigment(vec2 uv){return painted(uv)*mix(vec3(1),vec3(.63,.72,.89),u_night*.5);}
vec3 graphite(vec2 uv){vec2 d=u_texel;float gx=length(painted(uv+d*vec2(2,0))-painted(uv-d*vec2(2,0))),gy=length(painted(uv+d*vec2(0,2))-painted(uv-d*vec2(0,2)));return vec3(.966,.946,.88)-clamp((gx+gy)*1.4,0.0,.65)*vec3(.54,.51,.43);}`,ig=lo+`
float opening(vec2 p){float left=mix(.279+.002*p.y,.226+.004*p.y,u_portrait),right=mix(.767-.003*p.y,.810-.010*p.y,u_portrait),bottom=mix(.658+.115*p.x,.642+.009*p.x,u_portrait),cy=mix(.270,.289,u_portrait),cx=mix(.525,.515,u_portrait),rx=mix(.247,.290,u_portrait),ry=mix(.327,.156,u_portrait);float e=min(min(p.x-left,right-p.x),bottom-p.y),ellipse=pow((p.x-cx)/rx,2.0)+pow((p.y-cy)/ry,2.0);if(p.y<cy)e=min(e,(1.0-ellipse)*.15);return smoothstep(-.0018,.0018,e);}
void main(){vec2 p=v_uv;vec3 c=texture2D(u_map,p).rgb;float a=1.0-opening(p);float cabinet=smoothstep(mix(.708,.738,u_portrait),mix(.713,.747,u_portrait),p.x)*smoothstep(mix(.635+(p.x-.712)*.54,.603+(p.x-.743)*.13,u_portrait),mix(.640+(p.x-.712)*.54,.610+(p.x-.743)*.13,u_portrait),p.y);float sat=max(max(c.r,c.g),c.b)-min(min(c.r,c.g),c.b);float leaves=smoothstep(.10,.20,sat)*smoothstep(.018,.05,c.g-c.b)*(1.0-smoothstep(.48,.64,c.b))*(1.0-smoothstep(mix(.37,.47,u_portrait),mix(.43,.53,u_portrait),p.x))*(1.0-smoothstep(mix(.26,.38,u_portrait),mix(.34,.43,u_portrait),p.y))*step(mix(.25,.20,u_portrait),p.x);a=max(a,max(cabinet,leaves));if(a<.002)discard;
gl_FragColor=vec4(mix(pigment(p),u_registered>.5?graphite(p):texture2D(u_pencil,p).rgb,u_sketch),a);}`,sg=lo+"void main(){vec2 p=(v_uv-.5)*.88+.5;if(u_portrait>.5){p=vec2((v_uv.x-.515)*.5867+.5,(v_uv.y-.405)/.54+.5);p=(p-.5)*.88+.5;}gl_FragColor=vec4(mix(texture2D(u_map,p).rgb,texture2D(u_pencil,p).rgb,u_sketch),1.0);}";class rg{constructor(e,t,n,s,r,a=!1){this.clean=e,this.pencil=t,this.foreground=n,this.portrait=a,this.sourceHeight=a?Qt*1672/941:Bl,this.unit=this.sourceHeight/Bl,this.distance=ng*this.unit;const o=(l,h)=>{const d=l.image;return{u_keepCount:{value:0},u_keepPolygon:{value:Array.from({length:20},()=>new ce)},u_registered:{value:0},u_cleanPlate:{value:e},u_cutouts:{value:n},u_original:{value:1},u_map:{value:l},u_pencil:{value:h},u_sketch:{value:0},u_night:{value:0},u_portrait:{value:a?1:0},u_depth:{value:0},u_distance:{value:this.distance},u_texel:{value:new ce(1/d.width,1/d.height)}}},c=(l,h,d,u,f=!1,g=1)=>{const S=this.materials.length===1,m=new Pt(Qt*g,this.sourceHeight*g,S?a?96:192:1,S?a?176:108:1),p=m.getAttribute("position"),M=m.getAttribute("uv");for(let y=0;y<p.count;y++)p.setZ(y,d(M.getX(y),1-M.getY(y)));const E=new zt({uniforms:o(l,h),vertexShader:zl,fragmentShader:u,transparent:f,side:wt,depthWrite:!0}),v=new ut(m,E);return v.frustumCulled=!1,v.renderOrder=this.materials.length,this.materials.length===1&&(this.room=E,this.roomGeometry=m),this.geometries.push(m),this.materials.push(E),this.scene.add(v),E};if(this.far=c(s,r,()=>-21*this.unit,sg,!1,1.2),c(e,t,(l,h)=>this.tableDepth(l,h),ig,!0),this.originalProps=new Nc(this.scene,n,n,Q0(a),{width:Qt,height:this.sourceHeight,distance:this.distance,surfaceDepth:(l,h)=>this.tableDepth(l,h,!0)}),a)for(const l of[-1,1]){const h=new Pt(Qt*.75,this.sourceHeight).translate(l*Qt*.875,0,0),d=new zt({uniforms:o(e,t),vertexShader:zl,fragmentShader:lo+`void main(){vec2 p=v_uv;p.x=${l<0?"p.x*.24":".78+p.x*.22"};gl_FragColor=vec4(mix(pigment(p),mix(graphite(p),texture2D(u_pencil,p).rgb,u_original),u_sketch),1.0);}`}),u=new ut(h,d);u.visible=!1,this.extensions.push(u),this.geometries.push(h),this.materials.push(d),this.scene.add(u)}this.figure=new ut(new Pt(1,1,48,64),new zt({transparent:!0,depthWrite:!0,side:wt,uniforms:{u_map:{value:null},u_flow:{value:null},u_size:{value:new ce},u_floor:{value:new ce},u_anchor:{value:new L},u_scale:{value:1},u_opacity:{value:1},u_night:{value:0},u_isPose:{value:0},u_poseGrid:{value:new ce(1,1)},u_flowGrid:{value:new ce(1,1)},u_frames:{value:new ft},u_blend:{value:0},u_paintBlend:{value:0},u_flowRange:{value:1},u_poseBody:{value:new L},u_blink:{value:0},u_eyesA:{value:new ft},u_eyesB:{value:new ft},u_closedEyes:{value:new ft}},vertexShader:eg,fragmentShader:tg})),this.figure.visible=!1,this.figure.frustumCulled=!1,this.figure.renderOrder=2,this.scene.add(this.figure),this.contact=new ut(new Pt(1,1),new zt({transparent:!0,depthWrite:!1,side:wt,uniforms:{u_anchor:{value:new L},u_size:{value:1},u_ground:{value:1},u_impact:{value:-1},u_opacity:{value:1},u_lift:{value:this.unit*.014}},vertexShader:"varying vec2 v_uv;uniform vec3 u_anchor;uniform float u_size;uniform float u_lift;void main(){v_uv=uv-.5;vec3 p=u_anchor+vec3(v_uv.x*u_size,-.035*v_uv.x*u_size+u_lift,v_uv.y*u_size*.7);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.0);}",fragmentShader:"varying vec2 v_uv;uniform float u_ground;uniform float u_impact;uniform float u_opacity;void main(){float shadow=exp(-dot(v_uv/vec2(.25,.23),v_uv/vec2(.25,.23))*2.8)*.4*u_ground;float ring=0.0;if(u_impact>=0.0){ring=exp(-abs(length(v_uv)-(.06+.37*u_impact))*160.0)*sin(u_impact*3.14159)*.65;}float a=max(shadow,ring)*u_opacity;gl_FragColor=vec4(mix(vec3(.09,.073,.046),vec3(1.0,.79,.36),ring/(shadow+ring+.0001)),a);}"})),this.contact.visible=!1,this.contact.frustumCulled=!1,this.contact.renderOrder=1.5,this.scene.add(this.contact)}clean;pencil;foreground;portrait;scene=new eo;camera=new Kt(47,16/9,.1,240);materials=[];geometries=[];far;extensions=[];unit;sourceHeight;distance;depth=0;framingAspect=16/9;target=new L;theatre;desk;room;roomGeometry;originalProps;realm=0;modern=!1;registered=!1;registeredHorizon=0;shadowKey="";shadowDirty=!0;figure;contact;figureTextures=new Map;motionTextures=new Map;night=0;setMaterials(e){this.theatre??=new Y0(this.scene,e)}setDeskComposition(e,t){this.desk??=new J0(this.scene,{width:Qt,height:this.sourceHeight,distance:this.distance,surfaceDepth:(n,s)=>this.tableDepth(n,s,!0)}),this.desk.setComposition(e,t),this.shadowKey=""}performanceReady(e){return!!this.theatre&&(e===0||!!this.desk?.composition(e))}tableDepth(e,t,n=!1){const s=this.registered&&!n&&this.registeredHorizon?this.registeredHorizon-.5:this.portrait?.22:.27,r=(e-.5)*Qt,a=(.5-t)*this.sourceHeight,o=-s*this.sourceHeight,c=a+.035*r;return c>=o?0:Math.min(this.distance*.68,this.distance*(1-o/c))}setRealm(e,t,n){const s=this.desk?.composition(n),r=!!s,a=n===1?1:0,o=n>0&&r;this.night=a,this.realm=n;const c=s?.tableHorizon??0;if(o!==this.modern||r!==this.registered||c!==this.registeredHorizon){this.modern=o,this.registered=r,this.registeredHorizon=c;const h=this.roomGeometry.getAttribute("position"),d=this.roomGeometry.getAttribute("uv");for(let u=0;u<h.count;u++)h.setZ(u,this.tableDepth(d.getX(u),1-d.getY(u)));h.needsUpdate=!0,this.shadowKey=""}this.room.uniforms.u_map.value=s?.source??this.clean,this.room.uniforms.u_pencil.value=this.pencil,this.room.uniforms.u_registered.value=r?1:0,this.room.uniforms.u_cleanPlate.value=s?.clean??this.clean,this.room.uniforms.u_cutouts.value=s?.cutouts??this.foreground,this.room.uniforms.u_keepCount.value=s?.keep?.length??0;const l=this.room.uniforms.u_keepPolygon.value;for(let h=0;h<20;h++)l[h].set(...s?.keep?.[h]??[0,0]);for(const h of this.extensions)h.material.uniforms.u_map.value=s?.clean??this.clean;this.far.uniforms.u_map.value=e,this.far.uniforms.u_pencil.value=t;for(const h of this.materials)h.uniforms.u_night.value=a,h.uniforms.u_original.value=o?0:1}update(e,t,n,s,r=s){this.depth=e,this.framingAspect=r;const a=t*.75*(this.portrait?.95:1)*e,o=n*.24*this.unit*e;this.camera.position.set(a,o,this.distance),this.camera.aspect=s;const c=Math.min(this.sourceHeight/1.14,Qt/(r*1.14));this.camera.fov=2*Math.atan(c/(2*this.distance))*180/Math.PI;const l=this.portrait?0:Be((r-1.85)/.55),h=Math.max(0,.96-.5-c/(2*this.sourceHeight))*this.sourceHeight*l;h>0?this.camera.setViewOffset(s,1,0,h/c,s,1):this.camera.clearViewOffset(),this.target.set(a*.12,o*.12,-12*this.unit),this.camera.lookAt(this.target),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0);for(const d of this.materials)d.uniforms.u_depth.value=e;for(const d of this.extensions)d.visible=s>r+.001;this.originalProps.update(e,!this.modern,this.night),this.desk?.update(this.realm,e)}placement(e,t){const n=Math.min(this.sourceHeight/1.14,Qt/(t*1.14)),s=!this.portrait&&e>0?Math.max(0,.96-.5-n/(2*this.sourceHeight))*Be((t-1.85)/.55):0,r=e===1,a=this.portrait?e===1?.43:.51:e===1?.63:e===0?t>1.9?.68:.62:.61,o=this.portrait?r?.79:.765:Math.max(e===0?.792:0,.5+(r?.4:.345)*n/this.sourceHeight+s),c=this.tableDepth(a,o)*this.depth,l=(this.distance-c)/this.distance,h=new L((a-.5)*Qt*l,(.5-o)*this.sourceHeight*l,c),d=r?300:320,u=r?480:400,f=r?this.portrait?e===1?.38:.35:.43:Math.min(.5,Math.max(.39,285/innerHeight),this.portrait?innerWidth/innerHeight*.7:1),g=n*f*l;return{anchor:h,designW:d,designH:u,screenH:f,worldH:g,viewHeight:n}}setPerformance(e,t){this.setFigure(e?.figure,t,e?.departure??0);let{anchor:n,worldH:s}=this.placement(t,this.framingAspect);if(e&&(t===2||t===4)){const c=1/(1+(1-this.depth)*s/(this.camera.position.z-n.z));n.lerp(this.camera.position,1-c),s*=c}const r=new L(.02*Qt,(.5-(this.portrait?.34:.3))*this.sourceHeight,-18*this.unit),a=(this.distance-r.z)/this.distance;r.x*=a,r.y*=a,r.sub(n).divideScalar(s),this.theatre?.update(e,n,s,r,this.modern,t===0?this.firstBookPage():void 0);const o=[t,this.depth.toFixed(5),this.framingAspect.toFixed(5),e&&t!==1?e.seconds.toFixed(4)+":"+e.departure.toFixed(4):"static"].join(":");o!==this.shadowKey&&(this.shadowKey=o,this.shadowDirty=!0)}firstBookPage(){const{anchor:e,worldH:t}=this.placement(0,this.framingAspect),n=j0(this.portrait),s=new L(0,0,1);return{corners:n.map(([a,o])=>{const c=(this.tableDepth(a,o)+this.distance*.0045)*this.depth,l=(this.distance-c)/this.distance;return new L((a-.5)*Qt*l,(.5-o)*this.sourceHeight*l,c).sub(e).divideScalar(t).applyAxisAngle(s,Math.atan(.035))}),texture:this.foreground,uvCorners:n.map(([a,o])=>new ce(a,o))}}setFigure(e,t,n){if(this.figure.visible=this.contact.visible=!!e&&n<.9999,!e)return;let s=this.figureTextures.get(e.canvas);if(!s){const u=new os(e.pose?.image??e.canvas);u.generateMipmaps=!1,u.minFilter=u.magFilter=Et,s={texture:u,key:""},this.figureTextures.set(e.canvas,s)}const r=e.pose?e.pose.image.src:e.key;s.key!==r&&(s.texture.premultiplyAlpha=!!e.pose,s.texture.needsUpdate=!0,s.key=r);const{anchor:a,worldH:o}=this.placement(t,this.framingAspect),c=o/e.designHeight,l=this.figure.material.uniforms,h=Be(n/.86);if(t===0?(a.y+=Math.sin(n*Math.PI)*o*.65,a.x-=h*o*.25,a.z-=h*o*3):(a.x+=h*o*.2,a.z-=h*o*.32),l.u_map.value=s.texture,l.u_size.value.set(e.width,e.height),l.u_floor.value.set(e.floorX,e.floorY),l.u_anchor.value.copy(a),l.u_scale.value=c*(1-h),l.u_opacity.value=e.opacity,l.u_night.value=this.night,l.u_isPose.value=e.pose?1:0,l.u_poseBody.value.set(0,0,0),e.pose){const u=e.pose;let f=this.motionTextures.get(u.flow);f||(f=new Lt(u.flow),f.generateMipmaps=!1,f.minFilter=f.magFilter=Et,f.needsUpdate=!0,this.motionTextures.set(u.flow,f)),l.u_flow.value=f,l.u_poseGrid.value.set(...u.poseGrid),l.u_flowGrid.value.set(...u.flowGrid),l.u_frames.value.set(u.a,u.b,u.forward,u.backward),l.u_blend.value=u.blend,l.u_paintBlend.value=u.paintBlend,l.u_flowRange.value=u.flowRange,l.u_poseBody.value.set(u.lift,u.shift,u.pin),l.u_blink.value=u.blink,l.u_eyesA.value.set(...u.eyesA),l.u_eyesB.value.set(...u.eyesB),l.u_closedEyes.value.set(...u.closedEyes)}const d=this.contact.material.uniforms;d.u_anchor.value.copy(a).add(new L(e.offsetX*c,-.035*e.offsetX*c,0)),d.u_size.value=o*.9*(1-h),d.u_ground.value=e.ground,d.u_impact.value=e.impact,d.u_opacity.value=e.opacity*(1-h)}projection(e,t,n){const{anchor:s,designW:r,designH:a,screenH:o,worldH:c}=this.placement(e,t/n),l=c*r/a,h=(P,I)=>{const k=new L(s.x+P*l,s.y+I*c-.035*P*l,s.z).project(this.camera);return{x:(k.x+1)*t/2,y:(1-k.y)*n/2}},d=h(-.5,1),u=h(.5,1),f=h(-.5,0),g=h(.5,0),S=u.x-g.x,m=f.x-g.x,p=d.x-u.x+g.x-f.x,M=u.y-g.y,E=f.y-g.y,v=d.y-u.y+g.y-f.y,y=S*E-m*M,w=Math.abs(y)<1e-8?0:(p*E-m*v)/y,A=Math.abs(y)<1e-8?0:(S*v-p*M)/y,_=u.x-d.x+w*u.x,T=f.x-d.x+A*f.x,R=u.y-d.y+w*u.y,D=f.y-d.y+A*f.y,F=`matrix3d(${_/r},${R/r},0,${w/r},${T/a},${D/a},0,${A/a},0,0,1,0,${d.x},${d.y},0,1)`,N=h(0,0);return{matrix:F,width:r,height:a,scale:o*n/a,footX:N.x,footY:N.y}}render(e,t=!1){for(const n of this.materials)n.uniforms.u_sketch.value=t?1:0;this.originalProps.setSketch(t),this.desk?.setSketch(t),e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=this.shadowDirty,e.render(this.scene,this.camera),this.shadowDirty=!1}dispose(){this.theatre?.dispose(),this.desk?.dispose(),this.originalProps.dispose();for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();for(const e of[this.figure,this.contact])e.geometry.dispose(),e.material.dispose();for(const{texture:e}of this.figureTextures.values())e.dispose();for(const e of this.motionTextures.values())e.dispose()}}const Yi=new L;function jt(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Yi.copy(e),Yi[n]=0,Yi.normalize();const l=.5*a/(a+o),h=1-Yi.angleTo(i)/c;return Math.sign(Yi[t])===1?h*l:o/(a+o)+l+l*(1-h)}class co extends li{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new L,l=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,S=new L,m=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:S.set(1,0,0),f[M+0]=jt(S,l,"z","y",r,n),f[M+1]=1-jt(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),f[M+0]=1-jt(S,l,"z","y",r,n),f[M+1]=1-jt(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),f[M+0]=1-jt(S,l,"x","z",r,e),f[M+1]=jt(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[M+0]=1-jt(S,l,"x","z",r,e),f[M+1]=1-jt(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[M+0]=1-jt(S,l,"x","y",r,e),f[M+1]=1-jt(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),f[M+0]=jt(S,l,"x","y",r,e),f[M+1]=1-jt(S,l,"y","x",r,t);break}}static fromJSON(e){return new co(e.width,e.height,e.depth,e.segments,e.radius)}}const bt=5.2,Yt=6.85,ei=i=>{const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)},ag=`
vec2 q=vMapUv;bool leaf=u_side>1.5&&u_side<2.5;
// Ink belongs to the paper's rest coordinates, including the reverse of a curled sheet.
float x=u_side<.5?-5.16+q.x*5.12:u_side<1.5?.04+q.x*5.12:u_side<2.5?(.04+q.x*5.12)*(u_reverse>.5?-1.0:1.0):(q.x-.5)*.08;
vec2 spread=vec2(.5+x/10.32,q.y);
vec2 art=(spread-.5)/u_artFit+.5;
// Once the sheet crosses the spine its reverse supplies the left half of the
// hinge too; retaining the old coloured image here creates a dark vertical slit.
float hingeTurn=u_turn+(q.y-.5)*.035*sin(u_turn*3.14159265);
bool next=u_transition>.5&&(leaf?u_reverse>.5:u_side>2.5?(x>0.0?u_turn>.000001:hingeTurn>.5):u_side>.5?u_turn>.000001:u_turn>.999999);
vec3 pencil=next?texture2D(u_nextSketch,art).rgb:texture2D(u_sketch,art).rgb;
vec3 painting=next?texture2D(u_nextWorld,art).rgb:texture2D(u_world,art).rgb;
float amount=next?u_paint:u_oldPaint;
float field=length((art-vec2(.51,.52))*vec2(u_artAspect,1.0))+bookNoise(art*13.0)*.08;
float ink=1.0-smoothstep(amount*(1.0+u_artAspect*.55)-.04,amount*(1.0+u_artAspect*.55)+.055,field);
if(amount<.001)ink=0.0;if(amount>.999)ink=1.0;
float margin=.010*(1.0-u_live)+.000004;
float border=smoothstep(0.0,margin,art.x)*(1.0-smoothstep(1.0-margin,1.0,art.x))*smoothstep(0.0,margin,art.y)*(1.0-smoothstep(1.0-margin,1.0,art.y));
vec3 paper=vec3(.967,.942,.863)-vec3(bookNoise(q*180.0)*.014+bookNoise(q*13.0)*.008);
vec3 color=mix(paper,mix(pencil,painting,ink),border);
float gutter=u_side<.5?pow(q.x,20.0):u_side<2.5?pow(1.0-q.x,20.0):.45;
color*=1.0-gutter*.12*(1.0-u_live);
diffuseColor.rgb*=bookLinear(color);
`,og=`
uniform sampler2D u_world;uniform sampler2D u_sketch;uniform sampler2D u_nextWorld;uniform sampler2D u_nextSketch;
uniform float u_side;uniform float u_reverse;uniform float u_paint;uniform float u_oldPaint;uniform float u_turn;uniform float u_transition;uniform float u_live;uniform float u_artAspect;
uniform vec2 u_artFit;
float bookHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float bookNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(bookHash(i),bookHash(i+vec2(1,0)),f.x),mix(bookHash(i+vec2(0,1)),bookHash(i+vec2(1)),f.x),f.y);}
vec3 bookLinear(vec3 c){return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c));}
`,lg=(i,e,t,n=!1)=>({u_world:{value:e},u_sketch:{value:t},u_nextWorld:{value:e},u_nextSketch:{value:t},u_side:{value:i},u_reverse:{value:n?1:0},u_paint:{value:0},u_oldPaint:{value:0},u_turn:{value:0},u_transition:{value:0},u_live:{value:0},u_artAspect:{value:1.5},u_artFit:{value:new ce(1,1)}}),ii=(bt*2-.08)/(Yt-.09);class cg{scene=new eo;camera=new Kt(22,1,1,120);rig=new gt;cover=new gt;backClosing=new gt;key;rightBlock;leftBlock;rightPage;leftPage;geometries=[];materials=[];textures=[];paperUniforms=[];openingLeaves=[];leaf;leafReverse;leafGeometry;leafOriginal;gutter;gutterGeometry;spine;bands=[];turn=0;constructor(e,t,n,s){this.scene.background=new et("#35281b"),this.scene.add(this.rig),this.rig.add(this.backClosing),this.backClosing.position.z=-.17;const r=ie=>(this.geometries.push(ie),ie),a=ie=>(this.materials.push(ie),ie),o=ie=>{const de=ie.clone();return de.colorSpace=Rt,de.flipY=!0,de.needsUpdate=!0,this.textures.push(de),de},c=o(e),l=o(s),h=c.clone();h.repeat.set(.4,.75),h.offset.set(.28,.12),h.needsUpdate=!0,this.textures.push(h);const d=a(new on({map:h,bumpMap:h,bumpScale:.022,roughness:.96,metalness:.02})),u=a(new on({map:c,bumpMap:c,bumpScale:.018,roughness:.93,metalness:.07})),f=a(new on({color:10189630,roughness:.66,metalness:.62}));l.wrapS=l.wrapT=Ks,l.repeat.set(3,3),l.offset.set(-1,-1);const g=a(new on({map:l,roughness:1,metalness:0})),S=new ut(r(new Pt(126,87)),g);S.position.set(0,0,-.65),S.receiveShadow=!0,this.scene.add(S);const m=(ie,de,V,Z,ae,Ae=this.rig)=>{const _e=new ut(r(new co(ie,de,V,3,Z)),ae);return _e.castShadow=!0,_e.receiveShadow=!0,Ae.add(_e),_e};m(bt+.16,Yt+.18,.16,.065,d,this.backClosing).position.set(bt/2,0,-.37);const M=document.createElement("canvas");M.width=512,M.height=512;const E=M.getContext("2d");E.fillStyle="#d6c59d",E.fillRect(0,0,512,512);for(let ie=0;ie<512;ie++){const de=155+Math.sin(ie*2.7)*17+Math.sin(ie*.36)*8;E.fillStyle=`rgba(${de},${de-18},${de-39},${ie%3===0?.38:.12})`,E.fillRect(ie,0,1,512)}E.fillStyle="#80704c66";for(let ie=30;ie<512;ie+=64)E.fillRect(ie,0,3,512);const v=new os(M);v.colorSpace=Rt,this.textures.push(v);const y=v.clone();y.center.set(.5,.5),y.rotation=Math.PI/2,y.needsUpdate=!0,this.textures.push(y);const w=a(new on({map:v,roughness:1})),A=a(new on({map:y,roughness:1})),_=a(new on({color:15785909,roughness:1}));(this.rightBlock=m(bt-.02,Yt+.055,.55,.032,[w,d,A,A,_,_],this.backClosing)).position.set(bt/2,0,-.005);const R=this.spine=new ut(r(new An(.43,.43,Yt+.05,20,1,!1,Math.PI,Math.PI)),d);R.position.set(.04,0,-.18),R.castShadow=!0,R.receiveShadow=!0,this.rig.add(R);for(const ie of[-2.65,-1.52,1.52,2.65]){const de=m(.23,.13,.79,.04,d);de.position.set(.025,ie,-.15),this.bands.push(de)}this.rig.add(this.cover),this.cover.position.z=-.14,m(bt+.13,Yt+.17,.19,.07,[d,d,d,d,u,d],this.cover).position.set(bt/2,0,.35);for(const ie of[0,1])for(const de of[-1,1]){const V=ie?bt-.15:.15,Z=de*(Yt/2-.16);m(.69,.12,.055,.035,f,this.cover).position.set(V+(ie?-.21:.21),Z,.469),m(.12,.66,.055,.035,f,this.cover).position.set(V,Z-de*.22,.469)}m(.73,.24,.11,.04,f,this.cover).position.set(bt-.06,0,.405);const N=(ie,de=!1)=>{const V=lg(ie,n,t,de);this.paperUniforms.push(V);const Z=a(new on({color:16777215,map:n,roughness:1,metalness:0,side:de?Vt:ie===3?wt:qn}));return ie===2&&(Z.shadowSide=wt),Z.onBeforeCompile=ae=>{Object.assign(ae.uniforms,V),ie!==3&&(ae.vertexShader=ae.vertexShader.replace("#include <shadowmap_vertex>",Ye.shadowmap_vertex.replace("directionalLightShadows[ i ].shadowNormalBias","max(directionalLightShadows[ i ].shadowNormalBias,0.063)"))),ae.fragmentShader=ae.fragmentShader.replace("#include <common>",`#include <common>
`+og).replace("#include <map_fragment>",ag).replace("#include <opaque_fragment>",`outgoingLight=mix(outgoingLight,diffuseColor.rgb,u_live);
#include <opaque_fragment>`)},Z.customProgramCacheKey=()=>ie===3?"catalog-paper-hinge":"catalog-paper-sheet",Z},P=()=>r(new Pt(bt-.08,Yt-.09,64,16).translate(bt/2,0,0)),I=this.rightPage=new ut(P(),N(1));I.position.z=.279,I.receiveShadow=!0,this.backClosing.add(I),this.leftBlock=m(bt-.02,Yt+.055,.55,.032,[w,d,A,A,_,_],this.cover),this.leftBlock.position.set(bt/2,0,.246);const k=this.leftPage=new ut(P(),N(0));k.position.set(bt,0,.246),k.rotation.y=Math.PI,k.receiveShadow=!0,this.cover.add(k),this.leafGeometry=P(),this.leafOriginal=Float32Array.from(this.leafGeometry.getAttribute("position").array);const W=ie=>{const de=new ut(ie,N(2)),V=new ut(ie,N(2,!0));de.castShadow=!0;for(const Z of[de,V])Z.receiveShadow=!0,Z.frustumCulled=!1,Z.visible=!1,this.rig.add(Z);return{mesh:de,reverse:V}},Q=W(this.leafGeometry);this.leaf=Q.mesh,this.leafReverse=Q.reverse;for(let ie=0;ie<2;ie++){const de=P();this.openingLeaves.push({...W(de),geometry:de,original:Float32Array.from(de.getAttribute("position").array)})}this.gutterGeometry=r(new Pt(.12,Yt-.09,4,12)),this.gutter=new ut(this.gutterGeometry,N(3)),this.gutter.receiveShadow=!0,this.gutter.frustumCulled=!1,this.rig.add(this.gutter);const q=document.createElement("canvas");q.width=900,q.height=1186;const K=q.getContext("2d");K.textAlign="center",K.fillStyle="#dec17d",K.font="45px Georgia",K.fillText("NEURODORA",450,485),K.font="22px Georgia",K.fillText("A I - A T E L I E R",450,538),K.strokeStyle="#c4a665",K.lineWidth=2,K.beginPath(),K.moveTo(338,575),K.lineTo(562,575),K.stroke(),K.font="italic 43px Georgia",K.fillText("Catalog",450,636),K.beginPath(),K.moveTo(402,677),K.quadraticCurveTo(430,688,450,677),K.quadraticCurveTo(470,666,498,677),K.stroke();const j=new os(q);j.colorSpace=Rt,this.textures.push(j);const fe=a(new on({map:j,transparent:!0,alphaTest:.08,roughness:.77,metalness:.24,depthWrite:!1})),me=new ut(r(new Pt(bt,Yt)),fe);me.position.set(bt/2,0,.453),this.cover.add(me);const le=this.key=new wc(16769197,2.1);le.position.set(-9,8,15),le.castShadow=!0,le.shadow.mapSize.set(1024,1024),le.shadow.camera.left=-12,le.shadow.camera.right=12,le.shadow.camera.top=10,le.shadow.camera.bottom=-10,le.shadow.camera.near=1,le.shadow.camera.far=50,le.shadow.bias=-4e-4,le.shadow.normalBias=.018,le.shadow.radius=4,this.scene.add(le,le.target,new Tc(13884357,1.2))}setImages(e,t,n,s,r,a){this.turn=r;for(const o of this.paperUniforms)o.u_world.value=e.color,o.u_sketch.value=e.sketch,o.u_nextWorld.value=t.color,o.u_nextSketch.value=t.sketch,o.u_oldPaint.value=n,o.u_paint.value=s,o.u_turn.value=r,o.u_transition.value=a?1:0}update(e,t,n,s=0,r=0,a=0,o=t){const c=ei(e/.46),l=ei((e-.42)/.39),h=(t<=1?n<720?.53:.59:n<580?.56:.66)*(1-c)+.84*c,d=Yt/h,u=(bt*(1+c-s)+.6)/(t*(.8+.1*c)),f=Math.max(d,u)/(2*Math.tan(22*Math.PI/360));this.camera.zoom=1;const g=bt/2*(1-c)-bt*.5*s;this.camera.aspect=t;const S=1-l+s*.8;this.camera.position.set(g-f*.33*S,-f*.55*S,f),this.camera.lookAt(g,0,-.18),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),this.rig.rotation.z=-.065*(1-l)+.045*s,this.backClosing.rotation.y=-Math.PI*s;const m=Math.max(0,Math.min(1,r)),p=Math.max(.008,m*.55),M=Math.max(.008,(1-m)*.55),E=ei((a-.12)/.6),v=p+M,y=p+((v-.064)/2-p)*E,w=M+((v+.064)/2-M)*E;this.rightBlock.scale.z=w/.55,this.rightBlock.position.z=-.28+w/2,this.rightPage.position.z=-.28+w+.004,this.leftBlock.scale.z=y/.55,this.leftBlock.position.z=.246-y/2,this.leftBlock.visible=e>.1,this.leftPage.position.z=.246-y-.004;const A=o>ii?.955:.955*o/ii,_=o>ii?.955*ii/o:.955;this.cover.rotation.y=-Math.PI*c;const T=c*(1-s);this.spine.scale.z=1-.88*T,this.spine.position.z=-.18-.3*T;for(const le of this.bands)le.scale.z=1-.9*T,le.position.z=-.15-.33*T;this.gutter.visible=c>.025&&s<.98,this.leaf.visible=this.leafReverse.visible=this.turn>1e-6&&this.turn<.999999&&s===0,this.paperUniforms.forEach(le=>{le.u_live.value=ei((a-.15)/.85),le.u_artAspect.value=o,le.u_artFit.value.set(A,_)});const R=-.386+y+.004,D=-.45+w+.004,F=(R+D)/2,N=Math.max(R,D)+.01*(1-E),P=ei((c-.78)/.22);for(const[le,ie]of this.openingLeaves.entries()){const de=ei((e-(.18+le*.055))/.32);if(ie.mesh.visible=ie.reverse.visible=e>.14&&e<.63&&de<.999999,!ie.mesh.visible)continue;const V=de*Math.PI,Z=ie.geometry.getAttribute("position"),ae=ie.geometry.getAttribute("uv");for(let Ae=0;Ae<Z.count;Ae++){const _e=ie.original[Ae*3],Ie=ie.original[Ae*3+1],tt=Math.sin(V)*Math.sin(ae.getX(Ae)*Math.PI),ee=D+(R-D)*de,re=ee+(N-ee)*Math.exp(-_e/.36)*P;Z.setXYZ(Ae,_e*Math.cos(V)+tt*.13,Ie,re+_e*Math.sin(V)+tt*.44+.004+.015*(1-le)*(1-de))}Z.needsUpdate=!0,ie.geometry.computeVertexNormals(),ie.geometry.computeBoundingBox()}this.rig.updateMatrixWorld(!0),this.cover.updateMatrixWorld(!0);const I=new Fi;this.rig.traverseVisible(le=>{le instanceof ut&&le!==this.leaf&&le!==this.leafReverse&&le!==this.gutter&&(le.geometry.boundingBox||le.geometry.computeBoundingBox(),le.geometry.boundingBox&&I.union(le.geometry.boundingBox.clone().applyMatrix4(le.matrixWorld)))});const k=new L(g,0,-.18);for(let le=0;le<2;le++){let ie=1;for(const de of[I.min.x,I.max.x])for(const V of[I.min.y,I.max.y])for(const Z of[I.min.z,I.max.z]){const ae=new L(de,V,Z).project(this.camera);ie=Math.max(ie,Math.abs(ae.x)/.96,Math.abs(ae.y)/.91)}if(ie<=1.002)break;this.camera.position.copy(k.clone().add(this.camera.position.clone().sub(k).multiplyScalar(ie*1.025))),this.camera.lookAt(k),this.camera.updateMatrixWorld(!0)}if(a>0){const le=new L(0,0,F).applyMatrix4(this.rig.matrixWorld),ie=(Yt-.09)*_/(2*Math.tan(this.camera.fov*Math.PI/360));this.camera.position.lerp(new L(le.x,le.y,le.z+ie),a),this.camera.lookAt(k.clone().lerp(le,a)),this.camera.updateMatrixWorld(!0)}this.camera.updateProjectionMatrix();for(const[le,ie,de]of[[this.leftPage,R,0],[this.rightPage,D,1]]){const V=le.geometry.getAttribute("position"),Z=le.geometry.getAttribute("uv");for(let ae=0;ae<V.count;ae++){const Ae=.04+(de?Z.getX(ae):1-Z.getX(ae))*5.12;V.setZ(ae,(N-ie)*Math.exp(-Ae/.36)*P)}V.needsUpdate=!0,le.geometry.computeVertexNormals()}const W=new _t().copy(this.rig.matrixWorld).invert(),Q=new _t().multiplyMatrices(W,this.leftPage.matrixWorld),q=new _t().multiplyMatrices(W,this.rightPage.matrixWorld),K=this.gutterGeometry.getAttribute("position"),j=this.gutterGeometry.getAttribute("uv"),fe=new L,me=new L;for(let le=0;le<K.count;le++){const ie=j.getX(le),de=(j.getY(le)-.5)*(Yt-.09);fe.set(5.16,de,(N-R)*Math.exp(-.04/.36)*P).applyMatrix4(Q),me.set(.04,de,(N-D)*Math.exp(-.04/.36)*P).applyMatrix4(q),fe.lerp(me,ie),fe.z-=Math.sin(ie*Math.PI)*.004*(1-E),K.setXYZ(le,fe.x,fe.y,fe.z)}if(K.needsUpdate=!0,this.gutterGeometry.computeVertexNormals(),this.leaf.visible){const le=this.leafGeometry.getAttribute("position"),ie=this.leafGeometry.getAttribute("uv");for(let de=0;de<le.count;de++){const V=this.leafOriginal[de*3],Z=this.leafOriginal[de*3+1],ae=Math.max(0,Math.min(1,this.turn+(ie.getY(de)-.5)*.035*Math.sin(this.turn*Math.PI))),Ae=Math.PI*ae,_e=Math.min(3*Math.sin(Ae),1.92*(Math.PI-Ae)),Ie=_e/bt,tt=Ie>1e-5?(Math.sin(Ae+Ie*V)-Math.sin(Ae))/Ie:V*Math.cos(Ae),ee=Ie>1e-5?(Math.cos(Ae)-Math.cos(Ae+Ie*V))/Ie:V*Math.sin(Ae),re=D+(R-D)*ei(ae),oe=re+(N-re)*Math.exp(-V/.36);le.setXYZ(de,tt,Z,oe+ee+.004)}le.needsUpdate=!0,this.leafGeometry.computeVertexNormals(),this.leaf.position.z=0}}render(e){e.render(this.scene,this.camera)}dispose(){this.key.shadow.dispose(),this.geometries.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.textures.forEach(e=>e.dispose())}}function kl(i,e){let t=!1,n=e[e.length-1];for(const s of e)n[1]>i[1]!=s[1]>i[1]&&i[0]<(s[0]-n[0])*(i[1]-n[1])/(s[1]-n[1])+n[0]&&(t=!t),n=s;return t}function ug(i,e){if(i.some(n=>kl(n,e))||e.some(n=>kl(n,i)))return!0;const t=(n,s,r)=>(s[0]-n[0])*(r[1]-n[1])-(s[1]-n[1])*(r[0]-n[0]);for(let n=0;n<i.length;n++)for(let s=0;s<e.length;s++){const r=i[n],a=i[(n+1)%i.length],o=e[s],c=e[(s+1)%e.length];if(t(r,a,o)*t(r,a,c)<0&&t(o,c,r)*t(o,c,a)<0)return!0}return!1}function Yn(i,e,t){const n=t.map(o=>({...o,polygon:o.polygon.map(([c,l])=>[c/i,l/e]),support:[o.support[0]/i,o.support[1]/e]})),s=n.map((o,c)=>c),r=o=>s[o]===o?o:r(s[o]);for(let o=0;o<n.length;o++)for(let c=0;c<o;c++)n[o].surface!=="table"&&n[c].surface!=="table"&&ug(n[o].polygon,n[c].polygon)&&(s[r(o)]=r(c));const a=new Map;for(let o=0;o<n.length;o++)a.set(r(o),(a.get(r(o))??0)+1);return[...n.map((o,c)=>({...o,contactGroup:(a.get(r(c))??0)>1?`occlusion-${r(c)}`:void 0,exclude:n.slice(0,c).map(l=>l.polygon)}))]}const hg=Yn(1672,941,[{id:"ceramic-coffee-cup",surface:"upright",support:[1268,749],relief:.002,polygon:[[1206,660],[1280,656],[1321,679],[1318,756],[1206,755]]},{id:"brass-microphone",surface:"upright",support:[1427,710],relief:.001,polygon:[[1410,490],[1456,497],[1486,518],[1481,553],[1460,593],[1447,612],[1440,681],[1476,695],[1476,714],[1390,716],[1376,704],[1397,684],[1407,614],[1387,594],[1386,541]]},{id:"headphones-and-reference-folios",surface:"grounded",support:[1539,788],polygon:[[1458,583],[1672,583],[1672,831],[1460,831],[1320,767],[1320,707],[1420,698],[1457,665]]},{id:"amber-bottle",surface:"upright",support:[1328,704],relief:.002,polygon:[[1286,539],[1371,539],[1371,711],[1286,711]]},{id:"open-score-and-record",surface:"table",lift:.003,support:[330,798],polygon:[[0,688],[180,679],[238,705],[475,699],[501,713],[574,710],[667,743],[679,798],[606,831],[0,831]]},{id:"closed-music-folios",surface:"grounded",support:[259,692],polygon:[[98,626],[294,610],[378,620],[378,650],[406,653],[411,674],[400,701],[314,711],[236,707],[96,699]]},{id:"wooden-metronome",surface:"upright",support:[402,682],relief:6e-4,polygon:[[368,490],[391,484],[418,503],[464,685],[347,696],[343,604]]},{id:"record-crate-and-pencil-jar",surface:"grounded",support:[159,694],polygon:[[0,401],[306,422],[306,476],[355,476],[355,638],[315,639],[302,704],[0,705]]},{id:"headphone-cable-and-pencil",surface:"table",support:[1420,855],polygon:[[1160,753],[1672,753],[1672,941],[1149,941]],lift:.001}]),Gs=[[0,796],[16,775],[36,765],[54,773],[67,808],[638,863],[641,851],[660,843],[690,847],[710,860],[725,941],[0,941]].map(([i,e])=>[i/1672,e/941]),fg=Yn(1672,941,[{id:"small-model-blocks",surface:"upright",support:[228,687],polygon:[[187,631],[256,630],[279,653],[278,697],[186,697]]},{id:"porcelain-brush-jar",surface:"upright",support:[278,683],relief:.001,polygon:[[224,478],[344,476],[330,577],[334,642],[320,678],[291,689],[237,675],[224,630]]},{id:"standing-divider",surface:"upright",support:[349,687],polygon:[[341,547],[360,547],[390,693],[307,693],[319,646]]},{id:"rolled-plans-and-file-rack",surface:"grounded",support:[130,677],polygon:[[0,360],[102,368],[128,412],[196,400],[231,437],[231,624],[226,691],[0,705]]},{id:"pencil-cup",surface:"upright",support:[1497,816],relief:.001,polygon:[[1438,615],[1548,615],[1551,813],[1520,827],[1464,820],[1451,784]]},{id:"brass-compass-and-case",surface:"grounded",support:[1382,799],polygon:[[1250,748],[1348,726],[1449,752],[1456,801],[1380,813],[1250,799]]},{id:"architectural-reference-books",surface:"grounded",support:[1330,762],polygon:[[1227,642],[1327,636],[1462,661],[1461,769],[1255,780],[1190,747],[1190,708]]},{id:"wooden-building-study",surface:"grounded",support:[1600,784],polygon:[[1557,620],[1587,614],[1587,567],[1632,568],[1635,622],[1672,609],[1672,799],[1534,770],[1534,644]]},{id:"left-rulers",surface:"table",support:[90,734],lift:.001,polygon:[[0,685],[214,679],[217,721],[0,782]]},{id:"triangle-and-drawing-pencils",surface:"table",support:[618,825],lift:.001,polygon:[[529,734],[723,819],[674,864],[502,865]]},{id:"steel-ruler",surface:"table",support:[1100,900],lift:.001,polygon:[[937,854],[1290,937],[1290,941],[1012,941],[916,895]]}]),dg=Yn(1672,941,[{id:"letter-tray-and-wax",surface:"grounded",support:[426,731],polygon:[[348,693],[405,686],[500,691],[508,724],[469,739],[351,746]]},{id:"left-bound-journals",surface:"grounded",support:[173,728],polygon:[[0,662],[107,651],[197,659],[222,644],[320,647],[333,674],[330,719],[205,731],[176,757],[0,754]]},{id:"correspondence-box",surface:"upright",support:[151,670],polygon:[[16,523],[114,515],[158,531],[251,531],[281,617],[287,672],[0,674],[0,551]]},{id:"brass-candlestick",surface:"upright",support:[324,693],polygon:[[305,562],[345,563],[340,613],[337,673],[351,696],[297,699],[309,666],[309,614]]},{id:"twine-and-wooden-block",surface:"upright",support:[389,696],polygon:[[345,620],[435,618],[438,701],[342,702]]},{id:"gold-pen-and-seal-dish",surface:"table",support:[1435,829],lift:.0015,polygon:[[1280,777],[1406,793],[1502,790],[1588,824],[1579,855],[1482,863],[1276,806]]},{id:"bound-reference-journals",surface:"grounded",support:[1580,832],polygon:[[1492,752],[1584,714],[1672,727],[1672,853],[1542,836],[1474,799]]},{id:"square-inkwell",surface:"upright",support:[1363,783],relief:.0015,polygon:[[1331,672],[1396,672],[1395,702],[1421,719],[1421,784],[1387,795],[1320,788],[1307,763],[1310,721],[1332,703]]},{id:"quill-and-porcelain-holder",surface:"upright",support:[1496,792],relief:.001,polygon:[[1592,512],[1629,510],[1598,564],[1551,624],[1522,654],[1558,658],[1562,752],[1536,802],[1460,804],[1438,775],[1436,650],[1489,651],[1524,583]]}]),pg=Yn(1672,941,[{id:"clockwork-assembly",surface:"grounded",support:[1314,829],polygon:[[1180,723],[1280,722],[1390,730],[1515,783],[1516,863],[1340,879],[1187,828]]},{id:"ceramic-parts-tray",surface:"grounded",support:[1575,843],polygon:[[1500,772],[1598,757],[1658,775],[1660,839],[1560,854],[1492,825]]},{id:"twine-and-brass-tin",surface:"upright",support:[79,737],polygon:[[0,637],[73,638],[88,678],[157,680],[166,735],[85,747],[0,739]]},{id:"compass-and-gear-tray",surface:"grounded",support:[286,724],polygon:[[133,634],[267,639],[274,535],[318,532],[352,663],[431,675],[431,720],[376,738],[97,720]]},{id:"rolled-plans-and-tools",surface:"grounded",support:[135,695],polygon:[[0,419],[42,419],[78,373],[146,373],[191,397],[191,479],[283,477],[295,556],[333,556],[333,696],[0,713]]},{id:"amber-parts-bottle",surface:"upright",support:[1406,744],relief:.0014,polygon:[[1381,605],[1437,605],[1437,647],[1456,671],[1455,746],[1384,757],[1361,733],[1360,671],[1382,647]]},{id:"porcelain-tool-cup",surface:"upright",support:[1494,778],relief:.001,polygon:[[1439,550],[1482,550],[1497,583],[1532,588],[1573,587],[1577,614],[1555,655],[1549,774],[1488,793],[1441,766],[1442,666]]},{id:"magnifying-stand",surface:"upright",support:[1299,735],polygon:[[1240,554],[1261,535],[1312,526],[1347,542],[1362,571],[1352,603],[1329,625],[1320,693],[1358,703],[1368,734],[1320,748],[1238,742],[1237,719],[1284,701],[1282,626],[1250,612],[1233,582]]},{id:"wooden-tool-case",surface:"grounded",support:[1621,777],polygon:[[1555,617],[1598,606],[1672,612],[1672,788],[1539,784],[1538,646]]}]),mg=Yn(941,1672,[{id:"porcelain-coffee-cup",surface:"upright",support:[693,1258],relief:.001,polygon:[[646,1188],[672,1177],[733,1183],[742,1204],[735,1256],[708,1271],[662,1264],[645,1233]]},{id:"headphones-and-folios",surface:"grounded",support:[847,1295],polygon:[[799,1150],[941,1147],[941,1354],[815,1333],[711,1285],[711,1236],[785,1227]]},{id:"brass-microphone",surface:"upright",support:[796,1221],polygon:[[796,1001],[835,1006],[859,1024],[859,1056],[844,1095],[823,1119],[819,1196],[841,1207],[840,1224],[792,1236],[752,1226],[753,1207],[784,1194],[789,1115],[770,1094],[774,1040]]},{id:"amber-bottle",surface:"upright",support:[740,1231],relief:.0013,polygon:[[720,1087],[760,1087],[763,1118],[779,1139],[780,1230],[708,1239],[704,1136],[719,1115]]},{id:"closed-music-books",surface:"grounded",support:[163,1259],polygon:[[38,1206],[112,1186],[256,1203],[261,1235],[282,1240],[283,1275],[232,1285],[39,1265]]},{id:"wooden-metronome",surface:"upright",support:[267,1242],polygon:[[240,1071],[265,1068],[283,1085],[320,1247],[218,1255],[216,1215]]},{id:"record-crate-and-pencils",surface:"grounded",support:[107,1235],polygon:[[0,1018],[177,1020],[178,1070],[225,1070],[215,1194],[198,1251],[0,1260]]}]),gg=Yn(941,1672,[{id:"small-model-blocks",surface:"upright",support:[90,1197],polygon:[[56,1156],[106,1156],[112,1207],[56,1207]]},{id:"brush-jar",surface:"upright",support:[122,1194],relief:.001,polygon:[[69,1010],[169,1009],[158,1091],[164,1111],[161,1175],[141,1199],[88,1203],[69,1168],[70,1101]]},{id:"standing-divider",surface:"upright",support:[183,1165],polygon:[[171,1012],[188,1011],[214,1169],[151,1176],[159,1104]]},{id:"upright-plans-and-rack",surface:"grounded",support:[67,1188],polygon:[[0,878],[28,878],[47,862],[101,861],[109,914],[132,927],[151,974],[151,1181],[119,1204],[0,1204]]},{id:"pencil-cup",surface:"upright",support:[856,1335],relief:.001,polygon:[[802,1149],[895,1147],[900,1207],[914,1218],[918,1314],[899,1346],[835,1352],[811,1331],[806,1232]]},{id:"brass-compass-and-case",surface:"grounded",support:[762,1296],polygon:[[708,1237],[770,1221],[827,1253],[830,1302],[782,1321],[708,1314],[651,1299],[650,1286]]},{id:"architectural-books",surface:"grounded",support:[774,1241],polygon:[[694,1127],[805,1112],[887,1132],[908,1214],[887,1256],[711,1270],[672,1207],[673,1160]]},{id:"wooden-building-study",surface:"grounded",support:[910,1278],polygon:[[839,1113],[884,1111],[884,1031],[926,1035],[928,1138],[941,1139],[941,1310],[828,1270],[821,1173]]}]),_g=Yn(941,1672,[{id:"left-bound-journals",surface:"grounded",support:[110,1267],polygon:[[0,1186],[67,1180],[95,1171],[196,1184],[205,1214],[205,1254],[148,1270],[121,1290],[0,1286]]},{id:"brass-wax-dish",surface:"grounded",support:[255,1258],polygon:[[198,1218],[236,1209],[301,1215],[311,1234],[300,1254],[267,1268],[209,1261]]},{id:"wax-sticks",surface:"table",support:[220,1271],lift:.001,polygon:[[168,1246],[278,1243],[286,1286],[168,1290]]},{id:"wooden-letter-rack",surface:"upright",support:[99,1197],polygon:[[0,1058],[47,1050],[88,1062],[142,1066],[172,1149],[176,1206],[0,1220]]},{id:"brass-candlestick",surface:"upright",support:[190,1210],polygon:[[175,1082],[207,1082],[205,1123],[201,1188],[213,1217],[173,1220],[181,1176],[181,1121]]},{id:"twine-spool",surface:"upright",support:[232,1214],polygon:[[204,1140],[263,1142],[268,1218],[202,1225]]},{id:"gold-pen-and-seal-dish",surface:"table",support:[832,1363],lift:.001,polygon:[[722,1304],[828,1337],[875,1331],[941,1340],[941,1386],[887,1395],[850,1376],[725,1328]]},{id:"bound-notebooks",surface:"grounded",support:[900,1339],polygon:[[845,1253],[941,1228],[941,1373],[850,1348],[823,1307]]},{id:"square-inkwell",surface:"upright",support:[748,1289],relief:.001,polygon:[[723,1197],[768,1197],[772,1224],[791,1240],[791,1290],[763,1301],[713,1294],[703,1274],[705,1238],[723,1224]]},{id:"quill-and-porcelain-cup",surface:"upright",support:[831,1305],relief:.001,polygon:[[922,1082],[941,1080],[916,1141],[872,1191],[879,1215],[882,1295],[861,1314],[800,1306],[787,1280],[790,1193],[826,1194],[871,1128]]}]),vg=Yn(941,1672,[{id:"gears-and-parts-trays",surface:"grounded",support:[827,1351],polygon:[[698,1276],[743,1253],[803,1263],[941,1270],[941,1390],[836,1383],[770,1364],[698,1329]]},{id:"twine-and-brass-tin",surface:"upright",support:[58,1288],polygon:[[0,1186],[57,1186],[67,1227],[111,1230],[131,1253],[126,1299],[43,1298],[0,1284]]},{id:"divider-and-gear-tray",surface:"grounded",support:[208,1268],polygon:[[117,1191],[196,1175],[196,1103],[229,1101],[254,1219],[287,1230],[290,1269],[244,1291],[83,1256]]},{id:"rolled-plans-and-tools",surface:"grounded",support:[104,1228],polygon:[[0,1019],[43,1017],[61,986],[112,986],[136,1023],[139,1059],[208,1067],[214,1152],[191,1225],[110,1256],[0,1250]]},{id:"amber-bottle",surface:"upright",support:[777,1268],relief:.001,polygon:[[755,1160],[795,1160],[798,1190],[811,1203],[813,1268],[798,1282],[758,1283],[741,1269],[740,1207],[756,1190]]},{id:"porcelain-tool-cup",surface:"upright",support:[854,1290],relief:.001,polygon:[[818,1116],[843,1110],[855,1150],[878,1146],[907,1148],[910,1177],[888,1202],[895,1276],[878,1301],[822,1301],[807,1269],[808,1190]]},{id:"magnifying-stand",surface:"upright",support:[702,1255],polygon:[[663,1081],[684,1061],[717,1057],[742,1079],[751,1106],[738,1139],[716,1157],[717,1229],[750,1244],[748,1263],[710,1272],[661,1264],[656,1247],[687,1231],[689,1155],[667,1139],[659,1116]]},{id:"wooden-parts-box",surface:"grounded",support:[925,1282],polygon:[[890,1153],[941,1157],[941,1309],[891,1293],[887,1191]]}]),xg=new Map([["music-desktop",{layers:hg,keep:Gs,tableHorizon:.735,safeZone:[.43,.45,.77,.87]}],["drafting-desktop",{layers:fg,keep:Gs,tableHorizon:.735,safeZone:[.43,.45,.75,.87]}],["writing-desktop",{layers:dg,keep:Gs,tableHorizon:.755,safeZone:[.43,.44,.75,.87]}],["workbench-desktop",{layers:pg,keep:Gs,tableHorizon:.75,safeZone:[.43,.44,.73,.87]}],["music-portrait",{layers:mg,tableHorizon:.71,safeZone:[.26,.47,.72,.84]}],["drafting-portrait",{layers:gg,tableHorizon:.705,safeZone:[.26,.47,.72,.84]}],["writing-portrait",{layers:_g,tableHorizon:.71,safeZone:[.26,.47,.73,.85]}],["workbench-portrait",{layers:vg,tableHorizon:.71,safeZone:[.26,.47,.71,.84]}]]);function Mg(i,e){const t=["music","drafting","writing","workbench"][i-1];if(!t)return;const n=`${t}-${e?"portrait":"desktop"}`,s=xg.get(n);if(s)return{source:`parallax/${n}-source`,clean:`parallax/${n}-clean`,cutouts:`parallax/${n}-mask`,...s}}const Sg="varying vec2 v_uv;void main(){v_uv=vec2((position.x+1.0)*.5,(position.y+1.0)*.5);gl_Position=vec4(position.xy,0.0,1.0);}",yg=`varying vec2 v_uv;uniform sampler2D u_world;uniform sampler2D u_book;uniform float u_inBook;
vec3 srgb(vec3 c){return mix(c*12.92,1.055*pow(max(c,vec3(0)),vec3(1.0/2.4))-.055,step(vec3(.0031308),c));}
void main(){gl_FragColor=vec4(u_inBook>.5?srgb(texture2D(u_book,v_uv).rgb):texture2D(u_world,v_uv).rgb,1.0);}`;class Eg{constructor(e,t,n){this.canvas=e,this.invalidate=t,this.fail=n,this.renderer=new G0({canvas:e,antialias:!0,alpha:!1,powerPreference:"default"}),this.renderer.outputColorSpace=rs,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ji,this.renderer.debug.onShaderError=(s,r)=>{console.error("Atelier shader compilation failed:",s.getProgramInfoLog(r)),queueMicrotask(()=>{this.disposed||this.fail()})},this.material=new zt({vertexShader:Sg,fragmentShader:yg,depthTest:!1,depthWrite:!1,uniforms:{u_book:{value:this.bookImage.texture},u_world:{value:this.world.texture},u_inBook:{value:1}}}),this.scene.add(new ut(this.geometry,this.material))}canvas;invalidate;fail;renderer;stage;stages=[];stageRequests=new Map;surfaces=[];book;deskRequests=new Map;readyDesks=new Set;prefetched=new Set;surfaceRequest;initialized=!1;warmupTimer;surfacesReady=!1;bitmaps=[];world=new Bt(1,1);sketch=new Bt(1,1);bookImage=new Bt(1,1);beforeWorld=new Bt(1,1);beforeSketch=new Bt(1,1);scene=new eo;camera=new ar(-1,1,1,-1,0,1);geometry=new Pt(2,2);material;pictures=new Map;pending=new Map;textures=[];textureRequests=new Map;width=0;height=0;lastKey="";stageKey="";sketchKey="";beforeKey="";beforeSketchKey="";renderAspect=0;disposed=!1;pendingFrame="";layout=null;texture(e){let t=this.textureRequests.get(e);if(!t){const n=e==="atelier-cover"||e==="grimoire-table"||e.startsWith("theatre-")||e==="anime-page-scene",s=new Image;s.decoding="async",s.src=Wc("images/"+e+".webp"),t=s.decode().then(async()=>{let r=s;if(typeof createImageBitmap=="function")try{r=await createImageBitmap(s,{imageOrientation:n?"flipY":"from-image",premultiplyAlpha:"none",colorSpaceConversion:"none"})}catch{}if(this.disposed)throw r!==s&&r.close(),new Error("Disposed");r!==s&&this.bitmaps.push(r);const a=new Lt(r);return a.flipY=!1,e.endsWith("-mask")&&(a.generateMipmaps=!1,a.minFilter=a.magFilter=Et),a.needsUpdate=!0,this.textures.push(a),e!=="atelier-cover"&&e!=="grimoire-table"&&this.renderer.initTexture(a),a}),this.textureRequests.set(e,t)}return t}async init(){const[e,t]=await Promise.all([this.texture("atelier-cover"),this.texture("grimoire-table")]);this.disposed||(this.book=new cg(e,this.sketch.texture,this.world.texture,t),this.resize(),this.book.update(0,this.width/this.height,this.height,0,0,0,Math.max(this.width/this.height,ii)),await this.renderer.compileAsync(this.book.scene,this.book.camera),!this.disposed&&(await this.renderer.compileAsync(this.scene,this.camera),!this.disposed&&(this.initialized=!0,this.warmupTimer=setTimeout(()=>{this.disposed||this.activateStage(this.width/this.height<.8?1:0)},100))))}activateStage(e){this.prepareStage(e).then(t=>{!this.disposed&&(this.width/this.height<.8?1:0)===e&&(this.stage=t,this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.invalidate())}).catch(()=>{this.disposed||this.fail()})}prepareSurfaces(){this.surfaceRequest||(this.surfaceRequest=Promise.all(["theatre-paper","theatre-facade","theatre-roof","theatre-foil","anime-page-scene"].map(e=>this.texture(e))).then(async e=>{if(!this.disposed){this.surfaces=e,this.stages.forEach(t=>t?.setMaterials(this.surfaces));for(const t of this.stages){if(this.disposed)return;t&&await this.renderer.compileAsync(t.scene,t.camera)}this.disposed||(this.surfacesReady=!0,this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.invalidate())}}).catch(()=>{this.disposed||this.fail()}))}prepareStage(e){let t=this.stageRequests.get(e);if(!t){const n=e?["atelier-portrait-clean","atelier-portrait-sketch","atelier-portrait-foreground"]:["atelier-clean","atelier-clean-sketch","atelier-foreground"];t=Promise.all([Promise.all(n.map(s=>this.texture(s))),this.prepare(0)]).then(async([s])=>{if(this.disposed)throw new Error("Disposed");const r=this.pictures.get(0),a=new rg(s[0],s[1],s[2],r.color,r.sketch,!!e);if(this.surfaces.length&&a.setMaterials(this.surfaces),await this.renderer.compileAsync(a.scene,a.camera),this.disposed)throw a.dispose(),new Error("Disposed");return this.stages[e]=a,a}),this.stageRequests.set(e,t)}return t}performanceReady(e){return this.surfacesReady&&(e===0||this.readyDesks.has(`${this.width/this.height<.8?1:0}:${e}`))&&(this.stage?.performanceReady(e)??!1)}prepareDesk(e,t){if(e===0)return Promise.resolve();const n=`${t}:${e}`;let s=this.deskRequests.get(n);if(!s){const r=Mg(e,!!t);if(!r)return Promise.reject(new Error("Missing desk composition: "+n));s=Promise.all([this.prepareStage(t),this.texture(r.source),this.texture(r.clean),this.texture(r.cutouts),r.shadows?this.texture(r.shadows):Promise.resolve(void 0)]).then(async([a,o,c,l,h])=>{this.disposed||(a.setDeskComposition(e,{...r,source:o,clean:c,cutouts:l,shadows:h}),await this.renderer.compileAsync(a.scene,a.camera),!this.disposed&&(this.readyDesks.add(n),this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.invalidate()))}),this.deskRequests.set(n,s)}return s}prepare(e){let t=this.pending.get(e);return t||(t=Promise.all([this.texture(To[e].image),this.texture(To[e].image+"-sketch")]).then(([n,s])=>{this.pictures.set(e,{color:n,sketch:s})}),this.pending.set(e,t)),t}resize(){const e=innerWidth,t=innerHeight;if(e===this.width&&t===this.height)return;this.width=e,this.height=t;const n=e/t<.8?1:0;this.stages[n]?this.stage=this.stages[n]:this.initialized&&this.activateStage(n),this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.renderAspect=0;const s=Math.min(devicePixelRatio||1,1.4,Math.sqrt(135e4/(e*t)));this.renderer.setPixelRatio(s),this.renderer.setSize(e,t,!1);for(const r of[this.bookImage,this.world,this.sketch,this.beforeWorld,this.beforeSketch])r.setSize(Math.round(e*s),Math.round(t*s))}draw(e,t=0,n=0,s){if(this.disposed||!this.book)return null;if(e.kind==="opening"&&e.book<1e-6)return this.lastKey!=="closed-cover"&&(this.book.update(0,this.width/this.height,this.height,0,0,0,Math.max(this.width/this.height,ii)),this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.setRenderTarget(this.bookImage),this.renderer.clear(),this.book.render(this.renderer),this.renderer.setRenderTarget(null),this.material.uniforms.u_inBook.value=1,this.renderer.render(this.scene,this.camera),this.canvas.style.opacity="1",Object.assign(this.canvas.dataset,{depth:"0.000",cameraX:"0.000",backClose:"0.000",immersion:"0.000",leaf:"0.0000",spread:"0"}),this.layout=Ao(this.width,this.height),this.lastKey="closed-cover"),this.layout;if(!this.stages[this.width/this.height<.8?1:0])return null;const r=this.width/this.height<.8?1:0,a=M=>M===0||this.readyDesks.has(`${r}:${M}`);if(!this.pictures.has(e.index)||!this.pictures.has(e.from)||!a(e.index)||!a(e.from)){const M=r+":"+e.index+":"+e.from;return M!==this.pendingFrame&&(this.pendingFrame=M,Promise.all([this.prepare(e.index),this.prepare(e.from),this.prepareDesk(e.index,r),this.prepareDesk(e.from,r)]).then(()=>{this.disposed||(this.pendingFrame="",this.invalidate())}).catch(()=>{this.disposed||this.fail()})),null}(e.kind!=="opening"||e.book>.05)&&this.prepareSurfaces();const o=`${r}:${e.index+1}`;e.index<4&&(e.kind!=="opening"||e.immersion>.2)&&!this.prefetched.has(o)&&(this.prefetched.add(o),Promise.all([this.prepare(e.index+1),this.prepareDesk(e.index+1,r)]).catch(()=>{})),this.canvas.style.opacity="1";const c=this.width/this.height,l=e.immersion<.999999,h=e.kind==="turning",d=h&&e.local<.25,u=l&&!r?Math.max(c,ii):c;if(u!==this.renderAspect){const M=Math.min(devicePixelRatio||1,1.4,Math.sqrt(135e4/(this.height*this.height*u))),E=Math.round(this.height*M),v=Math.round(E*u);for(const y of[this.world,this.sketch,this.beforeWorld,this.beforeSketch])y.setSize(v,E);this.renderAspect=u,this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.lastKey=""}const f=t*e.immersion,g=n*e.immersion,S=s?[s.index,s.progress.toFixed(5),s.opacity.toFixed(4),s.departure.toFixed(5)].join(":"):"none",m=[e.kind,e.index,e.local.toFixed(5),e.turn.toFixed(5),e.paint.toFixed(4),e.book.toFixed(4),e.closing.toFixed(4),e.immersion.toFixed(5),e.depth.toFixed(4),f.toFixed(4),g.toFixed(4),S].join(":");if(m===this.lastKey)return this.layout;this.lastKey=m;const p=(M,E,v,y,w)=>{const A=w?this.beforeWorld:this.world,_=w?this.beforeSketch:this.sketch,T=this.pictures.get(M),R=s?.index===M?s:void 0,D=[M,E.toFixed(4),v.toFixed(4),y.toFixed(4),u.toFixed(5),R?S:"none"].join(":"),F=w?this.beforeKey:this.stageKey,N=w?this.beforeSketchKey:this.sketchKey;(D!==F||l&&D!==N)&&(this.stage.setRealm(T.color,T.sketch,M),this.stage.update(E,v,y,u,c),this.stage.setPerformance(R,M),D!==F&&(this.renderer.setRenderTarget(A),this.renderer.clear(),this.stage.render(this.renderer),w?this.beforeKey=D:this.stageKey=D),l&&D!==N&&(this.renderer.setRenderTarget(_),this.renderer.clear(),this.stage.render(this.renderer,!0),w?this.beforeSketchKey=D:this.sketchKey=D))};if(h&&p(e.from,d?e.depth:0,d?f:0,d?g:0,!0),p(e.index,d?0:e.depth,d?0:f,d?0:g,!1),l){const M={color:h?this.beforeWorld.texture:this.world.texture,sketch:h?this.beforeSketch.texture:this.sketch.texture};this.book.setImages(M,{color:this.world.texture,sketch:this.sketch.texture},h?1:e.paint,e.paint,e.turn,h||e.kind==="opening");const E=e.kind==="opening"?0:e.kind==="closing"||e.kind==="end"?1:h?(e.from+e.turn)/5:e.index/5;this.book.update(e.book,c,this.height,e.closing,E,e.immersion,u),this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.setRenderTarget(this.bookImage),this.renderer.clear(),this.book.render(this.renderer)}return this.renderer.setRenderTarget(null),this.material.uniforms.u_inBook.value=l?1:0,this.material.uniforms.u_world.value=d?this.beforeWorld.texture:this.world.texture,this.renderer.render(this.scene,this.camera),this.layout={...Ao(this.width,this.height),projection:this.stage.projection(e.index,this.width,this.height)},this.canvas.dataset.depth=e.depth.toFixed(3),this.canvas.dataset.cameraX=(f*.75*e.depth).toFixed(3),this.canvas.dataset.backClose=e.closing.toFixed(3),this.canvas.dataset.immersion=e.immersion.toFixed(3),this.canvas.dataset.leaf=e.turn.toFixed(4),this.canvas.dataset.spread=String(d?e.from:e.index),this.layout}dispose(){if(!this.disposed){this.disposed=!0,clearTimeout(this.warmupTimer);for(const e of this.stages)e?.dispose();this.book?.dispose(),this.geometry.dispose(),this.material.dispose();for(const e of[this.world,this.sketch,this.bookImage,this.beforeWorld,this.beforeSketch])e.dispose();for(const e of this.textures)e.dispose();for(const e of this.bitmaps)e.close();this.renderer.dispose()}}}export{Eg as JourneyRenderer};
