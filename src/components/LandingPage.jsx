import {useState} from "react";
import { Navbar } from './Navbar'
import { Landing } from './Landing'
import { Footer } from './footer'

export const LandingPage = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const handleCloseModal = () => {
    setshowModal(false);
  };

  const handleShowModal = () => {
    setshowModal(true);
  };

  const handleShowLinks = () => {
    setShowLinks(true);

    console.log("hello, the button is clicked ");
  };
  const handleCloseLinks=()=>{
    setShowLinks(false)
  }

  return (
    <div>
      <Navbar handleCloseModal={handleCloseModal} showModal={showModal} handleShowModal={handleShowModal} handleShowLinks={handleShowLinks} handleCloseLinks={handleCloseLinks} showLinks={showLinks}/>
      <Landing handleShowModal={handleShowModal} handleCloseLinks={handleCloseLinks} handleCloseModal={handleCloseModal} showLinks={showLinks} showModal={showModal} />
      <Footer />
    </div>
  );
};
