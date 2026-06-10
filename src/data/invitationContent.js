export const inviteDetails = {
  girlName: "Ollin",
  movieName: "Scary Movie: Terroríficamente Incorrecta",
  mainDate: "el 20 de junio",
  mainTime: "en la noche",
  cinema: "un cine que nos quede cómodo"
};

export const progressByStep = {
  welcome: 8,
  permission: 22,
  movieInterest: 45,
  reveal: 68,
  invitation: 85,
  accepted: 100,
  reschedule: 100,
  thinking: 100
};

export const stepLabels = {
  welcome: "Inicio",
  permission: "Permiso",
  movieInterest: "Película",
  reveal: "Revelación",
  invitation: "Invitación",
  accepted: "Aceptada",
  reschedule: "Plan B",
  thinking: "Pendiente"
};

export const permissionResponses = {
  si: "Curiosidad detectada... Continuando.",
  no: "Respuesta registrada. El sistema promete ser breve."
};

export const movieOptions = [
  {
    label: "Mucho",
    value: "mucho"
  },
  {
    label: "Me llama la atención",
    value: "me_llama"
  },
  {
    label: "No sé, convénceme",
    value: "convenceme"
  },
  {
    label: "No la conozco, pero escucho argumentos",
    value: "no_la_conozco"
  }
];

export const movieResponses = {
  mucho: {
    alert: `Excelente.

Esto simplifica bastante las cosas.

Normalmente aquí tendría que venderte la película,
pero parece que me ahorraste trabajo.`,
    revealTitle: "Diagnóstico completado",
    revealText: `Los resultados son prometedores.

✓ Interés en la película detectado
✓ Sentido del humor compatible
✓ Excusa para salir encontrada`
  },
  me_llama: {
    alert: `Interés detectado.

Todavía no es un sí definitivo,
pero definitivamente es mejor que un "meh".

Continuando...`,
    revealTitle: "Resultados moderadamente favorables",
    revealText: `✓ Curiosidad detectada
✓ Posible interés cinematográfico
✓ Invitación en proceso`
  },
  convenceme: {
    alert: `Modo negociación activado.

No prometo una argumentación impecable,
pero sí una película absurda,
palomitas y buena compañía.`,
    revealTitle: "Argumento de venta iniciado",
    revealText: `Los resultados indican que
todavía necesito defender mi propuesta.

Afortunadamente,
llevo varias pantallas preparándome para esto.`
  },
  no_la_conozco: {
    alert: `Curiosidad detectada.

La película sigue siendo una incógnita.

La invitación no tanto.`,
    revealTitle: "Incógnita cinematográfica detectada",
    revealText: `No conocer la película no bloquea el sistema.

De hecho, hace el experimento más interesante.`
  }
};

export const terminalLines = [
  "$ analyze_answers",
  "[OK] Curiosidad detectada",
  "[OK] Película seleccionada",
  "[OK] Plan tranquilo disponible",
  "[OK] Invitación desbloqueada"
];

export const invitationOptions = [
  {
    value: "accepted",
    label: "🎟️ Suena como un buen plan"
  },
  {
    value: "reschedule",
    label: "📅 Me gusta, pero ese día me gana la agenda"
  },
  {
    value: "thinking",
    label: "🤔 Necesito deliberarlo como adulta responsable"
  }
];

export const rescheduleOptions = [
  "Entre semana me acomoda más",
  "El siguiente fin de semana",
  "Todavía no sé",
  "Yo te digo"
];

export const whatsappMessages = {
  accepted: "Acepto la invitación sospechosamente elaborada 😌",
  reschedule: "Me gusta el plan, pero necesito mover la fecha 😌",
  thinking: "Necesito deliberar la invitación como adulta responsable 🤔"
};
