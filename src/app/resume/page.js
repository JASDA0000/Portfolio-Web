import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import MonthCounter from "../../../components/MonthCouter";
const outfit = Outfit({ subsets: ["latin"] });
const page = () => {
  return (
    <main>
      <div className={`flex w-5xl justify-center mx-auto space-x-2 max-sm:flex-col max-sm:w-4/5 max-md:flex-col max-md:w-xl  ${outfit.className}`}>
        {/* Resume */}
        <div className="mt-6 mb-6 border-2 p-8 rounded-3xl w-full  bg-white text-black ">
        <p className="text-4xl font-bold">Resume</p>
          <div className="border-b-purple-500 border-b-6 w-35 rounded-3xl mt-2 mb-2"></div>
          <div className="flex items-center">
            <span className="mr-2 material-symbols-outlined">work</span>
            <p className="text-3xl font-bold">Experienced</p>
          </div>
            <a href="https://www.inet.co.th/th" target="_blank" rel="noopener noreferrer" className="text-xl font-bold  hover:text-[#785bff] cursor-pointer">Internet Thailand Public Company Limited</a>
          <p className="text-lg">System Engineering</p>
          <MonthCounter startMonth={6} startYear={2025}/>
          <p className="text-lg text-pretty">

          </p>
          <p className="text-lg">
            
          </p>
          {/* item */}
          <a href="https://www.sptc.ac.th/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold  hover:text-[#785bff] cursor-pointer">Samutprakan Technical College</a>
          <p className="text-lg">Teaching (Intern)</p>
          <MonthCounter startMonth={5} startYear={2024} endMonth={2} endYear={2025}/>
          <ul className="list-disc pl-5">
            <li className="">
            Teaching in the subject of object-oriented programming (OOP) using C#.
            </li>
            <li>
              Teaching in the subject of computer programming with Python,using
            the Tkinter and CustomTkinter frameworks.
            </li>
          </ul>
          <a href="https://www.ideaconnect.co.th/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold  hover:text-[#785bff] cursor-pointer">Ideaconnect</a>
          <p className="text-lg">WordPress (Intern)</p>
          <MonthCounter startMonth={5} startYear={2023} endMonth={6} endYear={2023}/>
          <ul className="list-disc pl-5">
            <li className="">
            Design UI for website.
            </li>
            </ul>
            <a href="https://www.facebook.com/p/%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B9%84%E0%B8%AD%E0%B8%97%E0%B8%B5-100069580463622/?locale=el_GR" target="_blank" rel="noopener noreferrer" className="text-xl font-bold  hover:text-[#785bff] cursor-pointer">Surat IT World</a>
          <p className="text-lg">IT Support (Intern)</p>
          <MonthCounter startMonth={5} startYear={2020} endMonth={9} endYear={2020}/>
          <ul className="list-disc pl-5">
            <li className="">
            Computer Repair.
            </li>
            <li>
              Software Installtion.
            </li>
            </ul>
          </div>
            {/* Education */}
          <div className="mt-6 mb-6 border-2 p-8 rounded-3xl w-full  max-md:mt-2 bg-white text-black">
          <div className="flex items-center">
            <span className="mr-2 material-symbols-outlined">school</span>
            <p className="text-3xl font-bold">Education</p>
          </div>
          <div className="border-b-[#f04874] border-b-6 w-45 rounded-3xl mt-2 mb-2 ml-2"></div>
          <ul className="list-disc ml-5">
            <li className="text-xl font-bold">
              King mongkut's institute of technology ladkrabang
            </li>
            <p className="text-lg text-[#f04874]">2022-2025</p>
            <p className="text-lg">
              Bachelor of Science in Industrial Education
            </p>
            <p className="text-lg">Major : Engineering Education</p>
            <p className="text-lg">GPA : 3.38 (Second Class Honors)</p>
            <li className="text-xl font-bold">
              Suratthani Polytechnic college
            </li>
            <p className="text-lg text-[#f04874]">2018-2020</p>
            <p className="text-lg">
              Vocational Certificate : Inforamtion Technology
            </p>
            <p className="text-lg">GPA : 3.89</p>
          </ul>
          </div>
          </div>
          {/* Box Skills */}
        <div className={`flex w-5xl justify-center mx-auto space-x-2 max-sm:flex-col max-sm:w-4/5 max-md:flex-col max-md:w-xl ${outfit.className}`}>
          <div className="w-full mt-2 mb-6 border-2 p-8 rounded-3xl bg-white text-black ">
          <p className="text-3xl font-bold mb-2">Programming Languages</p>
          <div className="border-b-purple-500 border-b-6 w-35 rounded-3xl mt-2 mb-2"></div>
            <div className="flex space-x-2 max-sm:flex-wrap max-sm:gap-2 ">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" width={48} height={48} alt={"logo-C#"} />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" width={48} height={48} alt={"logo-html"} />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width={48} height={48} alt={"logo-css"} />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width={48} height={48} alt={"logo-javascript"} />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width={48} height={48} alt={"logo-python"} />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width={48} height={48} alt={"logo-php"} />
            </div>
          </div>
          <div className="w-full mt-2 mb-6 border-2 p-8 rounded-3xl bg-white text-black ">
          <p className="text-3xl font-bold mb-2">Technological Tools</p>
          <div className="border-b-purple-500 border-b-6 w-35 rounded-3xl mt-2 mb-2"></div>
            <div className="flex space-x-2 max-sm:flex-wrap max-sm:gap-2 ">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" width={48} height={48} alt={"logo-unity"} />
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={48} height={48} alt="logo-tailwind" />
            </div>
          </div>
        </div>
          {/* Contact */}
          <div className={`flex w-5xl justify-center mx-auto space-x-2 max-sm:flex-col max-sm:w-4/5 max-md:flex-col max-md:w-xl ${outfit.className}`}>
          <div className="w-full mt-2 mb-6 border-2 p-8 rounded-3xl bg-white text-black ">
          <p className="text-3xl font-bold mb-2">Contact</p>
          <div className="border-b-[#39FF14] border-b-6 w-35 rounded-3xl mt-2 mb-2"></div>
            <div className="flex space-x-1 flex-col text-xl">
              <ul className="list-disc list-inside text-black">
            <li className=""><a href="mailto:jasda.sing@gmail.com"><span className="font-bold text-blue-500">jasda.sing@gmail.com</span></a></li>
            <li className=""><a href="https://www.linkedin.com/in/jasda0000/"><span className="font-bold text-blue-500">LinkedIn</span></a></li>
              </ul>
            </div>
          </div>
        </div>
    </main>
  );
};

export default page;
