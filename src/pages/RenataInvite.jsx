import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import "./RenataInvite.css";

const inviteDetails = {
  girlName: "Ollin",
  movieName: "Scary Movie: Terroríficamente Incorrecta",
  mainDate: "este fin",
  mainTime: "en la tarde/noche",
  cinema: "un cine que nos quede cómodo",
  whatsappMessage: "Acepto la invitación sospechosamente elaborada 😉"
};

const progressByStep = {
  welcome: 8,
  permission: 22,
  movie: 44,
  reveal: 66,
  invitation: 84,
  accepted: 100,
  reschedule: 100,
  thinking: 100
};

const movieReplies = {
  "mucho": "Excelente. El sistema acaba de encontrar una coincidencia sospechosamente conveniente.",
  "me llama": "Anotado. Interés suficiente para activar el modo palomitas.",
  "convenceme": "Acepto el reto. Prometo una defensa breve y sin spoilers.",
  "no conozco": "Perfecto. También se aceptan planes con investigación de campo."
};

const stepLabels = {
  welcome: "Inicio",
  permission: "Permiso",
  movie: "Película",
  reveal: "Revelación",
  invitation: "Invitación",
  accepted: "Aceptada",
  reschedule: "Plan B",
  thinking: "Pendiente"
};

function TerminalBlock({ children }) {
  return <div className="renata-terminal">{children}</div>;
}

TerminalBlock.propTypes = {
  children: PropTypes.node.isRequired
};

