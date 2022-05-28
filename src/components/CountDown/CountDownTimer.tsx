import { useState } from "react";
import { useCountDown } from "../../Hooks/useCountDown";
import SelectDateForCountDown from "../SelectDateForCountDown/SelectDateForCountDown";
import styles from "./CountDownTimer.module.css";

const CountDownTimer = () => {
  const [description, setDescription] = useState(
    "Contagem Regressiva para o próximo ano"
  );
  const [date, setDate] = useState<Date | string>(
    new Date(`1 Jan ${new Date().getFullYear() + 1}`)
  );
  const [days, hours, minutes, seconds] = useCountDown(date);

  return (
    <div className={styles.container}>
      <SelectDateForCountDown
        setText={setDescription}
        setTargetDate={setDate}
      />
      <div className={styles.countDownContainer}>
        <h2>{description}</h2>
        <div className={styles.timeContainer}>
          <div>
            <p>{days}</p>
            <label>Dias</label>
          </div>
          <div>
            <p>{hours}</p>
            <label>Horas</label>
          </div>
          <div>
            <p>{minutes}</p>
            <label>Minutos</label>
          </div>
          <div>
            <p>{seconds}</p>
            <label>Segundos</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
