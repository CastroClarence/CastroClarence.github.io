import { Carousel } from "flowbite-react";
import CustomCard from "./CustomCard";
import Header from "./Header";


export default function Skills() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 p-5">
                <Header header='My Skills' sub='Dedicated to learn and improve.' />
                <div className="flex flex-col justify-center items-center gap-16 max-w-screen-xs xl:max-w-screen-xl">
                    <div className="h-56 w-11/12  2xl:w-1/2 sm:h-64 xl:h-80 2xl:h-56 rounded-2xl">
                        <Carousel pauseOnHover
                            indicators={false}
                            leftControl={
                                <div className=" text-black dark:text-white p-2 rounded-full hover:bg-accent transition-colors">
                                    ←
                                </div>
                            }
                            rightControl={
                                <div className=" text-black dark:text-white p-2 rounded-full hover:bg-accent transition-colors">
                                    →
                                </div>
                            }

                        className="rounded-2xl">
                            <CustomCard title='Full-Stack Web Development'
                            description='
                            Proficient in HTML, CSS, JavaScript, React, Django, HTMX, PostgreSQL,
                            ' icon=<i className="bi bi-browser-safari text-4xl"></i> />
                            <CustomCard title='Data Visualization & Analytics' 
                            description='
                            Skilled in analyzing tends and presenting data-driven solutions for business intelligence.
                            ' icon=<i className="bi bi-graph-up-arrow text-4xl"></i>/>
                            <CustomCard title='Database Management' 
                            description='
                            Experienced in designing, managing, and optimizing relational databases using PostgreSQL and other SQL-based systems.
                            ' icon=<i className="bi bi-database-fill text-4xl"></i> />
                        </Carousel>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-2xl xl:text-5xl font-bold antialiased text-primary">Technologies I'm Familiar With</h1>
                        <div className="flex flex-wrap gap-2 ">
                            <i className="devicon-html5-plain colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-css3-plain colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-tailwindcss-original colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-javascript-plain colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-react-original-wordmark colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-python-plain-wordmark colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-django-plain-wordmark colored text-5xl xl:text-8xl"></i>
                            <i className="devicon-azuresqldatabase-plain colored text-5xl xl:text-8xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}