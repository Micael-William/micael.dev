import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Sistema de E-commerce",
      description: "Plataforma completa de e-commerce com painel administrativo, gestão de produtos, carrinho de compras e integração com gateways de pagamento.",
      technologies: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS", "Stripe API"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "API de Gestão Financeira",
      description: "API REST robusta para gestão financeira pessoal com autenticação JWT, relatórios detalhados e dashboard interativo.",
      technologies: ["PHP", "Laravel", "PostgreSQL", "Redis", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Portal de Notícias",
      description: "CMS completo para portal de notícias com sistema de categorias, comentários, busca avançada e painel administrativo.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "Elasticsearch"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Sistema de Reservas",
      description: "Aplicação para reserva de salas e recursos com calendário interativo, notificações em tempo real e relatórios.",
      technologies: ["PHP", "Laravel", "React", "WebSockets", "MySQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard dinâmico para análise de dados com gráficos interativos, filtros avançados e exportação de relatórios.",
      technologies: ["Laravel", "Chart.js", "Vue.js", "MySQL", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "API de Integração",
      description: "Microserviço para integração entre sistemas legados e modernos com processamento assíncrono e alta disponibilidade.",
      technologies: ["PHP", "Laravel", "Docker", "Redis", "RabbitMQ"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
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
                    {project.featured && (
                      <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                        Destaque
                      </Badge>
                    )}
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
                        Código
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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