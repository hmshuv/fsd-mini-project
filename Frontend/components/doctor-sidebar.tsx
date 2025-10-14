"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, MessageSquare, Settings, LogOut, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/doctor/dashboard", icon: LayoutDashboard },
  { name: "Patients", href: "/doctor/patients", icon: Users },
  { name: "AI Reviews", href: "/doctor/reviews", icon: FileText },
  { name: "Messages", href: "/doctor/messages", icon: MessageSquare },
  { name: "Settings", href: "/doctor/settings", icon: Settings },
]

export function DoctorSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col gap-y-5 bg-card border-r px-6 py-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
          <Stethoscope className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold">MediAI</h2>
          <p className="text-xs text-muted-foreground">Doctor Portal</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}

        <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors mt-auto">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </nav>
    </div>
  )
}
