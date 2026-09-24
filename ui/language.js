// A language link changes the page, while keeping an explicitly selected section.
for(const link of document.querySelectorAll('[data-language-link]')){
 link.addEventListener('click',()=>{const target=new URL(link.href);target.hash=location.hash;link.href=target.href;});
}
// Choose a language in the game menus without covering lives or leaving a run accidentally.
const gameLanguage=document.querySelector('.game-language');
const gameTitle=document.getElementById('titleScreen'),gameResult=document.getElementById('resultScreen');
if(gameLanguage&&gameTitle&&gameResult){
 const update=()=>{gameLanguage.hidden=gameTitle.classList.contains('hidden')&&gameResult.classList.contains('hidden');};
 const observer=new MutationObserver(update);
 observer.observe(gameTitle,{attributes:true,attributeFilter:['class']});
 observer.observe(gameResult,{attributes:true,attributeFilter:['class']});
 update();
}
