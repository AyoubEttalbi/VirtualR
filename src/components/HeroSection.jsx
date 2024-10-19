import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VirtualR build tools  
            <br /><span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{" "}for devlopers</span></h1>
        <p className="text-center mt-14 max-w-4xl text-lg text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
        </p>
        <div className="my-10 flex justify-center items-center flex-wrap">
            <a href="#" className="mx-3 bg-gradient-to-r from-orange-500 to-orange-800 p-3 rounded-md">Start for free</a>
            <a href="#" className="mx-3 border p-3 rounded-md ">Documentation</a>        
        </div>
        <div className="flex justify-center items-center mt-10 flex-wrap">
            <video className="lg:mr-2 border  border-orange-900 rounded-lg shadow-orange-400 " src={video1} loop muted autoPlay width={600} height={200}></video>
            <video className="lg:ml-2 border border-orange-900 rounded-lg shadow-orange-400" src={video2} loop muted  autoPlay width={600} height={200}></video>
        </div>
    </div>
  )
}
