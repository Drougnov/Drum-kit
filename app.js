window.addEventListener('keydown',(e)=>{
    //play audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return;           //audio won't play if a key is invalid;
    audio.play();
    audio.currentTime = 0;       //this will reset audio
    key.classList.add('playing');
})

const keys = document.querySelectorAll('.key');

keys.forEach(button=>{
    //play audio when button clicked
    button.addEventListener('click',function(){
        button.classList.add('playing')
        const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`) //<====this will grab keycode of clicked element
        audio.play();
        audio.currentTime = 0;
    })
    //remove transition
    button.firstChild.addEventListener('transitionend',(e)=>{      //function will be called when 'kbd' element's transition ends
        button.classList.remove('playing');
    })
})
