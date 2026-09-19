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
  instagram: "https://www.instagram.com/espaco_miseixas",
  endereco: "Rua Rio Grande do Sul 196, Vargem Grande do Sul - SP",
  logoClaro: "imagem/logo-transparente.png",
  logoEscuro: "imagem/logo-transparente.png",
  logoTransparente: "imagem/logo-transparente.png",
  fotosEstudio: [
    { src: "imagem/aula1.jpg", alt: "Alunas no reformer" },
    { src: "imagem/aula2.jpg", alt: "Aula de Pilates no Cadillac" },
    { src: "imagem/aula3.jpg", alt: "Exercício com bola no estúdio" },
    { src: "imagem/aula4.jpg", alt: "Alongamento no reformer" }
  ],
  videoHero: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2FPippit_Wellness_Studio_Golden_Hour.mp4?alt=media&token=ee0c22a1-d895-4b6b-ae5a-c8013d134cdb",
  videoSobre: "https://firebasestorage.googleapis.com/v0/b/deliveryseixas.firebasestorage.app/o/Michele%2FSaveClip.App_AQNCi4WYU6iKuaSpvJTXvpy1trRKlnLDZoeNfzMcojNJl0NqY8xXoru6c9_5T-Xg-nSTkYevxdoXsOBARM2lLSTIJwDJL8EzW7p-W_k.mp4?alt=media&token=530a902f-880c-46f4-a70a-cd5a4d956a2a",
  instrutoras: [
    {
      nome: "Michele",
      cargo: "Fisioterapeuta · Instrutora",
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
  normalizeTurma: function (t, i) {
    const alunos = t.alunos || t.alunas || [];
    return Object.assign({}, t, {
      id: t.id || ("t-" + i),
      nome: t.nome || t.turma || "Pilates",
      dia: this.normalizeDia(t.dia || t.diaSemana || t.day || t.weekday),
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
    const mapped = (lista || []).map(function (t, i) {
      return self.normalizeTurma(t, i);
    }).filter(function (t) {
      return t.ativo && self.diasOrdem.indexOf(t.dia) !== -1;
    });
    if (mapped.length) return mapped;
    return this.turmasPadrao.map(function (t, i) { return Object.assign({ id: "padrao-" + i }, t); });
  },
  proximaData: function (diaNome) {
    const idx = this.diaIndex[diaNome];
    if (idx == null) return new Date().toISOString().slice(0, 10);
    const d = new Date();
    const diff = (idx - d.getDay() + 7) % 7;
    if (diff === 0 && d.getHours() >= 21) d.setDate(d.getDate() + 7);
    else d.setDate(d.getDate() + diff);
    return d.toISOString().slice(0, 10);
  },
  dataBR: function (s) {
    if (!s) return "—";
    const p = String(s).split("-");
    return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : s;
  },
  wa: function (text) {
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(text);
  },
  waInfo: function () {
    return this.wa("Olá, vim pelo site do Espaço Michele Seixas e gostaria de informações sobre as aulas de Pilates e a aula experimental.");
  },
  lotacao: function (turma) {
    const alunos = turma.alunos || [];
    const vagas = Number(turma.vagas || 8);
    const ocupados = alunos.length;
    return { ocupados: ocupados, vagas: vagas, livres: Math.max(0, vagas - ocupados), cheia: ocupados >= vagas };
  }
};
