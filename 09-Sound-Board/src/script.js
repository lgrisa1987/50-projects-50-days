const audioElements = [].slice.call(document.querySelectorAll('audio'));
const sounds = audioElements
    .map(el => el.id)
    .forEach((sound, index) => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.textContent = sound;
        document.getElementById('buttons').appendChild(btn);
        btn.addEventListener('click', () => {
            audioElements.forEach(sound => {
                sound.pause();
                sound.currentTime = 0
            });
            audioElements[index].play();
        });
    });