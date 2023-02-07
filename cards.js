const effects = {
    molhar: {
      name: "Molhar",
      description: "Oponente fica molhado!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    queimar: {
      name: "Queimar",
      description: "Oponente fica queimado!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    lançarAoAr: {
      name: "Lançar ao Ar",
      description: "Oponente é lançado ao ar!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    danoDireto: {
      name: "Dano Direto",
      description: "Oponente recebe dano direto!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    choque: {
      name: "Choque",
      description: "Oponente recebe choque!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    envenenar: {
      name: "Envenenar",
      description: "Oponente fica envenenado!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    cura: {
      name: "Cura",
      description: "Oponente é curado!",
      efeito: function (opponent) {
        opponent.life += 1;
      }
    },
    congelar: {
      name: "Congelar",
      description: "Oponente fica congelado!",
      efeito: function (opponent) {
        opponent.life -= 1;
      }
    },
    // imitarEfeito: {
    //   name: "Imitar Efeito",
    //   description: "Oponente imita o efeito!",
    //   efeito: function (opponent) {
    //     opponent.life -= 1;
    //   }
    // },
    // roubarCarta: {
    //   name: "Roubar Carta",
    //   description: "Oponente rouba uma carta!",
    //   efeito: function (opponent) {
    //     opponent.life -= 1;
    //   }
    // }
  };
                  

        const cards = {
            Água: {
                name: "Água",
                image: "./agua.jpg",
                effectName: "Molhar",
                effect: effects.molhar,
            },
            Fogo: {
                name: "Fogo",
                image: "./fogo.jpg",
                effectName: "Queimar",
                effect: effects.queimar,
            },
            Ar: {
                name: "Ar",
                image: "./vento.png",
                effectName: "Lançar ao Ar",
                effect: effects.lançarAoAr,
            },
            Terra: {
                name: "Terra",
                image: "./terra.jpg",
                effectName: "Dano Direto",
                effect: effects.danoDireto,
            },
            Eletricidade: {
                name: "Eletricidade",
                image: "./eletricidade.jpg",
                effectName: "Choque",
                effect: effects.choque,
            },
            Escuridão: {
                name: "Escuridão",
                image: "./escuridao.jpg",
                effectName: "Envenenar",
                effect: effects.envenenar,
            },
            Celestial: {
                name: "Celestial",
                image: "./celestial.jpg",
                effectName: "Cura",
                effect: effects.cura,
            },
            Gelo: {
                name: "Gelo",
                image: "./gelo.png",
                effectName: "Congelar",
                effect: effects.congelar,
            },
            // Coringa: {
            //     name: "Coringa",
            //     image: "./coringa.jpeg",
            //     effectName: "Imitar Efeito",
            //     effect: effects.imitarEfeito,
            // },
            // Vazio: {
            //     name: "Vazio",
            //     image: "./vazio.jpeg",
            //     effectName: "Roubar Carta",
            //     effect: effects.roubarCarta,
            // },

        }

        const cardProperties = [
          { name: "nome1Jogador", effect: "efeito1Jogador", image: "carta1JogadorImg" },
          { name: "nome2Jogador", effect: "efeito2Jogador", image: "carta2JogadorImg" },
          { name: "nome3Jogador", effect: "efeito3Jogador", image: "carta3JogadorImg" },
          { name: "nome4Jogador", effect: "efeito4Jogador", image: "carta4JogadorImg" },
          { name: "nome5Jogador", effect: "efeito5Jogador", image: "carta5JogadorImg" }
      ];
