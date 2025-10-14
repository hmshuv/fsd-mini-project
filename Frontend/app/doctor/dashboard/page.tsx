"use client"

import { Users, FileText, Clock, Activity, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DoctorDashboardPage() {
  const stats = [
    {
      title: "Total Patients",
      value: "248",
      change: "+12%",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Pending Reviews",
      value: "18",
      change: "+3",
      icon: FileText,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Completed Today",
      value: "32",
      change: "+8%",
      icon: Activity,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Avg. Response Time",
      value: "2.4h",
      change: "-15%",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  const pendingReviews = [
    {
      id: 1,
      patient: "Sarah Johnson",
      age: 45,
      diagnosis: "Pneumonia",
      confidence: 94.5,
      priority: "high",
      time: "5 mins ago",
    },
    {
      id: 2,
      patient: "Michael Chen",
      age: 62,
      diagnosis: "Type 2 Diabetes",
      confidence: 89.2,
      priority: "medium",
      time: "1 hour ago",
    },
    {
      id: 3,
      patient: "Emily Davis",
      age: 34,
      diagnosis: "Migraine",
      confidence: 91.8,
      priority: "low",
      time: "2 hours ago",
    },
    {
      id: 4,
      patient: "James Wilson",
      age: 58,
      diagnosis: "Hypertension",
      confidence: 87.3,
      priority: "medium",
      time: "3 hours ago",
    },
  ]

  const recentActivity = [
    { action: "Reviewed AI diagnosis", patient: "John Doe", time: "10 mins ago" },
    { action: "Provided second opinion", patient: "Jane Smith", time: "1 hour ago" },
    { action: "Updated treatment plan", patient: "Bob Johnson", time: "2 hours ago" },
    { action: "Scheduled follow-up", patient: "Alice Brown", time: "3 hours ago" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Doctor Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back, Dr. Smith</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                      {stat.change}
                    </span>{" "}
                    from last week
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Pending AI Reviews</CardTitle>
                <CardDescription>Diagnoses awaiting your expert review</CardDescription>
              </div>
              <Badge variant="secondary">{pendingReviews.length} pending</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingReviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-medium">{review.patient}</p>
                      <Badge
                        variant={
                          review.priority === "high"
                            ? "destructive"
                            : review.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {review.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.diagnosis} • Age {review.age} • {review.confidence}% confidence
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{review.time}</p>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="/doctor/reviews">Review</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10 mt-0.5">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.patient} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-500/20 bg-amber-500/5">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-medium text-sm">Urgent Reviews Required</p>
                  <p className="text-sm text-muted-foreground">
                    You have 3 high-priority AI diagnoses that require immediate review. Please review them as soon as
                    possible.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent" asChild>
                    <Link href="/doctor/reviews">View Urgent Cases</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
