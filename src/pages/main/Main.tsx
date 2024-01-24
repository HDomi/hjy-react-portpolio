import "./Main.scss";
// import { useEffect, useState } from "react";
import ImgRocket from "@assets/images/rocket.svg";
import ImgEarth from "@assets/images/earth.svg";
import ImgMoon from "@assets/images/moon.svg";
import ImgAstronaut from "@assets/images/astronaut.svg";
import Typing from "@components/layout/typing/Typing";
import FadeInWrapper from "@components/layout/pageWapper/FadeInWrapper";
import { useRouter } from "@hooks/useRouter";
import { motion } from "framer-motion";
import { circleContainer, circleItemAni } from "@utils/importAnimations";
function Main() {
  const router = useRouter();
  const circleItem = [
    {
      id: 1,
      name: "Introduce",
      path: "/introduce",
    },
    {
      id: 2,
      name: "Portpolio",
      path: "/portpolio",
    },
    {
      id: 3,
      name: "Skills",
      path: "/skills",
    },
  ];
  return (
    <FadeInWrapper>
      <div className="page">
        <div className="objects">
          <img className="object_rocket" src={ImgRocket} alt="" />
          <div className="earth-moon">
            <img
              id="object_earth"
              className="object_earth"
              src={ImgEarth}
              alt=""
            />
            <img
              id="object_moon"
              className="object_moon"
              src={ImgMoon}
              alt=""
            />
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" src={ImgAstronaut} alt="" />
          </div>
        </div>
        <div className="main-page-inner">
          <motion.div
            className="center-btn-wrap"
            variants={circleContainer}
            initial="hidden"
            animate="visible"
          >
            {circleItem.map((item, idx) => (
              <motion.div
                key={idx}
                className={`circle-btn btn${item.id}`}
                variants={circleItemAni}
                whileHover={{ scale: 0.8 }}
                onClick={() => router.push(item.path)}
              >
                <p>{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* <div className="typing-title">{Typing("황재영의\nPortpolio")}</div> */}
      </div>
    </FadeInWrapper>
  );
}

export default Main;
