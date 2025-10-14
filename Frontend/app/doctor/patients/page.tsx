"use client"

import { useState } from "react"
import { Search, Filter, MoreVertical, Eye, MessageSquare, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 45,
      gender: "Female",
      lastVisit: "2025-01-05",
      condition: "Pneumonia",
      status: "active",
      reports: 8,
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 62,
      gender: "Male",
      lastVisit: "2025-01-04",
      condition: "Type 2 Diabetes",
      status: "active",
      reports: 15,
    },
    {
      id: 3,
      name: "Emily Davis",
      age: 34,
      gender: "Female",
      lastVisit: "2025-01-03",
      condition: "Migraine",
      status: "recovered",
      reports: 5,
    },
    {
      id: 4,
      name: "James Wilson",
      age: 58,
      gender: "Male",
      lastVisit: "2025-01-02",
      condition: "Hypertension",
      status: "active",
      reports: 12,
    },
    {
      id: 5,
      name: "Lisa Anderson",
      age: 41,
      gender: "Female",
      lastVisit: "2025-01-01",
      condition: "Asthma",
      status: "monitoring",
      reports: 9,
    },
    {
      id: 6,
      name: "Robert Taylor",
      age: 55,
      gender: "Male",
      lastVisit: "2024-12-30",
      condition: "Arthritis",
      status: "active",
      reports: 7,
    },
  ]

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || patient.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Patients</h1>
        <p className="text-muted-foreground mt-2">Manage and view all your patients</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div>
              <CardTitle>Patient List</CardTitle>
              <CardDescription>Total {patients.length} patients</CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="monitoring">Monitoring</SelectItem>
                  <SelectItem value="recovered">Recovered</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPatients.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} />
                  <AvatarFallback>
                    {patient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">{patient.name}</p>
                    <Badge
                      variant={
                        patient.status === "active"
                          ? "default"
                          : patient.status === "monitoring"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {patient.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {patient.age} years • {patient.gender} • {patient.condition}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last visit: {new Date(patient.lastVisit).toLocaleDateString()} • {patient.reports} reports
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send Message
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        View Reports
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
