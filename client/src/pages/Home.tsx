import { motion, Variants } from "framer-motion";
import { 
  Mail, 
  ExternalLink, 
  Cpu, 
  Wand2, 
  Database,
  Smartphone,
  Globe,
  Zap,
  CheckCircle2,
  Lock,
  Phone,
  ArrowRight,
  Code2,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatWidget } from "@/components/ChatWidget";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import muhammadPhoto from "@assets/pfp.jpeg";

export default function Home() {
  const containerVars: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const techStack = [
    { 
      category: "AI & Intelligence", 
      icon: Cpu,
      items: ["LangChain & Auto-GPT", "OpenAI & LLM Fine-tuning", "n8n & Zapier Automation", "Vector DBs (Pinecone)"],
      color: "text-purple-400"
    },
    { 
      category: "Frontend Architecture", 
      icon: Layers,
      items: ["Next.js 14+ (App Router)", "React & TypeScript", "Tailwind CSS", "Framer Motion Animations"],
      color: "text-blue-400"
    },
    { 
      category: "Backend & Systems", 
      icon: Database,
      items: ["Node.js & Python", "PostgreSQL & MongoDB", "Docker & Kubernetes", "AWS/Vercel Deployment"],
      color: "text-emerald-400"
    },
    { 
      category: "Mobile Solutions", 
      icon: Smartphone,
      items: ["Flutter (iOS/Android)", "React Native", "Firebase Integration", "App Store Deployment"],
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      {/* Wizard Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-20 animate-pulse [animation-delay:2s]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-[100] w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-lg tracking-tight flex items-center gap-2"
          >
            <Wand2 className="h-5 w-5 text-primary animate-pulse" />
            <span>Muhammad<span className="opacity-50">.wizard</span></span>
          </motion.div>
          <div className="flex items-center gap-4">
            <Button size="sm" asChild className="rounded-full shadow-lg shadow-primary/20">
              <a href="https://wa.me/923241067371">Summon Wizard</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        {/* Hook Phrase */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Stop Building Websites. Start Building Empires.</span>
        </motion.div>

        {/* Hero */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-[1fr_450px] gap-16 items-center">
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={itemVars}>
                <Badge variant="secondary" className="mb-6 px-3 py-1 bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-3 h-3 mr-2" /> AI Sorcery & Digital Gold
                </Badge>
              </motion.div>
              <motion.h1 
                variants={itemVars}
                className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-balance leading-[0.9]"
              >
                Turning Logic <br />
                <span className="text-primary italic">Into Magic.</span>
              </motion.h1>
              <motion.p 
                variants={itemVars}
                className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                I don't just write code; I weave autonomous intelligence into the fabric of your business. Professional AI agents and systems designed for dominance.
              </motion.p>
              <motion.div variants={itemVars} className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20 group" asChild>
                  <a href="#projects">
                    View My Spells <Zap className="ml-2 w-5 h-5 group-hover:fill-current transition-all" />
                  </a>
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full w-14 h-14 hover:bg-primary/5 transition-colors" asChild>
                    <a href="mailto:muhammadtayyab0904@gmail.com" title="Email"><Mail className="h-6 w-6 text-primary" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-14 h-14 hover:bg-primary/5 transition-colors" asChild>
                    <a href="https://wa.me/923241067371" title="WhatsApp"><Phone className="h-6 w-6 text-primary" /></a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden border border-primary/20 bg-secondary shadow-2xl select-none">
                <img 
                  src={muhammadPhoto} 
                  alt="Muhammad" 
                  className="h-full w-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 pointer-events-none drag-none" 
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl border border-primary/30 shadow-2xl flex items-center gap-4 backdrop-blur-md"
              >
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                <span className="text-sm font-bold tracking-tight">WIZARD ONLINE</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack.map((stack, i) => (
              <Card key={i} className="bg-secondary/20 border-border/40 hover:border-primary/30 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <stack.icon className={cn("h-6 w-6 mb-4", stack.color)} />
                  <CardTitle className="text-lg">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {stack.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <div className="mb-16 flex items-center gap-4">
            <h2 className="text-4xl font-display font-bold tracking-tighter">Proprietary Artifacts</h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { 
                title: "Mindlee", 
                category: "AI Intelligence Platform",
                desc: "Enterprise-grade intelligence system powered by LangChain. Automated scraping and synthesis of market data into actionable AI reports.",
                icon: Cpu,
                color: "text-purple-400"
              },
              { 
                title: "Sahayak", 
                category: "Service Marketplace",
                desc: "High-performance service ecosystem. Integrated real-time booking, full-stack dashboard, and cross-platform mobile experiences.",
                icon: Globe,
                color: "text-blue-400"
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border/40 bg-secondary/10 hover:bg-secondary/20 transition-all p-4 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  <CardHeader className="p-8 pb-4 relative z-10">
                    <p.icon className={cn("h-10 w-10 mb-6", p.color)} />
                    <Badge variant="outline" className="w-fit mb-4 border-primary/20">{p.category}</Badge>
                    <CardTitle className="text-3xl mb-4">{p.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                      {p.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-8 pt-0 relative z-10">
                    <Button variant="link" className="px-0 text-primary group-hover:gap-3 transition-all" asChild>
                      <a href="#contact">Check for Case Study <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="rates" className="mb-32">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-4xl font-display font-bold mb-6 tracking-tighter">Pricing & Rituals</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Transparent milestone-based engagement models for startups and growing teams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Wizard's Oath</h4>
                    <p className="text-xs text-muted-foreground">Absolute clarity in scope & execution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { 
                  name: "Hourly Consulting", 
                  price: "$40–60", 
                  unit: "/hr",
                  features: ["Consulting & Debugging", "Small Feature Tasks", "Technical Support"]
                },
                { 
                  name: "Monthly Retainer", 
                  price: "$800–3k", 
                  unit: "/mo",
                  features: ["20–80 hours/month", "Priority Response", "Continuous AI Support"],
                  highlight: true
                },
                { 
                  name: "Fixed Milestone", 
                  price: "Custom", 
                  unit: " Quote",
                  features: ["33% Start / Prototype", "Live Deployment", "14-day Bug-fix Period"]
                }
              ].map((p, i) => (
                <Card key={i} className={cn(
                  "border-border/40 relative overflow-hidden",
                  p.highlight ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20" : "bg-secondary/10"
                )}>
                  {p.highlight && <div className="absolute top-0 right-0 p-2"><StarIcon className="w-5 h-5 fill-current" /></div>}
                  <CardHeader>
                    <CardTitle className="text-xl">{p.name}</CardTitle>
                    <div className="text-3xl font-bold mt-2">
                      {p.price}<span className="text-sm font-normal opacity-70">{p.unit}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm opacity-80">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" /> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="mb-32">
          <div className="max-w-4xl mx-auto">
             <Card className="p-8 md:p-12 border-primary/20 bg-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="text-center mb-12">
                   <h2 className="text-4xl font-display font-bold mb-4">Summon the Magic</h2>
                   <p className="text-muted-foreground">Direct path: <span className="text-primary font-bold">muhammadtayyab0904@gmail.com</span></p>
                </div>
                <form className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold">Name</label>
                         <Input placeholder="Gandalf..." className="bg-background/50 border-border/50" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold">Email</label>
                         <Input type="email" placeholder="gandalf@wizard.com" className="bg-background/50 border-border/50" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold">Your Quest</label>
                      <Textarea placeholder="I need an AI Agent to..." className="min-h-[150px] bg-background/50 border-border/50" />
                   </div>
                   <Button className="w-full h-14 rounded-full text-lg shadow-xl shadow-primary/10 group">
                      Cast Spell <Zap className="ml-2 w-5 h-5 group-hover:scale-125 transition-all" />
                   </Button>
                </form>
             </Card>
          </div>
        </section>

        {/* Final CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="py-20 px-8 rounded-[3rem] bg-secondary/30 border border-primary/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 relative z-10 tracking-tighter">
                Need a High-Conversion Portfolio?
             </h2>
             <p className="mb-10 text-muted-foreground max-w-xl mx-auto text-lg relative z-10">
                I build concise, performant sites for engineers and agencies. Let's discuss your magic.
             </p>
             <Button size="lg" className="rounded-full px-12 h-16 text-xl relative z-10 shadow-2xl shadow-primary/30" asChild>
                <a href="https://wa.me/923241067371">Message on WhatsApp</a>
             </Button>
          </div>
        </motion.section>
      </main>

      <footer className="py-12 border-t border-border/40 bg-secondary/10 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© 2026 Muhammad Tayyab. AI & Web Sorcery.</p>
          <div className="flex gap-8">
            <a href="mailto:muhammadtayyab0904@gmail.com" className="hover:text-primary transition-colors font-bold">muhammadtayyab0904@gmail.com</a>
            <a href="https://wa.me/923241067371" className="hover:text-primary transition-colors font-bold">+92 324 1067371</a>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
