import { getServerSession } from "next-auth";
import { Headland_One } from "next/font/google";
import { authOptions } from "../api/auth/[...nextauth]/route";

const headLand = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: "About",
    description: "About page",
    keywords: ['about', 'about page']
};

const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: { revalidate: 5 } })
    const data = await res.json();
    console.log(data);
    return data.currentTime;
}

const AboutPage = async () => {
    const session = await getServerSession(authOptions)
    console.log({session});
    const currentTime = await getTime();
    return (
        <div className={`${headLand?.className} min-h-screen px-12 py-24 text-center`}>
            <h5 className="text-3xl ">About Page</h5>
            <h5 className="text-3xl text-red-400 mt-12">Time: {currentTime}</h5>
        </div>
    );
}

export default AboutPage;
