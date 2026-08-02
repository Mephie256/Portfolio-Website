import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    metadataBase: new URL("https://denisezekiel.com"),
    title: {
        default: "Denis Ezekiel | Fullstack Developer & Video Editor",
        template: "%s | Denis Ezekiel",
    },
    description:
        "Denis Ezekiel is a professional Fullstack Developer and Video Editor based in Kampala, Uganda. Specializing in modern web applications, mobile apps, UI/UX design, and creative media production.",
    keywords: [
        "Denis Ezekiel",
        "Fullstack Developer Uganda",
        "Web Developer Kampala",
        "Software Engineer Uganda",
        "React Developer",
        "Next.js Developer",
        "Flutter Mobile Developer",
        "Video Editor Uganda",
        "Era92 Creative",
        "IonHosting",
    ],
    authors: [{ name: "Denis Ezekiel", url: "https://denisezekiel.com" }],
    creator: "Denis Ezekiel",
    publisher: "Denis Ezekiel",
    alternates: {
        canonical: "https://denisezekiel.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Denis Ezekiel | Fullstack Developer & Video Editor",
        description:
            "Portfolio of Denis Ezekiel - Fullstack Web & Mobile Developer and Creative Video Editor based in Kampala, UG.",
        url: "https://denisezekiel.com",
        siteName: "Denis Ezekiel Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://denisezekiel.com/assets/og-image.png",
                width: 500,
                height: 500,
                alt: "Denis Ezekiel Profile",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Denis Ezekiel | Fullstack Developer & Video Editor",
        description:
            "Fullstack Web & Mobile Developer based in Kampala, UG with 4+ years of experience.",
        images: ["https://denisezekiel.com/assets/og-image.png"],
    },
    icons: {
        icon: "/assets/favicon.png",
        apple: "/assets/favicon.png",
    },
    verification: {
        google: "googled639091f8d6e99d0",
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Denis Ezekiel",
        url: "https://denisezekiel.com",
        jobTitle: "Fullstack Developer & Video Editor",
        worksFor: [
            {
                "@type": "Organization",
                name: "Era92 Creative",
            },
            {
                "@type": "Organization",
                name: "IonHosting",
            },
        ],
        sameAs: [
            "https://github.com/Mephie256",
            "https://www.facebook.com/denisezel17",
            "https://www.instagram.com/dm8143092/",
            "https://www.tiktok.com/@incredboify",
        ],
        knowsAbout: [
            "Fullstack Web Development",
            "React.js",
            "Next.js",
            "Flutter",
            "Node.js",
            "Video Editing",
            "UI/UX Design",
        ],
    };

    return (
        <html lang="en">
            <head>
                <meta property="og:title" content="Denis Ezekiel | Fullstack Developer & Video Editor" />
                <meta property="og:description" content="Denis Ezekiel is a professional Fullstack Developer and Video Editor based in Kampala, Uganda." />
                <meta property="og:image" content="https://denisezekiel.com/assets/og-image.png" />
                <meta property="og:image:secure_url" content="https://denisezekiel.com/assets/og-image.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta property="og:url" content="https://denisezekiel.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Denis Ezekiel Portfolio" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Denis Ezekiel | Fullstack Developer & Video Editor" />
                <meta name="twitter:description" content="Fullstack Web & Mobile Developer based in Kampala, UG with 4+ years of experience." />
                <meta name="twitter:image" content="https://denisezekiel.com/assets/og-image.png" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white overflow-x-hidden w-full relative">
                {children}
            </body>
        </html>
    );
}