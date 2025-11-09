"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Filter, MoreVertical, Eye, MessageSquare, FileText } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  phone?: string | null;
  dateOfBirth?: string | null; // ISO 8601
  address?: string | null;
  bloodType?: string | null;
  height?: number | null;
  weight?: number | null;
  allergies?: string | null;
  createdAt: string; // ISO
  updatedAt: string; // ISO
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:4000/api";

function calcAge(iso?: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const t = new Date();
  let a = t.getFullYear() - d.getFullYear();
  const m = t.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && t.getDate() < d.getDate())) a--;
  return a;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "monitoring" | "recovered">("all");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/patients`, {
          credentials: "include",
          headers: { "Accept": "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Patient[] = await res.json();
        if (mounted) setPatients(data);
      } catch (e: any) {
        if (mounted) setErr(e.message || "Failed to fetch");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Derive the fields your UI expects from the raw patient object
  const rows = useMemo(
    () =>
      patients.map((p) => ({
        id: p.id,
        name: `${p.firstName} ${p.lastName}`,
        age: calcAge(p.dateOfBirth),
        gender: "-", // no gender in schema; placeholder
        lastVisit: p.updatedAt,
        condition: p.allergies ? `Allergies: ${p.allergies}` : "—",
        status: "active" as const, // simple derived status for badge/filter
        reports: 0,
        email: p.email ?? "",
      })),
    [patients]
  );

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return rows.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(q) || (r.email && r.email.toLowerCase().includes(q));
      const matchesFilter = filterStatus === "all" || r.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [rows, searchQuery, filterStatus]);

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
              <CardDescription>
                {loading ? "Loading..." : `Total ${patients.length} patients`}
                {err ? ` • Error: ${err}` : ""}
              </CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v as any)}>
                <SelectTrigger className="w-[160px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Status" />
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
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading patients…</p>
          ) : filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">No patients found.</p>
          ) : (
            <div className="space-y-3">
              {filtered.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} alt="Avatar" />
                    <AvatarFallback>
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
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
                      {patient.age ? `${patient.age} years` : "Age —"} • {patient.gender} • {patient.condition}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last update: {new Date(patient.lastVisit).toLocaleDateString()} • {patient.reports} reports
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
