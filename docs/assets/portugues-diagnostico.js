'use strict';
const questions = [
  {
    "id": "pt-d01-q01",
    "topic": "Concordância nominal",
    "skill": "Referente do adjetivo",
    "text": "Uma nota hipotética da SAEB contém: ‘A conferência dos comprovantes foi cuidadosa’. Ao trocar apenas comprovantes por declarações, qual redação preserva a concordância e a referência do adjetivo?",
    "options": [
      "A conferência das declarações foi cuidadosas.",
      "A conferência das declarações foi cuidadosa.",
      "A conferência das declarações foi cuidadosos.",
      "A conferência das declarações foi cuidadoso.",
      "A conferência das declarações foi cuidados."
    ],
    "answer": 1,
    "comments": [
      "Cuidadosas concordaria com declarações, mas o predicativo caracteriza a conferência, singular.",
      "Correta. O núcleo do sujeito continua sendo conferência, feminino singular. A mudança no complemento não altera essa referência.",
      "O masculino plural não concorda com conferência; a proximidade de um plural não determina a flexão.",
      "O singular está adequado, mas o gênero precisa acompanhar conferência: cuidadosa.",
      "Cuidados não é a flexão do adjetivo cuidadoso adequada a conferência. A redação não preserva a estrutura proposta."
    ]
  },
  {
    "id": "pt-d01-q02",
    "topic": "Concordância nominal",
    "skill": "Quantidade e intensidade",
    "text": "Complete a mensagem segundo a norma-padrão: ‘Recebemos ___ solicitações, mas as orientações ainda estavam ___ confusas’. Pretende-se dizer muitas solicitações e um pouco confusas.",
    "options": [
      "bastante / meias",
      "bastantes / meias",
      "bastante / meio",
      "bastantes / meio",
      "bastantes / meia"
    ],
    "answer": 3,
    "comments": [
      "Bastante precisa ir ao plural ao quantificar solicitações como muitas; meio não varia quando atenua confusas.",
      "Bastantes está adequado, mas meias faria uma flexão indevida do advérbio meio.",
      "Meio está adequado. Bastante, no sentido de muitas solicitações, deve ser bastantes.",
      "Correta. Bastantes quantifica o substantivo; meio modifica o adjetivo, com sentido de um pouco, e permanece invariável.",
      "Meia indica metade em usos como meia página. Aqui a função é adverbial: meio confusas."
    ]
  },
  {
    "id": "pt-d01-q03",
    "topic": "Concordância nominal",
    "skill": "Adjetivo versus locução",
    "text": "Uma mensagem usa ‘As fotografias anexas mostram o defeito’; outra usa ‘Encaminho as fotografias em anexo’. A avaliação correta é:",
    "options": [
      "As duas são adequadas: anexas concorda com fotografias; em anexo permanece invariável.",
      "Só a primeira é adequada: a segunda exige em anexas.",
      "Só a segunda é adequada: anexo nunca varia.",
      "As duas são inadequadas porque fotografias exige anexos.",
      "As duas são adequadas porque anexo concorda com a pessoa que envia a mensagem."
    ],
    "answer": 0,
    "comments": [
      "Correta. Na primeira, há um adjetivo ligado a fotografias; na segunda, a locução em anexo, invariável.",
      "A locução não recebe a flexão do substantivo: escreve-se em anexo.",
      "O adjetivo anexo varia. Fotografias anexas é uma concordância regular.",
      "Fotografias é feminino plural; como adjetivo, a forma seria anexas, não anexos.",
      "O remetente não controla essas formas. O contraste é entre adjetivo referido às fotografias e locução invariável."
    ]
  },
  {
    "id": "pt-d01-q04",
    "topic": "Concordância nominal",
    "skill": "Predicativo de conjunto",
    "text": "O parecer técnico avalia conjuntamente um cadastro e uma ficha, ambos já atualizados. Complete: ‘O cadastro e a ficha estavam ___’. Qual forma realiza a concordância normativa do predicativo com todo esse sujeito composto?",
    "options": [
      "atualizada",
      "atualizado",
      "atualizadas",
      "atualizáveis",
      "atualizados"
    ],
    "answer": 4,
    "comments": [
      "O feminino singular não expressa a concordância do predicativo com todo o sujeito composto anteposto.",
      "O masculino singular não acompanha o número do conjunto.",
      "O conjunto reúne substantivos de gêneros diferentes; nessa referência conjunta, emprega-se masculino plural.",
      "Atualizáveis concorda em número, mas significa que podem ser atualizados. Não informa que a atualização já ocorreu, como exige o enunciado.",
      "Correta. O predicativo referente ao conjunto cadastro e ficha fica no masculino plural e mantém a informação de atualização concluída."
    ]
  },
  {
    "id": "pt-d01-q05",
    "topic": "Concordância nominal",
    "skill": "Sujeito nominal e oracional",
    "text": "Qual par está adequado à norma-padrão?",
    "options": [
      "É necessária apresentar a identificação. / É necessário a apresentação da identificação.",
      "É necessário apresentar a identificação. / É necessário a apresentação da identificação.",
      "É necessário apresentar a identificação. / É necessária a apresentação da identificação.",
      "É necessárias apresentar a identificação. / É necessária a apresentação da identificação.",
      "É necessária apresentar a identificação. / É necessárias a apresentação da identificação."
    ],
    "answer": 2,
    "comments": [
      "Na primeira, o sujeito é a oração apresentar a identificação: necessário. Na segunda, a apresentação é um grupo nominal feminino: necessária.",
      "A primeira está adequada; a segunda exige necessária, concordando com a apresentação.",
      "Correta. A oração de infinitivo recebe necessário; o sujeito nominal determinado a apresentação exige necessária.",
      "A oração de infinitivo não exige feminino plural. Emprega-se é necessário apresentar.",
      "A primeira flexiona indevidamente o predicativo do sujeito oracional; a segunda põe no plural o predicativo de apresentação, singular."
    ]
  },
  {
    "id": "pt-d01-q06",
    "topic": "Concordância nominal",
    "skill": "Particípio e estrutura verbal",
    "text": "Complete: ‘As gestoras tinham ___ as propostas. Ao fim da reunião, as propostas estavam ___’. Use conferir e aprovar, respectivamente.",
    "options": [
      "conferidas / aprovado",
      "conferidas / aprovadas",
      "conferido / aprovado",
      "conferido / aprovadas",
      "conferidos / aprovadas"
    ],
    "answer": 3,
    "comments": [
      "Com tinham, o particípio fica invariável: conferido. Na segunda oração, aprovadas concorda com propostas.",
      "Aprovadas está adequada; tinham conferidas não é a formação do tempo composto solicitado.",
      "Conferido está adequado. O estado atribuído às propostas deve ser expresso por aprovadas.",
      "Correta. Tinham conferido é tempo composto com ter; estavam aprovadas apresenta particípio ligado a propostas, feminino plural.",
      "O plural de gestoras não flexiona o particípio do tempo composto com ter: tinham conferido."
    ]
  },
  {
    "id": "pt-d01-q07",
    "topic": "Acentuação",
    "skill": "Identificar a regra",
    "text": "Qual par recebe acento pela mesma regra — a das proparoxítonas — sem depender da análise de ditongo crescente final?",
    "options": [
      "café / técnico",
      "técnico / público",
      "saúde / país",
      "fácil / também",
      "papéis / público"
    ],
    "answer": 1,
    "comments": [
      "Café é oxítona terminada em e; técnico é proparoxítona. São justificativas diferentes.",
      "Correta. Téc-ni-co e pú-bli-co têm tonicidade na antepenúltima sílaba. Todas as proparoxítonas recebem acento.",
      "Saúde e país recebem acento pelo hiato com u ou i tônico nas condições da regra, não por serem proparoxítonas.",
      "Fácil é paroxítona terminada em l; também é oxítona terminada em em.",
      "Papéis é oxítona com ditongo aberto final; público é proparoxítona."
    ]
  },
  {
    "id": "pt-d01-q08",
    "topic": "Acentuação",
    "skill": "Hiato e condições da regra",
    "text": "Uma revisão compara raiz e raízes. Qual explicação é correta?",
    "options": [
      "O acento é uma marca geral de plural em qualquer substantivo terminado em z.",
      "Raiz não tem vogal tônica, enquanto raízes tem.",
      "Raízes é proparoxítona, por isso recebe acento.",
      "Em raízes, ai forma um ditongo aberto que não existia no singular.",
      "Em ra-iz, o i tônico divide a sílaba com z; em ra-í-zes, fica sozinho, permitindo o acento pela regra do hiato."
    ],
    "answer": 4,
    "comments": [
      "Não há regra geral de acento para plurais terminados em zes: compare vezes. É preciso analisar a estrutura silábica.",
      "O i já é tônico em raiz. A falta de acento gráfico não significa falta de tonicidade.",
      "Ra-í-zes é paroxítona, com tonicidade na penúltima sílaba. O fundamento é o hiato.",
      "As vogais permanecem em sílabas diferentes, não formando ditongo.",
      "Correta. A mudança da divisão silábica coloca o i tônico sozinho na sílaba no plural; no singular, z impede a aplicação dessa regra."
    ]
  },
  {
    "id": "pt-d01-q09",
    "topic": "Acentuação",
    "skill": "Ditongos abertos e grafia vigente",
    "text": "Qual sequência está inteiramente de acordo com a ortografia vigente?",
    "options": [
      "ideia / heroico / herói",
      "idéia / heroico / herói",
      "ideia / heróico / herói",
      "ideia / heroico / heroi",
      "idéia / heróico / heroi"
    ],
    "answer": 0,
    "comments": [
      "Correta. Ideia e heroico são paroxítonas cujo ei ou oi tônico não recebe o antigo agudo; herói conserva o acento no ditongo aberto tônico final.",
      "Ideia perdeu o agudo: o ditongo aberto ei está na sílaba tônica de uma paroxítona.",
      "Heroico não conserva o agudo em oi tônico na paroxítona.",
      "Herói mantém o agudo: a supressão nas paroxítonas não se aplica a essa oxítona.",
      "Ideia e heroico dispensam os agudos antigos; herói exige o acento que a alternativa omite."
    ]
  },
  {
    "id": "pt-d01-q10",
    "topic": "Acentuação",
    "skill": "Acento diferencial e tempo",
    "text": "Complete, respeitando os tempos explicitados: ‘Ontem, por falta de conexão, a analista não ___ enviar o arquivo; agora ela ___ concluir a transmissão’. Empregue poder no pretérito perfeito e no presente, respectivamente.",
    "options": [
      "pode / pode",
      "pode / pôde",
      "pôde / pode",
      "pôde / pôde",
      "póde / pode"
    ],
    "answer": 2,
    "comments": [
      "O primeiro verbo deve indicar o pretérito perfeito: pôde, com circunflexo.",
      "As formas foram invertidas: ontem pede pôde; o presente pedido é pode.",
      "Correta. Pôde marca a terceira pessoa do singular no pretérito perfeito; pode é a forma do presente. O diferencial foi mantido.",
      "A segunda forma deve ser a do presente: pode.",
      "O sinal usado em pôde é circunflexo, não agudo. Póde não é a grafia normativa dessa forma."
    ]
  },
  {
    "id": "pt-d01-q11",
    "topic": "Acentuação",
    "skill": "Número e formas de ter/vir/ver",
    "text": "Complete: ‘Os setores ___ seus cadastros; quando os técnicos ___ à reunião, eles ___ os dados na tela’. Use manter, vir e ver, todos no presente do indicativo.",
    "options": [
      "mantém / vêm / veem",
      "mantêm / veem / vêm",
      "mantêm / vem / veem",
      "mantêm / vêm / veem",
      "mantêm / vêm / vêem"
    ],
    "answer": 3,
    "comments": [
      "Mantém é singular; o sujeito os setores exige mantêm.",
      "Vêm corresponde a vir e veem a ver. A alternativa troca os verbos pedidos nas duas últimas lacunas.",
      "Vem é singular. Os técnicos exige vêm, com circunflexo.",
      "Correta. Mantêm e vêm marcam formas plurais de manter e vir; veem é o plural de ver, sem o antigo circunflexo em ee.",
      "Vêem é grafia anterior à mudança ortográfica. A forma atual é veem."
    ]
  },
  {
    "id": "pt-d01-q12",
    "topic": "Acentuação",
    "skill": "Flexão e reavaliação da terminação",
    "text": "Um revisor troca o singular hífen pelo plural hifens. Como avaliar a ausência do acento nessa forma plural?",
    "options": [
      "Está errada, porque toda palavra derivada ou flexionada conserva o acento da base.",
      "Está correta: hífen é paroxítona terminada em n; hifens é paroxítona terminada em ens e não conserva essa marca.",
      "Está correta, porque hifens se tornou oxítona.",
      "Está errada, porque todo plural terminado em ens exige acento.",
      "Está correta apenas porque nomes de sinais gráficos nunca recebem acento no plural."
    ],
    "answer": 1,
    "comments": [
      "A forma flexionada precisa ser reavaliada. A manutenção do acento da base não é automática.",
      "Correta. Mudou a terminação relevante para a regra, sem mudança da posição tônica. Hífenes, outro plural admitido, é proparoxítona; sua existência não torna hifens incorreto.",
      "Hifens continua paroxítona. Não há deslocamento da tonicidade para a última sílaba.",
      "O critério também depende da posição tônica: armazéns é oxítona; hifens é paroxítona.",
      "A regra depende da estrutura da palavra, não de ela nomear um sinal gráfico."
    ]
  }
];
const key='eppgg-pt-d01-v1';
let state={module:'pt-d01',version:1, answers:{}, confidence:{}, checked:[], explanation:'', updated:null};
const message=document.querySelector('#storage-message');
function valid(s){return s && s.module==='pt-d01' && s.version===1 && typeof s.answers==='object' && s.answers!==null && typeof s.confidence==='object' && s.confidence!==null && Array.isArray(s.checked) && (s.checked.length===0 || (s.checked.length===questions.length && new Set(s.checked).size===questions.length && questions.every(q=>["alta","media","baixa"].includes(s.confidence[q.id])))) && typeof s.explanation==='string' && s.explanation.length<=20000 && questions.every(q=>(s.answers[q.id]===undefined || Number.isInteger(s.answers[q.id])&&s.answers[q.id]>=0&&s.answers[q.id]<5)&&(s.confidence[q.id]===undefined||['alta','media','baixa'].includes(s.confidence[q.id]))) && s.checked.every(id=>questions.some(q=>q.id===id)&&Number.isInteger(s.answers[id]));}
try{const data=JSON.parse(localStorage.getItem(key));if(valid(data))state=data;}catch{if(message)message.textContent='Armazenamento indisponível. Exporte suas respostas antes de sair.';}
function save(){state.updated=new Date().toISOString();try{localStorage.setItem(key,JSON.stringify(state));}catch{if(message)message.textContent='Não foi possível salvar neste navegador. Use Exportar respostas.';}}
const host=document.querySelector('#quiz');
function render(){
 const notice=document.querySelector('#diagnostic-message'); if(notice)notice.textContent=state.checked.length===questions.length?'Diagnóstico corrigido. Comentários liberados; você pode exportar suas respostas.':'A correção será liberada após as 12 respostas e indicações de segurança.';

 const status=document.querySelector("#areas"); if(status)status.textContent=state.checked.length===questions.length ? ["Concordância nominal","Acentuação"].map(t=>{const group=questions.filter(q=>q.topic===t);return `${t}: ${group.filter(q=>state.answers[q.id]===q.answer).length}/${group.length} acertos`;}).join(" · ")+". Analise também a segurança e a justificativa; não é uma classificação de domínio." : "";
 if(!host)return;
 host.replaceChildren();
 questions.forEach((q,i)=>{
  const card=document.createElement('section');card.className='question';
  const checked=state.checked.includes(q.id);
  card.innerHTML=`<p class="eyebrow">Questão ${i+1} · ${q.topic} · autoral</p><fieldset><legend>${q.text}</legend>${q.options.map((o,j)=>`<label class="option"><input type="radio" name="${q.id}" value="${j}" ${state.answers[q.id]===j?'checked':''} ${checked?'disabled':''}> <span><b>${'ABCDE'[j]}.</b> ${o}</span></label>`).join('')}</fieldset><label class="confidence">Minha segurança <select ${checked?'disabled':''}><option value="">Selecione</option><option value="alta">Alta</option><option value="media">Média</option><option value="baixa">Baixa</option></select></label><div class="feedback" aria-live="polite"></div>`;
  card.querySelector('select').value=state.confidence[q.id]||'';
  card.querySelectorAll('input').forEach(input=>input.addEventListener('change',()=>{state.answers[q.id]=Number(input.value);save();progress();}));
  card.querySelector('select').addEventListener('change',e=>{if(e.target.value)state.confidence[q.id]=e.target.value;else delete state.confidence[q.id];save();});
  if(checked){card.querySelector('.feedback').innerHTML=`<h3>${state.answers[q.id]===q.answer?'Acerto':'Revisar'} · gabarito ${'ABCDE'[q.answer]}</h3><ul>${q.comments.map((c,j)=>`<li><b>${'ABCDE'[j]}:</b> ${c}</li>`).join('')}</ul>`;}
  host.append(card);
 });
 progress();
}
function progress(){const el=document.querySelector('#progress');if(!el)return;const answered=questions.filter(q=>state.answers[q.id]!==undefined).length;const correct=questions.filter(q=>state.checked.includes(q.id)&&state.answers[q.id]===q.answer).length;el.textContent=`${answered}/${questions.length} respondidas · ${state.checked.length} corrigidas · ${correct} acertos nas corrigidas`;}
render();
const explanation=document.querySelector('#explanation');if(explanation){explanation.value=state.explanation;explanation.addEventListener('input',()=>{state.explanation=explanation.value;save();});}
document.querySelector('#export')?.addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='eppgg-portugues-diagnostico-respostas.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
document.querySelector('#import')?.addEventListener('change',async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>100000)throw Error();const data=JSON.parse(await f.text());if(!valid(data))throw Error();if(!confirm('Substituir as respostas deste navegador pelas do arquivo?'))return;state={module:'pt-d01',version:1,answers:data.answers,confidence:data.confidence,checked:[...new Set(data.checked)],explanation:data.explanation,updated:data.updated};save();render();if(explanation)explanation.value=state.explanation;message.textContent='Respostas importadas. Não foram enviadas a um servidor.';}catch{message.textContent='Arquivo inválido. Use um arquivo exportado por este módulo.';}finally{e.target.value='';}});
document.querySelector('#reset')?.addEventListener('click',()=>{if(!confirm('Iniciar uma nova tentativa? Exporte antes se quiser guardar a atual.'))return;state={module:'pt-d01',version:1,answers:{},confidence:{},checked:[],explanation:'',updated:null};save();render();if(explanation)explanation.value='';document.querySelector('#diagnostic-message').textContent='Nova tentativa: responda às 12 questões antes de corrigir.';});

document.querySelector('#correct-all')?.addEventListener('click',()=>{
 const notice=document.querySelector('#diagnostic-message');
 if(!questions.every(q=>Number.isInteger(state.answers[q.id])&&state.confidence[q.id])){notice.textContent='Selecione as 12 respostas e a segurança de cada uma antes de corrigir. Você pode continuar depois.';return;}
 state.checked=questions.map(q=>q.id);save();render();notice.textContent='Comentários liberados. Exporte as respostas quando quiser compartilhar com o tutor.';
});
