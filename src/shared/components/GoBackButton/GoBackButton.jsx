import { useLocation, useNavigate } from "react-router-dom";

import s from "./goBackButton.module.css";

const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const goBack = () => navigate(from);

  return (
    <button type="button" onClick={goBack} className={s.btn}>
      Go Back
    </button>
  );
};

export default GoBackButton;
