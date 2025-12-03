import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const { error } = await supabase
        .from('beta_signups')
        .insert([{ email }]);
      
      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already on the list!",
            description: "This email is already registered for beta access.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Oops!",
            description: "Something went wrong. Please try again.",
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "You're on the list!",
          description: "We'll notify you when beta access is available."
        });
        setEmail("");
      }
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">🚀 Beta Phase ab dem 7. Dezember</span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Deine Kontakte. Neu gedacht.</motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pling revolutioniert dein Adressbuch mit KI: Du führst Gespräche über deine Kontakte und legst per Sprache neue an, bearbeitest sie und ergänzt Einträge – alles ganz einfach per Audio.
          </motion.p>

          <motion.form initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 h-12 bg-secondary/50 border-border focus:border-primary transition-colors" placeholder="Deine E-Mail..." />
            <Button type="submit" className="h-12 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Join Beta
            </Button>
          </motion.form>

          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-sm text-muted-foreground mt-4">Kein Spam, versprochen! 😉 </motion.p>
        </motion.div>
      </div>
    </section>;
};