"use client"

import { Brain, CheckCircle2, XCircle, AlertTriangle, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI Diagnosis Review</h1>
        <p className="text-muted-foreground mt-2">Review and provide expert opinion on AI-generated diagnoses</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-primary/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Patient</p>
              <p className="text-2xl font-bold mt-1">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground mt-1">45 years • Female</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-secondary/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">AI Confidence</p>
              <p className="text-2xl font-bold mt-1">94.5%</p>
              <p className="text-sm text-muted-foreground mt-1">High confidence</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-500/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Priority</p>
              <p className="text-2xl font-bold mt-1">High</p>
              <p className="text-sm text-muted-foreground mt-1">Requires urgent review</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">AI Diagnosis</CardTitle>
              <CardDescription className="mt-2">Generated on {new Date().toLocaleDateString()}</CardDescription>
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
              <Brain className="h-5 w-5 text-primary" />
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
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold">Medical Images</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="aspect-square rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Chest X-Ray (Frontal)</p>
              </div>
              <div className="aspect-square rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Chest X-Ray (Lateral)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Doctor's Review</CardTitle>
          <CardDescription>Provide your expert opinion and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="review">Your Assessment</Label>
            <Textarea id="review" placeholder="Enter your professional assessment of the AI diagnosis..." rows={6} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="recommendations">Treatment Recommendations</Label>
            <Textarea id="recommendations" placeholder="Provide treatment recommendations and next steps..." rows={4} />
          </div>

          <Separator />

          <div className="space-y-3">
            <Label>Review Decision</Label>
            <div className="grid gap-3 md:grid-cols-3">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Approve Diagnosis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10 bg-transparent"
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Approve with Modifications
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent"
              >
                <XCircle className="mr-2 h-5 w-5" />
                Reject Diagnosis
              </Button>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <Download className="mr-2 h-4 w-4" />
            Download Complete Report
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
