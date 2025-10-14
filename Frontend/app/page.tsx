import Link from "next/link"
import { ArrowRight, Upload, Brain, FileText, Shield, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 medical-gradient-subtle" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              AI-Powered Medical Diagnosis System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Your health insights powered by Artificial Intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/login">
                <Button size="lg" className="medical-gradient text-lg px-8">
                  Start Diagnosis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get accurate medical insights in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="h-16 w-16 rounded-full medical-gradient flex items-center justify-center mx-auto mb-6">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Report</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload your medical reports, X-rays, or test results securely to our platform
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="h-16 w-16 rounded-full medical-gradient flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our advanced AI analyzes your data using state-of-the-art medical algorithms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="h-16 w-16 rounded-full medical-gradient flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive detailed diagnosis reports with recommendations and confidence scores
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MediAI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets healthcare excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your medical data is encrypted and protected with industry-leading security standards
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Results</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get instant AI-powered diagnosis results in minutes, not days
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Expert Verified</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All AI diagnoses can be reviewed by certified medical professionals
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Advanced AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Powered by cutting-edge machine learning models trained on millions of cases
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Detailed Reports</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive diagnosis reports with explanations and recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">High Accuracy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Proven accuracy rates comparable to experienced medical professionals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of patients and doctors using AI-powered diagnosis
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Diagnosis Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
