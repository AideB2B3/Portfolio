import { Code2, Lightbulb, Rocket, Users } from "lucide-react"



const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintable,scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing for speed and delivering lightning-fast user experiences."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with to bring ideas to life."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the latest technologies and best pratices."
    },
]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden"> 
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-100 text-secondary-foreground">
                        Analyzing systems,
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            building solutions.
                        </span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I approach development with an <strong>engineer's mindset</strong>: precise, analytical, and structured. 
                            My background in Automation Engineering at Federico II University gave me strong roots in 
                            problem-solving and system logic.
                        </p>
                        <p>
                            Currently, I am expanding my horizons at the <strong>Apple Developer Academy</strong>, 
                            where I'm mastering not just SwiftUI and iOS Development, but also the human side of technology: 
                            Design Thinking, CBL (Challenge-Based Learning), and User Experience.
                        </p>
                        <p>
                            I don't just write code; I look for the most efficient way to make things 
                            work seamlessly, merging technical robustness with intuitive design.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to merge the robustness of engineering with the elegance of 
                            Apple's ecosystem, creating apps that are reliable, intuitive, and impactful."
                        </p>
                    </div>
                </div>

                {/* Right Column - Hilights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(idx +1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
}