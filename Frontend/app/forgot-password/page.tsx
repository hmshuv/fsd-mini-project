"use client"

import * as React from "react"
import Link from "next/link"
import { Activity, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [emailSent, setEmailSent] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false)
      setEmailSent(true)
      toast.success("Password reset link sent to your email!")
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
            <CardTitle className="text-2xl">Reset Password</CardTitle>
            <CardDescription>
              {emailSent
                ? "Check your email for reset instructions"
                : "Enter your email to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!emailSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="your@email.com" className="pl-10" required />
                  </div>
                </div>
                <Button type="submit" className="w-full medical-gradient" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm text-muted-foreground">
                  We've sent a password reset link to your email. Please check your inbox and follow the instructions.
                </p>
                <Link href="/login">
                  <Button className="w-full medical-gradient">Back to Login</Button>
                </Link>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm text-primary hover:underline inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
