import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const GITHUB_MAIN_URL1 = import.meta.env.VITE_GITHUB_MAIN_URL1;
const GITHUB_MAIN_URL2 = import.meta.env.VITE_GITHUB_MAIN_URL2;
const EMAIL_JS_SERVICE = import.meta.env.VITE_EMAIL_JS_SERVICE;
const EMAIL_JS_TEMPLATE = import.meta.env.VITE_EMAIL_JS_TEMPLATE;
const EMAIL_JS_KEY = import.meta.env.VITE_EMAIL_JS_KEY;

export default function MainContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = formRef.current;
    if (!form) return;

    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      return;
    }
    form.from_name.value = name;
    form.from_email.value = email;
    form.subject.value = subject;
    form.message.value = message;
    setStatus("sending");
    emailjs
      .sendForm(
        `${EMAIL_JS_SERVICE}`,
        `${EMAIL_JS_TEMPLATE}`,
        form,
        `${EMAIL_JS_KEY}`
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(() => {
            form.reset();
            setStatus("idle");
          }, 2000);
        },
        () => setStatus("error")
      );
  };
  return (
    <section id="contact" className="py-12  bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-2  main-header__title-name ">
          {t("contact.title")}
        </h2>
        <p className="text-xl text-gray-600 text-center  mb-10">
          {t("contact.subTitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-[447px]"
              >
                <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                <p className="text-lg font-semibold text-gray-700">
                  {t("contact.success")}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                ref={formRef}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="text"
                  name="from_name"
                  required
                  disabled={status === "sending"}
                  placeholder={t("contact.name")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                />
                <input
                  type="email"
                  name="from_email"
                  required
                  disabled={status === "sending"}
                  placeholder={t("contact.email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  required
                  disabled={status === "sending"}
                  placeholder={t("contact.subject")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                />
                <textarea
                  name="message"
                  required
                  disabled={status === "sending"}
                  placeholder={t("contact.message")}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full text-white py-3 rounded-lg font-semibold ${
                    status === "sending"
                      ? "bg-gray-400"
                      : "bg-blue-600 hover:bg-blue-700 transition-colors "
                  }`}
                >
                  {t("contact.btn")}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-center">
                    Something went wrong
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold">{t("contact.email")}</p>
                <a
                  href="mailto:vladimir.kim200017@gmail.com"
                  className="text-gray-500 hover:text-blue-500"
                >
                  vladimir.kim200017@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaPhoneAlt className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold">{t("contact.phone")}</p>
                <a
                  href="tel:+821074956522"
                  className="text-gray-500 hover:text-green-600"
                >
                  +82 10-7495-6522
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaGithub className="text-gray-700 text-xl" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">GitHub</p>
                <a
                  href={GITHUB_MAIN_URL2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black"
                >
                  github.com/hedgehogkim
                </a>
                <a
                  href={GITHUB_MAIN_URL1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black "
                >
                  github.com/KimVladimir17
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
