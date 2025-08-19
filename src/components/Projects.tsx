function Projects() {
    const projects = [
        {
            'name' : 'Servfolio',
            'details' : [
                'Developed a full-stack platform for freelancers and service providers to manage and showcase their work.',
                'Implemented a multi-user system with authentication and per-user content management.'
            ],
            'url' : 'https://www.youtube.com/watch?v=rR4myOCh-BE&feature=youtu.be',
            'techs' : [
                'Django', 'Javascript', 'TailwindCSS' , 'DaisyUI'
            ]
        },
        {
            'name' : 'Capstone Project: Data-Driven Management System for PAPSAS, Inc.',
            'details' : [
                'Designed and built a full-featured MIS to manage events, memberships and elections for PAPSAS.',
                'Integrated data analytics with PostgreSQL for performance tracking and decision-making.'
            ],
            'url' : 'https://papsasinc.com/about_dev',
            'techs' : [
                'Django', 'Javascript', 'CSS' , 'plotly.js'
            ]
        },
        {
            'name' : 'CS50W - Commerce',
            'details' : [
                'Developed an online auction system supporting listing creation, bidding, and user profiles.',
                'Used Django ORM for secure data handling and backend logic.'
            ],
            'url' : null,
            'techs' : [
                'Django', 'Javascript'
            ]
        }
    ]
  return (
    <div>
        <p className="font-bold flex gap-2 my-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            Notable Projects
        </p>
        <div className="flex gap-2 flex-col">
            {projects.map((project) =>
                <div className="card w-full bg-base-100 card-md card-border hover:bg-base-300">
                    <div className="card-body">
                        {
                            project.url ?
                            <a href={project.url}>
                                <h2 className="card-title underline">{project.name}</h2>
                            </a>
                            :
                            <h2 className="card-title">{project.name}</h2>
                        }
                        <ul className="list-disc">
                            {project.details.map((detail) => 
                                <li>{detail}</li>
                            )}
                        </ul>
                        <div className="flex gap-2 flex-wrap">
                            {project.techs.map((tech) => 
                                <div className="badge">{tech}</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Projects
