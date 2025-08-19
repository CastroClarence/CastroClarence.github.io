import profile from '../assets/images/profile.jpeg'
import Aboutme from './Aboutme'
import Projects from './Projects'
import Tech from './Tech'
import github from '../assets/svg/github.svg'
import linkedin from '../assets/svg/linkedIn.svg'
import email from '../assets/svg/email.svg'
import ThemeSwitcher from './ThemeSwitcher'

function Body() {
    const socials = [
        {
            'name' : 'LinkedIn',
            'url' : 'https://www.linkedin.com/in/clarence-joseph-castro/',
            'icon' : linkedin
        },
        {
            'name' : 'GitHub',
            'url' : 'https://github.com/CastroClarence',
            'icon' : github
        },
        {
            'name' : 'castroclarenceb@gmail.com',
            'url' : null,
            'icon' : email
        }
    ]
  return (
    <div className="flex-2 p-5 border-1 rounded-box mb-4 border-base-200">
        <div className='flex gap-4'>
            <div>
                <img src={profile} alt="Clarence Joseph Castro's profile" className='h-35 object-contain'/>
            </div>
            <div className='relative w-full'>
                <div className='absolute top-1 right-1'>
                    <ThemeSwitcher/>
                </div>
                <h1 className="text-2xl font-bold my-2">Clarence Joseph Castro</h1>
                <h2 className="font-bold">Aspiring Web Developer</h2>
                <p>San Jose, Batangas</p>
                <div className='flex gap-2 flex-wrap'>
                    {socials.map((social) => 
                        social.url ?
                        <a href={social.url}>
                            <div className="badge hover:bg-base-300">
                                <img src={social.icon} alt={social.name + ' Icon'}  className='size-5'/> {social.name}
                            </div>
                        </a>
                        :
                        <div className="badge hover:bg-base-300 whitespace-normal break-words h-fit">
                            <img src={social.icon} alt={social.name + ' Icon'} className="size-5 shrink-0" />
                            <span className="break-all">{social.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <Aboutme/>
        <div className="divider"></div>
        <Tech/>
        <div className="divider"></div>
        <Projects/>
    </div>
  )
}

export default Body
