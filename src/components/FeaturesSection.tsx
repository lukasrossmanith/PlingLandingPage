import { motion } from "framer-motion";
import { Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing speed with our optimized infrastructure designed for performance.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security and encryption.",
  },
  {
    icon: Sparkles,
    title: "Intuitive Design",
    description: "Beautiful interface that's easy to use, no learning curve required.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Why Join Our Beta?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of something special. Get early access to cutting-edge features and help shape the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
