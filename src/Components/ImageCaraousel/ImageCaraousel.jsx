import HerbsTemplate from "../HerbsTemplate/HerbsTemplate";
import HerbsInformation from "../HerbsInformation/HerbsInformation";


function ImageCarousel(){
    const trees = HerbsInformation();
    console.log(trees);
    return(
        <>
            <div className="carousel rounded-box mt-12 bg-red-200 flex flex-row justify-between items-start space-x-6 p-6 shadow-lg w-full">
                {
                    trees.map((tree,index) => {
                        return (
                            <div key={index} className="carousel-item w-full sm:w-1/3 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between h-[350px] max-h-[350px] overflow-hidden">
                                <HerbsTemplate
                                    name={tree[0]}
                                    nickName={tree[1]}
                                    terrain={tree[2]}
                                    uses={tree[3]}
                                    description={tree[4]}
                                />
                            </div>
                        );
                    })
                }
            </div>

        
        </>
    );
}

export default ImageCarousel;