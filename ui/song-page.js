document.querySelector('[data-copy-lyrics]')?.addEventListener('click',async()=>{
 const text=[...document.querySelectorAll('.lyric-stanza')].map(p=>[...p.childNodes].map(n=>n.nodeName==='BR'?'\n':n.textContent).join('')).join('\n\n');
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText(text);status.textContent='текст скопирован';}
 catch{status.textContent='можно выделить и скопировать текст ниже';}
});
