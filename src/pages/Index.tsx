import { Button } from "@/components/ui/button";

const Index = () => {
  const courses = [
    {
      title: "B.E. in Computer Science & Engineering",
      description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
      color: "bg-[hsl(var(--hero-green))]",
      image: "https://www.madrascollege.ac.in/v1.0.1/bucket/cse-banner.png"
    },
    {
      title: "B.Tech. in Artificial Intelligence & Data Science",
      description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
      color: "bg-[hsl(var(--hero-coral))]",
      image: "https://www.madrascollege.ac.in/v1.0.1/bucket/aids-banner.png"
    },
    {
      title: "B.E. in Computer Science & Engineering (AI & ML)",
      description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
      color: "bg-[hsl(var(--hero-purple))]",
      image: "https://www.madrascollege.ac.in/v1.0.1/bucket/aiml-banner.png"
    },
    {
      title: "B.Tech. in Information Technology (IT)",
      description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
      color: "bg-[hsl(var(--hero-lime))]",
      image: "https://www.madrascollege.ac.in/v1.0.1/bucket/it-banner.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4A5899]">
              <svg viewBox="0 0 40 40" className="h-8 w-8 text-white" fill="currentColor">
                <path d="M20 5L5 15v10l15 10 15-10V15L20 5zm0 3.5L31 18v7l-11 7.3L9 25v-7l11-9.5z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#4A5899]">MADRAS</h1>
              <p className="text-sm text-[#7B8AAE]">ENGINEERING COLLEGE</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-[#4A5899] px-4 py-2 text-white">
              <div className="text-xs">TNEA</div>
              <div className="text-sm font-bold">Code 1203</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">+91 70020 80020</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Chennai, India
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-5xl font-bold leading-tight">
            Your Tech Journey Begins<br />
            <span className="font-black">@ Madras Engineering College.</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-4xl mx-auto">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science,
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>
          <Button 
            size="lg" 
            className="rounded-full bg-black px-8 py-6 text-base font-semibold hover:bg-black/90"
          >
            Get in Touch
          </Button>
          
          {/* Features */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Paid Internship</span>
              <span className="text-muted-foreground">Opportunities</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Modern Lab</span>
              <span className="text-muted-foreground">Facilities</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Industry-Ready</span>
              <span className="text-muted-foreground">Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl p-6 ${course.color} transition-transform hover:scale-105`}
              >
                <div className="mb-4 flex h-48 items-center justify-center">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold">{course.title}</h3>
                <p className="mb-6 text-sm leading-relaxed opacity-90">
                  {course.description}
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="rounded-full bg-black px-6 py-5 font-semibold text-white hover:bg-black/90"
                >
                  Let's Chat
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
