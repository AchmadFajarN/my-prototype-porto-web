import Nav from "./Nav";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const hamburgerActiveHandler = () => {
    setHamburgerActive(!hamburgerActive)
  }

  useMotionValueEvent(scrollY, 'change', (lastest) => {
    setScrolled(lastest > 10);
  });
  return (
    <header className={`fixed z-10 w-full flex justify-between items-center p-8 ${scrolled ? 'bg-primary/95 py-6 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <Logo />
        <Nav navActivate={hamburgerActive}/>
        <Hamburger hamburgerActive={hamburgerActive} hamburgerActiveHandler={hamburgerActiveHandler}/>
    </header>
  )
}

export default Header