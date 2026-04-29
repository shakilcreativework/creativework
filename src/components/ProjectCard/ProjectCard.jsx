import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function ProjectCard(
    {
        title = "Creativedesign",
        subtitle = "Free & Premium Vector Platform",
        description = "A modern marketplace where designers can browse, preview and download assets.",
        tech = ["React", "Tailwind CSS", "JavaScript", "Netlify"],
        liveUrl = "https://creativedesign-assets.netlify.app/",
        codeUrl = "https://github.com/shakilcreativework/creativework",
        iframeUrl = "https://creativedesign-assets.netlify.app/",
        className,
        orderRowOne,
        orderRowTwo,
    }
) {
    return (
        <div
            className={twMerge(
                clsx(
                    "grid md:grid-cols-5 md:grid-flow-dense gap-0 rounded-2xl overflow-hidden bg-background shadow-lg",
                    className
                )
            )}
        >

            {/* Preview */}
            <div className={`relative aspect-video md:aspect-auto md:min-h-90 overflow-hidden bg-secondary ${orderRowTwo} md:col-span-3`}>
                <iframe
                    src={iframeUrl}
                    title={title}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className={`p-7 md:p-9 flex flex-col md:col-span-2 ${orderRowOne}`}>

                <span className="text-xs font-semibold tracking-widest uppercase text-gradient">
                    Live Project
                </span>

                <h3 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h3>

                <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                    {description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs glass px-3 py-1 rounded-full text-muted-foreground"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-7 flex flex-wrap gap-3">

                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold",
                            "bg-linear-to-r from-indigo-500 to-purple-600 text-white",
                            "hover:opacity-90 transition"
                        )}
                    >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                    </a>

                    <a
                        href={codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold",
                            "glass hover:bg-secondary transition"
                        )}
                    >
                        <FaGithub size={16} />
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
}