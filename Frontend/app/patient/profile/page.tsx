"use client"

import * as React from "react"
import { User, Mail, Phone, Calendar, MapPin, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"

export default function PatientProfilePage() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      toast.success("Profile updated successfully!")
    }, 1000)
  }

  return (
    <div className="max-w-4xl space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your personal information and preferences</p>
      </div>

      {/* Profile Picture */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>Update your profile photo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline">Change Photo</Button>
              <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="firstName" defaultValue="John" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="lastName" defaultValue="Doe" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" defaultValue="john.doe@example.com" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="dob" type="date" defaultValue="1990-01-15" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="address" defaultValue="123 Main St, New York, NY 10001" className="pl-10" />
              </div>
            </div>

            <Button type="submit" className="medical-gradient" disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Information</CardTitle>
          <CardDescription>Your health-related information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input id="bloodType" defaultValue="O+" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" type="number" defaultValue="175" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" defaultValue="70" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Input id="allergies" placeholder="e.g., Penicillin, Peanuts" />
              </div>
            </div>

            <Button className="medical-gradient">
              <Save className="mr-2 h-4 w-4" />
              Update Medical Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
