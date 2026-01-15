import { motion } from "framer-motion";
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
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatWidget } from "@/components/ChatWidget";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import muhammadPhoto from "@assets/WhatsApp_Image_2026-01-15_at_7.30.53_AM_1768460571326.jpeg";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 z-[100] w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            <span>Muhammad<span className="opacity-50">.dev</span></span>
          </div>
          <div className="flex items-center gap-4">
             <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <a href="mailto:muhammadtayyab0904@gmail.com">Email</a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://wa.me/923241067371">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-20">
        {/* Hero */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
            <motion.div {...fadeIn}>
              <Badge variant="secondary" className="mb-6 px-3 py-1 bg-secondary/50 text-secondary-foreground border-none">
                AI & Full-Stack Specialist
              </Badge>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-balance">
                Building Autonomous <br />
                Systems & Intelligent Web.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Specializing in AI Agents (LangChain), automated intelligence pipelines, and high-performance web applications. I turn complex logic into concise digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="mailto:muhammadtayyab0904@gmail.com" title="Email"><Mail className="h-5 w-5" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <a href="https://wa.me/923241067371" title="WhatsApp"><Phone className="h-5 w-5" /></a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border/50">
                <img src={muhammadPhoto} alt="Muhammad" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack - More Prominent */}
        <section className="mb-24 py-12 border-y border-border/40">
           <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">AI Expertise</h3>
                <ul className="space-y-2 text-sm">
                  <li>LangChain & Auto-GPT</li>
                  <li>OpenAI & LLM Fine-tuning</li>
                  <li>n8n & Zapier Automation</li>
                  <li>Vector DBs (Pinecone/Milvus)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Frontend</h3>
                <ul className="space-y-2 text-sm">
                  <li>Next.js 14+ (App Router)</li>
                  <li>React & TypeScript</li>
                  <li>Tailwind CSS & Framer Motion</li>
                  <li>Shadcn/UI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Backend/Mobile</h3>
                <ul className="space-y-2 text-sm">
                  <li>Node.js & Python</li>
                  <li>PostgreSQL & MongoDB</li>
                  <li>Flutter (iOS/Android)</li>
                  <li>Docker & AWS Deployment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Status</h3>
                <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for Freelance
                </div>
              </div>
           </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Featured Work</h2>
              <p className="text-muted-foreground">Proprietary systems built for performance.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all overflow-hidden">
              <CardHeader className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                  <Badge>AI Project</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Mindlee</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Market intelligence platform powered by LangChain. Scrapes X, Instagram, and RSS feeds to generate automated insights and AI-driven reports.
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-8 pb-8">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Request Access <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="group border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all overflow-hidden">
              <CardHeader className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <Badge>Web & Mobile</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Sahayak</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Full-stack marketplace connecting local services. Features a robust web dashboard and cross-platform mobile apps for real-time service booking.
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-8 pb-8">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Request Access <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section id="rates" className="mb-24 py-16 px-8 rounded-3xl bg-secondary/20 border border-border/50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Engagement Models</h2>
            <p className="text-muted-foreground">Transparent pricing for startups and small businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Hourly</h3>
              <div className="text-3xl font-bold mb-4">$40–60<span className="text-sm font-normal text-muted-foreground">/hr</span></div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                <li>• Best for consulting</li>
                <li>• Debugging & Fixes</li>
                <li>• Small feature tasks</li>
              </ul>
              <Button variant="ghost" className="w-full" asChild><a href="mailto:muhammadtayyab0904@gmail.com">Contact</a></Button>
            </div>
            <div className="p-8 bg-background rounded-2xl border border-border/50 shadow-xl relative scale-105">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Recommended</Badge>
              <h3 className="font-bold text-lg mb-2">Retainer</h3>
              <div className="text-3xl font-bold mb-4">$800–3,000<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 20–80 hours/month</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Priority response</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Continuous AI support</li>
              </ul>
              <Button className="w-full" asChild><a href="https://wa.me/923241067371">Hire Now</a></Button>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Milestone</h3>
              <div className="text-3xl font-bold mb-4">Fixed<span className="text-sm font-normal text-muted-foreground"> Quote</span></div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                <li>• 33% Start / 33% Prototype</li>
                <li>• 34% Live / 14-day QA</li>
                <li>• Full documentation</li>
              </ul>
              <Button variant="ghost" className="w-full" asChild><a href="https://wa.me/923241067371">Enquire</a></Button>
            </div>
          </div>
        </section>

        {/* CTA Portfolio */}
        <section className="mb-24 text-center">
          <div className="p-12 rounded-3xl bg-primary text-primary-foreground">
             <h2 className="text-3xl font-display font-bold mb-4">Need a portfolio that converts?</h2>
             <p className="mb-8 opacity-80 max-w-xl mx-auto">I build concise, professional portfolios for engineers. Contact me to get started.</p>
             <Button size="lg" variant="secondary" className="rounded-full px-10" asChild>
                <a href="https://wa.me/923241067371">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></a>
             </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© 2026 Muhammad Tayyab. AI & Web Sorcery.</p>
          <div className="flex gap-6">
            <a href="mailto:muhammadtayyab0904@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://wa.me/923241067371" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
