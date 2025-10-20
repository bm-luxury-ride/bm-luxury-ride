import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Star, 
  MapPin, 
  Plane, 
  Briefcase, 
  Heart,
  CheckCircle,
  ArrowRight,
  Award,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Seamless arrivals and departures at DFW International and Dallas Love Field"
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Executive transportation for meetings, conferences, and business engagements"
    },
    {
      icon: Heart,
      title: "Special Events",
      description: "Celebrate life's milestone moments with sophistication and grace"
    },
    {
      icon: MapPin,
      title: "City Experiences",
      description: "Curated luxury tours throughout the Dallas-Fort Worth metroplex"
    }
  ];

  const features = [
    { icon: Award, text: "Licensed & Insured", desc: "Fully certified professionals" },
    { icon: Clock, text: "24/7 Service", desc: "Always at your disposal" },
    { icon: Star, text: "Elite Chauffeurs", desc: "Trained excellence" },
    { icon: Shield, text: "Premium Fleet", desc: "Meticulously maintained" }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Corporate Executive",
      text: "An exceptional experience from start to finish. The attention to detail and professionalism is unmatched in the DFW area.",
      rating: 5
    },
    {
      name: "James Anderson",
      role: "Wedding Client",
      text: "They made our special day even more memorable. The vehicle was pristine and the service was absolutely first-class.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Frequent Traveler",
      text: "My go-to service for all airport transfers. Reliable, luxurious, and always punctual. Simply the best.",
      rating: 5
    }
  ];

  const luxuryFeatures = [
    "Impeccably maintained premium vehicles",
    "Professionally trained chauffeurs",
    "Complimentary premium amenities",
    "Real-time flight tracking",
    "Transparent, competitive pricing",
    "Discreet and confidential service"
  ];

  return (
    <div className="bg-black">
      {/* Hero Section with Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/BM_banner.png"
            alt="BM Luxury Ride - Dallas Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 border border-gold/30 bg-black/40 backdrop-blur-sm mb-6">
                <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs">DFW's Premier Service</span>
              </div>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-8 leading-tight">
              Luxury
              <span className="block text-gold italic font-normal">Redefined</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl">
              Experience the pinnacle of sophistication with Dallas-Fort Worth's most distinguished transportation service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              
                <Button className="px-10 py-7 text-base bg-gold text-black hover:bg-gold-light font-semibold tracking-widest uppercase luxury-shadow group relative overflow-hidden">
                  <span className="relative z-10">Reserve Your Experience</span>
                  <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              
              <a href="tel:+14695551234">
                <Button 
                  variant="outline" 
                  className="px-10 py-7 text-base border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  (469) 555-1234
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Features Bar */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/90 backdrop-blur-xl border border-gold/20 p-8 text-center group hover:border-gold transition-all duration-500 luxury-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="text-white font-semibold mb-1 tracking-wide">{feature.text}</div>
                <div className="text-gray-400 text-sm">{feature.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 elegant-border pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Our Services</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">
                Tailored Excellence
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Every journey is crafted to exceed your expectations
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-gold/20 hover:border-gold transition-all duration-500 h-full group backdrop-blur-sm luxury-shadow">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-3xl font-light text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Excellence in Every Detail</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
                The BM Luxury
                <span className="block text-gold italic">Difference</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                We transcend ordinary transportation, delivering an experience defined by elegance, discretion, and impeccable service.
              </p>
              <div className="space-y-5 mb-12">
                {luxuryFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
              
                <Button className="px-8 py-6 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold tracking-wider uppercase transition-all duration-300">
                  Explore Our Fleet
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
            
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
                  alt="Luxury Interior"
                  className="w-full rounded-sm luxury-shadow"
                />
                <div className="absolute inset-0 border border-gold/20 rounded-sm"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold text-black px-10 py-8 luxury-shadow">
                <div className="font-serif text-6xl font-light mb-2">5+</div>
                <div className="font-medium tracking-wider uppercase text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 elegant-border pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Client Testimonials</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">
                Trusted by
                <span className="block text-gold italic">Discerning Clients</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-gold/20 h-full backdrop-blur-sm luxury-shadow hover:border-gold transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-8 italic leading-relaxed font-light text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-6 border-t border-gold/20">
                      <div className="font-semibold text-white mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201, 169, 97, 0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-8" />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Begin Your Journey in
              <span className="block text-gold italic">Luxury</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Reserve your premium experience today and discover why discerning clients choose BM Luxury Ride
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
                <Button className="px-10 py-7 text-base bg-gold text-black hover:bg-gold-light font-semibold tracking-widest uppercase luxury-shadow">
                  Reserve Now
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              
              <a href="tel:+14695551234">
                <Button 
                  variant="outline" 
                  className="px-10 py-7 text-base border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  (469) 555-1234
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}