import plantImage from "../../assets/plant.jpeg"

function HerbsTemplate({name,nickName,terrain,uses,description}){
    return(
        <>
            <div className="flex flex-col justify-center items-center w-full rounded-md h-auto bg-red-200 p-5">
                <div className="pb-4">
                    <img className="rounded-3xl h-[80px] w-[80px]" src={plantImage} alt="" />
                </div>
                <div className="">
                    <h1 className="font-black text-2xl pb-2">{name}</h1>
                    <h2 className="font-medium">{nickName}</h2>
                </div>
                <div>
                    <p> <span className="font-bold">Terrain : </span> {terrain}</p>
                    <p> <span className="font-bold">Parts Used : </span> {uses}</p>
                    <p> <span className="font-bold justify start">Description : </span> {description}</p>
                </div>
            </div>
        
        </>
    );
}

export default HerbsTemplate;