"use client"

import { useState, useEffect } from "react"
import { Brain, Download, AlertTriangle, CheckCircle2, TrendingUp, FileText, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function DiagnosisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsAnalyzing(false)
            setTimeout(() => setShowResults(true), 500)
            return 100
          }
          return prev + 2
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [isAnalyzing])

  const handleDownloadReport = () => {
    // Simulate PDF download
    console.log("[v0] Downloading diagnosis report as PDF")
  }

  if (isAnalyzing) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <Card className="w-full max-w-2xl">
          <CardContent className="pt-12 pb-12">
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping">
                    <div className="h-20 w-20 rounded-full bg-primary/20" />
                  </div>
                  <div className="relative p-5 rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Brain className="h-10 w-10 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">AI Analysis in Progress</h2>
                  <p className="text-muted-foreground">Our AI is analyzing your medical reports...</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className={`h-2 w-2 rounded-full ${progress > 20 ? "bg-primary" : "bg-muted"}`} />
                  <span className={progress > 20 ? "text-foreground" : "text-muted-foreground"}>
                    Processing medical images
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className={`h-2 w-2 rounded-full ${progress > 50 ? "bg-primary" : "bg-muted"}`} />
                  <span className={progress > 50 ? "text-foreground" : "text-muted-foreground"}>
                    Analyzing patterns and anomalies
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className={`h-2 w-2 rounded-full ${progress > 80 ? "bg-primary" : "bg-muted"}`} />
                  <span className={progress > 80 ? "text-foreground" : "text-muted-foreground"}>
                    Generating diagnosis report
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${showResults ? "animate-in fade-in duration-500" : "opacity-0"}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Diagnosis Results</h1>
          <p className="text-muted-foreground mt-2">Analysis completed on {new Date().toLocaleDateString()}</p>
        </div>
        <Button onClick={handleDownloadReport}>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">AI Confidence</p>
                <p className="text-2xl font-bold">94.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-secondary/50 bg-gradient-to-br from-secondary/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Risk Level</p>
                <p className="text-2xl font-bold">Moderate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-500/50 bg-gradient-to-br from-green-500/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-2xl font-bold">Reviewed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">Primary Diagnosis</CardTitle>
              <CardDescription className="mt-2">Based on AI analysis of uploaded medical reports</CardDescription>
            </div>
            <Badge variant="outline" className="text-base px-4 py-1">
              ICD-10: J18.9
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Pneumonia (Community-Acquired)</h3>
            <p className="text-muted-foreground">
              The AI has detected patterns consistent with community-acquired pneumonia in the chest X-ray. There are
              signs of consolidation in the right lower lobe with associated infiltrates.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Key Findings
            </h4>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                <div>
                  <p className="font-medium">Right Lower Lobe Consolidation</p>
                  <p className="text-sm text-muted-foreground">
                    Dense opacity detected in the right lower lobe suggesting fluid or inflammatory infiltrate
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                <div>
                  <p className="font-medium">Elevated White Blood Cell Count</p>
                  <p className="text-sm text-muted-foreground">
                    Lab results show WBC count of 14,500/μL indicating active infection
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                <div>
                  <p className="font-medium">Increased C-Reactive Protein</p>
                  <p className="text-sm text-muted-foreground">
                    CRP levels at 85 mg/L suggest significant inflammatory response
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              AI Recommendations
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Immediate Medical Consultation</p>
                    <p className="text-sm text-muted-foreground">
                      Schedule an appointment with a pulmonologist or primary care physician within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Antibiotic Therapy</p>
                    <p className="text-sm text-muted-foreground">
                      Likely requires broad-spectrum antibiotics. Physician will determine appropriate medication
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Follow-up Imaging</p>
                    <p className="text-sm text-muted-foreground">
                      Repeat chest X-ray in 4-6 weeks to confirm resolution of pneumonia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold">Doctor Review Required</h4>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-medium text-sm">Important Notice</p>
                  <p className="text-sm text-muted-foreground">
                    This AI diagnosis is for informational purposes only and should not replace professional medical
                    advice. Please consult with a qualified healthcare provider for proper diagnosis and treatment
                    planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Report Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Analysis Date</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Analyzed By</p>
                <p className="font-medium">AI Diagnostic System v2.5</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Report ID</p>
                <p className="font-medium">DX-2025-{Math.floor(Math.random() * 10000)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">AI Model</p>
                <p className="font-medium">MedicalVision Pro</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button size="lg" className="flex-1">
          Request Doctor Review
        </Button>
        <Button size="lg" variant="outline" className="flex-1 bg-transparent">
          Schedule Appointment
        </Button>
      </div>
    </div>
  )
}
