"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/lib/auth-client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Star, 
  Calendar, 
  Clock,
  TrendingUp,
  Award,
  BookOpen,
  MessageSquare,
  ThumbsUp,
  CheckCircle2,
  BarChart3,
  Target,
  Flame
} from "lucide-react";

export default function SessionsPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [selectedRating, setSelectedRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=" + encodeURIComponent("/sessions"));
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

  // Mock session history
  const completedSessions = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      peer: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
      },
      date: "2024-01-10",
      time: "2:00 PM - 3:00 PM",
      duration: "60 min",
      type: "Learning",
      topic: "Neural Networks",
      rating: 5,
      feedback: "Excellent session! Sarah explained complex concepts clearly and provided great examples.",
      myRating: true,
      peerRating: 5
    },
    {
      id: 2,
      title: "PyTorch Fundamentals Workshop",
      peer: {
        name: "Alex Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
      },
      date: "2024-01-08",
      time: "10:00 AM - 11:30 AM",
      duration: "90 min",
      type: "Teaching",
      topic: "PyTorch",
      rating: 5,
      feedback: "Great teaching style! Very patient and knowledgeable.",
      myRating: false,
      peerRating: 4
    },
    {
      id: 3,
      title: "Computer Vision Deep Dive",
      peer: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
      },
      date: "2024-01-05",
      time: "4:00 PM - 5:00 PM",
      duration: "60 min",
      type: "Teaching",
      topic: "Computer Vision",
      rating: 4,
      feedback: "Good session with practical examples. Would love more code walkthroughs.",
      myRating: false,
      peerRating: 5
    },
    {
      id: 4,
      title: "NLP with Transformers",
      peer: {
        name: "David Lee",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
      },
      date: "2024-01-03",
      time: "1:00 PM - 2:30 PM",
      duration: "90 min",
      type: "Learning",
      topic: "NLP",
      rating: 5,
      feedback: "Outstanding! David's expertise in NLP is impressive. Learned a lot about attention mechanisms.",
      myRating: true,
      peerRating: 5
    }
  ];

  const pendingFeedback = [
    {
      id: 5,
      title: "MLOps Best Practices",
      peer: {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
      },
      date: "2024-01-12",
      type: "Learning",
      topic: "MLOps"
    }
  ];

  // Learning progress data
  const learningProgress = [
    { skill: "Neural Networks", progress: 75, sessions: 4, level: "Intermediate" },
    { skill: "PyTorch", progress: 60, sessions: 3, level: "Beginner" },
    { skill: "NLP", progress: 45, sessions: 2, level: "Beginner" },
    { skill: "Computer Vision", progress: 85, sessions: 5, level: "Advanced" },
    { skill: "Reinforcement Learning", progress: 30, sessions: 1, level: "Beginner" }
  ];

  // Stats
  const stats = {
    totalSessions: 12,
    hoursLearned: 18,
    hoursTaught: 15,
    averageRating: 4.7,
    streak: 7
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Sessions</h1>
            <p className="text-muted-foreground">Track your learning journey and review past sessions</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalSessions}</p>
                  <p className="text-xs text-muted-foreground">Total Sessions</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 text-blue-500 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.hoursLearned}</p>
                  <p className="text-xs text-muted-foreground">Hours Learned</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 text-green-500 p-2 rounded-lg">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.hoursTaught}</p>
                  <p className="text-xs text-muted-foreground">Hours Taught</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.averageRating}</p>
                  <p className="text-xs text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/10 text-orange-500 p-2 rounded-lg">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.streak}</p>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Session History & Feedback */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="completed" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
                  <TabsTrigger value="pending">
                    Pending Feedback
                    {pendingFeedback.length > 0 && (
                      <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                        {pendingFeedback.length}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="completed" className="space-y-4 mt-6">
                  {completedSessions.map((session) => (
                    <Card key={session.id} className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.peer.avatar} />
                          <AvatarFallback>{session.peer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-lg mb-1">{session.title}</h4>
                              <p className="text-sm text-muted-foreground">with {session.peer.name}</p>
                            </div>
                            <Badge variant={session.type === "Teaching" ? "default" : "secondary"}>
                              {session.type}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(session.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{session.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              <span>{session.topic}</span>
                            </div>
                          </div>

                          {/* Rating Display */}
                          <div className="bg-muted/50 rounded-lg p-4 mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">
                                {session.myRating ? "Your Rating" : "Peer's Rating"}
                              </span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < session.rating
                                        ? "fill-yellow-500 text-yellow-500"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground italic">
                              "{session.feedback}"
                            </p>
                          </div>

                          {session.peerRating && (
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span className="text-muted-foreground">
                                They rated you: 
                                <span className="font-semibold text-foreground ml-1">
                                  {session.peerRating}/5 stars
                                </span>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="pending" className="space-y-4 mt-6">
                  {pendingFeedback.length === 0 ? (
                    <Card className="p-12 text-center">
                      <ThumbsUp className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">All Caught Up!</h3>
                      <p className="text-sm text-muted-foreground">
                        No pending feedback. Keep up the great work!
                      </p>
                    </Card>
                  ) : (
                    pendingFeedback.map((session) => (
                      <Card key={session.id} className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={session.peer.avatar} />
                            <AvatarFallback>{session.peer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-lg mb-1">{session.title}</h4>
                            <p className="text-sm text-muted-foreground mb-4">with {session.peer.name}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(session.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                <span>{session.topic}</span>
                              </div>
                            </div>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button>
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Leave Feedback
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                  <DialogTitle>Rate Your Session</DialogTitle>
                                  <DialogDescription>
                                    Share your experience with {session.peer.name}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-6 py-4">
                                  <div>
                                    <label className="text-sm font-medium mb-3 block">
                                      How would you rate this session?
                                    </label>
                                    <div className="flex gap-2 justify-center">
                                      {[1, 2, 3, 4, 5].map((rating) => (
                                        <button
                                          key={rating}
                                          onClick={() => setSelectedRating(rating)}
                                          className="transition-transform hover:scale-110"
                                        >
                                          <Star
                                            className={`h-10 w-10 ${
                                              rating <= selectedRating
                                                ? "fill-yellow-500 text-yellow-500"
                                                : "text-muted-foreground"
                                            }`}
                                          />
                                        </button>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <label className="text-sm font-medium mb-2 block">
                                      Share your feedback
                                    </label>
                                    <Textarea
                                      placeholder="What did you learn? How was the teaching style?"
                                      rows={4}
                                      value={feedbackText}
                                      onChange={(e) => setFeedbackText(e.target.value)}
                                    />
                                  </div>

                                  <Button className="w-full" size="lg">
                                    Submit Feedback
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </Card>
                    ))
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Learning Progress */}
            <div className="space-y-6">
              {/* Learning Progress Card */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Learning Progress
                </h3>

                <div className="space-y-6">
                  {learningProgress.map((item) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{item.skill}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.sessions} sessions • {item.level}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.progress}%
                        </Badge>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Achievements Card */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">
                      🎓
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">First Session</p>
                      <p className="text-xs text-muted-foreground">Completed your first learning session</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">
                      🔥
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Week Streak</p>
                      <p className="text-xs text-muted-foreground">7 day learning streak</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">
                      ⭐
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Top Rated</p>
                      <p className="text-xs text-muted-foreground">Received 5-star ratings</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg opacity-50">
                    <div className="bg-muted text-muted-foreground p-2 rounded-full">
                      🏆
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Expert Teacher</p>
                      <p className="text-xs text-muted-foreground">Complete 50 teaching sessions</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Monthly Activity */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  This Month
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Sessions Goal</span>
                      <span className="font-semibold">8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Hours Goal</span>
                      <span className="font-semibold">12/15</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}