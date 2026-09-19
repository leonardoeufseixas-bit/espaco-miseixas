window.STUDIO = {
  firebaseConfig: {
    apiKey: "AIzaSyBPQDEK3Lv6gvl7vI8MWUvvcw4bx9YbdvI",
    authDomain: "projetoest-cf077.firebaseapp.com",
    projectId: "projetoest-cf077",
    storageBucket: "projetoest-cf077.firebasestorage.app",
    messagingSenderId: "745686276129",
    appId: "1:745686276129:web:c31cf643cedf83299beb60"
  },
  whatsapp: "5519992908985",
  instagram: "https://www.instagram.com/espaco_miseixas",
  endereco: "Rua Rio Grande do Sul 196, Vargem Grande do Sul - SP",
  logoClaro: "imagem/logo-branco.png",
  logoEscuro: "imagem/logo-preto.png",
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
      const dia = self.normalizeDia(t.dia || t.diaSemana || t.day || t.weekday);
      return Object.assign({}, t, { id: t.id || ("t-" + i), dia: dia });
    }).filter(function (t) { return self.diasOrdem.indexOf(t.dia) !== -1; });
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
