import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Los Coders.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };
  return <section id="contact" className="py-20 bg-inherit">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Entre em Contato</h2>
          <p className="text-xl text-white font-medium">
            Pronto para transformar sua ideia em realidade? Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="nome" className="text-white font-medium">Nome</Label>
              <Input id="nome" value={formData.nome} onChange={e => setFormData({
              ...formData,
              nome: e.target.value
            })} className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-[#FD7506] focus:ring-[#FD7506]" required />
            </div>

            <div>
              <Label htmlFor="email" className="text-white font-medium">E-mail</Label>
              <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-[#FD7506] focus:ring-[#FD7506]" required />
            </div>

            <div>
              <Label htmlFor="mensagem" className="text-white font-medium">Mensagem</Label>
              <Textarea id="mensagem" value={formData.mensagem} onChange={e => setFormData({
              ...formData,
              mensagem: e.target.value
            })} className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-[#FD7506] focus:ring-[#FD7506] min-h-[120px]" required />
            </div>

            <Button type="submit" className="w-full text-gray transition-all duration-300 bg-[#FD7506] text-base py-[10px] text-left">
              Enviar Mensagem
            </Button>
          </form>

          <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h3 className="text-white mb-4 font-semibold text-xl">Se preferir chame a gente no WhatsApp</h3>
              <p className="text-gray-300 mb-6 font-normal">Resposta em até 2 horas e atendimento personalizado!</p>
            </div>

            <Button onClick={handleWhatsApp} className="bg-[#0ACB8B] hover:bg-[#0ACB8B]/90 text-white text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0ACB8B]/25 flex items-center gap-3 px-[31px] py-[18px]">
              <MessageCircle size={24} />
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;