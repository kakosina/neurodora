// Leave the published composition untouched unless painted character pixels
// actually overlap the title, paragraph, follow label or social controls.
const hero=document.querySelector('.hero'),character=hero?.querySelector('.hero-character');
if(hero&&character){
 const matrixPoint=(x,y,m,cx,cy)=>({x:cx+m.a*x+m.c*y,y:cy+m.b*x+m.d*y});
 const rect=(points)=>({left:Math.min(...points.map(p=>p.x)),right:Math.max(...points.map(p=>p.x)),top:Math.min(...points.map(p=>p.y)),bottom:Math.max(...points.map(p=>p.y))});
 const overlap=(a,b)=>a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;
 Promise.all([character.decode(),document.fonts.ready,fetch('/ui/hero-opaque-bands.json').then(r=>r.json())]).then(([, ,mask])=>{
  let timer;
  function fit(){
   // The published reduced-motion rule sets a tiny transition duration on
   // every element. Disable it while reading trial widths, or the browser
   // reports the previous animated size instead of the size just assigned.
   character.style.setProperty('transition','none','important');
   character.style.removeProperty('width');character.style.removeProperty('top');character.style.removeProperty('bottom');character.style.removeProperty('transform');
   hero.dataset.imageFit='original';
   // The published narrow layout already separates the two blocks vertically.
   if(innerWidth<=1600){hero.dataset.imageFit=innerWidth>880?'stacked':'original';character.style.removeProperty('transition');return;}
   const baseWidth=character.offsetWidth,baseTop=character.offsetTop;
   const originalTransform=getComputedStyle(character).transform;
   const matrix=new DOMMatrix(originalTransform==='none'?undefined:originalTransform);
   const protectedRects=[];
   for(const el of hero.querySelectorAll('.hero-lead,.hero-copy>.eyebrow,.follow-label')){
    const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node;
    while((node=walker.nextNode()))if(node.textContent.trim()){const range=document.createRange();range.selectNodeContents(node);for(const r of range.getClientRects())protectedRects.push(r);}
   }
   hero.querySelectorAll('.social-button').forEach(el=>protectedRects.push(el.getBoundingClientRect()));
   const title=hero.querySelector('.hero-title-wordmark').getBoundingClientRect();
   protectedRects.push({left:title.left+title.width*114/1695,right:title.left+title.width*1641/1695,top:title.top+title.height*118/928,bottom:title.top+title.height*785/928});
   const bottom=hero.getBoundingClientRect().bottom;
   function bands(){
    const r=character.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    const w=character.offsetWidth,h=character.offsetHeight;
    return mask.bands.map(([x0,y0,x1,y1])=>rect([[x0,y0],[x1,y0],[x0,y1],[x1,y1]].map(([x,y])=>matrixPoint(x/mask.width*w-w/2,y/mask.height*h-h/2,matrix,cx,cy)))).filter(r=>r.top<bottom);
   }
   const initial=bands();
   if(!initial.some(r=>protectedRects.some(p=>overlap(r,p)))){character.style.removeProperty('transition');return;}
   function tryWidth(width){
    character.style.width=`${width}px`;character.style.top=`${baseTop+54*(baseWidth-width)/mask.width}px`;character.style.bottom='auto';
    const painted=bands();let minimum=-Infinity;
    for(const r of painted)for(const p of protectedRects)if(r.top<p.bottom+7&&r.bottom>p.top-7)minimum=Math.max(minimum,p.right+9-r.left);
    const maximum=Math.floor(innerWidth-9-Math.max(...painted.map(r=>r.right)));
    minimum=Math.ceil(minimum);
    // A smaller picture can need a LEFT shift because the original negative
    // CSS right offset stays in force. Check both ends of the safe interval.
    const shift=Math.min(Math.max(0,minimum),maximum);
    return{width,shift,fits:minimum<=maximum};
   }
   let result=tryWidth(baseWidth);
   if(!result.fits){
    let low=baseWidth*.25,high=baseWidth;result=tryWidth(low);
    if(!result.fits){
     character.style.removeProperty('width');character.style.removeProperty('top');character.style.removeProperty('bottom');
     character.style.removeProperty('transition');
     hero.dataset.imageFit='unresolved';return;
    }
    for(let i=0;i<11;i++){const middle=(low+high)/2,trial=tryWidth(middle);if(trial.fits){low=middle;result=trial;}else high=middle;}
    result=tryWidth(Math.floor(result.width));
   }
   character.style.transform=`translateX(${result.shift}px) ${originalTransform==='none'?'':originalTransform}`;
   hero.dataset.imageFit='collision-corrected';
  }
  fit();window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(fit,90);},{passive:true});
 }).catch(()=>{});
}
