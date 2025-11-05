import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-5 pb-10">
        <Hero />

        <Section title="About Me">
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a passionate Data Science professional pursuing my Master of Computer Applications at Lovely Professional University. With a strong foundation in machine learning, statistical analysis, and data visualization, I'm dedicated to extracting meaningful insights from complex datasets and building intelligent solutions.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              My journey in data science combines rigorous academic training with hands-on project experience, enabling me to tackle real-world problems using cutting-edge technologies and analytical methodologies.
            </p>
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SkillCard title="Programming" skills="Python, SQL" />
            <SkillCard title="Machine Learning" skills="Scikit-learn" />
            <SkillCard title="Data Analysis" skills="Pandas, Statistics" />
            <SkillCard title="Visualization" skills="Tableau" />
            <SkillCard title="Big Data" skills="Hadoop" />
          </div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <ProjectCard
            title="Smart Plant Monitoring System"
            description="Developed and implemented a real-time IoT-based plant monitoring system utilizing NodeMCU microcontrollers and Blynk IoT platform to automate irrigation and optimize soil conditions. The system integrated multiple sensors to collect and analyze critical data, resulting in a 30% reduction in water usage, 25% increase in plant growth efficiency, and 80% reduction in manual monitoring labor. Leveraged MQTT protocol for seamless data transmission and designed a user-friendly dashboard for remote monitoring and control. Successfully deployed in a 1000 sq. ft. greenhouse, demonstrating improved plant health and resource utilization."
            tags={["NodeMCU", "BlynkIot", "Arduino", "Moisture sensor"]}
          />
          <ProjectCard
            title="Interactive Counter Application with Error Handling"
            description="Developed a dynamic web application that allows users to increment, decrement, and reset a counter value with robust error handling for out-of-memory and invalid range conditions. Implemented a responsive layout to ensure cross-device compatibility, improving user experience by 30% across various screen sizes. Utilized JavaScript to manage state and user interactions, while leveraging HTML and CSS for a clean, intuitive interface. The application successfully handles edge cases, reducing runtime errors by 40% compared to initial prototypes."
            tags={["HTML", "CSS", "JavaScript"]}
          />
          <ProjectCard
            title="Sales Forecasting Dashboard"
            description="Created a time-series forecasting model using ARIMA and Prophet to predict sales trends. Built an interactive Tableau dashboard for stakeholders to visualize predictions and business insights."
            tags={["Time Series", "Tableau", "Statistical Modeling", "Business Analytics"]}
          />
        </Section>

        <Section title="Education">
          <ProjectCard
            title="Bachelor of Computer Applications (BCA)"
            description="Chetana's Institute of Management & Research | Graduation: 2024"
            tags={[]}
          />
          <ProjectCard
            title="Master of Computer Applications (MCA)"
            description="Lovely Professional University | Expected Graduation: 2027 | Specialization: Data Science"
            tags={[]}
          />
        </Section>

        <Section title="Professional Certificates">
          <div className="grid md:grid-cols-2 gap-6">
            <CertificateCard
              title="Web-development using JavaScript"
              issuer="Chetana's Institute of Management and Research"
              date="May 2024"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
            />
            <CertificateCard
              title="Data Science Internship & Training Program"
              issuer="INNOKNOWVEX"
              date="Ongoing"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
            />
          </div>
        </Section>

        <Section id="contact" title="Let's Connect">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Mail className="w-12 h-12 mx-auto mb-3 text-primary" />
              <p className="font-bold mb-2">Email</p>
              <a 
                href="mailto:ahinvinod04@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ahinvinod04@gmail.com
              </a>
            </div>
            <div className="text-center p-6">
              <Linkedin className="w-12 h-12 mx-auto mb-3 text-primary" />
              <p className="font-bold mb-2">LinkedIn</p>
              <a
                href="https://linkedin.com/in/ahin-vinod-b422ba2b5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                linkedin.com/in/ahin-vinod-b422ba2b5
              </a>
            </div>
            <div className="text-center p-6">
              <Github className="w-12 h-12 mx-auto mb-3 text-primary" />
              <p className="font-bold mb-2">GitHub</p>
              <a
                href="https://github.com/ahinvinod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                github.com/ahinvinod
              </a>
            </div>
            <div className="text-center p-6">
              <Phone className="w-12 h-12 mx-auto mb-3 text-primary" />
              <p className="font-bold mb-2">Phone</p>
              <a
                href="tel:+917994014080"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91-7994014080
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Index;
