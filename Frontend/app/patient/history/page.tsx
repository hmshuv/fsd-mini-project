import { FileText, Download, Eye, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function PatientHistoryPage() {
  const reports = [
    {
      id: 1,
      title: "Chest X-Ray Analysis",
      date: "2024-01-15",
      type: "X-Ray",
      status: "Completed",
      confidence: "95%",
      diagnosis: "Normal",
    },
    {
      id: 2,
      title: "Blood Test Results",
      date: "2024-01-10",
      type: "Lab Test",
      status: "Reviewed",
      confidence: "92%",
      diagnosis: "Slight Anemia",
    },
    {
      id: 3,
      title: "MRI Scan Report",
      date: "2024-01-05",
      type: "MRI",
      status: "Completed",
      confidence: "98%",
      diagnosis: "Normal",
    },
    {
      id: 4,
      title: "ECG Report",
      date: "2023-12-28",
      type: "ECG",
      status: "Completed",
      confidence: "96%",
      diagnosis: "Normal Sinus Rhythm",
    },
    {
      id: 5,
      title: "Ultrasound Scan",
      date: "2023-12-20",
      type: "Ultrasound",
      status: "Completed",
      confidence: "94%",
      diagnosis: "Normal",
    },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Medical History</h1>
        <p className="text-muted-foreground">View all your past reports and diagnoses</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Search reports..." className="w-full" />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg medical-gradient flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{report.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {report.date}
                      </span>
                      <span>•</span>
                      <Badge variant="outline">{report.type}</Badge>
                      <span>•</span>
                      <span>Confidence: {report.confidence}</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Diagnosis:</span> {report.diagnosis}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
