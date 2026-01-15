import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Wand2, 
  Database,
  Smartphone,
  Globe,
  Zap,
  Send,
  Star,
  CheckCircle2,
  Lock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatWidget } from "@/components/ChatWidget";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import muhammadPhoto from "@assets/WhatsApp_Image_2026-01-15_at_7.30.53_AM_1768460571326.jpeg";

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
        <div className="absolute top-[30%] left-[50%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] transform -translate-x-1/2" />
      </div>

      {/* Floating Particles/Stars */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, y: Math.random() * 1000 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              y: [Math.random() * 1000, Math.random() * 1000 - 100]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-[100] w-full backdrop-blur-md border-b border-primary/10 bg-background/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-xl tracking-tight flex items-center gap-2"
          >
            <Wand2 className="text-primary h-6 w-6 animate-pulse" />
            <span>MUHAMMAD<span className="text-primary">.DEV</span></span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            {["About", "Skills", "Projects", "Rates", "Services"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 hover:text-primary relative overflow-hidden group" asChild>
            <a href="#contact">
              <span className="relative z-10">Hire Me</span>
              <motion.div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <Avatar className="h-40 w-40 border-4 border-primary/30 shadow-[0_0_50px_rgba(124,58,237,0.4)] relative z-10">
            <AvatarImage src={muhammadPhoto} className="object-cover" />
            <AvatarFallback className="bg-primary/20 text-4xl">MT</AvatarFallback>
          </Avatar>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border-2 border-dashed border-primary/20 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 backdrop-blur-sm animate-bounce">
            AI Magic in Progress ✨
          </Badge>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">Muhammad –</span><br />
          <span className="text-glow text-primary inline-block drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">AI Wizard</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Architecting autonomous systems and intelligent full-stack experiences. Transforming complex ideas into digital gold.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(124,58,237,0.4)] rounded-full group">
            Unlock My Work <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-primary/30 hover:bg-primary/10 rounded-full backdrop-blur-sm">
            Summon Me
          </Button>
        </motion.div>
      </section>

      {/* Portfolio Request Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/5 to-secondary/20 border border-primary/20 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 relative z-10">Want a portfolio like this?</h2>
            <p className="text-xl text-muted-foreground mb-8 relative z-10">I build high-converting, intelligent portfolios for developers and visionaries.</p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full relative z-10" asChild>
              <a href="#contact">Get Your Magic Link</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/20 relative border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Wizard's Toolkit</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl text-lg">Harnessing the power of modern AI and web frameworks.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Wand2, title: "AI Engineering", skills: "LangChain, OpenAI, n8n", color: "text-purple-400" },
              { icon: Globe, title: "Modern Web", skills: "Next.js 14, React, Tailwind", color: "text-blue-400" },
              { icon: Smartphone, title: "Mobile Dev", skills: "Flutter, React Native", color: "text-cyan-400" },
              { icon: Database, title: "Backend", skills: "Node.js, Postgres, Mongo", color: "text-emerald-400" }
            ].map((skill, i) => (
              <motion.div key={i} variants={item}>
                <Card className="bg-card/50 border-primary/10 backdrop-blur-sm hover:border-primary/50 transition-all hover:-translate-y-2 h-full group">
                  <CardHeader className="text-center">
                    <div className={cn("mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110", skill.color)}>
                      <skill.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{skill.title}</CardTitle>
                    <CardDescription className="text-primary/80 font-medium text-base">{skill.skills}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Sacred Artifacts</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl text-lg">Proprietary AI systems and cross-platform experiences.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { 
                title: "AI Social Analyzer", 
                desc: "Monitors social trends and generates actionable insights using GPT-4.", 
                tags: ["Next.js", "OpenAI", "Puppeteer"],
                icon: Cpu,
                gradient: "from-purple-900 to-black"
              },
              { 
                title: "Service Marketplace", 
                desc: "Enterprise platform connecting local providers with clients via mobile & web.", 
                tags: ["Flutter", "Firebase", "Node.js"],
                icon: Smartphone,
                gradient: "from-blue-900 to-black"
              },
              { 
                title: "n8n Automations", 
                desc: "Custom workflows integrating CRM, Email, and AI to automate manual tasks.", 
                tags: ["n8n", "Webhooks", "API"],
                icon: Zap,
                gradient: "from-emerald-900 to-black"
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card/30 border-primary/10 overflow-hidden hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] transition-all group h-full flex flex-col">
                  <div className={cn("h-56 bg-gradient-to-br relative overflow-hidden", p.gradient)}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p.icon className="w-20 h-20 text-white opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{p.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                       <Lock className="w-3 h-3" /> Proprietary Architecture
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(t => <Badge key={t} variant="outline" className="text-xs bg-primary/5">{t}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="w-full group-hover:text-primary group-hover:bg-primary/5 transition-all py-6">
                      Request Access <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Terms Section */}
      <section id="rates" className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Pricing & Spells</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl text-lg">Transparent engagement models for your next venture.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Hourly Consulting</CardTitle>
                <CardDescription>Small tasks & debugging</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-6">$40–60 <span className="text-lg text-muted-foreground font-normal">/ hr</span></div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Priority debugging</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Technical consulting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Small feature updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/30 scale-105 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <Badge className="bg-primary">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Monthly Retainer</CardTitle>
                <CardDescription>Ideal for AI startups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">$800–3,000 <span className="text-lg text-muted-foreground font-normal">/ mo</span></div>
                <p className="text-xs text-muted-foreground mb-6">20–80 hours dedicated support</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Continuous AI help</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Priority response</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Ongoing improvements</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Knowledge transfer</li>
                </ul>
              </CardContent>
              <CardFooter>
                 <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Fixed Milestone</CardTitle>
                <CardDescription>Clear scope, clear results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-6">Custom <span className="text-lg text-muted-foreground font-normal">Quote</span></div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 33% Deposit to start</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Prototype approval phase</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Final deployment & testing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 14-day bug-fix period</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Star className="w-6 h-6 text-primary" /> What’s Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Clear written scope", "Weekly progress updates", 
                  "Deployment assistance", "1-2 rounds of revisions", 
                  "Basic documentation", "Lifetime magic vibes"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card/30 border border-primary/10">
              <h3 className="text-lg font-bold mb-4">Payments & Platforms</h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <Badge variant="secondary" className="bg-primary/10">Wise</Badge>
                <Badge variant="secondary" className="bg-primary/10">Payoneer</Badge>
                <Badge variant="secondary" className="bg-primary/10">PayPal</Badge>
                <Badge variant="secondary" className="bg-primary/10">Crypto (USDT/BTC)</Badge>
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">
                All projects are USD quoted. Crypto payments accepted for global clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 border-y border-primary/5">
        <div className="container mx-auto px-4">
           <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Contractual Spells</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {["Full-Stack Web Dev", "AI App Development", "Mobile App (Flutter)", "n8n Automation"].map((service, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-2xl border border-primary/10 bg-card/50 hover:bg-primary/10 hover:border-primary/30 transition-all text-center group"
                >
                   <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service}</h3>
                   <div className="text-primary font-mono text-sm">$40–60 / hr</div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gradient-to-b from-card to-card/50 border-primary/20 shadow-2xl relative overflow-hidden p-1">
            <div className="absolute inset-0 bg-primary/5 animate-pulse" />
            <div className="bg-card p-6 md:p-12 rounded-3xl relative z-10">
              <CardHeader className="text-center px-0">
                <CardTitle className="text-4xl md:text-5xl font-display mb-4">Summon the Wizard</CardTitle>
                <CardDescription className="text-lg">
                  Ready to transform your vision? Drop me a message at <span className="text-primary font-medium">muhammadtayyab0904@gmail.com</span> or use the form below.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <Input placeholder="Enter your name..." className="h-12 bg-muted/50 border-primary/10 focus:border-primary/50 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Email</label>
                      <Input type="email" placeholder="you@company.com" className="h-12 bg-muted/50 border-primary/10 focus:border-primary/50 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">The Vision</label>
                    <Textarea placeholder="I need an AI-powered..." className="min-h-[150px] bg-muted/50 border-primary/10 focus:border-primary/50 transition-all" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-xl py-8 shadow-lg shadow-primary/25 rounded-2xl group transition-all">
                    Send Magical Request <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-muted-foreground border-t border-primary/5 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 mb-8">
             <a href="#" className="hover:text-primary transition-colors">GitHub</a>
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <p>© 2026 Muhammad. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Crafted with Next.js, Framer Motion & Pure Sorcery 🔮</p>
        </div>
      </footer>

      {/* THE CHATBOT */}
      <ChatWidget />
    </div>
  );
}
