import { useEffect, useRef } from "react";

declare global {
  interface Window {
    RDStationForms?: new (id: string, ua: string) => { createForm: () => void };
  }
}

const FORM_ID = "ppa-2026-591c2d899a5f536bef03";
const SCRIPT_SRC = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";

export function RDForm() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

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
      console.error("[v0] Erro ao carregar script do RDStation Forms");
    };
    document.body.appendChild(script);
  }, []);

  return <div className="rd-form-wrapper" role="main" id={FORM_ID} />;
}
