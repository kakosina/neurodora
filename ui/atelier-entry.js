// A light follows the pointer over the woven cover. Navigation stays a native link.
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
for(const link of document.querySelectorAll('.baseline-atelier-link')){
 let frame=0,x=50,y=50;
 const paint=()=>{frame=0;link.style.setProperty('--foil-x',`${x}%`);link.style.setProperty('--foil-y',`${y}%`);};
 link.addEventListener('pointermove',event=>{
  if(!finePointer.matches||reducedMotion.matches)return;
  const box=link.getBoundingClientRect();
  x=Math.max(0,Math.min(100,(event.clientX-box.left)/box.width*100));
  y=Math.max(0,Math.min(100,(event.clientY-box.top)/box.height*100));
  if(!frame)frame=requestAnimationFrame(paint);
 },{passive:true});
 link.addEventListener('pointerleave',()=>{
  cancelAnimationFrame(frame);frame=0;
  link.style.removeProperty('--foil-x');link.style.removeProperty('--foil-y');
 },{passive:true});
}
