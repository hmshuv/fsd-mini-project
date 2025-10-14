"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours",
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have questions? We're here to help. Reach out to our support team.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                    <p className="text-primary font-medium mt-2">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    <p className="text-primary font-medium mt-2">support@mediai.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-sm text-muted-foreground">Visit us at our headquarters</p>
                    <p className="text-primary font-medium mt-2">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={6} required />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">How accurate is the AI diagnosis?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our AI system has been trained on millions of medical cases and achieves over 90% accuracy.
                      However, all diagnoses are reviewed by licensed physicians.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Is my medical data secure?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we use bank-level encryption and comply with HIPAA regulations to ensure your data is
                      completely secure and private.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">How long does diagnosis take?</h4>
                    <p className="text-sm text-muted-foreground">
                      AI analysis typically takes 2-5 minutes. Doctor review is usually completed within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Emergency Support</p>
                      <p className="text-sm text-muted-foreground">
                        For urgent medical emergencies, please call 911 or visit your nearest emergency room. Our
                        platform is not a substitute for emergency medical care.
                      </p>
                      <p className="text-sm font-medium text-primary">Emergency Hotline: +1 (555) 911-HELP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Live Chat Support</p>
                      <p className="text-sm text-muted-foreground">
                        Need immediate assistance? Click the chat icon in the bottom right corner to speak with our
                        support team in real-time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
