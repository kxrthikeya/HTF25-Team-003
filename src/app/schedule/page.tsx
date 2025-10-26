"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { useSession } from "@/lib/auth-client";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Clock, 
  Video, 
  Calendar as CalendarIcon,
  Users,
  MapPin,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function SchedulePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=" + encodeURIComponent("/schedule"));
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  // Mock upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      title: "Introduction to NLP Transformers",
      peer: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
      },
      date: "2024-01-15",
      time: "2:00 PM - 3:00 PM",
      duration: "60 min",
      type: "Learning",
      topic: "Natural Language Processing",
      videoLink: "https://meet.google.com/abc-defg-hij",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Deep Learning Best Practices",
      peer: {
        name: "Alex Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
      },
      date: "2024-01-16",
      time: "10:00 AM - 11:00 AM",
      duration: "60 min",
      type: "Teaching",
      topic: "Deep Learning",
      videoLink: "https://meet.google.com/xyz-abcd-efg",
      status: "confirmed"
    },
    {
      id: 3,
      title: "MLOps and Model Deployment",
      peer: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
      },
      date: "2024-01-17",
      time: "4:00 PM - 5:30 PM",
      duration: "90 min",
      type: "Learning",
      topic: "MLOps",
      videoLink: "https://zoom.us/j/123456789",
      status: "pending"
    }
  ];

  // Available time slots for selected date
  const availableSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Schedule Sessions</h1>
            <p className="text-muted-foreground">Book learning sessions with your matched peers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Calendar & Booking */}
            <div className="lg:col-span-2 space-y-6">
              {/* Calendar Card */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Select a Date & Time
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Calendar */}
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Available Time Slots
                      </label>
                      <p className="text-sm text-muted-foreground mb-3">
                        {date ? date.toLocaleDateString() : "Select a date"}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant={selectedTime === slot ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(slot)}
                            className="justify-start"
                          >
                            <Clock className="h-3 w-3 mr-2" />
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t space-y-3">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Session Duration
                        </label>
                        <Select defaultValue="60">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                            <SelectItem value="90">90 minutes</SelectItem>
                            <SelectItem value="120">120 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Session Type
                        </label>
                        <Select defaultValue="learning">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="learning">Learning Session</SelectItem>
                            <SelectItem value="teaching">Teaching Session</SelectItem>
                            <SelectItem value="exchange">Knowledge Exchange</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="w-full" size="lg">
                        <Plus className="h-4 w-4 mr-2" />
                        Request Session
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Upcoming Sessions */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Upcoming Sessions
                  </h3>
                  <Badge variant="secondary">{upcomingSessions.length} sessions</Badge>
                </div>

                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <Card key={session.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.peer.avatar} />
                          <AvatarFallback>{session.peer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold mb-1">{session.title}</h4>
                              <p className="text-sm text-muted-foreground">with {session.peer.name}</p>
                            </div>
                            <Badge variant={session.type === "Teaching" ? "default" : "secondary"}>
                              {session.type}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{new Date(session.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{session.topic}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {session.status === "confirmed" ? (
                                <>
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span className="text-green-600 dark:text-green-400">Confirmed</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                                  <span className="text-yellow-600 dark:text-yellow-400">Pending</span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1" asChild>
                              <a href={session.videoLink} target="_blank" rel="noopener noreferrer">
                                <Video className="h-4 w-4 mr-2" />
                                Join Meeting
                                <ExternalLink className="h-3 w-3 ml-2" />
                              </a>
                            </Button>
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="outline">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Quick Actions & Info */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Session Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">This Week</span>
                    <Badge variant="default" className="font-semibold">3 sessions</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <Badge variant="secondary" className="font-semibold">12 sessions</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Hours</span>
                    <Badge variant="outline" className="font-semibold">24 hours</Badge>
                  </div>
                </div>
              </Card>

              {/* Video Platforms */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Video Platforms
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect your preferred video conferencing platform
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Google Meet
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Zoom
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Microsoft Teams
                  </Button>
                </div>
              </Card>

              {/* Scheduling Tips */}
              <Card className="p-6 bg-primary/5">
                <h3 className="font-semibold mb-3">💡 Scheduling Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Book sessions at least 24 hours in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prepare topics and questions beforehand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Test your video setup before the session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Respect your peer's time and be punctual</span>
                  </li>
                </ul>
              </Card>

              {/* Browse Matches */}
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Find More Peers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover more learning partners who match your skills
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/profile">
                    Browse Matches
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}