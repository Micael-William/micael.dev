import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "3+ Anos",
      description: "De experiência em desenvolvimento web"
    },
    {
      icon: Server,
      title: "PHP & Laravel",
      description: "Especialização em desenvolvimento backend"
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "Frontend e backend com foco em UX"
    },
    {
      icon: Users,
      title: "Projetos",
      description: "Múltiplos projetos entregues com sucesso"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor full stack apaixonado por criar soluções web elegantes e funcionais. 
              Com <span className="text-primary font-semibold">3 anos de experiência</span> focada em 
              <span className="text-accent font-semibold"> PHP e Laravel</span>, desenvolvo aplicações 
              robustas que atendem às necessidades específicas de cada projeto.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha abordagem combina as melhores práticas de desenvolvimento backend com interfaces 
              intuitivas, sempre priorizando performance, segurança e experiência do usuário. 
              Busco constantemente aprender novas tecnologias e metodologias para entregar 
              resultados excepcionais.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalho bem em equipe, comunico-me de forma clara e estou sempre disposto a 
              enfrentar novos desafios que me permitam crescer profissionalmente.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};