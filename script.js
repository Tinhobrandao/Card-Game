    class jogador {
        constructor(nome, cartas, vida, efeito) {
            this.nome = nome;
            this.cartas = cartas;
            this.vida = vida;
            this.efeito = efeito;
        }
         
        Água() {
            if(this.efeito === "Eletrocutar") { 
                this.vida -= 3;
            } else {
            this.vida -= 1;
            }
            this.efeito = "Molhar";
            alterarVida();
        }
        Fogo() {
            this.vida -= 1;
            this.efeito = "Queimar";
            alterarVida();

        }
        Ar() {
            //skip 1 turn

            
        }
        Terra() {
            if(this.efeito === "Congelar" || this.efeito === "lançarAoAr"){
                this.vida -= 3;
            } else {
            this.vida -= 1;
            }
            alterarVida();

        }
        Eletricidade() {
            if(this.efeito === "Congelar" || this.efeito === "Molhar") {
            this.vida -= 3;
            } else {
                this.vida -= 1;
            }
            this.efeito = "Eletrocutar";
            alterarVida();

        }
        Escuridão() {
            this.vida -= 1;
            this.efeito = "Envenenar";
            alterarVida();

        }
        Celestial() {
            this.vida += 1;
            this.efeito = "Abençoado";
            alterarVida();

        }
        Gelo() {
            this.vida -= 1;
            this.efeito = "Congelar";
            alterarVida();

            
        }
        // imitarEfeito(cartaRoubada) {
        //     this.efeito = cartaRoubada.efeito;
        // }
        // roubarCarta() {
        //     this.vida -= 1;
        // }
    }




    const jogador1 = new jogador("Jogador 1", shuffleDeck(), 20, null);
    const computador1 = new jogador("Computador 1", shuffleDeck(), 20, null);

    const cartasNaMao = document.getElementsByClassName ("cartasJogador");

    let currentPlayer = jogador1;

    // function playTurn() {
    //     // código para jogar a carta escolhida pelo jogador atual
    //     makePlayerMove(cartaClicada);

    //     // verificar se algum jogador perdeu
    //     if (jogador1.vida <= 0 || computador1.vida <= 0) {
    //         // mostrar mensagem de vitória/derrota
    //         return;
    //     }

    //     // alternar jogador atual
    //     currentPlayer = (currentPlayer === jogador1) ? computador1 : jogador1;
    // }



    for (let i = 0; i < cartasNaMao.length; i++) {
        cartasNaMao[i].addEventListener("click", function() {
    console.log(this.querySelector("p").innerText);
    confirmarCarta(this.querySelector("p").innerText);
    createButton();
    });
    }

    function confirmarCarta(cartaClicada) {
        const espaçoDaCartaNaMesaJogador = document.getElementById("cartasNaMesaJogador");
        const imgCartaJogada = espaçoDaCartaNaMesaJogador.querySelector("img");
        const nomeEefeitoCartaJogada = espaçoDaCartaNaMesaJogador.querySelectorAll("p");

        for (const carta in cards) {
            if (cartaClicada === cards[carta].name) {
                imgCartaJogada.src = cards[carta].image;
                nomeEefeitoCartaJogada[0].innerText = cards[carta].name;
                nomeEefeitoCartaJogada[1].innerText = cards[carta].effectName;
                createButton(cartaClicada)
                break;
            }
        }
    }

    function shuffleDeck() {
        let deck = [];
        const cardKeys = Object.keys(cards);
        for (let i = 0; i < 5; i++) {
            let j = Math.floor(Math.random() * cardKeys.length);
            deck.push(cards[cardKeys[j]]);
            cardKeys.splice(j, 1);
        }
        return deck;
    }

    function createButton (cartaClicada) {
        if (document.getElementById("confirmarCarta")) {
            return;
        }
        const button = document.createElement("button");
        const gameScreen = document.querySelectorAll("div");
        gameScreen[10].appendChild(button);
        button.id = "confirmarCarta";
        button.innerText = "Confirmar";
        button.addEventListener("click", function() {
            makePlayerMove(cartaClicada);
            button.remove();
        });
    }

    function makePlayerMove(cartaClicada) {
        for (const carta in cards) {
            if (cartaClicada === cards[carta].name) {
                if(currentPlayer === jogador1) {
                    if(cartaClicada === "Celestial") {
                        jogador1.vida += 1;
                        alterarVida();
                        console.log(jogador1)
                    } else {
                    computador1[cartaClicada]();
                    cartaClicada = null;
                    console.log(computador1);
                    }
                    
                } else if (currentPlayer === computador1) {
                    cartaClicada = null;
                    jogador1[cartaClicada]();
                }
            }
                        if (jogador1.vida <= 0 || computador1.vida <= 0) {
                console.log("Fim de jogo")
                return;
            }


        }
    }
    

    function showPlayerCards() {
        
        for (let i = 0; i < jogador1.cartas.length; i++) {
            const card = jogador1.cartas[i];
            const properties = cardProperties[i];
            document.getElementById(properties.name).innerText = card.name;
            document.getElementById(properties.effect).innerText = `Efeito: ${card.effectName}`;
            document.getElementById(properties.image).src = card.image;
        }
    }

    function alterarVida() {
        const vidaJogador = document.getElementById("vidaJogador");
        const vidaComputador = document.getElementById("vidaComputador");
        vidaJogador.innerText = `Jogador:${jogador1.vida}`;
        vidaComputador.innerText = `Computador:${computador1.vida}`;
    }

    showPlayerCards();
    alterarVida();
