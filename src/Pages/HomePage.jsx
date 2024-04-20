import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
// import SportsImage from "../assets/sports image.jpg";

function HomePage() {
    return (
        <HomeLayout>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mx-16 h-[90vh]">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-semibold text-white">
                        Welcome to our <span className="text-yellow-500 font-bold">Sports Booking Platform</span>
                    </h1>
                    <p className="text-xl text-gray-200 mt-6">
                        Experience the thrill of playing your favorite sports whenever you want. Our platform provides easy access to sports venues, equipment, and tournaments, making it convenient for sports enthusiasts to stay active and engaged.
                    </p>
                    <p className="text-xl text-gray-200 mt-6">
                        Whether you're a cricket lover, a football fanatic, or enjoy other sports, we've got you covered. Explore our wide range of features, including online booking, inventory management, tournament organization, and more.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start">
                        <Link to="/login">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 mr-4">
                                Get Started
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* <div className="md:w-1/2 flex justify-center">
                    <img src={SportsImage} alt="Sports Image" className="h- md:w-auto" />
                </div> */}
            </div>
        </HomeLayout>
    );
}

export default HomePage;
