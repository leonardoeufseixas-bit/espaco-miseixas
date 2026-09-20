window.StudioBooking = {
  payload: function (base) {
    const nome = base.nome || base.clienteNome || "";
    const tel = base.tel || base.telefone || "";
    const data = base.data || "";
    const hora = base.hora || base.horario || base.time || "";
    const instrutor = base.instrutor || base.profissional || "";
    return {
      nome: nome,
      clienteNome: nome,
      clientName: nome,
      clientId: base.clienteId || base.clientId || "",
      clienteId: base.clienteId || base.clientId || "",
      telefone: tel,
      tel: tel,
      phone: tel,
      servico: base.servico || "Aula de Pilates",
      tipo: base.tipo || "aula",
      origem: base.origem || "site",
      data: data,
      date: data,
      hora: hora,
      time: hora,
      horario: hora,
      profissional: instrutor,
      instructor: instrutor,
      instrutor: instrutor,
      turmaId: base.turmaId || "",
      turmaNome: base.turmaNome || "",
      status: base.status || "pendente",
      criadoEm: base.criadoEm || new Date(),
      createdAt: base.createdAt || new Date()
    };
  },
  proximasDatas: function (diaNome, qtd) {
    const S = window.STUDIO;
    const n = qtd || 4;
    const idx = S.diaIndex[S.normalizeDia(diaNome)];
    if (idx == null) return [];
    const out = [];
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    for (let i = 0; i < 28 && out.length < n; i++) {
      const cur = new Date(d);
      cur.setDate(d.getDate() + i);
      if (cur.getDay() === idx) out.push(cur.toISOString().slice(0, 10));
    }
    return out;
  }
};
