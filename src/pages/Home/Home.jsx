import Navbar from "../../components/Navbar/Navbar"
import Slider from "../../components/Slider/Slider"


const Home = () => {
  return (
    <>
        <div className="bg-[url(/img/coffee.jpg)] min-h-screen min-w-full bg-cover flex flex-col">
          <h1 className=" text-white">AKI KOE-EN</h1>
        </div>
        <Slider />
    </>
  )
}

export default Home