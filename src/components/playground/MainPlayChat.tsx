import { useEffect, useRef, useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

interface Message {
  role: string;
  content: string;
}

export default function MainPlayChat() {
  const { t } = useTranslation();
  const questions = t("playgraund.chat.questions", {
    returnObjects: true,
  }) as string[];
  const answers = t("playgraund.chat.answers", {
    returnObjects: true,
  }) as string[];
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (chatRef.current) observer.observe(chatRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && messages.length === 0) {
      setLoading(true);
      setDisabled(true);
      const typingTimeout = setTimeout(() => {
        setLoading(false);
        setDisabled(false);
        setMessages([
          {
            role: "assistant",
            content: t("playgraund.chat.greeting"),
          },
        ]);
      }, 2000);

      return () => clearTimeout(typingTimeout);
    }
  }, [isVisible]);

  useEffect(() => {
    const chat = chatRef.current;
    if (chat) {
      chat.scrollTo({
        top: chat.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  const askQuestion = (index: number) => {
    setDisabled(true);
    const question = questions[index];
    const answer = answers[index];
    const newMsg = { role: "user", content: question };
    setMessages((prev) => [...prev, newMsg]);
    setTimeout(() => {
      setLoading(true);
    }, 1300);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
      setLoading(false);
      setDisabled(false);
    }, 4000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200   row-span-2 col-span-1 flex flex-col justify-between">
      <h2 className="text-2xl font-bold  mb-4 flex items-center gap-5">
        <IoIosChatbubbles color="#4f45e5" />
        Chat with me
      </h2>

      <div
        ref={chatRef}
        className=" flex flex-col space-y-3 mb-4 border rounded-lg p-3 bg-blue-200 h-80  space-y-1 overflow-y-auto text-sm scroll-container"
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex items-end gap-2 ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.role === "assistant" && (
              <div className="flex-shrink-0">
                <FaUser
                  size={28}
                  className="text-blue-600 bg-white p-1 rounded-full"
                />
              </div>
            )}
            <div
              className={`p-2 rounded-lg max-w-[70%] text-sm leading-snug ${
                m.role === "user"
                  ? "bg-yellow-200 text-gray-900"
                  : "bg-white border text-gray-900"
              }`}
            >
              <Trans
                i18nKey={m.content}
                components={{
                  strong: <span className="text-blue-700 font-semibold" />,
                }}
              />
            </div>
            {m.role === "user" && (
              <div className="flex-shrink-0">
                <FaUser
                  size={28}
                  className="text-gray-600 bg-gray-200 p-1 rounded-full"
                />
              </div>
            )}
          </motion.div>
        ))}
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-2 text-gray-500 text-sm"
          >
            <FaUser
              size={28}
              className="text-blue-600 bg-blue-100 p-1 rounded-full"
            />
            <div className="bg-white p-2 rounded-lg flex space-x-1">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.1s]"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex flex-col gap-2 justify-center ">
        {questions.map((q, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={() => askQuestion(i)}
            disabled={disabled}
            className={`${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-3 py-2 rounded-lg transition text-sm`}
          >
            {q}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
