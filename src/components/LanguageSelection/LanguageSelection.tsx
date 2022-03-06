import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LanguageSelection.module.css";

type LanguageSelectionProps = {
  language: string;
}

const LanguageSelection = ({ language }: LanguageSelectionProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <button 
      type="button" 
      onClick={() => setVisible(!visible)}
      className={styles.change_language_button}
    >
      <Image
        width="20"
        height="20"
        src="/globe-solid.svg"
        alt="Ícone de um globo, representando que o site atende a mais que um idioma"
      />
      <p>{language}</p>
      <Image
        width="20"
        height="20"
        src="/caret-down-solid.svg"
        alt="Ícone de uma flecha, representando que é um menu e clicando mostra as opções"
      />
      {
        visible
        ? (
          <ul className={styles.options}>
            <li>
              <Link href="/pt-br">
                <a>PT-BR</a>
              </Link>
            </li>
            <li>
              <Link href="/en">
                <a>EN</a>
              </Link>
            </li>
          </ul>
          ) : null
        }
    </button>
  );
};

export default LanguageSelection;
