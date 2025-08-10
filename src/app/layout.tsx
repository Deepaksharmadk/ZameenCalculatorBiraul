
import type { Metadata } from "next";
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

export const metadata = {
    title: "Bhumi — Land Measurement Tool & Dhur Converter 847203 - Deepak Sharma - Sanjay Cyber Center",
    description: "Bhumi is an online land measurement calculator with post office details for pincode 847203, Darbhanga, Bihar. Post offices: Ladaho, Laxmipur Kakorba, Nadiami, Afzala, Ahdwara, Akabarpur Bank, Nishihara, P. Buzurg, Asi, Paghari, Aurahi, B. Russelpur, Patania, Balthari, Bauram, Bhadhar, Sahsram, Sonpur, D. Kasraur, Uchatti, Gora Mansingh, Jakso Jamalpur, Kanhai, Kothram.",
    keywords: [
        "Bhumi",
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
        "Kothram"
    ],
    openGraph: {
        title: "Bhumi — Land Measurement Tool & Post Office Directory 847203",
        description: "Land area calculation tool with complete list of post offices for pincode 847203, Darbhanga, Bihar.",
        url: "https://your-bhumi-app.vercel.app",
        type: "website",
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
