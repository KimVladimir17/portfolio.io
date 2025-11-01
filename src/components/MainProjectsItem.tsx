import { useState } from "react";
import { Trans } from "react-i18next";
import ProjectDemoModal from "./playground/ProjectDemoModal";

type props = {
  title: string;
  img: string;
  videoUrl?: string;
  text: string;
  buttons: {
    link?: string;
    git: string;
  };
  tech: {
    key: string;
    name: string;
    bg: string;
    color: string;
  }[];
};

export default function MainProjectsItem({
  title,
  tech,
  videoUrl,
  text,
  img,
  buttons,
}: props) {
  const { link, git } = buttons;
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div
      className={`main-projects-item rounded-xl relative  overflow-hidden bg-white ${
        !showDemo && `card-hover`
      }`}
    >
      <div className="main-projects-item__img scroll-container relative h-48 ">
        <img
          src={img}
          className=" w-full object-cover absolute h-auto auto-scroll "
          alt=""
        />
      </div>
      <div className="main-projects-item__info p-6 ">
        <h3 className="main-projects-item__info-title text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="main-projects-item__info-text text-gray-600 mb-4 ">
          <Trans
            i18nKey={text}
            components={{
              strong: <span className="text-blue-600 font-400" />,
            }}
          />
        </p>
        <div className="main-projects-item__info-buttons mb-8">
          {videoUrl ? (
            <button
              onClick={() => setShowDemo(true)}
              className="main-projects-item_info-button text-white bg-gray-800 mr-4 text-sm py-2 px-4 rounded-lg"
            >
              View Demo
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="main-projects-item__info-button text-white bg-gray-800 mr-4 text-sm py-2 px-4 rounded-lg"
            >
              Live Demo
            </a>
          )}
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="main-projects-item__info-button text-sm py-2 px-4  border-gray-300 border rounded-lg"
          >
            View Code
          </a>
        </div>
        <div className="main-projects-item__info-tech  flex gap-2">
          {tech.map((item) => (
            <div
              className="main-projects-item__info-tech-item px-2 text-xs rounded py-1"
              key={item.key}
              style={{
                backgroundColor: item.bg,
                color: item.color,
                border: `1px solid ${item.color}`,
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      {videoUrl && (
        <ProjectDemoModal
          videoUrl={videoUrl}
          isOpen={showDemo}
          onClose={() => setShowDemo(false)}
        />
      )}
    </div>
  );
}
