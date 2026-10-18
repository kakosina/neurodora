const projects=document.querySelector('.atelier-projects');
if(projects){
 document.addEventListener('pointerdown',event=>{if(projects.open&&!projects.contains(event.target))projects.open=false;});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&projects.open&&!event.defaultPrevented&&!document.querySelector('dialog[open]')){projects.open=false;projects.querySelector('summary').focus();}});
}
