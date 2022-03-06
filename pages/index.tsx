import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { UrlObject } from "url";

const Index = () => {
  const [language, setLanguage] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const localLanguage = navigator.language;
    setLanguage(localLanguage);
    redirect(localLanguage);
  }, []);

  const redirect = async (url: string) => {
    if(url === 'pt-BR'){
      router.push('pt-br');
    } else {
      router.push('en');
    }
  }

  return (
    <div>
    </div>
  );
}

export default Index;