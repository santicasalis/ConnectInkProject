import Image from "next/image"

export default function Card ({name, location, tattoos}){
    return (
        <div className="pb-8 pt-4 px-8 w-4/5 h-72 ml-36 bg-white rounded text-black flex flex-col m-4 border-black border-2 box-content">
            <h1>{name}</h1>
            <p>{location}</p>
            <div className="flex flex-row">
                {tattoos.map((tattoo, index) => {
                    if(index >= 4) return
                    return <Image
                    key={tattoo.src}
                    src={tattoo.src}
                    alt={tattoo}
                    width={500}
                    height={500}
                    className="object-center object-cover w-60 h-60 m-2 rounded mx-8"
                    />
                })}
            </div>
        </div>
    )
}