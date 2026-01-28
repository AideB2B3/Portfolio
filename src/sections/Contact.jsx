import { CheckCircle, Mail, MapPin, Send, AlertCircle } from "lucide-react";
import { Button } from "../Components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  // OGGETTO DELLE TRADUZIONI
  const content = {
    en: {
      badge: "Get in touch",
      titleStart: "Let's Build ",
      titleItalic: "something great.",
      description: "Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.",
      formName: "Name",
      placeholderName: "Your name...",
      formEmail: "Email",
      placeholderEmail: "your@email.com",
      formMessage: "Message",
      placeholderMessage: "Your message...",
      btnSend: "Send Message",
      btnSending: "Sending...",
      successMsg: "Message sent successfully! I'll get back to you soon.",
      errorMsg: "Failed to send message. Please try again later.",
      contactInfoTitle: "Contact Information",
      labelLocation: "Location",
      labelEmail: "Email",
      availabilityTitle: "Currently Involved Pier-Program",
      availabilityDesc: "I'm involved in the Pier Program at the Apple Developer Academy but open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!"
    },
    it: {
      badge: "Contattami",
      titleStart: "Costruiamo ",
      titleItalic: "qualcosa di grande.",
      description: "Hai un progetto in mente? Mi piacerebbe parlarne. Inviami un messaggio e discutiamo di come possiamo collaborare.",
      formName: "Nome",
      placeholderName: "Il tuo nome...",
      formEmail: "Email",
      placeholderEmail: "latua@email.com",
      formMessage: "Messaggio",
      placeholderMessage: "Il tuo messaggio...",
      btnSend: "Invia Messaggio",
      btnSending: "Invio in corso...",
      successMsg: "Messaggio inviato con successo! Ti risponderò presto.",
      errorMsg: "Impossibile inviare il messaggio. Riprova più tardi.",
      contactInfoTitle: "Informazioni di Contatto",
      labelLocation: "Posizione",
      labelEmail: "Email",
      availabilityTitle: "Attualmente nel Pier-Program",
      availabilityDesc: "Sono coinvolto nel Pier Program della Apple Developer Academy ma resto aperto a nuove opportunità e progetti stimolanti. Che tu cerchi un ingegnere full-time o un consulente freelance, parliamone!"
    }
  };

  const t = content[lang] || content.en;

  const contactInfo = [
    {
      icon: Mail,
      label: t.labelEmail,
      value: "davide23bellobuono@gmail.com",
      href: "mailto:davidebellobuono1@gmail.com",
    },
    {
      icon: MapPin,
      label: t.labelLocation,
      value: "Somma Vesuviana, NA",
      href: "https://maps.app.goo.gl/ryQGwJR6hJTZPRMJA",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceId, templateId,
        { name: formData.name, email: formData.email, message: formData.message },
        publicKey
      );

      setSubmitStatus({ type: "success", message: t.successMsg });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Emailjs error", err);
      setSubmitStatus({ type: "error", message: err.text || t.errorMsg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Intestazione */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.titleStart}
            <span className="font-serif italic font-normal text-white">
              {t.titleItalic}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-100">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
          
          {/* Colonna Sinistra: Form */}
          <div className="glass p-5 md:p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t.formName}</label>
                <input
                  id="name" type="text" required placeholder={t.placeholderName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t.formEmail}</label>
                <input
                  id="email" type="email" required placeholder={t.placeholderEmail}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.formMessage}</label>
                <textarea
                  rows={5} required placeholder={t.placeholderMessage}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? <>{t.btnSending}</> : <>{t.btnSend} <Send className="ml-2 w-4 h-4" /></>}
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-500" : "bg-red-500/10 border border-red-500/20 text-red-500"}`}>
                  {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Colonna Destra: Informazioni e Card */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            {/* Box Informazioni */}
            <div className="glass rounded-3xl p-5 md:p-8 border border-primary/20">
              <h3 className="text-xl font-semibold mb-6 text-white">
                {t.contactInfoTitle}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface/50 transition-all border border-transparent hover:border-primary/20 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {item.label}
                      </div>
                      <div className="font-medium text-foreground break-all">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Box Availability (Quello giallo in basso) */}
            <div className="glass rounded-3xl p-5 md:p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"/> 
                    <span className="font-medium">{t.availabilityTitle}</span> 
                </div>
                <p className="text-muted-foreground text-sm">
                    {t.availabilityDesc}
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};