"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Brain, 
  Users, 
  Calendar, 
  MessageSquare, 
  Star, 
  TrendingUp,
  BookOpen,
  Video,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="mb-4" variant="secondary">
                <Brain className="h-3 w-3 mr-1" />
                Machine Learning Peer Exchange
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Learn & Teach ML Skills
                <span className="block text-primary mt-2">Through Peer Exchange</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with fellow machine learning enthusiasts. Share knowledge, learn new skills, 
                and grow together in a collaborative community-driven environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="/profile">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link href="/schedule">
                    Browse Sessions
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Video integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Smart matching</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need for Peer Learning
              </h2>
              <p className="text-lg text-muted-foreground">
                Our platform provides all the tools you need to teach, learn, and collaborate on machine learning topics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our algorithm connects you with peers based on complementary skills. 
                  What you want to learn matches what others can teach.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-muted-foreground">
                  Built-in calendar integration makes scheduling sessions effortless. 
                  Set your availability and let peers book sessions.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly connect via integrated video calls. Share screens, 
                  code together, and collaborate in real-time.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chat & Discussion</h3>
                <p className="text-muted-foreground">
                  Stay connected with your learning partners through integrated chat. 
                  Continue discussions beyond sessions.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ratings & Feedback</h3>
                <p className="text-muted-foreground">
                  Rate sessions and provide feedback to help build a trusted community. 
                  See reviews before booking.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-muted-foreground">
                  Monitor your learning journey with detailed analytics. 
                  See skills mastered and areas to improve.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started in minutes and begin your peer learning journey today.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border" style={{ width: '75%', left: '12.5%' }} />
                
                <div className="relative text-center space-y-4">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 border-4 border-background">
                    1
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Create Profile</h3>
                    <p className="text-sm text-muted-foreground">
                      List ML skills you can teach and what you want to learn
                    </p>
                  </div>
                </div>
                
                <div className="relative text-center space-y-4">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 border-4 border-background">
                    2
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Get Matched</h3>
                    <p className="text-sm text-muted-foreground">
                      Our algorithm finds compatible learning partners for you
                    </p>
                  </div>
                </div>
                
                <div className="relative text-center space-y-4">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 border-4 border-background">
                    3
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Schedule Session</h3>
                    <p className="text-sm text-muted-foreground">
                      Book a time that works for both you and your peer
                    </p>
                  </div>
                </div>
                
                <div className="relative text-center space-y-4">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 border-4 border-background">
                    4
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Learn & Grow</h3>
                    <p className="text-sm text-muted-foreground">
                      Attend sessions, share knowledge, and track your progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/profile">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background p-12 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Start Learning?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join thousands of machine learning enthusiasts sharing knowledge and growing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild>
                    <Link href="/profile">
                      Create Your Profile
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/sessions">
                      View All Sessions
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}