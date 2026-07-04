import { useState, type FormEvent } from "react";

export function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [attending, setAttending] = useState<"yes" | "no">("yes");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — wire to backend later.
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto grid gap-5 text-left"
    >
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Nombre completo
        </label>
        <input
          required
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors placeholder:text-muted-foreground/60"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Correo electrónico
        </label>
        <input
          required
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors placeholder:text-muted-foreground/60"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-2">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Invitados
          </label>
          <input
            required
            type="number"
            min={1}
            max={6}
            defaultValue={1}
            name="guests"
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            ¿Asistirás?
          </label>
          <div className="flex gap-2 pt-2">
            {(["yes", "no"] as const).map((v) => (
              <button
                type="button"
                key={v}
                onClick={() => setAttending(v)}
                className={`flex-1 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                  attending === v
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-border text-muted-foreground hover:border-gold/60"
                }`}
              >
                {v === "yes" ? "Sí" : "No"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Restricciones alimentarias
        </label>
        <textarea
          name="diet"
          rows={3}
          placeholder="Vegetariano, alergias, etc."
          className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-sans text-base transition-colors resize-none placeholder:text-muted-foreground/60"
        />
      </div>

      <button
        type="submit"
        className="mt-4 group relative overflow-hidden border border-ink bg-ink text-cream py-4 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-transparent hover:text-ink"
      >
        {status === "sent" ? "Gracias por confirmar" : "Confirmar asistencia"}
      </button>
    </form>
  );
}
