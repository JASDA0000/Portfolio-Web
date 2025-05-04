import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({subsets:['latin']})

export default function Home() {
  return (
    <>
    <div className="min-h-screen">
      <main className="flex justify-center">
        <div className={`max-sm:w-xs2  max-sm:ml-6 max-sm:mr-6 max-md:ml-6 max-md:mr-6 md:w-3xl md:mt-6 md:mb-6 lg:w-4xl xl:w-5xl mt-6 mb-6 border-2 p-8 rounded-2xl bg-white text-black ${outfit.className}`}>
        <p className="max-sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Hi 👋 My name is Jasda Singhapooti</p>
        <p className="mt-1 max-sm:text-lg  xl:text-2xl text-pretty">Experienced in Python (Tkinter, CustomTkinter) and C# for OOP, with expertise in UI/UX design, web development (HTML, CSS, JavaScript), and game development using Unity. Skilled in IT support, software installation, and WordPress design. Over a year of teaching experience in programming. Strong problem-solving skills and a passion for innovative software solution.</p>
        </div>
      </main>
    </div>
    </>
  );
}
