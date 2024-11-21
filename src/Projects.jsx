import GridCard from "./GridCard";
import Header from "./Header";
import portfolio from './assets/portfolio.png'
import capstone from './assets/capstone.png'
import commerce from './assets/commerce.png'
import mail from './assets/mail.png'


export default function Projects(){
    return (
        <>
        <div>
            {/* Header */}
                <Header header='My Projects' sub='Here are some projects that I have worked on.'/>
            {/* Cards */}
            <div className="2xl:p-10 flex justify-center ">
                <div className="2xl:grid flex flex-col gap-5 2xl:grid-cols-5 2xl:grid-rows-2 w-2/3">
                    <div className=" bg-background-transparent p-5 flex flex-col justify-between border-gray-400 dark:bg-background-transparent rounded-2xl hover:scale-105 duration-500  col-span-3">
                        <img className="rounded-t-lg" src={portfolio} alt="" />
                        <div>
                            <p className="p-1 text-center font-semibold 2xl:text-base">Personal Portfolio</p>
                            <div className="inline-flex items-center p-2 rounded-md flex-wrap gap-2" >
                                <i className="devicon-html5-plain colored text-2xl"></i>
                                <i className="devicon-css3-plain colored text-2xl"></i>
                                <i className="devicon-tailwindcss-original colored text-2xl"></i>
                                <i className="devicon-javascript-plain colored text-2xl"></i>
                                <i className="devicon-react-original-wordmark colored text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-background-transparent p-5 flex flex-col justify-between border-gray-400 dark:bg-background-transparent rounded-2xl hover:scale-105 duration-500  col-span-2 ">
                        <img className="rounded-t-lg h-full object-contain bg-primary" src={commerce} alt="" />
                        <div>
                            <p className="p-1 text-center font-semibold 2xl:text-base">CS50W's Commerce Project</p>
                            <div className="inline-flex text-center items-center p-2 rounded-md flex-wrap gap-2 " >
                                <i className="devicon-html5-plain colored text-2xl"></i>
                                <i className="devicon-css3-plain colored text-2xl"></i>
                                <i className="devicon-python-plain-wordmark colored text-2xl"></i>
                                <i className="devicon-django-plain-wordmark colored text-2xl"></i>
                                <i className="devicon-azuresqldatabase-plain colored text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-background-transparent p-5 flex flex-col justify-between border-gray-400 dark:bg-background-transparent rounded-2xl hover:scale-105 duration-500  col-span-2">
                        <img className="rounded-t-lg h-full object-contain bg-primary" src={mail} alt="" />
                        <div>
                            <p className="p-1 text-center font-semibold 2xl:text-base">CS50W's Mail Project</p>
                            <div className="inline-flex text-center items-center p-2 rounded-md flex-wrap gap-2" >
                                <i className="devicon-html5-plain colored text-2xl"></i>
                                <i className="devicon-css3-plain colored text-2xl"></i>
                                <i className="devicon-javascript-plain colored text-2xl"></i>
                                <i className="devicon-python-plain-wordmark colored text-2xl"></i>
                                <i className="devicon-django-plain-wordmark colored text-2xl"></i>
                                <i className="devicon-azuresqldatabase-plain colored text-2xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-background-transparent p-5 flex flex-col justify-between border-gray-400 dark:bg-background-transparent rounded-2xl hover:scale-105 duration-500  col-span-3">
                        <img className="rounded-t-lg" src={capstone} alt="" />
                        <div>
                            <p className="p-1 text-center font-semibold 2xl:text-base">Capstone</p>
                            <div className="inline-flex text-center items-center p-2 rounded-md flex-wrap gap-2" >
                                <i className="devicon-html5-plain colored text-2xl"></i>
                                <i className="devicon-css3-plain colored text-2xl"></i>
                                <i className="devicon-javascript-plain colored text-2xl"></i>
                                <i className="devicon-python-plain-wordmark colored text-2xl"></i>
                                <i className="devicon-django-plain-wordmark colored text-2xl"></i>
                                <i className="devicon-azuresqldatabase-plain colored text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}