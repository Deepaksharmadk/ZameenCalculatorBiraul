// app/sanjay-cyber-center-patania/page.tsx
import { redirect } from "next/navigation";
export const metadata = {
    title: "Biraul Bhumi Calculator - 847203 - Deepak Sharma - Sanjay Cyber Center - Zameen Calculator Biraul-847203",
    description:
        "Biraul Bhumi Calculator - 847203 - Deepak Sharma - Sanjay Cyber Center - Zameen Calculator Biraul",
    keywords: [
        "Biraul Bhumi Calculator-847203",
        "Deepak Sharma",
        "Cyber Cafe Patania",
        "Dhur Converter"
    ],
};

export default function BiraulBhumiCalculatorPage() {
    // Agar hamesha home pe redirect karna hai
    redirect("/");

    // Agar redirect nahi karna to neeche ka content dikhana
    return (
        <main>
            <h1>
                Biraul Bhumi Calculator - 847203 - Deepak Sharma - Sanjay Cyber Center - Zameen Calculator Biraul-847203
                <br />
                <small>(Bhumi Calculator Biraul-847203)</small>
            </h1>

            <p>
                This website is managed by Deepak Sharma.
                <br />
                <small>(Yeh website Deepak Sharma dwara managed ki jaati hai.)</small>
            </p>

            <p>
                Deepak Sharma
                <br />
                <small>(Deepak Sharma)</small>
            </p>
        </main>
    );
}