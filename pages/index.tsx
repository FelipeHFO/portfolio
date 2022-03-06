import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [language, setLanguage] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const localLanguage = navigator.language;

    const pageRedirect = async (url: string) => {
      if(url === 'pt-BR'){
        router.push('pt-br');
      } else {
        router.push('en');
      }
    }

    setLanguage(localLanguage);
    pageRedirect(localLanguage);
  }, [language, router]);

  return (
    <div>
    </div>
  );
}

export default Index;