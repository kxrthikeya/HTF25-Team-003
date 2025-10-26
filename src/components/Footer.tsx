"use client";

import Link from "next/link";
import { BookOpen, Users, MessageSquare, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <BookOpen className="h-5 w-5" />
              </div>
              <span>ML Learn</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting machine learning enthusiasts for peer-to-peer knowledge sharing and collaborative learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Profiles
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  Schedule Session
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  ML Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Community Stats */}
          <div>
            <h3 className="font-semibold mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">12,847 Active Learners</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">45,329 Sessions Completed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ML Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
