window.STUDIO = {
  firebaseConfig: {
    apiKey: "AIzaSyBXZiqV9zJvUqUO0kYVAR4I7rw2NLQ6jwE",
    authDomain: "studio-9d8b4.firebaseapp.com",
    projectId: "studio-9d8b4",
    storageBucket: "studio-9d8b4.firebasestorage.app",
    messagingSenderId: "557543089301",
    appId: "1:557543089301:web:83571319ef1a8a140f279c",
    measurementId: "G-TC9781LSGW"
  },
  /* Firestore (mesmo projeto do app Android com.micheleseixas.app)
     turmas:        { nome, dia, horario, vagas, instrutor, alunos[], ativo }
     agendamentos:  { nome, telefone, turmaId, data, horario, instrutor, tipo, status, origem }
     funcionarios:  { nome, cargo, foto, comissao, ativo }
     clientes:      { nome, email, telefone, ativo }
     users:         { nome, email, role }  role: cliente | admin | funcionario
     sys_config/horarios: { abre, fecha }
  */
  whatsapp: "5519992908985",
  instagram: "https://www.instagram.com/espaco_miseixas/",
  instagramHandle: "@espaco_miseixas",
  endereco: "Rua Rio Grande do Sul 196, Vargem Grande do Sul - SP",
  emailsEquipe: ["michele@admin.com"],
  logoClaro: "imagem/logo-ms.png",
  logoEscuro: "imagem/logo-ms.png",
  logoTransparente: "imagem/logo-ms.png",
  fotosEstudio: [
    { src: "imagem/estudio-ambiente.jpg", alt: "Estúdio de Pilates ambiente clínico", bw: false },
    { src: "imagem/reformer-bw.jpg", alt: "Exercício no Reformer", bw: true },
    { src: "imagem/cadillac.jpg", alt: "Pilates Cadillac para reabilitação", bw: false },
    { src: "imagem/bola.jpg", alt: "Pilates com bola, equilíbrio e coordenação", bw: false },
    { src: "imagem/grupo-reformer.jpg", alt: "Aula em grupo no Reformer", bw: true },
    { src: "imagem/aulaexp.jpg", alt: "Aula experimental no estúdio", bw: false },
    { src: "imagem/aulaexp2.jpg", alt: "Aluna na aula experimental", bw: true },
    { src: "imagem/aula3.jpg", alt: "Aula de Pilates no estúdio", bw: false },
    { src: "imagem/aula4.jpg", alt: "Movimento no Reformer", bw: true },
    { src: "imagem/aula5.jpg", alt: "Aula de Pilates", bw: false },
    { src: "imagem/aula7.jpg", alt: "Prática de Pilates", bw: false }
  ],
  heroFoto: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2FDesign%20sem%20nome.jpg?alt=media&token=ede6c3fb-1aa5-44d4-b179-72b022b5a408",
  videoHero: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2FPippit_Wellness_Studio_Golden_Hour.mp4?alt=media&token=ee0c22a1-d895-4b6b-ae5a-c8013d134cdb",
  videoSobre: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2FSaveClip.App_AQNCi4WYU6iKuaSpvJTXvpy1trRKlnLDZoeNfzMcojNJl0NqY8xXoru6c9_5T-Xg-nSTkYevxdoXsOBARM2lLSTIJwDJL8EzW7p-W_k.mp4?alt=media&token=530a902f-880c-46f4-a70a-cd5a4d956a2a",
  instrutoras: [
    {
      nome: "Michele",
      cargo: "Fisioterapeuta · Instrutora principal",
      bio: "Fundadora do estúdio. Acompanha cada aluna de perto, do primeiro contato à evolução nas aulas.",
      foto: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2Fmichele.JPEG?alt=media&token=f6c8a073-87ee-4e81-a540-0c4a134ddaa4",
      comissao: 0
    },
    {
      nome: "Lilian",
      cargo: "Fisioterapeuta · Instrutora",
      bio: "Aulas com atenção à postura, respiração e ritmo de cada aluna.",
      foto: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2Flilian.jpeg?alt=media&token=85803125-c54d-486f-9716-1a1fc68896f7",
      comissao: 30
    },
    {
      nome: "Maria",
      cargo: "Fisioterapeuta · Instrutora",
      bio: "Cuidado técnico e acolhedor para iniciantes e quem já treina Pilates.",
      foto: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2Fmaria.jpeg?alt=media&token=530c4fd6-299e-4a24-bf33-36ddbcdf53ef",
      comissao: 30
    }
  ],
  diasOrdem: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  diaIndex: { Domingo: 0, Segunda: 1, "Terça": 2, Quarta: 3, Quinta: 4, Sexta: 5, "Sábado": 6 },
  turmasPadrao: [
    { nome: "Pilates manhã", dia: "Segunda", horario: "07:00", vagas: 8, instrutor: "Michele", alunos: [] },
    { nome: "Pilates noite", dia: "Segunda", horario: "18:00", vagas: 8, instrutor: "Lilian", alunos: [] },
    { nome: "Pilates manhã", dia: "Terça", horario: "08:00", vagas: 8, instrutor: "Maria", alunos: [] },
    { nome: "Pilates noite", dia: "Terça", horario: "19:00", vagas: 8, instrutor: "Michele", alunos: [] },
    { nome: "Pilates manhã", dia: "Quarta", horario: "07:00", vagas: 8, instrutor: "Lilian", alunos: [] },
    { nome: "Pilates noite", dia: "Quarta", horario: "18:00", vagas: 8, instrutor: "Maria", alunos: [] },
    { nome: "Pilates manhã", dia: "Quinta", horario: "08:00", vagas: 8, instrutor: "Michele", alunos: [] },
    { nome: "Pilates manhã", dia: "Sexta", horario: "07:00", vagas: 8, instrutor: "Lilian", alunos: [] },
    { nome: "Pilates sábado", dia: "Sábado", horario: "09:00", vagas: 8, instrutor: "Michele", alunos: [] }
  ],
  /* t.data preenchida = aula só naquela data; sem data = toda semana */
  normalizeTurma: function (t, i) {
    const alunos = t.alunos || t.alunas || [];
    const data = this.dataStr(t.data || "");
    const hora = t.horario || t.hora || t.horarioInicio || "";
    let nome = t.nome || t.turma || "";
    if (!nome || /encaixe|extra/i.test(nome)) nome = !hora ? "Pilates" : hora < "12:00" ? "Pilates manhã" : hora < "18:00" ? "Pilates tarde" : "Pilates noite";
    return Object.assign({}, t, {
      id: t.id || ("t-" + i),
      nome: nome,
      data: data,
      avulsa: !!data,
      dia: this.normalizeDia(t.dia || t.diaSemana || t.day || t.weekday) || (data ? this.diaDaData(data) : ""),
      horario: t.horario || t.hora || t.horarioInicio || "",
      instrutor: t.instrutor || t.profissional || t.instrutora || "",
      vagas: Number(t.vagas || t.capacidade || 8),
      alunos: Array.isArray(alunos) ? alunos : [],
      ativo: t.ativo !== false
    });
  },
  fotoDe: function (nome) {
    const p = this.instrutoras.find(function (i) { return i.nome === nome; });
    return p ? p.foto : "";
  },
  normalizeDia: function (valor) {
    const raw = String(valor || "").trim();
    const key = raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const map = {
      domingo: "Domingo",
      segunda: "Segunda",
      "segunda-feira": "Segunda",
      terca: "Terça",
      "terca-feira": "Terça",
      quarta: "Quarta",
      "quarta-feira": "Quarta",
      quinta: "Quinta",
      "quinta-feira": "Quinta",
      sexta: "Sexta",
      "sexta-feira": "Sexta",
      sabado: "Sábado"
    };
    if (map[key]) return map[key];
    if (this.diasOrdem.indexOf(raw) !== -1) return raw;
    return "";
  },
  gradeVisivel: function (lista) {
    const self = this;
    const hoje = this.iso(new Date());
    if (!lista || !lista.length) {
      return this.turmasPadrao.map(function (t, i) { return self.normalizeTurma(Object.assign({ id: "padrao-" + i }, t), i); });
    }
    return lista.map(function (t, i) {
      return self.normalizeTurma(t, i);
    }).filter(function (t) {
      if (!t.ativo || self.diasOrdem.indexOf(t.dia) === -1) return false;
      return !t.data || t.data >= hoje;
    }).sort(function (a, b) {
      const da = self.diasOrdem.indexOf(a.dia), db = self.diasOrdem.indexOf(b.dia);
      return da !== db ? da - db : String(a.horario).localeCompare(String(b.horario));
    });
  },
  diaDaData: function (data) {
    const d = new Date(data + "T12:00:00");
    return isNaN(d) ? "" : ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][d.getDay()];
  },
  dataTurma: function (t) {
    return t.data || this.proximaData(t.dia);
  },
  /* true se a turma acontece nessa data (semanal no mesmo dia da semana ou avulsa na data) */
  turmaNaData: function (t, data) {
    return t.data ? t.data === data : this.diaDaData(data) === t.dia;
  },
  iso: function (d) {
    const x = d || new Date();
    return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
  },
  dataStr: function (v) {
    if (!v) return "";
    if (typeof v === "string") {
      const br = v.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      return br ? br[3] + "-" + br[2] + "-" + br[1] : v.slice(0, 10);
    }
    if (typeof v.toDate === "function") return this.iso(v.toDate());
    if (v instanceof Date) return this.iso(v);
    if (typeof v.seconds === "number") return this.iso(new Date(v.seconds * 1000));
    return "";
  },
  proximaData: function (diaNome) {
    const idx = this.diaIndex[this.normalizeDia(diaNome) || diaNome];
    const d = new Date();
    if (idx == null) return this.iso(d);
    const diff = (idx - d.getDay() + 7) % 7;
    if (diff === 0 && d.getHours() >= 21) d.setDate(d.getDate() + 7);
    else d.setDate(d.getDate() + diff);
    return this.iso(d);
  },
  ocupacaoId: function (turmaId, data) {
    return String(turmaId) + "_" + data;
  },
  dataBR: function (s) {
    if (!s) return "—";
    const p = String(s).split("-");
    return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : s;
  },
  normalizeRole: function (role) {
    const x = String(role || "").toLowerCase().trim();
    if (x === "admin" || x === "administradora" || x === "administrador") return "admin";
    if (x === "funcionario" || x === "funcionaria" || x === "staff" || x === "equipe") return "funcionario";
    if (x === "cliente" || x === "aluna" || x === "aluno") return "cliente";
    return "";
  },
  isAdminEmail: function (email) {
    const e = String(email || "").toLowerCase().trim();
    if (!e) return false;
    return (this.emailsEquipe || []).indexOf(e) >= 0 || e.indexOf("admin") >= 0;
  },
  isEquipe: function (user, data) {
    const role = this.normalizeRole(data && data.role);
    if (role === "admin" || role === "funcionario") return true;
    return !!(user && this.isAdminEmail(user.email));
  },
  waTo: function (tel, text) {
    var d = String(tel || "").replace(/\D/g, "");
    if (d.length === 11) d = "55" + d;
    if (d.length === 10 && d.indexOf("19") === 0) d = "55" + d;
    if (!d) d = this.whatsapp;
    return "https://wa.me/" + d + "?text=" + encodeURIComponent(text);
  },
  msgs: {
    confirmar: function (nome, quando) {
      return "Olá, " + nome + "! Confirmamos sua aula no Studio de Pilates M. S. em *" + quando + "*. Qualquer ajuste, me chame por aqui.";
    },
    lembrete: function (nome, quando) {
      return "Oi, " + nome + "! Lembrete da sua aula de Pilates *" + quando + "* no Studio M. S. Te esperamos.";
    },
    retorno: function (nome, dias) {
      return "Oi, " + nome + "! Faz " + dias + " dias que você não treina com a gente. Queremos te ver de volta — tem horário com vaga esta semana. Posso te encaixar?";
    },
    bonus: function (nome, qtd) {
      return "Oi, " + nome + "! Você já completou *" + qtd + " aulas* no Studio M. S. Obrigada pela constância. Na próxima, combinamos um carinho especial da casa.";
    },
    experimental: function (nome, quando) {
      return "Olá, " + nome + "! Recebemos seu pedido de *aula experimental* para " + quando + ". Confirmamos presença por aqui. Até breve no Studio M. S.!";
    },
    semHorario: function (nome, quando, sugestao) {
      return "Oi, " + nome + "! Recebi seu pedido para *" + quando + "*. Infelizmente esse horário não temos disponível." +
        (sugestao ? "\n\nPodemos agendar *" + sugestao + "*?" : "\n\nPosso te sugerir outro dia ou horário?") +
        " Se ficar bom pra você, me confirma aqui que já deixo reservado.";
    },
    pedirHorario: function (nome, pref) {
      return "Olá! Sou " + (nome || "aluna do estúdio") + " e não encontrei um horário que combine com a minha rotina." +
        (pref ? "\n\nMinha preferência: *" + pref + "*" : "") +
        "\n\nTeria algum horário específico disponível para mim?";
    },
    cadastro: function (nome) {
      return "Olá, " + nome + "! Seja bem-vinda ao Studio de Pilates M. S. Qualquer dúvida de horários ou experimental, é só responder esta mensagem.";
    }
  },
  wa: function (text) {
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(text);
  },
  waInfo: function () {
    return this.wa("Olá! Vim pelo site do Studio de Pilates M. S. (" + this.instagramHandle + ") e gostaria de informações sobre as aulas de Pilates.");
  },
  waAgendar: function () {
    return this.wa("Olá! Quero agendar uma *aula experimental* de Pilates no Studio de Pilates M. S.\n\nPode me passar os horários com vaga?");
  },
  /* alunos[] = fixas da turma (toda semana); agendados = marcações avulsas daquela data */
  lotacao: function (turma, agendados) {
    const alunos = turma.alunos || [];
    const vagas = Number(turma.vagas || 8);
    const ocupados = alunos.length + Math.max(0, Number(agendados || 0));
    return { ocupados: ocupados, vagas: vagas, livres: Math.max(0, vagas - ocupados), cheia: ocupados >= vagas };
  }
};
