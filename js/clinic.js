window.Clinic = {
  hoje: function () { return new Date().toISOString().slice(0, 10); },
  nome: function (a) { return a.clienteNome || a.clientName || a.nome || "—"; },
  tel: function (a) { return a.telefone || a.tel || a.phone || ""; },
  hora: function (a) { return a.hora || a.time || a.horario || ""; },
  ativo: function (a) {
    const s = String(a.status || "pendente");
    return s !== "cancelado" && s !== "cancelled";
  },
  quando: function (a) {
    return window.STUDIO.dataBR(a.data) + " às " + (this.hora(a) || "—");
  },
  diaNome: function (dataStr) {
    const d = new Date(dataStr + "T12:00:00");
    return ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][d.getDay()];
  },
  ocupacaoDia: function (dataStr, turmas, ags) {
    const dia = this.diaNome(dataStr);
    const doDia = (turmas || []).filter(function (t) { return t.dia === dia; });
    const cap = doDia.reduce(function (s, t) { return s + Number(t.vagas || 8); }, 0);
    const ocup = (ags || []).filter(function (a) { return a.data === dataStr && window.Clinic.ativo(a); }).length;
    const pct = cap ? ocup / cap : (ocup ? 1 : 0);
    return { cap: cap, ocup: ocup, pct: pct, cheio: cap > 0 && ocup >= cap, livre: Math.max(0, cap - ocup) };
  },
  statsCliente: function (cli, ags) {
    const nome = (cli.nome || "").toLowerCase();
    const tel = String(cli.telefone || cli.tel || "").replace(/\D/g, "");
    const id = cli.id || "";
    const meus = (ags || []).filter(function (a) {
      if (id && (a.clienteId === id || a.clientId === id)) return true;
      const n = window.Clinic.nome(a).toLowerCase();
      const t = String(window.Clinic.tel(a)).replace(/\D/g, "");
      return (nome && n === nome) || (tel && t && t.slice(-8) === tel.slice(-8));
    });
    const ativos = meus.filter(this.ativo);
    const datas = ativos.map(function (a) { return a.data; }).filter(Boolean).sort();
    const last = datas[datas.length - 1] || "";
    let dias = null;
    if (last) {
      const diff = (new Date(this.hoje() + "T12:00:00") - new Date(last + "T12:00:00")) / 86400000;
      dias = Math.max(0, Math.round(diff));
    }
    return {
      aulas: ativos.length,
      last: last,
      dias: dias,
      bonus: ativos.length >= 5,
      inativo: dias != null && dias >= 21,
      lista: meus
    };
  },
  toast: function (msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 3200);
  }
};
