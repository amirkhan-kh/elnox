import ThemeToggle from '../../ui/toggle';
import NavLink from '../../ui/nav-link';
import StarBorder from '../../ui/star-border';
import AnimatedContent from '../../ui/animated-content';
import SpaceSoundManager from '../../../media/space-sounds';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="bounce.out"
      initialOpacity={0.2}
      animateOpacity
      scale={0.1}
      threshold={0.2}
      delay={0.3}
    >
       <StarBorder as="button" className="custom-class" color="cyan" speed="4.5s">
        <NavLink  href="/" label="Home" />
        <NavLink  href="/about" label="About" />
        <NavLink  href="/skills" label="Skills" />
        <NavLink  href="/projects" label="Projects" />
      </StarBorder>
      
    </AnimatedContent>
     
     <div className='flex items-center gap-3'>
    <ThemeToggle  />
    <SpaceSoundManager/>

     </div>


    </header>
  );
}
