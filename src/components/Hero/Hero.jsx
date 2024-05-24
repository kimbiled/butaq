import {hero} from "../../assets/partners/index";
export default function Hero() {
    return(
        <>
                <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src={hero} alt="Background Image" class="object-cover object-center w-full h-full opacity-90" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Butaq Smart Station </h1>
    <p class="text-lg text-gray-300 mb-8">A new perspective on crop monitoring in AgriTech and Industry 4.0</p>
    <div className="flex flex-row gap-6">
    <a href="#" class="bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get contacts</a>
    <a href="#" class="bg-white text-gray-900 hover:bg-gray-200 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">About us</a>
    </div>
  </div>
</div>

        </>
    )
}