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
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatWidget } from "@/components/ChatWidget";
import { cn } from "@/lib/utils";
import muhammadPhoto from "@assets/WhatsApp_Image_2026-01-15_at_7.30.53_AM_1768460571326.jpeg";

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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 z-[100] w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-lg tracking-tight flex items-center gap-2"
          >
            <Code2 className="h-5 w-5 text-primary" />
            <span>Muhammad<span className="opacity-50">.dev</span></span>
          </motion.div>
          <div className="flex items-center gap-4">
            <Button size="sm" asChild className="rounded-full">
              <a href="https://wa.me/923241067371">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-20">
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
                  <Rocket className="w-3 h-3 mr-2" /> AI & Full-Stack Specialist
                </Badge>
              </motion.div>
              <motion.h1 
                variants={itemVars}
                className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-balance leading-[0.9]"
              >
                Autonomous <br />
                <span className="text-muted-foreground">Intelligence.</span>
              </motion.h1>
              <motion.p 
                variants={itemVars}
                className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                I architect AI Agents and high-performance web systems that automate complexity. Concise, professional, and built for scale.
              </motion.p>
              <motion.div variants={itemVars} className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
                  <a href="#projects">Explore Work</a>
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full w-14 h-14" asChild>
                    <a href="mailto:muhammadtayyab0904@gmail.com" title="Email"><Mail className="h-6 w-6" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-14 h-14" asChild>
                    <a href="https://wa.me/923241067371" title="WhatsApp"><Phone className="h-6 w-6" /></a>
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
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden border border-border/50 bg-secondary shadow-2xl">
                <img 
                  src={muhammadPhoto} 
                  alt="Muhammad" 
                  className="h-full w-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl border border-border shadow-xl flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Available for hire</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack - Elevated */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack.map((stack, i) => (
              <Card key={i} className="bg-secondary/20 border-border/40 hover:bg-secondary/30 transition-all group">
                <CardHeader>
                  <stack.icon className={cn("h-6 w-6 mb-4", stack.color)} />
                  <CardTitle className="text-lg">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-border" />
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
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter">Proprietary Systems</h2>
            <div className="h-1 w-20 bg-primary" />
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
                <Card className="group h-full border-border/40 bg-secondary/10 hover:bg-secondary/20 transition-all p-4">
                  <CardHeader className="p-8 pb-4">
                    <p.icon className={cn("h-10 w-10 mb-6", p.color)} />
                    <Badge variant="outline" className="w-fit mb-4">{p.category}</Badge>
                    <CardTitle className="text-3xl mb-4">{p.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                      {p.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-8 pt-0">
                    <Button variant="link" className="px-0 text-primary group-hover:gap-3 transition-all">
                      Case Study Request <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-4xl font-display font-bold mb-6 tracking-tighter">Pricing & Terms</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Transparent milestone-based engagement models for startups and growing teams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Milestone Protection</h4>
                    <p className="text-sm text-muted-foreground">Clear scope & guaranteed delivery phases.</p>
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
                  "border-border/40",
                  p.highlight ? "bg-primary text-primary-foreground" : "bg-secondary/10"
                )}>
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

        {/* Final CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="py-20 px-8 rounded-[3rem] bg-secondary/30 border border-border/40 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 relative z-10 tracking-tighter">
                Need a High-Conversion Portfolio?
             </h2>
             <p className="mb-10 text-muted-foreground max-w-xl mx-auto text-lg relative z-10">
                I build concise, performant sites for engineers and agencies. Let's discuss your magic.
             </p>
             <Button size="lg" className="rounded-full px-12 h-16 text-xl relative z-10" asChild>
                <a href="https://wa.me/923241067371">Message on WhatsApp</a>
             </Button>
          </div>
        </motion.section>
      </main>

      <footer className="py-12 border-t border-border/40 bg-secondary/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© 2026 Muhammad Tayyab. Built with Precision.</p>
          <div className="flex gap-8">
            <a href="mailto:muhammadtayyab0904@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://wa.me/923241067371" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
