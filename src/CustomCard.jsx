
export default function CustomCard({ title, description, icon }) {
    return (
        <>
            <div href="#" className="flex !flex-row justify-center items-center gap-8 h-full w-full rounded-2xl bg-background-transparent p-16 ">
                <div className='block text-accent'>
                    {icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 2xl:text-base text-wrap"> 
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}