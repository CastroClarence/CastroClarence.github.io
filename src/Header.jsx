export default function Header({header, sub}){
    return (
    <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl text-primary">
            {header}
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-accent sm:text-xl/8">
            {sub}
        </p>
    </div>
    )
}