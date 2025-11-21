"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  X,
  MessageCircle,
  Users,
  Briefcase,
  TrendingUp,
  Target,
  BookOpen,
  GraduationCap,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  Award,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react"

export default function ArrohmanCenterPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "",
    schedule: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Halo, saya ingin mendaftar program Bahasa Inggris di Arrohman Center.

Nama: ${formData.name}
Nomor WhatsApp: ${formData.phone}
Program: ${formData.program}
Jadwal belajar yang diinginkan: ${formData.schedule || "Fleksibel"}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/62081212345346?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleConsultation = () => {
    const message = encodeURIComponent("Halo, saya ingin konsultasi program Bahasa Inggris di Arrohman Center.")
    window.open(`https://wa.me/62081212345346?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  A
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <GraduationCap size={12} className="text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">Arrohman Center</span>
                <span className="text-xs text-muted-foreground hidden sm:block">English Language Course</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("program")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Program
              </button>
              <button
                onClick={() => scrollToSection("method")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Metode
              </button>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Testimoni
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={handleConsultation}
                className="bg-cta hover:bg-cta/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone size={16} className="mr-2" />
                Hubungi Kami
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-foreground">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-border/40 animate-in slide-in-from-top">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("program")}
                  className="text-foreground/80 hover:text-primary font-medium text-left py-2"
                >
                  Program
                </button>
                <button
                  onClick={() => scrollToSection("method")}
                  className="text-foreground/80 hover:text-primary font-medium text-left py-2"
                >
                  Metode
                </button>
                <button
                  onClick={() => scrollToSection("testimonial")}
                  className="text-foreground/80 hover:text-primary font-medium text-left py-2"
                >
                  Testimoni
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-foreground/80 hover:text-primary font-medium text-left py-2"
                >
                  FAQ
                </button>
                <Button
                  onClick={handleConsultation}
                  className="bg-cta hover:bg-cta/90 text-white rounded-full w-full mt-2"
                >
                  Hubungi Kami
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-accent/40">
                <Award size={16} />
                Lembaga Kursus Terpercaya
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
               BELAJAR BAHASA INGGRIS
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  MUDAH & MENYENANGKAN
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Tingkatkan kemampuan Bahasa Inggris Anda dengan metode pembelajaran interaktif, tutor berpengalaman, dan
                suasana belajar yang menyenangkan.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 py-4">
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Siswa Aktif</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => scrollToSection("register")}
                  size="lg"
                  className="bg-cta hover:bg-cta/90 text-white rounded-full px-8 text-lg shadow-xl hover:shadow-2xl transition-all group"
                >
                  Daftar Sekarang
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={handleConsultation}
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 text-lg transition-all bg-transparent"
                >
                  <Play size={20} className="mr-2" />
                  Lihat Program
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Sertifikat Resmi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Garansi Belajar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Jadwal Fleksibel</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image with Cards */}
            <div className="relative animate-fade-in-up">
              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2021/04/12/ilustrasi-belajar-online_169.jpeg"
                  alt="English Learning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Star size={20} className="text-white fill-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900">4.9/5.0</div>
                        <div className="text-xs text-gray-600">Rating Siswa</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "Metode belajar yang interaktif dan tutor yang sabar membuat saya lebih percaya diri berbahasa
                    Inggris!"
                  </p>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl hidden lg:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Flexible Schedule</div>
                    <div className="text-xs text-gray-600">Weekday & Weekend</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl hidden lg:block animate-float delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <Globe size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Native & Local Tutors</div>
                    <div className="text-xs text-gray-600">Experienced Teachers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen size={16} />
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Program yang Dirancang untuk Kebutuhan Anda
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Pilih program yang sesuai dengan tujuan belajar dan tingkat kemampuan Bahasa Inggris Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/people-having-animated-english-conversation-practi.jpg"
                  alt="Speaking Mastery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Speaking Mastery</CardTitle>
                <CardDescription className="text-base">
                  Program intensif untuk meningkatkan kemampuan berbicara dengan percaya diri
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Daily Conversation Practice
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Pronunciation Training
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Public Speaking Skills
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={handleConsultation}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/professional-business-meeting-english-presentation.jpg"
                  alt="English for Workers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">English for Workers</CardTitle>
                <CardDescription className="text-base">
                  Khusus karyawan untuk meningkatkan komunikasi di lingkungan kerja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Professional Email Writing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Office Communication
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Telephone Etiquette
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={handleConsultation}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Program 3 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/business-executives-in-corporate-meeting-discussin.jpg"
                  alt="Business English"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Business English</CardTitle>
                <CardDescription className="text-base">
                  Bahasa Inggris bisnis untuk presentasi, meeting, dan negosiasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Business Presentation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Negotiation Skills
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Corporate Communication
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={handleConsultation}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Program 4 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/professional-job-interview-candidate-answering-que.jpg"
                  alt="Job Interview Class"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Target className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Job Interview Prep</CardTitle>
                <CardDescription className="text-base">
                  Persiapan interview kerja dengan simulasi dan tips praktis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Mock Interview Sessions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Common Questions Practice
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Body Language Tips
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={handleConsultation}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Program 5 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/student-taking-toefl-ielts-test-preparation-focuse.jpg"
                  alt="TOEFL IELTS Preparation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">TOEFL/IELTS Prep</CardTitle>
                <CardDescription className="text-base">
                  Persiapan tes dengan strategi, latihan soal, dan target skor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Test-Taking Strategies
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Practice Tests & Review
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Score Prediction
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={handleConsultation}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Program 6 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/happy-children-learning-english-with-fun-activitie.jpg"
                  alt="Kids and Teens Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Kids & Teens</CardTitle>
                <CardDescription className="text-base">
                  Program menyenangkan dengan learning by playing dan aktivitas interaktif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Interactive Games
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Creative Activities
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary" />
                    Age-Appropriate Materials
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all bg-transparent"
                  onClick={handleConsultation}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Method Section */}
      <section id="method" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              Our Method
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Metode Belajar yang Terbukti Efektif
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Pendekatan pembelajaran yang berfokus pada praktik langsung dan hasil nyata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Kelas interaktif dengan fokus pada percakapan aktif dan praktik langsung
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Small Class Size</h3>
              <p className="text-muted-foreground">
                Kelas kecil untuk memastikan setiap siswa mendapat perhatian optimal
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Goal-Oriented</h3>
              <p className="text-muted-foreground">
                Pembelajaran dengan target yang jelas dan terukur untuk setiap level
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Tutors</h3>
              <p className="text-muted-foreground">Tutor berpengalaman dan tersertifikasi yang sabar dan profesional</p>
            </div>
          </div>

          {/* Visual Method Showcase */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/modern-interactive-english-classroom-with-students.jpg" alt="Learning Method" className="w-full h-[400px] object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Pembelajaran yang Disesuaikan dengan Kebutuhan Anda
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Placement Test</h4>
                    <p className="text-muted-foreground">
                      Tes penempatan untuk menentukan level yang sesuai dengan kemampuan Anda
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personalized Learning Path</h4>
                    <p className="text-muted-foreground">
                      Materi dan kecepatan belajar disesuaikan dengan kebutuhan individual
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Progress Tracking</h4>
                    <p className="text-muted-foreground">
                      Monitoring berkala untuk memastikan pencapaian target pembelajaran
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Continuous Support</h4>
                    <p className="text-muted-foreground">
                      Dukungan tutor yang tersedia di luar jam kelas untuk konsultasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star size={16} />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Apa Kata Siswa Kami?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Ratusan siswa telah merasakan peningkatan kemampuan Bahasa Inggris mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Setelah 3 bulan di Arrohman Center, saya jadi lebih percaya diri speaking Bahasa Inggris. Tutor-nya
                  sabar dan metodenya seru!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Rina Sari</div>
                    <div className="text-sm text-muted-foreground">Mahasiswa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Program Business English sangat membantu karir saya. Sekarang saya bisa presentasi dan meeting dengan
                  klien internasional dengan lancar."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    BP
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Budi Prasetyo</div>
                    <div className="text-sm text-muted-foreground">Marketing Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Skor TOEFL saya naik drastis dari 450 ke 550 dalam 2 bulan! Materinya lengkap dan strateginya proven
                  works."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    AD
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ayu Devi</div>
                    <div className="text-sm text-muted-foreground">Fresh Graduate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award size={16} />
                Daftar Sekarang
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Mulai Perjalanan Bahasa Inggris Anda
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Isi form di bawah dan tim kami akan segera menghubungi Anda via WhatsApp
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Nama Lengkap <span className="text-cta">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama lengkap Anda"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Nomor WhatsApp <span className="text-cta">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08xx xxxx xxxx"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="program" className="text-foreground">
                        Program yang Diminati <span className="text-cta">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.program}
                        onValueChange={(value) => setFormData({ ...formData, program: value })}
                      >
                        <SelectTrigger id="program" className="h-12">
                          <SelectValue placeholder="Pilih program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="speaking">Speaking Mastery</SelectItem>
                          <SelectItem value="workers">English for Workers</SelectItem>
                          <SelectItem value="business">Business English</SelectItem>
                          <SelectItem value="interview">Job Interview Prep</SelectItem>
                          <SelectItem value="toefl">TOEFL/IELTS Preparation</SelectItem>
                          <SelectItem value="kids">Kids & Teens Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="schedule" className="text-foreground">
                        Jadwal Belajar
                      </Label>
                      <Select
                        value={formData.schedule}
                        onValueChange={(value) => setFormData({ ...formData, schedule: value })}
                      >
                        <SelectTrigger id="schedule" className="h-12">
                          <SelectValue placeholder="Pilih jadwal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday-morning">Weekday - Pagi (08:00 - 12:00)</SelectItem>
                          <SelectItem value="weekday-afternoon">Weekday - Siang (13:00 - 17:00)</SelectItem>
                          <SelectItem value="weekday-evening">Weekday - Malam (18:00 - 21:00)</SelectItem>
                          <SelectItem value="weekend-morning">Weekend - Pagi (08:00 - 12:00)</SelectItem>
                          <SelectItem value="weekend-afternoon">Weekend - Siang (13:00 - 17:00)</SelectItem>
                          <SelectItem value="flexible">Fleksibel (Konsultasi)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm text-muted-foreground">
                        Free placement test untuk menentukan level Anda
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm text-muted-foreground">Free trial class sebelum memutuskan daftar</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm text-muted-foreground">Konsultasi gratis dengan academic advisor</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cta hover:bg-cta/90 text-white h-14 text-lg shadow-xl hover:shadow-2xl transition-all group"
                  >
                    <Phone size={20} className="mr-2" />
                    Daftar via WhatsApp
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Dengan mendaftar, Anda setuju dengan syarat dan ketentuan Arrohman Center
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BookOpen size={16} />
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-0 bg-card rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">Berapa lama durasi satu program?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Durasi program bervariasi tergantung jenis program yang dipilih. Umumnya 3-6 bulan dengan pertemuan
                  2-3 kali seminggu. Kami juga menyediakan program intensif dengan durasi lebih singkat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0 bg-card rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">Apakah ada kelas trial?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Ya, kami menyediakan free trial class untuk calon siswa. Anda bisa merasakan langsung metode
                  pembelajaran dan suasana kelas sebelum memutuskan untuk mendaftar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0 bg-card rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">Apakah ada kelas online?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Ya, kami menyediakan kelas online dan offline. Anda bisa memilih metode yang paling sesuai dengan
                  kebutuhan dan lokasi Anda. Kualitas pembelajaran tetap sama untuk kedua metode.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0 bg-card rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">Berapa ukuran kelas?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Kami menjaga ukuran kelas tetap kecil, maksimal 8-10 siswa per kelas untuk memastikan setiap siswa
                  mendapat perhatian yang cukup dari tutor dan kesempatan praktik yang optimal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-0 bg-card rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">Apakah mendapat sertifikat setelah lulus?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Ya, siswa yang menyelesaikan program akan mendapat sertifikat resmi dari Arrohman Center yang bisa
                  digunakan untuk keperluan akademik atau profesional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-0 bg-card rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">Bagaimana sistem pembayarannya?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Kami menyediakan berbagai skema pembayaran yang fleksibel: pembayaran penuh, cicilan bulanan, atau per
                  term. Hubungi kami untuk informasi detail mengenai biaya dan cara pembayaran.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Arrohman Center</span>
                  <span className="text-xs text-background/70">English Language Course</span>
                </div>
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Lembaga kursus Bahasa Inggris terpercaya dengan metode pembelajaran yang efektif dan menyenangkan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("program")}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("method")}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    Metode Belajar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonial")}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    Testimoni
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-bold text-lg mb-4">Programs</h3>
              <ul className="space-y-3">
                <li className="text-background/70 text-sm">Speaking Mastery</li>
                <li className="text-background/70 text-sm">Business English</li>
                <li className="text-background/70 text-sm">TOEFL/IELTS Prep</li>
                <li className="text-background/70 text-sm">Kids & Teens</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-background/70 text-sm">Jl. Pendidikan No. 123, Jakarta Selatan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-background/70 text-sm">+62 812-1234-5346</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-background/70 text-sm">info@arrohman-center.com</span>
                </li>
              </ul>

              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://wa.me/62081212345346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Music2 size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-background/60 text-sm">© 2025 Arrohman Center. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
