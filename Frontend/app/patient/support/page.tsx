"use client"

import { MessageSquare, Phone, Mail, FileText, HelpCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Support Center</h1>
        <p className="text-muted-foreground mt-2">Get help and find answers to your questions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Chat with our support team</p>
              </div>
              <Button size="sm" className="mt-2">
                Start Chat
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground">Call us Mon-Fri 9am-6pm</p>
              </div>
              <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                +1 (555) 123-4567
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
              <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Help Articles</CardTitle>
          <CardDescription>Find answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for help..." className="pl-9" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I upload my medical reports?</AccordionTrigger>
              <AccordionContent>
                Navigate to the "Upload Report" section from your dashboard. You can drag and drop files or click to
                browse. We support JPG, PNG, and PDF formats up to 10MB per file. After uploading, you can add
                additional information about your symptoms before submitting for AI analysis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How accurate is the AI diagnosis?</AccordionTrigger>
              <AccordionContent>
                Our AI system has been trained on millions of medical cases and achieves over 90% accuracy in pattern
                recognition. However, it's important to note that all AI diagnoses are reviewed by licensed physicians
                before being finalized. The AI serves as a powerful diagnostic aid, not a replacement for professional
                medical judgment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is my medical data secure and private?</AccordionTrigger>
              <AccordionContent>
                Yes, absolutely. We use bank-level 256-bit encryption for all data transmission and storage. We are
                fully HIPAA compliant and follow strict data protection regulations. Your medical information is never
                shared with third parties without your explicit consent, and you have full control over your data at all
                times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How long does it take to get a diagnosis?</AccordionTrigger>
              <AccordionContent>
                The AI analysis typically takes 2-5 minutes to complete. After the AI generates its diagnosis, a
                licensed physician will review the results, which usually takes 12-24 hours. For urgent cases marked as
                high priority, doctor review can be expedited to within 2-4 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I request a second opinion?</AccordionTrigger>
              <AccordionContent>
                Yes, you can request a second opinion from another specialist at any time. Simply navigate to your
                diagnosis report and click the "Request Second Opinion" button. This will route your case to another
                qualified physician for independent review. There may be an additional fee for this service depending on
                your plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What should I do in case of a medical emergency?</AccordionTrigger>
              <AccordionContent>
                Our platform is designed for non-emergency medical consultations and diagnosis. If you are experiencing
                a medical emergency, please call 911 immediately or visit your nearest emergency room. Do not wait for
                an AI diagnosis in emergency situations. Our emergency hotline (+1 555-911-HELP) can provide guidance on
                whether your situation requires immediate emergency care.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-medium text-sm">Need Immediate Help?</p>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a medical emergency, please call 911 or visit your nearest emergency room. Our
                platform is not a substitute for emergency medical care.
              </p>
              <div className="flex gap-3 mt-3">
                <Button size="sm" variant="outline" className="bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency Hotline
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  View Guidelines
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
