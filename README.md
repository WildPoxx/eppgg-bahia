# EPPGG Bahia — hub de estudo

Site: https://wildpoxx.github.io/eppgg-bahia/

Publicação estática em GitHub Pages, branch `main`, diretório `docs`. Sem dependências de build. Execute `python -m http.server 8765 --directory docs` para prévia local.

Módulo inicial: planejamento, organização, direção e controle (PODC), caso hipotético da SAEB, recuperação ativa, cinco questões autorais com comentários e roteiro discursivo.

As respostas ficam no navegador. Exportação/importação JSON permite transportá-las entre dispositivos; não existe sincronização automática nem envio ao tutor. Entregue o arquivo exportado ao tutor para análise. A conclusão de um exercício não demonstra domínio de todo o assunto.

O vault é a fonte editorial; PDFs comerciais, transcrições integrais e resultados pessoais não integram este repositório. Questões autorais não são atribuídas à CESGRANRIO. Conteúdo preparado com apoio de IA; aberto a revisão conceitual.

## Manutenção

HTML e CSS em `docs`; banco e interação em `docs/assets/study.js`. IDs de questões são persistentes. Alterações incompatíveis de questões ou respostas exigem nova versão de armazenamento/exportação. Validar navegação, correção, recarga e importação antes de publicar. Não importar resultados dos usuários para o Git.

## Português — Texto 1

Módulo em `docs/modulos/portugues-texto-1/`: síntese, caso, cinco questões interativas e versão para leitura/impressão. Banco e interação em `docs/assets/portugues-texto-1.js`; armazenamento e exportação isolados do PODC pelo módulo `pt-01`. Comentários pessoais ficam no campo de explicação, no navegador, e só chegam ao tutor quando o usuário compartilha a exportação.

## Sintaxe e pontuação

`docs/modulos/portugues-sintaxe-pontuacao/`: síntese, oito questões autorais e versão de impressão. Banco/interação em `docs/assets/portugues-sintaxe-pontuacao.js`; armazenamento isolado pelo módulo `pt-g01`, versão 1. Fonte editorial no vault: Sintaxe e pontuação.md e banco JSON homônimo.

## Diagnóstico de Gramática

`docs/modulos/portugues-diagnostico/`: 12 questões (6 de concordância nominal, 6 de acentuação), correção após a bateria completa, resultados por assunto e impressão. Motor/banco em `assets/portugues-diagnostico.js`, módulo `pt-d01`, versão 1; exportação isolada. Não atribui domínio automaticamente.

## Constitucional — módulo 1

`docs/modulos/constitucional-1/`: módulo, dez questões autorais comentadas, impressão e diagnóstico das fontes de exercícios. Banco e interação em `docs/assets/constitucional-1.js`, módulo `dc-01`, versão 1. Fontes editoriais no vault: Constituição princípios e eficácia.md e 05 - Questões/constitucional-1.json. Cada correção remete à seção correspondente; originais comerciais e respostas pessoais permanecem privados.
