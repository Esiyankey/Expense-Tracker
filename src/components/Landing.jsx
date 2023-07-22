import { useEffect } from "react";
import "../styles/landingpage.css";
import image from "../assets/expense-tracker-.png";
import chart1 from "../assets/chart2.png";
import chart2 from "../assets/chartimage2.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Landing = () => {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
     

      <div className="landing-page">
        <div className="landing">
          <div className="text">
            <div className="header">
              <h1>Save money, without thinking about it. </h1>
            </div>
            <p>
              Expenso analyzes your spending and automatically saves the perfect
              amount everyday so that you don't have to think about it.
            </p>
            <button className="button">SIGN UP FOR FREE</button>
          </div>
          <div className="image" data-aos="fade-left">
            <img src={image} alt="a dummy image here" />
          </div>
        </div>
        <div className="section ">
          <div className="text-chart">
            <h3>Your Expense Charts</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            exercitationem soluta saepe tempora recusandae expedita possimus
            fugit sapiente quod. Voluptatum autem repellendus possimus sed
            minima cupiditate iste maxime non corrupti!
          </div>
          <div className="chart-image " data-aos="fade-right">
            <img src={chart1} alt="a chart image here" />
          </div>
        </div>
        <div className="section sec2">
          <div className="text-chart">
            <h3>Get Unlimited Information</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            exercitationem soluta saepe tempora recusandae expedita possimus
            fugit sapiente quod. Voluptatum autem repellendus possimus sed
            minima cupiditate iste maxime non corrupti!
          </div>
          <div className="chart-image2" data-aos="zoom-in-up">
            <img src={chart2} alt="a chart image here " />
          </div>
        </div>
      </div>
    </>
  );
};
