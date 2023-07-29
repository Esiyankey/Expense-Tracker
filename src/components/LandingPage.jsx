import {useState} from "react";
import { Navbar } from './Navbar'
import { Landing } from './Landing'
import { Footer } from './footer'

export const LandingPage = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(true);

    console.log("hello, the button is clicked ");
  };
  const handleCloseLinks=()=>{
    setShowLinks(false)
  }

  return (
    <div>
      <Navbar handleShowLinks={handleShowLinks} handleCloseLinks={handleCloseLinks} showLinks={showLinks}/>
      <Landing showLinks={showLinks}/>
      <Footer />
    </div>
  );
};
