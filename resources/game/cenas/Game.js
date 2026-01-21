import { BaseCena } from '../../js/library/base/BaseCena.js';
import { Dialogo } from '../../js/library/components/Dialogo.js';
import SoundManager from '../../js/library/managers/SoundManager.js';

const FASES_CONFIG = [
    // ... (sem alteração, igual original)
    {
        nome: 'fase1',
        correta: 1, // índice da sílaba correta ('LA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'bolag', x: 241.15, y: 167.62 },
            bo: { key: 'bo', x: 1027, y: 796, audio: 'NA004' },
            silabas: [
                { texto: 'NA', x: 105, y: 725, revelada: false, audio: 'NA005' },
                { texto: 'LA', x: 284, y: 725, revelada: false, audio: 'NA006' },
                { texto: 'CO', x: 455, y: 725, revelada: false, audio: 'NA007' },
            ],
            dropResultados: [
                { key: 'bona' },
                { key: 'bola' },
                { key: 'boco' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro1',
            acertoImg: 'feedbackacerto1',
            erroAudio: 'NA010',
            acertoAudio: 'NA000',
            audioPalavra: 'NA012',
            // Adicione a imagem de destaque do modal de erro da fase 1:
            modalHighlightImg: { key: 'bolahighlight', x: 170, y: 117 }
        }
    },
    {
        nome: 'fase2',
        correta: 2, // índice da sílaba correta ('DA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'dadog', x: 241.15, y: 167.62 },
            bo: { key: 'do', x: 1027, y: 796, audio: 'NA0013' },
            silabas: [
                { texto: 'BU', x: 105, y: 725, revelada: false, audio: 'NA014' },
                { texto: 'MI', x: 284, y: 725, revelada: false, audio: 'NA015' },
                { texto: 'DA', x: 455, y: 725, revelada: false, audio: 'NA016' },
            ],
            dropResultados: [
                { key: 'budo' },
                { key: 'mido' },
                { key: 'dado' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro2',
            acertoImg: 'feedbackacerto2',
            erroAudio: 'NA019',
            acertoAudio: 'NA000',
            audioPalavra: 'NA021',
            // Segunda fase: exemplo de highlight diferente (troque por imagem real caso deseje)
            modalHighlightImg: { key: 'dadohighlight', x: 180, y: 120 }
        }
    },
    {
        nome: 'fase3',
        correta: 2, // índice da sílaba correta ('DA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'piaog', x: 266, y: 167.62 },
            bo: { key: 'ao', x: 1027, y: 796 , audio: 'NA023'},
            silabas: [
                { texto: 'GO', x: 105, y: 725, revelada: false, audio: 'NA024' },
                { texto: 'CA', x: 284, y: 725, revelada: false, audio: 'NA025' },
                { texto: 'PI', x: 455, y: 725, revelada: false, audio: 'NA026' },
            ],
            dropResultados: [
                { key: 'goao' },
                { key: 'caao' },
                { key: 'piao' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro3',
            acertoImg: 'feedbackacerto3',
            erroAudio: 'NA028',
            acertoAudio: 'NA000',
            audioPalavra: 'NA030',
            // Segunda fase: exemplo de highlight diferente (troque por imagem real caso deseje)
            modalHighlightImg: { key: 'piaohighlight', x: 180, y: 120 }
        }
    },
    {
        nome: 'fase4',
        correta: 1, // índice da sílaba correta ('DA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'jogog', x: 241.15, y: 167.62 },
            bo: { key: 'jo', x: 1027, y: 796, audio: 'NA032' },
            silabas: [
                { texto: 'TU', x: 105, y: 725, revelada: false, audio: 'NA033' },
                { texto: 'GO', x: 284, y: 725, revelada: false, audio: 'NA034' },
                { texto: 'ME', x: 455, y: 725, revelada: false, audio: 'NA035' },
            ],
            dropResultados: [
                { key: 'jotu' },
                { key: 'jogo' },
                { key: 'jome' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro4',
            acertoImg: 'feedbackacerto4',
            erroAudio: 'NA038',
            acertoAudio: 'NA000',
            audioPalavra: 'NA040',
            // Segunda fase: exemplo de highlight diferente (troque por imagem real caso deseje)
            modalHighlightImg: { key: 'jogohighlight', x: 180, y: 120 }
        }
    },
    {
        nome: 'fase5',
        correta: 1, // índice da sílaba correta ('DA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'bonecag', x: 259, y: 167.62 },
            bo: { key: 'bone', x: 1027, y: 796, audio: 'NA042' },
            silabas: [
                { texto: 'TU', x: 105, y: 725, revelada: false, audio: 'NA033' },
                { texto: 'CA', x: 284, y: 725, revelada: false, audio: 'NA025' },
                { texto: 'CI', x: 455, y: 725, revelada: false, audio: 'NA045' },
            ],
            dropResultados: [
                { key: 'bonetu' },
                { key: 'boneca' },
                { key: 'boneci' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro5',
            acertoImg: 'feedbackacerto5',
            erroAudio: 'NA048',
            acertoAudio: 'NA000',
            audioPalavra: 'NA050',
            // Segunda fase: exemplo de highlight diferente (troque por imagem real caso deseje)
            modalHighlightImg: { key: 'bonecahighlight', x: 180, y: 120 }
        }
    },
    {
        nome: 'fase6',
        correta: 2, // índice da sílaba correta ('DA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'pipag', x: 189, y: 167.62 },
            bo: { key: 'pa', x: 1027, y: 796, audio: 'NA062' },
            silabas: [
                { texto: 'NE', x: 105, y: 725, revelada: false, audio: 'NA053' },
                { texto: 'GU', x: 284, y: 725, revelada: false, audio: 'NA054' },
                { texto: 'PI', x: 455, y: 725, revelada: false, audio: 'NA026' },
            ],
            dropResultados: [
                { key: 'nepa' },
                { key: 'gupa' },
                { key: 'pipa' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro6',
            acertoImg: 'feedbackacerto6',
            erroAudio: 'NA058',
            acertoAudio: 'NA000',
            audioPalavra: 'NA060',
            // Segunda fase: exemplo de highlight diferente (troque por imagem real caso deseje)
            modalHighlightImg: { key: 'pipahighlight', x: 180, y: 120 }
        }
    },
    {
        nome: 'fase7',
        correta: 2, // índice da sílaba correta ('DA')
        mapa: {
            background: 'bgjogo',
            bolag: { key: 'patog', x: 246, y: 167.62 },
            bo: { key: 'pa1', x: 1027, y: 796, audio: 'NA062' },
            silabas: [
                { texto: 'CE', x: 105, y: 725, revelada: false, audio: 'NA064' },
                { texto: 'PU', x: 284, y: 725, revelada: false, audio: 'NA065' },
                { texto: 'TO', x: 455, y: 725, revelada: false, audio: 'NA063' },
            ],
            dropResultados: [
                { key: 'pace' },
                { key: 'papu' },
                { key: 'pato' },
            ]
        },
        feedback: {
            erroImg: 'feedbackerro7',
            acertoImg: 'feedbackacerto7',
            erroAudio: 'NA068',
            acertoAudio: 'NA000',
            audioPalavra: 'NA070',
            // Segunda fase: exemplo de highlight diferente (troque por imagem real caso deseje)
            modalHighlightImg: { key: 'patohighlight', x: 180, y: 120 }
        }
    }

    // ... futuras fases, igual estrutura, sempre com dropResultados alinhado com silabas...
];

const STATIC_ELEMENTS = {
    toptext:  { key: 'toptext1', x: 675, y: 39 },
    caixas:   { key: 'caixas', x: 68.44, y: 653 },
    lupa1:    { key: 'lupa', x: 95, y: 793 },
    lupa2:    { key: 'lupa', x: 267, y: 793 },
    lupa3:    { key: 'lupa', x: 441, y: 793 },
    btnarrarinativo1: { key: 'btnarrarinativo', x: 95, y: 533 },
    btnarrarinativo2: { key: 'btnarrarinativo', x: 267, y: 533 },
    btnarrarinativo3: { key: 'btnarrarinativo', x: 441, y: 533 },
    btnarrar: { key: 'btnarrar', x: 625, y: 128 },
    btnarrarExtra: { key: 'btnarrar', x: 983, y: 811 }
};

export class Game extends BaseCena {
    constructor(controladorDeCenas) {
        super('Game');
        this.controladorDeCenas = controladorDeCenas;
        this._initGameState();
    }

    // Método para resetar todos os estados importantes da cena
    _initGameState() {
        this.loaded = false;
        this.faseAtual = 0; // começa na fase 0 (fase1)
        this.elementosFase = [];
        this.staticElems = [];
        this.silabasObjs = [];
        this.silabasReveladas = [false, false, false];
        this.boDropTarget = null;
        this.boImage = null;
        this.configFaseCorrente = null;
        this.lupaBtns = [null, null, null];
        this.btnArrarInativos = [null, null, null];
        this.btnArrarsAtivos = [null, null, null];
        this.btnArrarExtraRef = null;
        this.erroModal = null;
        this.acertoModal = null;
        this.fecharAcertoModal = null;
        this.fecharErroModal = null;
        // Se existiam listeners anteriores da cena antiga, zera o controle
        this._hasDropListener = false;
        this._hasGlobalDragEndListener = false;
        this._onDropHandler = null;
        this._globalDragEndHandler = null;
        // Bola highlight img também pode precisar de reset
        this.bolaHighlightImg = null;
        // Flag para evitar processamento duplicado de drop
        this._processandoDrop = false;
        // Flag para evitar exibição múltipla do modal de acerto
        this._modalAcertoSendoExibido = false;
        // Novo: posição para exibir a imagem 'erro' após fechar modal de erro (caso tenha drogado errado)
        // this._erroDropInfo = null; // -- REMOVIDO -- trocado pelo array abaixo
        // this._erroImgAtual = null; // -- REMOVIDO -- trocado pelo array abaixo

        // --- MOD: array para múltiplos erros por fase
        this._erroDropInfos = [];    // [{x, y, silabaIdx}]
        this._erroImgsAtuais = [];   // array de imagens Phaser das "erro" por sílaba
    }

    init(data) {
        // Chama o reset sempre que a cena é carregada por Phaser!
        this._initGameState();
    }

    create() {
        // Reseta o estado ANTES de continuar (caso Phaser chame create sem chamar init, por exemplo em reinícios customizados)
        this._initGameState();

        // Mostra background de introdução e diálogo
        this.backgroundIntro = this.add.image(0, 0, 'bgintro').setOrigin(0, 0);

        const dialogos = this.cache.json.get('dialogos');
        this.dialogo = new Dialogo(
            this,
            dialogos.dialogo_exemplo_1,
            'btComecar',
            () => { this.terminouDialogoIntro(); }
        );

        super.create();
    }

    terminouDialogoIntro() {
        this.cameras.main.once('camerafadeoutcomplete', () => {
            if (this.backgroundIntro) this.backgroundIntro.destroy();
            if (this.dialogo) this.dialogo.destroyDialogo();
            // Inicia a música de fundo
            SoundManager.playMusic('musica', 0.4);
            this.mostrarFase(this.faseAtual, true);
            this.cameras.main.fadeIn(300);
        });
        this.cameras.main.fadeOut(300);
    }

    mostrarFase(indice, primeiraFase = false) {
        // Remove elementos da fase anterior, exceto se for a primeira chamada
        if (!primeiraFase) {
            this.elementosFase.forEach(i => i && i.destroy && i.destroy());
            this.staticElems.forEach(i => i && i.destroy && i.destroy());
            if(Array.isArray(this.silabasObjs)) {
                this.silabasObjs.forEach(obj => obj && obj.destroy && obj.destroy());
            }
            this.silabasObjs = [];
            this.silabasReveladas = [false, false, false];

            // Destroi botões extras arrar criados nas lupas
            if(Array.isArray(this.btnArrarsAtivos)) {
                this.btnArrarsAtivos.forEach(b => b && b.destroy && b.destroy());
            }
            this.btnArrarsAtivos = [null,null,null];

            this.lupaBtns = [null,null,null];
            this.btnArrarInativos = [null,null,null];

            if(this.boDropTarget && this.input) {
                // removeDropZone pode não existir, removendo para evitar erro
                // this.input.removeDropZone(this.boDropTarget);
                // Alternativamente, nullificar referência
            }
            this.boDropTarget = null;
            this.boImage = null;
            this.elementosFase = [];
            this.staticElems = [];

            // Reseta referência do btnarrarExtra
            this.btnArrarExtraRef = null;

            // Destroi modal de erro/acerto se estiver ativo
            this.fecharErroModal && typeof this.fecharErroModal === "function" && this.fecharErroModal();
            this.fecharAcertoModal && typeof this.fecharAcertoModal === "function" && this.fecharAcertoModal();

            // Reseta bolaHighlightImg se existir fora da fase1
            this.bolaHighlightImg = null;
            
            // Reseta flags de processamento
            this._processandoDrop = false;
            this._modalAcertoSendoExibido = false;

            // --- NOVO: Remove TODAS as imagens de erro (não só uma), se existirem
            if (Array.isArray(this._erroImgsAtuais)) {
                this._erroImgsAtuais.forEach(img => img && img.destroy && img.destroy());
            }
            this._erroImgsAtuais = [];
            this._erroDropInfos = [];

            // Remove listeners antigos de drag/drop para evitar problemas ao recarregar a cena
            if (this.input) {
                if (this._hasDropListener) {
                    this.input.off('drop', this._onDropHandler, this);
                    this._hasDropListener = false;
                }
                if (this._hasGlobalDragEndListener) {
                    this.input.off('dragend', this._globalDragEndHandler, this);
                    this._hasGlobalDragEndListener = false;
                }
            }
            this._onDropHandler = null;
            this._globalDragEndHandler = null;
        }

        const configFase = FASES_CONFIG[indice];
        this.configFaseCorrente = configFase; // salva referência atual da fase para uso em onSilabaDrop
        if (!configFase) {
            console.warn('Fase não encontrada:', indice);
            return;
        }

        // BACKGROUND da fase
        const bg = this.add.image(0, 0, configFase.mapa.background).setOrigin(0, 0);
        this.elementosFase.push(bg);

        // bolag
        if (configFase.mapa.bolag) {
            const elBolag = this.add.image(configFase.mapa.bolag.x, configFase.mapa.bolag.y, configFase.mapa.bolag.key).setOrigin(0, 0);
            this.elementosFase.push(elBolag);
        }

        // Exibe o bolahighlight apenas na fase1
        if (configFase.nome === 'fase1') {
            this.bolaHighlightImg = this.add.image(170.32, 117, 'bolahighlight').setOrigin(0, 0);
            this.elementosFase.push(this.bolaHighlightImg);
        } else {
            this.bolaHighlightImg && this.bolaHighlightImg.destroy && this.bolaHighlightImg.destroy();
            this.bolaHighlightImg = null;
        }

        // bo (target do drop)
        if (configFase.mapa.bo) {
            const elBo = this.add.image(
                configFase.mapa.bo.x, configFase.mapa.bo.y, configFase.mapa.bo.key
            ).setOrigin(0, 0);

            this.boImage = elBo; // salva referência para trocar a sprite depois

            // Definir como zona de drop (usando bounding box da imagem do bo)
            this.boDropTarget = elBo;

            // Adicionar drop zone de forma customizada
            elBo.setInteractive({ dropZone: true });

            // Remover eventuais listeners antigos para evitar múltiplos
            if (this._hasDropListener !== undefined && this._hasDropListener === true) {
                this.input.off('drop', this._onDropHandler, this);
                this._hasDropListener = false;
            }

            // Adiciona handler e guarda referência para remover depois se necessário
            this._onDropHandler = (pointer, gameObject, dropZone) => {
                // Verifica se o drop zone é o target correto
                if (dropZone === this.boDropTarget || dropZone === elBo) {
                    this.onSilabaDrop(gameObject, dropZone);
                }
            };
            this.input.on('drop', this._onDropHandler, this);
            this._hasDropListener = true;

            // Novo: handler para dragend global - para forçar retorno à origem se drop for inválido
            if (this._hasGlobalDragEndListener) {
                this.input.off('dragend', this._globalDragEndHandler, this);
                this._hasGlobalDragEndListener = false;
            }
            this._globalDragEndHandler = (pointer, gameObject, dropped) => {
                // Só nos interessa se for sílaba ativa
                if (this.silabasObjs && this.silabasObjs.includes(gameObject)) {
                    // Se não foi "dropped" (fora do alvo), retorna à origem
                    // IMPORTANTE: Se dropped for true, significa que foi solto em um drop zone válido
                    // e o evento 'drop' será disparado, então não devemos fazer nada aqui
                    if (!dropped) {
                        // Pequeno delay para garantir que o evento 'drop' seja processado primeiro
                        this.time.delayedCall(50, () => {
                            // Verifica se o objeto ainda existe e não foi destruído (o que aconteceria se o drop foi bem-sucedido)
                            if (gameObject && gameObject.active && gameObject.scene === this) {
                                if (gameObject.originalX !== undefined && gameObject.originalY !== undefined) {
                                    gameObject.x = gameObject.originalX;
                                    gameObject.y = gameObject.originalY;
                                }
                            }
                        });
                    }
                }
            };
            this.input.on('dragend', this._globalDragEndHandler, this);
            this._hasGlobalDragEndListener = true;

            this.elementosFase.push(elBo);
        }

        // Elementos estáticos (sempre os mesmos entre as fases)
        const toptext = this.add.image(STATIC_ELEMENTS.toptext.x, STATIC_ELEMENTS.toptext.y, STATIC_ELEMENTS.toptext.key).setOrigin(0, 0);
        this.staticElems.push(toptext);

        const caixas = this.add.image(STATIC_ELEMENTS.caixas.x, STATIC_ELEMENTS.caixas.y, STATIC_ELEMENTS.caixas.key).setOrigin(0, 0);
        this.staticElems.push(caixas);

        // 3 lupas - cada uma revela uma sílaba ao ser clicada
        this.lupaBtns = [];
        for (let i = 1; i <= 3; i++) {
            const elem = STATIC_ELEMENTS[`lupa${i}`];
            const idx = i - 1;
            const lupaBtn = this.add.image(elem.x, elem.y, elem.key)
                .setOrigin(0, 0)
                .setInteractive({ useHandCursor: true });
            this.lupaBtns[idx] = lupaBtn;

            lupaBtn.on('pointerdown', () => {
                // Faz a lupa desaparecer ao clicar
                lupaBtn.disableInteractive();
                SoundManager.play('click', 1, false);
                lupaBtn.visible = false;
                // também revela a sílaba correspondente, e ativa btn arrar
                this.revelarSilaba(idx, true); // novo arg para lógica extra
            });
            this.staticElems.push(lupaBtn);
        }

        // 3 btnarrarinativo (não são botões, só visuais)
        this.btnArrarInativos = [];
        this.btnArrarsAtivos = [null, null, null];
        for (let i = 1; i <= 3; i++) {
            const elem = STATIC_ELEMENTS[`btnarrarinativo${i}`];
            const idx = i - 1;
            const btnArrarInativo = this.add.image(elem.x, elem.y, elem.key).setOrigin(0, 0);
            // Guarda referência para cada btnArrarInativo
            this.btnArrarInativos[idx] = btnArrarInativo;
            this.staticElems.push(btnArrarInativo);

            // Inicialmente, botões btnArrar "ativos" não existem ainda, só criamos quando a lupa correspondente é ativada
            this.btnArrarsAtivos[idx] = null;
        }

        // btnarrar e btnarrarExtra (visuais e handlers default)
        const elemBtnArrar = STATIC_ELEMENTS.btnarrar;
        const btnArrar = this.add.image(elemBtnArrar.x, elemBtnArrar.y, elemBtnArrar.key)
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true });
        btnArrar.on('pointerdown', () => this.onBtnArrarClick());
        this.staticElems.push(btnArrar);

        const elemBtnArrarExtra = STATIC_ELEMENTS.btnarrarExtra;
        const btnArrarExtra = this.add.image(elemBtnArrarExtra.x, elemBtnArrarExtra.y, elemBtnArrarExtra.key)
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true });
        btnArrarExtra.on('pointerdown', () => this.onBtnArrarClickExtra && this.onBtnArrarClickExtra());
        this.staticElems.push(btnArrarExtra);

        // Armazena referência ao btnarrarExtra para ocultar depois
        this.btnArrarExtraRef = btnArrarExtra;

        // Cria (mas não revela até clicar lupa) as sílabas, alinhando com o config da fase
        // Garante que silabasObjs e silabasReveladas estejam do tamanho correto
        if (Array.isArray(configFase.mapa.silabas)) {
            const silabasQtd = configFase.mapa.silabas.length;
            this.silabasObjs = Array(silabasQtd).fill(null);
            this.silabasReveladas = Array(silabasQtd).fill(false);
            configFase.mapa.silabas.forEach((silaba, idx) => {
                this.silabasObjs[idx] = null;
                this.silabasReveladas[idx] = false;
            });
        }

        // [NOVO] Remove TODAS imagens de erro da última fase!
        if (Array.isArray(this._erroImgsAtuais)) {
            this._erroImgsAtuais.forEach(img => img && img.destroy && img.destroy());
        }
        this._erroImgsAtuais = [];
        this._erroDropInfos = [];
    }

    // idx: 0,1,2 | a partir do clique na lupa respectiva
    // extra: se passado {fromLupa: true}, ativa lógica especial (sumir btn inativo, ativar arrar, play)
    revelarSilaba(idx, fromLupa = false) {
        // Resgata config da fase corrente
        const configFase = this.configFaseCorrente; // ou FASES_CONFIG[this.faseAtual]
        const silabasArr = (configFase && configFase.mapa && Array.isArray(configFase.mapa.silabas))
            ? configFase.mapa.silabas : null;

        if (
            !silabasArr ||
            this.silabasReveladas[idx] ||
            !silabasArr[idx]
        ) {
            return; // Nada a fazer se já revelada ou fora do índice válido
        }

        const data = silabasArr[idx];
        // Cria o texto em fonte Nunito, tamanho 50px, cor branca e outline preto bem fino
        // ATENÇÃO: .setDepth(2) removido; texto ficará no depth default (0), que fica ABAIXO do modal de feedback (que tem container e graphics no topo).
        const txtObj = this.add.text(
            data.x, data.y, data.texto, {
                fontFamily: 'Nunito-Bold',
                fontSize: '50px',
                color: '#FFFFFF',
                padding: { left: 0, right: 0, top: 15, bottom: 8 },
                align: 'center',
                stroke: '#000000',
                strokeThickness: 12,
            }
        ).setOrigin(0, 0.5);

        // Deixa draggable
        txtObj.setInteractive({ useHandCursor: true });
        this.input.setDraggable(txtObj);

        txtObj.originalX = data.x;
        txtObj.originalY = data.y;
        txtObj.silabaIdx = idx;

        // Eventos de drag
        txtObj.on('dragstart', () => {
            txtObj.setAlpha(0.7);
        });
        txtObj.on('drag', (pointer, dragX, dragY) => {
            txtObj.x = dragX;
            txtObj.y = dragY;
        });
        txtObj.on('dragend', (pointer, dropped) => {
            txtObj.setAlpha(1);
            // agora controle globalmente
        });

        // Marca como revelada e guarda referência
        this.silabasReveladas[idx] = true;
        this.silabasObjs[idx] = txtObj;

        // -- NOVO: lógica para sumir btnarrarinativo e colocar btnarrar, e audio
        if (fromLupa && this.btnArrarInativos && this.btnArrarInativos[idx]) {
            // Remove o botão arrarinativo
            this.btnArrarInativos[idx].destroy();
            this.btnArrarInativos[idx] = null; // liberação
            // Cria o botão btnarrar "ativo" na mesma posição
            const silabaAudio = data.audio; // Pode ser undefined em outras fases
            const elemKey = STATIC_ELEMENTS[`btnarrar`].key;
            // Pegando posição do btn inativo que sumiu:
            const elemDef = STATIC_ELEMENTS[`btnarrarinativo${idx+1}`];
            const btnArrar = this.add.image(
                elemDef.x,
                elemDef.y,
                elemKey
            ).setOrigin(0, 0)
            .setInteractive({useHandCursor: true});

            // Handler: tocar audio associado à sílaba
            btnArrar.on('pointerdown', () => {
                if (silabaAudio) {
                    SoundManager.stopAll();
                    SoundManager.play(silabaAudio, 1, false);
                } else {
                    // fallback: log ou efeito
                }
            });
            this.btnArrarsAtivos[idx] = btnArrar;
            this.staticElems.push(btnArrar);
        }
    }

    // Utilitário: bloqueia botões e draggables após erro
    _bloquearBotoesEDraggables() {
        // Bloqueia botões ativos
        if (this.btnArrarsAtivos && this.btnArrarsAtivos.length) {
            this.btnArrarsAtivos.forEach(btn => btn && btn.disableInteractive && btn.disableInteractive());
        }
        // Bloqueia btnarrarExtra e btnarrar principal
        if (this.btnArrarExtraRef) this.btnArrarExtraRef.disableInteractive && this.btnArrarExtraRef.disableInteractive();
        this.staticElems.forEach(e => {
            if (e && e.texture && e.texture.key === STATIC_ELEMENTS.btnarrar.key) {
                e.disableInteractive && e.disableInteractive();
            }
        });
        // Bloqueia draggables restantes
        this.silabasObjs.forEach(obj => obj && obj.disableInteractive && obj.disableInteractive());
        // Bloqueia lupas
        this.lupaBtns.forEach(btn => btn && btn.disableInteractive && btn.disableInteractive());
    }

    // Utilitário: exibe modal de erro - recebe a imagem de feedback a exibir e alguma config se quiser
    mostrarErroModal(faseIndex, onFecharCb) {
        if (this.erroModal && this.erroModal.container) {
            this.erroModal.container.destroy(true);
        }
        // Busca os dados de feedback do config da fase
        const faseConfig = FASES_CONFIG[faseIndex] || {};
        const feedback = faseConfig.feedback || {};
        const feedbackImgKey = feedback.erroImg || `feedbackerro${faseIndex + 1}`;
        const narraAudioKey = feedback.erroAudio || `audio_feedback_erro${faseIndex + 1}`;
        const posFeedback = [{ x: 993, y: 26 }, { x: 993, y: 26 }, { x: 993, y: 26 }][faseIndex] || { x: 993, y: 26 };
        const posBtnArrar = [{ x: 1021, y: 168 }, { x: 1021, y: 168 }, { x: 1021, y: 168 }][faseIndex] || { x: 1021, y: 168 };
        const posVoltar = [{ x: 1270, y: 709 }, { x: 1270, y: 709 }, { x: 1270, y: 709 }][faseIndex] || { x: 1270, y: 709 };
        const posLuzvermelha = [{ x: 681, y: 557 }, { x: 681, y: 557 }, { x: 681, y: 557 }][faseIndex] || { x: 681, y: 557 };

        // Fundo preto com alpha
        const container = this.add.container(0, 0);
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.8);
        graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
        container.add(graphics);

        // [NOVO] Se a fase tem imagem de destaque do modal, exibe!
        let modalHighlightImgRef = null;
        if (feedback.modalHighlightImg && feedback.modalHighlightImg.key) {
            // Usa x/y do config ou padrão
            const x = typeof feedback.modalHighlightImg.x === 'number' ? feedback.modalHighlightImg.x : 0;
            const y = typeof feedback.modalHighlightImg.y === 'number' ? feedback.modalHighlightImg.y : 0;
            modalHighlightImgRef = this.add.image(x, y, feedback.modalHighlightImg.key).setOrigin(0,0);
            container.add(modalHighlightImgRef);
        }

        // Luz vermelha (objeto, sempre)
        const luzvermelha = this.add.image(posLuzvermelha.x, posLuzvermelha.y, 'luzvermelha').setOrigin(0, 0);
        container.add(luzvermelha);

        // Imagem feedback erro da fase
        const feedbackErro = this.add.image(posFeedback.x, posFeedback.y, feedbackImgKey).setOrigin(0, 0);
        container.add(feedbackErro);

        // Botão narrar (toca o som correto da fase)
        const btnArrarModal = this.add.image(posBtnArrar.x, posBtnArrar.y, 'btnarrar')
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true });
        btnArrarModal.on('pointerdown', () => {
            if (narraAudioKey) {
                SoundManager.stopAll();
                SoundManager.play(narraAudioKey, 1, false);
            }
        });
        container.add(btnArrarModal);

        // Botão voltar (fecha o modal)
        const btnVoltar = this.add.image(posVoltar.x, posVoltar.y, 'btvoltar2')
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true });

        // --- MODIFICADO: Exibe múltiplas imagens de "erro" se houve múltiplos drops errados ---
        btnVoltar.on('pointerdown', () => {
            SoundManager.stopAll();
            SoundManager.play('click', 1, false);
            // Para o áudio que está tocando
            
            if (Array.isArray(this._erroDropInfos)) {
                // Remove imagens de erro antigas antes de criar as novas (boa prática)
                if (Array.isArray(this._erroImgsAtuais)) {
                    this._erroImgsAtuais.forEach(img => img && img.destroy && img.destroy());
                }
                this._erroImgsAtuais = [];
                // Para cada info, cria uma imagem de erro na respectiva posição
                this._erroDropInfos.forEach(info => {
                    if (info && typeof info.x === "number" && typeof info.y === "number" && typeof info.silabaIdx === "number") {
                        const erroImg = this.add.image(
                            info.x,
                            info.y,
                            'erro'
                        ).setOrigin(0, 0.5);
                        if (erroImg.setDepth) erroImg.setDepth(3);
                        this._erroImgsAtuais.push(erroImg);
                    }
                });
            }
            this.fecharErroModal && typeof this.fecharErroModal === "function" && this.fecharErroModal();
            onFecharCb && typeof onFecharCb === 'function' && onFecharCb();
        });
        container.add(btnVoltar);

        // Ajusta o depth do container do modal para garantir que fique acima de todos os outros elementos (inclusive dos textos das sílabas)
        container.setDepth(900);

        // Guarda para .destroy() depois
        this.erroModal = {
            container,
            graphics,
            modalHighlightImgRef,
            luzvermelha,
            feedbackErro,
            btnArrarModal,
            btnVoltar
        };
        // Fechar
        this.fecharErroModal = () => {
            if (this.erroModal && this.erroModal.container) {
                this.erroModal.container.destroy(true);
                this.erroModal = null;
            }
            // Habilita botões/draggables de novo DEPOIS do modal sumir
            this._habilitarBotoesEDraggables && this._habilitarBotoesEDraggables();
        };
    }

    // Modal de acerto, novo!
    mostrarAcertoModal(faseIndex, onFecharCb) {
        if (this.acertoModal && this.acertoModal.container) {
            this.acertoModal.container.destroy(true);
        }
        // Busca os dados de feedback do config da fase
        const faseConfig = FASES_CONFIG[faseIndex] || {};
        const feedback = faseConfig.feedback || {};
        const feedbackImgKey = feedback.acertoImg || `feedbackacerto${faseIndex + 1}`;
        const narraAudioKey = feedback.acertoAudio || `audio_feedback_acerto${faseIndex + 1}`;
        const posFeedback = [{ x: 993, y: 26 }, { x: 993, y: 26 }, { x: 993, y: 26 }][faseIndex] || { x: 993, y: 26 };
        const posBtnArrar = [{ x: 1021, y: 168 }, { x: 1021, y: 168 }, { x: 1021, y: 168 }][faseIndex] || { x: 1021, y: 168 };
        // Botão avançar substitui voltar - nova posição, se desejar customizar por fase, pode trocar.
        const posAvancar = [{ x: 1270, y: 709 }, { x: 1270, y: 709 }, { x: 1270, y: 709 }][faseIndex] || { x: 1270, y: 709 };
        // Luz verde (antes estava posLuzvermelha)
        const posLuzverde = [{ x: 681, y: 557 }, { x: 681, y: 557 }, { x: 681, y: 557 }][faseIndex] || { x: 681, y: 557 };
        // btfala sempre na mesma posição para todos
        const posBtfala = { x: 1596, y: 530 };

        // Fundo preto com alpha
        const container = this.add.container(0, 0);
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.8);
        graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
        container.add(graphics);

        // Se a fase tem imagem de destaque do modal, exibe!
        let modalHighlightImgRef = null;
        if (feedback.modalHighlightImg && feedback.modalHighlightImg.key) {
            // Usa x/y do config ou padrão
            const x = typeof feedback.modalHighlightImg.x === 'number' ? feedback.modalHighlightImg.x : 0;
            const y = typeof feedback.modalHighlightImg.y === 'number' ? feedback.modalHighlightImg.y : 0;
            modalHighlightImgRef = this.add.image(x, y, feedback.modalHighlightImg.key).setOrigin(0,0);
            container.add(modalHighlightImgRef);
        }

        // Luz verde!
        const luzverde = this.add.image(posLuzverde.x, posLuzverde.y, 'luzverde').setOrigin(0, 0);
        container.add(luzverde);

        // Imagem feedback acerto da fase
        const feedbackAcerto = this.add.image(posFeedback.x, posFeedback.y, feedbackImgKey).setOrigin(0, 0);
        container.add(feedbackAcerto);

        // Botão narrar/acerto (toca o som correto da fase)
        const btnArrarModal = this.add.image(posBtnArrar.x, posBtnArrar.y, 'btnarrar')
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true });
        btnArrarModal.on('pointerdown', () => {
            if (narraAudioKey) {
                SoundManager.stopAll();
                SoundManager.play(narraAudioKey, 1, false);
            }
        });
        container.add(btnArrarModal);

        // Botão fala (btfala, sempre X:1596 Y:530)
        const btnFala = this.add.image(posBtfala.x, posBtfala.y, 'btfala')
            .setOrigin(0,0)
            .setInteractive({ useHandCursor: true });
        btnFala.on('pointerdown', () => {
            // Aqui você pode colocar lógica para o som da palavra completa ou outra fala
            if(this.onBtfalaModalClick && typeof this.onBtfalaModalClick === 'function') {
                this.onBtfalaModalClick();
            }
        });
        container.add(btnFala);

        // Botão avançar (no lugar do voltar)
        const btnAvancar = this.add.image(posAvancar.x, posAvancar.y, 'btavancar2')
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true });

        // -------- ALTERAÇÃO PARA AVANÇAR FASES ----------
        btnAvancar.on('pointerdown', () => {
            SoundManager.stopAll();
            SoundManager.play('click', 1, false);
            // Para o áudio que está tocando
            
            if (typeof this.fecharAcertoModal === "function") this.fecharAcertoModal();
            // Lógica de avanço de fase (incrementa faseAtual e carrega nova fase se existir)
            const proximaFase = this.faseAtual + 1;
            if (proximaFase < FASES_CONFIG.length) {
                this.faseAtual = proximaFase;
                // Pequeno delay para evitar conflitos visuais entre fechar modal e mostrarFase
                setTimeout(() => {
                    this.mostrarFase(this.faseAtual, false);
                }, 100); // 100ms basta, pode ajustar se desejar mais ou menos suave
            } else {
                // Se for a última fase, mostra o modal final
                setTimeout(() => {
                    this.mostrarModalFinal();
                }, 100);
            }
            if(onFecharCb && typeof onFecharCb === "function") {
                onFecharCb();
            }
        });
        container.add(btnAvancar);

        // Topo
        container.setDepth(900);

        // Guarda para .destroy() depois
        this.acertoModal = {
            container,
            graphics,
            modalHighlightImgRef,
            luzverde,
            feedbackAcerto,
            btnArrarModal,
            btnAvancar,
            btnFala
        };

        // Fechar
        this.fecharAcertoModal = () => {
            if (this.acertoModal && this.acertoModal.container) {
                this.acertoModal.container.destroy(true);
                this.acertoModal = null;
            }
            // Habilita botões/draggables de novo DEPOIS do modal sumir se quiser
            this._habilitarBotoesEDraggables && this._habilitarBotoesEDraggables();
        };
    }

    // Modal final - exibido ao completar todas as fases
    mostrarModalFinal() {
        // Fundo preto com alpha 0.8
        const container = this.add.container(0, 0);
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.8);
        graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
        container.add(graphics);

        // Imagem modalfinal no centro
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;
        const modalFinalImg = this.add.image(centerX, centerY, 'modalfinal').setOrigin(0.5, 0.5);
        container.add(modalFinalImg);

        // Botão btinicio no centro da imagem, deslocado para baixo em Y
        const btnInicio = this.add.image(centerX, centerY + 200, 'btinicio')
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true });
        
        btnInicio.on('pointerdown', () => {
            SoundManager.play('click', 1, false);
            // Chama a função para voltar ao início
            if (this.controladorDeCenas && typeof this.controladorDeCenas.mudarCena === 'function') {
                this.controladorDeCenas.mudarCena(0);
            }
        });
        container.add(btnInicio);

        // Ajusta o depth do container para garantir que fique acima de todos os outros elementos
        container.setDepth(1000);

        // Guarda referência para possível destruição futura
        this.modalFinal = {
            container,
            graphics,
            modalFinalImg,
            btnInicio
        };
    }

    // Utilitário: habilita botões/draggables. Só usado depois de fechar o modal.
    _habilitarBotoesEDraggables() {
        if (this.btnArrarsAtivos && this.btnArrarsAtivos.length) {
            this.btnArrarsAtivos.forEach(btn => btn && btn.input && btn.setInteractive && btn.setInteractive({ useHandCursor: true }));
        }
        if (this.btnArrarExtraRef && this.btnArrarExtraRef.input) this.btnArrarExtraRef.setInteractive({ useHandCursor: true });
        this.staticElems.forEach(e => {
            if (e && e.texture && e.texture.key === STATIC_ELEMENTS.btnarrar.key && e.input) {
                e.setInteractive({ useHandCursor: true });
            }
        });
        this.silabasObjs.forEach(obj => obj && obj.input && obj.setInteractive && obj.setInteractive({ useHandCursor: true }));
        this.lupaBtns.forEach(btn => btn && btn.input && btn.setInteractive && btn.setInteractive({ useHandCursor: true }));
    }

    // Ao dropar sobre o target
    onSilabaDrop(gameObject, dropZone) {
        // Verificações de segurança
        if (!gameObject || !dropZone) return;
        
        // Evita processamento duplicado
        if (this._processandoDrop) return;
        
        // Só aceita sílabas ativas
        if (!this.silabasObjs || !this.silabasObjs.includes(gameObject)) return;

        const faseConf = this.configFaseCorrente;
        const faseIdx  = this.faseAtual;
        
        // Verifica se a fase está configurada corretamente
        if (!faseConf) {
            console.warn('onSilabaDrop: faseConf não encontrada');
            return;
        }
        
        // Marca como processando
        this._processandoDrop = true;

        // Determinando índice da sílaba correta da fase
        const idxCorreta = faseConf && typeof faseConf.correta === "number" ? faseConf.correta : null;

        // Só permite a correta, mostra erro se for errada
        if (
            faseConf &&
            typeof idxCorreta === "number" &&
            typeof gameObject.silabaIdx === "number" &&
            gameObject.silabaIdx !== idxCorreta // apenas aceita o índice correto
        ) {
            // Troca a sprite do alvo 'bo' para a drop correspondente ao silaba jogada
            if (
                faseConf.mapa &&
                Array.isArray(faseConf.mapa.dropResultados) &&
                this.boImage
            ) {
                const dropSprite = faseConf.mapa.dropResultados[gameObject.silabaIdx];
                if (dropSprite && typeof dropSprite.key === "string") {
                    this.boImage.setTexture(dropSprite.key);
                }
            }

            // Toca som de erro
            SoundManager.play('erro', 1, false);

            // Oculta btnarrarExtra ao dropar (mesmo nos erros)
            if (this.btnArrarExtraRef && this.btnArrarExtraRef.visible !== false) {
                this.btnArrarExtraRef.visible = false;
            }

            // Bloqueia botões/draggables
            this._bloquearBotoesEDraggables();

            // FAZ A SÍLABA SUMIR AO SOLTAR NO TARGET:
            // --- MODIFICADO: Acumula a posição original ANTES de destruir, para exibir "erro" depois ---
            if (!Array.isArray(this._erroDropInfos)) this._erroDropInfos = [];
            const erroDropInfo = {
                x: typeof gameObject.originalX === "number" ? gameObject.originalX : gameObject.x,
                y: typeof gameObject.originalY === "number" ? gameObject.originalY : gameObject.y,
                silabaIdx: typeof gameObject.silabaIdx === "number" ? gameObject.silabaIdx : null
            };
            this._erroDropInfos.push(erroDropInfo);

            gameObject.destroy();

            // Remove referência na array
            const idx = this.silabasObjs.indexOf(gameObject);
            if (idx !== -1) {
                this.silabasObjs[idx] = null;
            }

            // Após 2s, mostra modal de erro específico da fase (feedbackerro1, etc)
            setTimeout(() => {
                this.mostrarErroModal(faseIdx, () => {
                    // RESETAR as sprites da boImage para bo (volta sprite normal)
                    if (this.boImage && faseConf && faseConf.mapa && faseConf.mapa.bo) {
                        this.boImage.setTexture(faseConf.mapa.bo.key);
                    }
                    // Reexibe btnarrarExtra se devia estar visível
                    if (this.btnArrarExtraRef) this.btnArrarExtraRef.visible = true;
                    // Reseta flag de processamento quando o modal for fechado
                    this._processandoDrop = false;

                    // // --- EXIBIR IMAGEM DE ERRO feito no botão voltar do modal!
                });
            }, 2000);

            // NUNCA retorna sílaba para a posição original ao abrir o modal!

            return;
        }

        // TROCA o sprite do alvo de acordo com dropResultados da config da fase
        if (
            faseConf &&
            faseConf.mapa &&
            Array.isArray(faseConf.mapa.dropResultados) &&
            this.boImage &&
            typeof gameObject.silabaIdx === "number"
        ) {
            const dropSprite = faseConf.mapa.dropResultados[gameObject.silabaIdx];
            if (dropSprite && typeof dropSprite.key === "string") {
                this.boImage.setTexture(dropSprite.key);
            }
        }

        // Toca som de acerto
        SoundManager.play('acerto', 1, false);

        // [NOVO] Ocultar btnarrarExtra ao dropar qualquer sílaba
        if(this.btnArrarExtraRef && this.btnArrarExtraRef.visible !== false) {
            this.btnArrarExtraRef.visible = false;
        }

        // Bloqueia botões/draggables quando acertar
        this._bloquearBotoesEDraggables();

        // FAZ A SÍLABA SUMIR AO SOLTAR NO TARGET:
        gameObject.destroy();

        // Remove referência na array
        const idx = this.silabasObjs.indexOf(gameObject);
        if (idx !== -1) {
            this.silabasObjs[idx] = null;
        }

        // Se a sílaba correta foi solta, mostra o modal de acerto imediatamente
        // Não precisa esperar todas as sílabas serem soltas
        this.onFaseDragAndDropCompleto();
    }

    // Lógica ao completar drags na fase (agora mostra modal de acerto)
    onFaseDragAndDropCompleto() {
        // Evita chamadas múltiplas
        if (this._modalAcertoSendoExibido) return;
        this._modalAcertoSendoExibido = true;
        
        // Exibe o modal de acerto, com os visuais especiais após 2s de delay
        setTimeout(() => {
            this.mostrarAcertoModal(this.faseAtual, () => {
                // Agora, após clicar em avançar, mostrará próxima fase (ver mostrarAcertoModal)
                // Não é mais necessário lógica aqui
                // Reseta flag quando o modal for fechado
                this._processandoDrop = false;
            });
        }, 2000);
    }

    // Botões padrão
    onBtnArrarClick() {
        // Ao pressionar o btnarrar, dê play no som 'NA003'
        SoundManager.stopAll();
        SoundManager.play('NA003', 1, false);
    }
    onBtnArrarClickExtra() {
        // Ao pressionar o btnarrarExtra, dê play no som que está em "bo.audio" da fase atual
        const configAtual = FASES_CONFIG[this.faseAtual];
        const boAudio = configAtual && configAtual.mapa && configAtual.mapa.bo && configAtual.mapa.bo.audio;
        if (boAudio) {
            SoundManager.stopAll();
            SoundManager.play(boAudio, 1, false);
        }
    }
    onBtnArrarInativoClick(qual) {
        console.log('Btn arrarinativo', qual, 'clicado!');
    }

    // Exemplo para hook do btfala do modal de acerto
    onBtfalaModalClick() {
        // Ao clicar, toca o audioPalavra da fase atual
        const configAtual = FASES_CONFIG[this.faseAtual];
        const audioPalavra = configAtual && configAtual.feedback && configAtual.feedback.audioPalavra;
        if (audioPalavra) {
            SoundManager.stopAll();
            SoundManager.play(audioPalavra, 1, false);
        }
    }

    debugConsole() {
        console.log('[DEBUG] Game debugConsole called');
    }
}

export default Game;
