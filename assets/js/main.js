function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;
        console.log(el);

        if (el.classList.contains('zerar')) {
            console.log('Clicou em zerar');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if (el.classList.contains('iniciar')) {
            console.log('Clicou em iniciar');
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (el.classList.contains('pausar')) {
            console.log('Clicou em pausar');
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}
relogio();