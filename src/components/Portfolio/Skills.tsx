import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Settings, 
  GitBranch,
  Container,
  Cloud,
  Shield,
  Layers,
  Smartphone,
  Palette
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "PHP", icon: Code2 },
        { name: "Laravel", icon: Layers },
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "REST APIs", icon: Globe },
        { name: "Redis", icon: Server }
      ]
    },
    {
      title: "Frontend",
      icon: Smartphone,
      skills: [
        { name: "JavaScript", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "React", icon: Globe },
        { name: "Vue.js", icon: Globe },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Bootstrap", icon: Palette }
      ]
    },
    {
      title: "Ferramentas & DevOps",
      icon: Settings,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Container },
        { name: "Linux", icon: Shield },
        { name: "AWS", icon: Cloud },
        { name: "Nginx", icon: Server },
        { name: "CI/CD", icon: Settings }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <skill.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};