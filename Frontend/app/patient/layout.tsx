import type React from "react"
import { PatientSidebar } from "@/components/patient-sidebar"
import { PatientHeader } from "@/components/patient-header"

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <PatientSidebar />
      <div className="md:pl-64">
        <PatientHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
