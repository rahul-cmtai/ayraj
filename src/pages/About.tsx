"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Palette,
  Hammer,
  Crown,
  Sparkles,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"
import Footer from "@/components/Footer"
import Navigation from '@/components/Navigation';
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Handcrafted Wooden Flooring",
      description:
        "Meticulously crafted from carefully selected hardwoods, finished to perfection for both traditional and contemporary interiors.",
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Exquisite Carved Furniture",
      description:
        "Heirloom-quality pieces sculpted by master artisans using traditional carving techniques that elevate wood into sculptural art.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Bespoke Wallpapers",
      description:
        "From hand-painted designs to bold contemporary statements, each wallpaper adds unique personality to your space.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Carpets",
      description: "Woven with finest natural fibers, from Persian-inspired motifs to modern geometric patterns.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Fine Porcelain Tableware",
      description: "Delicate craftsmanship and graceful design that transforms every meal into an elegant experience.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Handmade Luxurious Fabrics",
      description:
        "Custom draperies and upholstery fabrics woven by skilled artisans for tactile richness and movement.",
    },
  ]

  const values = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Authenticity",
      description: "Every piece reflects genuine craftsmanship and heritage",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Precision",
      description: "Meticulous attention to detail in every project",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Enduring Beauty",
      description: "Designs that transcend trends and time",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Deeply personal spaces crafted with intention",
    },
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1920&auto=format&fit=crop"
            alt="AYRAJ Luxury Interiors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div
          className={`relative z-10 text-center text-white max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge variant="outline" className="mb-6 text-gold border-gold/50 bg-black/20 backdrop-blur-sm">
            Crafting Luxury Since 2023
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
            AYRAJ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream font-light leading-relaxed">
            Where timeless craftsmanship meets refined luxury
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-olive text-white px-8 py-3">
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div> */}
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-20 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-olive mb-6">Redefining Luxury Living</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8" />
            <p className="text-xl text-olive max-w-3xl mx-auto leading-relaxed">
              At AYRAJ, we are not just curators of exquisite interiors — we are creators of homes that speak the
              language of elegance, heritage, and enduring quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-olive">A Symphony of Craftsmanship</h3>
              <p className="text-olive leading-relaxed">
                Specializing in luxury handcrafted wooden flooring, bespoke wallpapers, intricately carved furniture,
                premium carpets, fine porcelain tableware, and handwoven fabrics, our collections celebrate the finest
                artisan traditions.
              </p>
              <p className="text-olive leading-relaxed">
                We provide comprehensive turnkey residential construction solutions, blending architectural vision with
                impeccable interior detail — delivering complete, move-in-ready residences that embody sophistication
                and personalized design.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=600&auto=format&fit=crop"
                alt="Luxury Interior Craftsmanship"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive mb-6">Our Signature Collections</h2>
            <p className="text-xl text-olive max-w-3xl mx-auto">
              Every element we offer is a testament to human artistry and attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-olive mb-4">{service.title}</h3>
                  <p className="text-olive leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Construction */}
      <section className="py-20 bg-cream-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
                alt="Turnkey Construction"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-gold/10 text-gold hover:bg-gold/20">Complete Solutions</Badge>
              <h3 className="text-4xl font-bold text-olive">Turnkey Residential Construction</h3>
              <p className="text-olive leading-relaxed">
                Beyond interiors, AYRAJ is a full-service luxury residential construction firm. We undertake complete
                turnkey projects, managing every detail from architectural planning and structural execution to the
                final flourish of interior finishing.
              </p>
              <p className="text-olive leading-relaxed">
                Our in-house teams of architects, designers, engineers, and master craftsmen collaborate to bring your
                vision to life — with full transparency, meticulous project management, and a dedication to delivering
                homes that are not only structurally sound but emotionally resonant.
              </p>
              <Link to="/my-work">
                <Button className="bg-olive hover:bg-olive text-white">
                  View Construction Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive mb-6">Our Philosophy</h2>
            <p className="text-xl text-olive max-w-3xl mx-auto leading-relaxed">
              Luxury, to us, is not about excess — it's about authenticity, precision, and enduring beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <div className="text-gold">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-olive mb-3">{value.title}</h3>
                <p className="text-olive">{value.description}</p>
              </div>
            ))}
          </div>

          <Separator className="my-16" />

          <div className="text-center space-y-6">
            <p className="text-lg text-olive max-w-4xl mx-auto leading-relaxed">
              We source our materials ethically, prioritize sustainable practices, and partner with artisans whose
              skills are rooted in heritage yet guided by innovation. Our goal is to create spaces that are deeply
              personal, exquisitely made, and effortlessly luxurious.
            </p>
            <p className="text-xl font-semibold text-olive">
              With each project, we offer more than a product or service — we deliver a complete lifestyle, crafted with
              intention and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-olive mb-6">Why Choose AYRAJ</h2>
            <p className="text-xl text-olive">What sets us apart in luxury interior design</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olive mb-3">Fast Execution</h3>
              <p className="text-olive">
                Efficient processes ensuring timely completion without compromising quality
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olive mb-3">Premium Quality</h3>
              <p className="text-olive">Uncompromising standards in materials and craftsmanship</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olive mb-3">Personalized Service</h3>
              <p className="text-olive">Tailored solutions that reflect your unique style and requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-olive mb-3">Quality Assurance</h3>
              <p className="text-olive">Guaranteed satisfaction with comprehensive quality checks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gold to-olive text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to AYRAJ</h2>
          <p className="text-xl mb-8 text-white/90">Where your dream space becomes a handcrafted reality</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-olive text-gold hover:bg-olive hover:text-white px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-gold text-black hover:bg-white hover:text-gold px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
