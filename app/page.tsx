"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { AnimatedCard } from "@/components/animated-card"

export default function Portfolio() {
  const { t, isRTL } = useLanguage()

  const skills = [
    "ASP.NET",
    "Node.js",
    "Express.js",
    "SQL",
    "NoSQL",
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "Git",
    "Xamarin.Forms",
    "Angular",
    "AWS (Basics)",
  ]

  const projects = [
    {
      title: t("mala3bnaTitle"),
      description: t("mala3bnaDesc"),
      technologies: [".NET", "Xamarin.Forms", "SQL", "Mobile Development"],
      period: "Jan 2023 – May 2023",
      github:
        "https://docs.google.com/presentation/d/1SVOxAJeASoNMbPur_OhtZz0lzvMqbM8b2uBf28Vux5U/edit?pli=1&slide=id.g2487527108c_0_629#slide=id.g2487527108c_0_629",
      demo: "#",
    },
    {
      title: t("fileManagementTitle"),
      description: t("fileManagementDesc"),
      technologies: ["Java", "MongoDB", "File Management", "Backend"],
      period: "Dec 2022",
      github: "https://github.com/lefdawyy/fms-java",
      demo: "#",
    },
    {
      title: t("inventoryTitle"),
      description: t("inventoryDesc"),
      technologies: ["Node.js", "Express.js", "MySQL", "Web Development"],
      period: "May 2022",
      github: "https://loaimasri1.github.io/ims-webapp/",
      demo: "#",
    },
  ]

  const experience = [
    {
      title: t("softwareEngineer"),
      company: t("fullSession"),
      period: "Jul 2023 – Feb 2025",
      type: "",
      description: t("softwareEngDesc"),
    },
    {
      title: t("backendDeveloper"),
      company: t("artToHeart"),
      period: "Sep 2023 – Oct 2024",
      type: t("volunteering"),
      description: t("backendDevDesc"),
    },
  ]

  const softSkillsKeys = [
    "problemSolving",
    "teamLeadership",
    "communication",
    "projectManagement",
    "mentoring",
    "agileScrum",
  ] as const

  return (
    <div className={`min-h-screen bg-background w-full overflow-x-hidden pt-14 ${isRTL ? "font-arabic" : ""}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center w-full max-w-none">
          <div className={`mr-2 sm:mr-4 flex ${isRTL ? "ml-2 sm:ml-4 mr-0" : ""}`}>
            <SmoothScrollLink href="#hero" className={`flex items-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}>
              <span className="font-bold text-sm sm:text-base truncate">{t("name")}</span>
            </SmoothScrollLink>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 text-sm font-medium flex-1 ${isRTL ? "space-x-reverse" : ""}`}
          >
            <SmoothScrollLink href="#about" className="hover:text-primary transition-colors whitespace-nowrap">
              {t("about")}
            </SmoothScrollLink>
            <SmoothScrollLink href="#experience" className="hover:text-primary transition-colors whitespace-nowrap">
              {t("experience")}
            </SmoothScrollLink>
            <SmoothScrollLink href="#projects" className="hover:text-primary transition-colors whitespace-nowrap">
              {t("projects")}
            </SmoothScrollLink>
            <SmoothScrollLink href="#skills" className="hover:text-primary transition-colors whitespace-nowrap">
              {t("skills")}
            </SmoothScrollLink>
            <SmoothScrollLink href="#contact" className="hover:text-primary transition-colors whitespace-nowrap">
              {t("contact")}
            </SmoothScrollLink>
          </nav>
          <div className={`flex items-center space-x-1 sm:space-x-2 flex-shrink-0 ${isRTL ? "space-x-reverse" : ""}`}>
            <ThemeToggle />
            <LanguageSwitcher />
            <Button variant="outline" size="sm" className="hidden sm:inline-flex whitespace-nowrap" asChild>
              <Link href="https://smallpdf.com/file#s=922f7dd3-09f2-4de3-aaff-fd647d805784" target="_blank">
                <span className="hidden lg:inline">{t("downloadCV")}</span>
                <span className="lg:hidden">CV</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" duration={800}>
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8">
            <div className="relative flex-shrink-0">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQE6ebTvhQmhSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686242727385?e=1753920000&v=beta&t=l1O6-yF9YOpZeLC9ZiE4UsWb8aIC93lOo5qL0fZHxGw"
                alt="Jehad Sanad Lefdawi"
                width={200}
                height={200}
                className="rounded-full border-4 border-primary/20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-3 sm:space-y-4 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter break-words">
                {t("name")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[90%] sm:max-w-[600px] mx-auto px-2 sm:px-0 overflow-fix">
                {t("heroDescription")}
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground w-full justify-center ${isRTL ? "sm:space-x-reverse" : ""}`}
            >
              <div className={`flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{t("location")}</span>
              </div>
              <div className={`flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
                <CalendarDays className="h-4 w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{t("yearsExperience")}</span>
              </div>
            </div>
            <div
              className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md sm:max-w-none justify-center ${isRTL ? "sm:space-x-reverse" : ""}`}
            >
              <Button className="w-full sm:w-auto transition-transform hover:scale-105 min-w-0" asChild>
                <SmoothScrollLink href="#contact">{t("getInTouch")}</SmoothScrollLink>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto transition-transform hover:scale-105 min-w-0"
                asChild
              >
                <SmoothScrollLink href="#projects">{t("viewProjects")}</SmoothScrollLink>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">{t("aboutTitle")}</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed overflow-fix">
                {t("aboutText1")}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed overflow-fix">
                {t("aboutText2")}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-12 sm:py-16 bg-muted/50 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInLeft" delay={100}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">{t("experienceTitle")}</h2>
            <StaggerContainer className="space-y-4 sm:space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full">
                  <CardHeader className="pb-3 sm:pb-6">
                    <div
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0 ${isRTL ? "sm:flex-row-reverse" : ""}`}
                    >
                      <div className={`min-w-0 flex-1 ${isRTL ? "sm:text-right" : ""}`}>
                        <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2 text-base sm:text-lg">
                          <span className="truncate">{job.title}</span>
                          {job.type && (
                            <Badge variant="secondary" className="text-xs w-fit flex-shrink-0">
                              {job.type}
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base font-medium text-primary mt-1 truncate">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs sm:text-sm w-fit flex-shrink-0 whitespace-nowrap">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed overflow-fix">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={150}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">{t("projectsTitle")}</h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <AnimatedCard key={index} index={index} className="h-full">
                  <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.03] group w-full">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle
                        className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 ${isRTL ? "sm:flex-row-reverse" : ""}`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors overflow-fix">
                            {project.title}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground font-normal mt-1 whitespace-nowrap">
                            {project.period}
                          </div>
                        </div>
                        <div className={`flex space-x-2 flex-shrink-0 ${isRTL ? "space-x-reverse" : ""}`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 sm:h-9 sm:w-9 hover:scale-110 transition-transform"
                            asChild
                          >
                            <Link href={project.github} target="_blank">
                              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                          </Button>
                          {project.demo !== "#" && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 sm:h-9 sm:w-9 hover:scale-110 transition-transform"
                              asChild
                            >
                              <Link href={project.demo} target="_blank">
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed overflow-fix">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs sm:text-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-12 sm:py-16 bg-muted/50 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInRight" delay={100}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">{t("skillsTitle")}</h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
              <AnimatedCard delay={200}>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t("technicalSkills")}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs sm:text-sm transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={400}>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t("softSkills")}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {softSkillsKeys.map((skillKey, index) => (
                      <Badge
                        key={skillKey}
                        variant="outline"
                        className="text-xs sm:text-sm transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {t(skillKey)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scaleIn" delay={200}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">{t("educationTitle")}</h2>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full">
              <CardHeader className="pb-3 sm:pb-6">
                <div
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0 ${isRTL ? "sm:flex-row-reverse" : ""}`}
                >
                  <div className={`min-w-0 flex-1 ${isRTL ? "sm:text-right" : ""}`}>
                    <CardTitle className="text-base sm:text-lg overflow-fix">{t("degree")}</CardTitle>
                    <CardDescription className="text-sm sm:text-base font-medium text-primary mt-1 overflow-fix">
                      {t("university")}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs sm:text-sm w-fit flex-shrink-0 whitespace-nowrap">
                    Sep 2020 – Aug 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed overflow-fix">
                  {t("educationDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 sm:py-16 bg-muted/50 px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">{t("contactTitle")}</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto overflow-fix">
              {t("contactDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch max-w-full">
              <Button
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] transition-transform hover:scale-105"
                asChild
              >
                <Link
                  href={`mailto:${t("email")}`}
                  className={`flex items-center justify-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Email</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] transition-transform hover:scale-105"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/jehad-lefdawi"
                  target="_blank"
                  className={`flex items-center justify-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] transition-transform hover:scale-105"
                asChild
              >
                <Link
                  href="https://github.com/lefdawyy"
                  target="_blank"
                  className={`flex items-center justify-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">GitHub</span>
                </Link>
              </Button>
            </div>
            <Separator className="my-6 sm:my-8" />
            <div
              className={`flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground ${isRTL ? "sm:space-x-reverse" : ""}`}
            >
              <div className={`flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{t("phone")}</span>
              </div>
              <div className={`flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{t("location")}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="border-t py-4 sm:py-6 w-full">
        <div className="max-w-6xl mx-auto text-center text-xs sm:text-sm text-muted-foreground px-4 sm:px-6 lg:px-8">
          <p className="overflow-fix">
            &copy; 2025 {t("name")}. {t("allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  )
}
