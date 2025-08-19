import cs50wImg from "../assets/images/CS50W.png"; 
import internship from "../assets/images/internship.png"
import defaultCert from "../assets/lottie/Certificate.json"
import Lottie from "lottie-react";
import CertificateIcon from "./CertificateIcon";

function Credentials() {
  const creds_list = [
    {
      name: "CS50's Web Programming with Python and Javascript",
      provider: "Harvard University / edX",
      url: "https://certificates.cs50.io/48120bdf-bada-4c78-88ee-49283629b348.pdf?size=letter",
      image: cs50wImg, 
      skills: ["Django", "Python", "Javascript", "HTML", "CSS"],
    },
    {
        name: "Front-end Developer Intern",
        provider: "Batangas State University",
        url: "https://caist.batstateu.edu.ph/behind-the-code/select/clarence-joseph-b.-castro",
        image: internship, 
        skills: ["ReactJS", "Typescript", "Flutter", "REST API", "JWT"],
    },
    {
        name: "React Basics",
        provider: "Meta / Coursera",
        url: null,
        image: null, 
        skills: ["ReactJS", "Javascript", "JSX"]
    }
  ];

  return (
    <aside className="card bg-base-100 w-96 border border-base-200 p-4 
                    flex-1 overflow-y-auto 
                    max-h-[calc(100vh-64px)] 
                    sticky top-5 ">
      <p className="text-xl font-bold my-2 flex gap-2"><CertificateIcon/> Credentials</p>
      <div className="flex flex-col gap-3">
        {creds_list.map((cred) => (
            <div className="card bg-base-100 w-full card-border hover:bg-base-300">
                <figure>
                {
                    cred.image ?
                    <img src={cred.image} alt={`${cred.name} certificate`} className="h-40 p-1"/>
                    :
                    <Lottie animationData={defaultCert} className="h-40 p-1"/>
                }
                </figure>
                <div className="card-body">
                {
                    cred.url?
                    <a href={cred.url} key={cred.name} target="_blank" rel="noopener noreferrer">
                        <h2 className="card-title underline">{cred.name}</h2>
                    </a>
                    :
                    <h2 className="card-title">{cred.name}</h2>
                }
                <p>{cred.provider}</p>
                <div className="card-actions justify-end">
                    {cred.skills.map((skill) => (
                    <div key={skill} className="badge">
                        {skill}
                    </div>
                    ))}
                </div>
                </div>
            </div>
        ))}
      </div>
    </aside>
  );
}

export default Credentials;
