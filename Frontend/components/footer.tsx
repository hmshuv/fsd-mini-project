import Link from "next/link"
import { Activity, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="h-8 w-8 rounded-lg medical-gradient flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span>MediAI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered medical diagnosis system providing accurate health insights and recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Patient Login
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Doctor Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@mediai.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MediAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
