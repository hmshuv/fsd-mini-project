import type React from "react"
import { DoctorSidebar } from "@/components/doctor-sidebar"
import { DoctorHeader } from "@/components/doctor-header"

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <DoctorSidebar />
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <DoctorHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
