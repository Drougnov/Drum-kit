window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return;           //audio won't play if a key is invalid;
    audio.play();
    audio.currentTime = 0;       //this will reset audio
    key.classList.add('playing');
})

const keys = document.querySelectorAll('.key');

keys.forEach(key=>{
    key.firstChild.addEventListener('transitionend',(e)=>{      //function will be called when 'kbd' element's transition ends
        key.classList.remove('playing');
    })
})