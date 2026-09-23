document.querySelector('[data-copy-lyrics]')?.addEventListener('click',async()=>{
 const text=[...document.querySelectorAll('.lyric-stanza')].map(p=>[...p.childNodes].map(n=>n.nodeName==='BR'?'\n':n.textContent).join('')).join('\n\n');
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText(text);status.textContent=document.documentElement.lang==='en'?'Lyrics copied':'текст скопирован';}
 catch{status.textContent=document.documentElement.lang==='en'?'You can select and copy the lyrics below':'можно выделить и скопировать текст ниже';}
});
