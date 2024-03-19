// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// creo bottone e base griglia
// creo dei box che verranno generati con il ciclo per creare nel concreto delle celle


// seleziono la griglia
    // seleziono il bottone che tramite click creerà le celle
        // dopo averlo selezionato e aver creato la funzione, gli inserisco un ciclo che genera tutte 100 celle
            // creo la variabile che identifica lo span 
                // quindi creerò degli span con la classe rispettiva ed il valore valore I progressivo del ciclo al suo interno
                    // e butterò tutto all'interno del div con l'id della griglia
                        // ovvero il valore I 


// devo creare un array di 16 numeri casuali
    // creo variabile array vuota
        // se devo selezionare 16 numeri la metterò dentro il ciclo per far sì che funzioni
            // creo variabile con la funzione matematica random dove seleziono i numeri
                // e tramite una funzione randomica gli attribuisco 16 di quei numeri dentro l'array col valore i
                    // quindi li pusherò dentro l'array
// i numeri casuali sono del ciclo for che definisce la griglia
// quindi devo selezionare 16 numeri casuali della griglia

// e buttarli dentro l'array
// da lì gli metto la condizione e tutto il resto





let grid =  document.querySelector('#msBox');

let btn = document.querySelector('#genBtn');
btn.addEventListener('click', function() {
    grid.innerHTML = '';

    let difficult = document.querySelector('#selDif');
    console.log(difficult);
    
    let valoreSel = difficult.value;
    
    let vs1 = document.querySelector('#sele1');
    let vs2 = document.querySelector('#sele2');
    let vs3 = document.querySelector('#sele3');
    
    const numeriCasuali = [];

    for (let i = 0; i < 16; i++) {
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;
        if (!numeriCasuali.includes(numeroCasuale) ) {
            numeriCasuali.push(numeroCasuale);
        }
    }
    console.log(numeriCasuali);
    
    
    if (valoreSel === vs1.value) {
        for (let i = 1; i < 101; i++) {
            let contentSpan = document.createElement('span');
            contentSpan.classList.add('inside-box')
            contentSpan.innerHTML = i;
            grid.append(contentSpan);

// converto il valore del content span in un intero dentro una nuova variabile
// dopdichè verifico se l'array include il valore numerico della nuova variabile
// e da lì completo le condizioni


            contentSpan.addEventListener('click', function() {
                let numeroCliccato = parseInt(contentSpan.innerHTML);
                if (numeriCasuali.includes(numeroCliccato)) {
                    alert ('Hai perso')
                    contentSpan.classList.add('bg-danger');
                } else {
                    contentSpan.classList.add('bg-info');
                }
            });
        }
    } else if (valoreSel === vs2.value) {
        for (let i = 1; i < 82; i++) {
            let contentSpan = document.createElement('span');
            console.log(contentSpan);
            contentSpan.classList.add('inside-box')
            contentSpan.style.width = 'calc(100% / 9)';
            contentSpan.style.height = 'calc(100% / 9)';
            contentSpan.innerHTML = i;
            grid.append(contentSpan);
            contentSpan.addEventListener('click', function () {
                contentSpan.classList.add('bg-info');
            })
        }
    } else {
        for (let i = 1; i < 50; i++) {
            let contentSpan = document.createElement('span');
            console.log(contentSpan);
            contentSpan.classList.add('inside-box')
            contentSpan.style.width = 'calc(100% / 7)';
            contentSpan.style.height = 'calc(100% / 7)';
            contentSpan.innerHTML = i;
            grid.append(contentSpan);
            contentSpan.addEventListener('click', function () {
                contentSpan.classList.add('bg-info');
            })
        }
    }

})

