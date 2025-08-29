import { CheckCircle, Shield, Database, Settings, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CircleArrows from "./circle-arrows";

export default function PillarsSection() {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".pillar-item");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const pillars = [
    {
      number: 1,
      title: "Data Quality",
      subtitle: "Trust Your Data. Every Time.",
      description: "In today's data-driven world, decisions are only as good as the data behind them. That's why the first pillar of Data Katalyst is dedicated to ensuring data quality—so you never have to second-guess the accuracy, completeness, or reliability of the insights you rely on.",
      icon: CheckCircle,
      features: [
        "DQ Assessment & Incident Management",
        "Resolution & Repair Framework", 
        "Validation & Consistency Checks",
        "Data Unification Across Sources",
        "AI-Driven Missing Data Handling",
        "Comprehensive Data Profiling"
      ]
    },
    {
      number: 2,
      title: "Data Governance",
      subtitle: "Secure. Compliant. Accountable. Always.",
      description: "Data without governance is like a city without laws—chaotic and vulnerable. Our governance pillar helps you safeguard, govern, and take full control of your data assets with comprehensive security and compliance frameworks.",
      icon: Shield,
      features: [
        "Policy Enforcement Frameworks",
        "Defined Roles & Responsibilities",
        "GDPR & CCPA Compliance",
        "Security & Access Control",
        "Incident Response Planning",
        "Automated Audit Tools"
      ]
    },
    {
      number: 3,
      title: "Data Management",
      subtitle: "Structure, Store, and Scale—Effortlessly",
      description: "In today's complex data ecosystems, the challenge isn't just collecting data—it's managing it well. Our data management pillar gives you total control over how data is extracted, transformed, stored, and used.",
      icon: Database,
      features: [
        "Universal Extraction Framework",
        "Centralized Data Catalog",
        "Tiered Storage Architecture",
        "Complete Data Lineage",
        "Master Data Management",
        "Impact Analysis & Visualization"
      ]
    },
    {
      number: 4,
      title: "Data Analytics",
      subtitle: "From Raw Data to Real-Time Intelligence",
      description: "With Data Katalyst, analytics isn't an afterthought—it's the pinnacle. Our Data Analytics pillar transforms complex, fragmented datasets into intelligent, strategic insight with advanced optimization and predictive capabilities.",
      icon: TrendingUp,
      features: [
        "Descriptive & Predictive Analytics",
        "Advanced Optimization Techniques",
        "Flexible Reporting Engine",
        "Machine Learning Integration",
        "Scenario Simulation Planning",
        "Beautiful Interactive Dashboards"
      ]
    },
    {
      number: 5,
      title: "DataOps",
      subtitle: "Streamline, Automate, and Accelerate",
      description: "DataOps brings agility and reliability to your data operations through automated workflows, continuous monitoring, and intelligent optimization—ensuring your data processes run smoothly at scale.",
      icon: Settings,
      features: [
        "Automated Workflow Orchestration",
        "Real-time Performance Monitoring",
        "Continuous Integration & Deployment",
        "Version Control for Data",
        "Collaborative Development Environment",
        "AI-Driven Process Optimization"
      ]
    }
  ];

  return (
    
    <section id="pillars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Five <span className="text-gradient">Pillars</span> of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Built on strong foundations that transform your data landscape into a competitive advantage.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setActivePillar(index)}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-2 lg:order-1 max-w-none`}>
                  <div className="flex items-start mb-6 group">
                    <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{pillar.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{pillar.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{pillar.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-justify">
                    {pillar.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start py-1 group">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''} order-1 lg:order-2`}>
                  <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gray-50 rounded-2xl lg:rounded-3xl flex items-center justify-center card-subtle transform hover:scale-105 transition-all duration-500 hover:shadow-lg">
                    <pillar.icon className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 text-blue-500 transform hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
