
import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import Footer from "@/footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "biraul-bhumi-calculator.vercel.app  — Land Measurement Tool & Dhur Converter lalpur patania- 847203 - Deepak Sharma - Sanjay Cyber Center  - Zameen Calculator Biraul ",
    description: "biraul-bhumi-calculator.vercel.app  is an online land measurement calculator with post office details for pincode 847203, Darbhanga, Bihar. Post offices: Ladaho, Laxmipur Kakorba, Nadiami, Afzala, Ahdwara, Akabarpur Bank, Nishihara, P. Buzurg, Asi, Paghari, Aurahi, B. Russelpur, Patania, Balthari, Bauram, Bhadhar, Sahsram, Sonpur, D. Kasraur, Uchatti, Gora Mansingh, Jakso Jamalpur, Kanhai, Kothram.",
    keywords: [
        "Bhumi - Land Measurement Tool & Dhur Converter",
        "Land Measurement Tool",
        "Jamin Calculator",
        "847203 Post Office List",
        "Ladaho",
        "Laxmipur Kakorba",
        "Nadiami",
        "Afzala",
        "Ahdwara",
        "Akabarpur Bank",
        "Nishihara",
        "P. Buzurg",
        "Asi",
        "Paghari",
        "Aurahi",
        "B. Russelpur",
        "Patania",
        "Balthari",
        "Bauram",
        "Bhadhar",
        "Sahsram",
        "Sonpur",
        "D. Kasraur",
        "Uchatti",
        "Gora Mansingh",
        "Jakso Jamalpur",
        "Kanhai",
        "Kothram",
        "ZameenCalculator.vercel.app",
        "lalpur patania biraul darbhanga bihar-847203"
    ],
    openGraph: {
        title: "biraul-bhumi-calculator.vercel.app  — Land Measurement Tool & Dhur Converter 847203 - Deepak Sharma - Sanjay Cyber Center patania",
        description: "Land area calculation tool with complete list of post offices for pincode 847203, Darbhanga, Bihar.",
        url: "https://biraul-bhumi-calculator.vercel.app",
        type: "website",
    }, verification: {
        google: "OV5IoKM5V9iZbIahwtwb9OnflnzCuKU94fF5-T_aS1g", // ✅ Google verification yahan rakho
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Dataset",
                        "name": "Post Office List for Pincode 847203",
                        "description": "List of post offices for pincode 847203, Darbhanga, Bihar",
                        "keywords": ["Bhumi", "Land Calculator", "847203 Post Office List"],
                        "data": [
                            "Ladaho B.O", "Laxmipur Kakorba B.O", "Nadiami B.O", "Afzala B.O",
                            "Ahdwara B.O", "Akabarpur Bank B.O", "Nishihara B.O", "P. Buzurg B.O",
                            "Asi B.O", "Paghari B.O", "Aurahi B.O", "B. Russelpur B.O",
                            "Patania B.O", "Balthari B.O", "Bauram B.O", "Bhadhar B.O",
                            "Sahsram B.O", "Sonpur B.O", "D. Kasraur B.O", "Uchatti B.O",
                            "Gora Mansingh B.O", "Jakso Jamalpur B.O", "Kanhai B.O", "Kothram B.O"
                        ]
                    })}
                </script>
                <meta name="google-site-verification" content="OV5IoKM5V9iZbIahwtwb9OnflnzCuKU94fF5-T_aS1g" />
            </Head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MantineProvider defaultColorScheme="light">
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}
