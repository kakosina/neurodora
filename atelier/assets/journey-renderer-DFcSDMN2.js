import{s as Be,a as Hc,C as Eo,w as wo}from"./index-Dn8xNP9i.js";const Ha="186",Vc=0,To=1,Wc=2,Zi=1,Xc=2,qi=3,Wn=0,Vt=1,wt=2,Cn=0,$i=1,Ao=2,Co=3,Ro=4,qc=5,Ei=100,Yc=101,Kc=102,Zc=103,$c=104,Jc=200,Qc=201,jc=202,eu=203,kl=204,Gl=205,tu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,cu=214,$r=0,Jr=1,Qr=2,es=3,jr=4,ea=5,ta=6,na=7,Hl=0,uu=1,hu=2,_n=0,Vl=1,Wl=2,Xl=3,ql=4,Yl=5,Kl=6,Zl=7,$l=300,ni=301,Pi=302,cr=303,ur=304,ir=306,Xs=1e3,An=1001,qs=1002,Ut=1003,fu=1004,fs=1005,Et=1006,hr=1007,jn=1008,Zt=1009,Jl=1010,Ql=1011,ts=1012,Va=1013,vn=1014,mn=1015,xn=1016,Wa=1017,Xa=1018,ns=1020,jl=35902,ec=35899,tc=1021,nc=1022,ln=1023,Ln=1026,ei=1027,ic=1028,qa=1029,ii=1030,Ya=1031,Ka=1033,ks=33776,Gs=33777,Hs=33778,Vs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ua=37488,ha=37489,Ys=37490,fa=37491,da=37808,pa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,Ma=37815,Sa=37816,ya=37817,ba=37818,Ea=37819,wa=37820,Ta=37821,Aa=36492,Ca=36494,Ra=36495,Pa=36283,La=36284,Ks=36285,Da=36286,du=3200,Ua=0,pu=1,Vn="",Rt="srgb",is="srgb-linear",Zs="linear",lt="srgb",fr=7680,mu=519,gu=512,_u=513,vu=514,Za=515,xu=516,Mu=517,$a=518,Su=519,yu=35044,Po="300 es",gn=2e3,ss=2001;function bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eu(){const i=$s("canvas");return i.style.display="block",i}const Lo={};function Do(...i){const e="THREE."+i.shift();console.log(e,...i)}function sc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=sc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=sc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ci(...i){const e=i.join(" ");e in Lo||(Lo[e]=!0,Ve(...i))}function wu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Tu={[$r]:Jr,[Qr]:ta,[jr]:na,[es]:ea,[Jr]:$r,[ta]:Qr,[na]:jr,[ea]:es};class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,Ia=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Au(i,e){return(i%e+e)%e}function pr(i,e,t){return(1-t)*i+t*e}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lo=class lo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lo.prototype.isVector2=!0;let ce=lo;class Un{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*S;m<0&&(u=-u,f=-f,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+S*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const co=class co{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};co.prototype.isVector3=!0;let L=co;const mr=new L,Uo=new Un,uo=class uo{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],S=s[0],m=s[3],p=s[6],M=s[1],E=s[4],_=s[7],b=s[2],w=s[5],A=s[8];return r[0]=a*S+o*M+c*b,r[3]=a*m+o*E+c*w,r[6]=a*p+o*_+c*A,r[1]=l*S+h*M+d*b,r[4]=l*m+h*E+d*w,r[7]=l*p+h*_+d*A,r[2]=u*S+f*M+g*b,r[5]=u*m+f*E+g*w,r[8]=u*p+f*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gr.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uo.prototype.isMatrix3=!0;let Xe=uo;const gr=new Xe,Io=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cu(){const i={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[is]:{primaries:e,whitePoint:n,transfer:Zs,toXYZ:Io,fromXYZ:No,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Io,fromXYZ:No,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const Qe=Cu();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class Ru{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ci===void 0&&(ci=$s("canvas")),ci.width=e.width,ci.height=e.height;const s=ci.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pu=0;class Ja{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_r(s[a].image)):r.push(_r(s[a]))}else r=_r(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Lu=0;const vr=new L;class Lt extends ri{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=An,s=An,r=Et,a=jn,o=ln,c=Zt,l=Lt.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Ui(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vr).x}get height(){return this.source.getSize(vr).y}get depth(){return this.source.getSize(vr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=$l;Lt.DEFAULT_ANISOTROPY=1;const ho=class ho{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,_=(f+1)/2,b=(p+1)/2,w=(h+u)/4,A=(d+S)/4,v=(g+m)/4;return E>_&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ho.prototype.isVector4=!0;let ht=ho;class Du extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Lt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ja(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bt extends Du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rc extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uu extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nr=class nr{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,S=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,S=l*d;t[0]=u+S*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,S=l*d;t[0]=u-S*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,S=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+S,t[1]=c*d,t[5]=S*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=S-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-S*d}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+S,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iu,e,Nu)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),On.crossVectors(n,Xt),On.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),On.crossVectors(n,Xt)),On.normalize(),ds.crossVectors(Xt,On),s[0]=On.x,s[4]=ds.x,s[8]=Xt.x,s[1]=On.y,s[5]=ds.y,s[9]=Xt.y,s[2]=On.z,s[6]=ds.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],S=n[6],m=n[10],p=n[14],M=n[3],E=n[7],_=n[11],b=n[15],w=s[0],A=s[4],v=s[8],T=s[12],R=s[1],D=s[5],N=s[9],U=s[13],P=s[2],F=s[6],k=s[10],W=s[14],Q=s[3],q=s[7],K=s[11],j=s[15];return r[0]=a*w+o*R+c*P+l*Q,r[4]=a*A+o*D+c*F+l*q,r[8]=a*v+o*N+c*k+l*K,r[12]=a*T+o*U+c*W+l*j,r[1]=h*w+d*R+u*P+f*Q,r[5]=h*A+d*D+u*F+f*q,r[9]=h*v+d*N+u*k+f*K,r[13]=h*T+d*U+u*W+f*j,r[2]=g*w+S*R+m*P+p*Q,r[6]=g*A+S*D+m*F+p*q,r[10]=g*v+S*N+m*k+p*K,r[14]=g*T+S*U+m*W+p*j,r[3]=M*w+E*R+_*P+b*Q,r[7]=M*A+E*D+_*F+b*q,r[11]=M*v+E*N+_*k+b*K,r[15]=M*T+E*U+_*W+b*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],M=c*f-l*u,E=o*f-l*d,_=o*u-c*d,b=a*f-l*h,w=a*u-c*h,A=a*d-o*h;return t*(S*M-m*E+p*_)-n*(g*M-m*b+p*w)+s*(g*E-S*b+p*A)-r*(g*_-S*w+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],M=t*o-n*a,E=t*c-s*a,_=t*l-r*a,b=n*c-s*o,w=n*l-r*o,A=s*l-r*c,v=h*S-d*g,T=h*m-u*g,R=h*p-f*g,D=d*m-u*S,N=d*p-f*S,U=u*p-f*m,P=M*U-E*N+_*D+b*R-w*T+A*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=(o*U-c*N+l*D)*F,e[1]=(s*N-n*U-r*D)*F,e[2]=(S*A-m*w+p*b)*F,e[3]=(u*w-d*A-f*b)*F,e[4]=(c*R-a*U-l*T)*F,e[5]=(t*U-s*R+r*T)*F,e[6]=(m*_-g*A-p*E)*F,e[7]=(h*A-u*_+f*E)*F,e[8]=(a*N-o*R+l*v)*F,e[9]=(n*R-t*N-r*v)*F,e[10]=(g*w-S*_+p*M)*F,e[11]=(d*_-h*w-f*M)*F,e[12]=(o*T-a*D-c*v)*F,e[13]=(t*D-n*T+s*v)*F,e[14]=(S*E-g*b-m*M)*F,e[15]=(h*b-d*E+u*M)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,S=a*h,m=a*d,p=o*d,M=c*l,E=c*h,_=c*d,b=n.x,w=n.y,A=n.z;return s[0]=(1-(S+p))*b,s[1]=(f+_)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(m-M)*A,s[10]=(1-(u+S))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),c=ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);const l=1/a,h=1/o,d=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,S;if(c)g=r/(a-r),S=a*r/(a-r);else if(o===gn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ss)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,S;if(c)g=1/(a-r),S=a/(a-r);else if(o===gn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===ss)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nr.prototype.isMatrix4=!0;let _t=nr;const ui=new L,nn=new _t,Iu=new L(0,0,0),Nu=new L(1,1,1),On=new L,ds=new L,Xt=new L,Fo=new _t,Oo=new Un;class Dn{constructor(e=0,t=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fu=0;const Bo=new L,hi=new Un,Sn=new _t,ps=new L,Bi=new L,Ou=new L,Bu=new Un,zo=new L(1,0,0),ko=new L(0,1,0),Go=new L(0,0,1),Ho={type:"added"},zu={type:"removed"},fi={type:"childadded",child:null},xr={type:"childremoved",child:null};class kt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new L,t=new Dn,n=new Un,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(ko,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Bo.copy(e).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(ko,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Bi,ps,this.up):Sn.lookAt(ps,Bi,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(Sn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ho),fi.child=e,this.dispatchEvent(fi),fi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),xr.child=e,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ho),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ku={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Sr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Au(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sr(a,r,e+1/3),this.g=Sr(a,r,e),this.b=Sr(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Qe.workingToColorSpace(Ft.copy(this),e),Math.round(Je(Ft.r*255,0,255))*65536+Math.round(Je(Ft.g*255,0,255))*256+Math.round(Je(Ft.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Rt){Qe.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(ms);const n=pr(Bn.h,ms.h,t),s=pr(Bn.s,ms.s,t),r=pr(Bn.l,ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new je;je.NAMES=oc;class Qa extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sn=new L,yn=new L,yr=new L,bn=new L,di=new L,pi=new L,Vo=new L,br=new L,Er=new L,wr=new L,Tr=new ht,Ar=new ht,Cr=new ht;class on{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),yn.subVectors(n,t),yr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(yn),c=sn.dot(yr),l=yn.dot(yn),h=yn.dot(yr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Tr.setScalar(0),Ar.setScalar(0),Cr.setScalar(0),Tr.fromBufferAttribute(e,t),Ar.fromBufferAttribute(e,n),Cr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tr,r.x),a.addScaledVector(Ar,r.y),a.addScaledVector(Cr,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),yn.subVectors(e,t),sn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),pi.subVectors(r,n),br.subVectors(e,n);const c=di.dot(br),l=pi.dot(br);if(c<=0&&l<=0)return t.copy(n);Er.subVectors(e,s);const h=di.dot(Er),d=pi.dot(Er);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(di,a);wr.subVectors(e,r);const f=di.dot(wr),g=pi.dot(wr);if(g>=0&&f<=g)return t.copy(r);const S=f*l-c*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(pi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Vo.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Vo,o);const p=1/(m+S+u);return a=S*p,o=u*p,t.copy(n).addScaledVector(di,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ii{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),_s.subVectors(this.max,zi),mi.subVectors(e.a,zi),gi.subVectors(e.b,zi),_i.subVectors(e.c,zi),zn.subVectors(gi,mi),kn.subVectors(_i,gi),Yn.subVectors(mi,_i);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-Yn.z,Yn.y,zn.z,0,-zn.x,kn.z,0,-kn.x,Yn.z,0,-Yn.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-Yn.y,Yn.x,0];return!Rr(t,mi,gi,_i,_s)||(t=[1,0,0,0,1,0,0,0,1],!Rr(t,mi,gi,_i,_s))?!1:(vs.crossVectors(zn,kn),t=[vs.x,vs.y,vs.z],Rr(t,mi,gi,_i,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,gs=new Ii,mi=new L,gi=new L,_i=new L,zn=new L,kn=new L,Yn=new L,zi=new L,_s=new L,vs=new L,Kn=new L;function Rr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),c=e.dot(Kn),l=t.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const yt=new L,xs=new ce;let Gu=0;class Pn extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lc extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cc extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hu=new Ii,ki=new L,Pr=new L;class ja{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Pr)),this.expandByPoint(ki.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vu=0;const Jt=new _t,Lr=new kt,vi=new L,qt=new Ii,Gi=new Ii,Ct=new L;class Dt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(qt.min,Gi.min),qt.expandByPoint(Ct),Ct.addVectors(qt.max,Gi.max),qt.expandByPoint(Ct)):(qt.expandByPoint(Gi.min),qt.expandByPoint(Gi.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(e,l),Ct.add(vi)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new L,c[v]=new L;const l=new L,h=new L,d=new L,u=new ce,f=new ce,g=new ce,S=new L,m=new L;function p(v,T,R){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[v].add(S),o[T].add(S),o[R].add(S),c[v].add(m),c[T].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,T=M.length;v<T;++v){const R=M[v],D=R.start,N=R.count;for(let U=D,P=D+N;U<P;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const E=new L,_=new L,b=new L,w=new L;function A(v){b.fromBufferAttribute(s,v),w.copy(b);const T=o[v];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(w,T);const D=_.dot(c[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,T=M.length;v<T;++v){const R=M[v],D=R.start,N=R.count;for(let U=D,P=D+N;U<P;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Pn(u,h,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dr=new L,Wu=new L,Xu=new Xe;class Hn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Dr.subVectors(n,t).cross(Wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Dr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xu.getNormalMatrix(e),s=this.coplanarPoint(Dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qu=0;class Ni extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=$i,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Gl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wn=new L,Ur=new L,Ms=new L,Ss=new L;class Yu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ur.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(Ur);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=Ss.dot(this.direction),c=-Ss.dot(Ms),l=Ss.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ur).addScaledVector(Ms,u),f}intersectSphere(e,t){if(e.radius<0)return null;wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,_=Math.abs(c),b=Math.abs(l),w=Math.abs(h);let A,v,T,R,D,N,U,P,F,k,W,Q;if(_>=b&&_>=w?(T=c,N=d,F=g,Q=p,c>=0?(A=l,v=h,R=u,D=f,U=S,P=m,k=M,W=E):(A=h,v=l,R=f,D=u,U=m,P=S,k=E,W=M)):b>=w?(T=l,N=u,F=S,Q=M,l>=0?(A=h,v=c,R=f,D=d,U=m,P=g,k=E,W=p):(A=c,v=h,R=d,D=f,U=g,P=m,k=p,W=E)):(T=h,N=f,F=m,Q=E,h>=0?(A=c,v=l,R=d,D=u,U=g,P=S,k=p,W=M):(A=l,v=c,R=u,D=d,U=S,P=g,k=M,W=p)),T===0)return null;const q=A/T,K=v/T,j=1/T,fe=R-q*N,ge=D-K*N,ae=U-q*F,re=P-K*F,de=k-q*Q,V=W-K*Q,Z=de*re-V*ae,oe=fe*V-ge*de,Ae=ae*ge-re*fe;if(s){if(Z<0||oe<0||Ae<0)return null}else if((Z<0||oe<0||Ae<0)&&(Z>0||oe>0||Ae>0))return null;const _e=Z+oe+Ae;if(_e===0)return null;const Ie=j*(Z*N+oe*F+Ae*Q);return(_e>0?Ie<0:Ie>0)?null:this.at(Ie/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eo extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wo=new _t,Zn=new Yu,ys=new ja,Xo=new L,bs=new L,Es=new L,ws=new L,Ir=new L,Ts=new L,qo=new L,As=new L;class ct extends kt{constructor(e=new Dt,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Ir.fromBufferAttribute(d,e),a?Ts.addScaledVector(Ir,h):Ts.addScaledVector(Ir.sub(t),h))}t.add(Ts)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(ys.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(ys,Xo)===null||Zn.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,b=E;_<b;_+=3){const w=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);s=Cs(this,p,e,n,l,h,d,w,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);s=Cs(this,a,e,n,l,h,d,M,E,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,b=E;_<b;_+=3){const w=_,A=_+1,v=_+2;s=Cs(this,p,e,n,l,h,d,w,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const M=m,E=m+1,_=m+2;s=Cs(this,a,e,n,l,h,d,M,E,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ku(i,e,t,n,s,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Wn,o),c===null)return null;As.copy(o),As.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(As);return l<t.near||l>t.far?null:{distance:l,point:As.clone(),object:i}}function Cs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,bs),i.getVertexPosition(c,Es),i.getVertexPosition(l,ws);const h=Ku(i,e,t,n,bs,Es,ws,qo);if(h){const d=new L;on.getBarycoord(qo,bs,Es,ws,d),s&&(h.uv=on.getInterpolatedAttribute(s,o,c,l,d,new ce)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,c,l,d,new ce)),a&&(h.normal=on.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};on.getNormal(bs,Es,ws,u.normal),h.face=u,h.barycoord=d}return h}class Zu extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ut,h=Ut,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $n=new ja,$u=new ce(.5,.5),Rs=new L;class to{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],E=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-a,f-h,p-g,b-M).normalize(),s[1].setComponents(l+a,f+h,p+g,b+M).normalize(),s[2].setComponents(l+o,f+d,p+S,b+E).normalize(),s[3].setComponents(l-o,f-d,p-S,b-E).normalize(),n)s[4].setComponents(c,u,m,_).normalize(),s[5].setComponents(l-c,f-u,p-m,b-_).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-_).normalize(),t===gn)s[5].setComponents(l+c,f+u,p+m,b+_).normalize();else if(t===ss)s[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=$u.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uc extends Lt{constructor(e=[],t=ni,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rs extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class as extends Lt{constructor(e,t,n=vn,s,r,a,o=Ut,c=Ut,l,h=Ln,d=1){if(h!==Ln&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ju extends as{constructor(e,t=vn,n=ni,s,r,a=Ut,o=Ut,c,l=Ln){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hc extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ai extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function g(S,m,p,M,E,_,b,w,A,v,T){const R=_/A,D=b/v,N=_/2,U=b/2,P=w/2,F=A+1,k=v+1;let W=0,Q=0;const q=new L;for(let K=0;K<k;K++){const j=K*D-U;for(let fe=0;fe<F;fe++){const ge=fe*R-N;q[S]=ge*M,q[m]=j*E,q[p]=P,l.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(fe/A),d.push(1-K/v),W+=1}}for(let K=0;K<v;K++)for(let j=0;j<A;j++){const fe=u+j+F*K,ge=u+j+F*(K+1),ae=u+(j+1)+F*(K+1),re=u+(j+1)+F*K;c.push(fe,ge,re),c.push(ge,ae,re),Q+=6}o.addGroup(f,Q,T),f+=Q,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tn extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const S=[],m=n/2;let p=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function M(){const _=new L,b=new L;let w=0;const A=(t-e)/n;for(let v=0;v<=r;v++){const T=[],R=v/r,D=R*(t-e)+e;for(let N=0;N<=s;N++){const U=N/s,P=U*c+o,F=Math.sin(P),k=Math.cos(P);b.x=D*F,b.y=-R*n+m,b.z=D*k,d.push(b.x,b.y,b.z),_.set(F,A,k).normalize(),u.push(_.x,_.y,_.z),f.push(U,1-R),T.push(g++)}S.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const R=S[T][v],D=S[T+1][v],N=S[T+1][v+1],U=S[T][v+1];(e>0||T!==0)&&(h.push(R,D,U),w+=3),(t>0||T!==r-1)&&(h.push(D,N,U),w+=3)}l.addGroup(p,w,0),p+=w}function E(_){const b=g,w=new ce,A=new L;let v=0;const T=_===!0?e:t,R=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;const D=g;for(let N=0;N<=s;N++){const P=N/s*c+o,F=Math.cos(P),k=Math.sin(P);A.x=T*k,A.y=m*R,A.z=T*F,d.push(A.x,A.y,A.z),u.push(0,R,0),w.x=F*.5+.5,w.y=k*.5*R+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){const U=b+N,P=D+N;_===!0?h.push(P,P+1,U):h.push(P+1,P,U),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ji extends Tn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ji(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class no extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new L,_=new L,b=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],E),f(t[w+1],_),f(t[w+2],b),c(E,_,b,M)}function c(M,E,_,b){const w=b+1,A=[];for(let v=0;v<=w;v++){A[v]=[];const T=M.clone().lerp(_,v/w),R=E.clone().lerp(_,v/w),D=w-v;for(let N=0;N<=D;N++)N===0&&v===w?A[v][N]=T:A[v][N]=T.clone().lerp(R,N/D)}for(let v=0;v<w;v++)for(let T=0;T<2*(w-v)-1;T++){const R=Math.floor(T/2);T%2===0?(u(A[v][R+1]),u(A[v+1][R]),u(A[v][R])):(u(A[v][R+1]),u(A[v+1][R+1]),u(A[v+1][R]))}}function l(M){const E=new L;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(M),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){const M=new L;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const _=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(_,1-b)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const E=a[M+0],_=a[M+2],b=a[M+4],w=Math.max(E,_,b),A=Math.min(E,_,b);w>.9&&A<.1&&(E<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){const _=M*3;E.x=e[_+0],E.y=e[_+1],E.z=e[_+2]}function g(){const M=new L,E=new L,_=new L,b=new L,w=new ce,A=new ce,v=new ce;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),b.copy(M).add(E).add(_).divideScalar(3);const D=m(b);S(w,R+0,M,D),S(A,R+2,E,D),S(v,R+4,_,D)}}function S(M,E,_,b){b<0&&M.x===1&&(a[E]=M.x-1),_.x===0&&_.z===0&&(a[E]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.vertices,e.indices,e.radius,e.detail)}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ce:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],a=[],o=new L,c=new _t;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class io extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qu extends io{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function so(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Yo=new L,Ko=new L,Nr=new so,Fr=new so,Or=new so;class Na extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ko.subVectors(s[0],s[1]).add(s[0]),l=Ko);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Nr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,S,m),Fr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,S,m),Or.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(Nr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Fr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Or.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Nr.calc(c),Fr.calc(c),Or.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zo(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ju(i,e){const t=1-i;return t*t*e}function eh(i,e){return 2*(1-i)*i*e}function th(i,e){return i*i*e}function Qi(i,e,t,n){return ju(i,e)+eh(i,t)+th(i,n)}function nh(i,e){const t=1-i;return t*t*t*e}function ih(i,e){const t=1-i;return 3*t*t*i*e}function sh(i,e){return 3*(1-i)*i*i*e}function rh(i,e){return i*i*i*e}function ji(i,e,t,n,s){return nh(i,e)+ih(i,t)+sh(i,n)+rh(i,s)}class fc extends Mn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ji(e,s.x,r.x,a.x,o.x),ji(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ah extends Mn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ji(e,s.x,r.x,a.x,o.x),ji(e,s.y,r.y,a.y,o.y),ji(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dc extends Mn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends Mn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pc extends Mn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qi(e,s.x,r.x,a.x),Qi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mc extends Mn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qi(e,s.x,r.x,a.x),Qi(e,s.y,r.y,a.y),Qi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Zo(o,c.x,l.x,h.x,d.x),Zo(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var Js=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:Na,CubicBezierCurve:fc,CubicBezierCurve3:ah,EllipseCurve:io,LineCurve:dc,LineCurve3:oh,QuadraticBezierCurve:pc,QuadraticBezierCurve3:mc,SplineCurve:gc});class lh extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Js[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Js[s.type]().fromJSON(s))}return this}}class $o extends lh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dc(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new pc(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new fc(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new io(e,t,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fa extends $o{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new $o().fromJSON(s))}return this}}function ch(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=_c(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=ph(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let u=t;u<s;u+=t){const f=i[u],g=i[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return os(r,a,t,o,c,l,0),a}function _c(i,e,t,n,s){let r;if(s===wh(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Jo(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Jo(a/n|0,i[a],i[a+1],r);return r&&Li(r,r.next)&&(cs(r),r=r.next),r}function si(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Li(t,t.next)||xt(t.prev,t,t.next)===0)){if(cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function os(i,e,t,n,s,r,a){if(!i)return;!a&&r&&xh(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?hh(i,n,s,r):uh(i)){e.push(c.i,i.i,l.i),cs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=fh(si(i),e),os(i,e,t,n,s,r,2)):a===2&&dh(i,e,t,n,s,r):os(si(i),e,t,n,s,r,1);break}}}function uh(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Yi(s,o,r,c,a,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hh(i,e,t,n){const s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),S=Math.max(o,c,l),m=Math.max(h,d,u),p=Oa(f,g,e,t,n),M=Oa(S,m,e,t,n);let E=i.prevZ,_=i.nextZ;for(;E&&E.z>=p&&_&&_.z<=M;){if(E.x>=f&&E.x<=S&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Yi(o,h,c,d,l,u,E.x,E.y)&&xt(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Yi(o,h,c,d,l,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=S&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Yi(o,h,c,d,l,u,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Yi(o,h,c,d,l,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function fh(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Li(n,s)&&xc(n,t,t.next,s)&&ls(n,s)&&ls(s,n)&&(e.push(n.i,t.i,s.i),cs(t),cs(t.next),t=i=s),t=t.next}while(t!==i);return si(t)}function dh(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yh(a,o)){let c=Mc(a,o);a=si(a,a.next),c=si(c,c.next),os(a,e,t,n,s,r,0),os(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ph(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=_c(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Sh(l))}s.sort(mh);for(let r=0;r<s.length;r++)t=gh(s[r],t);return t}function mh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function gh(i,e){const t=_h(i,e);if(!t)return e;const n=Mc(t,i);return si(n,n.next),si(t,t.next)}function _h(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Li(i,t))return t;do{if(Li(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&vc(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);ls(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&vh(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function vh(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function xh(i,e,t,n){let s=i;do s.z===0&&(s.z=Oa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mh(s)}function Mh(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Oa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vc(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Yi(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&vc(i,e,t,n,s,r,a,o)}function yh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bh(i,e)&&(ls(i,e)&&ls(e,i)&&Eh(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Li(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Li(i,e){return i.x===e.x&&i.y===e.y}function xc(i,e,t,n){const s=Ls(xt(i,e,t)),r=Ls(xt(i,e,n)),a=Ls(xt(t,n,i)),o=Ls(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ps(i,t,e)||r===0&&Ps(i,n,e)||a===0&&Ps(t,i,n)||o===0&&Ps(t,e,n))}function Ps(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ls(i){return i>0?1:i<0?-1:0}function bh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ls(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Eh(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mc(i,e){const t=Ba(i.i,i.x,i.y),n=Ba(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jo(i,e,t,n){const s=Ba(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ba(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wh(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Th{static triangulate(e,t,n=2){return ch(e,t,n)}}class wi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return wi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Qo(e),jo(n,e);let a=e.length;t.forEach(Qo);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,jo(n,t[c]);const o=Th.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Qo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qs extends Dt{constructor(e=new Fa([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ah;let E,_=!1,b,w,A,v;if(p){E=p.getSpacedPoints(h),_=!0,u=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,ee),w=new L,A=new L,v=new L}u||(m=0,f=0,g=0,S=0);const T=o.extractPoints(l);let R=T.shape;const D=T.holes;if(!wi.isClockWise(R)){R=R.reverse();for(let ee=0,se=D.length;ee<se;ee++){const le=D[ee];wi.isClockWise(le)&&(D[ee]=le.reverse())}}function U(ee){const le=10000000000000001e-36;let ue=ee[0];for(let me=1;me<=ee.length;me++){const ke=me%ee.length,ze=ee[ke],He=ze.x-ue.x,We=ze.y-ue.y,I=He*He+We*We,rt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ue.x),Math.abs(ue.y)),Ze=le*rt*rt;if(I<=Ze){ee.splice(ke,1),me--;continue}ue=ze}}U(R),D.forEach(U);const P=D.length,F=R;for(let ee=0;ee<P;ee++){const se=D[ee];R=R.concat(se)}function k(ee,se,le){return se||it("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,le)}const W=R.length;function Q(ee,se,le){let ue,me,ke;const ze=ee.x-se.x,He=ee.y-se.y,We=le.x-ee.x,I=le.y-ee.y,rt=ze*ze+He*He,Ze=ze*I-He*We;if(Math.abs(Ze)>Number.EPSILON){const C=Math.sqrt(rt),x=Math.sqrt(We*We+I*I),z=se.x-He/C,X=se.y+ze/C,$=le.x-I/x,he=le.y+We/x,pe=(($-z)*I-(he-X)*We)/(ze*I-He*We);ue=z+ze*pe-ee.x,me=X+He*pe-ee.y;const J=ue*ue+me*me;if(J<=2)return new ce(ue,me);ke=Math.sqrt(J/2)}else{let C=!1;ze>Number.EPSILON?We>Number.EPSILON&&(C=!0):ze<-Number.EPSILON?We<-Number.EPSILON&&(C=!0):Math.sign(He)===Math.sign(I)&&(C=!0),C?(ue=-He,me=ze,ke=Math.sqrt(rt)):(ue=ze,me=He,ke=Math.sqrt(rt/2))}return new ce(ue/ke,me/ke)}const q=[];for(let ee=0,se=F.length,le=se-1,ue=ee+1;ee<se;ee++,le++,ue++)le===se&&(le=0),ue===se&&(ue=0),q[ee]=Q(F[ee],F[le],F[ue]);const K=[];let j,fe=q.concat();for(let ee=0,se=P;ee<se;ee++){const le=D[ee];j=[];for(let ue=0,me=le.length,ke=me-1,ze=ue+1;ue<me;ue++,ke++,ze++)ke===me&&(ke=0),ze===me&&(ze=0),j[ue]=Q(le[ue],le[ke],le[ze]);K.push(j),fe=fe.concat(j)}let ge;if(m===0)ge=wi.triangulateShape(F,D);else{const ee=[],se=[];for(let le=0;le<m;le++){const ue=le/m,me=f*Math.cos(ue*Math.PI/2),ke=g*Math.sin(ue*Math.PI/2)+S;for(let ze=0,He=F.length;ze<He;ze++){const We=k(F[ze],q[ze],ke);oe(We.x,We.y,-me),ue===0&&ee.push(We)}for(let ze=0,He=P;ze<He;ze++){const We=D[ze];j=K[ze];const I=[];for(let rt=0,Ze=We.length;rt<Ze;rt++){const C=k(We[rt],j[rt],ke);oe(C.x,C.y,-me),ue===0&&I.push(C)}ue===0&&se.push(I)}}ge=wi.triangulateShape(ee,se)}const ae=ge.length,re=g+S;for(let ee=0;ee<W;ee++){const se=u?k(R[ee],fe[ee],re):R[ee];_?(A.copy(b.normals[0]).multiplyScalar(se.x),w.copy(b.binormals[0]).multiplyScalar(se.y),v.copy(E[0]).add(A).add(w),oe(v.x,v.y,v.z)):oe(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<W;se++){const le=u?k(R[se],fe[se],re):R[se];_?(A.copy(b.normals[ee]).multiplyScalar(le.x),w.copy(b.binormals[ee]).multiplyScalar(le.y),v.copy(E[ee]).add(A).add(w),oe(v.x,v.y,v.z)):oe(le.x,le.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){const se=ee/m,le=f*Math.cos(se*Math.PI/2),ue=g*Math.sin(se*Math.PI/2)+S;for(let me=0,ke=F.length;me<ke;me++){const ze=k(F[me],q[me],ue);oe(ze.x,ze.y,d+le)}for(let me=0,ke=D.length;me<ke;me++){const ze=D[me];j=K[me];for(let He=0,We=ze.length;He<We;He++){const I=k(ze[He],j[He],ue);_?oe(I.x,I.y+E[h-1].y,E[h-1].x+le):oe(I.x,I.y,d+le)}}}de(),V();function de(){const ee=s.length/3;if(u){let se=0,le=W*se;for(let ue=0;ue<ae;ue++){const me=ge[ue];Ae(me[2]+le,me[1]+le,me[0]+le)}se=h+m*2,le=W*se;for(let ue=0;ue<ae;ue++){const me=ge[ue];Ae(me[0]+le,me[1]+le,me[2]+le)}}else{for(let se=0;se<ae;se++){const le=ge[se];Ae(le[2],le[1],le[0])}for(let se=0;se<ae;se++){const le=ge[se];Ae(le[0]+W*h,le[1]+W*h,le[2]+W*h)}}n.addGroup(ee,s.length/3-ee,0)}function V(){const ee=s.length/3;let se=0;Z(F,se),se+=F.length;for(let le=0,ue=D.length;le<ue;le++){const me=D[le];Z(me,se),se+=me.length}n.addGroup(ee,s.length/3-ee,1)}function Z(ee,se){let le=ee.length;for(;--le>=0;){const ue=le;let me=le-1;me<0&&(me=ee.length-1);for(let ke=0,ze=h+m*2;ke<ze;ke++){const He=W*ke,We=W*(ke+1),I=se+ue+He,rt=se+me+He,Ze=se+me+We,C=se+ue+We;_e(I,rt,Ze,C)}}}function oe(ee,se,le){c.push(ee),c.push(se),c.push(le)}function Ae(ee,se,le){Ie(ee),Ie(se),Ie(le);const ue=s.length/3,me=M.generateTopUV(n,s,ue-3,ue-2,ue-1);et(me[0]),et(me[1]),et(me[2])}function _e(ee,se,le,ue){Ie(ee),Ie(se),Ie(ue),Ie(se),Ie(le),Ie(ue);const me=s.length/3,ke=M.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);et(ke[0]),et(ke[1]),et(ke[3]),et(ke[1]),et(ke[2]),et(ke[3])}function Ie(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function et(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ch(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Js[s.type]().fromJSON(s)),new Qs(n,e.options)}}const Ah={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],S=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-d),new ce(u,1-g),new ce(S,1-p)]:[new ce(o,1-c),new ce(h,1-d),new ce(f,1-g),new ce(m,1-p)]}};function Ch(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ro extends no{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class Pt extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],S=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let E=0;E<l;E++){const _=E*d-r;g.push(_,-M,0),S.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const E=M+l*p,_=M+l*(p+1),b=M+1+l*(p+1),w=M+1+l*p;f.push(E,_,w),f.push(_,b,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(S,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ti extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,u=new L,f=[],g=[],S=[],m=[];for(let p=0;p<=n;p++){const M=[],E=p/n,_=a+E*o,b=e*Math.cos(_),w=Math.sqrt(e*e-b*b);let A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const T=v/t,R=s+T*r;d.x=-w*Math.cos(R),d.y=b,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),m.push(T+A,1-E),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const E=h[p][M+1],_=h[p][M],b=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(E,_,w),(p!==n-1||c<Math.PI)&&f.push(_,b,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(S,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class js extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new L,f=new L,g=new L;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,_=(s+1)*S+m;c.push(p,M,_),c.push(M,E,_)}this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class er extends Dt{constructor(e=new mc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,c=new L,l=new ce;let h=new L;const d=[],u=[],f=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function S(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),p()}function m(E){h=e.getPointAt(E/t,h);const _=a.normals[E],b=a.binormals[E];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,v=Math.sin(A),T=-Math.cos(A);c.x=T*_.x+v*b.x,c.y=T*_.y+v*b.y,c.z=T*_.z+v*b.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let _=1;_<=s;_++){const b=(s+1)*(E-1)+(_-1),w=(s+1)*E+(_-1),A=(s+1)*E+_,v=(s+1)*(E-1)+_;g.push(b,w,v),g.push(w,A,v)}}function M(){for(let E=0;E<=t;E++)for(let _=0;_<=s;_++)l.x=E/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new er(new Js[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Rh extends Ni{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(el(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(el(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Di(i[t]);for(const s in n)e[s]=n[s]}return e}function el(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ph(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Lh={clone:Di,merge:Ht};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ih extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nh extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fh extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Br=new _t,tl=new L,nl=new L;class Oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(tl),nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Br,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ds=new L,Us=new Un,hn=new L;class bc extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ds,Us,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Us,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ds,Us,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Us,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new L,il=new ce,sl=new ce;class Kt extends bc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,il,sl),t.subVectors(sl,il)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sr extends bc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bh extends Oh{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ec extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wc extends yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const xi=-90,Mi=1;class zh extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(xi,Mi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(xi,Mi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(xi,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(xi,Mi,e,t);o.layers=this.layers,this.add(o);const c=new Kt(xi,Mi,e,t);c.layers=this.layers,this.add(c);const l=new Kt(xi,Mi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kh extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fo=class fo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};fo.prototype.isMatrix2=!0;let rl=fo;function al(i,e,t,n){const s=Gh(n);switch(t){case tc:return i*e;case ic:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case ii:return i*e*2/s.components*s.byteLength;case Ya:return i*e*2/s.components*s.byteLength;case nc:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case Ka:return i*e*4/s.components*s.byteLength;case ks:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case la:case ua:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case Ys:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pa:case La:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ks:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gh(i){switch(i){case Zt:case Jl:return{byteLength:1,components:1};case ts:case Ql:case xn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case vn:case Va:case mn:return{byteLength:4,components:1};case jl:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);function Tc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hh(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const S=d[f];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
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
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
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
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,df=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Hf=`uniform sampler2D dfgLUT;
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
}`,Vf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ed=`#if defined( USE_POINTS_UV )
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
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
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
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rd=`float getShadowMask() {
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
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,jd=`#define DISTANCE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#define LAMBERT
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
}`,op=`#define LAMBERT
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
}`,lp=`#define MATCAP
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
}`,cp=`#define MATCAP
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
}`,up=`#define NORMAL
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
}`,hp=`#define NORMAL
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
}`,fp=`#define PHONG
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
}`,dp=`#define PHONG
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
}`,pp=`#define STANDARD
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
}`,mp=`#define STANDARD
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
}`,gp=`#define TOON
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
}`,_p=`#define TOON
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
}`,vp=`uniform float size;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,yp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Vh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:Kh,aomap_fragment:Zh,aomap_pars_fragment:$h,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:jh,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:uf,color_pars_vertex:hf,color_vertex:ff,common:df,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:vf,emissivemap_pars_fragment:xf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:yf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Ef,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Ff,envmap_vertex:Tf,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:If,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:kf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:Xf,lightprobes_pars_fragment:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:$f,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:jf,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:nd,morphinstance_vertex:id,morphcolor_vertex:sd,morphnormal_vertex:rd,morphtarget_pars_vertex:ad,morphtarget_vertex:od,normal_fragment_begin:ld,normal_fragment_maps:cd,normal_pars_fragment:ud,normal_pars_vertex:hd,normal_vertex:fd,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:_d,opaque_fragment:vd,packing:xd,premultiplied_alpha_fragment:Md,project_vertex:Sd,dithering_fragment:yd,dithering_pars_fragment:bd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:Ad,shadowmap_vertex:Cd,shadowmask_pars_fragment:Rd,skinbase_vertex:Pd,skinning_pars_vertex:Ld,skinning_vertex:Dd,skinnormal_vertex:Ud,specularmap_fragment:Id,specularmap_pars_fragment:Nd,tonemapping_fragment:Fd,tonemapping_pars_fragment:Od,transmission_fragment:Bd,transmission_pars_fragment:zd,uv_pars_fragment:kd,uv_pars_vertex:Gd,uv_vertex:Hd,worldpos_vertex:Vd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Yd,cube_vert:Kd,cube_frag:Zd,depth_vert:$d,depth_frag:Jd,distance_vert:Qd,distance_frag:jd,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:up,meshnormal_frag:hp,meshphong_vert:fp,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:vp,points_frag:xp,shadow_vert:Mp,shadow_frag:Sp,sprite_vert:yp,sprite_frag:bp},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},pn={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};pn.physical={uniforms:Ht([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Is={r:0,b:0,g:0},Ep=new _t,Ac=new Xe;Ac.set(-1,0,0,0,1,0,0,0,1);function wp(i,e,t,n,s,r){const a=new je(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const _=M.backgroundBlurriness>0;E=e.get(E,_)}return E}function g(M){let E=!1;const _=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,E){const _=f(E);_&&(_.isCubeTexture||_.mapping===ir)?(l===void 0&&(l=new ct(new ai(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Di(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ac),l.material.toneMapped=Qe.getTransfer(_.colorSpace)!==lt,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ct(new Pt(2,2),new zt({name:"BackgroundMaterial",uniforms:Di(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(Is,Sc(i)),t.buffers.color.setClear(Is.r,Is.g,Is.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:S,dispose:p}}function Tp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(D,N,U,P,F){let k=!1;const W=d(D,P,U,N);r!==W&&(r=W,l(r.object)),k=f(D,P,U,F),k&&g(D,P,U,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,_(D,N,U,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,N,U,P){const F=P.wireframe===!0;let k=n[N.id];k===void 0&&(k={},n[N.id]=k);const W=D.isInstancedMesh===!0?D.id:0;let Q=k[W];Q===void 0&&(Q={},k[W]=Q);let q=Q[U.id];q===void 0&&(q={},Q[U.id]=q);let K=q[F];return K===void 0&&(K=u(c()),q[F]=K),K}function u(D){const N=[],U=[],P=[];for(let F=0;F<t;F++)N[F]=0,U[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,N,U,P){const F=r.attributes,k=N.attributes;let W=0;const Q=U.getAttributes();for(const q in Q)if(Q[q].location>=0){const j=F[q];let fe=k[q];if(fe===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function g(D,N,U,P){const F={},k=N.attributes;let W=0;const Q=U.getAttributes();for(const q in Q)if(Q[q].location>=0){let j=k[q];j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),F[q]=fe,W++}r.attributes=F,r.attributesNum=W,r.index=P}function S(){const D=r.newAttributes;for(let N=0,U=D.length;N<U;N++)D[N]=0}function m(D){p(D,0)}function p(D,N){const U=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;U[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),F[D]!==N&&(i.vertexAttribDivisor(D,N),F[D]=N)}function M(){const D=r.newAttributes,N=r.enabledAttributes;for(let U=0,P=N.length;U<P;U++)N[U]!==D[U]&&(i.disableVertexAttribArray(U),N[U]=0)}function E(D,N,U,P,F,k,W){W===!0?i.vertexAttribIPointer(D,N,U,F,k):i.vertexAttribPointer(D,N,U,P,F,k)}function _(D,N,U,P){S();const F=P.attributes,k=U.getAttributes(),W=N.defaultAttributeValues;for(const Q in k){const q=k[Q];if(q.location>=0){let K=F[Q];if(K===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const j=K.normalized,fe=K.itemSize,ge=e.get(K);if(ge===void 0)continue;const ae=ge.buffer,re=ge.type,de=ge.bytesPerElement,V=re===i.INT||re===i.UNSIGNED_INT||K.gpuType===Va;if(K.isInterleavedBufferAttribute){const Z=K.data,oe=Z.stride,Ae=K.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,Z.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,fe/q.locationSize,re,j,oe*de,(Ae+fe/q.locationSize*_e)*de,V)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z,K.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Z=0;Z<q.locationSize;Z++)E(q.location+Z,fe/q.locationSize,re,j,fe*de,fe/q.locationSize*Z*de,V)}}else if(W!==void 0){const j=W[Q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(q.location,j);break;case 3:i.vertexAttrib3fv(q.location,j);break;case 4:i.vertexAttrib4fv(q.location,j);break;default:i.vertexAttrib1fv(q.location,j)}}}}M()}function b(){T();for(const D in n){const N=n[D];for(const U in N){const P=N[U];for(const F in P){const k=P[F];for(const W in k)h(k[W].object),delete k[W];delete P[F]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const U in N){const P=N[U];for(const F in P){const k=P[F];for(const W in k)h(k[W].object),delete k[W];delete P[F]}}delete n[D.id]}function A(D){for(const N in n){const U=n[N];for(const P in U){const F=U[P];if(F[D.id]===void 0)continue;const k=F[D.id];for(const W in k)h(k[W].object),delete k[W];delete F[D.id]}}}function v(D){for(const N in n){const U=n[N],P=D.isInstancedMesh===!0?D.id:0,F=U[P];if(F!==void 0){for(const k in F){const W=F[k];for(const Q in W)h(W[Q].object),delete W[Q];delete F[k]}delete U[P],Object.keys(U).length===0&&delete n[N]}}}function T(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Ap(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zt&&A!==mn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ve("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:w}}function Rp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,E=M*4;let _=p.clippingState||null;c.value=_,_=h(g,u,E,f);for(let b=0;b!==E;++b)_[b]=t[b];p.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=c.value,g!==!0||m===null){const p=f+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=f;E!==S;++E,_+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Ai=4,Pp=6,Lp=20,Dp=256,Hi=new sr,ol=new je;let zr=null,kr=0,Gr=0,Hr=!1;const Up=new L,Jn=new L;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Up}=r;zr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,kr,Gr),this._renderer.xr.enabled=Hr,e.scissorTest=!1,Si(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:xn,format:ln,colorSpace:is,depthBuffer:!1},s=cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ip(r)),this._blurMaterial=Fp(r,e,t),this._ggxMaterial=Np(r,e,t)}return s}_compileMaterial(e){const t=new ct(new Dt,e);this._renderer.compile(t,Hi)}_sceneToCubeUV(e,t,n,s,r){const c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ol),d.toneMapping=_n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new ai,new eo({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(ol),p=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):_===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const b=this._cubeSize;Si(s,_*b,E>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(S,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ni||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Si(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Hi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-Ai?n-g+Ai:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Si(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Hi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Si(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(o,Hi)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ai?s-this._lodMax+Ai:0),u=4*(this._cubeSize-h);Si(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,Hi)}}function Ip(i){const e=[],t=[];let n=i;const s=i-Ai+1+Pp;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),S=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,E=p>2?0:-1,_=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(_,f*u*p);for(let b=0;b<u;b++){const w=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?Jn.set(1,A,w):p===1?Jn.set(-w,1,-A):p===2?Jn.set(-w,A,1):p===3?Jn.set(-1,A,-w):p===4?Jn.set(-w,-1,A):Jn.set(w,A,-1),Jn.toArray(S,(p*u+b)*f)}}const m=new Dt;m.setAttribute("position",new Pn(g,f)),m.setAttribute("outputDirection",new Pn(S,f)),t.push(new ct(m,null)),n>Ai&&n--}return{lodMeshes:t,sizeLods:e}}function cl(i,e,t){const n=new Bt(i,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Si(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Np(i,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rr(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Fp(i,e,t){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:Lp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rr(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ul(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rr(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function hl(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function rr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cc extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Cn});r.uniforms.tEquirect.value=t;const a=new ct(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Et),new zh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Op(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===cr||f===ur)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new Cc(g.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===cr||f===ur,S=f===ni||f===Pi;if(g||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===cr?u.mapping=ni:f===ur&&(u.mapping=Pi),u}function c(u){let f=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Bp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function zp(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let S=0;if(g===void 0)return;if(f!==null){const M=f.array;S=f.version;for(let E=0,_=M.length;E<_;E+=3){const b=M[E+0],w=M[E+1],A=M[E+2];u.push(b,w,w,A,A,b)}}else{const M=g.array;S=g.version;for(let E=0,_=M.length/3-1;E<_;E+=3){const b=E+0,w=E+1,A=E+2;u.push(b,w,w,A,A,b)}}const m=new(g.count>=65535?cc:lc)(u,1);m.version=S;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function kp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Gp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hp(i,e,t){const n=new WeakMap,s=new ht;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),S===!0&&(E=3);let _=o.attributes.position.count*E,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*b*4*d),A=new rc(w,_,b,d);A.type=mn,A.needsUpdate=!0;const v=E*4;for(let R=0;R<d;R++){const D=m[R],N=p[R],U=M[R],P=_*b*4*R;for(let F=0;F<D.count;F++){const k=F*v;f===!0&&(s.fromBufferAttribute(D,F),w[P+k+0]=s.x,w[P+k+1]=s.y,w[P+k+2]=s.z,w[P+k+3]=0),g===!0&&(s.fromBufferAttribute(N,F),w[P+k+4]=s.x,w[P+k+5]=s.y,w[P+k+6]=s.z,w[P+k+7]=0),S===!0&&(s.fromBufferAttribute(U,F),w[P+k+8]=s.x,w[P+k+9]=s.y,w[P+k+10]=s.z,w[P+k+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new ce(_,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vp(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Wp={[Vl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function Xp(i,e,t,n,s,r){const a=new Bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Dt;l.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new st([0,2,0,0,2,0],2));const h=new Ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ct(l,h),u=new sr(-1,1,1,-1,0,1);let f=null,g=null,S=!1,m,p=null,M=[],E=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),c!==null&&c.setSize(_,b);for(let w=0;w<M.length;w++){const A=M[w];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){M=_,E=M.length>0&&M[0].isRenderPass===!0;const b=a.width,w=a.height;M.length>0&&o===null&&(o=new Bt(b,w,{type:xn,depthBuffer:!1,stencilBuffer:!1}),c=new Bt(b,w,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const v=M[A];v.setSize&&v.setSize(b,w)}},this.begin=function(_,b){if(S||_.toneMapping===_n&&M.length===0)return!1;if(p=b,b!==null){const w=b.width,A=b.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=_n,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=m,S=!0;let w=a,A=o;for(let v=0;v<M.length;v++){const T=M[v];T.enabled!==!1&&(T.render(_,A,w,b),T.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Qe.getTransfer(f)===lt&&(h.defines.SRGB_TRANSFER="");const v=Wp[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Rc=new Lt,za=new as(1,1),Pc=new rc,Lc=new Uu,Dc=new uc,fl=[],dl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function Fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ar(i,e){let t=dl[e];t===void 0&&(t=new Int32Array(e),dl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function $p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;gl.set(n),i.uniformMatrix2fv(this.addr,!1,gl),At(t,n)}}function Jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ml.set(n),i.uniformMatrix3fv(this.addr,!1,ml),At(t,n)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;pl.set(n),i.uniformMatrix4fv(this.addr,!1,pl),At(t,n)}}function jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(za.compareFunction=t.isReversedDepthBuffer()?$a:Za,r=za):r=Rc,t.setTexture2D(e||r,s)}function lm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lc,s)}function cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dc,s)}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pc,s)}function hm(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Kp;case 35666:return Zp;case 35674:return $p;case 35675:return Jp;case 35676:return Qp;case 5124:case 35670:return jp;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(i,e){i.uniform1fv(this.addr,e)}function dm(i,e){const t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function pm(i,e){const t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function mm(i,e){const t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function gm(i,e){const t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _m(i,e){const t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vm(i,e){const t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xm(i,e){i.uniform1iv(this.addr,e)}function Mm(i,e){i.uniform2iv(this.addr,e)}function Sm(i,e){i.uniform3iv(this.addr,e)}function ym(i,e){i.uniform4iv(this.addr,e)}function bm(i,e){i.uniform1uiv(this.addr,e)}function Em(i,e){i.uniform2uiv(this.addr,e)}function wm(i,e){i.uniform3uiv(this.addr,e)}function Tm(i,e){i.uniform4uiv(this.addr,e)}function Am(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=za:a=Rc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cm(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lc,r[a])}function Rm(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dc,r[a])}function Pm(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pc,r[a])}function Lm(i){switch(i){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return ym;case 5125:return bm;case 36294:return Em;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hm(t.type)}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function _l(i,e){i.seq.push(e),i.map[e.id]=e}function Nm(i,e,t){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),a=Vr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_l(t,l===void 0?new Dm(o,i,e):new Um(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Im(o),_l(t,d)),t=d}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Nm(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fm=37297;let Om=0;function Bm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const xl=new Xe;function zm(i){Qe._getMatrix(xl,Qe.workingColorSpace,i);const e=`mat3( ${xl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Zs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bm(i.getShaderSource(e),o)}else return r}function km(i,e){const t=zm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gm={[Vl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[ql]:"ACESFilmic",[Kl]:"AgX",[Zl]:"Neutral",[Yl]:"Custom"};function Hm(i,e){const t=Gm[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new L;function Vm(){Qe.getLuminanceCoefficients(Ns);const i=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Xm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ki(i){return i!==""}function Sl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(i){return i.replace(Ym,Zm)}const Km=new Map;function Zm(i,e){let t=Ye[e];if(t===void 0){const n=Km.get(e);if(n!==void 0)t=Ye[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ka(t)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace($m,Jm)}function Jm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function El(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Qm={[Zi]:"SHADOWMAP_TYPE_PCF",[qi]:"SHADOWMAP_TYPE_VSM"};function jm(i){return Qm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e0={[ni]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function t0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":e0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const n0={[Pi]:"ENVMAP_MODE_REFRACTION"};function i0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s0={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[uu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function r0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s0[i.combine]||"ENVMAP_BLENDING_NONE"}function a0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=jm(t),l=t0(t),h=i0(t),d=r0(t),u=a0(t),f=Wm(t),g=Xm(r),S=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),p.length>0&&(p+=`
`)):(m=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),p=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ye.tonemapping_pars_fragment:"",t.toneMapping!==_n?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,km("linearToOutputTexel",t.outputColorSpace),Vm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=ka(a),a=Sl(a,t),a=yl(a,t),o=ka(o),o=Sl(o,t),o=yl(o,t),a=bl(a),o=bl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,_=M+p+o,b=vl(s,s.VERTEX_SHADER,E),w=vl(s,s.FRAGMENT_SHADER,_);s.attachShader(S,b),s.attachShader(S,w),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(S)||"",U=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(w)||"",F=N.trim(),k=U.trim(),W=P.trim();let Q=!0,q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,w);else{const K=Ml(s,b,"vertex"),j=Ml(s,w,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+K+`
`+j)}else F!==""?Ve("WebGLProgram: Program Info Log:",F):(k===""||W==="")&&(q=!1);q&&(D.diagnostics={runnable:Q,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(b),s.deleteShader(w),v=new Ws(s,S),T=qm(s,S)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,Fm)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Om++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new u0(e),t.set(e,n)),n}}class u0{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}}function h0(i){return i===ii||i===Ys||i===Ks}function f0(i,e,t,n,s,r){const a=new ac,o=new c0,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,T,R,D,N,U){const P=D.fog,F=N.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||k,W),q=Q&&Q.mapping===ir?Q.image.height:null,K=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=j!==void 0?j.length:0;let ge=0;F.morphAttributes.position!==void 0&&(ge=1),F.morphAttributes.normal!==void 0&&(ge=2),F.morphAttributes.color!==void 0&&(ge=3);let ae,re,de,V;if(K){const dt=pn[K];ae=dt.vertexShader,re=dt.fragmentShader}else{ae=v.vertexShader,re=v.fragmentShader;const dt=o.getVertexShaderStage(v),at=o.getFragmentShaderStage(v);o.update(v,dt,at),de=dt.id,V=at.id}const Z=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),Ae=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,Ie=!!v.map,et=!!v.matcap,ee=!!Q,se=!!v.aoMap,le=!!v.lightMap,ue=!!v.bumpMap&&v.wireframe===!1,me=!!v.normalMap,ke=!!v.displacementMap,ze=!!v.emissiveMap,He=!!v.metalnessMap,We=!!v.roughnessMap,I=v.anisotropy>0,rt=v.clearcoat>0,Ze=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,z=v.sheen>0,X=v.transmission>0,$=I&&!!v.anisotropyMap,he=rt&&!!v.clearcoatMap,pe=rt&&!!v.clearcoatNormalMap,J=rt&&!!v.clearcoatRoughnessMap,ne=x&&!!v.iridescenceMap,ve=x&&!!v.iridescenceThicknessMap,Ne=z&&!!v.sheenColorMap,ye=z&&!!v.sheenRoughnessMap,xe=!!v.specularMap,Fe=!!v.specularColorMap,Ge=!!v.specularIntensityMap,qe=X&&!!v.transmissionMap,B=X&&!!v.thicknessMap,Me=!!v.gradientMap,te=!!v.alphaMap,Se=v.alphaTest>0,Te=!!v.alphaHash,ie=!!v.extensions;let Oe=_n;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const De={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:ae,fragmentShader:re,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:et,envMap:ee,envMapMode:ee&&Q.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:le,bumpMap:ue,normalMap:me,displacementMap:ke,emissiveMap:ze,normalMapObjectSpace:me&&v.normalMapType===pu,normalMapTangentSpace:me&&v.normalMapType===Ua,packedNormalMap:me&&v.normalMapType===Ua&&h0(v.normalMap.format),metalnessMap:He,roughnessMap:We,anisotropy:I,anisotropyMap:$,clearcoat:rt,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:J,dispersion:Ze,retroreflection:C,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:ve,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:Fe,specularIntensityMap:Ge,transmission:X,transmissionMap:qe,thicknessMap:B,gradientMap:Me,opaque:v.transparent===!1&&v.blending===$i&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:Se,alphaHash:Te,combine:v.combine,mapUv:Ie&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:le&&g(v.lightMap.channel),bumpMapUv:ue&&g(v.bumpMap.channel),normalMapUv:me&&g(v.normalMap.channel),displacementMapUv:ke&&g(v.displacementMap.channel),emissiveMapUv:ze&&g(v.emissiveMap.channel),metalnessMapUv:He&&g(v.metalnessMap.channel),roughnessMapUv:We&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:he&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(v.sheenRoughnessMap.channel),specularMapUv:xe&&g(v.specularMap.channel),specularColorMapUv:Fe&&g(v.specularColorMap.channel),specularIntensityMapUv:Ge&&g(v.specularIntensityMap.channel),transmissionMapUv:qe&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:te&&g(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(me||I),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ie||te),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ge,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:ze&&v.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wt,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){const T=f[v.type];let R;if(T){const D=pn[T];R=Lh.clone(D.uniforms)}else R=v.uniforms;return R}function _(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new o0(i,T,v,s),l.push(R),h.set(T,R)),R}function b(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:A}}function d0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function p0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,S,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);const E=o(u,f,g,S,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(u,f,g,S,m,p){const M=o(u,f,g,S,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||p0),n.length>1&&n.sort(f||wl),s.length>1&&s.sort(f||wl)}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function m0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Tl,i.set(n,[a])):s>=r.length?(a=new Tl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function g0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new je};break;case"SpotLight":t={position:new L,direction:new L,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function _0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v0=0;function x0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function M0(i){const e=new g0,t=_0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new _t,a=new _t;function o(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,M=0,E=0,_=0,b=0,w=0,A=0,v=0,T=0,R=0;l.sort(x0);for(let N=0,U=l.length;N<U;N++){const P=l[N],F=P.color,k=P.intensity,W=P.distance;let Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ii?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],k);R++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=Q;const fe=K.getViewportCount();for(let ge=0;ge<fe;ge++)n.sunShadowMatrix[S+ge]=K.getMatrix(ge),n.sunShadowCascade[S+ge]=K._cascadeData[ge];S+=fe,g++}n.sun[f]=q,f++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;const K=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=K.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=Q,A++}M++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(F).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=q,E++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=q,p++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[_]=q,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=R,n.version=v0++)}function c(l,h){let d=0,u=0,f=0,g=0,S=0,m=0;const p=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){const _=l[M];if(_.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(_.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Al(i){const e=new M0(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function S0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Al(i),e.set(s,[o])):r>=a.length?(o=new Al(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`,E0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],w0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Cl=new _t,Vi=new L,Wr=new L;function T0(i,e,t){let n=new to;const s=new ce,r=new ce,a=new ht,o=new Nh,c=new Fh,l={},h=t.maxTextureSize,d={[Wn]:Vt,[Vt]:Wn,[wt]:wt},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:y0,fragmentShader:b0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zi;let p=this.type;this.render=function(w,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Xc&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zi);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Cn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==this.type;U&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=w.length;P<F;P++){const k=w[P],W=k.shadow;if(W===void 0){Ve("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Q=W.getFrameExtents();s.multiply(Q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,W.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qi){if(k.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Bt(s.x,s.y,{format:ii,type:xn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new as(s.x,s.y,mn),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ln,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut}else k.isPointLight?(W.map=new Cc(s.x),W.map.depthTexture=new Ju(s.x,vn)):(W.map=new Bt(s.x,s.y),W.map.depthTexture=new as(s.x,s.y,vn)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ln,this.type===Zi?(W.map.depthTexture.compareFunction=q?$a:Za,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,v);for(let j=0;j<K;j++){const fe=W.getCamera(j);if(k.isPointLight){const ge=W.camera,ae=W.matrix,re=k.distance||ge.far;re!==ge.far&&(ge.far=re,ge.updateProjectionMatrix()),Vi.setFromMatrixPosition(k.matrixWorld),ge.position.copy(Vi),Wr.copy(ge.position),Wr.add(E0[j]),ge.up.copy(w0[j]),ge.lookAt(Wr),ge.updateMatrixWorld(),ae.makeTranslation(-Vi.x,-Vi.y,-Vi.z),Cl.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Cl,ge.coordinateSystem,ge.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,j),i.clear();else{j===0&&(i.setRenderTarget(W.map),i.clear());const ge=W.getViewport(j);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),N.viewport(a)}n=W.getFrustum(j),_(A,v,fe,k,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&M(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,D)};function M(w,A){const v=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Bt(s.x,s.y,{format:ii,type:xn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,v,f,S,null)}function E(w,A,v,T){let R=null;const D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,U=A.uuid;let P=l[N];P===void 0&&(P={},l[N]=P);let F=P[U];F===void 0&&(F=R.clone(),P[U]=F,A.addEventListener("dispose",b)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,T===qi?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=v}return R}function _(w,A,v,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===qi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const U=e.update(w),P=w.material;if(Array.isArray(P)){const F=U.groups;for(let k=0,W=F.length;k<W;k++){const Q=F[k],q=P[Q.materialIndex];if(q&&q.visible){const K=E(w,q,T,R);w.onBeforeShadow(i,w,A,v,U,K,Q),i.renderBufferDirect(v,null,U,K,w,Q),w.onAfterShadow(i,w,A,v,U,K,Q)}}}else if(P.visible){const F=E(w,P,T,R);w.onBeforeShadow(i,w,A,v,U,F,null),i.renderBufferDirect(v,null,U,F,w,null),w.onAfterShadow(i,w,A,v,U,F,null)}}const N=w.children;for(let U=0,P=N.length;U<P;U++)_(N[U],A,v,T,R)}function b(w){w.target.removeEventListener("dispose",b);for(const v in l){const T=l[v],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function A0(i,e){function t(){let B=!1;const Me=new ht;let te=null;const Se=new ht(0,0,0,0);return{setMask:function(Te){te!==Te&&!B&&(i.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){B=Te},setClear:function(Te,ie,Oe,De,dt){dt===!0&&(Te*=De,ie*=De,Oe*=De),Me.set(Te,ie,Oe,De),Se.equals(Me)===!1&&(i.clearColor(Te,ie,Oe,De),Se.copy(Me))},reset:function(){B=!1,te=null,Se.set(-1,0,0,0)}}}function n(){let B=!1,Me=!1,te=null,Se=null,Te=null;return{setReversed:function(ie){if(Me!==ie){const Oe=e.get("EXT_clip_control");ie?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Me=ie;const De=Te;Te=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(ie){ie?Z(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ie){te!==ie&&!B&&(i.depthMask(ie),te=ie)},setFunc:function(ie){if(Me&&(ie=Tu[ie]),Se!==ie){switch(ie){case $r:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=ie}},setLocked:function(ie){B=ie},setClear:function(ie){Te!==ie&&(Te=ie,Me&&(ie=1-ie),i.clearDepth(ie))},reset:function(){B=!1,te=null,Se=null,Te=null,Me=!1}}}function s(){let B=!1,Me=null,te=null,Se=null,Te=null,ie=null,Oe=null,De=null,dt=null;return{setTest:function(at){B||(at?Z(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(at){Me!==at&&!B&&(i.stencilMask(at),Me=at)},setFunc:function(at,tn,cn){(te!==at||Se!==tn||Te!==cn)&&(i.stencilFunc(at,tn,cn),te=at,Se=tn,Te=cn)},setOp:function(at,tn,cn){(ie!==at||Oe!==tn||De!==cn)&&(i.stencilOp(at,tn,cn),ie=at,Oe=tn,De=cn)},setLocked:function(at){B=at},setClear:function(at){dt!==at&&(i.clearStencil(at),dt=at)},reset:function(){B=!1,Me=null,te=null,Se=null,Te=null,ie=null,Oe=null,De=null,dt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,E=null,_=null,b=null,w=null,A=null,v=new je(0,0,0),T=0,R=!1,D=null,N=null,U=null,P=null,F=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=Q>=2);let K=null,j={};const fe=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),ae=new ht().fromArray(fe),re=new ht().fromArray(ge);function de(B,Me,te,Se){const Te=new Uint8Array(4),ie=i.createTexture();i.bindTexture(B,ie),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<te;Oe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Me+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ie}const V={};V[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(es),ue(!1),me(To),Z(i.CULL_FACE),se(Cn);function Z(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function oe(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ae(B,Me){return u[B]!==Me?(i.bindFramebuffer(B,Me),u[B]=Me,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function _e(B,Me){let te=g,Se=!1;if(B){te=f.get(Me),te===void 0&&(te=[],f.set(Me,te));const Te=B.textures;if(te.length!==Te.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Oe=Te.length;ie<Oe;ie++)te[ie]=i.COLOR_ATTACHMENT0+ie;te.length=Te.length,Se=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Se=!0);Se&&i.drawBuffers(te)}function Ie(B){return S!==B?(i.useProgram(B),S=B,!0):!1}const et={[Ei]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};et[Zc]=i.MIN,et[$c]=i.MAX;const ee={[Jc]:i.ZERO,[Qc]:i.ONE,[jc]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[eu]:i.ONE_MINUS_SRC_COLOR,[Gl]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function se(B,Me,te,Se,Te,ie,Oe,De,dt,at){if(B===Cn){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),B!==qc){if(B!==p||at!==R){if((M!==Ei||b!==Ei)&&(i.blendEquation(i.FUNC_ADD),M=Ei,b=Ei),at)switch(B){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",B);break}else switch(B){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Co:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ro:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",B);break}E=null,_=null,w=null,A=null,v.set(0,0,0),T=0,p=B,R=at}return}Te=Te||Me,ie=ie||te,Oe=Oe||Se,(Me!==M||Te!==b)&&(i.blendEquationSeparate(et[Me],et[Te]),M=Me,b=Te),(te!==E||Se!==_||ie!==w||Oe!==A)&&(i.blendFuncSeparate(ee[te],ee[Se],ee[ie],ee[Oe]),E=te,_=Se,w=ie,A=Oe),(De.equals(v)===!1||dt!==T)&&(i.blendColor(De.r,De.g,De.b,dt),v.copy(De),T=dt),p=B,R=!1}function le(B,Me){B.side===wt?oe(i.CULL_FACE):Z(i.CULL_FACE);let te=B.side===Vt;Me&&(te=!te),ue(te),B.blending===$i&&B.transparent===!1?se(Cn):se(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Se=B.stencilWrite;o.setTest(Se),Se&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function me(B){B!==Vc?(Z(i.CULL_FACE),B!==N&&(B===To?i.cullFace(i.BACK):B===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),N=B}function ke(B){B!==U&&(W&&i.lineWidth(B),U=B)}function ze(B,Me,te){B?(Z(i.POLYGON_OFFSET_FILL),(P!==Me||F!==te)&&(P=Me,F=te,a.getReversed()&&(Me=-Me),i.polygonOffset(Me,te))):oe(i.POLYGON_OFFSET_FILL)}function He(B){B?Z(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function We(B){B===void 0&&(B=i.TEXTURE0+k-1),K!==B&&(i.activeTexture(B),K=B)}function I(B,Me,te){te===void 0&&(K===null?te=i.TEXTURE0+k-1:te=K);let Se=j[te];Se===void 0&&(Se={type:void 0,texture:void 0},j[te]=Se),(Se.type!==B||Se.texture!==Me)&&(K!==te&&(i.activeTexture(te),K=te),i.bindTexture(B,Me||V[B]),Se.type=B,Se.texture=Me)}function rt(){const B=j[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function z(){try{i.texSubImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function he(){try{i.texStorage2D(...arguments)}catch(B){it("WebGLState:",B)}}function pe(){try{i.texStorage3D(...arguments)}catch(B){it("WebGLState:",B)}}function J(){try{i.texImage2D(...arguments)}catch(B){it("WebGLState:",B)}}function ne(){try{i.texImage3D(...arguments)}catch(B){it("WebGLState:",B)}}function ve(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Ne(B,Me){d[B]!==Me&&(i.pixelStorei(B,Me),d[B]=Me)}function ye(B){ae.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ae.copy(B))}function xe(B){re.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function Fe(B,Me){let te=l.get(Me);te===void 0&&(te=new WeakMap,l.set(Me,te));let Se=te.get(B);Se===void 0&&(Se=i.getUniformBlockIndex(Me,B.name),te.set(B,Se))}function Ge(B,Me){const Se=l.get(Me).get(B);c.get(Me)!==Se&&(i.uniformBlockBinding(Me,Se,B.__bindingPointIndex),c.set(Me,Se))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,j={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,E=null,_=null,b=null,w=null,A=null,v=new je(0,0,0),T=0,R=!1,D=null,N=null,U=null,P=null,F=null,ae.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:oe,bindFramebuffer:Ae,drawBuffers:_e,useProgram:Ie,setBlending:se,setMaterial:le,setFlipSided:ue,setCullFace:me,setLineWidth:ke,setPolygonOffset:ze,setScissorTest:He,activeTexture:We,bindTexture:I,unbindTexture:rt,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:J,texImage3D:ne,pixelStorei:Ne,getParameter:ve,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:pe,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:ye,viewport:xe,reset:qe}}function C0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,x){return g?new OffscreenCanvas(C,x):$s("canvas")}function m(C,x,z){let X=1;const $=Ze(C);if(($.width>z||$.height>z)&&(X=z/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const he=Math.floor(X*$.width),pe=Math.floor(X*$.height);u===void 0&&(u=S(he,pe));const J=x?S(he,pe):u;return J.width=he,J.height=pe,J.getContext("2d").drawImage(C,0,0,he,pe),Ve("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+he+"x"+pe+")."),J}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,x,z,X,$,he=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),z===i.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),x===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),z===i.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),z===i.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const ne=he?Zs:Qe.getTransfer($);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=ne===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),z===i.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(C,x){let z;return C?x===null||x===vn||x===ns?z=i.DEPTH24_STENCIL8:x===mn?z=i.DEPTH32F_STENCIL8:x===ts&&(z=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vn||x===ns?z=i.DEPTH_COMPONENT24:x===mn?z=i.DEPTH_COMPONENT32F:x===ts&&(z=i.DEPTH_COMPONENT16),z}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==Et?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(C){const x=C.target;x.removeEventListener("dispose",v),D(x)}function T(C){const x=n.get(C);if(x.__webglInit===void 0)return;const z=C.source,X=f.get(z);if(X){const $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(X).length===0&&f.delete(z)}n.remove(C)}function R(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const z=C.source,X=f.get(z);delete X[x.__cacheKey],a.memory.textures--}function D(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[X][$]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=C.textures;for(let X=0,$=z.length;X<$;X++){const he=n.get(z[X]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(z[X])}n.remove(C)}let N=0;function U(){N=0}function P(){return N}function F(C){N=C}function k(){const C=N;return C>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function W(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Q(C,x){const z=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const X=C.image;if(X===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(z,C,x);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function q(C,x){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){oe(z,C,x);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function K(C,x){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){oe(z,C,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function j(C,x){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Ae(z,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const fe={[Xs]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[qs]:i.MIRRORED_REPEAT},ge={[Ut]:i.NEAREST,[fu]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ae={[gu]:i.NEVER,[Su]:i.ALWAYS,[_u]:i.LESS,[Za]:i.LEQUAL,[vu]:i.EQUAL,[$a]:i.GEQUAL,[xu]:i.GREATER,[Mu]:i.NOTEQUAL};function re(C,x){if(x.type===mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Et||x.magFilter===hr||x.magFilter===fs||x.magFilter===jn||x.minFilter===Et||x.minFilter===hr||x.minFilter===fs||x.minFilter===jn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,fe[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,fe[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,fe[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==fs&&x.minFilter!==jn||x.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function de(C,x){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const X=x.source;let $=f.get(X);$===void 0&&($={},f.set(X,$));const he=W(x);if(he!==C.__cacheKey){$[he]===void 0&&($[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[he].usedTimes++;const pe=$[C.__cacheKey];pe!==void 0&&($[C.__cacheKey].usedTimes--,pe.usedTimes===0&&R(x)),C.__cacheKey=he,C.__webglTexture=$[he].texture}return z}function V(C,x,z){return Math.floor(Math.floor(C/z)/x)}function Z(C,x,z,X){const he=C.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,X,x.data);else{he.sort((Ne,ye)=>Ne.start-ye.start);let pe=0;for(let Ne=1;Ne<he.length;Ne++){const ye=he[pe],xe=he[Ne],Fe=ye.start+ye.count,Ge=V(xe.start,x.width,4),qe=V(ye.start,x.width,4);xe.start<=Fe+1&&Ge===qe&&V(xe.start+xe.count-1,x.width,4)===Ge?ye.count=Math.max(ye.count,xe.start+xe.count-ye.start):(++pe,he[pe]=xe)}he.length=pe+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ne=0,ye=he.length;Ne<ye;Ne++){const xe=he[Ne],Fe=Math.floor(xe.start/4),Ge=Math.ceil(xe.count/4),qe=Fe%x.width,B=Math.floor(Fe/x.width),Me=Ge,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,qe,B,Me,te,z,X,x.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function oe(C,x,z){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const $=de(C,x),he=x.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+z);const pe=n.get(he);if(he.version!==pe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const te=Qe.getPrimaries(Qe.workingColorSpace),Se=x.colorSpace===Vn?null:Qe.getPrimaries(x.colorSpace),Te=x.colorSpace===Vn||te===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=m(x.image,!1,s.maxTextureSize);ne=rt(x,ne);const ve=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type);let ye=_(x.internalFormat,ve,Ne,x.normalized,x.colorSpace,x.isVideoTexture);re(X,x);let xe;const Fe=x.mipmaps,Ge=x.isVideoTexture!==!0,qe=pe.__version===void 0||$===!0,B=he.dataReady,Me=w(x,ne);if(x.isDepthTexture)ye=b(x.format===ei,x.type),qe&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ve,Ne,null));else if(x.isDataTexture)if(Fe.length>0){Ge&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,ye,Fe[0].width,Fe[0].height);for(let te=0,Se=Fe.length;te<Se;te++)xe=Fe[te],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(i.TEXTURE_2D,te,ye,xe.width,xe.height,0,ve,Ne,xe.data);x.generateMipmaps=!1}else Ge?(qe&&t.texStorage2D(i.TEXTURE_2D,Me,ye,ne.width,ne.height),B&&Z(x,ne,ve,Ne)):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ve,Ne,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,ye,Fe[0].width,Fe[0].height,ne.depth);for(let te=0,Se=Fe.length;te<Se;te++)if(xe=Fe[te],x.format!==ln)if(ve!==null)if(Ge){if(B)if(x.layerUpdates.size>0){const Te=al(xe.width,xe.height,x.format,x.type);for(const ie of x.layerUpdates){const Oe=xe.data.subarray(ie*Te/xe.data.BYTES_PER_ELEMENT,(ie+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ie,xe.width,xe.height,1,ve,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,ve,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ye,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,ve,Ne,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ye,xe.width,xe.height,ne.depth,0,ve,Ne,xe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ge&&qe&&t.texStorage2D(i.TEXTURE_2D,Me,ye,Fe[0].width,Fe[0].height);for(let te=0,Se=Fe.length;te<Se;te++)xe=Fe[te],x.format!==ln?ve!==null?Ge?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ye,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,ve,Ne,xe.data):t.texImage2D(i.TEXTURE_2D,te,ye,xe.width,xe.height,0,ve,Ne,xe.data)}else if(x.isDataArrayTexture)if(Ge){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,ye,ne.width,ne.height,ne.depth),B)if(x.layerUpdates.size>0){const te=al(ne.width,ne.height,x.format,x.type);for(const Se of x.layerUpdates){const Te=ne.data.subarray(Se*te/ne.data.BYTES_PER_ELEMENT,(Se+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ne.width,ne.height,1,ve,Ne,Te)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Ne,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,ve,Ne,ne.data);else if(x.isData3DTexture)Ge?(qe&&t.texStorage3D(i.TEXTURE_3D,Me,ye,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Ne,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,ve,Ne,ne.data);else if(x.isFramebufferTexture){if(qe)if(Ge)t.texStorage2D(i.TEXTURE_2D,Me,ye,ne.width,ne.height);else{let te=ne.width,Se=ne.height;for(let Te=0;Te<Me;Te++)t.texImage2D(i.TEXTURE_2D,Te,ye,te,Se,0,ve,Ne,null),te>>=1,Se>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(x),te.onpaint=Se=>{const Te=Se.changedElements;for(const ie of d)Te.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const Te=i.RGBA,ie=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ie,Oe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ge&&qe){const te=Ze(Fe[0]);t.texStorage2D(i.TEXTURE_2D,Me,ye,te.width,te.height)}for(let te=0,Se=Fe.length;te<Se;te++)xe=Fe[te],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve,Ne,xe):t.texImage2D(i.TEXTURE_2D,te,ye,ve,Ne,xe);x.generateMipmaps=!1}else if(Ge){if(qe){const te=Ze(ne);t.texStorage2D(i.TEXTURE_2D,Me,ye,te.width,te.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ne,ne)}else t.texImage2D(i.TEXTURE_2D,0,ye,ve,Ne,ne);p(x)&&M(X),pe.__version=he.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ae(C,x,z){if(x.image.length!==6)return;const X=de(C,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const he=n.get($);if($.version!==he.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const pe=Qe.getPrimaries(Qe.workingColorSpace),J=x.colorSpace===Vn?null:Qe.getPrimaries(x.colorSpace),ne=x.colorSpace===Vn||pe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Ne=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let ie=0;ie<6;ie++)!ve&&!Ne?ye[ie]=m(x.image[ie],!0,s.maxCubemapSize):ye[ie]=Ne?x.image[ie].image:x.image[ie],ye[ie]=rt(x,ye[ie]);const xe=ye[0],Fe=r.convert(x.format,x.colorSpace),Ge=r.convert(x.type),qe=_(x.internalFormat,Fe,Ge,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,Me=he.__version===void 0||X===!0,te=$.dataReady;let Se=w(x,xe);re(i.TEXTURE_CUBE_MAP,x);let Te;if(ve){B&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,qe,xe.width,xe.height);for(let ie=0;ie<6;ie++){Te=ye[ie].mipmaps;for(let Oe=0;Oe<Te.length;Oe++){const De=Te[Oe];x.format!==ln?Fe!==null?B?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,De.width,De.height,Fe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,qe,De.width,De.height,0,De.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,De.width,De.height,Fe,Ge,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,qe,De.width,De.height,0,Fe,Ge,De.data)}}}else{if(Te=x.mipmaps,B&&Me){Te.length>0&&Se++;const ie=Ze(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ne){B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ye[ie].width,ye[ie].height,Fe,Ge,ye[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,ye[ie].width,ye[ie].height,0,Fe,Ge,ye[ie].data);for(let Oe=0;Oe<Te.length;Oe++){const dt=Te[Oe].image[ie].image;B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,dt.width,dt.height,Fe,Ge,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,qe,dt.width,dt.height,0,Fe,Ge,dt.data)}}else{B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Fe,Ge,ye[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,Fe,Ge,ye[ie]);for(let Oe=0;Oe<Te.length;Oe++){const De=Te[Oe];B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,Fe,Ge,De.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,qe,Fe,Ge,De.image[ie])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),he.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _e(C,x,z,X,$,he){const pe=r.convert(z.format,z.colorSpace),J=r.convert(z.type),ne=_(z.internalFormat,pe,J,z.normalized,z.colorSpace),ve=n.get(x),Ne=n.get(z);if(Ne.__renderTarget=x,!ve.__hasExternalTextures){const ye=Math.max(1,x.width>>he),xe=Math.max(1,x.height>>he);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,he,ne,ye,xe,x.depth,0,pe,J,null):t.texImage2D($,he,ne,ye,xe,0,pe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Ne.__webglTexture,0,He(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Ne.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(C,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,he=b(x.stencilBuffer,$),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),he,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,C)}else{const X=x.textures;for(let $=0;$<X.length;$++){const he=X[$],pe=r.convert(he.format,he.colorSpace),J=r.convert(he.type),ne=_(he.internalFormat,pe,J,he.normalized,he.colorSpace);We(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),ne,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(C,x,z){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),re(i.TEXTURE_CUBE_MAP,x.depthTexture);const ve=r.convert(x.depthTexture.format),Ne=r.convert(x.depthTexture.type);let ye;x.depthTexture.format===Ln?ye=i.DEPTH_COMPONENT24:x.depthTexture.format===ei&&(ye=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ye,x.width,x.height,0,ve,Ne,null)}}else Q(x.depthTexture,0);const he=$.__webglTexture,pe=He(x),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ne=x.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ln)We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,he,0);else if(x.depthTexture.format===ei)We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,J,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(C){const x=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)et(x.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?et(x.__webglFramebuffer[0],C,0):et(x.__webglFramebuffer,C,0)}else if(z){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[X],C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,he)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(C,x,z){const X=n.get(C);x!==void 0&&_e(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ee(C)}function le(C){const x=C.texture,z=n.get(C),X=n.get(x);C.addEventListener("dispose",v);const $=C.textures,he=C.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),he){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ne=0;ne<x.mipmaps.length;ne++)z.__webglFramebuffer[J][ne]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pe)for(let J=0,ne=$.length;J<ne;J++){const ve=n.get($[J]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const ne=$[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const ve=r.convert(ne.format,ne.colorSpace),Ne=r.convert(ne.type),ye=_(ne.internalFormat,ve,Ne,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),xe=He(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ye,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),re(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)_e(z.__webglFramebuffer[J][ne],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else _e(z.__webglFramebuffer[J],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,ne=$.length;J<ne;J++){const ve=$[J],Ne=n.get(ve);let ye=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ne.__webglTexture),re(ye,ve),_e(z.__webglFramebuffer,C,ve,i.COLOR_ATTACHMENT0+J,ye,0),p(ve)&&M(ye)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),re(J,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)_e(z.__webglFramebuffer[ne],C,x,i.COLOR_ATTACHMENT0,J,ne);else _e(z.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,J,0);p(x)&&M(J),t.unbindTexture()}C.depthBuffer&&ee(C)}function ue(C){const x=C.textures;for(let z=0,X=x.length;z<X;z++){const $=x[z];if(p($)){const he=E(C),pe=n.get($).__webglTexture;t.bindTexture(he,pe),M(he),t.unbindTexture()}}}const me=[],ke=[];function ze(C){if(C.samples>0){if(We(C)===!1){const x=C.textures,z=C.width,X=C.height;let $=i.COLOR_BUFFER_BIT;const he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(C),J=x.length>1;if(J)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Ne=n.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,$,i.NEAREST),c===!0&&(me.length=0,ke.length=0,me.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(me.push(he),ke.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);const Ne=n.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(C){return Math.min(s.maxSamples,C.samples)}function We(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function rt(C,x){const z=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==is&&z!==Vn&&(Qe.getTransfer(z)===lt?(X!==ln||$!==Zt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",z)),x}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=se,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R0(i,e){function t(n,s=Vn){let r;const a=Qe.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===nc)return i.RGB;if(n===ln)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===ks||n===Gs||n===Hs||n===Vs)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca||n===ua||n===ha||n===Ys||n===fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ua)return r.COMPRESSED_R11_EAC;if(n===ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ys)return r.COMPRESSED_RG11_EAC;if(n===fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===da||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===Sa||n===ya||n===ba||n===Ea||n===wa||n===Ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ta)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Ca||n===Ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pa||n===La||n===Ks||n===Da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const P0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`;class D0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:P0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends ri{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const S=typeof XRWebGLBinding<"u",m=new D0,p={},M=t.getContextAttributes();let E=null,_=null;const b=[],w=[],A=new ce;let v=null,T=null;const R=new Kt;R.viewport=new ht;const D=new Kt;D.viewport=new ht;const N=[R,D],U=new kh;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=b[V];return Z===void 0&&(Z=new Mr,b[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=b[V];return Z===void 0&&(Z=new Mr,b[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=b[V];return Z===void 0&&(Z=new Mr,b[V]=Z),Z.getHandSpace()};function k(V){const Z=w.indexOf(V.inputSource);if(Z===-1)return;const oe=b[Z];oe!==void 0&&(oe.update(V.inputSource,V.frame,l||a),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let V=0;V<b.length;V++){const Z=w[V];Z!==null&&(w[V]=null,b[V].disconnect(Z))}P=null,F=null,m.reset();for(const V in p)delete p[V];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),T!==null){const V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ae=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?ei:Ln,Ae=M.stencil?ns:vn);const Ie={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Bt(u.textureWidth,u.textureHeight,{format:ln,type:Zt,depthTexture:new as(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Bt(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(V){for(let Z=0;Z<V.removed.length;Z++){const oe=V.removed[Z],Ae=w.indexOf(oe);Ae>=0&&(w[Ae]=null,b[Ae].disconnect(oe))}for(let Z=0;Z<V.added.length;Z++){const oe=V.added[Z];let Ae=w.indexOf(oe);if(Ae===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=w.length){w.push(oe),Ae=Ie;break}else if(w[Ie]===null){w[Ie]=oe,Ae=Ie;break}if(Ae===-1)break}const _e=b[Ae];_e&&_e.connect(oe)}}const q=new L,K=new L;function j(V,Z,oe){q.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);const Ae=q.distanceTo(K),_e=Z.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,et=_e[14]/(_e[10]-1),ee=_e[14]/(_e[10]+1),se=(_e[9]+1)/_e[5],le=(_e[9]-1)/_e[5],ue=(_e[8]-1)/_e[0],me=(Ie[8]+1)/Ie[0],ke=et*ue,ze=et*me,He=Ae/(-ue+me),We=He*-ue;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(He),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),_e[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const I=et+He,rt=ee+He,Ze=ke-We,C=ze+(Ae-We),x=se*ee/rt*I,z=le*ee/rt*I;V.projectionMatrix.makePerspective(Ze,C,x,z,I,rt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function fe(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,oe=V.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=D.near=R.near=Z,U.far=D.far=R.far=oe,(P!==U.near||F!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,F=U.far),U.layers.mask=V.layers.mask|6,R.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;const Ae=V.parent,_e=U.cameras;fe(U,Ae);for(let Ie=0;Ie<_e.length;Ie++)fe(_e[Ie],Ae);_e.length===2?j(U,R,D):U.projectionMatrix.copy(R.projectionMatrix),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),ge(V,U,Ae)};function ge(V,Z,oe){oe===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ia*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(V){return p[V]};let ae=null;function re(V,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ae=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,Ae=!0);for(let ee=0;ee<oe.length;ee++){const se=oe[ee];let le=null;if(f!==null)le=f.getViewport(se);else{const me=d.getViewSubImage(u,se);le=me.viewport,ee===0&&(e.setRenderTargetTextures(_,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(_))}let ue=N[ee];ue===void 0&&(ue=new Kt,ue.layers.enable(ee),ue.viewport=new ht,N[ee]=ue),ue.matrix.fromArray(se.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(se.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(le.x,le.y,le.width,le.height),ee===0&&(U.matrix.copy(ue.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ae===!0&&U.cameras.push(ue)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const ee=d.getDepthInformation(oe[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(_e&&_e.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<oe.length;ee++){const se=oe[ee].camera;if(se){let le=p[se];le||(le=new hc,p[se]=le);const ue=d.getCameraImage(se);le.sourceTexture=ue}}}}for(let oe=0;oe<b.length;oe++){const Ae=w[oe],_e=b[oe];Ae!==null&&_e!==void 0&&_e.update(Ae,Z,l||a)}ae&&ae(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const de=new Tc;de.setAnimationLoop(re),this.setAnimationLoop=function(V){ae=V},this.dispose=function(){}}}const I0=new _t,Uc=new Xe;Uc.set(-1,0,0,0,1,0,0,0,1);function N0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,_=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){const w=b.program;n.uniformBlockBinding(_,w)}function l(_,b){let w=s[_.id];w===void 0&&(m(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));const A=b.program;n.updateUBOMapping(_,A);const v=e.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){const b=d();_.__bindingPointIndex=b;const w=i.createBuffer(),A=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=w.length;v<T;v++){const R=w[v];if(Array.isArray(R))for(let D=0,N=R.length;D<N;D++)f(R[D],v,D,A);else f(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,w,A){if(S(_,b,w,A)===!0){const v=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){const N=T[D],U=p(N);g(N,_.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function g(_,b,w){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,w)}function S(_,b,w,A){const v=_.value,T=b+"_"+w;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{const R=A[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(_){const b=_.uniforms;let w=0;const A=16;for(let T=0,R=b.length;T<R;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,U=D.length;N<U;N++){const P=D[N],F=Array.isArray(P.value)?P.value:[P.value];for(let k=0,W=F.length;k<W;k++){const Q=F[k],q=p(Q),K=w%A,j=K%q.boundary,fe=K+j;w+=j,fe!==0&&A-fe<q.storage&&(w+=A-fe),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=q.storage}}}const v=w%A;return v>0&&(w+=A-v),_.__size=w,_.__cache={},this}function p(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){const b=_.target;b.removeEventListener("dispose",M);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}const O0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function B0(){return fn===null&&(fn=new Zu(O0,16,16,ii,xn),fn.name="DFG_LUT",fn.minFilter=Et,fn.magFilter=Et,fn.wrapS=An,fn.wrapT=An,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class z0{constructor(e={}){const{canvas:t=Eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=f,m=new Set([Ka,Ya,qa]),p=new Set([Zt,vn,ts,ns,Wa,Xa]),M=new Uint32Array(4),E=new Int32Array(4),_=new L;let b=null,w=null;const A=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,N=null,U=null,P=null,F=null;this._outputColorSpace=Rt;let k=0,W=0,Q=null,q=-1,K=null;const j=new ht,fe=new ht;let ge=null;const ae=new je(0);let re=0,de=t.width,V=t.height,Z=1,oe=null,Ae=null;const _e=new ht(0,0,de,V),Ie=new ht(0,0,de,V);let et=!1;const ee=new to;let se=!1,le=!1;const ue=new _t,me=new L,ke=new ht,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function We(){return Q===null?Z:1}let I=n;function rt(y,O){return t.getContext(y,O)}let Ze,C,x,z,X,$,he,pe,J,ne,ve,Ne,ye,xe,Fe,Ge,qe,B,Me,te,Se,Te,ie;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ha}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",tn,!1),I===null){const O="webgl2";if(I=rt(O,y),I===null)throw rt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(y){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),it("WebGLRenderer: "+y.message),y}function Oe(){Ze=new Bp(I),Ze.init(),Se=new R0(I,Ze),C=new Cp(I,Ze,e,Se),x=new A0(I,Ze),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),U=I.createFramebuffer(),P=I.createFramebuffer(),F=I.createFramebuffer(),z=new Gp(I),X=new d0,$=new C0(I,Ze,x,X,C,Se,z),he=new Op(R),pe=new Hh(I),Te=new Tp(I,pe),J=new zp(I,pe,z,Te),ne=new Vp(I,J,pe,Te,z),B=new Hp(I,C,$),Fe=new Rp(X),ve=new f0(R,he,Ze,C,Te,Fe),Ne=new N0(R,X),ye=new m0,xe=new S0(Ze),qe=new wp(R,he,x,ne,g,c),Ge=new T0(R,ne,C),ie=new F0(I,z,C,x),Me=new Ap(I,Ze,z),te=new kp(I,Ze,z),z.programs=ve.programs,R.capabilities=C,R.extensions=Ze,R.properties=X,R.renderLists=ye,R.shadowMap=Ge,R.state=x,R.info=z}S!==Zt&&(T=new Xp(S,t.width,t.height,o,s,r));const De=new U0(R,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(de,V,!1))},this.getSize=function(y){return y.set(de,V)},this.setSize=function(y,O,Y=!0){if(De.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}de=y,V=O,t.width=Math.floor(y*Z),t.height=Math.floor(O*Z),Y===!0&&(t.style.width=y+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(de*Z,V*Z).floor()},this.setDrawingBufferSize=function(y,O,Y){de=y,V=O,Z=Y,t.width=Math.floor(y*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(S===Zt){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(_e)},this.setViewport=function(y,O,Y,G){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,O,Y,G),x.viewport(j.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(Ie)},this.setScissor=function(y,O,Y,G){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,O,Y,G),x.scissor(fe.copy(Ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){x.setScissorTest(et=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){Ae=y},this.getClearColor=function(y){return y.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,Y=!0){let G=0;if(y){let H=!1;if(Q!==null){const we=Q.texture.format;H=m.has(we)}if(H){const we=Q.texture.type,Re=p.has(we),Ee=qe.getClearColor(),Pe=qe.getClearAlpha(),Ue=Ee.r,Ke=Ee.g,$e=Ee.b;Re?(M[0]=Ue,M[1]=Ke,M[2]=$e,M[3]=Pe,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Ue,E[1]=Ke,E[2]=$e,E[3]=Pe,I.clearBufferiv(I.COLOR,0,E))}else G|=I.COLOR_BUFFER_BIT}O&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),qe.dispose(),ye.dispose(),xe.dispose(),X.dispose(),he.dispose(),ne.dispose(),Te.dispose(),ie.dispose(),ve.dispose(),De.dispose(),De.removeEventListener("sessionstart",mo),De.removeEventListener("sessionend",go),qn.stop()};function dt(y){y.preventDefault(),Do("WebGLRenderer: Context Lost."),D=!0}function at(){Do("WebGLRenderer: Context Restored."),D=!1;const y=z.autoReset,O=Ge.enabled,Y=Ge.autoUpdate,G=Ge.needsUpdate,H=Ge.type;Oe(),z.autoReset=y,Ge.enabled=O,Ge.autoUpdate=Y,Ge.needsUpdate=G,Ge.type=H}function tn(y){it("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function cn(y){const O=y.target;O.removeEventListener("dispose",cn),Nc(O)}function Nc(y){Fc(y),X.remove(y)}function Fc(y){const O=X.get(y).programs;O!==void 0&&(O.forEach(function(Y){ve.releaseProgram(Y)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,Y,G,H,we){O===null&&(O=ze);const Re=H.isMesh&&H.matrixWorld.determinantAffine()<0,Ee=zc(y,O,Y,G,H);x.setMaterial(G,Re);let Pe=Y.index,Ue=1;if(G.wireframe===!0){if(Pe=J.getWireframeAttribute(Y),Pe===void 0)return;Ue=2}const Ke=Y.drawRange,$e=Y.attributes.position;let Le=Ke.start*Ue,ot=(Ke.start+Ke.count)*Ue;we!==null&&(Le=Math.max(Le,we.start*Ue),ot=Math.min(ot,(we.start+we.count)*Ue)),Pe!==null?(Le=Math.max(Le,0),ot=Math.min(ot,Pe.count)):$e!=null&&(Le=Math.max(Le,0),ot=Math.min(ot,$e.count));const St=ot-Le;if(St<0||St===1/0)return;Te.setup(H,G,Ee,Y,Pe);let vt,ft=Me;if(Pe!==null&&(vt=pe.get(Pe),ft=te,ft.setIndex(vt)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*We()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(H.isLine){let It=G.linewidth;It===void 0&&(It=1),x.setLineWidth(It*We()),H.isLineSegments?ft.setMode(I.LINES):H.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else H.isPoints?ft.setMode(I.POINTS):H.isSprite&&ft.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const It=H._multiDrawStarts,Ce=H._multiDrawCounts,Gt=H._multiDrawCount,nt=Pe?pe.get(Pe).bytesPerElement:1,$t=X.get(G).currentProgram.getUniforms();for(let un=0;un<Gt;un++)$t.setValue(I,"_gl_DrawID",un),ft.render(It[un]/nt,Ce[un])}else if(H.isInstancedMesh)ft.renderInstances(Le,St,H.count);else if(Y.isInstancedBufferGeometry){const It=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,It);ft.renderInstances(Le,St,Ce)}else ft.render(Le,St)};function po(y,O,Y,G){N!==null&&y.isNodeMaterial&&N.setObject(G,y),se===!0&&Fe.setState(y,Y,!1),y.transparent===!0&&y.side===wt&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,hs(y,O,G),y.side=Wn,y.needsUpdate=!0,hs(y,O,G),y.side=wt):hs(y,O,G)}this.compile=function(y,O,Y=null){Y===null&&(Y=y),N!==null&&N.renderStart(y,O,Y),w=xe.get(Y),w.init(O),v.push(w),Y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),y!==Y&&y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),le=this.localClippingEnabled,se=Fe.init(this.clippingPlanes,le),se===!0&&Fe.setGlobalState(this.clippingPlanes,O),N!==null&&Ge.render(w.state.shadowsArray,Y,O);const G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const we=H.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){const Ee=we[Re];po(Ee,Y,O,H),G.add(Ee)}else po(we,Y,O,H),G.add(we)}),w=v.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(y,O,Y=null){const G=this.compile(y,O,Y);return new Promise(H=>{function we(){if(G.forEach(function(Re){const Pe=X.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&G.delete(Re)}),G.size===0){H(y);return}setTimeout(we,10)}Ze.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let or=null;function Oc(y){or&&or(y)}function mo(){qn.stop()}function go(){qn.start()}const qn=new Tc;qn.setAnimationLoop(Oc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(y){or=y,De.setAnimationLoop(y),y===null?qn.stop():qn.start()},De.addEventListener("sessionstart",mo),De.addEventListener("sessionend",go),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(y,O);const Y=De.enabled===!0&&De.isPresenting===!0,G=T!==null&&(Q===null||Y)&&T.begin(R,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(O),O=De.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,O,Q),w=xe.get(y,v.length),w.init(O),w.state.textureUnits=$.getTextureUnits(),v.push(w),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(ue,gn,O.reversedDepth),le=this.localClippingEnabled,se=Fe.init(this.clippingPlanes,le),b=ye.get(y,A.length),b.init(),A.push(b),De.enabled===!0&&De.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&lr(Re,O,-1/0,R.sortObjects)}lr(y,O,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(w.state.lightsArray),R.sortObjects===!0&&b.sort(oe,Ae),He=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,He&&qe.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Fe.beginShadows();const H=w.state.shadowsArray;if(Ge.render(H,y,O),se===!0&&Fe.endShadows(),(G&&T.hasRenderPass())===!1){const Re=b.opaque,Ee=b.transmissive;if(w.setupLights(),O.isArrayCamera){const Pe=O.cameras;if(Ee.length>0)for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){const $e=Pe[Ue];vo(Re,Ee,y,$e)}He&&qe.render(y);for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){const $e=Pe[Ue];_o(b,y,$e,$e.viewport)}}else Ee.length>0&&vo(Re,Ee,y,O),He&&qe.render(y),_o(b,y,O)}Q!==null&&W===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),G&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,O),Te.resetDefaultState(),q=-1,K=null,v.pop(),v.length>0?(w=v[v.length-1],$.setTextureUnits(w.state.textureUnits),se===!0&&Fe.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function lr(y,O,Y,G){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ee)){G&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);const Re=ne.update(y),Ee=y.material;Ee.visible&&b.push(y,Re,Ee,Y,ke.z,null,O)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ee))){const Re=ne.update(y),Ee=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ke.copy(Re.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){const Pe=Re.groups;for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){const $e=Pe[Ue],Le=Ee[$e.materialIndex];Le&&Le.visible&&b.push(y,Re,Le,Y,ke.z,$e,O)}}else Ee.visible&&b.push(y,Re,Ee,Y,ke.z,null,O)}}const we=y.children;for(let Re=0,Ee=we.length;Re<Ee;Re++)lr(we[Re],O,Y,G)}function _o(y,O,Y,G){const{opaque:H,transmissive:we,transparent:Re}=y;w.setupLightsView(Y),se===!0&&Fe.setGlobalState(R.clippingPlanes,Y),G&&x.viewport(j.copy(G)),H.length>0&&us(H,O,Y),we.length>0&&us(we,O,Y),Re.length>0&&us(Re,O,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function vo(y,O,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Le=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Bt(1,1,{generateMipmaps:!0,type:Le?xn:Zt,minFilter:jn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const we=w.state.transmissionRenderTarget[G.id],Re=G.viewport||j;we.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const Ee=R.getRenderTarget(),Pe=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(ae),re=R.getClearAlpha(),re<1&&R.setClearColor(16777215,.5),R.clear(),He&&qe.render(Y);const Ke=R.toneMapping;R.toneMapping=_n;const $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),se===!0&&Fe.setGlobalState(R.clippingPlanes,G),us(y,Y,G),$.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ot=0,St=O.length;ot<St;ot++){const vt=O[ot],{object:ft,geometry:It,material:Ce,group:Gt}=vt;if(Ce.side===wt&&ft.layers.test(G.layers)){const nt=Ce.side;Ce.side=Vt,Ce.needsUpdate=!0,xo(ft,Y,G,It,Ce,Gt),Ce.side=nt,Ce.needsUpdate=!0,Le=!0}}Le===!0&&($.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we))}R.setRenderTarget(Ee,Pe,Ue),R.setClearColor(ae,re),$e!==void 0&&(G.viewport=$e),R.toneMapping=Ke}function us(y,O,Y){const G=O.isScene===!0?O.overrideMaterial:null;for(let H=0,we=y.length;H<we;H++){const Re=y[H],{object:Ee,geometry:Pe,group:Ue}=Re;let Ke=Re.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),Ee.layers.test(Y.layers)&&xo(Ee,O,Y,Pe,Ke,Ue)}}function xo(y,O,Y,G,H,we){N!==null&&H.isNodeMaterial&&N.setObject(y,H),y.onBeforeRender(R,O,Y,G,H,we),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(R,O,Y,G,y,we),H.transparent===!0&&H.side===wt&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,R.renderBufferDirect(Y,O,G,H,y,we),H.side=Wn,H.needsUpdate=!0,R.renderBufferDirect(Y,O,G,H,y,we),H.side=wt):R.renderBufferDirect(Y,O,G,H,y,we),y.onAfterRender(R,O,Y,G,H,we)}function hs(y,O,Y){O.isScene!==!0&&(O=ze);const G=X.get(y),H=w.state.lights,we=w.state.shadowsArray,Re=H.state.version,Ee=ve.getParameters(y,H.state,we,O,Y,w.state.lightProbeGridArray),Pe=ve.getProgramCacheKey(Ee);let Ue=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=he.get(y.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",cn),Ue=new Map,G.programs=Ue);let $e=Ue.get(Pe);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===Re)return So(y,Ee),$e}else Ee.uniforms=ve.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,Y,Ee),y.onBeforeCompile(Ee,R),$e=ve.acquireProgram(Ee,Pe),Ue.set(Pe,$e),G.uniforms=Ee.uniforms;const Le=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=Fe.uniform),So(y,Ee),G.needsLights=Gc(y),G.lightsStateVersion=Re,G.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.sunLights.value=H.state.sun,Le.sunLightShadows.value=H.state.sunShadow,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.sunShadowMatrix.value=H.state.sunShadowMatrix,Le.sunShadowCascade.value=H.state.sunShadowCascade,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=$e,G.uniformsList=null,$e}function Mo(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ws.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function So(y,O){const Y=X.get(y);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Bc(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Y=0,G=y.length;Y<G;Y++){const H=y[Y];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function zc(y,O,Y,G,H){O.isScene!==!0&&(O=ze),$.resetTextureUnits();const we=O.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Ee=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qe.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=he.get(G.envMap||Re,Pe),Ke=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color;let vt=_n;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(vt=R.toneMapping);const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,It=ft!==void 0?ft.length:0,Ce=X.get(G),Gt=w.state.lights;if(se===!0&&(le===!0||y!==K)){const pt=y===K&&G.id===q;Fe.setState(G,y,pt)}let nt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Gt.state.version||Ce.outputColorSpace!==Ee||H.isBatchedMesh&&Ce.batching===!1||!H.isBatchedMesh&&Ce.batching===!0||H.isBatchedMesh&&Ce.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ce.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||H.isInstancedMesh&&Ce.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ce.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ce.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ce.instancingMorph===!1&&H.morphTexture!==null||Ce.envMap!==Ue||G.fog===!0&&Ce.fog!==we||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Fe.numPlanes||Ce.numIntersection!==Fe.numIntersection)||Ce.vertexAlphas!==Ke||Ce.vertexTangents!==$e||Ce.morphTargets!==Le||Ce.morphNormals!==ot||Ce.morphColors!==St||Ce.toneMapping!==vt||Ce.morphTargetsCount!==It||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ce.__version=G.version);let $t=Ce.currentProgram;nt===!0&&($t=hs(G,O,H),N&&G.isNodeMaterial&&N.onUpdateProgram(G,$t,Ce));let un=!1,In=!1,oi=!1;const ut=$t.getUniforms(),Mt=Ce.uniforms;if(x.useProgram($t.program)&&(un=!0,In=!0,oi=!0),G.id!==q&&(q=G.id,In=!0),Ce.needsLights){const pt=Bc(w.state.lightProbeGridArray,H);Ce.lightProbeGrid!==pt&&(Ce.lightProbeGrid=pt,In=!0)}if(un||K!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(I,"projectionMatrix",y.projectionMatrix),ut.setValue(I,"viewMatrix",y.matrixWorldInverse);const Fn=ut.map.cameraPosition;Fn!==void 0&&Fn.setValue(I,me.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,In=!0,oi=!0)}if(Ce.needsLights&&(Gt.state.sunShadowMap.length>0&&ut.setValue(I,"sunShadowMap",Gt.state.sunShadowMap,$),Gt.state.directionalShadowMap.length>0&&ut.setValue(I,"directionalShadowMap",Gt.state.directionalShadowMap,$),Gt.state.spotShadowMap.length>0&&ut.setValue(I,"spotShadowMap",Gt.state.spotShadowMap,$),Gt.state.pointShadowMap.length>0&&ut.setValue(I,"pointShadowMap",Gt.state.pointShadowMap,$)),H.isSkinnedMesh){ut.setOptional(I,H,"bindMatrix"),ut.setOptional(I,H,"bindMatrixInverse");const pt=H.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ut.setValue(I,"boneTexture",pt.boneTexture,$))}H.isBatchedMesh&&(ut.setOptional(I,H,"batchingTexture"),ut.setValue(I,"batchingTexture",H._matricesTexture,$),ut.setOptional(I,H,"batchingIdTexture"),ut.setValue(I,"batchingIdTexture",H._indirectTexture,$),ut.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ut.setValue(I,"batchingColorTexture",H._colorsTexture,$));const Nn=Y.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&B.update(H,Y,$t),(In||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,ut.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Mt.envMapIntensity.value=O.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=B0()),In){if(ut.setValue(I,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&kc(Mt,oi),we&&G.fog===!0&&Ne.refreshFogUniforms(Mt,we),Ne.refreshMaterialUniforms(Mt,G,Z,V,w.state.transmissionRenderTarget[y.id]),Ce.needsLights&&Ce.lightProbeGrid){const pt=Ce.lightProbeGrid;Mt.probesSH.value=pt.texture,Mt.probesMin.value.copy(pt.boundingBox.min),Mt.probesMax.value.copy(pt.boundingBox.max),Mt.probesResolution.value.copy(pt.resolution)}Ws.upload(I,Mo(Ce),Mt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ws.upload(I,Mo(Ce),Mt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(I,"center",H.center),ut.setValue(I,"modelViewMatrix",H.modelViewMatrix),ut.setValue(I,"normalMatrix",H.normalMatrix),ut.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const pt=G.uniformsGroups;for(let Fn=0,li=pt.length;Fn<li;Fn++){const bo=pt[Fn];ie.update(bo,$t),ie.bind(bo,$t)}}return $t}function kc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Gc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,O,Y){const G=X.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=O,X.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const Y=X.get(y);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,Y=0){Q=y,k=O,W=Y;let G=null,H=!1,we=!1;if(y){const Ee=X.get(y);if(Ee.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Ee.__webglFramebuffer),j.copy(y.viewport),fe.copy(y.scissor),ge=y.scissorTest,x.viewport(j),x.scissor(fe),x.setScissorTest(ge),q=-1;return}else if(Ee.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(Ee.__hasExternalTextures)$.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ke=y.depthTexture;if(Ee.__boundDepthTexture!==Ke){if(Ke!==null&&X.has(Ke)&&(y.width!==Ke.image.width||y.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const Ue=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?G=Ue[O][Y]:G=Ue[O],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?G=X.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[Y]:G=Ue,j.copy(y.viewport),fe.copy(y.scissor),ge=y.scissorTest}else j.copy(_e).multiplyScalar(Z).floor(),fe.copy(Ie).multiplyScalar(Z).floor(),ge=et;if(Y!==0&&(G=U),x.bindFramebuffer(I.FRAMEBUFFER,G)&&x.drawBuffers(y,G),x.viewport(j),x.scissor(fe),x.setScissorTest(ge),H){const Ee=X.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,Y)}else if(we){const Ee=O;for(let Pe=0;Pe<y.textures.length;Pe++){const Ue=X.get(y.textures[Pe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Y,Ee)}}else if(y!==null&&Y!==0){const Ee=X.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,Y)}q=-1};function yo(y){const O=X.get(y);return(O.__readFormat!==y.format||O.__readType!==y.type)&&(O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=C.textureFormatReadable(y.format),O.__typeReadable=C.textureTypeReadable(y.type)),O}this.readRenderTargetPixels=function(y,O,Y,G,H,we,Re,Ee=0){if(!(y&&y.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){x.bindFramebuffer(I.FRAMEBUFFER,Pe);try{const Ue=y.textures[Ee],Ke=Ue.format,$e=Ue.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);const Le=yo(Ue);if(Le.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-G&&Y>=0&&Y<=y.height-H&&I.readPixels(O,Y,G,H,Se.convert(Ke),Se.convert($e),we)}finally{const Ue=Q!==null?X.get(Q).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,O,Y,G,H,we,Re,Ee=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(O>=0&&O<=y.width-G&&Y>=0&&Y<=y.height-H){x.bindFramebuffer(I.FRAMEBUFFER,Pe);const Ue=y.textures[Ee],Ke=Ue.format,$e=Ue.type;y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);const Le=yo(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),I.readPixels(O,Y,G,H,Se.convert(Ke),Se.convert($e),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const St=Q!==null?X.get(Q).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,St);const vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wu(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ot),I.deleteSync(vt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,Y=0){const G=Math.pow(2,-Y),H=Math.floor(y.image.width*G),we=Math.floor(y.image.height*G),Re=O!==null?O.x:0,Ee=O!==null?O.y:0;$.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Re,Ee,H,we),x.unbindTexture()},this.copyTextureToTexture=function(y,O,Y=null,G=null,H=0,we=0){let Re,Ee,Pe,Ue,Ke,$e,Le,ot,St;const vt=y.isCompressedTexture?y.mipmaps[we]:y.image;if(Y!==null)Re=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Ke=Y.min.y,$e=Y.isBox3?Y.min.z:0;else{const Mt=Math.pow(2,-H);Re=Math.floor(vt.width*Mt),Ee=Math.floor(vt.height*Mt),y.isDataArrayTexture?Pe=vt.depth:y.isData3DTexture?Pe=Math.floor(vt.depth*Mt):Pe=1,Ue=0,Ke=0,$e=0}G!==null?(Le=G.x,ot=G.y,St=G.z):(Le=0,ot=0,St=0);const ft=Se.convert(O.format),It=Se.convert(O.type);let Ce;O.isData3DTexture?($.setTexture3D(O,0),Ce=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),Ce=I.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),Ce=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Gt=x.getParameter(I.UNPACK_ROW_LENGTH),nt=x.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=x.getParameter(I.UNPACK_SKIP_PIXELS),un=x.getParameter(I.UNPACK_SKIP_ROWS),In=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),x.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),x.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const oi=y.isDataArrayTexture||y.isData3DTexture,ut=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const Mt=X.get(y),Nn=X.get(O),pt=X.get(Mt.__renderTarget),Fn=X.get(Nn.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,pt.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let li=0;li<Pe;li++)oi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(y).__webglTexture,H,$e+li),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(O).__webglTexture,we,St+li)),I.blitFramebuffer(Ue,Ke,Re,Ee,Le,ot,Re,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||X.has(y)){const Mt=X.get(y),Nn=X.get(O);x.bindFramebuffer(I.READ_FRAMEBUFFER,P),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,F);for(let pt=0;pt<Pe;pt++)oi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,H,$e+pt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,H),ut?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nn.__webglTexture,we,St+pt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nn.__webglTexture,we),H!==0?I.blitFramebuffer(Ue,Ke,Re,Ee,Le,ot,Re,Ee,I.COLOR_BUFFER_BIT,I.NEAREST):ut?I.copyTexSubImage3D(Ce,we,Le,ot,St+pt,Ue,Ke,Re,Ee):I.copyTexSubImage2D(Ce,we,Le,ot,Ue,Ke,Re,Ee);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ut?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ce,we,Le,ot,St,Re,Ee,Pe,ft,It,vt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,we,Le,ot,St,Re,Ee,Pe,ft,vt.data):I.texSubImage3D(Ce,we,Le,ot,St,Re,Ee,Pe,ft,It,vt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,Le,ot,Re,Ee,ft,It,vt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,Le,ot,vt.width,vt.height,ft,vt.data):I.texSubImage2D(I.TEXTURE_2D,we,Le,ot,Re,Ee,ft,It,vt);x.pixelStorei(I.UNPACK_ROW_LENGTH,Gt),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),x.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),x.pixelStorei(I.UNPACK_SKIP_ROWS,un),x.pixelStorei(I.UNPACK_SKIP_IMAGES,In),we===0&&O.generateMipmaps&&I.generateMipmap(Ce),x.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){k=0,W=0,Q=null,x.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const dn=1.06,en=1.5,Wi=Math.PI,Xr=new L,Rl=new L,Pl=new L,Ot=new L,Fs=new L,yi=new L,Ll=new L,Os=new ce,qr=new Un,Yr=new Un,Dl=new Un,k0=new Dn,Kr=new L,Bs=new L,bi=new L,Ul=new L(0,1,0);function G0(){const i=[],e=[],t=[];for(const r of[-1,1]){const a=[0,en/2],o=[[0,-en/2],[r*dn/2,-en/2],[r*dn/2,en/2-dn/2],[r*dn/2,en/2-dn*dn/(4*en)],[r*dn/2,en/2]];for(let c=0;c<4;c++){const l=a,h=o[r>0?c:c+1],d=o[r>0?c+1:c],u=(f,g)=>{const S=l[0]+(h[0]-l[0])*f/12+(d[0]-l[0])*g/12,m=l[1]+(h[1]-l[1])*f/12+(d[1]-l[1])*g/12;i.push(S,m,0),e.push(S/dn+.5,m/en+.5),t.push({side:r,corner:c>=2,wing:c===1||c===2})};for(let f=0;f<12;f++)for(let g=0;g<12-f;g++)u(f,g),u(f+1,g),u(f,g+1),f+g<11&&(u(f+1,g),u(f+1,g+1),u(f,g+1))}}const s=new Dt;return s.setAttribute("position",new st(i,3)),s.setAttribute("uv",new st(e,2)),s.computeVertexNormals(),{geometry:s,folds:t}}class H0{root=new gt;materials;page=G0();geometry=this.page.geometry;mesh;texture;uniforms={u_origin:{value:null},u_art:{value:null},u_original:{value:1},u_pencil:{value:0},u_paint:{value:0}};constructor(e,t){const n=new an({map:e,color:"#fff9ec",roughness:.98,side:wt,transparent:!0});n.forceSinglePass=!0,n.userData.sourceOpacity=1,this.uniforms.u_art.value=t??e??null,n.onBeforeCompile=s=>{Object.assign(s.uniforms,this.uniforms),s.vertexShader=`attribute vec2 originUv; varying vec2 v_originUv; varying vec2 v_leafUv;
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
        #include <opaque_fragment>`)},n.customProgramCacheKey=()=>"atelier-anime-page-v1",this.materials=[n],this.geometry.setAttribute("originUv",new st(new Float32Array(this.geometry.getAttribute("uv").count*2),2)),this.mesh=new ct(this.geometry,n),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.root.add(this.mesh)}update(e,t,n,s){if(this.root.visible=!!s,!s)return;const r=.32*(1-Be((e-9)/2.8));r>0&&t>0&&(e+=(11.8-e)*Be(t/r));const a=Math.max(0,(t-r)/(1-r)),o=this.geometry.getAttribute("uv"),c=this.geometry.getAttribute("originUv");if(this.texture!==s.texture){this.texture=s.texture,this.uniforms.u_origin.value=s.texture;for(let m=0;m<o.count;m++){const p=o.getX(m),M=1-o.getY(m),E=s.uvCorners;Os.copy(E[0]).lerp(E[1],p).multiplyScalar(1-M),Os.addScaledVector(E[2],(1-p)*M).addScaledVector(E[3],p*M),c.setXY(m,Os.x,Os.y)}c.needsUpdate=!0}const l=Be((e-.65)/1.95),h=Math.sin(Math.min(1,e/2.6)*Wi),d=Be((e-9)/.95),u=Be((e-10)/1),f=Be((e-10.95)/.8);this.uniforms.u_original.value=1-Be((e-.73)/.8),this.uniforms.u_pencil.value=-.12+1.3*Be((e-2.8)/2.5),this.uniforms.u_paint.value=-.18+1.4*Be((e-5.1)/2.6),Kr.set(0,.84+.04*Math.sin(e*1.1)*(1-f),.05),qr.setFromEuler(k0.set(-.13-(1-l)*4.8-.5*f,-.1+.07*Math.sin(e*.7)*l-.32*f,-.025+.04*Math.sin(e*.8)*(1-f)));let g=1;if(a>0){const m=a,p=1-m;Bs.set(.42,1.9,-.45),bi.copy(n).multiplyScalar(.6),bi.x-=.2,bi.y+=.4;const M=new L(0,.84,.05);Kr.copy(M).multiplyScalar(p*p*p).addScaledVector(Bs,3*p*p*m).addScaledVector(bi,3*p*m*m).addScaledVector(n,m*m*m),Ll.copy(Bs).sub(M).multiplyScalar(3*p*p).addScaledVector(Ot.copy(bi).sub(Bs),6*p*m).addScaledVector(Ot.copy(n).sub(bi),3*m*m).normalize(),Yr.setFromUnitVectors(Ul,Ll),Dl.setFromAxisAngle(Ul,.42*Math.sin(m*Wi)),Yr.multiply(Dl),qr.slerp(Yr,Be(m/.22)),g=1-.98*Be((m-.7)/.3)}const S=this.geometry.getAttribute("position");for(let m=0;m<o.count;m++){const p=o.getX(m),M=1-o.getY(m);Ot.set((p-.5)*dn,(.5-M)*en,0);const{side:E,corner:_,wing:b}=this.page.folds[m];_&&(yi.set(0,en/2,0),Fs.set(E,-1,0).normalize(),Ot.sub(yi).applyAxisAngle(Fs,E*(Wi-.016)*d).add(yi)),b&&(yi.set(0,en/2,0),Fs.set(E*dn/2,-en,0).normalize(),Ot.sub(yi).applyAxisAngle(Fs,E*(Wi-.024)*u).add(yi));const w=Math.sign(Ot.x),A=Math.abs(Ot.x);Ot.z-=.075*f*(1-Math.min(1,A/.1)),Ot.z+=.11*f*A,w&&(Ot.x*=1-.06*f),Ot.multiplyScalar(g).applyQuaternion(qr).add(Kr),l<1&&(Rl.copy(s.corners[0]).lerp(s.corners[1],p),Pl.copy(s.corners[2]).lerp(s.corners[3],p),Xr.copy(Rl).lerp(Pl,M),Xr.y+=.002+h*.24*p*p,Ot.lerp(Xr,1-l),Ot.y+=.2*Math.sin(l*Wi)),S.setXYZ(m,Ot.x,Ot.y,Ot.z)}S.needsUpdate=!0,this.geometry.computeVertexNormals()}dispose(){this.geometry.dispose(),this.materials.forEach(e=>e.dispose())}}const mt=(i,...e)=>({advance:i,strokes:e}),Il={Д:mt(1.08,"M0 0 C.28 .09 .4 .64 .67 .97 C.46 1.05 .15 .78 .23 .35 C.32 -.04 .98 -.05 .96 .42 C.95 .75 .73 1.04 .67 .97 C.68 .58 .83 .04 1.08 .07","M.12 .10 C-.01 -.31 .04 -.38 .16 -.11 M.9 .09 C1.04 -.22 1.04 -.31 1.15 -.17"),В:mt(.92,"M0 0 C.19 .21 .34 .75 .45 .98 C.12 .96 .08 .63 .22 .57 C.42 .47 .88 .63 .83 .84 C.78 1.08 .48 1.04 .45 .98 C.4 .79 .27 .29 .27 .14 C.42 -.15 .94 -.04 .91 .31 C.89 .58 .52 .54 .37 .48 C.47 .17 .63 .02 .92 .08"),а:mt(.72,"M0 0 C.11 .13 .29 .66 .49 .6 C.19 .76 .03 .32 .17 .12 C.32 -.10 .48 .28 .55 .57 C.47 .26 .42 -.07 .72 .08"),в:mt(.65,"M0 0 C.22 .18 .57 .92 .39 1.01 C.20 1.10 .03 .32 .22 .29 C.43 .36 .69 .60 .49 .67 C.24 .71 .04 .09 .28 .02 C.48 -.04 .59 .09 .65 .08"),г:mt(.62,"M0 0 C.15 .23 .28 .63 .48 .59 C.69 .49 .21 .25 .27 .09 C.32 -.06 .50 .01 .62 .08"),д:mt(.72,"M0 0 C.16 .18 .32 .65 .49 .59 C.23 .73 .05 .35 .15 .13 C.28 -.05 .49 .16 .55 .55 C.48 .16 .48 -.36 .25 -.43 C-.02 -.53 .06 -.18 .38 -.06 C.56 .00 .61 .05 .72 .08"),е:mt(.57,"M0 0 C.16 .08 .58 .40 .43 .56 C.29 .71 .04 .38 .15 .14 C.24 -.05 .44 -.01 .57 .08"),ё:mt(.57,"M0 0 C.16 .08 .58 .40 .43 .56 C.29 .71 .04 .38 .15 .14 C.24 -.05 .44 -.01 .57 .08","M.26 .82 L.27 .84","M.48 .82 L.49 .84"),и:mt(.75,"M0 0 C.13 .10 .27 .48 .31 .60 C.25 .38 .09 .02 .26 .02 C.46 -.01 .55 .41 .62 .6 C.55 .34 .46 -.03 .75 .08"),й:mt(.75,"M0 0 C.13 .10 .27 .48 .31 .60 C.25 .38 .09 .02 .26 .02 C.46 -.01 .55 .41 .62 .6 C.55 .34 .46 -.03 .75 .08","M.33 .82 C.39 .67 .53 .67 .62 .82"),к:mt(.74,"M0 0 C.15 .16 .22 .49 .28 .61 C.25 .48 .12 .05 .20 .04 C.29 .23 .37 .38 .56 .59 C.40 .40 .23 .37 .32 .29 C.52 .30 .40 -.09 .74 .08"),м:mt(1,"M0 0 C.21 .03 .26 .44 .32 .59 C.21 .08 .27 -.05 .40 .06 C.57 .25 .60 .50 .65 .60 C.60 .30 .58 .02 .68 .02 C.85 -.01 .87 .45 .92 .58 C.82 .27 .81 -.03 1 .08"),н:mt(.74,"M0 0 C.12 .13 .25 .48 .29 .60 C.24 .38 .16 .10 .19 .04 C.23 .27 .39 .27 .54 .31 C.59 .40 .62 .55 .64 .60 C.58 .35 .48 -.03 .74 .08"),о:mt(.67,"M0 0 C.18 .16 .34 .63 .49 .59 C.16 .78 .00 .15 .24 .03 C.47 -.08 .64 .38 .49 .59 C.43 .67 .48 .34 .67 .36 C.71 .27 .61 .13 .67 .08"),п:mt(.76,"M0 0 C.16 .20 .24 .49 .28 .60 C.22 .39 .11 .06 .18 .02 C.32 .41 .50 .75 .61 .58 C.68 .47 .37 -.10 .76 .08"),р:mt(.7,"M0 0 C.16 .21 .23 .54 .29 .59 C.21 .30 .07 -.38 .12 -.45 C.16 -.40 .28 .37 .47 .56 C.66 .76 .67 .13 .46 .07 C.36 .03 .51 .02 .70 .08"),с:mt(.57,"M0 0 C.18 .18 .33 .68 .49 .54 C.42 .72 .15 .51 .14 .22 C.11 -.03 .35 -.04 .57 .08"),т:mt(1.05,"M0 0 C.13 .18 .24 .50 .28 .60 C.20 .40 .13 .13 .17 .02 C.32 .40 .49 .75 .57 .58 C.65 .41 .39 .12 .46 .02 C.63 .37 .80 .73 .89 .55 C.96 .35 .69 -.10 1.05 .08"),у:mt(.74,"M0 0 C.17 .18 .25 .49 .30 .60 C.23 .36 .10 .07 .26 .02 C.45 -.04 .57 .42 .62 .60 C.54 .34 .53 -.38 .26 -.45 C.02 -.52 .01 -.22 .38 -.06 C.54 .00 .65 .05 .74 .08"),ч:mt(.73,"M0 0 C.12 .15 .25 .47 .29 .60 C.20 .31 .19 .22 .32 .23 C.48 .23 .58 .47 .62 .60 C.55 .38 .44 -.04 .73 .08"),ш:mt(1.02,"M0 0 C.14 .16 .25 .47 .29 .60 C.22 .38 .10 .04 .26 .02 C.40 .00 .52 .46 .55 .59 C.48 .35 .38 .00 .53 .02 C.70 .02 .82 .47 .85 .6 C.77 .34 .72 -.04 1.02 .08"),щ:mt(1.06,"M0 0 C.14 .16 .25 .47 .29 .60 C.22 .38 .10 .04 .26 .02 C.40 .00 .52 .46 .55 .59 C.48 .35 .38 .00 .53 .02 C.70 .02 .82 .47 .85 .6 C.77 .34 .72 -.04 .94 .05 C1.06 .05 .92 -.35 .83 -.31 C.75 -.24 .94 -.02 1.06 .08"),ы:mt(1.03,"M0 0 C.13 .17 .26 .48 .29 .60 C.23 .35 .11 .00 .26 .02 C.49 .02 .56 .36 .39 .35 C.25 .32 .42 .01 .57 .02 C.76 .03 .86 .49 .89 .60 C.81 .34 .75 -.04 1.03 .08"),"!":mt(.34,"M.15 .25 C.23 .60 .26 .80 .28 .93","M.13 .03 L.15 .05"),",":mt(.27,"M.10 .05 C.15 -.01 .11 -.11 .04 -.16"),".":mt(.25,"M.11 .02 L.14 .04")},Ga=(i,e)=>.021*Math.pow(Math.abs(i)/.39,4)+.027*Math.pow(e/1.02,5);function Nl(i){const e=i.match(/[MLCQ]|-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/g),t=[];let n=0,s=0,r=0,a=0;const o=()=>Number(e[n++]),c=(l,h,d=!1)=>{t.length&&!d&&(a+=Math.hypot(l-s,h-r)),s=l,r=h,t.push({x:s,y:r,length:a})};for(;n<e.length;){const l=e[n++],h=s,d=r;if(l==="M"){c(o(),o(),!0);continue}if(l==="L"){c(o(),o());continue}if(l==="Q"){const u=o(),f=o(),g=o(),S=o();for(let m=1;m<=24;m++){const p=m/24,M=1-p;c(M*M*h+2*M*p*u+p*p*g,M*M*d+2*M*p*f+p*p*S)}continue}if(l==="C"){const u=o(),f=o(),g=o(),S=o(),m=o(),p=o();for(let M=1;M<=36;M++){const E=M/36,_=1-E;c(_*_*_*h+3*_*_*E*u+3*_*E*E*g+E*E*E*m,_*_*_*d+3*_*_*E*f+3*_*E*E*S+E*E*E*p)}}}return{length:a,at:l=>{const h=Math.max(0,Math.min(a,l));let d=0,u=t.length-1;for(;d<u;){const m=Math.ceil((d+u)/2);t[m].length<=h?d=m:u=m-1}const f=t[d],g=t[Math.min(d+1,t.length-1)],S=(h-f.length)/Math.max(1e-6,g.length-f.length);return{x:f.x+(g.x-f.x)*S,y:f.y+(g.y-f.y)*S}}}}function V0(){const i=["Дорогой друг,","Всё готово.","До встречи!","Ваш помощник"],e=[],t=[],n=[];let s=0,r;const a=(l,h,d,u)=>{r&&(s+=Math.hypot(l-r.x,h-r.y)),r={x:l,y:h,lift:d,length:s,count:u},n.push(r)};i.forEach((l,h)=>{const d=[...l].reduce((m,p)=>m+(Il[p]?.advance??.4),0),u=Math.min(.071,.65/d);let f=-d*u/2,g=!1;const S=.82-h*.17;for(const m of l){const p=Il[m];if(!p){f+=.4*u,g=!1;continue}p.strokes.forEach((M,E)=>{let _=Nl(M);const b=_.at(0),w=E===0&&g&&!!r&&Math.abs(r.y-S)<.04;if(w&&r){const U=(r.x-f)/u,P=(r.y-S)/u;_=Nl(`M${U} ${P} Q${(U+b.x)/2} ${Math.min(P,b.y)} ${b.x} ${b.y} ${M}`)}const A=_.length,v=Math.max(3,Math.ceil(A/.025)),T=_.at(0),R=f+T.x*u,D=S+T.y*u;if(r&&!w){const U=r;for(let P=1;P<=8;P++){const F=P/8;a(U.x+(R-U.x)*F,U.y+(D-U.y)*F,Math.sin(F*Math.PI)*.028,t.length)}}const N=e.length/3;for(let U=0;U<=v;U++){const P=A*U/v,F=_.at(P),k=_.at(Math.max(0,P-.006)),W=_.at(Math.min(A,P+.006)),Q=f+F.x*u,q=S+F.y*u,K=W.x-k.x,j=W.y-k.y,fe=Math.hypot(K,j)||1,ge=.0016+7e-4*Math.max(0,-j/fe)+16e-5*Math.sin(U*.7);for(const ae of[-1,1]){const re=Q-ae*j/fe*ge,de=q+ae*K/fe*ge;e.push(re,de,Ga(re,de)+.0025)}if(U){const ae=N+U*2;t.push(ae-2,ae-1,ae,ae-1,ae+1,ae)}a(Q,q,0,t.length)}}),f+=p.advance*u,g=!/[.,!]/.test(m)}});const o=new Dt;o.setAttribute("position",new st(e,3)),o.setIndex(t),o.computeVertexNormals();const c=new L;return{geometry:o,lines:i,at:l=>{const h=Math.max(0,Math.min(1,l))*s;let d=0,u=n.length-1;for(;d<u;){const E=Math.ceil((d+u)/2);n[E].length<=h?d=E:u=E-1}const f=n[d],g=n[Math.min(d+1,n.length-1)],S=(h-f.length)/Math.max(1e-6,g.length-f.length),m=f.x+(g.x-f.x)*S,p=f.y+(g.y-f.y)*S,M=f.lift+(g.lift-f.lift)*S;return o.setDrawRange(0,f.count),c.set(m,p,Ga(m,p)+.004+M)}}}const tt=Math.PI,Fl=i=>Math.max(0,Math.min(1,i)),Zr="outgoingLight=mix(outgoingLight*12.92,1.055*pow(max(outgoingLight,vec3(0)),vec3(1.0/2.4))-.055,step(vec3(.0031308),outgoingLight));";class W0{root=new gt;acts=[];geometries=[];materials=[];textures=[];surfaces=[];anime;key=new Ec(16773332,2.2);ambient=new wc(15331829,2.1);shadow;active=-1;constructor(e,t=[]){this.surfaces=t.map(s=>{const r=s.clone();return r.flipY=!0,r.colorSpace=Rt,r.needsUpdate=!0,this.textures.push(r),r}),e.add(this.root,this.key,this.key.target,this.ambient),this.root.visible=!1,this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024),this.key.shadow.normalBias=.008,this.key.shadow.bias=-25e-5,this.key.shadow.radius=3;const n=new Rh({opacity:.28,transparent:!0,depthWrite:!1,side:wt});this.materials.push(n),this.shadow=new ct(this.geo(new Pt(2.7,2)),n),this.shadow.rotation.x=-tt/2,this.shadow.position.y=.005,this.shadow.receiveShadow=!0,this.shadow.renderOrder=1.6,this.root.add(this.shadow)}geo(e){return this.geometries.push(e),e}material(e,t=!1){const n=new an({color:e,roughness:t?.63:.94,metalness:t?.26:0,side:wt,transparent:!0,depthWrite:!0});return n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",Zr+`
#include <opaque_fragment>`)},t&&this.surfaces[3]&&(n.map=this.surfaces[3],n.bumpMap=this.surfaces[3],n.bumpScale=7e-4),n.customProgramCacheKey=()=>"atelier-painted-light",n.userData.sourceOpacity=n.opacity,this.materials.push(n),n}inkMaterial(e="#e8c68b",t=.8){const n=new eo({color:e,transparent:!0,opacity:t,depthWrite:!1,side:wt,toneMapped:!1});return n.userData.sourceOpacity=n.opacity,n.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",Zr+`
#include <opaque_fragment>`)},n.customProgramCacheKey=()=>"atelier-foil-light",this.materials.push(n),n}mesh(e,t,n=this.root){const s=new ct(this.geo(e),t);return s.castShadow=!0,s.receiveShadow=!0,s.renderOrder=2,n.add(s),s}box(e,t,n,s,r){return this.mesh(new ai(e,t,n),s,r)}paperTexture(){if(this.surfaces[0])return this.surfaces[0];const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#efe2c4",t.fillRect(0,0,256,256);let n=4217;for(let r=0;r<18e3;r++){n=n*16807%2147483647;const a=n%256;n=n*16807%2147483647;const o=n%256;t.fillStyle=r%3?"#9c83520a":"#fff9e116",t.fillRect(a,o,1,1)}const s=new rs(e);return s.colorSpace=Rt,this.textures.push(s),s}paper(e="#ffffff"){const t=this.material(e);return t.map=this.paperTexture(),t}text(e,t,n,s=70,r="#53645c"){const a=document.createElement("canvas");a.width=768,a.height=Math.round(768*n/t);const o=a.getContext("2d");o.textAlign="center",o.textBaseline="middle",o.fillStyle=r,o.font=`${s}px Georgia`,o.fillText(e,384,a.height/2,724);const c=new rs(a);c.colorSpace=Rt,this.textures.push(c);const l={value:0},h=this.material("#ffffff");h.map=c,h.alphaTest=.02,h.depthWrite=!1,h.onBeforeCompile=u=>{u.uniforms.u_inkReveal=l,u.fragmentShader=`uniform float u_inkReveal;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a*=1.0-smoothstep(u_inkReveal-.025,u_inkReveal,vMapUv.x);`).replace("#include <opaque_fragment>",Zr+`
#include <opaque_fragment>`)},h.customProgramCacheKey=()=>"atelier-written-ink";const d=new ct(this.geo(new Pt(t,n,24,8)),h);return d.renderOrder=2.2,{mesh:d,reveal:l}}line(e,t,n,s){const r=new er(new Na(e),56,t,5,!1),a=this.mesh(r,n,s);return a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=2.3,a}foldSheet(e,t,n,s){const r=new gt;s.add(r);const a=this.mesh(new Pt(e,t,18,12).translate(0,t/2,0),n,r);return{pivot:r,page:a}}ring(e,t,n,s){const r=this.mesh(new js(e,t,6,72),n,s);return r.castShadow=!1,r}bird(e,t){const n=new gt;e.add(n);const s=(o,c)=>{const l=new Dt;return l.setAttribute("position",new st(o,3)),l.computeVertexNormals(),this.mesh(l,t,c)};s([0,0,.11,-.038,.012,-.065,.038,.012,-.065],n),s([0,0,.11,0,.055,-.025,.038,.012,-.065],n);const r=new gt,a=new gt;return n.add(r,a),s([-.015,.014,.015,-.24,.025,-.055,-.055,-.004,-.11],r),s([.015,.014,.015,.055,-.004,-.11,.24,.025,-.055],a),{root:n,left:r,right:a}}act(e,t,n){return{root:e,materials:this.materials.slice(t),update:n}}animePage(){const e=new H0(this.surfaces[0],this.surfaces[4]);return this.anime=e,{root:e.root,materials:e.materials,update:(t,n,s,r)=>e.update(t,n,s,r)}}artistMagic(){const e=this.materials.length,t=new gt,n=this.inkMaterial("#d8bb81",.7),s=this.inkMaterial("#9dc7bf",.45),r=this.ring(.43,.004,n,t);r.position.set(.04,.48,-.07),r.scale.set(.85,1.14,1);const a=this.ring(.415,.0015,s,t);a.position.copy(r.position),a.scale.copy(r.scale);const o=Array.from({length:5},(l,h)=>{const d=Array.from({length:32},(g,S)=>{const m=S/31;return new L(-.025+m*.65,.49+m*.35+Math.sin(m*tt*2+h*.45)*.035,-.01+Math.sin(m*tt)*.15+h*.008)}),u=this.inkMaterial(h%2?"#dbb875":"#f2dfad",.4);return{line:this.line(d,.0017,u,t),material:u}}),c=Array.from({length:14},()=>this.mesh(new Ti(.005,5,4),n,t));return this.act(t,e,(l,h)=>{const d=Math.max(Be(l/.7)*(1-Be((l-1.7)/.9)),Be(h/.13)*(1-Be((h-.78)/.22)));r.position.x=.04+h*.14,a.position.copy(r.position),r.visible=a.visible=d>.001,r.scale.set(.85*d,1.14*d,1),a.scale.copy(r.scale),n.opacity=.58,s.opacity=.35,o.forEach(({line:u,material:f},g)=>{const S=Be((l-1.75)/.5)*(1-Be((l-6.9)/1));f.opacity=S*(.12+.2*(.5+.5*Math.sin(l*4.6+g))),u.rotation.z=Math.sin(l*.8+g)*.024,u.position.y=Math.sin(l*1.5+g)*.012,u.visible=S>.001}),c.forEach((u,f)=>{const g=((l-1.8)*.2+f/14)%1,S=Be((l-1.8)/.6)*(1-Be((l-7.1)/.8));u.visible=g>=0&&S>.01,u.position.set(-.025+g*.65,.5+g*.38+Math.sin(g*5+f)*.025,-.01+Math.sin(g*tt)*.15),u.scale.setScalar(Math.sin(Math.max(0,g)*tt)*S)})})}paperCity(){const e=this.materials.length,t=new gt,n=this.paper(),s=this.paper("#d4dac2"),r=this.material("#aa874c",!0),a=this.paper("#ffffff");this.surfaces[2]&&(a.map=this.surfaces[2]);const o=new gt;t.add(o);const c=this.box(.9,.01,.57,n,o);c.position.y=.01;const l=[-1,1].map(_=>{const b=this.foldSheet(.46,.58,n,o);return b.pivot.position.set(_*.23,.034,0),b.pivot.rotation.z=_*tt/2,{...b,side:_}}),h=[],d=(_,b,w,A,v)=>{const T=new gt;T.position.set(_,.043,b),t.add(T),h.push({pivot:T,delay:v});const R=this.paper();if(this.surfaces[1]){const U=this.surfaces[1].clone();U.wrapS=U.wrapT=Xs,U.repeat.set(.27,Math.max(.45,w/(A*3.7))),U.offset.x=.015,U.needsUpdate=!0,this.textures.push(U),R.map=U}const D=this.box(A,w,A*.8,R,T);D.position.y=w/2;const N=this.mesh(new Ji(A*.81,A*.54,4),a,T);N.position.y=w+A*.24,N.rotation.y=tt/4;for(const U of[.032,w-.03]){const P=this.box(A*1.07,.015,A*.88,r,T);P.position.y=U}return T};d(-.33,-.13,.64,.16,1.3),d(.33,-.18,.78,.15,1.65),d(-.12,-.27,.88,.14,2.05),d(.12,-.23,.59,.18,2.3),d(-.37,.12,.31,.17,2.6),d(.36,.15,.39,.15,2.85);const u=new gt;u.position.set(0,.04,.15),t.add(u),h.push({pivot:u,delay:1.8});const f=new Fa;f.moveTo(-.24,0),f.lineTo(-.24,.34),f.absarc(0,.34,.24,tt,0,!0),f.lineTo(.24,0),f.lineTo(.17,0),f.lineTo(.17,.34),f.absarc(0,.34,.17,0,tt,!1),f.lineTo(-.17,0),f.closePath(),this.mesh(new Qs(f,{depth:.045,bevelEnabled:!0,bevelThickness:.002,bevelSize:.003,bevelSegments:2,curveSegments:24}),n,u),this.mesh(new js(.202,.006,6,72,tt),r,u).position.set(0,.337,.051),this.box(.43,.028,.2,s,u).position.set(0,.01,.08);const m=new gt;m.position.set(0,.065,.28),t.add(m);for(let _=0;_<8;_++)this.box(.29,.012,.055,n,m).position.set(0,Math.sin(_/7*tt)*.075,_*.044);for(const _ of[-1,1])this.line(Array.from({length:14},(b,w)=>new L(_*.155,.08+Math.sin(w/13*tt)*.075,w/13*.34)),.004,r,m);const p=this.mesh(new Ti(.045,20,12),r,t);p.position.set(.25,.94,-.18);const M=this.ring(.071,.002,r,t);M.position.copy(p.position);const E=[this.bird(t,n),this.bird(t,n)];return E.forEach(_=>_.root.scale.setScalar(.22)),this.act(t,e,(_,b)=>{const w=Be(b/.67),A=Be((b-.66)/.34);t.position.set(-5*A,Math.sin(A*tt)*.045,0),t.rotation.y=A*.3;const v=Be((_-.15)/1);o.scale.set(1,.2+.8*v,.2+.8*v),o.rotation.y=-.08*(1-v),o.scale.x=1-.72*Be((b-.44)/.25),l.forEach(({pivot:R,side:D})=>{R.rotation.x=-tt/2,R.rotation.z=D*((1-v)*.44+w*.48)*tt}),h.forEach(({pivot:R,delay:D})=>{const N=Be((_-D)/1.2)*(1-Be((b-(D-1.3)*.045)/.53));R.visible=_>=D,R.rotation.x=(1-N)*tt/2,R.rotation.z=Math.sin(N*tt)*.08}),m.scale.z=.01+.99*Be((_-3.6)/1.25)*(1-w),m.visible=_>3.6;const T=Be((_-4)/1.5)*(1-Be(b/.35));p.scale.setScalar(T),M.scale.setScalar(T),p.position.x=.22+Math.sin(_*.3)*.035,M.position.copy(p.position),E.forEach((R,D)=>{const N=Be((_-7.7)/1),U=Be((_-4.7-D*.4)/.5)*(1-N);R.root.visible=U>.001,R.root.scale.setScalar(.22*U);const P=(_-4.7)*1.4+D*tt;R.root.position.set(Math.cos(P)*.36,.78+Math.sin(P*.6)*.08+N*.18,Math.sin(P)*.24-N*.35),R.root.rotation.y=-P,R.left.rotation.z=Math.sin(_*9+D)*.4,R.right.rotation.z=-R.left.rotation.z})})}writingAtelier(){const e=this.materials.length,t=new gt,n=this.paper(),s=this.paper("#d1b889"),r=this.material("#b18e52",!0),a=this.material("#315e61"),o=new gt;t.add(o),this.box(.8,.019,.46,s,o).position.set(0,.014,.1);const l=this.foldSheet(.78,.34,n,o);l.pivot.position.set(0,.026,-.13);const h=new gt;t.add(h);const d=new Pt(.78,1.02,22,32).translate(0,.51,0),u=d.getAttribute("position");for(let P=0;P<u.count;P++)u.setZ(P,Ga(u.getX(P),u.getY(P)));d.computeVertexNormals();const f=this.mesh(d,this.paper(),h),g=V0(),S=this.inkMaterial("#304d4a",1);S.depthWrite=!0;const m=this.mesh(g.geometry,S,h);m.castShadow=!1,m.receiveShadow=!1;const p={value:0},M={value:0};for(const P of[f.material,S]){const F=P.onBeforeCompile;P.onBeforeCompile=(k,W)=>{F.call(P,k,W),k.uniforms.u_flutter=p,k.uniforms.u_windTime=M,k.vertexShader=`uniform float u_flutter;uniform float u_windTime;
`+k.vertexShader,k.vertexShader=k.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.z+=u_flutter*(.033*sin(position.y*12.0-u_windTime*8.0)+.014*sin(position.x*18.0+u_windTime*5.0))*smoothstep(0.0,.5,position.y);`)},P.customProgramCacheKey=()=>"handwritten-wind-"+P.type}const E=this.mesh(new Tn(.061,.052,.095,20),a,t),_=this.ring(.048,.006,r,t);_.rotation.x=tt/2;const b=new gt;t.add(b);const w=this.mesh(new Tn(.0026,.0016,.43,7),r,b);w.position.y=.215;const A=new Fa;A.moveTo(0,.12),A.bezierCurveTo(-.1,.28,-.08,.44,.024,.58),A.bezierCurveTo(.064,.43,.1,.25,0,.12);const v=this.mesh(new Qs(A,{depth:.0015,bevelEnabled:!1,curveSegments:16}),n,b);v.rotation.y=.26;for(let P=0;P<8;P++){const F=.18+P*.038;this.line([new L(0,F,.003),new L(-.053*Math.sin((F-.12)/.46*tt),F+.047,.009)],7e-4,r,b)}const T=this.mesh(new Ji(.007,.029,5),r,b);T.position.y=.0145,T.rotation.z=tt;const R=new L,D=new L(.02,.037,.11),N=new L,U=new L;return this.act(t,e,(P,F,k)=>{const W=Be((P-.7)/1.05),Q=Be((F-.06)/.94),q=Be((F-.5)/.5);o.position.x=-5*q,l.pivot.rotation.x=-tt/2+Be((P-.25)/.85)*tt*(1-Be(F/.38));const K=Be((P-1.9)/5.5),j=g.at(K);if(h.position.copy(D),h.rotation.set(-(1-W)*tt/2,0,0),h.scale.set(1,.08+.92*W,1),F>0){N.set(-.4,1.6,-.4),U.copy(k).multiplyScalar(.56),U.x-=.9,U.y+=.6;const fe=1-Q;R.copy(D).multiplyScalar(fe**3).addScaledVector(N,3*fe*fe*Q).addScaledVector(U,3*fe*Q*Q).addScaledVector(k,Q**3),h.position.copy(R),h.rotation.set(-.25*Math.sin(Q*tt),Math.sin(Q*tt*1.7)*.65,-.22*Math.sin(Q*tt*2)),h.scale.multiplyScalar(1-.997*Q**3)}if(p.value=Be(F/.18)*(1-Be((F-.88)/.12)),M.value=P+F*3,E.position.set(-.46-5*q,.061,.23),_.position.set(-.46-5*q,.11,.23),P<1.9){const fe=Be((P-.25)/1.65),ge=g.at(0);b.position.set(-.46+(ge.x+.48)*fe,.11+(.037+ge.y-.11)*fe+Math.sin(fe*tt)*.18,.23+(.11+ge.z-.23)*fe),b.rotation.set(.12,0,.25-.6*fe)}else if(P<7.55)b.position.copy(j).add(D),b.rotation.set(.12,0,-.35+Math.sin(P*3)*.025);else{const fe=Be((P-7.55)/1.2),ge=g.at(1);b.position.copy(ge).add(D).lerp(new L(-.46,.11,.23),fe),b.position.y+=Math.sin(fe*tt)*.35,b.rotation.set(.12,0,-.35+.6*fe)}b.position.x-=5*q})}workingOrrery(){const e=this.materials.length,t=new gt,n=this.paper(),s=this.material("#b28d51",!0),r=this.material("#46756d"),a=this.inkMaterial("#f1d9a0",.75),o=this.mesh(new Tn(.28,.32,.055,48),r,t);o.position.y=.028;const c=this.mesh(new Tn(.285,.3,.035,40),r,t);c.visible=!1;const l=new gt;l.position.y=.09,t.add(l);const h=this.ring(.255,.025,s,l);h.rotation.x=tt/2;for(let m=0;m<18;m++){const p=this.box(.05,.018,.045,s,l),M=m/18*tt*2;p.position.set(Math.cos(M)*.268,0,Math.sin(M)*.268),p.rotation.y=-M}const d=this.mesh(new ro(.116,0),this.material("#a0c6b4",!0),t);d.position.y=.3;const u=[0,1].map(m=>{const p=this.ring(.17,.003,s,t);return p.position.y=.3,p.rotation.set(.4+m*1.2,.3+m*.8,0),p}),g=[new L(-.4,.42,.05),new L(.38,.66,-.07),new L(-.1,.91,-.06)].map((m,p)=>{const M=new gt;if(t.add(M),p===0){const v=this.box(.27,.16,.012,n,M);v.rotation.z=-.12,this.line([new L(-.13,.075,.014),new L(0,-.005,.018),new L(.13,.075,.014)],.0018,s,M)}else if(p===1){for(const v of[-1,1]){const T=this.mesh(new Tn(.025,.025,.19,14),n,M);T.rotation.z=tt/2,T.position.y=v*.07}this.box(.19,.14,.005,n,M)}else for(let v=0;v<3;v++)this.mesh(new Ti(.022,12,8),s,M).position.set((v-1)*.066,.035+(v===1?.028:0),.016),this.mesh(new Ji(.03,.075,3),n,M).position.set((v-1)*.066,-.027+(v===1?.028:0),0);const E=this.text(["Письма","Материалы","Команда"][p],.42,.09,136,"#fff0d0");E.mesh.position.set(0,-.14,.035),M.add(E.mesh);const _=new Na([new L(0,.32,.02),new L(m.x*.8,.23+m.y*.5,.18),m]),b=this.mesh(new er(_,64,.0023,5,!1),a,t);b.castShadow=!1,b.renderOrder=2.3;const w=this.mesh(new Ti(.01,8,6),a,t),A=this.ring(.15,.002,a,M);return{group:M,target:m,label:E,track:_,thread:b,spark:w,halo:A}}),S=this.text("Для главного",.66,.12,88,"#ead8b5");return S.mesh.position.set(.02,.12,.4),t.add(S.mesh),this.act(t,e,(m,p)=>{const M=Be(p/.63),E=Be((p-.69)/.31);t.position.set(4.5*E,Math.sin(E*tt)*.13,0),t.rotation.z=-E*tt*2,c.visible=p>.05,c.position.set(0,.7*(1-M)+.08,0),c.scale.setScalar(Be((p-.05)/.2));const _=Be((m-.3)/1.5),b=Fl((m-8)/2),w=m<8?m:8+2*(b-b**3+.5*b**4);d.position.y=.08+.22*_,d.scale.setScalar(.1+.9*_),d.rotation.y=w*.5,l.rotation.y=1.5*Be(m/2.5)+2.5*Be((m-3.2)/4.5),u.forEach((A,v)=>{A.rotation.z=w*(.25+v*.08),A.scale.setScalar(_)}),g.forEach((A,v)=>{const T=Be((m-.65-v*.5)/1.65),R=Be((m-2.4-v*1.5)/1.1);A.group.position.copy(A.target),A.group.position.x+=(1-T)*(.13*Math.sin(m*1.8+v)),A.group.position.y+=(1-T)*.09*Math.cos(m*1.4+v),A.group.rotation.set((1-T)*.35,(1-T)*.7,(1-T)*Math.sin(m+v)*.35),A.group.scale.setScalar(.2+.8*T),A.label.reveal.value=Be((m-1.5-v*.5)/1),A.thread.geometry.setDrawRange(0,Math.max(0,Math.floor(A.thread.geometry.index.count*R/3)*3));const D=Fl((m-2.4-v*1.5)/1.1);A.spark.visible=D>0&&D<1,A.spark.position.copy(A.track.getPoint(1-D)),A.halo.scale.setScalar(.6+R*.4),A.halo.visible=R>.9}),g.forEach(A=>{A.group.position.lerp(new L(0,.1,0),M),A.group.scale.multiplyScalar(1-M),A.thread.scale.setScalar(1-M),A.halo.visible&&=M<.05}),d.position.y=.08+(d.position.y-.08)*(1-M),d.scale.multiplyScalar(1-M),u.forEach(A=>A.scale.multiplyScalar(1-M)),l.scale.setScalar(1-M*.18),S.reveal.value=Be((m-7)/1.4)*(1-Be(p/.26))})}update(e,t,n,s,r=!1,a){this.root.visible=!!e&&e.departure<.99999,this.key.castShadow=r||!!e&&e.index!==1,this.key.position.copy(t).add(new L(-1.4,2.5,1.8).multiplyScalar(n)),this.key.target.position.copy(t);const o=this.key.shadow.camera,c=n*(e?.index===0?2.5:r?2.2:1.3);if(o.left=o.bottom=-c,o.right=o.top=c,o.near=.05,o.far=n*10,o.updateProjectionMatrix(),!!e){if(!this.acts[e.index]){const h=[()=>this.animePage(),()=>this.artistMagic(),()=>this.paperCity(),()=>this.writingAtelier(),()=>this.workingOrrery()][e.index]();this.acts[e.index]=h,this.root.add(h.root)}this.active!==e.index&&(this.active=e.index,this.acts.forEach((l,h)=>{l&&(l.root.visible=h===e.index)})),this.root.position.copy(t),this.root.rotation.z=-Math.atan(.035),this.root.scale.setScalar(n);for(const l of this.acts[e.index].materials)l.opacity=l.userData.sourceOpacity??1;this.acts[e.index].update(e.seconds,e.departure,s,a);for(const l of this.acts[e.index].materials)l.opacity*=e.opacity;this.shadow.scale.x=e.index===0?2.4:1,this.shadow.material.opacity=(e.index===1?0:.25)*(e.index===0?1-Be(e.departure/.8):1)*e.opacity}}dispose(){this.anime?.dispose();for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose();this.key.shadow.dispose()}}const X0=`
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
}`,tr=20,q0=`
varying vec2 v_uv;
uniform sampler2D u_map;
uniform sampler2D u_mask;
uniform vec2 u_texel;
uniform vec2 u_polygon[${tr}];
uniform int u_count;
uniform float u_sketch;
uniform float u_night;
uniform float u_shadow;
bool inPolygon(vec2 p) {
  bool inside = false;
  vec2 a = u_polygon[u_count - 1];
  for (int i = 0; i < ${tr}; i++) {
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
}`;function Y0(i){return new ht(Math.min(...i.map(e=>e[0])),Math.min(...i.map(e=>e[1])),Math.max(...i.map(e=>e[0])),Math.max(...i.map(e=>e[1])))}class Ic{constructor(e,t,n,s,r,a){this.scene=e,this.image=t,this.mask=n,this.layers=s,this.projection=r;const o=new Map;for(const c of s)if(c.contactGroup){const l=o.get(c.contactGroup);(!l||r.surfaceDepth(...c.support)<r.surfaceDepth(...l))&&o.set(c.contactGroup,c.support)}for(const c of s){const l=c.contactGroup?o.get(c.contactGroup):void 0;this.add(l?{...c,support:l,surface:"grounded",relief:0}:c,t,n,!1)}a&&this.add({id:"painted-shadows",polygon:[[0,0],[1,0],[1,1],[0,1]],support:[.5,.9],surface:"table",lift:25e-5},a,a,!0)}scene;image;mask;layers;projection;meshes=[];depth={value:0};sketch={value:0};night={value:0};add(e,t,n,s){if(e.polygon.length<3||e.polygon.length>tr)throw new Error(`Invalid parallax outline: ${e.id}`);const r=Y0(e.polygon),a=r.z-r.x,o=r.w-r.y,c=this.projection.width>this.projection.height?192:96,l=this.projection.width>this.projection.height?108:176,h=Math.floor(r.x*c),d=Math.floor(r.y*l),u=Math.ceil(r.z*c)-h,f=Math.ceil(r.w*l)-d,g=new Pt(1,1,u,f),S=g.getAttribute("position"),m=g.getAttribute("uv"),{width:p,height:M,distance:E,surfaceDepth:_}=this.projection,b=_(...e.support),w=E*(e.lift??.0012);for(let U=0;U<S.count;U++){const P=(h+U%(u+1))/c,F=(d+Math.floor(U/(u+1)))/l,k=e.surface==="upright"?E*(e.relief??0)*Math.sin(Math.PI*(P-r.x)/a)*Math.sin(Math.PI*(F-r.y)/o):0,W=_(P,F),Q=(e.surface==="table"?W:e.surface==="grounded"?Math.max(W,b):b)+w+k;S.setXYZ(U,(P-.5)*p,(.5-F)*M,Q),m.setXY(U,P,F)}const A=t.image,v=U=>U.toFixed(7),T=(e.exclude??[]).map((U,P)=>{const F=U.map((k,W)=>{const Q=U[(W+U.length-1)%U.length];return Q[1]===k[1]?"":`if ((p.y < ${v(Q[1])}) != (p.y < ${v(k[1])}) && p.x < ${v(Q[0])} + ${v((k[0]-Q[0])/(k[1]-Q[1]))} * (p.y - ${v(Q[1])})) inside = !inside;`}).join(`
`);return`bool excluded${P}(vec2 p) { bool inside = false; ${F} return inside; }`}),R=T.length?`if (${T.map((U,P)=>`excluded${P}(v_uv)`).join(" || ")}) discard;`:"",D=new zt({uniforms:{u_map:{value:t},u_mask:{value:n},u_depth:this.depth,u_distance:{value:E},u_texel:{value:new ce(1/A.width,1/A.height)},u_polygon:{value:Array.from({length:tr},(U,P)=>new ce(...e.polygon[P]??[0,0]))},u_count:{value:e.polygon.length},u_sketch:this.sketch,u_night:this.night,u_shadow:{value:s?1:0}},vertexShader:X0,fragmentShader:q0.replace("void main() {",T.join(`
`)+`
void main() {
`+R),transparent:!0,side:wt,depthWrite:!s,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:s?-1:-2}),N=new ct(g,D);N.name=`painted:${e.id}`,N.frustumCulled=!1,N.renderOrder=s?1.15:3,this.meshes.push(N),this.scene.add(N)}update(e,t,n=0){this.depth.value=e,this.night.value=n;for(const s of this.meshes)s.visible=t}setSketch(e){this.sketch.value=e?1:0}dispose(){for(const e of this.meshes)this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}}class K0{constructor(e,t){this.scene=e,this.projection=t}scene;projection;paintings=new Map;setComposition(e,t){const n=t.source.image,s=t.cutouts.image,r=t.clean.image,a=n.width/n.height;if(Math.abs(s.width/s.height-a)>.003||Math.abs(r.width/r.height-a)>.003)throw new Error("Desk plates must share one registered canvas");if(Math.abs(a-this.projection.width/this.projection.height)>.015)throw new Error("Desk painting needs an orientation-specific composition; stretching is not supported");if(t.keep&&t.keep.length>20)throw new Error("Foreground occluder exceeds the supported outline size");this.paintings.get(e)?.layers.dispose(),t.cutouts.generateMipmaps=!1,t.cutouts.minFilter=t.cutouts.magFilter=Et;const c={...this.projection};if(t.tableHorizon!==void 0){const h=-(t.tableHorizon-.5)*c.height;c.surfaceDepth=(d,u)=>{const f=(.5-u)*c.height+.035*(d-.5)*c.width;return f>=h?0:Math.min(c.distance*.68,c.distance*(1-h/f))}}const l=t.keep?t.layers.map(h=>({...h,exclude:[...h.exclude??[],t.keep]})):t.layers;this.paintings.set(e,{art:t,layers:new Ic(this.scene,t.source,t.cutouts,l,c,t.shadows)})}composition(e){return this.paintings.get(e)?.art}update(e,t){for(const[n,s]of this.paintings)s.layers.update(t,n===e,n===1?1:0)}setSketch(e){for(const t of this.paintings.values())t.layers.setSketch(e)}dispose(){for(const e of this.paintings.values())e.layers.dispose()}}function Z0(i){const e=i?941:1672,t=i?1672:941,s=(i?[[0,1326],[132,1333],[167,1383],[202,1352],[318,1370],[492,1391],[505,1434],[334,1566],[40,1607],[0,1574]]:[[0,814],[155,752],[245,747],[311,756],[338,775],[387,760],[537,780],[547,808],[479,889],[225,875],[0,844]]).map(([o,c])=>[o/e,c/t]),r=i?[[0,.5],[.38,.5],[.38,1],[0,1]]:[[0,.48],[.328,.48],[.328,1],[0,1]],a=i?[[.5,.5],[1,.5],[1,1],[.5,1]]:[[.678,.48],[1,.48],[1,1],[.678,1]];return[{id:"open-art-book",polygon:s,support:i?[.23,.89]:[.176,.893],surface:"table",lift:.0045},{id:"left-tools-and-folios",polygon:r,exclude:[s],support:i?[.13,.767]:[.16,.773],surface:"grounded",lift:.0012},{id:"pigments-and-brushes",polygon:a,exclude:[s],support:i?[.78,.85]:[.85,.884],surface:"grounded",lift:.0012},{id:"loose-artwork",polygon:[[0,.48],[1,.48],[1,1],[0,1]],exclude:[s,r,a],support:[.5,.95],surface:"table",lift:.002}]}function $0(i){const e=i?941:1672,t=i?1672:941;return(i?[[167,1373],[484,1398],[8,1520],[410,1571]]:[[339,776],[530,785],[227,845],[476,869]]).map(([s,r])=>[s/e,r/t])}const J0=`
varying vec2 v_uv;uniform vec2 u_size;uniform vec2 u_floor;uniform vec3 u_anchor;uniform float u_scale;uniform vec3 u_poseBody;
void main(){v_uv=uv;float x=uv.x*u_size.x-u_floor.x;float y=(uv.y-1.0)*u_size.y+u_floor.y;
float plant=(1.0-smoothstep(0.0,230.0,y))*(1.0-smoothstep(-12.0,55.0,x))*u_poseBody.z;
x+=u_poseBody.y*(1.0-plant);y+=u_poseBody.x;x*=u_scale;y*=u_scale;
vec3 p=u_anchor+vec3(x,y-.035*x,0.0);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.0);}`,Q0=`
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
}`,Qt=14,Ol=7.878,j0=8.3,Bl="varying vec2 v_uv;uniform float u_depth;uniform float u_distance;void main(){v_uv=vec2(uv.x,1.0-uv.y);vec3 p=position;float z=p.z*u_depth;p.xy*=(u_distance-z)/u_distance;p.z=z;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}",ao=`varying vec2 v_uv;uniform sampler2D u_map;uniform sampler2D u_pencil;uniform sampler2D u_cleanPlate;uniform sampler2D u_cutouts;uniform float u_registered;uniform int u_keepCount;uniform vec2 u_keepPolygon[20];uniform float u_sketch;uniform float u_night;uniform float u_original;uniform float u_portrait;uniform vec2 u_texel;
bool keepPixel(vec2 p){if(u_keepCount<3)return false;bool inside=false;vec2 a=u_keepPolygon[u_keepCount-1];for(int i=0;i<20;i++){if(i>=u_keepCount)break;vec2 b=u_keepPolygon[i];if((a.y>p.y)!=(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)inside=!inside;a=b;}return inside;}
vec3 painted(vec2 uv){vec3 c=texture2D(u_map,uv).rgb;if(u_registered>.5){float mask=keepPixel(uv)?0.0:texture2D(u_cutouts,uv).a;c=mix(c,texture2D(u_cleanPlate,uv).rgb,smoothstep(.008,.025,mask));}return c;}
vec3 pigment(vec2 uv){return painted(uv)*mix(vec3(1),vec3(.63,.72,.89),u_night*.5);}
vec3 graphite(vec2 uv){vec2 d=u_texel;float gx=length(painted(uv+d*vec2(2,0))-painted(uv-d*vec2(2,0))),gy=length(painted(uv+d*vec2(0,2))-painted(uv-d*vec2(0,2)));return vec3(.966,.946,.88)-clamp((gx+gy)*1.4,0.0,.65)*vec3(.54,.51,.43);}`,eg=ao+`
float opening(vec2 p){float left=mix(.279+.002*p.y,.226+.004*p.y,u_portrait),right=mix(.767-.003*p.y,.810-.010*p.y,u_portrait),bottom=mix(.658+.115*p.x,.642+.009*p.x,u_portrait),cy=mix(.270,.289,u_portrait),cx=mix(.525,.515,u_portrait),rx=mix(.247,.290,u_portrait),ry=mix(.327,.156,u_portrait);float e=min(min(p.x-left,right-p.x),bottom-p.y),ellipse=pow((p.x-cx)/rx,2.0)+pow((p.y-cy)/ry,2.0);if(p.y<cy)e=min(e,(1.0-ellipse)*.15);return smoothstep(-.0018,.0018,e);}
void main(){vec2 p=v_uv;vec3 c=texture2D(u_map,p).rgb;float a=1.0-opening(p);float cabinet=smoothstep(mix(.708,.738,u_portrait),mix(.713,.747,u_portrait),p.x)*smoothstep(mix(.635+(p.x-.712)*.54,.603+(p.x-.743)*.13,u_portrait),mix(.640+(p.x-.712)*.54,.610+(p.x-.743)*.13,u_portrait),p.y);float sat=max(max(c.r,c.g),c.b)-min(min(c.r,c.g),c.b);float leaves=smoothstep(.10,.20,sat)*smoothstep(.018,.05,c.g-c.b)*(1.0-smoothstep(.48,.64,c.b))*(1.0-smoothstep(mix(.37,.47,u_portrait),mix(.43,.53,u_portrait),p.x))*(1.0-smoothstep(mix(.26,.38,u_portrait),mix(.34,.43,u_portrait),p.y))*step(mix(.25,.20,u_portrait),p.x);a=max(a,max(cabinet,leaves));if(a<.002)discard;
gl_FragColor=vec4(mix(pigment(p),u_registered>.5?graphite(p):texture2D(u_pencil,p).rgb,u_sketch),a);}`,tg=ao+"void main(){vec2 p=(v_uv-.5)*.88+.5;if(u_portrait>.5){p=vec2((v_uv.x-.515)*.5867+.5,(v_uv.y-.405)/.54+.5);p=(p-.5)*.88+.5;}gl_FragColor=vec4(mix(texture2D(u_map,p).rgb,texture2D(u_pencil,p).rgb,u_sketch),1.0);}";class ng{constructor(e,t,n,s,r,a=!1){this.clean=e,this.pencil=t,this.foreground=n,this.portrait=a,this.sourceHeight=a?Qt*1672/941:Ol,this.unit=this.sourceHeight/Ol,this.distance=j0*this.unit;const o=(l,h)=>{const d=l.image;return{u_keepCount:{value:0},u_keepPolygon:{value:Array.from({length:20},()=>new ce)},u_registered:{value:0},u_cleanPlate:{value:e},u_cutouts:{value:n},u_original:{value:1},u_map:{value:l},u_pencil:{value:h},u_sketch:{value:0},u_night:{value:0},u_portrait:{value:a?1:0},u_depth:{value:0},u_distance:{value:this.distance},u_texel:{value:new ce(1/d.width,1/d.height)}}},c=(l,h,d,u,f=!1,g=1)=>{const S=this.materials.length===1,m=new Pt(Qt*g,this.sourceHeight*g,S?a?96:192:1,S?a?176:108:1),p=m.getAttribute("position"),M=m.getAttribute("uv");for(let b=0;b<p.count;b++)p.setZ(b,d(M.getX(b),1-M.getY(b)));const E=new zt({uniforms:o(l,h),vertexShader:Bl,fragmentShader:u,transparent:f,side:wt,depthWrite:!0}),_=new ct(m,E);return _.frustumCulled=!1,_.renderOrder=this.materials.length,this.materials.length===1&&(this.room=E,this.roomGeometry=m),this.geometries.push(m),this.materials.push(E),this.scene.add(_),E};if(this.far=c(s,r,()=>-21*this.unit,tg,!1,1.2),c(e,t,(l,h)=>this.tableDepth(l,h),eg,!0),this.originalProps=new Ic(this.scene,n,n,Z0(a),{width:Qt,height:this.sourceHeight,distance:this.distance,surfaceDepth:(l,h)=>this.tableDepth(l,h,!0)}),a)for(const l of[-1,1]){const h=new Pt(Qt*.75,this.sourceHeight).translate(l*Qt*.875,0,0),d=new zt({uniforms:o(e,t),vertexShader:Bl,fragmentShader:ao+`void main(){vec2 p=v_uv;p.x=${l<0?"p.x*.24":".78+p.x*.22"};gl_FragColor=vec4(mix(pigment(p),mix(graphite(p),texture2D(u_pencil,p).rgb,u_original),u_sketch),1.0);}`}),u=new ct(h,d);u.visible=!1,this.extensions.push(u),this.geometries.push(h),this.materials.push(d),this.scene.add(u)}this.figure=new ct(new Pt(1,1,48,64),new zt({transparent:!0,depthWrite:!0,side:wt,uniforms:{u_map:{value:null},u_flow:{value:null},u_size:{value:new ce},u_floor:{value:new ce},u_anchor:{value:new L},u_scale:{value:1},u_opacity:{value:1},u_night:{value:0},u_isPose:{value:0},u_poseGrid:{value:new ce(1,1)},u_flowGrid:{value:new ce(1,1)},u_frames:{value:new ht},u_blend:{value:0},u_paintBlend:{value:0},u_flowRange:{value:1},u_poseBody:{value:new L},u_blink:{value:0},u_eyesA:{value:new ht},u_eyesB:{value:new ht},u_closedEyes:{value:new ht}},vertexShader:J0,fragmentShader:Q0})),this.figure.visible=!1,this.figure.frustumCulled=!1,this.figure.renderOrder=2,this.scene.add(this.figure),this.contact=new ct(new Pt(1,1),new zt({transparent:!0,depthWrite:!1,side:wt,uniforms:{u_anchor:{value:new L},u_size:{value:1},u_ground:{value:1},u_impact:{value:-1},u_opacity:{value:1},u_lift:{value:this.unit*.014}},vertexShader:"varying vec2 v_uv;uniform vec3 u_anchor;uniform float u_size;uniform float u_lift;void main(){v_uv=uv-.5;vec3 p=u_anchor+vec3(v_uv.x*u_size,-.035*v_uv.x*u_size+u_lift,v_uv.y*u_size*.7);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.0);}",fragmentShader:"varying vec2 v_uv;uniform float u_ground;uniform float u_impact;uniform float u_opacity;void main(){float shadow=exp(-dot(v_uv/vec2(.25,.23),v_uv/vec2(.25,.23))*2.8)*.4*u_ground;float ring=0.0;if(u_impact>=0.0){ring=exp(-abs(length(v_uv)-(.06+.37*u_impact))*160.0)*sin(u_impact*3.14159)*.65;}float a=max(shadow,ring)*u_opacity;gl_FragColor=vec4(mix(vec3(.09,.073,.046),vec3(1.0,.79,.36),ring/(shadow+ring+.0001)),a);}"})),this.contact.visible=!1,this.contact.frustumCulled=!1,this.contact.renderOrder=1.5,this.scene.add(this.contact)}clean;pencil;foreground;portrait;scene=new Qa;camera=new Kt(47,16/9,.1,240);materials=[];geometries=[];far;extensions=[];unit;sourceHeight;distance;depth=0;framingAspect=16/9;target=new L;theatre;desk;room;roomGeometry;originalProps;realm=0;modern=!1;registered=!1;registeredHorizon=0;shadowKey="";shadowDirty=!0;figure;contact;figureTextures=new Map;motionTextures=new Map;night=0;setMaterials(e){this.theatre??=new W0(this.scene,e)}setDeskComposition(e,t){this.desk??=new K0(this.scene,{width:Qt,height:this.sourceHeight,distance:this.distance,surfaceDepth:(n,s)=>this.tableDepth(n,s,!0)}),this.desk.setComposition(e,t),this.shadowKey=""}performanceReady(e){return!!this.theatre&&(e===0||!!this.desk?.composition(e))}tableDepth(e,t,n=!1){const s=this.registered&&!n&&this.registeredHorizon?this.registeredHorizon-.5:this.portrait?.22:.27,r=(e-.5)*Qt,a=(.5-t)*this.sourceHeight,o=-s*this.sourceHeight,c=a+.035*r;return c>=o?0:Math.min(this.distance*.68,this.distance*(1-o/c))}setRealm(e,t,n){const s=this.desk?.composition(n),r=!!s,a=n===1?1:0,o=n>0&&r;this.night=a,this.realm=n;const c=s?.tableHorizon??0;if(o!==this.modern||r!==this.registered||c!==this.registeredHorizon){this.modern=o,this.registered=r,this.registeredHorizon=c;const h=this.roomGeometry.getAttribute("position"),d=this.roomGeometry.getAttribute("uv");for(let u=0;u<h.count;u++)h.setZ(u,this.tableDepth(d.getX(u),1-d.getY(u)));h.needsUpdate=!0,this.shadowKey=""}this.room.uniforms.u_map.value=s?.source??this.clean,this.room.uniforms.u_pencil.value=this.pencil,this.room.uniforms.u_registered.value=r?1:0,this.room.uniforms.u_cleanPlate.value=s?.clean??this.clean,this.room.uniforms.u_cutouts.value=s?.cutouts??this.foreground,this.room.uniforms.u_keepCount.value=s?.keep?.length??0;const l=this.room.uniforms.u_keepPolygon.value;for(let h=0;h<20;h++)l[h].set(...s?.keep?.[h]??[0,0]);for(const h of this.extensions)h.material.uniforms.u_map.value=s?.clean??this.clean;this.far.uniforms.u_map.value=e,this.far.uniforms.u_pencil.value=t;for(const h of this.materials)h.uniforms.u_night.value=a,h.uniforms.u_original.value=o?0:1}update(e,t,n,s,r=s){this.depth=e,this.framingAspect=r;const a=t*.75*(this.portrait?.95:1)*e,o=n*.24*this.unit*e;this.camera.position.set(a,o,this.distance),this.camera.aspect=s;const c=Math.min(this.sourceHeight/1.14,Qt/(r*1.14));this.camera.fov=2*Math.atan(c/(2*this.distance))*180/Math.PI;const l=this.portrait?0:Be((r-1.85)/.55),h=Math.max(0,.96-.5-c/(2*this.sourceHeight))*this.sourceHeight*l;h>0?this.camera.setViewOffset(s,1,0,h/c,s,1):this.camera.clearViewOffset(),this.target.set(a*.12,o*.12,-12*this.unit),this.camera.lookAt(this.target),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0);for(const d of this.materials)d.uniforms.u_depth.value=e;for(const d of this.extensions)d.visible=s>r+.001;this.originalProps.update(e,!this.modern,this.night),this.desk?.update(this.realm,e)}placement(e,t){const n=Math.min(this.sourceHeight/1.14,Qt/(t*1.14)),s=!this.portrait&&e>0?Math.max(0,.96-.5-n/(2*this.sourceHeight))*Be((t-1.85)/.55):0,r=e===1,a=this.portrait?e===1?.43:.51:e===1?.63:e===0?t>1.9?.68:.62:.61,o=this.portrait?r?.79:.765:Math.max(e===0?.792:0,.5+(r?.4:.345)*n/this.sourceHeight+s),c=this.tableDepth(a,o)*this.depth,l=(this.distance-c)/this.distance,h=new L((a-.5)*Qt*l,(.5-o)*this.sourceHeight*l,c),d=r?300:320,u=r?480:400,f=r?this.portrait?e===1?.38:.35:.43:Math.min(.5,Math.max(.39,285/innerHeight),this.portrait?innerWidth/innerHeight*.7:1),g=n*f*l;return{anchor:h,designW:d,designH:u,screenH:f,worldH:g,viewHeight:n}}setPerformance(e,t){this.setFigure(e?.figure,t,e?.departure??0);const{anchor:n,worldH:s}=this.placement(t,this.framingAspect),r=new L(.02*Qt,(.5-(this.portrait?.34:.3))*this.sourceHeight,-18*this.unit),a=(this.distance-r.z)/this.distance;r.x*=a,r.y*=a,r.sub(n).divideScalar(s),this.theatre?.update(e,n,s,r,this.modern,t===0?this.firstBookPage():void 0);const o=[t,this.depth.toFixed(5),this.framingAspect.toFixed(5),e&&t!==1?e.seconds.toFixed(4)+":"+e.departure.toFixed(4):"static"].join(":");o!==this.shadowKey&&(this.shadowKey=o,this.shadowDirty=!0)}firstBookPage(){const{anchor:e,worldH:t}=this.placement(0,this.framingAspect),n=$0(this.portrait),s=new L(0,0,1);return{corners:n.map(([a,o])=>{const c=(this.tableDepth(a,o)+this.distance*.0045)*this.depth,l=(this.distance-c)/this.distance;return new L((a-.5)*Qt*l,(.5-o)*this.sourceHeight*l,c).sub(e).divideScalar(t).applyAxisAngle(s,Math.atan(.035))}),texture:this.foreground,uvCorners:n.map(([a,o])=>new ce(a,o))}}setFigure(e,t,n){if(this.figure.visible=this.contact.visible=!!e&&n<.9999,!e)return;let s=this.figureTextures.get(e.canvas);if(!s){const u=new rs(e.pose?.image??e.canvas);u.generateMipmaps=!1,u.minFilter=u.magFilter=Et,s={texture:u,key:""},this.figureTextures.set(e.canvas,s)}const r=e.pose?e.pose.image.src:e.key;s.key!==r&&(s.texture.premultiplyAlpha=!!e.pose,s.texture.needsUpdate=!0,s.key=r);const{anchor:a,worldH:o}=this.placement(t,this.framingAspect),c=o/e.designHeight,l=this.figure.material.uniforms,h=Be(n/.86);if(t===0?(a.y+=Math.sin(n*Math.PI)*o*.65,a.x-=h*o*.25,a.z-=h*o*3):(a.x+=h*o*.2,a.z-=h*o*.32),l.u_map.value=s.texture,l.u_size.value.set(e.width,e.height),l.u_floor.value.set(e.floorX,e.floorY),l.u_anchor.value.copy(a),l.u_scale.value=c*(1-h),l.u_opacity.value=e.opacity,l.u_night.value=this.night,l.u_isPose.value=e.pose?1:0,l.u_poseBody.value.set(0,0,0),e.pose){const u=e.pose;let f=this.motionTextures.get(u.flow);f||(f=new Lt(u.flow),f.generateMipmaps=!1,f.minFilter=f.magFilter=Et,f.needsUpdate=!0,this.motionTextures.set(u.flow,f)),l.u_flow.value=f,l.u_poseGrid.value.set(...u.poseGrid),l.u_flowGrid.value.set(...u.flowGrid),l.u_frames.value.set(u.a,u.b,u.forward,u.backward),l.u_blend.value=u.blend,l.u_paintBlend.value=u.paintBlend,l.u_flowRange.value=u.flowRange,l.u_poseBody.value.set(u.lift,u.shift,u.pin),l.u_blink.value=u.blink,l.u_eyesA.value.set(...u.eyesA),l.u_eyesB.value.set(...u.eyesB),l.u_closedEyes.value.set(...u.closedEyes)}const d=this.contact.material.uniforms;d.u_anchor.value.copy(a).add(new L(e.offsetX*c,-.035*e.offsetX*c,0)),d.u_size.value=o*.9*(1-h),d.u_ground.value=e.ground,d.u_impact.value=e.impact,d.u_opacity.value=e.opacity*(1-h)}projection(e,t,n){const{anchor:s,designW:r,designH:a,screenH:o,worldH:c}=this.placement(e,t/n),l=c*r/a,h=(P,F)=>{const k=new L(s.x+P*l,s.y+F*c-.035*P*l,s.z).project(this.camera);return{x:(k.x+1)*t/2,y:(1-k.y)*n/2}},d=h(-.5,1),u=h(.5,1),f=h(-.5,0),g=h(.5,0),S=u.x-g.x,m=f.x-g.x,p=d.x-u.x+g.x-f.x,M=u.y-g.y,E=f.y-g.y,_=d.y-u.y+g.y-f.y,b=S*E-m*M,w=Math.abs(b)<1e-8?0:(p*E-m*_)/b,A=Math.abs(b)<1e-8?0:(S*_-p*M)/b,v=u.x-d.x+w*u.x,T=f.x-d.x+A*f.x,R=u.y-d.y+w*u.y,D=f.y-d.y+A*f.y,N=`matrix3d(${v/r},${R/r},0,${w/r},${T/a},${D/a},0,${A/a},0,0,1,0,${d.x},${d.y},0,1)`,U=h(0,0);return{matrix:N,width:r,height:a,scale:o*n/a,footX:U.x,footY:U.y}}render(e,t=!1){for(const n of this.materials)n.uniforms.u_sketch.value=t?1:0;this.originalProps.setSketch(t),this.desk?.setSketch(t),e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=this.shadowDirty,e.render(this.scene,this.camera),this.shadowDirty=!1}dispose(){this.theatre?.dispose(),this.desk?.dispose(),this.originalProps.dispose();for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();for(const e of[this.figure,this.contact])e.geometry.dispose(),e.material.dispose();for(const{texture:e}of this.figureTextures.values())e.dispose();for(const e of this.motionTextures.values())e.dispose()}}const Xi=new L;function jt(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Xi.copy(e),Xi[n]=0,Xi.normalize();const l=.5*a/(a+o),h=1-Xi.angleTo(i)/c;return Math.sign(Xi[t])===1?h*l:o/(a+o)+l+l*(1-h)}class oo extends ai{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new L,l=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,S=new L,m=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:S.set(1,0,0),f[M+0]=jt(S,l,"z","y",r,n),f[M+1]=1-jt(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),f[M+0]=1-jt(S,l,"z","y",r,n),f[M+1]=1-jt(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),f[M+0]=1-jt(S,l,"x","z",r,e),f[M+1]=jt(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[M+0]=1-jt(S,l,"x","z",r,e),f[M+1]=1-jt(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[M+0]=1-jt(S,l,"x","y",r,e),f[M+1]=1-jt(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),f[M+0]=jt(S,l,"x","y",r,e),f[M+1]=1-jt(S,l,"y","x",r,t);break}}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.segments,e.radius)}}const bt=5.2,Yt=6.85,Qn=i=>{const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)},ig=`
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
`,sg=`
uniform sampler2D u_world;uniform sampler2D u_sketch;uniform sampler2D u_nextWorld;uniform sampler2D u_nextSketch;
uniform float u_side;uniform float u_reverse;uniform float u_paint;uniform float u_oldPaint;uniform float u_turn;uniform float u_transition;uniform float u_live;uniform float u_artAspect;
uniform vec2 u_artFit;
float bookHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float bookNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(bookHash(i),bookHash(i+vec2(1,0)),f.x),mix(bookHash(i+vec2(0,1)),bookHash(i+vec2(1)),f.x),f.y);}
vec3 bookLinear(vec3 c){return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c));}
`,rg=(i,e,t,n=!1)=>({u_world:{value:e},u_sketch:{value:t},u_nextWorld:{value:e},u_nextSketch:{value:t},u_side:{value:i},u_reverse:{value:n?1:0},u_paint:{value:0},u_oldPaint:{value:0},u_turn:{value:0},u_transition:{value:0},u_live:{value:0},u_artAspect:{value:1.5},u_artFit:{value:new ce(1,1)}}),ti=(bt*2-.08)/(Yt-.09);class ag{scene=new Qa;camera=new Kt(22,1,1,120);rig=new gt;cover=new gt;backClosing=new gt;key;rightBlock;leftBlock;rightPage;leftPage;geometries=[];materials=[];textures=[];paperUniforms=[];openingLeaves=[];leaf;leafReverse;leafGeometry;leafOriginal;gutter;gutterGeometry;spine;bands=[];turn=0;constructor(e,t,n,s){this.scene.background=new je("#35281b"),this.scene.add(this.rig),this.rig.add(this.backClosing),this.backClosing.position.z=-.17;const r=re=>(this.geometries.push(re),re),a=re=>(this.materials.push(re),re),o=re=>{const de=re.clone();return de.colorSpace=Rt,de.flipY=!0,de.needsUpdate=!0,this.textures.push(de),de},c=o(e),l=o(s),h=c.clone();h.repeat.set(.4,.75),h.offset.set(.28,.12),h.needsUpdate=!0,this.textures.push(h);const d=a(new an({map:h,bumpMap:h,bumpScale:.022,roughness:.96,metalness:.02})),u=a(new an({map:c,bumpMap:c,bumpScale:.018,roughness:.93,metalness:.07})),f=a(new an({color:10189630,roughness:.66,metalness:.62}));l.wrapS=l.wrapT=qs,l.repeat.set(3,3),l.offset.set(-1,-1);const g=a(new an({map:l,roughness:1,metalness:0})),S=new ct(r(new Pt(126,87)),g);S.position.set(0,0,-.65),S.receiveShadow=!0,this.scene.add(S);const m=(re,de,V,Z,oe,Ae=this.rig)=>{const _e=new ct(r(new oo(re,de,V,3,Z)),oe);return _e.castShadow=!0,_e.receiveShadow=!0,Ae.add(_e),_e};m(bt+.16,Yt+.18,.16,.065,d,this.backClosing).position.set(bt/2,0,-.37);const M=document.createElement("canvas");M.width=512,M.height=512;const E=M.getContext("2d");E.fillStyle="#d6c59d",E.fillRect(0,0,512,512);for(let re=0;re<512;re++){const de=155+Math.sin(re*2.7)*17+Math.sin(re*.36)*8;E.fillStyle=`rgba(${de},${de-18},${de-39},${re%3===0?.38:.12})`,E.fillRect(re,0,1,512)}E.fillStyle="#80704c66";for(let re=30;re<512;re+=64)E.fillRect(re,0,3,512);const _=new rs(M);_.colorSpace=Rt,this.textures.push(_);const b=_.clone();b.center.set(.5,.5),b.rotation=Math.PI/2,b.needsUpdate=!0,this.textures.push(b);const w=a(new an({map:_,roughness:1})),A=a(new an({map:b,roughness:1})),v=a(new an({color:15785909,roughness:1}));(this.rightBlock=m(bt-.02,Yt+.055,.55,.032,[w,d,A,A,v,v],this.backClosing)).position.set(bt/2,0,-.005);const R=this.spine=new ct(r(new Tn(.43,.43,Yt+.05,20,1,!1,Math.PI,Math.PI)),d);R.position.set(.04,0,-.18),R.castShadow=!0,R.receiveShadow=!0,this.rig.add(R);for(const re of[-2.65,-1.52,1.52,2.65]){const de=m(.23,.13,.79,.04,d);de.position.set(.025,re,-.15),this.bands.push(de)}this.rig.add(this.cover),this.cover.position.z=-.14,m(bt+.13,Yt+.17,.19,.07,[d,d,d,d,u,d],this.cover).position.set(bt/2,0,.35);for(const re of[0,1])for(const de of[-1,1]){const V=re?bt-.15:.15,Z=de*(Yt/2-.16);m(.69,.12,.055,.035,f,this.cover).position.set(V+(re?-.21:.21),Z,.469),m(.12,.66,.055,.035,f,this.cover).position.set(V,Z-de*.22,.469)}m(.73,.24,.11,.04,f,this.cover).position.set(bt-.06,0,.405);const U=(re,de=!1)=>{const V=rg(re,n,t,de);this.paperUniforms.push(V);const Z=a(new an({color:16777215,map:n,roughness:1,metalness:0,side:de?Vt:re===3?wt:Wn}));return re===2&&(Z.shadowSide=wt),Z.onBeforeCompile=oe=>{Object.assign(oe.uniforms,V),re!==3&&(oe.vertexShader=oe.vertexShader.replace("#include <shadowmap_vertex>",Ye.shadowmap_vertex.replace("directionalLightShadows[ i ].shadowNormalBias","max(directionalLightShadows[ i ].shadowNormalBias,0.063)"))),oe.fragmentShader=oe.fragmentShader.replace("#include <common>",`#include <common>
`+sg).replace("#include <map_fragment>",ig).replace("#include <opaque_fragment>",`outgoingLight=mix(outgoingLight,diffuseColor.rgb,u_live);
#include <opaque_fragment>`)},Z.customProgramCacheKey=()=>re===3?"catalog-paper-hinge":"catalog-paper-sheet",Z},P=()=>r(new Pt(bt-.08,Yt-.09,64,16).translate(bt/2,0,0)),F=this.rightPage=new ct(P(),U(1));F.position.z=.279,F.receiveShadow=!0,this.backClosing.add(F),this.leftBlock=m(bt-.02,Yt+.055,.55,.032,[w,d,A,A,v,v],this.cover),this.leftBlock.position.set(bt/2,0,.246);const k=this.leftPage=new ct(P(),U(0));k.position.set(bt,0,.246),k.rotation.y=Math.PI,k.receiveShadow=!0,this.cover.add(k),this.leafGeometry=P(),this.leafOriginal=Float32Array.from(this.leafGeometry.getAttribute("position").array);const W=re=>{const de=new ct(re,U(2)),V=new ct(re,U(2,!0));de.castShadow=!0;for(const Z of[de,V])Z.receiveShadow=!0,Z.frustumCulled=!1,Z.visible=!1,this.rig.add(Z);return{mesh:de,reverse:V}},Q=W(this.leafGeometry);this.leaf=Q.mesh,this.leafReverse=Q.reverse;for(let re=0;re<2;re++){const de=P();this.openingLeaves.push({...W(de),geometry:de,original:Float32Array.from(de.getAttribute("position").array)})}this.gutterGeometry=r(new Pt(.12,Yt-.09,4,12)),this.gutter=new ct(this.gutterGeometry,U(3)),this.gutter.receiveShadow=!0,this.gutter.frustumCulled=!1,this.rig.add(this.gutter);const q=document.createElement("canvas");q.width=900,q.height=1186;const K=q.getContext("2d");K.textAlign="center",K.fillStyle="#dec17d",K.font="45px Georgia",K.fillText("NEURODORA",450,485),K.font="22px Georgia",K.fillText("A I - A T E L I E R",450,538),K.strokeStyle="#c4a665",K.lineWidth=2,K.beginPath(),K.moveTo(338,575),K.lineTo(562,575),K.stroke(),K.font="italic 43px Georgia",K.fillText("Catalog",450,636),K.beginPath(),K.moveTo(402,677),K.quadraticCurveTo(430,688,450,677),K.quadraticCurveTo(470,666,498,677),K.stroke();const j=new rs(q);j.colorSpace=Rt,this.textures.push(j);const fe=a(new an({map:j,transparent:!0,alphaTest:.08,roughness:.77,metalness:.24,depthWrite:!1})),ge=new ct(r(new Pt(bt,Yt)),fe);ge.position.set(bt/2,0,.453),this.cover.add(ge);const ae=this.key=new Ec(16769197,2.1);ae.position.set(-9,8,15),ae.castShadow=!0,ae.shadow.mapSize.set(1024,1024),ae.shadow.camera.left=-12,ae.shadow.camera.right=12,ae.shadow.camera.top=10,ae.shadow.camera.bottom=-10,ae.shadow.camera.near=1,ae.shadow.camera.far=50,ae.shadow.bias=-4e-4,ae.shadow.normalBias=.018,ae.shadow.radius=4,this.scene.add(ae,ae.target,new wc(13884357,1.2))}setImages(e,t,n,s,r,a){this.turn=r;for(const o of this.paperUniforms)o.u_world.value=e.color,o.u_sketch.value=e.sketch,o.u_nextWorld.value=t.color,o.u_nextSketch.value=t.sketch,o.u_oldPaint.value=n,o.u_paint.value=s,o.u_turn.value=r,o.u_transition.value=a?1:0}update(e,t,n,s=0,r=0,a=0,o=t){const c=Qn(e/.46),l=Qn((e-.42)/.39),h=(t<=1?n<720?.53:.59:n<580?.56:.66)*(1-c)+.84*c,d=Yt/h,u=(bt*(1+c-s)+.6)/(t*(.8+.1*c)),f=Math.max(d,u)/(2*Math.tan(22*Math.PI/360));this.camera.zoom=1;const g=bt/2*(1-c)-bt*.5*s;this.camera.aspect=t;const S=1-l+s*.8;this.camera.position.set(g-f*.33*S,-f*.55*S,f),this.camera.lookAt(g,0,-.18),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),this.rig.rotation.z=-.065*(1-l)+.045*s,this.backClosing.rotation.y=-Math.PI*s;const m=Math.max(0,Math.min(1,r)),p=Math.max(.008,m*.55),M=Math.max(.008,(1-m)*.55),E=Qn((a-.12)/.6),_=p+M,b=p+((_-.064)/2-p)*E,w=M+((_+.064)/2-M)*E;this.rightBlock.scale.z=w/.55,this.rightBlock.position.z=-.28+w/2,this.rightPage.position.z=-.28+w+.004,this.leftBlock.scale.z=b/.55,this.leftBlock.position.z=.246-b/2,this.leftBlock.visible=e>.1,this.leftPage.position.z=.246-b-.004;const A=o>ti?.955:.955*o/ti,v=o>ti?.955*ti/o:.955;this.cover.rotation.y=-Math.PI*c;const T=c*(1-s);this.spine.scale.z=1-.88*T,this.spine.position.z=-.18-.3*T;for(const ae of this.bands)ae.scale.z=1-.9*T,ae.position.z=-.15-.33*T;this.gutter.visible=c>.025&&s<.98,this.leaf.visible=this.leafReverse.visible=this.turn>1e-6&&this.turn<.999999&&s===0,this.paperUniforms.forEach(ae=>{ae.u_live.value=Qn((a-.15)/.85),ae.u_artAspect.value=o,ae.u_artFit.value.set(A,v)});const R=-.386+b+.004,D=-.45+w+.004,N=(R+D)/2,U=Math.max(R,D)+.01*(1-E),P=Qn((c-.78)/.22);for(const[ae,re]of this.openingLeaves.entries()){const de=Qn((e-(.18+ae*.055))/.32);if(re.mesh.visible=re.reverse.visible=e>.14&&e<.63&&de<.999999,!re.mesh.visible)continue;const V=de*Math.PI,Z=re.geometry.getAttribute("position"),oe=re.geometry.getAttribute("uv");for(let Ae=0;Ae<Z.count;Ae++){const _e=re.original[Ae*3],Ie=re.original[Ae*3+1],et=Math.sin(V)*Math.sin(oe.getX(Ae)*Math.PI),ee=D+(R-D)*de,se=ee+(U-ee)*Math.exp(-_e/.36)*P;Z.setXYZ(Ae,_e*Math.cos(V)+et*.13,Ie,se+_e*Math.sin(V)+et*.44+.004+.015*(1-ae)*(1-de))}Z.needsUpdate=!0,re.geometry.computeVertexNormals(),re.geometry.computeBoundingBox()}this.rig.updateMatrixWorld(!0),this.cover.updateMatrixWorld(!0);const F=new Ii;this.rig.traverseVisible(ae=>{ae instanceof ct&&ae!==this.leaf&&ae!==this.leafReverse&&ae!==this.gutter&&(ae.geometry.boundingBox||ae.geometry.computeBoundingBox(),ae.geometry.boundingBox&&F.union(ae.geometry.boundingBox.clone().applyMatrix4(ae.matrixWorld)))});const k=new L(g,0,-.18);for(let ae=0;ae<2;ae++){let re=1;for(const de of[F.min.x,F.max.x])for(const V of[F.min.y,F.max.y])for(const Z of[F.min.z,F.max.z]){const oe=new L(de,V,Z).project(this.camera);re=Math.max(re,Math.abs(oe.x)/.96,Math.abs(oe.y)/.91)}if(re<=1.002)break;this.camera.position.copy(k.clone().add(this.camera.position.clone().sub(k).multiplyScalar(re*1.025))),this.camera.lookAt(k),this.camera.updateMatrixWorld(!0)}if(a>0){const ae=new L(0,0,N).applyMatrix4(this.rig.matrixWorld),re=(Yt-.09)*v/(2*Math.tan(this.camera.fov*Math.PI/360));this.camera.position.lerp(new L(ae.x,ae.y,ae.z+re),a),this.camera.lookAt(k.clone().lerp(ae,a)),this.camera.updateMatrixWorld(!0)}this.camera.updateProjectionMatrix();for(const[ae,re,de]of[[this.leftPage,R,0],[this.rightPage,D,1]]){const V=ae.geometry.getAttribute("position"),Z=ae.geometry.getAttribute("uv");for(let oe=0;oe<V.count;oe++){const Ae=.04+(de?Z.getX(oe):1-Z.getX(oe))*5.12;V.setZ(oe,(U-re)*Math.exp(-Ae/.36)*P)}V.needsUpdate=!0,ae.geometry.computeVertexNormals()}const W=new _t().copy(this.rig.matrixWorld).invert(),Q=new _t().multiplyMatrices(W,this.leftPage.matrixWorld),q=new _t().multiplyMatrices(W,this.rightPage.matrixWorld),K=this.gutterGeometry.getAttribute("position"),j=this.gutterGeometry.getAttribute("uv"),fe=new L,ge=new L;for(let ae=0;ae<K.count;ae++){const re=j.getX(ae),de=(j.getY(ae)-.5)*(Yt-.09);fe.set(5.16,de,(U-R)*Math.exp(-.04/.36)*P).applyMatrix4(Q),ge.set(.04,de,(U-D)*Math.exp(-.04/.36)*P).applyMatrix4(q),fe.lerp(ge,re),fe.z-=Math.sin(re*Math.PI)*.004*(1-E),K.setXYZ(ae,fe.x,fe.y,fe.z)}if(K.needsUpdate=!0,this.gutterGeometry.computeVertexNormals(),this.leaf.visible){const ae=this.leafGeometry.getAttribute("position"),re=this.leafGeometry.getAttribute("uv");for(let de=0;de<ae.count;de++){const V=this.leafOriginal[de*3],Z=this.leafOriginal[de*3+1],oe=Math.max(0,Math.min(1,this.turn+(re.getY(de)-.5)*.035*Math.sin(this.turn*Math.PI))),Ae=Math.PI*oe,_e=Math.min(3*Math.sin(Ae),1.92*(Math.PI-Ae)),Ie=_e/bt,et=Ie>1e-5?(Math.sin(Ae+Ie*V)-Math.sin(Ae))/Ie:V*Math.cos(Ae),ee=Ie>1e-5?(Math.cos(Ae)-Math.cos(Ae+Ie*V))/Ie:V*Math.sin(Ae),se=D+(R-D)*Qn(oe),le=se+(U-se)*Math.exp(-V/.36);ae.setXYZ(de,et,Z,le+ee+.004)}ae.needsUpdate=!0,this.leafGeometry.computeVertexNormals(),this.leaf.position.z=0}}render(e){e.render(this.scene,this.camera)}dispose(){this.key.shadow.dispose(),this.geometries.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.textures.forEach(e=>e.dispose())}}function zl(i,e){let t=!1,n=e[e.length-1];for(const s of e)n[1]>i[1]!=s[1]>i[1]&&i[0]<(s[0]-n[0])*(i[1]-n[1])/(s[1]-n[1])+n[0]&&(t=!t),n=s;return t}function og(i,e){if(i.some(n=>zl(n,e))||e.some(n=>zl(n,i)))return!0;const t=(n,s,r)=>(s[0]-n[0])*(r[1]-n[1])-(s[1]-n[1])*(r[0]-n[0]);for(let n=0;n<i.length;n++)for(let s=0;s<e.length;s++){const r=i[n],a=i[(n+1)%i.length],o=e[s],c=e[(s+1)%e.length];if(t(r,a,o)*t(r,a,c)<0&&t(o,c,r)*t(o,c,a)<0)return!0}return!1}function Xn(i,e,t){const n=t.map(o=>({...o,polygon:o.polygon.map(([c,l])=>[c/i,l/e]),support:[o.support[0]/i,o.support[1]/e]})),s=n.map((o,c)=>c),r=o=>s[o]===o?o:r(s[o]);for(let o=0;o<n.length;o++)for(let c=0;c<o;c++)n[o].surface!=="table"&&n[c].surface!=="table"&&og(n[o].polygon,n[c].polygon)&&(s[r(o)]=r(c));const a=new Map;for(let o=0;o<n.length;o++)a.set(r(o),(a.get(r(o))??0)+1);return[...n.map((o,c)=>({...o,contactGroup:(a.get(r(c))??0)>1?`occlusion-${r(c)}`:void 0,exclude:n.slice(0,c).map(l=>l.polygon)}))]}const lg=Xn(1672,941,[{id:"ceramic-coffee-cup",surface:"upright",support:[1268,749],relief:.002,polygon:[[1206,660],[1280,656],[1321,679],[1318,756],[1206,755]]},{id:"brass-microphone",surface:"upright",support:[1427,710],relief:.001,polygon:[[1410,490],[1456,497],[1486,518],[1481,553],[1460,593],[1447,612],[1440,681],[1476,695],[1476,714],[1390,716],[1376,704],[1397,684],[1407,614],[1387,594],[1386,541]]},{id:"headphones-and-reference-folios",surface:"grounded",support:[1539,788],polygon:[[1458,583],[1672,583],[1672,831],[1460,831],[1320,767],[1320,707],[1420,698],[1457,665]]},{id:"amber-bottle",surface:"upright",support:[1328,704],relief:.002,polygon:[[1286,539],[1371,539],[1371,711],[1286,711]]},{id:"open-score-and-record",surface:"table",lift:.003,support:[330,798],polygon:[[0,688],[180,679],[238,705],[475,699],[501,713],[574,710],[667,743],[679,798],[606,831],[0,831]]},{id:"closed-music-folios",surface:"grounded",support:[259,692],polygon:[[98,626],[294,610],[378,620],[378,650],[406,653],[411,674],[400,701],[314,711],[236,707],[96,699]]},{id:"wooden-metronome",surface:"upright",support:[402,682],relief:6e-4,polygon:[[368,490],[391,484],[418,503],[464,685],[347,696],[343,604]]},{id:"record-crate-and-pencil-jar",surface:"grounded",support:[159,694],polygon:[[0,401],[306,422],[306,476],[355,476],[355,638],[315,639],[302,704],[0,705]]},{id:"headphone-cable-and-pencil",surface:"table",support:[1420,855],polygon:[[1160,753],[1672,753],[1672,941],[1149,941]],lift:.001}]),zs=[[0,796],[16,775],[36,765],[54,773],[67,808],[638,863],[641,851],[660,843],[690,847],[710,860],[725,941],[0,941]].map(([i,e])=>[i/1672,e/941]),cg=Xn(1672,941,[{id:"small-model-blocks",surface:"upright",support:[228,687],polygon:[[187,631],[256,630],[279,653],[278,697],[186,697]]},{id:"porcelain-brush-jar",surface:"upright",support:[278,683],relief:.001,polygon:[[224,478],[344,476],[330,577],[334,642],[320,678],[291,689],[237,675],[224,630]]},{id:"standing-divider",surface:"upright",support:[349,687],polygon:[[341,547],[360,547],[390,693],[307,693],[319,646]]},{id:"rolled-plans-and-file-rack",surface:"grounded",support:[130,677],polygon:[[0,360],[102,368],[128,412],[196,400],[231,437],[231,624],[226,691],[0,705]]},{id:"pencil-cup",surface:"upright",support:[1497,816],relief:.001,polygon:[[1438,615],[1548,615],[1551,813],[1520,827],[1464,820],[1451,784]]},{id:"brass-compass-and-case",surface:"grounded",support:[1382,799],polygon:[[1250,748],[1348,726],[1449,752],[1456,801],[1380,813],[1250,799]]},{id:"architectural-reference-books",surface:"grounded",support:[1330,762],polygon:[[1227,642],[1327,636],[1462,661],[1461,769],[1255,780],[1190,747],[1190,708]]},{id:"wooden-building-study",surface:"grounded",support:[1600,784],polygon:[[1557,620],[1587,614],[1587,567],[1632,568],[1635,622],[1672,609],[1672,799],[1534,770],[1534,644]]},{id:"left-rulers",surface:"table",support:[90,734],lift:.001,polygon:[[0,685],[214,679],[217,721],[0,782]]},{id:"triangle-and-drawing-pencils",surface:"table",support:[618,825],lift:.001,polygon:[[529,734],[723,819],[674,864],[502,865]]},{id:"steel-ruler",surface:"table",support:[1100,900],lift:.001,polygon:[[937,854],[1290,937],[1290,941],[1012,941],[916,895]]}]),ug=Xn(1672,941,[{id:"letter-tray-and-wax",surface:"grounded",support:[426,731],polygon:[[348,693],[405,686],[500,691],[508,724],[469,739],[351,746]]},{id:"left-bound-journals",surface:"grounded",support:[173,728],polygon:[[0,662],[107,651],[197,659],[222,644],[320,647],[333,674],[330,719],[205,731],[176,757],[0,754]]},{id:"correspondence-box",surface:"upright",support:[151,670],polygon:[[16,523],[114,515],[158,531],[251,531],[281,617],[287,672],[0,674],[0,551]]},{id:"brass-candlestick",surface:"upright",support:[324,693],polygon:[[305,562],[345,563],[340,613],[337,673],[351,696],[297,699],[309,666],[309,614]]},{id:"twine-and-wooden-block",surface:"upright",support:[389,696],polygon:[[345,620],[435,618],[438,701],[342,702]]},{id:"gold-pen-and-seal-dish",surface:"table",support:[1435,829],lift:.0015,polygon:[[1280,777],[1406,793],[1502,790],[1588,824],[1579,855],[1482,863],[1276,806]]},{id:"bound-reference-journals",surface:"grounded",support:[1580,832],polygon:[[1492,752],[1584,714],[1672,727],[1672,853],[1542,836],[1474,799]]},{id:"square-inkwell",surface:"upright",support:[1363,783],relief:.0015,polygon:[[1331,672],[1396,672],[1395,702],[1421,719],[1421,784],[1387,795],[1320,788],[1307,763],[1310,721],[1332,703]]},{id:"quill-and-porcelain-holder",surface:"upright",support:[1496,792],relief:.001,polygon:[[1592,512],[1629,510],[1598,564],[1551,624],[1522,654],[1558,658],[1562,752],[1536,802],[1460,804],[1438,775],[1436,650],[1489,651],[1524,583]]}]),hg=Xn(1672,941,[{id:"clockwork-assembly",surface:"grounded",support:[1314,829],polygon:[[1180,723],[1280,722],[1390,730],[1515,783],[1516,863],[1340,879],[1187,828]]},{id:"ceramic-parts-tray",surface:"grounded",support:[1575,843],polygon:[[1500,772],[1598,757],[1658,775],[1660,839],[1560,854],[1492,825]]},{id:"twine-and-brass-tin",surface:"upright",support:[79,737],polygon:[[0,637],[73,638],[88,678],[157,680],[166,735],[85,747],[0,739]]},{id:"compass-and-gear-tray",surface:"grounded",support:[286,724],polygon:[[133,634],[267,639],[274,535],[318,532],[352,663],[431,675],[431,720],[376,738],[97,720]]},{id:"rolled-plans-and-tools",surface:"grounded",support:[135,695],polygon:[[0,419],[42,419],[78,373],[146,373],[191,397],[191,479],[283,477],[295,556],[333,556],[333,696],[0,713]]},{id:"amber-parts-bottle",surface:"upright",support:[1406,744],relief:.0014,polygon:[[1381,605],[1437,605],[1437,647],[1456,671],[1455,746],[1384,757],[1361,733],[1360,671],[1382,647]]},{id:"porcelain-tool-cup",surface:"upright",support:[1494,778],relief:.001,polygon:[[1439,550],[1482,550],[1497,583],[1532,588],[1573,587],[1577,614],[1555,655],[1549,774],[1488,793],[1441,766],[1442,666]]},{id:"magnifying-stand",surface:"upright",support:[1299,735],polygon:[[1240,554],[1261,535],[1312,526],[1347,542],[1362,571],[1352,603],[1329,625],[1320,693],[1358,703],[1368,734],[1320,748],[1238,742],[1237,719],[1284,701],[1282,626],[1250,612],[1233,582]]},{id:"wooden-tool-case",surface:"grounded",support:[1621,777],polygon:[[1555,617],[1598,606],[1672,612],[1672,788],[1539,784],[1538,646]]}]),fg=Xn(941,1672,[{id:"porcelain-coffee-cup",surface:"upright",support:[693,1258],relief:.001,polygon:[[646,1188],[672,1177],[733,1183],[742,1204],[735,1256],[708,1271],[662,1264],[645,1233]]},{id:"headphones-and-folios",surface:"grounded",support:[847,1295],polygon:[[799,1150],[941,1147],[941,1354],[815,1333],[711,1285],[711,1236],[785,1227]]},{id:"brass-microphone",surface:"upright",support:[796,1221],polygon:[[796,1001],[835,1006],[859,1024],[859,1056],[844,1095],[823,1119],[819,1196],[841,1207],[840,1224],[792,1236],[752,1226],[753,1207],[784,1194],[789,1115],[770,1094],[774,1040]]},{id:"amber-bottle",surface:"upright",support:[740,1231],relief:.0013,polygon:[[720,1087],[760,1087],[763,1118],[779,1139],[780,1230],[708,1239],[704,1136],[719,1115]]},{id:"closed-music-books",surface:"grounded",support:[163,1259],polygon:[[38,1206],[112,1186],[256,1203],[261,1235],[282,1240],[283,1275],[232,1285],[39,1265]]},{id:"wooden-metronome",surface:"upright",support:[267,1242],polygon:[[240,1071],[265,1068],[283,1085],[320,1247],[218,1255],[216,1215]]},{id:"record-crate-and-pencils",surface:"grounded",support:[107,1235],polygon:[[0,1018],[177,1020],[178,1070],[225,1070],[215,1194],[198,1251],[0,1260]]}]),dg=Xn(941,1672,[{id:"small-model-blocks",surface:"upright",support:[90,1197],polygon:[[56,1156],[106,1156],[112,1207],[56,1207]]},{id:"brush-jar",surface:"upright",support:[122,1194],relief:.001,polygon:[[69,1010],[169,1009],[158,1091],[164,1111],[161,1175],[141,1199],[88,1203],[69,1168],[70,1101]]},{id:"standing-divider",surface:"upright",support:[183,1165],polygon:[[171,1012],[188,1011],[214,1169],[151,1176],[159,1104]]},{id:"upright-plans-and-rack",surface:"grounded",support:[67,1188],polygon:[[0,878],[28,878],[47,862],[101,861],[109,914],[132,927],[151,974],[151,1181],[119,1204],[0,1204]]},{id:"pencil-cup",surface:"upright",support:[856,1335],relief:.001,polygon:[[802,1149],[895,1147],[900,1207],[914,1218],[918,1314],[899,1346],[835,1352],[811,1331],[806,1232]]},{id:"brass-compass-and-case",surface:"grounded",support:[762,1296],polygon:[[708,1237],[770,1221],[827,1253],[830,1302],[782,1321],[708,1314],[651,1299],[650,1286]]},{id:"architectural-books",surface:"grounded",support:[774,1241],polygon:[[694,1127],[805,1112],[887,1132],[908,1214],[887,1256],[711,1270],[672,1207],[673,1160]]},{id:"wooden-building-study",surface:"grounded",support:[910,1278],polygon:[[839,1113],[884,1111],[884,1031],[926,1035],[928,1138],[941,1139],[941,1310],[828,1270],[821,1173]]}]),pg=Xn(941,1672,[{id:"left-bound-journals",surface:"grounded",support:[110,1267],polygon:[[0,1186],[67,1180],[95,1171],[196,1184],[205,1214],[205,1254],[148,1270],[121,1290],[0,1286]]},{id:"brass-wax-dish",surface:"grounded",support:[255,1258],polygon:[[198,1218],[236,1209],[301,1215],[311,1234],[300,1254],[267,1268],[209,1261]]},{id:"wax-sticks",surface:"table",support:[220,1271],lift:.001,polygon:[[168,1246],[278,1243],[286,1286],[168,1290]]},{id:"wooden-letter-rack",surface:"upright",support:[99,1197],polygon:[[0,1058],[47,1050],[88,1062],[142,1066],[172,1149],[176,1206],[0,1220]]},{id:"brass-candlestick",surface:"upright",support:[190,1210],polygon:[[175,1082],[207,1082],[205,1123],[201,1188],[213,1217],[173,1220],[181,1176],[181,1121]]},{id:"twine-spool",surface:"upright",support:[232,1214],polygon:[[204,1140],[263,1142],[268,1218],[202,1225]]},{id:"gold-pen-and-seal-dish",surface:"table",support:[832,1363],lift:.001,polygon:[[722,1304],[828,1337],[875,1331],[941,1340],[941,1386],[887,1395],[850,1376],[725,1328]]},{id:"bound-notebooks",surface:"grounded",support:[900,1339],polygon:[[845,1253],[941,1228],[941,1373],[850,1348],[823,1307]]},{id:"square-inkwell",surface:"upright",support:[748,1289],relief:.001,polygon:[[723,1197],[768,1197],[772,1224],[791,1240],[791,1290],[763,1301],[713,1294],[703,1274],[705,1238],[723,1224]]},{id:"quill-and-porcelain-cup",surface:"upright",support:[831,1305],relief:.001,polygon:[[922,1082],[941,1080],[916,1141],[872,1191],[879,1215],[882,1295],[861,1314],[800,1306],[787,1280],[790,1193],[826,1194],[871,1128]]}]),mg=Xn(941,1672,[{id:"gears-and-parts-trays",surface:"grounded",support:[827,1351],polygon:[[698,1276],[743,1253],[803,1263],[941,1270],[941,1390],[836,1383],[770,1364],[698,1329]]},{id:"twine-and-brass-tin",surface:"upright",support:[58,1288],polygon:[[0,1186],[57,1186],[67,1227],[111,1230],[131,1253],[126,1299],[43,1298],[0,1284]]},{id:"divider-and-gear-tray",surface:"grounded",support:[208,1268],polygon:[[117,1191],[196,1175],[196,1103],[229,1101],[254,1219],[287,1230],[290,1269],[244,1291],[83,1256]]},{id:"rolled-plans-and-tools",surface:"grounded",support:[104,1228],polygon:[[0,1019],[43,1017],[61,986],[112,986],[136,1023],[139,1059],[208,1067],[214,1152],[191,1225],[110,1256],[0,1250]]},{id:"amber-bottle",surface:"upright",support:[777,1268],relief:.001,polygon:[[755,1160],[795,1160],[798,1190],[811,1203],[813,1268],[798,1282],[758,1283],[741,1269],[740,1207],[756,1190]]},{id:"porcelain-tool-cup",surface:"upright",support:[854,1290],relief:.001,polygon:[[818,1116],[843,1110],[855,1150],[878,1146],[907,1148],[910,1177],[888,1202],[895,1276],[878,1301],[822,1301],[807,1269],[808,1190]]},{id:"magnifying-stand",surface:"upright",support:[702,1255],polygon:[[663,1081],[684,1061],[717,1057],[742,1079],[751,1106],[738,1139],[716,1157],[717,1229],[750,1244],[748,1263],[710,1272],[661,1264],[656,1247],[687,1231],[689,1155],[667,1139],[659,1116]]},{id:"wooden-parts-box",surface:"grounded",support:[925,1282],polygon:[[890,1153],[941,1157],[941,1309],[891,1293],[887,1191]]}]),gg=new Map([["music-desktop",{layers:lg,keep:zs,tableHorizon:.735,safeZone:[.43,.45,.77,.87]}],["drafting-desktop",{layers:cg,keep:zs,tableHorizon:.735,safeZone:[.43,.45,.75,.87]}],["writing-desktop",{layers:ug,keep:zs,tableHorizon:.755,safeZone:[.43,.44,.75,.87]}],["workbench-desktop",{layers:hg,keep:zs,tableHorizon:.75,safeZone:[.43,.44,.73,.87]}],["music-portrait",{layers:fg,tableHorizon:.71,safeZone:[.26,.47,.72,.84]}],["drafting-portrait",{layers:dg,tableHorizon:.705,safeZone:[.26,.47,.72,.84]}],["writing-portrait",{layers:pg,tableHorizon:.71,safeZone:[.26,.47,.73,.85]}],["workbench-portrait",{layers:mg,tableHorizon:.71,safeZone:[.26,.47,.71,.84]}]]);function _g(i,e){const t=["music","drafting","writing","workbench"][i-1];if(!t)return;const n=`${t}-${e?"portrait":"desktop"}`,s=gg.get(n);if(s)return{source:`parallax/${n}-source`,clean:`parallax/${n}-clean`,cutouts:`parallax/${n}-mask`,...s}}const vg="varying vec2 v_uv;void main(){v_uv=vec2((position.x+1.0)*.5,(position.y+1.0)*.5);gl_Position=vec4(position.xy,0.0,1.0);}",xg=`varying vec2 v_uv;uniform sampler2D u_world;uniform sampler2D u_book;uniform float u_inBook;
vec3 srgb(vec3 c){return mix(c*12.92,1.055*pow(max(c,vec3(0)),vec3(1.0/2.4))-.055,step(vec3(.0031308),c));}
void main(){gl_FragColor=vec4(u_inBook>.5?srgb(texture2D(u_book,v_uv).rgb):texture2D(u_world,v_uv).rgb,1.0);}`;class Sg{constructor(e,t,n){this.canvas=e,this.invalidate=t,this.fail=n,this.renderer=new z0({canvas:e,antialias:!0,alpha:!1,powerPreference:"default"}),this.renderer.outputColorSpace=is,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zi,this.renderer.debug.onShaderError=(s,r)=>{console.error("Atelier shader compilation failed:",s.getProgramInfoLog(r)),queueMicrotask(()=>{this.disposed||this.fail()})},this.material=new zt({vertexShader:vg,fragmentShader:xg,depthTest:!1,depthWrite:!1,uniforms:{u_book:{value:this.bookImage.texture},u_world:{value:this.world.texture},u_inBook:{value:1}}}),this.scene.add(new ct(this.geometry,this.material))}canvas;invalidate;fail;renderer;stage;stages=[];stageRequests=new Map;surfaces=[];book;deskRequests=new Map;readyDesks=new Set;prefetched=new Set;surfaceRequest;initialized=!1;warmupTimer;surfacesReady=!1;bitmaps=[];world=new Bt(1,1);sketch=new Bt(1,1);bookImage=new Bt(1,1);beforeWorld=new Bt(1,1);beforeSketch=new Bt(1,1);scene=new Qa;camera=new sr(-1,1,1,-1,0,1);geometry=new Pt(2,2);material;pictures=new Map;pending=new Map;textures=[];textureRequests=new Map;width=0;height=0;lastKey="";stageKey="";sketchKey="";beforeKey="";beforeSketchKey="";renderAspect=0;disposed=!1;pendingFrame="";layout=null;texture(e){let t=this.textureRequests.get(e);if(!t){const n=e==="atelier-cover"||e==="grimoire-table"||e.startsWith("theatre-")||e==="anime-page-scene",s=new Image;s.decoding="async",s.src=Hc("images/"+e+".webp"),t=s.decode().then(async()=>{let r=s;if(typeof createImageBitmap=="function")try{r=await createImageBitmap(s,{imageOrientation:n?"flipY":"from-image",premultiplyAlpha:"none",colorSpaceConversion:"none"})}catch{}if(this.disposed)throw r!==s&&r.close(),new Error("Disposed");r!==s&&this.bitmaps.push(r);const a=new Lt(r);return a.flipY=!1,e.endsWith("-mask")&&(a.generateMipmaps=!1,a.minFilter=a.magFilter=Et),a.needsUpdate=!0,this.textures.push(a),e!=="atelier-cover"&&e!=="grimoire-table"&&this.renderer.initTexture(a),a}),this.textureRequests.set(e,t)}return t}async init(){const[e,t]=await Promise.all([this.texture("atelier-cover"),this.texture("grimoire-table")]);this.disposed||(this.book=new ag(e,this.sketch.texture,this.world.texture,t),this.resize(),this.book.update(0,this.width/this.height,this.height,0,0,0,Math.max(this.width/this.height,ti)),await this.renderer.compileAsync(this.book.scene,this.book.camera),!this.disposed&&(await this.renderer.compileAsync(this.scene,this.camera),!this.disposed&&(this.initialized=!0,this.warmupTimer=setTimeout(()=>{this.disposed||this.activateStage(this.width/this.height<.8?1:0)},100))))}activateStage(e){this.prepareStage(e).then(t=>{!this.disposed&&(this.width/this.height<.8?1:0)===e&&(this.stage=t,this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.invalidate())}).catch(()=>{this.disposed||this.fail()})}prepareSurfaces(){this.surfaceRequest||(this.surfaceRequest=Promise.all(["theatre-paper","theatre-facade","theatre-roof","theatre-foil","anime-page-scene"].map(e=>this.texture(e))).then(async e=>{if(!this.disposed){this.surfaces=e,this.stages.forEach(t=>t?.setMaterials(this.surfaces));for(const t of this.stages){if(this.disposed)return;t&&await this.renderer.compileAsync(t.scene,t.camera)}this.disposed||(this.surfacesReady=!0,this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.invalidate())}}).catch(()=>{this.disposed||this.fail()}))}prepareStage(e){let t=this.stageRequests.get(e);if(!t){const n=e?["atelier-portrait-clean","atelier-portrait-sketch","atelier-portrait-foreground"]:["atelier-clean","atelier-clean-sketch","atelier-foreground"];t=Promise.all([Promise.all(n.map(s=>this.texture(s))),this.prepare(0)]).then(async([s])=>{if(this.disposed)throw new Error("Disposed");const r=this.pictures.get(0),a=new ng(s[0],s[1],s[2],r.color,r.sketch,!!e);if(this.surfaces.length&&a.setMaterials(this.surfaces),await this.renderer.compileAsync(a.scene,a.camera),this.disposed)throw a.dispose(),new Error("Disposed");return this.stages[e]=a,a}),this.stageRequests.set(e,t)}return t}performanceReady(e){return this.surfacesReady&&(e===0||this.readyDesks.has(`${this.width/this.height<.8?1:0}:${e}`))&&(this.stage?.performanceReady(e)??!1)}prepareDesk(e,t){if(e===0)return Promise.resolve();const n=`${t}:${e}`;let s=this.deskRequests.get(n);if(!s){const r=_g(e,!!t);if(!r)return Promise.reject(new Error("Missing desk composition: "+n));s=Promise.all([this.prepareStage(t),this.texture(r.source),this.texture(r.clean),this.texture(r.cutouts),r.shadows?this.texture(r.shadows):Promise.resolve(void 0)]).then(async([a,o,c,l,h])=>{this.disposed||(a.setDeskComposition(e,{...r,source:o,clean:c,cutouts:l,shadows:h}),await this.renderer.compileAsync(a.scene,a.camera),!this.disposed&&(this.readyDesks.add(n),this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.invalidate()))}),this.deskRequests.set(n,s)}return s}prepare(e){let t=this.pending.get(e);return t||(t=Promise.all([this.texture(Eo[e].image),this.texture(Eo[e].image+"-sketch")]).then(([n,s])=>{this.pictures.set(e,{color:n,sketch:s})}),this.pending.set(e,t)),t}resize(){const e=innerWidth,t=innerHeight;if(e===this.width&&t===this.height)return;this.width=e,this.height=t;const n=e/t<.8?1:0;this.stages[n]?this.stage=this.stages[n]:this.initialized&&this.activateStage(n),this.lastKey=this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.renderAspect=0;const s=Math.min(devicePixelRatio||1,1.4,Math.sqrt(135e4/(e*t)));this.renderer.setPixelRatio(s),this.renderer.setSize(e,t,!1);for(const r of[this.bookImage,this.world,this.sketch,this.beforeWorld,this.beforeSketch])r.setSize(Math.round(e*s),Math.round(t*s))}draw(e,t=0,n=0,s){if(this.disposed||!this.book)return null;if(e.kind==="opening"&&e.book<1e-6)return this.lastKey!=="closed-cover"&&(this.book.update(0,this.width/this.height,this.height,0,0,0,Math.max(this.width/this.height,ti)),this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.setRenderTarget(this.bookImage),this.renderer.clear(),this.book.render(this.renderer),this.renderer.setRenderTarget(null),this.material.uniforms.u_inBook.value=1,this.renderer.render(this.scene,this.camera),this.canvas.style.opacity="1",Object.assign(this.canvas.dataset,{depth:"0.000",cameraX:"0.000",backClose:"0.000",immersion:"0.000",leaf:"0.0000",spread:"0"}),this.layout=wo(this.width,this.height),this.lastKey="closed-cover"),this.layout;if(!this.stages[this.width/this.height<.8?1:0])return null;const r=this.width/this.height<.8?1:0,a=M=>M===0||this.readyDesks.has(`${r}:${M}`);if(!this.pictures.has(e.index)||!this.pictures.has(e.from)||!a(e.index)||!a(e.from)){const M=r+":"+e.index+":"+e.from;return M!==this.pendingFrame&&(this.pendingFrame=M,Promise.all([this.prepare(e.index),this.prepare(e.from),this.prepareDesk(e.index,r),this.prepareDesk(e.from,r)]).then(()=>{this.disposed||(this.pendingFrame="",this.invalidate())}).catch(()=>{this.disposed||this.fail()})),null}(e.kind!=="opening"||e.book>.05)&&this.prepareSurfaces();const o=`${r}:${e.index+1}`;e.index<4&&(e.kind!=="opening"||e.immersion>.2)&&!this.prefetched.has(o)&&(this.prefetched.add(o),Promise.all([this.prepare(e.index+1),this.prepareDesk(e.index+1,r)]).catch(()=>{})),this.canvas.style.opacity="1";const c=this.width/this.height,l=e.immersion<.999999,h=e.kind==="turning",d=h&&e.local<.25,u=l?Math.max(c,ti):c;if(u!==this.renderAspect){const M=Math.min(devicePixelRatio||1,1.4,Math.sqrt(135e4/(this.height*this.height*u))),E=Math.round(this.height*M),_=Math.round(E*u);for(const b of[this.world,this.sketch,this.beforeWorld,this.beforeSketch])b.setSize(_,E);this.renderAspect=u,this.stageKey=this.sketchKey=this.beforeKey=this.beforeSketchKey="",this.lastKey=""}const f=t*e.immersion,g=n*e.immersion,S=s?[s.index,s.progress.toFixed(5),s.opacity.toFixed(4),s.departure.toFixed(5)].join(":"):"none",m=[e.kind,e.index,e.local.toFixed(5),e.turn.toFixed(5),e.paint.toFixed(4),e.book.toFixed(4),e.closing.toFixed(4),e.immersion.toFixed(5),e.depth.toFixed(4),f.toFixed(4),g.toFixed(4),S].join(":");if(m===this.lastKey)return this.layout;this.lastKey=m;const p=(M,E,_,b,w)=>{const A=w?this.beforeWorld:this.world,v=w?this.beforeSketch:this.sketch,T=this.pictures.get(M),R=s?.index===M?s:void 0,D=[M,E.toFixed(4),_.toFixed(4),b.toFixed(4),u.toFixed(5),R?S:"none"].join(":"),N=w?this.beforeKey:this.stageKey,U=w?this.beforeSketchKey:this.sketchKey;(D!==N||l&&D!==U)&&(this.stage.setRealm(T.color,T.sketch,M),this.stage.update(E,_,b,u,c),this.stage.setPerformance(R,M),D!==N&&(this.renderer.setRenderTarget(A),this.renderer.clear(),this.stage.render(this.renderer),w?this.beforeKey=D:this.stageKey=D),l&&D!==U&&(this.renderer.setRenderTarget(v),this.renderer.clear(),this.stage.render(this.renderer,!0),w?this.beforeSketchKey=D:this.sketchKey=D))};if(h&&p(e.from,d?e.depth:0,d?f:0,d?g:0,!0),p(e.index,d?0:e.depth,d?0:f,d?0:g,!1),l){const M={color:h?this.beforeWorld.texture:this.world.texture,sketch:h?this.beforeSketch.texture:this.sketch.texture};this.book.setImages(M,{color:this.world.texture,sketch:this.sketch.texture},h?1:e.paint,e.paint,e.turn,h||e.kind==="opening");const E=e.kind==="opening"?0:e.kind==="closing"||e.kind==="end"?1:h?(e.from+e.turn)/5:e.index/5;this.book.update(e.book,c,this.height,e.closing,E,e.immersion,u),this.renderer.shadowMap.autoUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderer.setRenderTarget(this.bookImage),this.renderer.clear(),this.book.render(this.renderer)}return this.renderer.setRenderTarget(null),this.material.uniforms.u_inBook.value=l?1:0,this.material.uniforms.u_world.value=d?this.beforeWorld.texture:this.world.texture,this.renderer.render(this.scene,this.camera),this.layout={...wo(this.width,this.height),projection:this.stage.projection(e.index,this.width,this.height)},this.canvas.dataset.depth=e.depth.toFixed(3),this.canvas.dataset.cameraX=(f*.75*e.depth).toFixed(3),this.canvas.dataset.backClose=e.closing.toFixed(3),this.canvas.dataset.immersion=e.immersion.toFixed(3),this.canvas.dataset.leaf=e.turn.toFixed(4),this.canvas.dataset.spread=String(d?e.from:e.index),this.layout}dispose(){if(!this.disposed){this.disposed=!0,clearTimeout(this.warmupTimer);for(const e of this.stages)e?.dispose();this.book?.dispose(),this.geometry.dispose(),this.material.dispose();for(const e of[this.world,this.sketch,this.bookImage,this.beforeWorld,this.beforeSketch])e.dispose();for(const e of this.textures)e.dispose();for(const e of this.bitmaps)e.close();this.renderer.dispose()}}}export{Sg as JourneyRenderer};
