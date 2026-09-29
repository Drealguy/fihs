"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import ArrowUpRight from "./ArrowUpRight";
import { ArrowLeftIcon, CheckIcon } from "./Icons";

type Answers = { name: string; email: string; phone: string; topic: string; message: string };

type Step = {
  field: keyof Answers;
  type: "text" | "email" | "tel" | "choice" | "textarea";
  question: (a: Answers) => string;
  hint: string;
  placeholder?: string;
  optional?: boolean;
  validate?: (value: string) => string | null;
};

const TOPICS = [
  "Admissions",
  "School Fees & Payment Plans",
  "Boarding",
  "Visiting the School",
  "Something Else",
];

const WHATSAPP_NUMBER = "2348060805020";
const EMAIL = "info@fountain.edu.ng";

const firstName = (a: Answers) => a.name.trim().split(/\s+/)[0];

// Selected topics are stored as one comma-separated string, in the order they're listed.
const splitTopics = (topic: string) => (topic ? topic.split(", ") : []);

const STEPS: Step[] = [
  {
    field: "name",
    type: "text",
    question: () => "Hello! What's your name?",
    hint: "Parent or guardian's full name.",
    placeholder: "Type your name here",
    validate: (v) => (v.trim() ? null : "Please tell us your name."),
  },
  {
    field: "email",
    type: "email",
    question: (a) => `Nice to meet you, ${firstName(a)}. What's your email address?`,
    hint: "So we can reply to you.",
    placeholder: "name@example.com",
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Please enter a valid email address.",
  },
  {
    field: "phone",
    type: "tel",
    question: () => "And a phone or WhatsApp number?",
    hint: "Optional, but it helps us reach you faster.",
    placeholder: "+234 800 000 0000",
    optional: true,
    validate: (v) =>
      !v.trim() || /^\+?[\d\s()-]{7,}$/.test(v.trim()) ? null : "Please enter a valid phone number.",
  },
  {
    field: "topic",
    type: "choice",
    question: () => "What would you like to talk about?",
    hint: "Choose all that apply.",
    validate: (v) => (v ? null : "Please choose at least one topic."),
  },
  {
    field: "message",
    type: "textarea",
    question: (a) => {
      const topics = splitTopics(a.topic);
      if (topics.length > 1) return "Tell us a bit more about what you'd like to discuss.";
      return topics[0] === "Something Else"
        ? "What's on your mind?"
        : `Tell us more about ${topics[0].toLowerCase()}.`;
    },
    hint: "Ask anything. Our team will get back to you.",
    placeholder: "Type your message here",
    validate: (v) => (v.trim() ? null : "Please write a short message."),
  },
];

const AUTOCOMPLETE: Partial<Record<keyof Answers, string>> = {
  name: "name",
  email: "email",
  phone: "tel",
};

const LABELS: Record<keyof Answers, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  topic: "Topics",
  message: "Message",
};