function OptionButton({ children, onClick, variant = "default" }) {
  return (
    <button className={`renata-option renata-option--${variant}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

OptionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string
};

function ProgressBar({ value }) {
  return (
    <div className="renata-progress" aria-label={`Progreso ${value}%`}>
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
};

export default function RenataInvite() {
  const [step, setStep] = useState("welcome");
  const [answers, setAnswers] = useState({
    permission: "",
    movieInterest: "",
    finalResponse: "",
    preferredTime: ""
  });
  const [systemReply, setSystemReply] = useState("");

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/?text=${encodeURIComponent(inviteDetails.whatsappMessage)}`;
  }, []);

  const choosePermission = (value) => {
    setAnswers((current) => ({ ...current, permission: value }));
    setSystemReply(
      value === "si"
        ? "Curiosidad detectada... Continuando."
        : "Respuesta registrada. El sistema promete ser breve."
    );
    setStep("movie");
  };

  const chooseMovie = (value) => {
    setAnswers((current) => ({ ...current, movieInterest: value }));
    setSystemReply(movieReplies[value]);
    setStep("reveal");
  };

  const chooseFinal = (value) => {
    setAnswers((current) => ({ ...current, finalResponse: value }));
    setStep(value);
  };

  const chooseBackup = (value) => {
    setAnswers((current) => ({ ...current, preferredTime: value }));
  };

  return (
    <main className="renata-page">
      <div className="renata-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="renata-shell" aria-live="polite">
        <header className="renata-header">
          <div>
            <p className="renata-logo">Scarface_666</p>
            <p className="renata-kicker">date-invitation-flow</p>
          </div>
          <span className="renata-step">{stepLabels[step]}</span>
        </header>

        <ProgressBar value={progressByStep[step]} />

        {step === "welcome" && (
          <div className="renata-card">
            <p className="renata-eyebrow">Mini encuesta altamente seria</p>
            <h1>Hola, {inviteDetails.girlName}.</h1>
            <p>
              Antes de que pienses que esto es una página rara... técnicamente sí lo es.
            </p>
            <p>
              Pero solo necesito robarte unos minutos para una encuesta científicamente
              dudosa y ligeramente sospechosa.
            </p>
            <OptionButton variant="primary" onClick={() => setStep("permission")}>
              Iniciar encuesta
            </OptionButton>
          </div>
        )}

        {step === "permission" && (
          <div className="renata-card">
            <p className="renata-eyebrow">Paso 01</p>
            <h2>¿Tienes unos minutos para responder algo rápido?</h2>
            <div className="renata-options">
              <OptionButton onClick={() => choosePermission("si")}>
                Sí, tengo curiosidad
              </OptionButton>
              <OptionButton onClick={() => choosePermission("no")}>
                No, pero igual ya estoy aquí
              </OptionButton>
            </div>
          </div>
        )}

        {step === "movie" && (
          <div className="renata-card">
            <TerminalBlock>{systemReply}</TerminalBlock>
            <p className="renata-eyebrow">Diagnóstico rápido</p>
            <h2>¿Qué tan interesada estás en ver {inviteDetails.movieName}?</h2>
            <div className="renata-options">
              <OptionButton onClick={() => chooseMovie("mucho")}>Mucho</OptionButton>
              <OptionButton onClick={() => chooseMovie("me llama")}>
                Me llama la atención
              </OptionButton>
              <OptionButton onClick={() => chooseMovie("convenceme")}>
                No sé, convénceme
              </OptionButton>
              <OptionButton onClick={() => chooseMovie("no conozco")}>
                No la conozco, pero escucho argumentos
              </OptionButton>
            </div>
          </div>
        )}

        {step === "reveal" && (
          <div className="renata-card renata-card--reveal">
            <TerminalBlock>
              <p>{systemReply}</p>
              <p>Procesando respuestas...</p>
              <p>Loading invitation... [████████░░] 87%</p>
            </TerminalBlock>
            <h2>Conclusión:</h2>
            <p>
              Esta encuesta era una excusa cuidadosamente mal disimulada para invitarte
              al cine.
            </p>
            <ul className="renata-checks">
              <li>✓ Curiosidad detectada</li>
              <li>✓ Película seleccionada</li>
              <li>✓ Plan tranquilo disponible</li>
              <li>✓ Invitación desbloqueada</li>
            </ul>
            <OptionButton variant="primary" onClick={() => setStep("invitation")}>
              Ver invitación formal
            </OptionButton>
          </div>
        )}

        {step === "invitation" && (
          <div className="renata-card">
            <p className="renata-eyebrow">Propuesta formal</p>
            <h2>Me gustaría invitarte al cine.</h2>
            <p>
              A ver {inviteDetails.movieName} {inviteDetails.mainDate}, {inviteDetails.mainTime},
              en {inviteDetails.cinema}.
            </p>
            <p>La idea: película, palomitas y una buena plática antes o después.</p>
            <div className="renata-options">
              <OptionButton variant="primary" onClick={() => chooseFinal("accepted")}>
                Sí, jalo
              </OptionButton>
              <OptionButton onClick={() => chooseFinal("reschedule")}>
                Me interesa, pero ese día no puedo
              </OptionButton>
              <OptionButton onClick={() => chooseFinal("thinking")}>
                Déjame pensarlo
              </OptionButton>
            </div>
          </div>
        )}

        {step === "accepted" && (
          <div className="renata-card">
            <p className="renata-eyebrow">status: accepted</p>
            <h2>Invitación aceptada.</h2>
            <TerminalBlock>
              El sistema recomienda: confirmar horario, elegir cine y fingir que esto fue
              improvisado.
            </TerminalBlock>
            <a className="renata-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              Abrir WhatsApp
            </a>
          </div>
        )}

        {step === "reschedule" && (
          <div className="renata-card">
            <p className="renata-eyebrow">status: plan_b</p>
            <h2>No pasa nada. El sistema tiene plan B.</h2>
            <div className="renata-options">
              {["Entre semana", "Fin de semana", "La próxima semana", "Yo te digo cuándo"].map(
                (option) => (
                  <OptionButton
                    key={option}
                    variant={answers.preferredTime === option ? "selected" : "default"}
                    onClick={() => chooseBackup(option)}
                  >
                    {option}
                  </OptionButton>
                )
              )}
            </div>
            {answers.preferredTime && (
              <TerminalBlock>
                Perfecto. Entonces queda pendiente coordinarlo sin convertir esto en junta de Scrum.
              </TerminalBlock>
            )}
          </div>
        )}

        {step === "thinking" && (
          <div className="renata-card">
            <p className="renata-eyebrow">status: pending_review</p>
            <h2>Respuesta válida.</h2>
            <p>La invitación queda en estado: pending_review.</p>
            <a className="renata-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              Responder después
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
