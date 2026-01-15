import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Wand2, 
  Server, 
  Database,
  Smartphone,
  Globe,
  Zap,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatWidget } from "@/components/ChatWidget";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-30 animate-pulse [animation-delay:2s]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-primary/10 bg-background/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
            <Wand2 className="text-primary h-6 w-6" />
            <span>MUHAMMAD<span className="text-primary">.DEV</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
          </div>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 hover:text-primary" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            Available for Freelance Projects ✨
          </Badge>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
        >
          AI Wizard & <br />
          <span className="text-glow text-primary inline-block">Full-Stack Dev</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10"
        >
          I build intelligent applications, automate workflows, and craft beautiful digital experiences for startups and visionaries.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary/30 hover:bg-primary/10">
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex gap-6 text-muted-foreground"
        >
          <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Github className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-primary hover:scale-110 transition-all"><Mail className="w-6 h-6" /></a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/20 relative border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Magic Spells</h2>
            <p className="text-muted-foreground max-w-xl">Technologies I use to conjure powerful applications.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Wand2, title: "AI Engineering", skills: "LangChain, OpenAI, n8n" },
              { icon: Globe, title: "Modern Web", skills: "Next.js 14, React, Tailwind" },
              { icon: Smartphone, title: "Mobile Dev", skills: "Flutter, React Native" },
              { icon: Database, title: "Backend", skills: "Node.js, Postgres, Mongo" }
            ].map((skill, i) => (
              <motion.div key={i} variants={item}>
                <Card className="bg-card/50 border-primary/10 backdrop-blur-sm hover:border-primary/50 transition-colors h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl mb-2">{skill.title}</CardTitle>
                    <CardDescription className="text-primary/80 font-medium">{skill.skills}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">A selection of my recent magical creations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/30 border-primary/10 overflow-hidden hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all group">
              <div className="h-48 bg-gradient-to-br from-purple-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-primary opacity-50 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>AI Social Analyzer</CardTitle>
                <CardDescription>Scrapes X/Instagram/RSS → OpenAI Reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  An intelligent tool that monitors social trends and generates actionable insights using GPT-4.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Next.js</Badge>
                  <Badge variant="outline" className="text-xs">OpenAI</Badge>
                  <Badge variant="outline" className="text-xs">Puppeteer</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:text-primary">View Project <ExternalLink className="ml-2 w-4 h-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="bg-card/30 border-primary/10 overflow-hidden hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all group">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-blue-500 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Service Marketplace</CardTitle>
                <CardDescription>Flutter Apps + Web Dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A complete platform connecting local service providers with clients. Real-time booking & chat.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Flutter</Badge>
                  <Badge variant="outline" className="text-xs">Firebase</Badge>
                  <Badge variant="outline" className="text-xs">Node.js</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:text-primary">View Project <ExternalLink className="ml-2 w-4 h-4" /></Button>
              </CardFooter>
            </Card>

            <Card className="bg-card/30 border-primary/10 overflow-hidden hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all group">
              <div className="h-48 bg-gradient-to-br from-green-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-green-500 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>n8n Automations</CardTitle>
                <CardDescription>Enterprise Workflow Automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom workflows that integrate CRM, Email, and AI to automate 90% of manual business tasks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">n8n</Badge>
                  <Badge variant="outline" className="text-xs">Webhooks</Badge>
                  <Badge variant="outline" className="text-xs">API</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:text-primary">View Project <ExternalLink className="ml-2 w-4 h-4" /></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-muted/20 border-y border-primary/5">
        <div className="container mx-auto px-4">
           <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Services & Rates</h2>
            <p className="text-muted-foreground max-w-xl">Professional wizardry at reasonable prices.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Full-Stack Web Dev", "AI App Development", "Mobile App (Flutter)", "n8n Automation"].map((service, i) => (
                <div key={i} className="p-6 rounded-xl border border-primary/10 bg-card/50 hover:bg-primary/5 transition-colors text-center">
                   <h3 className="font-bold text-lg mb-2">{service}</h3>
                   <p className="text-primary font-mono">$35–$50 / hr</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-gradient-to-b from-card to-card/50 border-primary/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display">Summon Me</CardTitle>
              <CardDescription>Ready to start your project? Send me a message.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Gandalf the Grey" className="bg-muted/50 border-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="gandalf@middleearth.com" className="bg-muted/50 border-primary/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="I need a spell to automate my..." className="min-h-[120px] bg-muted/50 border-primary/10" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6 shadow-lg shadow-primary/25">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-primary/5">
        <p>© 2026 Muhammad. All rights reserved.</p>
        <p className="mt-2 text-xs">Crafted with React, Tailwind & Magic 🪄</p>
      </footer>

      {/* THE CHATBOT */}
      <ChatWidget />
    </div>
  );
}
