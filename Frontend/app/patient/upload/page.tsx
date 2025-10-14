"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, ImageIcon, X, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function UploadReportPage() {
  const [files, setFiles] = useState<File[]>([])
  const [symptoms, setSymptoms] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    addFiles(droppedFiles)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      addFiles(selectedFiles)
    }
  }

  const addFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"]
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported format`,
          variant: "destructive",
        })
        return false
      }

      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds 10MB limit`,
          variant: "destructive",
        })
        return false
      }

      return true
    })

    setFiles((prev) => [...prev, ...validFiles])
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one medical report",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Upload successful",
        description: "Your reports have been uploaded successfully",
      })

      // Navigate to diagnosis page
      router.push("/patient/diagnosis")
    }, 2000)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Upload Medical Reports</h1>
        <p className="text-muted-foreground mt-2">
          Upload your medical reports, X-rays, or lab results for AI analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Files</CardTitle>
            <CardDescription>Supported formats: JPG, PNG, PDF (Max 10MB per file)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium">Drag and drop your files here</p>
                  <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/jpg,application/pdf"
                  onChange={handleFileInput}
                  className="hidden"
                  id="file-upload"
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                  Browse Files
                </Button>
              </div>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <Label>Uploaded Files ({files.length})</Label>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-card">
                      <div className="p-2 rounded bg-primary/10">
                        {file.type === "application/pdf" ? (
                          <FileText className="h-5 w-5 text-primary" />
                        ) : (
                          <ImageIcon className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                      </div>
                      <Button type="button" variant="ghost" size="icon" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>Provide any symptoms or concerns to help with diagnosis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="symptoms">Symptoms & Concerns (Optional)</Label>
              <Textarea
                id="symptoms"
                placeholder="Describe your symptoms, medical history, or any specific concerns..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" size="lg" disabled={isUploading || files.length === 0} className="flex-1">
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2" />
                Uploading...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Upload & Continue to Diagnosis
              </>
            )}
          </Button>
        </div>
      </form>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Privacy & Security</p>
              <p className="text-sm text-muted-foreground">
                Your medical data is encrypted and stored securely. We comply with HIPAA regulations and never share
                your information without consent.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
