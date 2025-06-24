import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    id: 1,
    name: 'Thiago M.',
    role: 'Empreendedor',
    rating: 5,
    comment: 'Fiquei impressionado com o cuidado e a organização da Los Coders. O projeto foi entregue antes do prazo e com qualidade acima do esperado!'
  }, {
    id: 2,
    name: 'Maria Santos',
    role: 'Diretora de Marketing',
    rating: 5,
    comment: 'A equipe demonstrou total dedicação ao nosso projeto. O resultado superou nossas expectativas e o suporte pós-entrega foi excepcional.'
  }, {
    id: 3,
    name: 'Carlos Oliveira',
    role: 'CEO da TechStart',
    rating: 5,
    comment: 'Profissionalismo e competência técnica em cada detalhe. Recomendo a Los Coders para qualquer empresa que busca excelência em desenvolvimento.'
  }, {
    id: 4,
    name: 'Ana Paula',
    role: 'Gestora de Produtos',
    rating: 5,
    comment: 'Comunicação clara, prazos respeitados e um produto final que realmente atende às necessidades do nosso negócio. Parceria de longo prazo garantida!'
  }];
  const renderStars = rating => {
    return Array.from({
      length: 5
    }, (_, index) => <Star key={index} className="bg-transparent" />);
  };
  return <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-4xl text-[#fd7506]">Feedbacks dos clientes</h2>
          <p className="text-lg max-w-2xl mx-auto text-white">
            Veja o que nossos clientes falam sobre nosso trabalho e dedicação
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1">
                  <div className="p-2">
                    <Card className="bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border-gray-800">
                      <CardContent className="p-8 bg-zinc-900">
                        <div className="text-center mb-6">
                          <div className="flex justify-center mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="text-lg leading-relaxed italic mb-6 text-white">
                            "{testimonial.comment}"
                          </p>
                        </div>
                        <div className="text-center ">
                          <h4 className="text-xl font-semibold text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="font-medium text-[#e95027]">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="text-[#FD7506] border-[#FD7506] hover:text-white bg-transparent" />
            <CarouselNext className="text-[#FD7506] border-[#FD7506] hover:text-white bg-transparent" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Testimonials;