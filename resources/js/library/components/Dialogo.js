import SoundManager from '../managers/SoundManager.js';

export class Dialogo extends Phaser.GameObjects.Container {
    /**
     * 
     * @param {Phaser.Scene} scene Cena Phaser onde o diálogo será exibido
     * @param {Object[]} dialogos Array de objetos do json 'dialogos', com { texto, personagem }
     * @param {string} [botaoFinalImg] String com a key do botão final na ultima fala (opcional)
     * @param {function} [onFinish] Função de callback a ser chamada ao clicar no botão final do diálogo (opcional)
     */
    constructor(scene, dialogos, botaoFinalImg = null, onFinish = null) {
        if (typeof botaoFinalImg === 'object' && botaoFinalImg !== null) {
            super(scene);
            this.onFinish = null;
            this.botaoFinalImg = null;
            this.config = botaoFinalImg;
        } else {
            super(scene);
            this.botaoFinalImg = botaoFinalImg;
            this.onFinish = typeof onFinish === 'function' ? onFinish : null;
        }

        if (!dialogos || !Array.isArray(dialogos)) {
            throw new Error("Dialogo: o parâmetro 'dialogos' deve ser um array.");
        }

        this.scene = scene;
        this.dialogos = dialogos;
        this.indiceDialogo = 0;
        this.tutorialImg = null; // Referência para a imagem "tutorial" quando exibida

        // Adiciona o container na cena
        this.scene.add.existing(this);

        // Cria a caixa de diálogo temporariamente (posição será ajustada após pegar as dimensões)
        const tempCaixa = scene.add.image(0, 0, 'caixadialogo').setVisible(false);
        const caixaWidth = tempCaixa.width;
        const caixaHeight = tempCaixa.height;
        tempCaixa.destroy();

        // Centraliza a caixa no eixo X e encosta ela embaixo (eixo Y)
        this.caixaX = (scene.scale.width - caixaWidth) / 2;
        this.caixaY = scene.scale.height - caixaHeight - 40;

        // Cria a caixa de diálogo
        this.caixaDialogo = scene.add.image(this.caixaX, this.caixaY, 'caixadialogo')
            .setOrigin(0, 0)
            .setDepth(50);

        // Adiciona ao container
        this.add(this.caixaDialogo);

        // Margens da caixa de texto
        const marginLeft = 90;
        const marginRight = 390; // maior para dar espaço ao personagem

        // Cria o texto do diálogo, centralizado verticalmente, um pouco pra cima
        this.texto = scene.add.text(
            this.caixaX + marginLeft,
            this.caixaY + 100,
            '',
            {
                fontFamily: 'Nunito-Bold',
                fontSize: '35px',
                color: '#424242',
                wordWrap: { width: caixaWidth - marginLeft - marginRight, useAdvancedWrap: true },
                align: 'left'
            }
        ).setOrigin(0, 0)
         .setDepth(51);

        this.add(this.texto);

        // Imagem do personagem, do lado direito da caixa. Inicialmente personagem1.
        this.spritePersonagem = scene.add.image(
            this.caixaX + caixaWidth - 80,
            this.caixaY + caixaHeight / 4,
            'personagem1')
            .setOrigin(0.5, 0.5)
            .setDepth(52);
        this.add(this.spritePersonagem);

        // Botões
        // btAvancar à direita, btVoltar à esquerda
        this.btAvancar = scene.add.image(
            this.caixaX + caixaWidth - 600,
            this.caixaY + caixaHeight - 95,
            'btAvancar')
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setDepth(53);
        this.add(this.btAvancar);

        this.btVoltar = scene.add.image(
            this.caixaX + 120,
            this.caixaY + caixaHeight - 95,
            'btVolta')
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setVisible(false)
            .setDepth(53);

        this.add(this.btVoltar);

        // Cria botão final somente quando necessário
        if (this.botaoFinalImg) {
            this.btFinal = scene.add.image(
                this.caixaX + caixaWidth - 600,
                this.caixaY + caixaHeight - 95,
                this.botaoFinalImg
            )
            .setOrigin(0.5, 0.5)
            .setInteractive({ useHandCursor: true })
            .setDepth(53)
            .setVisible(false); // só mostra na última frase
            this.add(this.btFinal);

            this.btFinal.on('pointerdown', () => {
                SoundManager.play("click", 1, false);
                if (typeof this.onFinish === 'function') {
                    this.onFinish();
                }
                this.destroyDialogo();
            });
        } else {
            this.btFinal = null;
        }

        // Eventos dos botões
        this.btAvancar.on('pointerdown', () => {
            SoundManager.play("click", 1, false);
            this.avancarDialogo();
        });

        this.btVoltar.on('pointerdown', () => {
            SoundManager.play("click", 1, false);
            this.voltarDialogo();
        });

        // Inicializa o diálogo na primeira fala
        this.atualizaDialogo();
    }

    avancarDialogo() {
        if (this.indiceDialogo < this.dialogos.length - 1) {
            this.indiceDialogo++;
            this.atualizaDialogo();
        } else {
            // Se já estamos na última fala, ao clicar no btAvancar, fechar o diálogo
            this.destroyDialogo();
        }
    }

    voltarDialogo() {
        if (this.indiceDialogo > 0) {
            this.indiceDialogo--;
            this.atualizaDialogo();
        }
    }

    destroyDialogo() {
        // Destroi todos os elementos visuais do diálogo
        // Remove tutorialImg se existir antes de remover o restante
        if (this.tutorialImg) {
            this.tutorialImg.destroy();
            this.tutorialImg = null;
        }
        this.list.forEach(obj => {
            if (obj && typeof obj.destroy === 'function') obj.destroy();
        });
        this.destroy();
    }

    atualizaDialogo() {
        const dado = this.dialogos[this.indiceDialogo];
        if (!dado) return;

        // Remove tutorialImg caso esteja presente de iteração anterior
        if (this.tutorialImg) {
            this.tutorialImg.destroy();
            this.tutorialImg = null;
        }

        // Atualiza texto
        this.texto.setText(dado.texto || '');

        // Atualiza personagem: alterna apenas entre "personagem1" (falas pares) e "personagem2" (falas ímpares)
        if (this.indiceDialogo % 2 === 0) {
            this.spritePersonagem.setTexture('personagem1');
        } else {
            this.spritePersonagem.setTexture('personagem2');
        }

        // Se está na segunda frase (índice 1), exibe a imagem 'tutorial' nas posições 287,184
        if (this.indiceDialogo === 1) {
            this.tutorialImg = this.scene.add.image(287, 184, 'tutorial')
                .setOrigin(0, 0)
                .setDepth(54); // Um pouco acima dos outros elementos do diálogo
            // Se quiser adicionar ao container:
            this.add(this.tutorialImg);
        }

        // Lógica de exibição btVoltar/btAvancar/btFinal
        if (this.indiceDialogo === 0) {
            this.btVoltar.setVisible(false);
        } else {
            this.btVoltar.setVisible(true);
        }

        // Se estamos na última frase
        if (this.indiceDialogo === this.dialogos.length - 1) {
            // Troca o botão se necessário
            if (this.btFinal) {
                this.btAvancar.setVisible(false).disableInteractive();
                this.btFinal.setVisible(true).setInteractive();
            } else {
                this.btAvancar.setVisible(true).setInteractive();
            }
        } else {
            if (this.btFinal) this.btFinal.setVisible(false).disableInteractive();
            this.btAvancar.setVisible(true).setInteractive();
        }
    }
}