export default function ContactFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ name: "", email: "", phone: "", topic: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const fieldRef = useRef<HTMLElement | null>(null);
  // Don't steal focus (or pop the phone keyboard) on first page load.
  const interacted = useRef(false);

  const isReview = step === STEPS.length;
  const current = STEPS[step];

  useEffect(() => {
    setError(null);
    if (interacted.current) fieldRef.current?.focus();
  }, [step]);

  const goTo = (next: number) => {
    interacted.current = true;
    setStep(next);
  };

  const setValue = (value: string) => {
    if (!current) return;
    setAnswers((a) => ({ ...a, [current.field]: value }));
    if (error) setError(null);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const problem = current.validate?.(answers[current.field]) ?? null;
    if (problem) {
      setError(problem);
      fieldRef.current?.focus();
      return;
    }
    goTo(step + 1);
  };

  const selectedTopics = splitTopics(answers.topic);

  const toggleTopic = (topic: string) => {
    setAnswers((a) => {
      const chosen = splitTopics(a.topic);
      const next = chosen.includes(topic) ? chosen.filter((t) => t !== topic) : [...chosen, topic];
      return { ...a, topic: TOPICS.filter((t) => next.includes(t)).join(", ") };
    });
    if (error) setError(null);
  };

  // Letter keys toggle topics on the choice question (A, B, C...).
  useEffect(() => {
    if (current?.type !== "choice") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const i = e.key.toUpperCase().charCodeAt(0) - 65;
      if (e.key.length === 1 && i >= 0 && i < TOPICS.length) toggleTopic(TOPICS[i]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const summary = [
    "Hello Fountain International High School,",
    "",
    `Name: ${answers.name.trim()}`,
    `Email: ${answers.email.trim()}`,
    answers.phone.trim() && `Phone: ${answers.phone.trim()}`,
    `Topics: ${answers.topic}`,
    "",
    answers.message.trim(),
  ]
    .filter((line) => line !== "")
    .join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Enquiry from ${answers.name.trim()}: ${answers.topic}`
  )}&body=${encodeURIComponent(summary)}`;

  const progress = step / STEPS.length;
  const value = current ? answers[current.field] : "";

  return (
    <section className="contact-flow">
      <h1 className="visually-hidden">Contact Fountain International High School</h1>
      <div className="contact-flow-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className="contact-flow-inner" key={step}>
        {step > 0 && (
          <button className="contact-flow-back" onClick={() => goTo(step - 1)}>
            <ArrowLeftIcon /> Back
          </button>
        )}

        {!isReview ? (
          <form onSubmit={submit} noValidate>
            <p className="contact-flow-count">
              Question {step + 1} of {STEPS.length}
            </p>

            {current.type === "choice" ? (
              <fieldset className="contact-flow-fieldset">
                <legend className="contact-flow-question">{current.question(answers)}</legend>
                <p className="contact-flow-hint">{current.hint}</p>
                <div className="contact-flow-choices">
                  {TOPICS.map((topic, i) => {
                    const isSelected = selectedTopics.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        ref={i === 0 ? (el) => { fieldRef.current = el; } : undefined}
                        className={isSelected ? "contact-choice selected" : "contact-choice"}
                        aria-pressed={isSelected}
                        onClick={() => toggleTopic(topic)}
                      >
                        <span className="contact-choice-key" aria-hidden="true">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {topic}
                        <span className="contact-choice-check" aria-hidden="true">
                          {isSelected && <CheckIcon />}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {error && (
                  <p className="contact-flow-error" role="alert">
                    {error}
                  </p>
                )}
                <div className="contact-flow-actions">
                  <button type="submit" className="btn-primary">
                    Continue <CheckIcon />
                  </button>
                  {selectedTopics.length > 0 && (
                    <span className="contact-flow-selected">{selectedTopics.length} selected</span>
                  )}
                </div>
              </fieldset>
            ) : (
              <>
                <label htmlFor="contact-field" className="contact-flow-question">
                  {current.question(answers)}
                </label>
                <p className="contact-flow-hint" id="contact-hint">
                  {current.hint}
                </p>
                {current.type === "textarea" ? (
                  <textarea
                    id="contact-field"
                    ref={(el) => { fieldRef.current = el; }}
                    className="contact-flow-input"
                    rows={4}
                    value={value}
                    placeholder={current.placeholder}
                    aria-describedby="contact-hint"
                    aria-invalid={!!error}
                    onChange={(e) => setValue(e.target.value)}
                  />
                ) : (
                  <input
                    id="contact-field"
                    ref={(el) => { fieldRef.current = el; }}
                    className="contact-flow-input"
                    type={current.type}
                    value={value}
                    placeholder={current.placeholder}
                    autoComplete={AUTOCOMPLETE[current.field]}
                    aria-describedby="contact-hint"
                    aria-invalid={!!error}
                    onChange={(e) => setValue(e.target.value)}
                  />
                )}
                {error && (
                  <p className="contact-flow-error" role="alert">
                    {error}
                  </p>
                )}
                <div className="contact-flow-actions">
                  <button type="submit" className="btn-primary">
                    {current.optional && !value.trim() ? "Skip" : "OK"} <CheckIcon />
                  </button>
                  {current.type !== "textarea" && (
                    <span className="contact-flow-enter">
                      or press <kbd>Enter ↵</kbd>
                    </span>
                  )}
                </div>
              </>
            )}
          </form>
        ) : (
          <div className="contact-flow-review">
            <p className="contact-flow-count">All done</p>
            <h2 className="contact-flow-question">
              Thank you, {firstName(answers)}! Here&apos;s your message.
            </h2>
            <dl className="contact-flow-summary">
              {STEPS.map((s, i) => (
                <div key={s.field}>
                  <dt>{LABELS[s.field]}</dt>
                  <dd>{answers[s.field].trim() || "Not provided"}</dd>
                  <button className="contact-flow-edit" onClick={() => goTo(i)}>
                    Edit
                  </button>
                </div>
              ))}
            </dl>
            <p className="contact-flow-hint">
              Choose how to send it. Your WhatsApp or email app will open with everything filled in.
              Just press send.
            </p>
            <div className="contact-flow-send">
              <a className="btn-primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Send on WhatsApp <ArrowUpRight />
              </a>
              <a className="btn-outline" href={mailHref}>
                Send by Email <ArrowUpRight />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
