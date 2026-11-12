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

## Constitucional — módulo 2

`docs/modulos/constitucional-2/`: direitos e garantias fundamentais, síntese inicial, consulta temática, caso SAEB, vinte questões autorais comentadas e impressão. Banco/interação em `docs/assets/constitucional-2.js`, módulo `dc-02`, versão 1, armazenamento independente. Fonte editorial no vault: Direitos e garantias fundamentais.md e 05 - Questões/constitucional-2.json. Leitura de cinco PDFs/272 páginas; fontes oficiais e ressalvas temporais registradas.

## Constitucional — módulo 3

`docs/modulos/constitucional-3/`: Organização do Estado, item 2.4, síntese e consulta, caso SAEB, 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/constitucional-3.js`, módulo `dc-03`, versão 1. Fonte canônica no vault: Organização do Estado.md e 05 - Questões/constitucional-3.json. Administração e servidores (2.5) reservado ao próximo módulo.

## Constitucional — módulo 4

`docs/modulos/constitucional-4/`: Administração Pública e servidores na Constituição, item 2.5, síntese, caso SAEB, 18 questões autorais comentadas e impressão. Banco/interação em `docs/assets/constitucional-4.js`, módulo `dc-04`, versão 1. Fonte canônica no vault: Administração Pública e servidores na Constituição.md e 05 - Questões/constitucional-4.json. Fontes e ressalvas constam do registro privado de leitura do DC-04.

## Administração Pública — AP-01

`docs/modulos/ap-01/`: Estado, poder e governo; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/ap-01.js`, módulo `ap-01`, versão 1. Fonte editorial no vault.

## Direito Administrativo — DA-01

`docs/modulos/da-01/`: Estado, Administração e LINDB; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-01.js`, módulo `da-01`, versão 1. Fonte editorial no vault.

## Direito Administrativo — DA-02

`docs/modulos/da-02/`: Organização administrativa; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-02.js`, módulo `da-02`, versão 1. Fonte editorial no vault.

## Direito Administrativo — DA-03

`docs/modulos/da-03/`: Agências, estatais e entidades paraestatais; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-03.js`, módulo `da-03`, versão 1. Fonte editorial no vault (Entregas Claude/da-03).

## Direito Administrativo — DA-04

`docs/modulos/da-04/`: Poderes administrativos; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-04.js`, módulo `da-04`, versão 1. Fonte editorial no vault (Entregas Claude/da-04).

## Direito Administrativo — DA-05

`docs/modulos/da-05/`: Atos administrativos; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-05.js`, módulo `da-05`, versão 1. Fonte editorial no vault (Entregas Claude/da-05).

## Direito Administrativo — DA-06

`docs/modulos/da-06/`: Responsabilidade civil do Estado; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-06.js`, módulo `da-06`, versão 1. Fonte editorial no vault (Entregas Claude/da-06).

## Direito Administrativo — DA-07

`docs/modulos/da-07/`: Licitações: Lei 14.133/2021 e Lei baiana 14.634/2023; 18 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-07.js`, módulo `da-07`, versão 1. Fonte editorial no vault (Entregas Claude/da-07).

## Direito Administrativo — DA-08

`docs/modulos/da-08/`: Contratos administrativos; 18 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-08.js`, módulo `da-08`, versão 1. Fonte editorial no vault (Entregas Claude/da-08).

## Direito Administrativo — DA-09

`docs/modulos/da-09/`: Disciplina baiana das contratações: instrumentos complementares da Lei 14.634/2023; 14 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-09.js`, módulo `da-09`, versão 1. Fonte editorial no vault (Entregas Claude/da-09).

## Direito Administrativo — DA-10

`docs/modulos/da-10/`: Controle da Administração Pública e Tribunal de Contas da Bahia; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-10.js`, módulo `da-10`, versão 1. Fonte editorial no vault (Entregas Claude/da-10).

## Direito Administrativo — DA-11

`docs/modulos/da-11/`: Bens públicos e domínio público; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-11.js`, módulo `da-11`, versão 1. Fonte editorial no vault (Entregas Claude/da-11).

## Direito Administrativo — DA-12

`docs/modulos/da-12/`: Serviços públicos, concessões, PPP e regulação; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-12.js`, módulo `da-12`, versão 1. Fonte editorial no vault (Entregas Claude/da-12).

## Direito Administrativo — DA-13

`docs/modulos/da-13/`: Agentes públicos e estatuto dos servidores da Bahia; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-13.js`, módulo `da-13`, versão 1. Fonte editorial no vault (Entregas Claude/da-13).

## Direito Administrativo — DA-14

`docs/modulos/da-14/`: Processo administrativo na Bahia (Lei 12.209/2011); 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/da-14.js`, módulo `da-14`, versão 1. Fonte editorial no vault (Entregas Claude/da-14).

## Administração Pública — AP-02

`docs/modulos/ap-02/`: Burocracia, paradigmas de gestão, bem-estar e reforma do Estado; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/ap-02.js`, módulo `ap-02`, versão 1. Fonte editorial no vault (Entregas Claude/ap-02).

## Administração Pública — AP-03

`docs/modulos/ap-03/`: Federalismo, relações intergovernamentais, municipalização e consórcios; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/ap-03.js`, módulo `ap-03`, versão 1. Fonte editorial no vault (Entregas Claude/ap-03).

## Administração Pública — AP-04

`docs/modulos/ap-04/`: Organizações sociais no modelo baiano (Lei 15.176/2026); 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/ap-04.js`, módulo `ap-04`, versão 1. Fonte editorial no vault (Entregas Claude/ap-04).

## Administração Pública — AP-05

`docs/modulos/ap-05/`: Marco Regulatório das Organizações da Sociedade Civil (MROSC); 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/ap-05.js`, módulo `ap-05`, versão 1. Fonte editorial no vault (Entregas Claude/ap-05).

## Administração Pública — AP-06

`docs/modulos/ap-06/`: Terceirização e parcerias público-privadas; 16 questões autorais comentadas e impressão. Banco/interação em `docs/assets/ap-06.js`, módulo `ap-06`, versão 1. Fonte editorial no vault (Entregas Claude/ap-06).
