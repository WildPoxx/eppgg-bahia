'use strict';
const questions = [
  {
    "id": "pt-01-q01",
    "text": "Tese — A posição defendida no conjunto do texto é que:",
    "options": [
      "O aumento de concluintes é suficiente para comprovar a melhora do atendimento.",
      "A emissão de certificados deve ser abandonada como registro da capacitação.",
      "O crescimento de concluintes é relevante, mas avaliar a contribuição ao serviço exige examinar também a aplicação no trabalho.",
      "A qualidade do atendimento pode ser avaliada pela comparação entre turmas diurnas e noturnas, sem outras informações.",
      "A ausência de avaliação da aplicação demonstra que a capacitação fracassou."
    ],
    "answer": 2,
    "comments": [
      "transforma um indicador de conclusão em prova suficiente de melhora do serviço, posição que o texto questiona.",
      "exagera a crítica. O texto considera contar certificados um começo; não propõe abandonar o registro.",
      "conserva as duas partes da tese: reconhecer o avanço e exigir exame da aplicação no trabalho.",
      "introduz um método de comparação que o texto não propõe e o trata como suficiente.",
      "confunde ausência de avaliação com evidência de fracasso."
    ]
  },
  {
    "id": "pt-01-q02",
    "text": "Limite da inferência — Sobre o aumento registrado em outubro, é correto concluir que:",
    "options": [
      "A turma noturna foi a única responsável pelo crescimento de concluintes.",
      "A divulgação contribuiu mais para o crescimento que a mudança de horário.",
      "As duas mudanças contribuíram exatamente na mesma proporção.",
      "A turma noturna não contribuiu para o crescimento, pois houve divulgação simultânea.",
      "Houve aumento de concluintes, mas os registros apresentados não permitem determinar a contribuição de cada mudança."
    ],
    "answer": 4,
    "comments": [
      "atribui exclusividade causal à mudança de horário, sem apoio.",
      "inventa uma comparação entre as contribuições.",
      "inventa igualdade de contribuição. Simultaneidade não demonstra proporção.",
      "comete o erro inverso: não conseguir demonstrar a contribuição de um fator não prova que ele não contribuiu.",
      "preserva o dado observado e a limitação dos registros."
    ]
  },
  {
    "id": "pt-01-q03",
    "text": "Alcance da afirmação — A afirmação de que a aplicação dos conhecimentos “ainda não foi avaliada”, no parágrafo 2, permite afirmar que:",
    "options": [
      "Os egressos não aplicaram nenhum conhecimento adquirido.",
      "A avaliação dessa aplicação não havia sido realizada no momento referido.",
      "O documento demonstrou que não houve melhora no atendimento.",
      "A avaliação nunca poderá ser realizada.",
      "A aplicação dos conhecimentos foi avaliada apenas entre os concluintes de setembro."
    ],
    "answer": 1,
    "comments": [
      "troca falta de avaliação por ausência total de aplicação.",
      "mantém a informação de não realização da avaliação no momento referido.",
      "transforma ausência de comparação em demonstração de ausência de melhora.",
      "transforma uma situação até aquele momento em impossibilidade permanente.",
      "inventa uma avaliação parcial dos concluintes de setembro."
    ]
  },
  {
    "id": "pt-01-q04",
    "text": "Pressuposto — Na leitura usual do parágrafo 3, a expressão “voltou a acompanhar” apresenta como pressuposta a informação de que:",
    "options": [
      "A equipe já acompanhava os egressos anteriormente e houve uma interrupção dessa atividade.",
      "O acompanhamento anterior havia demonstrado melhora no atendimento.",
      "A interrupção ocorreu porque faltavam servidores na equipe.",
      "A equipe manteve o acompanhamento continuamente, sem pausa.",
      "O acompanhamento anterior se limitava aos participantes da turma noturna."
    ],
    "answer": 0,
    "comments": [
      "identifica a atividade anterior e a interrupção que a retomada pressupõe na leitura usual.",
      "acrescenta resultado positivo que não foi informado.",
      "acrescenta uma causa para a interrupção.",
      "contradiz a leitura de retomada após pausa.",
      "restringe o público do acompanhamento anterior sem evidência."
    ]
  },
  {
    "id": "pt-01-q05",
    "text": "Vozes e compromisso com a conclusão — A relação entre a fala do coordenador e a nota técnica é corretamente descrita em:",
    "options": [
      "A nota técnica confirma a conclusão do coordenador com uma comparação da qualidade do atendimento.",
      "A nota técnica nega que tenha ocorrido crescimento no número de concluintes.",
      "A conclusão final do texto adota como comprovada a melhora anunciada pelo coordenador.",
      "O coordenador trata a melhora do atendimento como comprovada; a nota técnica distingue o crescimento de concluintes da aplicação ainda não avaliada.",
      "A nota técnica afirma que o curso piorou o atendimento, contrariando a melhora anunciada pelo coordenador."
    ],
    "answer": 3,
    "comments": [
      "inventa a comparação que o texto expressamente informa não estar no documento.",
      "a nota reconhece o crescimento; a divergência está no que ele comprova.",
      "a conclusão final preserva a necessidade de avaliação adicional, não assume a melhora como provada.",
      "atribui corretamente as duas posições e mantém o grau de certeza de cada uma.",
      "transforma a ressalva da nota numa afirmação de piora que ela não faz."
    ]
  }
];
const key='eppgg-pt-01-v1';
let state={module:'pt-01',version:1, answers:{}, confidence:{}, checked:[], explanation:'', updated:null};
const message=document.querySelector('#storage-message');
function valid(s){return s && s.module==='pt-01' && s.version===1 && typeof s.answers==='object' && s.answers!==null && typeof s.confidence==='object' && s.confidence!==null && Array.isArray(s.checked) && typeof s.explanation==='string' && s.explanation.length<=20000 && questions.every(q=>(s.answers[q.id]===undefined || Number.isInteger(s.answers[q.id])&&s.answers[q.id]>=0&&s.answers[q.id]<5)&&(s.confidence[q.id]===undefined||['alta','media','baixa'].includes(s.confidence[q.id]))) && s.checked.every(id=>questions.some(q=>q.id===id)&&Number.isInteger(s.answers[id]));}
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
  if(checked){card.querySelector('.feedback').innerHTML=`<h3>${state.answers[q.id]===q.answer?'Acerto':'Revisar'} · gabarito ${'ABCDE'[q.answer]}</h3><ul>${q.comments.map((c,j)=>`<li><b>${'ABCDE'[j]}:</b> ${c}</li>`).join('')}</ul>`;}
  host.append(card);
 });
 progress();
}
function progress(){const el=document.querySelector('#progress');if(!el)return;const answered=questions.filter(q=>state.answers[q.id]!==undefined).length;const correct=questions.filter(q=>state.checked.includes(q.id)&&state.answers[q.id]===q.answer).length;el.textContent=`${answered}/${questions.length} respondidas · ${state.checked.length} corrigidas · ${correct} acertos nas corrigidas`;}
render();
const explanation=document.querySelector('#explanation');if(explanation){explanation.value=state.explanation;explanation.addEventListener('input',()=>{state.explanation=explanation.value;save();});}
document.querySelector('#export')?.addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='eppgg-portugues-texto-1-respostas.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
document.querySelector('#import')?.addEventListener('change',async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>100000)throw Error();const data=JSON.parse(await f.text());if(!valid(data))throw Error();if(!confirm('Substituir as respostas deste navegador pelas do arquivo?'))return;state={module:'pt-01',version:1,answers:data.answers,confidence:data.confidence,checked:[...new Set(data.checked)],explanation:data.explanation,updated:data.updated};save();render();if(explanation)explanation.value=state.explanation;message.textContent='Respostas importadas. Não foram enviadas a um servidor.';}catch{message.textContent='Arquivo inválido. Use um arquivo exportado por este módulo.';}finally{e.target.value='';}});
document.querySelector('#reset')?.addEventListener('click',()=>{if(!confirm('Iniciar uma nova tentativa? Exporte antes se quiser guardar a atual.'))return;state={module:'pt-01',version:1,answers:{},confidence:{},checked:[],explanation:'',updated:null};save();render();if(explanation)explanation.value='';});
