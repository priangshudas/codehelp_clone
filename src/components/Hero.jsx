import React from "react";
import "../styles/Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Priangshu", "Love"],
    loop: {},
  });

  // const text = "Priangshu";

  return (
    <>
      <main>
        <div id="working_area">
          <div id="div_left">
            <h1>
              Learn <span>With {text}</span>
              <span>
                <Cursor />
              </span>
            </h1>
            <p>The Ultimate Guide To Ace SDE Interviews.</p>
            <div id="btn_div">
              <button id="btn3">View Cources</button>
              <button id="btn4">Watch Video</button>
            </div>
            <div id="review_div">
              <div id="img_div">
                <img
                  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FIMG_9037_086d5a6a8b.jpg&w=48&q=100"
                  alt=""
                />
                <img
                  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2FScreenshot_2022_11_19_161704_fe89795d3e.png&w=48&q=100"
                  alt=""
                />
                <img
                  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2F20220907_122714_e19e9a8b7a.png&w=48&q=100"
                  alt=""
                />
                <img
                  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2F1665736772625_b861134636.jpg&w=48&q=100"
                  alt=""
                />
                <img
                  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fxjr5e4a59w60z0ak1d68_9ac99d9934.jpg&w=48&q=100"
                  alt=""
                />
              </div>
              <div id="p_div">
                <p>
                  35000 +<br />
                  <span>Happy Students</span>
                </p>
              </div>
            </div>
          </div>
          <div id="div_right">
            <img
              src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75"
              alt="Image"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
