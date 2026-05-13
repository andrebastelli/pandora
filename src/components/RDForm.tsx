import { useEffect, useRef } from "react";

declare global {
  interface Window {
    RDStationForms?: new (id: string, ua: string) => { createForm: () => void };
  }
}

// Configurar com as variáveis de ambiente corretas
const FORM_ID = import.meta.env.VITE_RD_FORM_ID || "";
const SCRIPT_SRC = import.meta.env.VITE_RD_SCRIPT_SRC || "https://d335luupugsy2.cloudfront.net/js/forms/loader.min.js";

export function RDForm() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    // Se FORM_ID não está configurado, não tentar carregar o formulário
    if (!FORM_ID || FORM_ID === "#") {
      console.warn("[v0] RD Station Form ID não configurado. Configure VITE_RD_FORM_ID.");
      return;
    }

    const init = () => {
      if (window.RDStationForms) {
        try {
          new window.RDStationForms(FORM_ID, "UA-104096068-1").createForm();
        } catch (error) {
          console.error("[v0] Erro ao carregar formulário RDStation:", error);
        }
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      init();
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = init;
    script.onerror = () => {
      console.warn("[v0] Script do RDStation Forms não carregou - possível conexão lenta ou bloqueador");
    };
    document.body.appendChild(script);
  }, []);

  return <div className="rd-form-wrapper" role="main" id={FORM_ID || "rd-form"} />;
}
