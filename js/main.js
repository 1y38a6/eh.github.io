var cellsCount = 0;
var width = $(window).width();
var size = Math.round(width/7);
var clicks = 0;

var m_del = 75;
    
var height = $(window).height();
    
var cellsMax = Math.round(height/size);

$(function(){
    for(var a = 0; a<=cellsMax; a++){
        var div = "<div id='div" + a + "' class='d-flex'>";
        $('body').append(div);
        for(var b = 0; b<7; b++){
            var cell = "<p onclick='clickAction(" + cellsCount + ")' id='cell" + cellsCount +"' class='gridbox'></p>"
            $('#div' + a).append(cell);
            $('#cell' + cellsCount).css("width", size);
            $('#cell' + cellsCount).css("height", size);
            cellsCount++;
        }
    }
});

function clickAction(number){

    hightLight(number);

    clicks++;

    if(clicks == 1){
        lastClick();
    }
}

function setTO(number){
    setTimeout(function(){
        $('#cell' + number).removeClass("semihighlight");
    }, m_del*4);
}

function lastClick(){
    
    for(var a = 0; a<cellsMax; a++){
        clearAtLine(a);
    }

    setTimeout(function(){
        paintHeart();
    }, 1000);
}

function clearAtLine(a){
    setTimeout(function(){
        for(var b = 0; b<7; b++){
            $('#cell' + (b+a*7)).removeClass("semihighlight");
            $('#cell' + (b+a*7)).removeClass("highlight");
        }
    }, m_del*a);
}

function paintHeart(){
    console.log("paint");
    
    setTimeout(function(){
        hightLight(15);
        hightLight(16);
        hightLight(18);
        hightLight(19);
    }, m_del);

    setTimeout(function(){
        hightLight(21);
        hightLight(22);
        hightLight(23);
        hightLight(24);
        hightLight(25);
        hightLight(26);
        hightLight(27);
    }, m_del*10);

    setTimeout(function(){
        hightLight(28);
        hightLight(29);
        hightLight(30);
        hightLight(31);
        hightLight(32);
        hightLight(33);
        hightLight(34);
    }, m_del*20);

    setTimeout(function(){
        hightLight(36);
        hightLight(37);
        hightLight(38);
        hightLight(39);
        hightLight(40);
    }, m_del*30);

    setTimeout(function(){
        hightLight(44);
        hightLight(45);
        hightLight(46);
    }, m_del*40);

    setTimeout(function(){
        hightLight(52);
    }, m_del*50);

    setTimeout(function(){
        setInterval(function(){
            hightLight(15);
            hightLight(16);
            hightLight(18);
            hightLight(19);
            hightLight(21);
            hightLight(22);
            hightLight(23);
            hightLight(24);
            hightLight(25);
            hightLight(26);
            hightLight(27);
            hightLight(28);
            hightLight(29);
            hightLight(30);
            hightLight(31);
            hightLight(32);
            hightLight(33);
            hightLight(34);
            hightLight(36);
            hightLight(37);
            hightLight(38);
            hightLight(39);
            hightLight(40);
            hightLight(44);
            hightLight(45);
            hightLight(46);
            hightLight(52);
        }, m_del*20);
    }, m_del*50);
}

function semihighlightAround(number){
    if(number > 7){
        setTimeout(function(){
            $('#cell' + (number-7)).addClass("semihighlight");
            setTO(number-7);
        }, m_del);
    }

    if(number > 14){
        setTimeout(function(){
            $('#cell' + (number-14)).addClass("semihighlight");
            setTO(number-14);
        }, m_del*2);
    }
    
    if(number < cellsMax*7){
        setTimeout(function(){
            $('#cell' + (number+7)).addClass("semihighlight");
            setTO(number+7);
        }, m_del);
    }

    if(number < cellsMax*7 + 7){
        setTimeout(function(){
            $('#cell' + (number+14)).addClass("semihighlight");
            setTO(number+14);
        }, m_del*2);
    }

    if(Math.floor(number/7) == Math.floor((number+1)/7)){
        setTimeout(function(){
            $('#cell' + (number+1)).addClass("semihighlight");
            setTO(number+1);
        }, m_del);
    }

    if(Math.floor(number/7) == Math.floor((number+2)/7)){
        setTimeout(function(){
            $('#cell' + (number+2)).addClass("semihighlight");
            setTO(number+2);
        }, m_del*2);
    }

    if(Math.floor(number/7) == Math.floor((number-1)/7)){
        setTimeout(function(){
            $('#cell' + (number-1)).addClass("semihighlight");
            setTO(number-1);
        }, m_del);
    }

    if(Math.floor(number/7) == Math.floor((number-2)/7)){
        setTimeout(function(){
            $('#cell' + (number-2)).addClass("semihighlight");
            setTO(number-2);
        }, m_del*2);
    }
}

function hightLight(number){
    $('#cell' + number).addClass("highlight");
    semihighlightAround(number);
}