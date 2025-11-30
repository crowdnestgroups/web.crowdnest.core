import { Icon } from "../ui/Icon";
import { Button } from "../ui/button";

const LandingHeader = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon name="logo" />
        <p className="text-2xl font-bold">CrowdNest</p>
      </div>
      <div></div>
      <Button>Get Started</Button>
    </nav>
  );
};

export default LandingHeader;
