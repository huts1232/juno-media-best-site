"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type ContactFormProps = {
  content: {
    ariaLabel: string;
    submitLabel: string;
    success: string;
    fields: {
      name: FormField;
      email: FormField;
      company: FormField;
      budget: FormField & {
        options: readonly string[];
      };
      message: FormField;
    };
    errors: {
      name: string;
      email: string;
      budget: string;
      message: string;
    };
  };
};

type FormField = {
  label: string;
  placeholder: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

export function ContactForm({ content }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, content.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  return (
    <section className="contact-section" aria-label={content.ariaLabel}>
      <div className="site-container contact-section__inner">
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <FormInput
            field="name"
            type="text"
            value={values.name}
            error={errors.name}
            copy={content.fields.name}
            onChange={handleChange}
          />
          <FormInput
            field="email"
            type="email"
            value={values.email}
            error={errors.email}
            copy={content.fields.email}
            onChange={handleChange}
          />
          <FormInput
            field="company"
            type="text"
            value={values.company}
            error={errors.company}
            copy={content.fields.company}
            onChange={handleChange}
          />
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-budget">
              {content.fields.budget.label}
            </label>
            <select
              id="contact-budget"
              name="budget"
              className="contact-input"
              value={values.budget}
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={errors.budget ? "contact-budget-error" : undefined}
              onChange={handleChange}
            >
              <option value="" disabled>
                {content.fields.budget.placeholder}
              </option>
              {content.fields.budget.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.budget ? (
              <p id="contact-budget-error" className="contact-error">
                {errors.budget}
              </p>
            ) : null}
          </div>
          <div className="contact-field contact-field--full">
            <label className="contact-label" htmlFor="contact-message">
              {content.fields.message.label}
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="contact-input contact-textarea"
              value={values.message}
              placeholder={content.fields.message.placeholder}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={handleChange}
            />
            {errors.message ? (
              <p id="contact-message-error" className="contact-error">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="contact-form__footer">
            <MagneticButton className="contact-submit" type="submit">
              {content.submitLabel}
            </MagneticButton>
            {submitted ? (
              <p className="contact-success" role="status">
                {content.success}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function FormInput({
  field,
  type,
  value,
  error,
  copy,
  onChange,
}: {
  field: keyof Pick<ContactFormValues, "name" | "email" | "company">;
  type: string;
  value: string;
  error?: string;
  copy: FormField;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const id = `contact-${field}`;
  const errorId = `${id}-error`;

  return (
    <div className="contact-field">
      <label className="contact-label" htmlFor={id}>
        {copy.label}
      </label>
      <input
        id={id}
        name={field}
        type={type}
        className="contact-input"
        value={value}
        placeholder={copy.placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={onChange}
      />
      {error ? (
        <p id={errorId} className="contact-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validate(values: ContactFormValues, messages: ContactFormProps["content"]["errors"]) {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = messages.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = messages.email;
  if (!values.budget) errors.budget = messages.budget;
  if (!values.message.trim()) errors.message = messages.message;

  return errors;
}
