# EPPGG Bahia — hub de estudo

Site: https://wildpoxx.github.io/eppgg-bahia/

Publicação estática em GitHub Pages, branch `main`, diretório `docs`. Sem dependências de build. Execute `python -m http.server 8765 --directory docs` para prévia local.

Módulo inicial: planejamento, organização, direção e controle (PODC), caso hipotético da SAEB, recuperação ativa, cinco questões autorais com comentários e roteiro discursivo.

As respostas ficam no navegador. Exportação/importação JSON permite transportá-las entre dispositivos; não existe sincronização automática nem envio ao tutor. Entregue o arquivo exportado ao tutor para análise. A conclusão de um exercício não demonstra domínio de todo o assunto.

O vault é a fonte editorial; PDFs comerciais, transcrições integrais e resultados pessoais não integram este repositório. Questões autorais não são atribuídas à CESGRANRIO. Conteúdo preparado com apoio de IA; aberto a revisão conceitual.

## Manutenção

HTML e CSS em `docs`; banco e interação em `docs/assets/study.js`. IDs de questões são persistentes. Alterações incompatíveis de questões ou respostas exigem nova versão de armazenamento/exportação. Validar navegação, correção, recarga e importação antes de publicar. Não importar resultados dos usuários para o Git.
