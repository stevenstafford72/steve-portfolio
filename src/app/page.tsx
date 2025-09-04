import Image from "next/image";
import Header from "./components/header";
import CursorFX from "./components/CursorFX";

export default function Home() {
  return (
    <div>
      <div className= "bg-gradient-to-b from-gray-900 to-gray-700">
        <Header />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-700 to-gray-900"> 
        <div className="flex row gap-5">
        
        <div className="flex-col gap-5">
        <h1 className="text-5xl font-bold flex position: relative right-70 top-25">  Steven Stafford</h1>
        <h1 className="text-3xl font-bold flex position: relative right-70 top-30"> Software Engineer | Full Stack Developer</h1>
        </div>

        <div className="flex row posistion: relative top-25">
        <h1>Instagram</h1>
        </div>
        
        </div>


      <div className="flex text-3xl row gap-5 px-2 py-2 posistion: relative right-100 bottom-10"> 
        <p className="position: relative top-3">  </p>
        <a href="#Recruiter" className="border-2 rounded-xl px-3 py-3 text-2xl bg-gradient-to-b from-green-900 to-green-500"> Recruiter, Click Me </a>
        <a href="#AboutMe" className="border-2 rounded-xl px-3 py-3 text-2xl bg-gradient-to-b from-purple-900 to-purple-500">Everyone Else, Click Here</a>
      </div>
        
        <CursorFX />
      </main>

    </div> 
  );
}
