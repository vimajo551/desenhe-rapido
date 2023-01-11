

quickDrawDataset=["porta-avioes","aviao","despertador","ambulancia","anjo","migracao animal","formiga","bigorna","maca","braco","aspargos",
                        "machado","mochila","banana","bandagem","celeiro","beisebol","taco de beisebol","cesta","basquete","morcego","banheira","praia"," Urso",
                        "barba","cama","abelha","cinto","banco","bicicleta","binoculos","passaro","bolo de aniversario","amora","mirtilo","livro"," bumerangue",
                        "garrafa","gravata","pulseira","cerebro","pao","ponte","brocolis","vassoura","balde","escavadeira","onibus","arbusto","borboleta ",
                        "cactus","bolo","calculadora","calendario","camelo","camera","camuflagem","fogueira","vela","canhao","canoa","carro","cenoura ",
                        "castelo","gato","ventilador de teto","violoncelo","telefone celular","cadeira","lustre","igreja","circulo","clarinete","relogio","nuvem", "xicara de cafe",
                        "bussola","computador","cookie","cooler","sofa","vaca","caranguejo","crayon","crocodilo","coroa","navio de cruzeiro","copo"," diamante", "lava-loucas",
                        "prancha de mergulho", "cachorro", "golfinho", "rosquinha", "porta", "dragao", "comoda", "broca", "bateria", "pato", "haltere", "orelha", "cotovelo", "elefante",
                        "envelope", "borracha", "olho", "aculos", "rosto", "ventilador", "pena", "cerca"," dedo", "hidrante", "lareira", "bombeiro", "peixe",
                        "flamingo","lanterna","chinelos","luminaria","flor","disco voador","pe","garfo","sapo","frigideira","jardim","jardim Mangueira",
                        "girafa","cavanhaque","taco de golfe","uvas","grama","guitarra","hamburguer","martelo","mao","harpa","chapeu","fones de ouvido"," ourico","helicoptero",
                        "capacete","hexágono","disco de hoquei","taco de hoquei","cavalo","hospital","balao de ar quente","cachorro-quente","banheira de hidromassagem","ampulheta","casa",
                        "planta da casa","furacao","sorvete","jaqueta","cadeia","canguru","chave","teclado","joelho","faca","escada","lanterna", "computador portatil",
                        "folha","perna","lampada","isqueiro","farol","relampago","linha","leao","batom","lagosta","pirulito","caixa de correio"," mapa","marcador",
                        "fosforos", "megafone", "sereia", "microfone", "microondas", "macaco", "lua", "mosquito", "moto", "montanha", "rato", "bigode", "boca",
                        "caneca","cogumelo","unha","colar","nariz","oceano","octogono","polvo","cebola","forno","coruja","pincel","tinta lata","palmeira","panda",
                        "calcas","clipe de papel","para-quedas","papagaio","passaporte","amendoim","pera","ervilhas","lapis","pinguim","piano","picape", "moldura para fotos",
                        "porco","travesseiro","abacaxi","pizza","alicate","carro de policia","lago","piscina","picole","cartao postal","batata","tomada eletrica", "bolsa", "coelho",
                        "guaxinim","radio","chuva","arco-iris","ancinho","controle remoto","rinoceronte","rifle","rio","montanha russa","patins","veleiro",
                        "sanduiche","serra","saxofone","autocarro escolar","tesoura","escorpiao","chave de fenda","tartaruga marinha","serra","tubarao","ovelha","sapato" ,"calcao",
                        "pa","pia","skate","cranio","arranha-ceu","saco de dormir","carinha sorridente","caracol","cobra","snorkel","floco de neve","boneco de neve",
                        "bola de futebol","meia","lancha","aranha","colher","planilha","quadrado","rabisco","esquilo","escadas","estrela","bife"," estereo",
                        "estetoscopio","pontos","sinal de pare","fogao","morango","luz da rua","feijao","submarino","mala","sol","cisne","camisola",
                        "balanco","espada","seringa","mesa","bule","ursinho de pelucia","telefone","televisao","raquete de tenis","tenda","Torre Eiffel",
                        "A Grande Muralha da China","Mona Lisa","tigre","torradeira","dedo do pe","banheiro","dente","escova de dentes","pasta de dente","tornado","trator",
                        "semaforo","trem","arvore","triangulo","trombone","caminhao","trompete","camiseta","guarda-chuva","roupa intima","van","vaso"," violino",
                        "maquina de lavar","melancia","toboágua","baleia","roda","moinho","garrafa de vinho","copo de vinho","relogio de pulso","ioga","zebra","ziguezague"]


randomNumber = Math.floor(Math.random() * quickDrawDataset + 1);
console.log(randomNumber,quickDrawDataset)
Sketch = quickDrawDataset[randomNumber];
ename = Sketch

timerCounter = 0;//inicializa esta variável para 0. Esta variável continuará incrementando o valor do contador do timer.
timerCheck = 0;//adiciona uma string vazia dentro dela. Isso continuará verificando o valor do temporizador.
drawSketch = 0;//adiciona uma string vazia dentro dela. Isso mantém a estimativa aproximada para o esboço que você desenhou na tela.
answerHolder = 0;//adiciona uma string vazia dentro dela. Esta variável mantém o valor quando o esboço desenhado e o esboço a ser desenhado coincidem.
score = 0; //inicializa esta variável com 0. Esta variável mantém o valor da pontuação para cada esboço à direita desenhado.

function updateCanvas(){
    background("white");
    randomNumber = Math.floor(Math.random() * quickDrawDataset + 1);
    Sketch = quickDrawDataset[randomNumber];
    document.getElementById("ename").innerHTML = "Seu Esboço é um(a):" + Sketch
}

function preload(){

}

function setup(){
    canvas=createCanvas( 255, 255);
    canvas.center();
    background("white");
}

function draw(){

}


function clearCanvas(){
    background("white");
}