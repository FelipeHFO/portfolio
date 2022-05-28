import { Dispatch, memo, SetStateAction, useState } from "react";
import styles from "./SelectDateForCountDown.module.css";

type SelectDateForCountDownProps = {
  setText: Dispatch<SetStateAction<string>>;
  setTargetDate: Dispatch<SetStateAction<Date | string>>;
};

const SelectDateForCountDown = ({
  setText,
  setTargetDate,
}: SelectDateForCountDownProps) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [textInput, setTextInput] = useState("");
  const [dateInput, setDateInput] = useState(
    new Date().toISOString().substring(0, 10)
  );

  const calculateCountDown = () => {
    if (!textInput) {
      return alert("Digite uma descrição para a data!");
    }

    const day = `${dateInput.split("-")[2]}`;
    const month = `${months.find(
      (m, i) => i === parseInt(dateInput.split("-")[1]) - 1
    )}`;
    const year = `${dateInput.split("-")[0]}`;
    const formattedDate = `${day} ${month} ${year}`;

    if (
      new Date(formattedDate).toISOString().substring(0, 10) ===
      new Date().toISOString().substring(0, 10)
    ) {
      return alert("Selecione uma data diferente de hoje!");
    }

    setText(textInput);
    setTargetDate(formattedDate);
  };

  return (
    <div>
      <h2>Selecione uma data especial e veja quanto tempo falta!</h2>
      <input
        type="text"
        placeholder="Ex: Quanto tempo para o Natal?"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        className={styles.textInput}
      />
      <input
        type="date"
        defaultValue={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        className={styles.dateInput}
      />
      <button
        type="button"
        onClick={calculateCountDown}
        className={styles.button}
      >
        Ver resultado!
      </button>
    </div>
  );
};

export default memo(SelectDateForCountDown);
