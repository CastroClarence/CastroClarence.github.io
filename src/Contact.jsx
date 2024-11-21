import CustomCard from "./CustomCard";
import Header from "./Header";

export default function Contact() {
    return (
        <div className="flex flex-col 2xl:flex-row justify-evenly h-screen p-5">
            <div className="flex justify-center">
                <Header header='Get in touch' sub='Meow' />                
            </div>
            <div className="flex justify-center items-center gap-1">
                <div className="grid grid-rows-2 grid-cols-2 gap-2">
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRzDsXVPzZGJgPXRBMcWKZqqRJksNwgBxFdXsDLwHWzCzlMqzGtZSXTbBjvqGnvvdgRpDqzn">
                        <CustomCard title='Email' icon={
                            <i class="text-3xl devicon-google-plain"></i>
                        } />
                    </a>
                    <a href="https://www.facebook.com/clarencejoseph.b.castro/">
                        <CustomCard title='Facebook' icon={
                            <i class=" text-3xl devicon-facebook-plain colored"></i>
                        }
                        />
                    </a>
                    <a href="www.linkedin.com/in/clarence-joseph-castro">
                        <CustomCard title='LinkedIn' icon={
                            <i class=" text-3xl devicon-linkedin-plain colored"></i>
                        }/>
                    </a>
                    <a href="https://github.com/CastroClarence">
                        <CustomCard title='Github' icon={
                            <i class=" text-3xl devicon-github-original"></i>
                        }/>
                    </a>
                </div>
            </div>
        </div>
    )
}