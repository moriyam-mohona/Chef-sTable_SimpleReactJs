import bannerImg from "../../assets/images/banner-img.png";

function Banner() {
    return (
        <div
            className="hero rounded-3xl overflow-hidden mb-20"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            <div className="bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-2xl text-white">
                    <h1 className="mb-5 text-4xl font-bold mt-16">
                        Discover an exceptional cooking class tailored for you!
                    </h1>
                    <p className="mb-5 max-w-2xl mx-auto">
                        Embark on a culinary odyssey to master the art of basic recipes, explore the intricate flavors.Crafting yourself into an exceptionally skilled and world-class chef of code at the digital Chef's Table.
                    </p>
                    <div className="flex justify-center gap-4 mb-16">
                        <button className="btn bg-[#0BE58A] rounded-3xl border-none">
                            Explore Now
                        </button>
                        <button className="btn btn-outline-white rounded-3xl ">
                            Our Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
