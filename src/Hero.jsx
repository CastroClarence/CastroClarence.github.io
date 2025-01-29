import img from './assets/profile-t.jpeg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [showName, setShowName] = useState(false); // Control when the name appears
    const [showRole, setShowRole] = useState(false); // Control when the role appears
    const [showDescription, setShowDescription] = useState(false); // Control when the description appears

    const [introText] = useTypewriter({
        words: ['Hi, I am '],
        typeSpeed: 10,
        delaySpeed: 1000,
        cursor: false,
        onLoopDone: () => setShowName(true), // Trigger name typing after intro finishes
    });

    const [nameText] = useTypewriter({
        words: ['Clarence Joseph B. Castro'],
        typeSpeed: 20,
        delaySpeed: 2000,
        cursor: false,
        onLoopDone: () => setShowRole(true), // Trigger role typing after name finishes
    });

    const [roleText] = useTypewriter({
        words: ['Full-stack Developer', 'Web Developer', 'Database Developer'],
        typeSpeed: 30,
        deleteSpeed: 50,
        delaySpeed: 3000,
        loop: true,
    });

    const [descriptionText] = useTypewriter({
        words: [
            'I am currently pursuing a Bachelor of Science degree in Information Technology at Batangas State University. Dedicated to improving my expertise as a full-stack web developer, data visualization, and business analytics. My passion lies in harnessing technology to conceive and implement innovative projects. I thrive in dynamic, collaborative environments where creativity and technical proficiency converge. Feel free to explore my ongoing portfolio to discover the exciting projects and experiences that reflect my commitment to the ever-evolving realm of Information Technology.',
        ],
        typeSpeed: 40,
        delaySpeed: 3000,
        cursor: false,
    });

    // Trigger description text after roles start typing
    useEffect(() => {
        if (showRole) {
            const timer = setTimeout(() => setShowDescription(true), 100); // Adjust timing as needed
            return () => clearTimeout(timer);
        }
    }, [showRole]);

    return (
        <div className="flex justify-around lg:p-10 mt-5 p-1 2xl:max-h-max 2xl:h-screen items-center flex-col-reverse xl:flex-row">
            <div className="space-y-5 w-3/4 2xl:w-1/2 ">
                <h1 className="lg:text-5xl text-2xl font-bold antialiased ">
                    {introText}
                    {showName && (
                        <span className="text-accent">
                            {nameText}
                        </span>
                    )}
                    <br />
                    {showRole && (
                        <>
                            a <span className="text-accent">{"{"}</span>
                            <span>
                                {roleText}
                                <Cursor />
                            </span>
                            <span className="text-accent">{"}"}</span>
                        </>
                    )}
                </h1>
                {showDescription && (
                    <p className="text-wrap text-justify 2xl:text-base xl:mr-5">
                        {descriptionText}
                    </p>
                )}
            </div>
            <img
                className="w-3/4 mb-5 lg:w-1/3 rounded-2xl shadow-lg bg-background-transparent "
                src={img}
                alt="Profile"
            />
        </div>
    );
}
