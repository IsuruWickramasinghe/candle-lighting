

// candle light class add and counter for thanks card
let candleCount = 0;
function candleFlame(flame){
    document.getElementById(flame).classList.remove('hide');
    candleCount++

    // display thanks card
    setTimeout(function(){
        if(candleCount==8){
            candleCount++
            // flame event call
            let card = document.querySelector(".thanks-card-container");
            card.classList.add('thanks-card-animation');
            // display thanks card texts
            thanksCardText();
        };
    },5000);
}

// event listners form candles
function flameEvents(){
    document.querySelector("[candle01]").addEventListener('click',()=>{
        candleFlame("flame01");
    });
    document.querySelector("[candle02]").addEventListener('click',()=>{
        candleFlame("flame02");
    });
    document.querySelector("[candle03]").addEventListener('click',()=>{
        candleFlame("flame03");
    });
    document.querySelector("[candle04]").addEventListener('click',()=>{
        candleFlame("flame04");
    });
    document.querySelector("[candle05]").addEventListener('click',()=>{
        candleFlame("flame05");
    });
    document.querySelector("[candle06]").addEventListener('click',()=>{
        candleFlame("flame06");
    });
    document.querySelector("[candle07]").addEventListener('click',()=>{
        candleFlame("flame07");
    });
    document.querySelector("[candle08]").addEventListener('click',()=>{
        candleFlame("flame08");
    });
};
flameEvents();

// thanks card text event
let textCount = 1;
function thanksCardText(){
    // counter with delay
    setTimeout(function() {
        switch(textCount){
            case 1:
                document.querySelector(".thanks").classList.add('thanks-card-text-animation');
                break
            case 6:
                document.querySelector(".invite").classList.add('thanks-card-text-animation');
                break
            case 15:
                document.querySelector(".thanks-card-container").classList.add('hide');
                break
            default:
        };
        // counter
        textCount++;
        if (textCount < 16) {
            thanksCardText();
        };
        // time
    }, 1000);
};

// letter animation
let leterCount = 1;
function leterScaler() {
    // counter with delay
    setTimeout(function() {
        // console.log(leterCount)
        // chech letter by letter and add class
        switch(leterCount){
            case 1:
                document.querySelector(".C-1").classList.add('letter-scaler');
                break
            case 2:
                document.querySelector(".O").classList.add('letter-scaler');
                break
            case 3:
                document.querySelector(".N-1").classList.add('letter-scaler');
                break
            case 4:
                document.querySelector(".N-2").classList.add('letter-scaler');
                break
            case 5:
                document.querySelector(".E").classList.add('letter-scaler');
                break
            case 6:
                document.querySelector(".C-2").classList.add('letter-scaler');
                break
            case 7:
                document.querySelector(".T").classList.add('letter-scaler');
                break
            case 8:
                document.querySelector(".two-1").classList.add('letter-scaler');
                break
            case 9:
                document.querySelector(".zero").classList.add('letter-scaler');
                break
            case 10:
                document.querySelector(".two-2").classList.add('letter-scaler');
                break
            case 11:
                document.querySelector(".two-3").classList.add('letter-scaler');
                break
            default:
        };
        // counter
        leterCount++;
        if (leterCount < 12) {
            leterScaler();
        };
        // time
    }, 500);
};
leterScaler(); 











    