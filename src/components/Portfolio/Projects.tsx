import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Sistema de E-commerce",
      description: "Plataforma completa de e-commerce com painel administrativo, gestão de produtos, carrinho de compras e integração com gateways de pagamento.",
      technologies: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "Pagseguro API"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Dashboard com Filament",
      description: "Aplicação para controle de produtos e categorias, recursos detalhados com dashboard interativo.",
      technologies: ["PHP", "Laravel", "Livewire", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Sistema de Restaurante",
      description: "Aplicação para restaurantes com recursos de realização de pedidos, meios de pagamentos e checkout.",
      technologies: ["PHP", "Laravel", "Livewire", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Algumas das soluções que desenvolvi, demonstrando versatilidade e qualidade técnica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group ${
                project.featured ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-muted-foreground/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        link do projeto
                      </a>
                    </Button>
                    {/* <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};