import Link from "next/link"
import { FileText, TrendingUp, Activity, Clock, Upload, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PatientDashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
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
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI Diagnoses</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">All completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Last Check-up</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3d</div>
            <p className="text-xs text-muted-foreground">ago</p>
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
            {[
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
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Regular Exercise Recommended</p>
                <p className="text-xs text-muted-foreground">
                  Based on your recent reports, 30 minutes of daily exercise could improve your health score
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Vitamin D Levels Improving</p>
                <p className="text-xs text-muted-foreground">
                  Your vitamin D levels have increased by 15% since last month
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Schedule Follow-up</p>
                <p className="text-xs text-muted-foreground">
                  It's been 3 months since your last comprehensive check-up
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
