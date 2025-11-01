import "./mainPage.css";
import MainHeader from "./MainHeader";
import MainAbout from "./MainAbout";
import MainProjects from "./MainProjects";
import SkillsSection from "./MainSkills";
import MainPlaygraund from "./MainPlaygraund";
import MainContact from "./MainContact";

export default function MainPage() {
  return (
    <div id="home" className="mian-page">
      <MainHeader></MainHeader>
      <MainAbout></MainAbout>
      <MainProjects />
      <SkillsSection />
      <MainPlaygraund />
      <MainContact />
    </div>
  );
}
