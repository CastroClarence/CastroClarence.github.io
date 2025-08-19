import CodeIcon from './CodeIcon'

function Tech() {
    const backend_list = [
       'Python', 'Django', 'Django REST Framework', 'SQLite', 'MySQL', 'PostgreSQL'
    ]
    const frontend_list = [
        'Javascript', 'Typescript', 'ReactJS', 'TailwindCSS' ,'DaisyUI', 'Dart', 'Flutter'
    ]

    const dev_tools = [
        'Postman' ,'Git', 'GitHub', 'Trello' , 'VS Code', 'XCode', 'Android Studio'
    ]

  return (
    <div>
        <p className='font-bold flex gap-2 my-4'><CodeIcon/> Tech Stack</p>
        <div className='flex gap-4 flex-col'>
            <div>
                <p className='font-semibold'>Back-end</p>
                <div className='flex gap-2 flex-wrap'>
                {backend_list.map((backend) => 
                    <div className="badge">{backend}</div>
                )}
                </div>
            </div>

            <div>
                <p className='font-semibold'>Front-end</p>
                <div className='flex gap-2 flex-wrap'>
                {frontend_list.map((frontend) => 
                    <div className="badge">{frontend}</div>
                )}
                </div>
            </div>

            <div>
                <p className='font-semibold'>Developer Tools</p>
                <div className='flex gap-2 flex-wrap'>
                {dev_tools.map((tool) => 
                    <div className="badge">{tool}</div>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech