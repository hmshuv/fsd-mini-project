import { Brain, Target, Award, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 medical-gradient-subtle" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">About MediAI</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Revolutionizing healthcare through artificial intelligence and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At MediAI, we believe that everyone deserves access to accurate, fast, and affordable medical
                  diagnosis. Our mission is to democratize healthcare by leveraging the power of artificial
                  intelligence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine state-of-the-art machine learning algorithms with medical expertise to provide reliable
                  health insights that empower patients and support healthcare professionals.
                </p>
              </div>
              <Card className="medical-gradient p-8 text-white">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                      <p className="text-white/90 leading-relaxed">
                        To become the world's most trusted AI-powered medical diagnosis platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Heart className="h-8 w-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Values</h3>
                      <p className="text-white/90 leading-relaxed">
                        Accuracy, accessibility, privacy, and patient-centered care
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge AI and machine learning technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Deep Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced neural networks trained on millions of medical cases for accurate pattern recognition
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lightning-fast analysis powered by optimized algorithms and cloud infrastructure
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Validated Models</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clinically validated AI models that meet rigorous medical accuracy standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of AI researchers, medical professionals, and engineers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                image: "/female-doctor-professional.jpg",
              },
              {
                name: "Dr. Michael Chen",
                role: "Head of AI Research",
                image: "/male-scientist-professional.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Lead Engineer",
                image: "/female-engineer-professional.jpg",
              },
            ].map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 medical-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
              <div className="text-white/90">Diagnoses Performed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-white/90">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
