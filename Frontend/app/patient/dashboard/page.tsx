"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FileText, TrendingUp, Activity, Clock, Upload, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { api } from "@/lib/api"

interface Patient {
  id: string
  firstName: string
  lastName: string
  encounters: any[]
}

interface Stats {
  recentReports: number
  healthScore: number
  aiDiagnoses: number
  lastCheckup: string
}

export default function PatientDashboardPage() {
  const [patient, setPatient] = useState<Patient | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // For demo purposes, using a hardcoded patient ID
        // In real app, this would come from auth context
        const patientId = "demo-patient-id"
        const patientData = await api.patients.getById(patientId)
        setPatient(patientData)

        // Calculate stats from patient data
        const encounters = patientData.encounters || []
        const recentReports = encounters.length
        const aiDiagnoses = encounters.filter((e: any) =>
          e.predictions && e.predictions.length > 0
        ).length

        // Calculate health score based on recent diagnoses
        const healthScore = encounters.length > 0 ?
          Math.min(100, 60 + (encounters.length * 5)) : 75

        // Get last checkup date
        const lastCheckup = encounters.length > 0 ?
          new Date(encounters[0].createdAt).toLocaleDateString() : "No records"

        setStats({
          recentReports,
          healthScore,
          aiDiagnoses,
          lastCheckup
        })
      } catch (error) {
        console.error("Failed to load dashboard data:", error)
        // Fallback to demo data
        setStats({
          recentReports: 12,
          healthScore: 85,
          aiDiagnoses: 8,
          lastCheckup: "3 days ago"
        })
      } finally {
        setLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2">Loading...</h1>
          <p className="text-muted-foreground">Fetching your health data</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {patient ? `${patient.firstName} ${patient.lastName}` : "Patient"}!
        </h1>
        <p className="text-muted-foreground">Here's an overview of your health status</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recent Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.recentReports || 0}</div>
            <p className="text-xs text-muted-foreground">Total medical reports</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.healthScore || 0}%</div>
            <Progress value={stats?.healthScore || 0} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI Diagnoses</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.aiDiagnoses || 0}</div>
            <p className="text-xs text-muted-foreground">AI-powered analyses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Last Check-up</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.lastCheckup || "N/A"}</div>
            <p className="text-xs text-muted-foreground">Most recent visit</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="medical-gradient text-white hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                <Upload className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-white">Upload New Report</CardTitle>
                <CardDescription className="text-white/80">Upload medical reports or test results</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link href="/patient/upload">
              <Button variant="secondary" className="w-full">
                Upload Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg medical-gradient flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle>Run AI Diagnosis</CardTitle>
                <CardDescription>Get instant AI-powered health insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Link href="/patient/diagnosis">
              <Button className="w-full medical-gradient">
                Start Diagnosis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Your latest medical reports and diagnoses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patient?.encounters?.slice(0, 3).map((encounter: any) => (
              <div
                key={encounter.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg medical-gradient flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {encounter.diagnoses[0]?.label || "Medical Report"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(encounter.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {encounter.diagnoses[0]?.confirmed ? "Completed" : "Pending"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Confidence: {encounter.predictions[0]?.probabilities ?
                        Math.max(...Object.values(encounter.predictions[0].probabilities as Record<string, number>)) * 100 : 0}%
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            )) || [
              {
                title: "Chest X-Ray Analysis",
                date: "2024-01-15",
                status: "Completed",
                confidence: "95%",
              },
              {
                title: "Blood Test Results",
                date: "2024-01-10",
                status: "Reviewed",
                confidence: "92%",
              },
              {
                title: "MRI Scan Report",
                date: "2024-01-05",
                status: "Completed",
                confidence: "98%",
              },
            ].map((report, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg medical-gradient flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{report.title}</p>
                    <p className="text-sm text-muted-foreground">{report.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{report.status}</p>
                    <p className="text-xs text-muted-foreground">Confidence: {report.confidence}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle>AI Health Suggestions</CardTitle>
          <CardDescription>Personalized recommendations based on your health data</CardDescription>
        </CardHeader>
        <CardContent>
          <AISuggestions />
        </CardContent>
      </Card>
    </div>
  )
}

function AISuggestions() {
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSuggestions = async () => {
      try {
        const data = await api.suggestions.getAll()
        setSuggestions(data)
      } catch (error) {
        console.error("Failed to load suggestions:", error)
        // Fallback suggestions
        setSuggestions([
          {
            id: "1",
            type: "exercise",
            title: "Regular Exercise Recommended",
            description: "Based on your recent reports, 30 minutes of daily exercise could improve your health score",
            priority: "medium"
          },
          {
            id: "2",
            type: "vitamin",
            title: "Vitamin D Levels Improving",
            description: "Your vitamin D levels have increased by 15% since last month",
            priority: "low"
          },
          {
            id: "3",
            type: "checkup",
            title: "Schedule Follow-up",
            description: "It's been 3 months since your last comprehensive check-up",
            priority: "high"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    loadSuggestions()
  }, [])

  if (loading) {
    return <div className="text-center py-4">Loading suggestions...</div>
  }

  return (
    <div className="space-y-3">
      {suggestions.map((suggestion) => {
        const bgColor = suggestion.priority === 'high' ? 'bg-red-50 dark:bg-red-950/20' :
                       suggestion.priority === 'medium' ? 'bg-blue-50 dark:bg-blue-950/20' :
                       'bg-green-50 dark:bg-green-950/20'
        const iconColor = suggestion.priority === 'high' ? 'text-red-600 dark:text-red-400' :
                         suggestion.priority === 'medium' ? 'text-blue-600 dark:text-blue-400' :
                         'text-green-600 dark:text-green-400'
        const icon = suggestion.type === 'exercise' ? Activity :
                    suggestion.type === 'vitamin' ? TrendingUp : Clock

        return (
          <div key={suggestion.id} className={`flex items-start gap-3 p-3 ${bgColor} rounded-lg`}>
            {React.createElement(icon, { className: `h-5 w-5 ${iconColor} mt-0.5` })}
            <div>
              <p className="font-medium text-sm">{suggestion.title}</p>
              <p className="text-xs text-muted-foreground">{suggestion.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
