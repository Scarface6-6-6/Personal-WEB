import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  invitationOptions,
  inviteDetails,
  movieOptions,
  movieResponses,
  permissionResponses,
  progressByStep,
  rescheduleOptions,
  stepLabels,
  terminalLines,
  whatsappMessages
} from "../data/invitationContent";
import "./RenataInvite.css";

function createWhatsappUrl(message) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

function TerminalAlert({ children }) {
  return <div className="renata-terminal">{children}</div>;
}

TerminalAlert.propTypes = {
  children: PropTypes.node.isRequired
};

function TerminalBlock({ lines }) {
  return (
    <div className="renata-code-block">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </div>
  );
}

TerminalBlock.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired
};

function DeveloperNote() {
  return (
    <aside className="renata-note">
      <p className="renata-eyebrow">Nota del desarrollador:</p>
      <p>La alternativa era preguntarte por mensaje.</p>
      <p>
        Pero claramente tomé la{" "}
        <span title="Desarrollador detectado.">ruta más complicada</span>.
      </p>
    </aside>
  );
}

function StatsCard() {
  return (
    <div className="renata-stats">
      <p className="renata-eyebrow">Estadísticas innecesarias:</p>
      <dl>
        <div>
          <dt>Tiempo invertido construyendo esta página</dt>
          <dd>7 horas</dd>
        </div>
        <div>
          <dt>Tiempo que habría tomado escribir "¿Vamos al cine?"</dt>
          <dd>18 segundos</dd>
        </div>
        <div>
          <dt>Decisión tomada</dt>
          <dd>La ruta complicada</dd>
        </div>
      </dl>
    </div>
  );
}

