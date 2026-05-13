import { createFileRoute } from "@tanstack/react-router";
import { RDForm } from "@/components/RDForm";
import { Calendar, GraduationCap, Sparkles, Users, BookOpen, Trophy, MapPin, Phone, CheckCircle2, Clock, Gift, ShieldCheck, Star, HeartHandshake } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portas Abertas .pandora, Ensino Fundamental 2026" },
      {
        name: "description",
        content:
          "Conheça o novo Ensino Fundamental do .pandora. 13 de dezembro, 9h30. Vagas limitadas e condições especiais para os participantes.",
      },
      { property: "og:title", content: "Portas Abertas .pandora, Fundamental 2026" },
      {
        property: "og:description",
        content: "Sábado, 13 de dezembro às 9h30. Garanta sua vaga e condições especiais.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP BAR */}
      <div className="bg-brand-dark py-2.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-brand-orange" />
          <span className="text-brand-orange">Condições exclusivas para quem participar</span>
          <Sparkles className="h-4 w-4 text-brand-orange" />
        </span>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <Sparkles className="h-4 w-4" /> Vagas limitadas, Ensino Fundamental 2026
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block opacity-95">.pandora</span>
              <span className="block">de portas</span>
              <span className="block text-white/95">abertas</span>
              <span className="mt-2 block bg-white px-3 py-1 text-3xl font-extrabold text-brand-orange shadow-card sm:inline-block sm:text-4xl lg:text-5xl">
                fundamental
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <Pill icon={<Calendar className="h-4 w-4" />} label="13 DEZ · SÁB · 9h30" />
              <Pill icon={<GraduationCap className="h-4 w-4" />} label="6º ao 9º ano" />
              <Pill icon={<MapPin className="h-4 w-4" />} label="Limeira" />
            </div>

            <p className="mt-8 max-w-xl text-lg text-white/90">
              Você e sua família vão conhecer toda nossa estrutura, material didático,
              metodologia de ensino e muito mais.
            </p>

            {/* EXCLUSIVO PRESENCIAL, destaque */}
            <div className="mt-6 max-w-xl rounded-2xl border-2 border-white/40 bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-white">
                <Gift className="h-5 w-5" />
                Exclusivo para quem comparecer
              </div>
              <p className="mt-2 text-white/95">
                <strong>Bolsas, descontos e brindes</strong> liberados <u>somente</u> no dia do evento.
                Não enviamos depois, é presencial e por tempo limitado.
              </p>
            </div>

            <ul className="mt-6 grid gap-2 text-white/95 sm:grid-cols-2">
              {[
                "Tour completo pela estrutura",
                "Bate-papo com a coordenação",
                "Bolsas e descontos exclusivos",
                "Brindes para os alunos",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* FORM CARD */}
          <div className="relative">
            {/* Ribbon */}
            <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
              <div className="relative rounded-full bg-brand-dark px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-white shadow-glow animate-pulse-ring">
                🔥 Vagas Limitadas
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 pt-8 shadow-glow sm:p-8 sm:pt-10">
              <div className="mb-5 text-center">
                <h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
                  Garanta sua vaga
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Inscrição gratuita · Vagas limitadas
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold text-brand-orange">
                  <Sparkles className="h-3.5 w-3.5" /> Acesso às condições exclusivas do evento
                </div>
              </div>
              <RDForm />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Ao se inscrever você concorda em receber comunicações do .pandora.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-white/20" />
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          <Stat value="17+" label="anos de história" />
          <Stat value="3" label="unidades" />
          <Stat value="6.8K" label="famílias acompanhando" />
          <Stat value="100%" label="foco no aluno" />
        </div>
      </section>

      {/* PROPOSAL */}
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Nossa proposta
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Formamos jovens criativos, autônomos e prontos para o futuro
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Um sistema de aprendizagem vivo e pulsante. Cada etapa é cuidadosamente
            desenhada para desenvolver competências essenciais, despertar o protagonismo
            e construir bases acadêmicas sólidas.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Feature
              icon={<BookOpen className="h-6 w-6" />}
              title="Material que conecta"
              text="Conteúdo atualizado, contextualizado e que dialoga com o universo dos alunos."
            />
            <Feature
              icon={<Users className="h-6 w-6" />}
              title="Acolhimento real"
              text="Acompanhamento pedagógico e socioemocional do início ao fim da jornada."
            />
            <Feature
              icon={<Trophy className="h-6 w-6" />}
              title="Resultados de excelência"
              text="Tradição em aprovações e formação que vai além da sala de aula."
            />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Conheça o Fundamental .pandora
            </h2>
            <p className="mt-3 text-muted-foreground">Veja em 2 minutos como será 2026.</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-card">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/LDiXiPIlDT8"
              title="Fundamental .pandora 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Sobre o .pandora
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Referência em aprovações, acolhimento e formação de excelência
            </h2>
            <p className="mt-5 text-white/80">
              Fundado em 2007, o .pandora nasceu como um pré-vestibular inovador e hoje, com
              unidades em Limeira, Piracicaba e Jundiaí, combina ensino forte, desenvolvimento
              pessoal e acompanhamento pedagógico contínuo. Cada aluno é preparado para
              enfrentar os desafios acadêmicos com autonomia e confiança.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-hero p-8 shadow-glow">
            <h3 className="text-2xl font-extrabold">Não fique de fora</h3>
            <p className="mt-2 text-white/90">
              13 de dezembro, sábado, 9h30. Vagas limitadas e condições especiais para os
              participantes do Portas Abertas.
            </p>
            <a
              href="#ppa-2026-591c2d899a5f536bef03"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-extrabold uppercase tracking-wider text-brand-orange shadow-card transition-transform hover:-translate-y-0.5"
            >
              Quero minha vaga
            </a>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              O dia do evento
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Como vai funcionar o Portas Abertas
            </h2>
            <p className="mt-3 text-muted-foreground">
              Uma manhã pensada para você sentir, na prática, o que é estudar no .pandora.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Feature icon={<Clock className="h-6 w-6" />} title="9h30, Recepção" text="Café da manhã de boas-vindas e apresentação da equipe pedagógica." />
            <Feature icon={<MapPin className="h-6 w-6" />} title="10h, Tour guiado" text="Salas, laboratórios, biblioteca e espaços de convivência." />
            <Feature icon={<Gift className="h-6 w-6" />} title="11h, Condições especiais" text="Bolsas exclusivas, brindes e atendimento individual com a coordenação." />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Quem já vive o .pandora
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Famílias que confiaram e recomendam
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Meu filho ganhou autonomia, organização e voltou a amar estudar. A equipe é incrível.",
                name: "Patrícia M.",
                role: "Mãe do Lucas, 8º ano",
              },
              {
                quote:
                  "Estrutura excelente e professores presentes. Cada aluno é visto como único, isso faz diferença.",
                name: "Rodrigo S.",
                role: "Pai da Helena, 6º ano",
              },
              {
                quote:
                  "A metodologia prepara para a vida, não só para a prova. Recomendo de olhos fechados.",
                name: "Carla R.",
                role: "Mãe da Sofia, 9º ano",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-gradient-soft p-6 shadow-card">
                <div className="mb-3 flex gap-1 text-brand-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-brand-dark">"{t.quote}"</p>
                <div className="mt-5 border-t pt-4">
                  <p className="font-extrabold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Tire suas dúvidas
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {[
              {
                q: "O Portas Abertas tem custo?",
                a: "Não. A participação é totalmente gratuita, basta se inscrever pelo formulário desta página para garantir sua vaga.",
              },
              {
                q: "Para quais anos é o evento?",
                a: "Ensino Fundamental II, 6º ao 9º ano. Toda a família é bem-vinda.",
              },
              {
                q: "Quais são as condições especiais?",
                a: "Os participantes do Portas Abertas têm acesso a bolsas e descontos exclusivos para a matrícula 2026, com condições válidas apenas durante o evento.",
              },
              {
                q: "Onde acontece?",
                a: "No Colégio .pandora, Rua Sargento Pierroti, 322, Centro, Limeira. Estacionamento gratuito disponível.",
              },
              {
                q: "Preciso levar algum documento?",
                a: "Não é necessário. Caso queira fechar a matrícula no dia, leve RG e comprovante de residência para agilizar o processo.",
              },
              {
                q: "Quanto tempo dura o evento?",
                a: "Aproximadamente 2 horas. Você terá tempo para conhecer toda a estrutura e conversar com a coordenação sem pressa.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border-0 bg-white px-5 shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-bold text-brand-dark hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-3">
          <Guarantee icon={<ShieldCheck className="h-5 w-5" />} title="Inscrição segura" text="Seus dados são protegidos e usados apenas para contato sobre o evento." />
          <Guarantee icon={<HeartHandshake className="h-5 w-5" />} title="Sem compromisso" text="Visite, conheça e decida com calma. Sem pressão de matrícula." />
          <Guarantee icon={<Gift className="h-5 w-5" />} title="Benefícios exclusivos" text="Bolsas e brindes válidos apenas para quem comparece ao evento." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-hero py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Vagas limitadas, não deixe para depois
          </h2>
          <p className="mt-4 text-white/90">
            Reserve agora seu lugar no Portas Abertas .pandora e garanta as condições
            especiais de matrícula para 2026.
          </p>
          <a
            href="#ppa-2026-591c2d899a5f536bef03"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-orange shadow-card transition-transform hover:-translate-y-0.5"
          >
            Quero garantir minha vaga
          </a>
          <p className="mt-4 text-xs text-white/80">13 de dezembro · sábado · 9h30</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-center sm:grid-cols-2 sm:text-left">
          <div>
            <p className="text-lg font-extrabold text-brand-dark">COLÉGIO .pandora</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Rua Sargento Pierroti, 322, Centro, Limeira
            </p>
          </div>
          <div className="sm:text-right">
            <a
              href="https://wa.me/551937010551"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
            >
              <Phone className="h-4 w-4" /> WhatsApp 19 3701.0551
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              © {new Date().getFullYear()} .pandora educacional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-dark/30 px-4 py-2 text-sm font-bold backdrop-blur">
      {icon} {label}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-brand-orange sm:text-4xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-left shadow-card">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-white">
        {icon}
      </div>
      <h3 className="text-lg font-extrabold text-brand-dark">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Guarantee({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border bg-white p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-white">
        {icon}
      </div>
      <div>
        <p className="font-extrabold text-brand-dark">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
