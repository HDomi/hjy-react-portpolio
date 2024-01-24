import "./Main.scss";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "@recoil/atoms/loadingState";
function Main() {
  const setLoading = useSetRecoilState(isLoadingState); //로딩

  return (
    <div className="page">
      <div className="page-inner">test</div>
    </div>
  );
}
export default Main;
