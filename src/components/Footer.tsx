import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-700 text-white py-8 px-4 md:px-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="border border-white p-1">
              <div className="border border-white p-0.5">
                <span className="text-xl font-semibold">Movie Z</span>
              </div>
            </div>
          </div>
          <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Contact Information</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>
                Email:
                <Link
                  href="mailto:support@moviez.com"
                  className="ml-1 hover:underline"
                >
                  support@moviez.com
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>
                Phone:
                <Link
                  href="tel:+97611123-4567"
                  className="ml-1 hover:underline"
                >
                  +976 (11) 123-4567
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Follow us</h3>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">Youtube</span>
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
