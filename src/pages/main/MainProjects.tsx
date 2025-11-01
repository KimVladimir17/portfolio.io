import MainProjectsItem from "../../components/MainProjectsItem";
import { projects as baseProjects } from "../../constans/technology";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
export default function MainProjects() {
  const { t } = useTranslation();

  const localizedProjects = baseProjects.map((p) => ({
    ...p,
    title: t(`projects.items.${p.key}.title`),
    text: t(`projects.items.${p.key}.text`),
  }));

  return (
    <div id="projects" className="main-projects  pt-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2  main-header__title-name ">
          {t("projects.title")}
        </h1>
        <p className="text-xl text-gray-600 text-center">
          {t("projects.subTitle")}
        </p>
        <div className="main-projects__content flex ">
          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay]}
            effect="coverflow"
            spaceBetween={0}
            grabCursor={true}
            slidesPerView={3}
            loop={true}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              // modifier: 3,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {localizedProjects.map((item) => (
              <SwiperSlide key={item.key} className="overflow-visible   py-20 ">
                <MainProjectsItem
                  title={item.title}
                  tech={item.tech}
                  img={item.img}
                  text={item.text}
                  buttons={item.buttons}
                  videoUrl={item.videoUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
