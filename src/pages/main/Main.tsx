import "./Main.scss";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "@recoil/atoms/loadingState";
import ImgRocket from "@assets/images/rocket.svg";
import ImgEarth from "@assets/images/earth.svg";
import ImgMoon from "@assets/images/moon.svg";
import ImgAstronaut from "@assets/images/astronaut.svg";
import Typing from "@components/layout/typing/Typing";
function Main() {
  const setLoading = useSetRecoilState(isLoadingState); //로딩

  return (
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
          <img id="object_moon" className="object_moon" src={ImgMoon} alt="" />
        </div>
        <div className="box_astronaut">
          <img className="object_astronaut" src={ImgAstronaut} alt="" />
        </div>
      </div>
      <div className="main-page-inner">
        <div className="typing-title">{Typing("Portpolio ")}</div>
      </div>
    </div>
  );
}

export default Main;
