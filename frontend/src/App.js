import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./components/ui/carousel";
import {
    Brain,
    CheckCircle2,
    HeartHandshake,
    MapPin,
    MessageCircle,
    Phone,
    Sparkles,
    Star,
    X,
    Menu,
} from "lucide-react";
import Chatbot from './components/Chatbot';  // <--- IMPORT ADICIONADO AQUI

const doctoraliaLink =
    "https://www.doctoralia.com.br/alex-cavalcante-2/psicologo-psicanalista/florianopolis";
const whatsappLink = `https://wa.me/5548996051111?text=${encodeURIComponent(
    "Olá, Dr. Álex! Gostaria de agendar uma consulta."
)}`;

const navItems = [
    { id: "sobre", label: "Sobre", href: "#sobre" },
    { id: "servicos", label: "Serviços", href: "#servicos" },
    { id: "beneficios", label: "Benefícios", href: "#beneficios" },
    { id: "avaliacoes", label: "Avaliações", href: "#avaliacoes" },
    { id: "faq", label: "FAQ", href: "#faq" },
    { id: "contato", label: "Contato", href: "#contato" },
];

const services = [
    {
        id: "psicoterapia-adultos",
        title: "Psicoterapia para Adultos",
        description:
            "Acompanhamento terapêutico para compreender emoções, padrões e desafios da vida adulta.",
        icon: Brain,
    },
    {
        id: "tratamento-ansiedade",
        title: "Tratamento de Ansiedade",
        description:
            "Estratégias clínicas para reduzir sintomas, recuperar estabilidade e viver com mais presença.",
        icon: Sparkles,
    },
    {
        id: "depressao",
        title: "Depressão",
        description:
            "Escuta qualificada e plano terapêutico humanizado para atravessar momentos de sofrimento psíquico.",
        icon: HeartHandshake,
    },
    {
        id: "conflitos-relacionamento",
        title: "Conflitos de Relacionamento",
        description:
            "Terapia para melhorar comunicação, limites e qualidade dos vínculos afetivos e familiares.",
        icon: CheckCircle2,
    },
    {
        id: "desenvolvimento-pessoal",
        title: "Desenvolvimento Pessoal",
        description:
            "Processo de autoconhecimento para ampliar clareza, autonomia emocional e projeto de vida.",
        icon: MessageCircle,
    },
];

const benefits = [
    {
        id: "autoconhecimento-profundo",
        text: "Compreender padrões emocionais e comportamentais com mais profundidade.",
    },
    {
        id: "fortalecimento-autoestima",
        text: "Fortalecer autoestima, autoconfiança e qualidade das decisões do dia a dia.",
    },
    {
        id: "reducao-ansiedade",
        text: "Reduzir sintomas de ansiedade, angústia e sobrecarga mental.",
    },
    {
        id: "melhora-relacoes",
        text: "Melhorar relações pessoais e profissionais com mais equilíbrio emocional.",
    },
];

const testimonials = [
    {
        id: "jonas",
        name: "Jonas B.",
        text: "Destaco a empatia e a capacidade de trazer estratégias práticas para lidar com ansiedade, depressão e desafios de relacionamento.",
    },
    {
        id: "angela",
        name: "Angela C.",
        text: "Profissional altamente qualificado, com acolhimento genuíno e uma visão integral do paciente. Atendimento diferenciado.",
    },
    {
        id: "bettina",
        name: "Bettina B.",
        text: "Me ajudou a evoluir como pessoa e enxergar a vida com mais clareza. Recomendo a quem busca transformação real.",
    },
    {
        id: "tatiana",
        name: "Tatiana D.",
        text: "Ótimo ouvinte, transmite paz e segurança em cada sessão. Um atendimento profissional e muito humano.",
    },
];

