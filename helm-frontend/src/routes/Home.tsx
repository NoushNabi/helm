import InstructLanding from "@/components/Landing/InstructLanding";
import LiteLanding from "@/components/Landing/LiteLanding";
import MMLULanding from "@/components/Landing/MMLULanding";
import HEIMLanding from "@/components/Landing/HEIMLanding";
import VHELMLanding from "@/components/VHELMLanding";
import HomeLanding from "@/components/Landing/HomeLanding";

export default function Home() {
  // TODO consider a more streamlined way to do this?
  if (window.PROJECT_ID === "lite") {
    return <LiteLanding />;
  } else if (window.PROJECT_ID === "instruct") {
    return <InstructLanding />;
  } else if (window.PROJECT_ID === "heim") {
    return <HEIMLanding />;
  } else if (window.PROJECT_ID === "mmlu") {
    return <MMLULanding />;
  } else if (window.PROJECT_ID === "vhelm") {
    return <VHELMLanding />;
  } else if (window.PROJECT_ID === "home") {
    return <HomeLanding />;
  } else {
    return <LiteLanding />;
  }
}
