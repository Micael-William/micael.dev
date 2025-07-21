import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Freelancer Desenvolvedor Full-stack PHP e Laravel",
      company: "",
      period: "2023 - atual",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento e ajuste em PHP e Laravel",
        "Integração com APIs de terceiros e sistemas legados",
        "Análise e otimização de performance de aplicações",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Docker", "Git"]
    },
    {
      title: "Estágio em desenvolvimento Web PHP",
      company: "Agência Destak de Publicidade",
      period: "2022 - 2023",
      location: "São Paulo, SP", 
      description: [
        "Desenvolvimento de funcionalidades web em PHP",
        "Manutenção e melhorias em sistemas existentes",
        "Criação de layouts responsivos com HTML, CSS e JavaScript",
        "Participação em code reviews e práticas ágeis",
        "Aprendizado contínuo de melhores práticas de desenvolvimento"
      ],
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e as experiências que moldaram minha expertise técnica
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <Card className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};