const faqs = [
    {
        question: "Como funciona a primeira sessão?",
        answer:
            "A primeira consulta é dedicada à escuta da sua história, compreensão da demanda e alinhamento dos próximos passos do processo terapêutico.",
    },
    {
        question: "Atende planos de saúde?",
        answer:
            "No momento, o atendimento é particular para garantir cuidado individualizado e continuidade terapêutica.",
    },
    {
        question: "Qual é a duração do atendimento?",
        answer:
            "As sessões têm duração média de 50 minutos. A frequência é definida conforme sua necessidade clínica.",
    },
];

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <main className="relative overflow-x-hidden bg-background text-foreground" data-testid="landing-page-root">
            <header
                className="fixed left-1/2 top-4 z-50 flex w-[95%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/50 bg-white/85 px-4 py-3 shadow-[0_10px_35px_rgba(44,74,69,0.12)] backdrop-blur-md md:px-8"
                data-testid="floating-header"
            >
                <a href="#hero" className="font-body text-sm font-semibold text-primary md:text-base" data-testid="brand-anchor">
                    Álex Cavalcante
                </a>
                <nav className="hidden items-center gap-5 lg:flex" data-testid="desktop-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-body text-sm text-foreground/75 transition-colors duration-300 hover:text-primary"
                            data-testid={`nav-link-${item.id}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <Button asChild className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 md:text-sm" data-testid="header-whatsapp-button">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                        Agendar
                    </a>
                </Button>
                <button
                    type="button"
                    className="ml-2 inline-flex rounded-full border border-primary/20 bg-white p-2 text-primary lg:hidden"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    data-testid="mobile-menu-toggle"
                    aria-label="Abrir menu de navegação"
                >
                    {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </header>

            {mobileMenuOpen && (
                <div
                    className="fixed left-1/2 top-20 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-3xl border border-primary/10 bg-white p-5 shadow-[0_20px_50px_rgba(44,74,69,0.15)] lg:hidden"
                    data-testid="mobile-menu-panel"
                >
                    <nav className="flex flex-col gap-3" data-testid="mobile-menu-nav">
                        {navItems.map((item) => (
                            <a
                                key={`mobile-${item.id}`}
                                href={item.href}
                                className="rounded-xl px-3 py-2 font-body text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                                data-testid={`mobile-nav-link-${item.id}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            <section
                id="hero"
                className="relative flex min-h-screen items-center pt-28"
                data-testid="hero-section"
            >
                <img
                    src="https://images.unsplash.com/photo-1766469196013-9c850003d32f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwcHN5Y2hvbG9naXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBwbGFudCUyMHN1bmxpZ2h0fGVufDB8fHx8MTc3MzAyNTY1NXww&ixlib=rb-4.1.0&q=85"
                    alt="Consultório acolhedor com luz natural"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    data-testid="hero-background-image"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7f2] via-[#fdfbf7ec] to-[#fdfbf7c9]" data-testid="hero-overlay" />

                <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]" data-testid="hero-content-grid">
                    <div className="animate-fade-up space-y-7" data-testid="hero-text-block">
                        <p className="font-body text-sm uppercase tracking-[0.16em] text-primary/80" data-testid="hero-kicker">
                            Psicologia e Psicanálise em Florianópolis
                        </p>
                        <h1 className="font-heading text-4xl leading-tight text-[#1f2e2b] sm:text-5xl lg:text-6xl" data-testid="hero-headline">
                            Álex Cavalcante | Psicólogo e Psicanalista
                        </h1>
                        <p className="max-w-2xl font-body text-base leading-relaxed text-foreground/80 md:text-lg" data-testid="hero-subheadline">
                            Um espaço seguro para o seu autoconhecimento e saúde mental em Florianópolis.
                        </p>
                        <div className="flex flex-wrap gap-4" data-testid="hero-cta-group">
                            <Button asChild className="h-auto rounded-full bg-primary px-8 py-4 text-base text-primary-foreground transition-transform duration-300 hover:-translate-y-1 hover:bg-primary/90" data-testid="hero-whatsapp-cta">
                                <a href={whatsappLink} target="_blank" rel="noreferrer">
                                    <MessageCircle className="mr-2" />
                                    Agendar Consulta via WhatsApp
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="h-auto rounded-full border-primary/30 bg-white/60 px-8 py-4 text-base text-primary hover:bg-white" data-testid="hero-doctoralia-cta">
                                <a href={doctoraliaLink} target="_blank" rel="noreferrer">
                                    Ver perfil na Doctoralia
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="animate-fade-up delay-150" data-testid="hero-profile-card">
                        <article className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(44,74,69,0.14)] backdrop-blur" data-testid="hero-highlight-card">
                            <p className="font-body text-sm text-foreground/70" data-testid="hero-highlight-label">
                                Registro Profissional
                            </p>
                            <p className="mt-1 font-body text-xl font-semibold text-primary" data-testid="hero-highlight-crp">
                                CRP SC 24887
                            </p>
                            <p className="mt-4 font-body text-sm leading-relaxed text-foreground/75" data-testid="hero-highlight-description">
                                Atendimento para adultos e adolescentes, com abordagem psicanalítica e foco em ansiedade, depressão e conflitos de relacionamento.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="sobre" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32" data-testid="about-section">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]" data-testid="about-grid">
                    <div className="relative" data-testid="about-image-wrap">
                        <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-primary/10 bg-secondary/55" />
                        <img
                            src="/images/Dr.jpeg"
                            alt="Retrato profissional de Álex Cavalcante"
                            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-center shadow-[0_12px_40px_rgba(44,74,69,0.16)]"
                            data-testid="about-profile-image"
                        />
                    </div>

                    <article className="space-y-5" data-testid="about-text-content">
                        <p className="font-body text-sm uppercase tracking-[0.16em] text-primary/70" data-testid="about-kicker">
                            Sobre o Profissional
                        </p>
                        <h2 className="font-heading text-3xl text-[#1f2e2b] sm:text-4xl" data-testid="about-title">
                            Cuidado psicológico com escuta profunda e método clínico
                        </h2>
                        <p className="font-body text-base leading-relaxed text-foreground/80" data-testid="about-bio-paragraph-1">
                            Álex Cavalcante é Psicólogo e Psicanalista em Florianópolis, com atuação em saúde mental para adultos e adolescentes.
                            Seu trabalho integra psicanálise, neuropsicologia e práticas baseadas em evidências para promover evolução emocional consistente.
                        </p>
                        <p className="font-body text-base leading-relaxed text-foreground/80" data-testid="about-bio-paragraph-2">
                            Com foco em acolhimento, ética e personalização do atendimento, auxilia pacientes em processos de ansiedade, depressão,
                            dificuldades de relacionamento e desenvolvimento pessoal.
                        </p>
                        <Button asChild variant="outline" className="h-auto rounded-full border-primary/35 px-7 py-3 text-primary" data-testid="about-doctoralia-button">
                            <a href={doctoraliaLink} target="_blank" rel="noreferrer">
                                Ver perfil completo na Doctoralia
                            </a>
                        </Button>
                    </article>
                </div>
            </section>

            <section id="servicos" className="bg-white/60 py-24 md:py-32" data-testid="services-section">
                <div className="mx-auto w-full max-w-6xl px-6" data-testid="services-container">
                    <p className="font-body text-sm uppercase tracking-[0.16em] text-primary/70" data-testid="services-kicker">
                        Áreas de Atuação
                    </p>
                    <h2 className="mt-3 font-heading text-3xl text-[#1f2e2b] sm:text-4xl" data-testid="services-title">
                        Serviços com abordagem clínica humanizada
                    </h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-testid="services-grid">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <article
                                    key={service.title}
                                    className="group rounded-[1.75rem] border border-primary/10 bg-white p-7 shadow-[0_10px_35px_rgba(44,74,69,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(44,74,69,0.13)]"
                                    data-testid={`service-card-${service.id}`}
                                >
                                    <div className="mb-5 inline-flex rounded-full bg-secondary p-3 text-primary" data-testid={`service-icon-${service.id}`}>
                                        <Icon />
                                    </div>
                                    <h3 className="font-body text-xl font-semibold text-[#233833]" data-testid={`service-title-${service.id}`}>
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 font-body text-sm leading-relaxed text-foreground/75" data-testid={`service-description-${service.id}`}>
                                        {service.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="beneficios" className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32" data-testid="benefits-section">
                <div className="grid items-start gap-10 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-white to-secondary/40 p-8 md:p-12 lg:grid-cols-[1fr_1fr]" data-testid="benefits-grid">
                    <div className="space-y-4" data-testid="benefits-content">
                        <p className="font-body text-sm uppercase tracking-[0.16em] text-primary/70" data-testid="benefits-kicker">
                            Por que fazer terapia?
                        </p>
                        <h2 className="font-heading text-3xl text-[#1f2e2b] sm:text-4xl" data-testid="benefits-title">
                            Um processo de cuidado emocional com impacto real na sua vida
                        </h2>
                        <p className="font-body text-base leading-relaxed text-foreground/80" data-testid="benefits-description">
                            A psicoterapia cria um espaço seguro para elaborar dores, organizar pensamentos e ampliar sua capacidade de lidar com desafios cotidianos.
                        </p>
                    </div>
                    <ul className="space-y-4" data-testid="benefits-list">
                        {benefits.map((item) => (
                            <li key={item.id} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4" data-testid={`benefit-item-${item.id}`}>
                                <CheckCircle2 className="mt-0.5 text-primary" />
                                <span className="font-body text-sm leading-relaxed text-foreground/80" data-testid={`benefit-text-${item.id}`}>
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="avaliacoes" className="bg-white/60 py-24 md:py-32" data-testid="testimonials-section">
                <div className="mx-auto w-full max-w-6xl px-6" data-testid="testimonials-container">
                    <p className="font-body text-sm uppercase tracking-[0.16em] text-primary/70" data-testid="testimonials-kicker">
                        Prova Social
                    </p>
                    <h2 className="mt-3 font-heading text-3xl text-[#1f2e2b] sm:text-4xl" data-testid="testimonials-title">
                        Avaliações de pacientes
                    </h2>
                    <p className="mt-4 max-w-2xl font-body text-base text-foreground/75" data-testid="testimonials-description">
                        Depoimentos públicos no perfil profissional, refletindo acolhimento, confiança e qualidade no atendimento.
                    </p>

                    <div className="mt-10" data-testid="testimonials-carousel-wrap">
                        <Carousel className="w-full" opts={{ align: "start", loop: true }} data-testid="testimonials-carousel">
                            <CarouselContent>
                                {testimonials.map((testimonial) => (
                                    <CarouselItem key={testimonial.id} className="md:basis-1/2" data-testid={`testimonial-slide-${testimonial.id}`}>
                                        <article className="h-full rounded-[1.75rem] border border-primary/10 bg-white p-8 shadow-[0_10px_35px_rgba(44,74,69,0.08)]" data-testid={`testimonial-card-${testimonial.id}`}>
                                            <div className="mb-4 flex gap-1" data-testid={`testimonial-stars-${testimonial.id}`}>
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star key={`${testimonial.name}-${index}`} size={17} className="fill-[#f6c65b] text-[#f6c65b]" />
                                                ))}
                                            </div>
                                            <p className="font-body text-base leading-relaxed text-foreground/80" data-testid={`testimonial-text-${testimonial.id}`}>
                                                “{testimonial.text}”
                                            </p>
                                            <p className="mt-5 font-body text-sm font-semibold text-primary" data-testid={`testimonial-name-${testimonial.id}`}>
                                                {testimonial.name}
                                            </p>
                                        </article>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-3 top-1/2 h-10 w-10 -translate-y-1/2 border-primary/25 bg-white/90 text-primary hover:bg-white" data-testid="testimonials-carousel-previous" />
                            <CarouselNext className="right-3 top-1/2 h-10 w-10 -translate-y-1/2 border-primary/25 bg-white/90 text-primary hover:bg-white" data-testid="testimonials-carousel-next" />
                        </Carousel>
                    </div>
                </div>
            </section>

            <section id="faq" className="mx-auto w-full max-w-4xl px-6 py-24 md:py-32" data-testid="faq-section">
                <p className="text-center font-body text-sm uppercase tracking-[0.16em] text-primary/70" data-testid="faq-kicker">
                    FAQ
                </p>
                <h2 className="mt-3 text-center font-heading text-3xl text-[#1f2e2b] sm:text-4xl" data-testid="faq-title">
                    Perguntas Frequentes
                </h2>

                <Accordion type="single" collapsible className="mt-10 space-y-4" data-testid="faq-accordion">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={faq.question}
                            value={`item-${index}`}
                            className="rounded-2xl border border-primary/10 bg-white px-6"
                            data-testid={`faq-item-${index + 1}`}
                        >
                            <AccordionTrigger className="font-body text-base font-semibold text-primary hover:no-underline" data-testid={`faq-question-${index + 1}`}>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-sm leading-relaxed text-foreground/80" data-testid={`faq-answer-${index + 1}`}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section id="contato" className="relative py-24 md:py-32" data-testid="contact-section">
                <img
                    src="https://images.unsplash.com/photo-1771195816882-63c48edeed96?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxGbG9yaWFub3BvbGlzJTIwYmVhY2glMjBsYW5kc2NhcGUlMjBwZWFjZWZ1bHxlbnwwfHx8fDE3NzMwMjU2NjR8MA&ixlib=rb-4.1.0&q=85"
                    alt="Paisagem de Florianópolis"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    data-testid="contact-background-image"
                />
                <div className="absolute inset-0 bg-[#2c4a45]/85" data-testid="contact-overlay" />

                <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]" data-testid="contact-grid">
                    <article className="rounded-[1.75rem] bg-white/95 p-8" data-testid="contact-info-card">
                        <h2 className="font-heading text-3xl text-[#1f2e2b] sm:text-4xl" data-testid="contact-title">
                            Contato e Localização
                        </h2>
                        <p className="mt-4 font-body text-sm leading-relaxed text-foreground/80" data-testid="contact-description">
                            Atendimento em Florianópolis com acolhimento, privacidade e foco no seu processo terapêutico.
                        </p>
                        <div className="mt-6 space-y-4" data-testid="contact-details-list">
                            <p className="flex items-start gap-3 font-body text-sm text-foreground/85" data-testid="contact-address">
                                <MapPin className="mt-0.5 text-primary" size={18} />
                                Rua Senador Milton Campos, 147 • Coqueiros • Florianópolis - SC
                            </p>
                            <p className="flex items-center gap-3 font-body text-sm text-foreground/85" data-testid="contact-phone">
                                <Phone className="text-primary" size={18} />
                                (48) 99605-1111
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3" data-testid="contact-actions">
                            <Button asChild className="h-auto rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90" data-testid="contact-whatsapp-button">
                                <a href={whatsappLink} target="_blank" rel="noreferrer">
                                    Chamar no WhatsApp
                                </a>
                            </Button>
                            <Button asChild variant="secondary" className="h-auto rounded-full bg-secondary px-6 py-3 text-sm text-primary hover:bg-secondary/90" data-testid="contact-doctoralia-button">
                                <a href={doctoraliaLink} target="_blank" rel="noreferrer">
                                    Doctoralia
                                </a>
                            </Button>
                        </div>
                    </article>

                    <div className="overflow-hidden rounded-[1.75rem] border border-white/35 shadow-[0_15px_45px_rgba(0,0,0,0.2)]" data-testid="contact-map-wrapper">
                        <iframe
                            title="Mapa do consultório de Álex Cavalcante"
                            src="https://www.google.com/maps?q=-27.6053486,-48.5786781&z=15&output=embed"
                            className="h-[420px] w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            data-testid="contact-map-iframe"
                        />
                    </div>
                </div>
            </section>

            <footer className="bg-[#1f3430] py-8" data-testid="footer-section">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-white/85 md:flex-row md:items-center md:justify-between" data-testid="footer-content">
                    <p className="font-body" data-testid="footer-copyright">
                        © {new Date().getFullYear()} Álex Cavalcante • Psicólogo e Psicanalista
                    </p>
                    <a href={doctoraliaLink} target="_blank" rel="noreferrer" className="font-body text-white transition-opacity hover:opacity-80" data-testid="footer-doctoralia-link">
                        Perfil oficial na Doctoralia
                    </a>
                </div>
            </footer>

            {/* Chatbot */}
            <Chatbot />
        </main>
    );
}

export default App;