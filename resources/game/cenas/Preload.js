export class Preload extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
        // Fazer o preload de todos os assets aqui

        // Efeitos sonoros
        this.load.audio('click', 'resources/game/sounds/click.mp3');
        this.load.audio('acerto', 'resources/game/sounds/acerto.mp3');
        this.load.audio('erro', 'resources/game/sounds/erro.mp3');
        
        // Música de fundo
        this.load.audio('musica', 'resources/game/narracoes/musica.mp3');

        // Narrações
        this.load.audio('N053', 'resources/game/narracoes/N053.wav');
        this.load.audio('NA000', 'resources/game/narracoes/NA000.wav');
        this.load.audio('NA001', 'resources/game/narracoes/NA001.wav');
        this.load.audio('NA0013', 'resources/game/narracoes/NA0013.wav');
        this.load.audio('NA002', 'resources/game/narracoes/NA002.wav');
        this.load.audio('NA003', 'resources/game/narracoes/NA003.wav');
        this.load.audio('NA0032', 'resources/game/narracoes/NA0032.wav');
        this.load.audio('NA004', 'resources/game/narracoes/NA004.wav');
        this.load.audio('NA005', 'resources/game/narracoes/NA005.wav');
        this.load.audio('NA006', 'resources/game/narracoes/NA006.wav');
        this.load.audio('NA007', 'resources/game/narracoes/NA007.wav');
        this.load.audio('NA008', 'resources/game/narracoes/NA008.wav');
        this.load.audio('NA010', 'resources/game/narracoes/NA010.wav');
        this.load.audio('NA011', 'resources/game/narracoes/NA011.wav');
        this.load.audio('NA012', 'resources/game/narracoes/NA012.wav');
        this.load.audio('NA015', 'resources/game/narracoes/NA015.wav');
        this.load.audio('NA016', 'resources/game/narracoes/NA016.wav');
        this.load.audio('NA019', 'resources/game/narracoes/NA019.wav');
        this.load.audio('NA020', 'resources/game/narracoes/NA020.wav');
        this.load.audio('NA021', 'resources/game/narracoes/NA021.wav');
        this.load.audio('NA023', 'resources/game/narracoes/NA023.wav');
        this.load.audio('NA024', 'resources/game/narracoes/NA024.wav');
        this.load.audio('NA025', 'resources/game/narracoes/NA025.wav');
        this.load.audio('NA026', 'resources/game/narracoes/NA026.wav');
        this.load.audio('NA028', 'resources/game/narracoes/NA028.wav');
        this.load.audio('NA029', 'resources/game/narracoes/NA029.wav');
        this.load.audio('NA030', 'resources/game/narracoes/NA030.wav');
        this.load.audio('NA032', 'resources/game/narracoes/NA032.wav');
        this.load.audio('NA033', 'resources/game/narracoes/NA033.wav');
        this.load.audio('NA034', 'resources/game/narracoes/NA034.wav');
        this.load.audio('NA035', 'resources/game/narracoes/NA035.wav');
        this.load.audio('NA038', 'resources/game/narracoes/NA038.wav');
        this.load.audio('NA039', 'resources/game/narracoes/NA039.wav');
        this.load.audio('NA045', 'resources/game/narracoes/NA045.wav');
        this.load.audio('NA048', 'resources/game/narracoes/NA048.wav');
        this.load.audio('NA049', 'resources/game/narracoes/NA049.wav');
        this.load.audio('NA050', 'resources/game/narracoes/NA050.wav');
        this.load.audio('NA054', 'resources/game/narracoes/NA054.wav');
        this.load.audio('NA058', 'resources/game/narracoes/NA058.wav');
        this.load.audio('NA059', 'resources/game/narracoes/NA059.wav');
        this.load.audio('NA060', 'resources/game/narracoes/NA060.wav');
        this.load.audio('NA062', 'resources/game/narracoes/NA062.wav');
        this.load.audio('NA063', 'resources/game/narracoes/NA063.wav');
        this.load.audio('NA064', 'resources/game/narracoes/NA064.wav');
        this.load.audio('NA065', 'resources/game/narracoes/NA065.wav');
        this.load.audio('NA068', 'resources/game/narracoes/NA068.wav');
        this.load.audio('NA069', 'resources/game/narracoes/NA069.wav');
        this.load.audio('NA070', 'resources/game/narracoes/NA070.wav'); 
        this.load.audio('NA053', 'resources/game/narracoes/NA053.mp3');
        this.load.audio('NA042', 'resources/game/narracoes/NA042.mp3');
        this.load.audio('NA040', 'resources/game/narracoes/NA040.mp3');
        this.load.audio('NA014', 'resources/game/narracoes/NA014.mp3');

        //imagens para o componente "dialogo"
        this.load.image('boxDialogo', 'resources/images/dialogos/bgdialogo.png');
        this.load.image('btAvancar', 'resources/images/dialogos/btAvancar.png');
        this.load.image('btVolta', 'resources/images/dialogos/btVoltar.png');
        this.load.image('caixadialogo', 'resources/images/dialogos/caixadialogo.png');
        this.load.image('personagem1', 'resources/images/dialogos/personagem1.png');
        this.load.image('personagem2', 'resources/images/dialogos/personagem2.png');
        this.load.image('btComecar', 'resources/images/dialogos/btComecar.png');


        this.load.image('bgCapa', 'resources/images/hud/bgCapa.png');
        this.load.image('titulo', 'resources/images/hud/titulo.png');
        this.load.image('bgintro', 'resources/images/hud/bgintro.png');

        // Imagens do jogo
        this.load.image('bgjogo', 'resources/images/jogo/bgjogo.png');
        this.load.image('bo', 'resources/images/jogo/bo.png');
        this.load.image('boco', 'resources/images/jogo/boco.png');
        this.load.image('bola', 'resources/images/jogo/bola.png');
        this.load.image('bolag', 'resources/images/jogo/bolag.png');
        this.load.image('bolahighlight', 'resources/images/jogo/bolahighlight.png');
        this.load.image('bona', 'resources/images/jogo/bona.png');
        this.load.image('btnarrar', 'resources/images/jogo/btnarrar.png');
        this.load.image('btnarrarinativo', 'resources/images/jogo/btnarrarinativo.png');
        this.load.image('budo', 'resources/images/jogo/budo.png');
        this.load.image('caixas', 'resources/images/jogo/caixas.png');
        this.load.image('dado', 'resources/images/jogo/dado.png');
        this.load.image('dadog', 'resources/images/jogo/dadog.png');
        this.load.image('dadohighlight', 'resources/images/jogo/dadohighlight.png');
        this.load.image('do', 'resources/images/jogo/do.png');
        this.load.image('feedbackacerto1', 'resources/images/jogo/feedbackacerto1.png');
        this.load.image('feedbackacerto2', 'resources/images/jogo/feedbackacerto2.png');
        this.load.image('feedbackerro1', 'resources/images/jogo/feedbackerro1.png');
        this.load.image('feedbackerro2', 'resources/images/jogo/feedbackerro2.png');
        this.load.image('highlight', 'resources/images/jogo/highlight.png');
        this.load.image('highlighta', 'resources/images/jogo/highlighta.png');
        this.load.image('lupa', 'resources/images/jogo/lupa.png');
        this.load.image('mido', 'resources/images/jogo/mido.png');
        this.load.image('toptext1', 'resources/images/jogo/toptext1.png');
        this.load.image('tutorial', 'resources/images/jogo/tutorial.png');
        this.load.image('btvoltar2', 'resources/images/jogo/btvoltar2.png');
        this.load.image('luzvermelha', 'resources/images/jogo/luzvermelha.png');
        this.load.image('luzverde', 'resources/images/jogo/luzverde.png');
        this.load.image('btavancar2', 'resources/images/jogo/btavancar2.png');
        this.load.image('btfala', 'resources/images/jogo/btfala.png');
        this.load.image('ao', 'resources/images/jogo/ao.png');
        this.load.image('caao', 'resources/images/jogo/caao.png');
        this.load.image('feedbackacerto3', 'resources/images/jogo/feedbackacerto3.png');
        this.load.image('feedbackerro3', 'resources/images/jogo/feedbackerro3.png');
        this.load.image('goao', 'resources/images/jogo/goao.png');
        this.load.image('piao', 'resources/images/jogo/piao.png');
        this.load.image('piaog', 'resources/images/jogo/piaog.png');
        this.load.image('piaohighlight', 'resources/images/jogo/piaohighlight.png');
        this.load.image('jogohighlight', 'resources/images/jogo/jogohighlight.png');
        this.load.image('feedbackacerto4', 'resources/images/jogo/feedbackacerto4.png');
        this.load.image('feedbackerro4', 'resources/images/jogo/feedbackerro4.png');
        this.load.image('jo', 'resources/images/jogo/jo.png');
        this.load.image('jogo', 'resources/images/jogo/jogo.png');
        this.load.image('jogog', 'resources/images/jogo/jogog.png');
        this.load.image('jome', 'resources/images/jogo/jome.png');
        this.load.image('jotu', 'resources/images/jogo/jotu.png');
        this.load.image('bone', 'resources/images/jogo/bone.png');
        this.load.image('boneca', 'resources/images/jogo/boneca.png');
        this.load.image('bonecag', 'resources/images/jogo/bonecag.png');
        this.load.image('bonecahighlight', 'resources/images/jogo/bonecahighlight.png');
        this.load.image('boneci', 'resources/images/jogo/boneci.png');
        this.load.image('bonetu', 'resources/images/jogo/bonetu.png');
        this.load.image('feedbackacerto5', 'resources/images/jogo/feedbackacerto5.png');
        this.load.image('feedbackerro5', 'resources/images/jogo/feedbackerro5.png');
        this.load.image('feedbackacerto6', 'resources/images/jogo/feedbackacerto6.png');
        this.load.image('feedbackerro6', 'resources/images/jogo/feedbackerro6.png');
        this.load.image('gupa', 'resources/images/jogo/gupa.png');
        this.load.image('nepa', 'resources/images/jogo/nepa.png');
        this.load.image('pa', 'resources/images/jogo/pa.png');
        this.load.image('pipa', 'resources/images/jogo/pipa.png');
        this.load.image('pipag', 'resources/images/jogo/pipag.png');
        this.load.image('pipahighlight', 'resources/images/jogo/pipahighlight.png');
        this.load.image('feedbackacerto7', 'resources/images/jogo/feedbackacerto7.png');
        this.load.image('feedbackerro7', 'resources/images/jogo/feedbackerro7.png');
        this.load.image('pato', 'resources/images/jogo/pato.png');
        this.load.image('patog', 'resources/images/jogo/patog.png');
        this.load.image('patohighlight', 'resources/images/jogo/patohighlight.png');
        this.load.image('pa1', 'resources/images/jogo/pa1.png');
        this.load.image('pace', 'resources/images/jogo/pace.png');
        this.load.image('papu', 'resources/images/jogo/papu.png');
        this.load.image('erro', 'resources/images/jogo/erro.png');
        this.load.image('btinicio', 'resources/images/jogo/btinicio.png');
        this.load.image('modalfinal', 'resources/images/jogo/modalfinal.png');

        // Adicione um texto de carregamento
        const loadingText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Carregando...', {
            fontSize: '32px',
            color: '#ffffff',
        }).setOrigin(0.5, 0.5);
        
        // Atualize a barra de carregamento (opcional)
        this.load.on('progress', (value) => {
            loadingText.setText(`Carregando... ${Math.round(value * 100)}%`);
        });
        
    }

    create() {

        const gameData = this.cache.json.get('gameData');
        this.game.registry.set('gameData', gameData);

        // Colocar as fontes aqui para garantir que foram carregadas. Verificar em index.html se está fazendo o load no css.
        Promise.all([
            document.fonts.load('36px Nunito-ExtraBold'),
            document.fonts.load('40px Nunito'),
            document.fonts.load('32px Nunito-Bold'),
        ]).then(() => {
            this.scene.start('Capa');
        });

    }
}
