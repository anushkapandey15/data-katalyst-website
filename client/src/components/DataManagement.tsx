import { useEffect, useRef, useState } from "react";

export default function DataManagement() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [duration, setDuration] = useState(0);

    const timelineSections = [
        {
            id: 0,
            title: "Data Flow",
            description: "Visualize how data moves in real time",
            timeRange: { start: 0, end: 25 },
        },
        {
            id: 1,
            title: "Data Catalog",
            description: "Organize and simplify access to data",
            timeRange: { start: 26, end: 38 },
        },
        {
            id: 2,
            title: "Impact Analysis",
            description:
                "Understand changes and their downstream effects.",
            timeRange: { start: 39, end: 83 },
        },
        {
            id: 3,
            title: "Data Lineage",
            description: "Trace data’s journey from source to destination.",
            timeRange: { start: 84, end: 91 },
        },
    ];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };

        const handleTimeUpdate = () => {
            const time = video.currentTime;
            setCurrentTime(time);

            const active = timelineSections.findIndex(
                (section) =>
                    time >= section.timeRange.start && time < section.timeRange.end
            );

            if (active !== -1 && active !== activeSection) {
                setActiveSection(active);
            }
        };

        const handleEnded = () => {
            video.currentTime = 0;
            video.play();
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("ended", handleEnded);
        };
    }, [activeSection]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Data Management{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                            Workflow
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Video (3/4 width) */}
                    <div className="lg:col-span-3 relative">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                            <video
                                ref={videoRef}
                                className="w-full h-[500px] object-contain"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                {/* ⚠️ Prefer .mp4 (H.264) for better browser support */}
                                <source
                                    src="/src/components/images/DataManagement.mov"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Right Column - Timeline (1/3 width) */}
                    <div className="relative -ml-6">
                        {/* Vertical gray line (background) */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />

                                                 {/* Blue progress line */}
                         {/* Blue progress line */}
<div
  className="absolute left-6 w-0.5 bg-blue-500 transition-all duration-300 ease-out"
  style={{
    top: "0%",
    height: (() => {
      if (!duration) return "0%";

      // Find current active section
      const currentSectionIndex = timelineSections.findIndex(
        (section) =>
          currentTime >= section.timeRange.start &&
          currentTime < section.timeRange.end
      );

      if (currentSectionIndex === -1) return "0%";

      const sectionCount = timelineSections.length;
      const sectionHeight = 100 / sectionCount; // 25% if 4 sections

      // How far inside current section (0–1)
      const currentSection = timelineSections[currentSectionIndex];
      const sectionProgress =
        (currentTime - currentSection.timeRange.start) /
        (currentSection.timeRange.end - currentSection.timeRange.start);
      const clamped = Math.max(0, Math.min(1, sectionProgress));

      // Height = full height of previous sections + progress in current section
      const completedHeight = currentSectionIndex * sectionHeight;
      const progressHeight = sectionHeight * clamped;

      return `${completedHeight + progressHeight}%`;
    })(),
  }}
/>




                        {/* Timeline sections */}
                        <div className="space-y-6 ">
                            {timelineSections.map((section, index) => (
                                <div key={section.id} className="relative flex items-start">
                                    {/* Circle indicator */}
                                    <div
                                        className={`absolute left-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${index === activeSection
                                                ? "bg-blue-500 border-blue-500"
                                                : "bg-white border-gray-300"
                                            }`}
                                    />

                                    {/* Content */}
                                    <div className="ml-12 flex-1">
                                        <h3
                                            className={`text-lg font-semibold mb-1 transition-colors duration-300 ${index === activeSection
                                                    ? "text-blue-500 font-bold text-lg"
                                                    : "text-gray-900"
                                                }`}
                                        >
                                            {section.title}
                                        </h3>
                                        <p
                                            className={`leading-relaxed text-sm ${index === activeSection
                                                    ? "text-gray-700"
                                                    : "text-gray-500"
                                                }`}
                                        >
                                            {section.description}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
