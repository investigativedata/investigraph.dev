import StartScreen from "./screens/Start";
import AboutScreen from "./screens/About";
import TechnologyScreen from "./screens/Technology";
import TutorialScreen from "./screens/Tutorial";
import FeatureScreen from "./screens/Features";

export default function Page() {
  return (
    <>
      <StartScreen />
      <FeatureScreen />
      <TechnologyScreen />
      <TutorialScreen />
      <AboutScreen />
    </>
  );
}
