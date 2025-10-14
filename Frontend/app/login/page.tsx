"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Activity, Mail, Lock, User, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = async (e: React.FormEvent, userType: "patient" | "doctor") => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      toast.success(`Welcome back! Logging in as ${userType}...`)

      // Redirect based on user type
      if (userType === "patient") {
        router.push("/patient/dashboard")
      } else {
        router.push("/doctor/dashboard")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 medical-gradient-subtle" />

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-lg medical-gradient flex items-center justify-center">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold">MediAI</span>
        </Link>

        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="patient" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Patient
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Doctor
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient">
                <form onSubmit={(e) => handleLogin(e, "patient")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="patient-email"
                        type="email"
                        placeholder="patient@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patient-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="patient-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Link href="/forgot-password" className="text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full medical-gradient" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In as Patient"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="doctor">
                <form onSubmit={(e) => handleLogin(e, "doctor")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="doctor-email"
                        type="email"
                        placeholder="doctor@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="doctor-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Link href="/forgot-password" className="text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full medical-gradient" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In as Doctor"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By signing in, you agree to our{" "}
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
