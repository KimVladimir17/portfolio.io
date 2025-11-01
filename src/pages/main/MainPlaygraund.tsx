import { useTranslation } from "react-i18next";
import MainPlayLike from "../../components/playground/Main.PlayLike";
import MainPlayChat from "../../components/playground/MainPlayChat";
import MainPlaySearch from "../../components/playground/MainPlaySearch";
import MainPlayTimer from "../../components/playground/MainPlayTimer";
import MainPlayToDo from "../../components/playground/MainPlayTodo";

export default function MainPlaygraund() {
  const { t } = useTranslation();
  return (
    <div id="playground" className="main-playground py-20">
      <div className="container">
        <div className="main-playground__content">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-2  main-header__title-name ">
            {t("playgraund.title")}
          </h2>
          <p className="text-xl text-gray-600 text-center  mb-10">
            {t("playgraund.subTitle")}
          </p>
          <div className="main-playground__content-items grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            <MainPlayToDo />
            <MainPlayLike />
            <MainPlayChat />
            <MainPlayTimer />
            <MainPlaySearch />
          </div>
        </div>
      </div>
    </div>
  );
}
