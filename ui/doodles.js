/* Native, deterministic margin drawings. No dependencies, network, or idle RAF. */
(() => {
  'use strict';
  if (window.NeurodoraDoodles || /\/(?:monogatari|atelier|game)(?:\/|$)/.test(location.pathname)) return;
  const shapes = {
    star: '<path class="nd-bold" d="m31 6 7 17 19 1-14 13 4 20-17-10-17 9 4-19L4 23l19-1Z"/><path class="nd-faint" d="m29 14 5 12 12 2M46 6l3-4m9 14 4-1"/>',
    heart: '<path class="nd-bold" d="M31 52C18 43 4 31 8 19c4-11 18-12 24-1 9-12 23-7 24 3 1 12-15 25-25 31Z"/><path class="nd-faint" d="M17 18c3-4 8-3 10 1M16 43l12 11M47 7l3-4m7 7 5-1"/>',
    note: '<path d="m25 45-2-30 29-7 1 31M24 21l28-7"/><path class="nd-bold" d="M25 45c-2-9-16-6-17 1-1 7 17 8 17-1ZM53 39c-2-8-16-6-17 1-1 7 17 7 17-1Z"/><path class="nd-faint" d="m6 23 6-4m-5 12 5-2"/>',
    arrow: '<path class="nd-bold" d="M6 51c18 3 31-7 26-18-5-13-20-3-10 5 13 9 26-6 29-27m-12 9 12-9 5 16"/><path class="nd-faint" d="m3 57 8 1m41-24 3-4"/>',
    spark: '<path class="nd-bold" d="m31 6 2 18 16-8-10 15 18 4-19 4 9 16-16-10-6 14 1-19-19 8 13-16-16-6 20-1Z"/>',
    orbit: '<path d="M48 17C32 1 8 17 11 36c3 24 42 26 43 3 1-15-20-25-31-12-12 15 8 28 18 15"/><path class="nd-faint" d="m5 48 4 4m45-41 4-4m-1 20 5-2"/>',
    rays: '<path class="nd-bold" d="m14 45 7-17m9 15 2-26m10 26 10-13"/><path class="nd-faint" d="m11 20 1-5m35 6 3-6"/>',
    twins: '<path d="m23 8 4 14 14 3-14 5-4 16-4-16-13-5 13-3Zm27 30 2 8 8 2-8 3-2 9-3-9-7-3 7-2Z"/>',
    loop: '<path class="nd-bold" d="M7 41c15-26 25-30 26-18 1 11-20 28-20 17 0-12 35-24 37-14 1 7-10 17-8 9 1-5 8-10 15-10"/>'
  };
  const palette = ['#ee5e66','#43b4c3','#f3aa28','#202120'];
  const motifs = Object.keys(shapes);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const main = document.querySelector('main');
  if (!main) return;
  const layer = document.createElement('div');
  layer.className = 'nd-doodles'; layer.setAttribute('aria-hidden','true');
  document.body.appendChild(layer);
  let nodes = [], obstacles = [], raf = 0, timer = 0, impulseTimer = 0, destroyed = false, frames = 0, layouts = 0;
  let pointer = null, lastTime = 0;
  const disposers = [];
  const listen = (target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    disposers.push(() => target.removeEventListener(type, handler, options));
  };
  const box = r => ({left:r.left+scrollX,top:r.top+scrollY,right:r.right+scrollX,bottom:r.bottom+scrollY});
  const intersects = (a,b,pad=0) => a.left < b.right+pad && a.right > b.left-pad && a.top < b.bottom+pad && a.bottom > b.top-pad;
  const rectAt = (x,y,r) => ({left:x-r,top:y-r,right:x+r,bottom:y+r});
  const visible = el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden';
  function visibleBox(el, raw=el.getBoundingClientRect()) {
    const r=box(raw);
    for(let p=el;p&&p!==document.body;p=p.parentElement) {
      const style=getComputedStyle(p);
      if(style.position==='fixed'||style.position==='sticky') return null;
      if(p===el) continue;
      const c=box(p.getBoundingClientRect());
      if(/hidden|clip|scroll|auto/.test(style.overflowX)){r.left=Math.max(r.left,c.left);r.right=Math.min(r.right,c.right)}
      if(/hidden|clip|scroll|auto/.test(style.overflowY)){r.top=Math.max(r.top,c.top);r.bottom=Math.min(r.bottom,c.bottom)}
    }
    return r.right>r.left&&r.bottom>r.top?r:null;
  }
  function protectedBoxes() {
    const result=[];
    const solid='a,button,input,textarea,select,img,video,canvas,iframe,svg,.release-card,.baseline-game-poster,.profile-card,.stat-card,.ability-card,.identity-node,.manifesto,.cr-side,.cr-toc,.crx-toc';
    document.querySelectorAll(solid).forEach(el => {
      if (el.closest('.nd-doodles') || !visible(el)) return;
      const r=visibleBox(el);
      if (r) result.push(r);
    });
    const walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT,{acceptNode(n){
      const p=n.parentElement;
      return n.textContent.trim() && p && !p.closest(`${solid},script,style,noscript,[aria-hidden="true"]`) && visible(p) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }});
    let n;
    const range=document.createRange();
    while ((n=walker.nextNode())) {
      range.selectNodeContents(n);
      for (const r of range.getClientRects()) if(r.width>1&&r.height>1) {const clipped=visibleBox(n.parentElement,r);if(clipped)result.push(clipped)}
    }
    return result;
  }
  function plans(mobile) {
    const out=[];
    const add=(selector,count,seed=0)=>{
      const el=document.querySelector(selector);
      if(el&&visible(el)) out.push({el,count:mobile?Math.min(count,2):count,seed,key:el.id||selector});
    };
    if(document.querySelector('#main-content .hero')) {
      add('#about',4,0); add('#tracks',4,2); add('#articles',3,1); add('#future',3,4); add('#follow',3,3);
    } else if (document.querySelector('#library')) {
      add('.library-hero',2,0);
      const collage=document.querySelector('.article-collage');
      if(collage) out.push({el:collage,count:mobile?4:7,seed:2,key:'library-collage'});
      add('.library-cta',2,3);
    } else if (document.querySelector('.baseline-song')) {
      add('.baseline-song-header',3,2); add('.baseline-lyrics',4,1);
    } else if (document.querySelector('.visual-article')) {
      add('#about',3,0); add('#how',2,2); add('#identity',2,4); add('#now',2,1);
    } else if (document.querySelector('.article-body')) {
      add('.cr-hero,.crx-hero,.article-hero',2,0);
      add('.cr-layout,.crx-layout,.article-content,.article-paper',6,2);
    }
    return out;
  }
  function createNode(motif,color,size,turn,zone) {
    const el=document.createElement('span');
    el.className='nd-doodle'; el.dataset.motif=motif; el.dataset.zone=zone;
    el.style.cssText=`width:${size}px;height:${size}px;--nd-color:${color}`;
    el.innerHTML=`<svg viewBox="0 0 64 64" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${shapes[motif]}</svg>`;
    layer.appendChild(el);
    return {el,size,turn,x:0,y:0,dx:0,dy:0,rot:0,vx:0,vy:0,vr:0,tx:0,ty:0,tr:0};
  }
  function render(n) {
    n.el.style.transform=`translate3d(${n.dx.toFixed(2)}px,${n.dy.toFixed(2)}px,0) rotate(${(n.turn+n.rot).toFixed(2)}deg)`;
  }
  function stop(reset=false) {
    if(raf) cancelAnimationFrame(raf); raf=0; lastTime=0;
    if(reset) nodes.forEach(n=>{n.dx=n.dy=n.rot=n.vx=n.vy=n.vr=n.tx=n.ty=n.tr=0;render(n)});
  }
  function layout() {
    if(destroyed) return;
    stop(true); pointer=null; layer.replaceChildren(); nodes=[]; layouts++;
    const mobile=innerWidth<=700, width=document.documentElement.clientWidth;
    obstacles=protectedBoxes();
    const used=[];
    const origin=box(layer.getBoundingClientRect());
    const chosen={about:['star','heart','rays','note'],tracks:['note','arrow','twins','loop'],articles:['heart','orbit','star'],future:['spark','arrow','rays'],follow:['heart','twins','note']};
    plans(mobile).forEach((plan,group)=>{
      const b=box(plan.el.getBoundingClientRect());
      const relevant=obstacles.filter(o=>o.bottom>b.top-20&&o.top<b.bottom+20);
      const anchors=[[.12,.07],[.89,.3],[.05,.72],[.78,.94],[.93,.61],[.18,.49],[.87,.86]];
      for(let i=0;i<plan.count;i++) {
        const motif=chosen[plan.key]?.[i]||motifs[(plan.seed+i*3+group)%motifs.length];
        let size=(mobile?[48,44,52,46]:[76,62,72,57,80])[(i+group)% (mobile?4:5)];
        let radius=size*.7+(mobile?7:10); // Includes every allowed translation, rotation and stroke.
        const anchor=anchors[(i+group)%anchors.length];
        let idealX=width*anchor[0], idealY=b.top+(b.bottom-b.top)*anchor[1];
        if(plan.key==='library-collage') idealY=b.top+(b.bottom-b.top)*(i+.5)/plan.count;
        const search=()=>{const candidates=[];
        const step=mobile?18:28;
        const ys=[b.top+radius+2,b.bottom-radius-2],xs=[radius+3,width-radius-3];
        for(let y=b.top+radius;y<=b.bottom-radius;y+=step)ys.push(y);
        for(let x=radius+3;x<=width-radius-3;x+=step)xs.push(x);
        for(const y of ys) {
          for(const x of xs) {
            const r=rectAt(x,y,radius);
            if(relevant.some(o=>intersects(r,o,5))||used.some(o=>intersects(r,o,12))) continue;
            const distance=Math.abs(x-idealX)+Math.abs(y-idealY)*.85;
            candidates.push({x,y,r,distance});
          }
        }
        candidates.sort((a,b)=>a.distance-b.distance);
        return candidates[0]};
        let best=search();
        if(!best&&size>(mobile?44:57)){size=mobile?44:57;radius=size*.7+(mobile?7:10);best=search()}
        if(!best) continue; // Never place a drawing over content to meet a quota.
        const n=createNode(motif,palette[plan.key==='articles'?[0,2,1][i]:(i+group)%palette.length],size,[-17,11,-7,19,-12][(i+group)%5],plan.key);
        n.x=best.x;n.y=best.y;n.envelope=best.r;
        n.el.style.left=`${(best.x-size/2-origin.left).toFixed(2)}px`;
        n.el.style.top=`${(best.y-size/2-origin.top).toFixed(2)}px`;
        render(n);nodes.push(n);used.push(best.r);
      }
    });
    layer.style.visibility='';
  }
  function scheduleLayout() {
    clearTimeout(timer);stop(true);layer.style.visibility='hidden';
    if(!destroyed&&!document.hidden)timer=setTimeout(layout,120);
  }
  function tick(time) {
    raf=0;
    if(destroyed||document.hidden||reduce.matches) return;
    const dt=lastTime?Math.min((time-lastTime)/16.67,2):1;lastTime=time;
    let moving=false;frames++;
    for(const n of nodes) {
      for(const [pos,vel,target] of [['dx','vx','tx'],['dy','vy','ty'],['rot','vr','tr']]) {
        n[vel]=(n[vel]+(n[target]-n[pos])*.075*dt)*Math.pow(.7,dt);
        n[pos]+=n[vel]*dt;
        if(Math.abs(n[target]-n[pos])>.015||Math.abs(n[vel])>.015) moving=true;
        else {n[pos]=n[target];n[vel]=0;}
      }
      render(n);
    }
    if(moving) raf=requestAnimationFrame(tick); else lastTime=0;
  }
  function wake(){if(!raf&&!destroyed&&!document.hidden&&!reduce.matches)raf=requestAnimationFrame(tick)}
  function aim(x,y,push=false) {
    if(reduce.matches||document.hidden||destroyed) return;
    pointer={x,y};
    let changed=false;
    for(const n of nodes) {
      const dx=x-n.x,dy=y-n.y,d=Math.hypot(dx,dy),reach=innerWidth<=700?115:190;
      const strength=Math.max(0,1-d/reach);
      const direction=push?-1:1;
      const tx=direction*dx/reach*strength*22,ty=direction*dy/reach*strength*22;
      const tr=direction*(dx/reach)*strength*27;
      if(Math.abs(tx-n.tx)>.02||Math.abs(ty-n.ty)>.02||Math.abs(tr-n.tr)>.02)changed=true;
      n.tx=tx;n.ty=ty;n.tr=tr;
    }
    if(changed)wake();
  }
  function relax() {pointer=null;nodes.forEach(n=>{n.tx=n.ty=n.tr=0});wake()}
  function touch(e) {
    if(e.pointerType==='mouse') return;
    aim(e.pageX,e.pageY,true);clearTimeout(impulseTimer);impulseTimer=setTimeout(relax,210);
  }
  listen(document,'pointermove',e=>{if(e.pointerType==='mouse')aim(e.pageX,e.pageY)}, {passive:true});
  listen(document,'pointerdown',touch,{passive:true});
  listen(document,'pointerout',e=>{if(!e.relatedTarget)relax()},{passive:true});
  listen(document,'focusin',e=>{
    if(!e.target.matches('a,button,input,select,textarea'))return;
    const r=e.target.getBoundingClientRect();aim(r.left+r.width/2+scrollX,r.top+r.height/2+scrollY);
  });
  listen(document,'focusout',relax);
  listen(window,'scroll',()=>{if(pointer)relax()},{passive:true});
  listen(window,'resize',scheduleLayout,{passive:true});
  listen(document,'visibilitychange',()=>{if(document.hidden){clearTimeout(timer);clearTimeout(impulseTimer);pointer=null;stop(true)}else scheduleLayout()});
  const motionChanged=()=>{stop(true);pointer=null;};
  listen(reduce,'change',motionChanged);
  listen(window,'pageshow',scheduleLayout);
  listen(window,'pagehide',()=>{stop(true);clearTimeout(timer);clearTimeout(impulseTimer)});
  const observer=typeof ResizeObserver==='function'?new ResizeObserver(scheduleLayout):null;
  observer?.observe(main);
  main.querySelectorAll('section,.release-grid,.reading-stack,.function-wall,.article-photo-card,.cr-layout,.crx-layout').forEach(el=>observer?.observe(el));
  const mutationObserver=new MutationObserver(scheduleLayout);
  mutationObserver.observe(main,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden','open']});
  listen(main,'toggle',scheduleLayout,true);
  main.querySelectorAll('img').forEach(img=>{if(!img.complete)listen(img,'load',scheduleLayout,{once:true})});
  document.fonts?.ready.then(()=>{if(!destroyed)scheduleLayout()});
  function destroy(){destroyed=true;stop();clearTimeout(timer);clearTimeout(impulseTimer);observer?.disconnect();mutationObserver.disconnect();disposers.forEach(fn=>fn());layer.remove();delete window.NeurodoraDoodles}
  window.NeurodoraDoodles={
    refresh:scheduleLayout,destroy,
    inspect:()=>{const fresh=protectedBoxes();return {count:nodes.length,visible:layer.style.visibility!=='hidden',running:!!raf,frames,layouts,reducedMotion:reduce.matches,
      drawings:nodes.map(n=>({motif:n.el.dataset.motif,zone:n.el.dataset.zone,x:n.x,y:n.y,size:n.size,envelope:n.envelope,collisions:fresh.filter(o=>intersects(n.envelope,o,4)).length}))}}
  };
  layout();
})();
