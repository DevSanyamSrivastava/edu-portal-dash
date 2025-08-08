import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  BarChart3, 
  Users, 
  Shield, 
  Clock, 
  Cloud,
  BookOpen,
  Award
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized storage and organization of all student and teacher documents with easy search and access."
    },
    {
      icon: BarChart3,
      title: "Result Tracking",
      description: "Comprehensive grade tracking and analytics to monitor student progress and performance over time."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Separate dashboards for students, teachers, and administrators with role-based permissions."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption and GDPR compliance to keep sensitive educational data protected."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant notifications and updates when grades are posted or documents are shared."
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Reliable cloud infrastructure with automatic backups and 99.9% uptime guarantee."
    },
    {
      icon: BookOpen,
      title: "Course Materials",
      description: "Share and organize course materials, assignments, and resources in one central location."
    },
    {
      icon: Award,
      title: "Achievement Tracking",
      description: "Track certificates, awards, and achievements for both students and teaching staff."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Educational Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools necessary to streamline 
            administrative tasks and enhance the educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient border-border hover:shadow-lg transition-smooth group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;