
var audio = new Audio('contagem_regressiva.mp3');
var audio2 = new Audio('lancamento_foguete.mp3');
var audio3 = new Audio('descendo_foguete.mp3');
data = new Date()
tempo_inicial = data.getTime()


function voar() {

    //vamos pegar o tempo inicial:



    document.onkeydown = Pega_Tecla;    
    x = 750
    y = 10
    TOPO = ""
    ESQUERDA = "" 
    temporizador = setTimeout(subir,16000)

    function subir()
    {   
        TOPO = y + "px"
        
        $("#foguete").animate({top:TOPO,},18000)
        temporizador = null
        temporizador = setInterval(Descer,1000)
    }
    function Descer()
    {
        
        y = y + 20
        if(y>700)
        {
            y = 700
        }
        ESQUERDA = x + "px"
        TOPO = y + "px"
        $("#foguete").animate({left:ESQUERDA,top:TOPO},1000) 
        
        
    }
        
        function Pega_Tecla(e) 
    {   	
        e = e || window.event;
        tecla = e.keyCode;
        console.log(tecla); // MOSTRA O CÓDIGO DA TECLA PRESSIONADA  

        data = new Date()
        tempo_final = data.getTime() //Tempo em milissegundos
        if(tempo_final - tempo_inicial > 1000)
        {
            tempo_inicial = tempo_final
            //Coloquem os dois IF aqui dentro...
            if(tecla==37)
                {
                    x = x - 20
            
                }    
            else
            if(tecla==39)
                {
                    x = x + 20
        
                }  
        }    
    }
    function playAudio() 
    {
        
        audio.play();
        console.log('deu certo')
        
    }
    setTimeout(playAudio, 500)
    function stopAudio()
    {
        
        audio.pause();
        console.log('deu certo')

    }
    setTimeout(stopAudio,14000)

    function playAudio2() 
    {
    
        audio2.play();
        console.log('deu certo novamente')
    }
    setTimeout(playAudio2, 14000)

    function playAudio3()
    {
        audio3.play();
        console.log('deu certo3')
    }
    setTimeout(playAudio3,34000)
    function stopAudio3()
    {
        audio3.pause();
        console.log('sla')
    }
    setTimeout(playAudio3,36000)

}