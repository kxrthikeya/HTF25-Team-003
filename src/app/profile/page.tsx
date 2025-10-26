"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/lib/auth-client";
import { 
  Plus, 
  X, 
  Star, 
  Users, 
  Brain,
  Edit,
  MessageSquare,
  Calendar,
  TrendingUp,
  Award,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [teachSkills, setTeachSkills] = useState([
    "Neural Networks",
    "Deep Learning",
    "PyTorch",
    "Computer Vision"
  ]);
  const [learnSkills, setLearnSkills] = useState([
    "Natural Language Processing",
    "Reinforcement Learning",
    "MLOps"
  ]);
  const [newTeachSkill, setNewTeachSkill] = useState("");
  const [newLearnSkill, setNewLearnSkill] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login?redirect=" + encodeURIComponent("/profile"));
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

  const addTeachSkill = () => {
    if (newTeachSkill.trim()) {
      setTeachSkills([...teachSkills, newTeachSkill.trim()]);
      setNewTeachSkill("");
    }
  };

  const addLearnSkill = () => {
    if (newLearnSkill.trim()) {
      setLearnSkills([...learnSkills, newLearnSkill.trim()]);
      setNewLearnSkill("");
    }
  };

  const removeTeachSkill = (skill: string) => {
    setTeachSkills(teachSkills.filter(s => s !== skill));
  };

  const removeLearnSkill = (skill: string) => {
    setLearnSkills(learnSkills.filter(s => s !== skill));
  };

  // Mock matched peers data
  const matchedPeers = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      matchScore: 95,
      canTeach: ["Natural Language Processing", "Transformers", "BERT"],
      wantsToLearn: ["Computer Vision", "PyTorch"],
      rating: 4.9,
      sessionsCompleted: 48,
      bio: "ML Engineer at Tech Corp with 5 years experience in NLP"
    },
    {
      id: 2,
      name: "Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      matchScore: 88,
      canTeach: ["Reinforcement Learning", "Q-Learning", "Deep Q Networks"],
      wantsToLearn: ["Neural Networks", "Deep Learning"],
      rating: 4.8,
      sessionsCompleted: 35,
      bio: "Research scientist specializing in RL and game AI"
    },
    {
      id: 3,
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      matchScore: 82,
      canTeach: ["MLOps", "Model Deployment", "Docker", "Kubernetes"],
      wantsToLearn: ["Deep Learning", "PyTorch"],
      rating: 4.9,
      sessionsCompleted: 52,
      bio: "DevOps engineer transitioning to MLOps and model deployment"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your skills and connect with learning partners</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="space-y-6">
              {/* User Card */}
              <Card className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={session.user.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"} />
                    <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold">{session.user.name}</h2>
                    <p className="text-sm text-muted-foreground">ML Enthusiast</p>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">4.7</span>
                    <span className="text-muted-foreground text-sm">(23 reviews)</span>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sessions Completed</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Skills Teaching</span>
                    <span className="font-semibold">{teachSkills.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Learning Goals</span>
                    <span className="font-semibold">{learnSkills.length}</span>
                  </div>
                </div>
              </Card>

              {/* Stats Card */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Learning Stats
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Profile Completion</span>
                      <span className="font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Match Score</span>
                      <span className="font-semibold">High</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 rounded-full h-2" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Middle Column - Skills */}
            <div className="space-y-6">
              {/* Can Teach */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    I Can Teach
                  </h3>
                  <Badge variant="secondary">{teachSkills.length} skills</Badge>
                </div>

                {isEditing && (
                  <div className="mb-4 flex gap-2">
                    <Input
                      placeholder="Add a skill..."
                      value={newTeachSkill}
                      onChange={(e) => setNewTeachSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTeachSkill()}
                    />
                    <Button size="sm" onClick={addTeachSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {teachSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="default" 
                      className="text-sm py-1.5 px-3 flex items-center gap-2"
                    >
                      {skill}
                      {isEditing && (
                        <button onClick={() => removeTeachSkill(skill)}>
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>

                {teachSkills.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Add skills you can teach to find learning partners
                  </p>
                )}
              </Card>

              {/* Want to Learn */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    I Want to Learn
                  </h3>
                  <Badge variant="secondary">{learnSkills.length} skills</Badge>
                </div>

                {isEditing && (
                  <div className="mb-4 flex gap-2">
                    <Input
                      placeholder="Add a learning goal..."
                      value={newLearnSkill}
                      onChange={(e) => setNewLearnSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLearnSkill()}
                    />
                    <Button size="sm" onClick={addLearnSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {learnSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-sm py-1.5 px-3 flex items-center gap-2"
                    >
                      {skill}
                      {isEditing && (
                        <button onClick={() => removeLearnSkill(skill)}>
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>

                {learnSkills.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Add skills you want to learn to get matched with teachers
                  </p>
                )}
              </Card>

              {/* Bio Section */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">About Me</h3>
                {isEditing ? (
                  <Textarea 
                    placeholder="Tell others about your ML journey..."
                    rows={4}
                    defaultValue="Passionate about machine learning and AI. Love teaching and sharing knowledge with others. Currently working on computer vision projects and expanding into NLP."
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Passionate about machine learning and AI. Love teaching and sharing knowledge with others. Currently working on computer vision projects and expanding into NLP.
                  </p>
                )}
              </Card>
            </div>

            {/* Right Column - Matched Peers */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Your Matches
                  </h3>
                  <Badge variant="default">{matchedPeers.length} found</Badge>
                </div>

                <div className="space-y-4">
                  {matchedPeers.map((peer) => (
                    <Card key={peer.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={peer.avatar} />
                          <AvatarFallback>{peer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-sm">{peer.name}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {peer.matchScore}% match
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                              <span>{peer.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{peer.sessionsCompleted} sessions</span>
                            </div>
                          </div>

                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                            {peer.bio}
                          </p>

                          <div className="space-y-2 mb-3">
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">Can teach:</p>
                              <div className="flex flex-wrap gap-1">
                                {peer.canTeach.slice(0, 2).map((skill) => (
                                  <Badge key={skill} variant="default" className="text-xs py-0.5 px-2">
                                    {skill}
                                  </Badge>
                                ))}
                                {peer.canTeach.length > 2 && (
                                  <Badge variant="secondary" className="text-xs py-0.5 px-2">
                                    +{peer.canTeach.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-1">Wants to learn:</p>
                              <div className="flex flex-wrap gap-1">
                                {peer.wantsToLearn.slice(0, 2).map((skill) => (
                                  <Badge key={skill} variant="outline" className="text-xs py-0.5 px-2">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 h-8 text-xs" asChild>
                              <Link href="/schedule">
                                <Calendar className="h-3 w-3 mr-1" />
                                Schedule
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 text-xs">
                              <MessageSquare className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Matches
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