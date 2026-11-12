'use strict';
const questions = [
  {
    "id": "ei-02-q01",
    "section": "conceitos",
    "source": "Aula 01, pp. 19–21; questão autoral.",
    "text": "Na central de atendimento de uma secretaria estadual, a equipe registra: (I) a fila eletrônica parou às 9h e segue parada; (II) o fornecedor do sistema pode encerrar o contrato no próximo trimestre; (III) um atendente furou a fila para um conhecido, segundo relato ainda não apurado. A classificação adequada é",
    "options": [
      "I, risco; II, problema; III, irregularidade comprovada.",
      "I, problema; II, risco; III, possível irregularidade a apurar.",
      "I, crise; II, problema; III, risco de integridade já consumado.",
      "I, problema; II, irregularidade; III, risco.",
      "I, II e III, riscos, pois todos ameaçam o objetivo do serviço."
    ],
    "answer": 1,
    "comments": [
      "A fila parada já ocorreu: é problema, não possibilidade. E o relato não apurado não comprova irregularidade.",
      "Correta. O que já aconteceu é problema; a possibilidade futura é risco; a conduta relatada é desconformidade possível, que depende de apuração com garantias.",
      "Nem todo incidente é crise, e um relato não apurado não autoriza dar a irregularidade por consumada.",
      "O fim possível do contrato não é desconformidade com regra; é uma incerteza que afeta o objetivo.",
      "Classificar tudo como risco apaga a diferença entre o que exige resposta imediata, o que exige prevenção e o que exige apuração."
    ]
  },
  {
    "id": "ei-02-q02",
    "section": "contexto",
    "source": "Aula 01, pp. 22–23; questão autoral.",
    "text": "Duas diretorias avaliam o mesmo risco de atraso em pagamentos. Uma atribui probabilidade 'alta' olhando o último mês; a outra, 'baixa' olhando os últimos três anos, período em que houve pouca notificação de atrasos. Antes de consolidar as avaliações, a providência mais adequada é",
    "options": [
      "adotar a avaliação mais pessimista, porque risco sempre deve ser superestimado.",
      "adotar a média das duas classificações, que neutraliza as diferenças de método.",
      "explicitar critérios e horizonte temporal e examinar se a baixa frequência reflete exposição real, subnotificação ou controle eficaz.",
      "descartar as duas avaliações, porque escalas qualitativas não admitem comparação.",
      "considerar apenas o histórico de três anos, porque séries longas dispensam julgamento técnico."
    ],
    "answer": 2,
    "comments": [
      "Superestimar por regra distorce a priorização e desloca recursos de riscos mais graves.",
      "Fazer média de avaliações com bases diferentes não corrige a falta de comparabilidade.",
      "Correta. Comparar exige o mesmo critério e o mesmo período, e a baixa frequência registrada pode ter explicações diferentes, que precisam ser identificadas antes do uso.",
      "Escalas qualitativas são úteis quando os critérios estão definidos; o problema é a falta de referência comum.",
      "Série longa com subnotificação pode esconder a exposição. O dado precisa de interpretação."
    ]
  },
  {
    "id": "ei-02-q03",
    "section": "cadeia",
    "source": "Aula 01, pp. 23–24; questão autoral.",
    "text": "Num programa estadual de bolsas, a regra de cálculo do sistema não considera a renda de membros recém-incluídos na família, o que pode levar à concessão a quem excede o limite e ao pagamento indevido. Na cadeia de risco, a falha na regra de cálculo corresponde à",
    "options": [
      "consequência, porque produz prejuízo ao erário.",
      "resposta ao risco, porque já foi identificada pela equipe.",
      "evento, porque é o que a organização quer evitar que ocorra.",
      "causa, condição que favorece a concessão indevida.",
      "objetivo, porque orienta o desenho do programa."
    ],
    "answer": 3,
    "comments": [
      "A consequência é o pagamento indevido, efeito sobre o objetivo.",
      "Identificar uma falha não é responder a ela; resposta seria corrigir a regra ou criar validação.",
      "O evento é a concessão a quem não cumpre o requisito; a falha é o que a torna possível.",
      "Correta. A regra defeituosa é a condição que favorece o evento (concessão indevida), que gera a consequência (pagamento indevido). Controle preventivo deve atuar sobre ela.",
      "O objetivo é conceder a quem tem direito, no prazo, e não a regra de cálculo."
    ]
  },
  {
    "id": "ei-02-q04",
    "section": "controles",
    "source": "Aula 01, pp. 25–26; questão autoral.",
    "text": "Uma auditoria constata que o manual de uma unidade prevê segregação entre quem cadastra e quem aprova contratos, mas o sistema permite que o mesmo usuário faça as duas operações, e isso ocorreu em vários casos. Quanto ao controle, conclui-se que",
    "options": [
      "está desenhado, mas não implementado ou não operando como previsto.",
      "está em pleno funcionamento, pois consta do manual aprovado.",
      "torna o risco residual nulo, porque a regra existe formalmente.",
      "é detectivo, porque o manual permite descobrir a falha depois.",
      "deixa de ser necessário, já que nenhum controle oferece segurança absoluta."
    ],
    "answer": 0,
    "comments": [
      "Correta. Previsão formal, implantação no sistema e funcionamento efetivo são planos distintos; os casos encontrados mostram que a segregação não opera.",
      "A existência da norma não demonstra funcionamento; a evidência mostra o contrário.",
      "Controle que não opera não reduz a exposição; o residual não pode ser zerado por formalidade.",
      "A segregação é preventiva por desenho; o manual não detecta nada sozinho.",
      "Segurança razoável reconhece limites, mas não dispensa controle nem autoriza tolerar falha conhecida."
    ]
  },
  {
    "id": "ei-02-q05",
    "section": "controles",
    "source": "Aula 01, pp. 25–27; questão autoral.",
    "text": "Para pagamentos de diárias, uma secretaria adota: (1) bloqueio no sistema sem ato de autorização anexado; (2) relatório mensal de diárias pagas em fins de semana, examinado pela chefia; (3) rotina de cobrança e devolução de valores pagos indevidamente. Pelo momento de atuação, os controles são, respectivamente,",
    "options": [
      "detectivo, preventivo e corretivo.",
      "preventivo, corretivo e detectivo.",
      "corretivo, detectivo e preventivo.",
      "preventivo, preventivo e corretivo.",
      "preventivo, detectivo e corretivo."
    ],
    "answer": 4,
    "comments": [
      "O bloqueio atua antes do pagamento; não é detecção.",
      "O relatório revela ocorrências; quem recupera valores é a rotina de cobrança.",
      "Inverte a ordem: o bloqueio é anterior ao evento e a devolução é posterior.",
      "O relatório examina pagamentos já feitos; é detectivo.",
      "Correta. O bloqueio impede o evento; o relatório revela ocorrências (e só vale se alguém analisar e agir); a cobrança reduz a consequência e recupera valores."
    ]
  },
  {
    "id": "ei-02-q06",
    "section": "controles",
    "source": "Aula 01, pp. 26–27 e questão IGEPP 58 como referência temática; questão autoral.",
    "text": "Depois de implantar cópia de segurança diária e testar a restauração dos dados, a equipe reclassifica o risco de 'perda de dados por falha no servidor', reduzindo a probabilidade de falha. A reclassificação é",
    "options": [
      "correta, porque todo controle implantado reduz as duas dimensões do risco.",
      "inadequada, porque a medida atua sobre a consequência da falha e não, por si, sobre sua probabilidade.",
      "correta, porque o risco residual passa a ser igual ao inerente.",
      "inadequada, porque controles implantados não alteram a avaliação de riscos.",
      "correta, desde que o custo da solução tenha sido alto."
    ],
    "answer": 1,
    "comments": [
      "Cada controle atua por um mecanismo; recuperar dados não impede o servidor de falhar.",
      "Correta. Backup testado reduz o impacto (perda e tempo de recuperação); a frequência de falha do servidor depende de outras causas.",
      "Se o controle funciona, o residual fica abaixo do inerente na dimensão afetada; não se igualam.",
      "Controles em operação devem ser considerados na avaliação do risco residual.",
      "Custo não prova efeito sobre a exposição."
    ]
  },
  {
    "id": "ei-02-q07",
    "section": "mensuracao",
    "source": "Aula 01, pp. 27–29; questão autoral.",
    "text": "Numa matriz de riscos, um evento recebe probabilidade 2 e impacto 5. Um gestor conclui que há 20% de chance de ocorrência e que a perda será cinco vezes maior que a de um evento de impacto 1. Essa leitura",
    "options": [
      "está correta, porque pesos de escala são convertidos diretamente em percentuais e valores.",
      "está correta quanto à probabilidade, mas não quanto ao impacto.",
      "confunde pesos ordinais de classificação com medidas estatísticas e monetárias.",
      "está correta se a matriz usar escalas simétricas de 1 a 5.",
      "dispensa justificativa, porque o produto dos pesos já expressa a perda esperada."
    ],
    "answer": 2,
    "comments": [
      "Os pesos não têm conversão universal; seu significado depende da metodologia.",
      "Nem a probabilidade nem o impacto se convertem automaticamente.",
      "Correta. A pontuação serve para ordenar exposições; não é probabilidade nem valor em reais, e precisa de justificativa e de declaração de limites dos dados.",
      "A simetria da escala não transforma pesos em medidas exatas.",
      "O produto ordena, não mede perda esperada, e exige exame qualitativo."
    ]
  },
  {
    "id": "ei-02-q08",
    "section": "mensuracao",
    "source": "Aula 01, pp. 27–29 (escala do Guia do PGR, 6ª versão, conforme a apostila); questão autoral.",
    "text": "Usando a escala do Guia do PGR baiano citada pela apostila (probabilidade 1 a 5; impacto 1, 3, 5, 7 ou 10; baixo < 5; médio de 5 a menos de 10; alto de 10 a menos de 28; extremo a partir de 28), um risco com probabilidade 1 e impacto 10 é classificado como",
    "options": [
      "baixo, porque a probabilidade é a menor possível.",
      "médio, porque fica abaixo de 28.",
      "extremo, porque o impacto é o máximo da escala.",
      "indeterminado, porque impactos máximos exigem análise apenas qualitativa.",
      "alto, porque o produto 10 já pertence à faixa alta."
    ],
    "answer": 4,
    "comments": [
      "A classificação combina as duas dimensões; probabilidade mínima não basta.",
      "A faixa média termina antes de 10.",
      "A faixa decorre do produto, não do peso isolado do impacto.",
      "A escala trata todos os pesos pelo produto; a análise qualitativa complementa, não substitui.",
      "Correta. 1 × 10 = 10, limite inferior incluído na faixa alta."
    ]
  },
  {
    "id": "ei-02-q09",
    "section": "respostas",
    "source": "Aula 01, pp. 29–31; questão autoral.",
    "text": "Uma escola estadual de tempo integral identifica risco de acidentes no deslocamento dos alunos em transporte contratado. Considerando as respostas ao risco no setor público, é correto afirmar que",
    "options": [
      "evitar o risco significa suspender a oferta do transporte, pois a Administração pode abandonar qualquer atividade arriscada.",
      "contratar seguro de acidentes transfere à seguradora toda a responsabilidade da Administração pelo serviço.",
      "aceitar o risco autoriza deixar de fiscalizar o contrato, já que a exposição é conhecida.",
      "exigir vistoria periódica dos veículos e motoristas habilitados mitiga o risco, e o seguro pode compartilhar parte dos efeitos financeiros.",
      "exigir vistoria periódica elimina o risco residual, dispensando monitoramento."
    ],
    "answer": 3,
    "comments": [
      "Obrigação de prestar não pode ser simplesmente abandonada; evita-se a forma insegura de execução.",
      "Seguro compartilha efeitos financeiros cobertos; não transfere o dever de acompanhar nem restitui a segurança dos alunos.",
      "Aceitar exige critério, autoridade, registro e monitoramento; não legitima omissão.",
      "Correta. Vistoria e habilitação atuam sobre causas (mitigação); o seguro compartilha parte das consequências financeiras. As respostas se combinam.",
      "Nenhum controle zera o risco; o residual continua sujeito a monitoramento."
    ]
  },
  {
    "id": "ei-02-q10",
    "section": "plano",
    "source": "Aula 01, pp. 32–34; questão autoral.",
    "text": "O plano de tratamento de um risco de atraso no pagamento a fornecedores indica: medida 'automatizar a conferência de notas'; responsável, a equipe de TI; prazo, junho. Em dezembro, a ação consta como concluída. Para afirmar que o risco foi reduzido, falta principalmente",
    "options": [
      "evidência de efeito, como a evolução dos prazos de pagamento depois da automação.",
      "transferir a propriedade do risco para a equipe de TI, que executou a ação.",
      "encerrar o monitoramento, já que a ação foi concluída no prazo.",
      "reclassificar o risco como aceito, porque houve investimento.",
      "nova aprovação do dirigente, que substitui a verificação de resultados."
    ],
    "answer": 0,
    "comments": [
      "Correta. Concluir a ação prova execução; a redução do risco exige indicador de efeito, interpretado com cuidado (demanda, outros fatores).",
      "Quem executa a ação pode ser diferente do proprietário do risco, que continua respondendo pela exposição.",
      "Monitoramento acompanha também o funcionamento do controle e mudanças de contexto.",
      "Aceitar é decisão consciente sobre exposição remanescente, não consequência de gasto.",
      "Aprovação não substitui evidência de funcionamento e de efeito."
    ]
  },
  {
    "id": "ei-02-q11",
    "section": "papeis",
    "source": "Aula 01, pp. 34–35; slides Partes 05 e 06; questão autoral.",
    "text": "Na organização dos papéis em gestão de riscos, a auditoria interna",
    "options": [
      "deve escolher e executar diariamente os controles das áreas, por ser a mais especializada.",
      "fornece avaliação independente sobre a gestão de riscos, sem assumir a operação cotidiana dos controles.",
      "é a primeira linha, porque atua diretamente nos processos operacionais.",
      "substitui a alta administração na definição da política de gestão de riscos.",
      "dispensa as áreas de conformidade, porque concentra todas as funções de controle."
    ],
    "answer": 1,
    "comments": [
      "Isso comprometeria a responsabilidade da gestão e a independência da avaliação.",
      "Correta. No modelo de três linhas, a auditoria interna avalia de forma independente; a gestão opera os controles e a segunda linha apoia e monitora.",
      "A primeira linha é a gestão operacional; a auditoria interna é a terceira.",
      "Política, direção e recursos cabem à alta administração e à governança.",
      "Funções de segunda linha apoiam a gestão; a auditoria não as absorve."
    ]
  },
  {
    "id": "ei-02-q12",
    "section": "ferramentas",
    "source": "Slides Partes 08–10; questão autoral.",
    "text": "Para estimar riscos de um novo programa estadual sem histórico, a coordenação consulta especialistas de várias áreas, que respondem individualmente e sem identificação a questionários sucessivos, recebendo a cada rodada a síntese das respostas anteriores, até que as opiniões convirjam. A técnica descrita é",
    "options": [
      "brainstorming.",
      "matriz GUT.",
      "técnica Delphi.",
      "análise bow-tie.",
      "análise de Pareto."
    ],
    "answer": 2,
    "comments": [
      "Brainstorming é discussão em grupo, presencial e com interação aberta.",
      "GUT prioriza problemas por gravidade, urgência e tendência; não organiza consulta a especialistas.",
      "Correta. Delphi busca consenso de especialistas por rodadas anônimas, sem reunião.",
      "Bow-tie mapeia causas, evento e consequências com suas barreiras.",
      "Pareto concentra atenção nas poucas causas responsáveis pela maior parte dos efeitos."
    ]
  },
  {
    "id": "ei-02-q13",
    "section": "pgr-bahia",
    "source": "Aula 01, pp. 35–37 (Portaria SEFAZ 162/2018 e OT AGE 01/2023, rev. 2, conforme a apostila); questão autoral.",
    "text": "Uma secretaria aderiu ao Programa de Gestão de Riscos da Bahia. Segundo a disciplina estadual descrita na apostila, é correto afirmar que",
    "options": [
      "a adesão é obrigatória para todos os órgãos da administração direta.",
      "o grupo de trabalho é permanente e aprova o plano de ação no lugar do dirigente.",
      "a AGE passa a executar as ações do plano, liberando a unidade da responsabilidade pelo processo.",
      "a adesão suspende qualquer fiscalização sobre o órgão enquanto houver medida pendente.",
      "o comitê de gestão de riscos é permanente, os grupos de trabalho são temporários e a aprovação do plano cabe ao dirigente máximo."
    ],
    "answer": 4,
    "comments": [
      "A portaria prevê adesão voluntária.",
      "O GT é temporário e faz o trabalho técnico; quem aprova é o dirigente máximo.",
      "A AGE coordena, orienta e acompanha; a responsabilidade pelo processo continua na unidade.",
      "A suspensão alcança certos trabalhos da AGE, tem limite temporal e admite exceções, como denúncias.",
      "Correta. CGR permanente valida e articula; GT temporário executa a análise; dirigente aprova."
    ]
  },
  {
    "id": "ei-02-q14",
    "section": "respostas",
    "source": "Aula 01, p. 31; questão autoral.",
    "text": "Para reduzir o risco de fraude em requerimentos, um órgão passa a exigir comparecimento presencial de todos os requerentes na capital. A análise de proporcionalidade dessa medida deve considerar, sobretudo,",
    "options": [
      "apenas o custo financeiro da medida para o órgão.",
      "que medidas mais rígidas são sempre mais eficazes contra fraude.",
      "que a fraude, por ser risco de integridade, justifica qualquer restrição de acesso.",
      "os efeitos sobre os usuários, como exclusão de quem vive longe, e alternativas que protejam o objetivo com menor ônus.",
      "que a medida dispensa monitoramento, pois retira a etapa digital."
    ],
    "answer": 3,
    "comments": [
      "Proporcionalidade inclui tempo, esforço, acesso e efeitos distributivos, não só dinheiro.",
      "O controle mais complexo nem sempre é o mais eficaz e pode criar novas falhas.",
      "Gravidade do risco não autoriza qualquer medida; é preciso pesar efeitos sobre direitos.",
      "Correta. A resposta pode gerar risco secundário (exclusão de usuários do interior); devem ser examinadas alternativas, como validação documental ou atendimento regional.",
      "Toda resposta segue sujeita a monitoramento, inclusive de seus efeitos colaterais."
    ]
  }
];
const key='eppgg-ei-02-v1';
let state={module:'ei-02',version:1, answers:{}, confidence:{}, checked:[], explanation:'', updated:null};
const message=document.querySelector('#storage-message');
function valid(s){return s && s.module==='ei-02' && s.version===1 && typeof s.answers==='object' && s.answers!==null && typeof s.confidence==='object' && s.confidence!==null && Array.isArray(s.checked) && typeof s.explanation==='string' && s.explanation.length<=20000 && questions.every(q=>(s.answers[q.id]===undefined || Number.isInteger(s.answers[q.id])&&s.answers[q.id]>=0&&s.answers[q.id]<5)&&(s.confidence[q.id]===undefined||['alta','media','baixa'].includes(s.confidence[q.id]))) && s.checked.every(id=>questions.some(q=>q.id===id)&&Number.isInteger(s.answers[id]));}
try{const data=JSON.parse(localStorage.getItem(key));if(valid(data))state=data;}catch{if(message)message.textContent='Armazenamento indisponível. Exporte suas respostas antes de sair.';}
function save(){state.updated=new Date().toISOString();try{localStorage.setItem(key,JSON.stringify(state));}catch{if(message)message.textContent='Não foi possível salvar neste navegador. Use Exportar respostas.';}}
const host=document.querySelector('#quiz');
function render(){
 if(!host)return;
 host.replaceChildren();
 questions.forEach((q,i)=>{
  const card=document.createElement('section');card.className='question';
  const checked=state.checked.includes(q.id);
  card.innerHTML=`<p class="eyebrow">Questão ${i+1} · autoral</p><fieldset><legend>${q.text}</legend>${q.options.map((o,j)=>`<label class="option"><input type="radio" name="${q.id}" value="${j}" ${state.answers[q.id]===j?'checked':''} ${checked?'disabled':''}> <span><b>${'ABCDE'[j]}.</b> ${o}</span></label>`).join('')}</fieldset><label class="confidence">Minha segurança <select ${checked?'disabled':''}><option value="">Selecione</option><option value="alta">Alta</option><option value="media">Média</option><option value="baixa">Baixa</option></select></label><button type="button" ${checked?'disabled':''}>${checked?'Resposta corrigida':'Conferir resposta'}</button><div class="feedback" aria-live="polite"></div>`;
  card.querySelector('select').value=state.confidence[q.id]||'';
  card.querySelectorAll('input').forEach(input=>input.addEventListener('change',()=>{state.answers[q.id]=Number(input.value);save();progress();}));
  card.querySelector('select').addEventListener('change',e=>{if(e.target.value)state.confidence[q.id]=e.target.value;else delete state.confidence[q.id];save();});
  card.querySelector('button').addEventListener('click',()=>{
   if(state.answers[q.id]===undefined||!state.confidence[q.id]){card.querySelector('.feedback').textContent='Escolha uma alternativa e informe sua segurança antes de conferir.';return;}
   state.checked.push(q.id);save();render();
  });
  if(checked){card.querySelector('.feedback').innerHTML=`<h3>${state.answers[q.id]===q.answer?'Acerto':'Revisar'} · gabarito ${'ABCDE'[q.answer]}</h3><ul>${q.comments.map((c,j)=>`<li><b>${'ABCDE'[j]}:</b> ${c}</li>`).join('')}</ul><p><a href="index.html#${q.section}">Rever este assunto no módulo</a></p><p class="meta">Base: ${q.source}</p>`;}
  host.append(card);
 });
 progress();
}
function progress(){const el=document.querySelector('#progress');if(!el)return;const answered=questions.filter(q=>state.answers[q.id]!==undefined).length;const correct=questions.filter(q=>state.checked.includes(q.id)&&state.answers[q.id]===q.answer).length;el.textContent=`${answered}/${questions.length} respondidas · ${state.checked.length} corrigidas · ${correct} acertos nas corrigidas`;}
render();
const explanation=document.querySelector('#explanation');if(explanation){explanation.value=state.explanation;explanation.addEventListener('input',()=>{state.explanation=explanation.value;save();});}
document.querySelector('#export')?.addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='eppgg-ei-02-respostas.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
document.querySelector('#import')?.addEventListener('change',async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>100000)throw Error();const data=JSON.parse(await f.text());if(!valid(data))throw Error();if(!confirm('Substituir as respostas deste navegador pelas do arquivo?'))return;state={module:'ei-02',version:1,answers:data.answers,confidence:data.confidence,checked:[...new Set(data.checked)],explanation:data.explanation,updated:data.updated};save();render();if(explanation)explanation.value=state.explanation;message.textContent='Respostas importadas. Não foram enviadas a um servidor.';}catch{message.textContent='Arquivo inválido. Use um arquivo exportado por este módulo.';}finally{e.target.value='';}});
document.querySelector('#reset')?.addEventListener('click',()=>{if(!confirm('Iniciar uma nova tentativa? Exporte antes se quiser guardar a atual.'))return;state={module:'ei-02',version:1,answers:{},confidence:{},checked:[],explanation:'',updated:null};save();render();if(explanation)explanation.value='';});
