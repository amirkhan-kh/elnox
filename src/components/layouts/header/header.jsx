import ThemeToggle from "../../ui/toggle";
import NavLink from "../../ui/nav-link";
import StarBorder from "../../ui/star-border";
import { ResponsiveSoundManager } from "../../ui/responsive-sound";

export default function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4 sm:gap-0">
       
          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="4.5s"
          >
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="AboutMe" />
            <NavLink href="/skills" label="Skills" />
            <NavLink href="/projects" label="Projects" />
          </StarBorder>

        <div className="flex items-center justify-between gap-23 sm:gap-4">
          <ThemeToggle />
          <ResponsiveSoundManager />
        </div>
      </div>
    </header>
  );
}