function OptionButton({ children, onClick, variant = "default", disabled = false }) {
  return (
    <button
      className={`renata-option renata-option--${variant}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

OptionButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
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
    invitation: "",
    preferredTime: ""
  });
  const [inviteLoad, setInviteLoad] = useState(0);
  const [logoClicks, setLogoClicks] = useState(0);

  const selectedMovieResponse = movieResponses[answers.movieInterest || "me_llama"];

  const whatsappUrl = useMemo(() => {
    const message = whatsappMessages[answers.invitation] || whatsappMessages.accepted;
    return createWhatsappUrl(message);
  }, [answers.invitation]);

  useEffect(() => {
    if (step !== "reveal") {
      setInviteLoad(0);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setInviteLoad((current) => {
        if (current >= 96) {
          window.clearInterval(timer);
          return 100;
        }

        return current + 4;
      });
    }, 70);

    return () => window.clearInterval(timer);
  }, [step]);

  const choosePermission = (value) => {
    setAnswers((current) => ({ ...current, permission: value }));
    setStep("movieInterest");
  };

  const chooseMovie = (value) => {
    setAnswers((current) => ({ ...current, movieInterest: value }));
    setStep("reveal");
  };

  const chooseFinal = (value) => {
    setAnswers((current) => ({ ...current, invitation: value }));
    setStep(value);
  };

  const chooseBackup = (value) => {
    setAnswers((current) => ({ ...current, preferredTime: value }));
  };

  const countLogoClick = () => {
    setLogoClicks((current) => Math.min(current + 1, 5));
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
            <button className="renata-logo" type="button" onClick={countLogoClick}>
              Scarface_666
            </button>
            {logoClicks >= 5 && (
              <p className="renata-achievement">Achievement unlocked: Curiosity Level: High</p>
            )}
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

        {step === "movieInterest" && (
          <div className="renata-card">
            <TerminalAlert>{permissionResponses[answers.permission]}</TerminalAlert>
            <p className="renata-eyebrow">Pregunta importante</p>
            <h2>
              ¿Qué tan interesada estás en ver
              <span className="renata-title-break">{inviteDetails.movieName}?</span>
            </h2>
            <div className="renata-options">
              {movieOptions.map((option) => (
                <OptionButton key={option.value} onClick={() => chooseMovie(option.value)}>
                  {option.label}
                </OptionButton>
              ))}
            </div>
          </div>
        )}

        {step === "reveal" && (
          <div className="renata-card renata-card--reveal">
            <TerminalAlert>
              {selectedMovieResponse.alert.split("\n").map((line, index) => (
                <p key={`${line}-${index}`}>{line || "\u00A0"}</p>
              ))}
            </TerminalAlert>
            <p className="renata-eyebrow">Revelación</p>
            <h2>{selectedMovieResponse.revealTitle}</h2>
            <pre className="renata-reveal-text">{selectedMovieResponse.revealText}</pre>
            <TerminalBlock lines={terminalLines} />
            <OptionButton
              variant="primary"
              disabled={inviteLoad < 100}
              onClick={() => setStep("invitation")}
            >
              <span className="renata-loading-button">
                <span>Ver propuesta formal</span>
                <span className="renata-loading-button__status">
                  Loading invitation...
                  <span className="renata-loading-button__bar" aria-hidden="true">
                    <span style={{ width: `${inviteLoad}%` }} />
                  </span>
                  {inviteLoad}%
                </span>
              </span>
            </OptionButton>
          </div>
        )}

        {step === "invitation" && (
          <div className="renata-card">
            <p className="renata-eyebrow">Mi propuesta es la siguiente:</p>
            <h2>Vamos al cine.</h2>
            <p>
              A ver {inviteDetails.movieName}
              <br />
              {inviteDetails.mainDate}, {inviteDetails.mainTime},
              <br />
              en {inviteDetails.cinema}.
            </p>
            <div className="renata-plan">
              <p>Plan tentativo:</p>
              <ul>
                <li>🌙 Función nocturna</li>
                <li>🎬 Scary Movie</li>
                <li>🍿 Palomitas obligatorias</li>
                <li>🍬 Dulces opcionales</li>
                <li>💨 Un porrito antes si la junta organizadora lo aprueba</li>
                <li>😂 Risas muy probables</li>
              </ul>
            </div>
            <DeveloperNote />
            <div className="renata-options">
              {invitationOptions.map((option) => (
                <OptionButton
                  key={option.value}
                  variant={option.value === "accepted" ? "primary" : "default"}
                  onClick={() => chooseFinal(option.value)}
                >
                  {option.label}
                </OptionButton>
              ))}
            </div>
          </div>
        )}

        {step === "accepted" && (
          <div className="renata-card">
            <p className="renata-eyebrow">INVITACIÓN ACEPTADA</p>
            <h2>Excelente.</h2>
            <p>
              Ahora toca coordinar los pequeños detalles logísticos que normalmente se
              resuelven sin necesidad de una página web.
            </p>
            <StatsCard />
            <TerminalBlock
              lines={[
                "$ systemctl status invitation.service",
                "Status: Waiting for response",
                "Hope: High",
                "Nervousness: Moderate",
                "Bugs: None yet"
              ]}
            />
            <a className="renata-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              Abrir WhatsApp
            </a>
          </div>
        )}

        {step === "reschedule" && (
          <div className="renata-card">
            <p className="renata-eyebrow">status: plan_b</p>
            <h2>No pasa nada.</h2>
            <p>La invitación sigue vigente. El sistema tiene plan B.</p>
            <div className="renata-options">
              {rescheduleOptions.map((option) => (
                <OptionButton
                  key={option}
                  variant={answers.preferredTime === option ? "selected" : "default"}
                  onClick={() => chooseBackup(option)}
                >
                  {option}
                </OptionButton>
              ))}
            </div>
            {answers.preferredTime && (
              <>
                <TerminalAlert>
                  <p>Perfecto.</p>
                  <p>Queda pendiente coordinarlo sin convertir esto en una junta de Scrum.</p>
                </TerminalAlert>
                <a className="renata-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Coordinar por WhatsApp
                </a>
              </>
            )}
          </div>
        )}

        {step === "thinking" && (
          <div className="renata-card">
            <p className="renata-eyebrow">Respuesta registrada: pending_review</p>
            <h2>Válido.</h2>
            <p>
              Hay decisiones que requieren calma, análisis y quizá un snack. La invitación
              queda abierta.
            </p>
            <a className="renata-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              Te respondo por WhatsApp
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
