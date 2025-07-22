import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleWhatsAppClick = () => {
    // 1. O número de telefone foi atualizado.
    const phoneNumber = "5511910623871"; 
    const message = "Olá! Gostaria de entrar em contato.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-black"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-mono tracking-tighter sm:text-5xl text-white">
              Entre em Contato
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Clique no botão abaixo para nos enviar uma mensagem
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full"
              size="lg"
              // 2. O estilo do botão foi alterado para a cor do WhatsApp.
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Enviar mensagem no WhatsApp!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;