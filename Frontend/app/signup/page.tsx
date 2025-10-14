"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Activity, Mail, Lock, User, Phone, Stethoscope, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSignup = async (e: React.FormEvent, userType: "patient" | "doctor") => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Account created successfully!")
      router.push("/login")
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
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>Sign up to get started with MediAI</CardDescription>
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
                <form onSubmit={(e) => handleSignup(e, "patient")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="patient-name" type="text" placeholder="John Doe" className="pl-10" required />
                    </div>
                  </div>
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
                    <Label htmlFor="patient-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="patient-phone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patient-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="patient-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full medical-gradient" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Patient Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="doctor">
                <form onSubmit={(e) => handleSignup(e, "doctor")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="doctor-name" type="text" placeholder="Dr. Jane Smith" className="pl-10" required />
                    </div>
                  </div>
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
                    <Label htmlFor="doctor-license">Medical License Number</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="doctor-license" type="text" placeholder="MD123456" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="doctor-phone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="doctor-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full medical-gradient" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Doctor Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By signing up, you agree to our{" "}
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
