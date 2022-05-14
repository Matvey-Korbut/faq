const game = {
    height: 198 * .61834,
    width: 320 * .61834,
    matrix: 6,
    cards: [],
    firstCard: null,
    getCardById: (cards, cardId) => {
        let card = null;
        cards.map(c => {
            if (c.id === cardId){
                card = c;
            }
        });
        return card;
    },
    setIsShowCards:(cards, arrayCardId) => {
        cards.map( c => {
            for (let i = 0; i < arrayCardId.length; i++) {
                const cardId = arrayCardId[i];
                if (c.id === cardId){
                    c.iShow = true;
                }
                
            }
        });
        
        return cards;
    }
}

game.cards = generateCards(game.matrix);

function generateCards(matrix) {
    const colors = [];
    const countColors = (matrix * matrix) / 2;

    for (let i = 0; i < countColors; i++) {
            const color = randomColorRGB();
            colors.push(color);
            colors.push(color);
        }

  

    const cards = [];
    for (let i = 0; i < colors.length; i++) {
        const card = {
            id: i,
            color: colors[i],
            iShow: false
        }
        
        cards.push(card);
        
    }

    for (let i = 0; i < 64; i++) {
        cards.sort(() => Math.random() - 0,5);

    }
    return cards;
    
    return sortArray([...cards, ...cards]);

    }

    function sortArray(array){
        for (let i = 0; i < 64; i++) {
            array.sort(() => Math.random() - 0,5); 
        
        }
    
        return array;   
    }




function randomColorRGB(){
    return 'rgb('+ randomNumber(0, 255) +', '+ randomNumber(0,255)+', '+ randomNumber(0,255) +' )';
}

function randomNumber(min, max){
    return Math.floor(min + Math.random()*(max + 1 - min)); 
}

$(document).ready(function () {

    $("#root").html("<div class='matrix'></div>");
    $(".matrix").width((game.width + 24) * game.matrix).height((game.height + 24) * game.matrix);

    for (let i = 0; i < game.cards.length; i++) {
        $(".matrix").append("<div id='cube_" + i + "'class ='cube'> </div>");
        
        $("#cube_" + i).css({
        "width":game.width,
        "height":game.height,
        "background-color" : '#1A1A1A'
    });
}


    for (let i = 0; i < game.cards.length; i++) {
        const e = game.cards[i];
        $("#cube_" + i).click(function () {
            const id = $("#cube_" + i).attr('id');


            $("#cube_" + i).css({
                "background-color": e.color
            });
            console.log(Number(id.replace('cube_', '')));


            const card = game.getCardById(
                game.cards,
                Number(id.replace('cube_', '')) 
                

            );

            console.log(card);

            if (!game.firstCard){
                game.firstCard = card;

            }
            else if(!!game.firstCard) {
                if(game.firstCard.color === card.color){
                    
                    game.cards = game.setIsShowCards(
                        game.cards,
                        [game.firstCard.id, card.id]
                        );
                    game.firstCard = null; 
                    
                }
                else {
                    setTimeout(() => {
                    hideCard(game.firstCard.id);
                    hideCard(card.id);
                    game.firstCard = null;
                    }, 100);

                }
            }
        });
    }





    function hideCard(cardId) {
        $("#cube_" + cardId).css({
            "background-color": "#1A1A1A"
        });
    }
});