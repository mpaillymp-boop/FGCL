"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  company: string;
  phone: string;
  project: string;
};

const EMPTY: Fields = { name: "", company: "", phone: "", project: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Indiquez votre nom et prénom.";
    if (!fields.phone.trim()) next.phone = "Indiquez un numéro pour vous joindre.";
    if (!fields.project.trim()) next.project = "Décrivez brièvement votre besoin.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // No backend is wired yet: open the user's mail client with the request
    // pre-filled so the demande reaches FGCL. Replace with an API route later.
    try {
      const body = `Nom et prénom: ${fields.name}%0D%0AEntreprise: ${fields.company}%0D%0ATéléphone: ${fields.phone}%0D%0A%0D%0AProjet / besoin:%0D%0A${fields.project}`;
      const mailto = `mailto:contact@fgcl.cm?subject=${encodeURIComponent(
        "Demande de projet - " + (fields.company || fields.name)
      )}&body=${body}`;
      window.location.href = mailto;
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 outline-none transition-colors focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fgcl-500 text-navy-950">
              <CheckCircle2 size={30} />
            </span>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-navy-950">
              Votre demande est prête
            </h3>
            <p className="max-w-sm text-sm text-slate-600">
              Votre logiciel de messagerie s&apos;est ouvert avec votre demande.
              Vous pouvez aussi nous appeler directement.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-500"
            >
              <Phone size={16} />
              {CONTACT.phone}
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={false}
            className="space-y-5"
            noValidate
          >
            <Field
              id="name"
              label="Nom et prénom"
              value={fields.name}
              onChange={set("name")}
              error={errors.name}
              className={inputClass}
            />
            <Field
              id="company"
              label="Entreprise"
              value={fields.company}
              onChange={set("company")}
              error={undefined}
              optional
              className={inputClass}
            />
            <Field
              id="phone"
              label="Téléphone"
              type="tel"
              value={fields.phone}
              onChange={set("phone")}
              error={errors.phone}
              className={inputClass}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="project" className="text-sm font-medium text-slate-700">
                Votre projet ou votre besoin
              </label>
              <textarea
                id="project"
                rows={5}
                value={fields.project}
                onChange={set("project")}
                aria-invalid={!!errors.project}
                aria-describedby={errors.project ? "project-error" : undefined}
                className={inputClass + " resize-none"}
              />
              {errors.project && (
                <p id="project-error" className="text-xs text-red-600">
                  {errors.project}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-fgcl-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-fgcl-400 active:scale-[0.98] disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
              Envoyer ma demande
            </button>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Une erreur est survenue. Appelez-nous au {CONTACT.phone}.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  optional = false,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  error?: string;
  type?: string;
  optional?: boolean;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {optional && <span className="ml-1 text-xs text-slate-500">(optionnel)</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={className}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
