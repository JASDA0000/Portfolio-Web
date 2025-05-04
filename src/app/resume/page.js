import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
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
          <ul className="list-disc ml-5">
            <li className="text-xl font-bold">Teaching (Intern)</li>
          </ul>
          <p className="text-lg">Samutprakan Technical College</p>
          <p className="text-lg  text-purple-500">May 2024 - Feb 2025</p>
          <p className="text-lg text-pretty">
            Teaching in the subject of object-oriented programming (OOP) using
            C#
          </p>
          <p className="text-lg">
            Teaching in the subject of computer programming with Python,using
            the Tkinter and CustomTkinter frameworks.
          </p>
          <ul className="list-disc ml-5">
            <li className="text-xl font-bold">WordPress (Intern)</li>
          </ul>
          <p className="text-lg">Ideaconnect </p>
          <p className="text-lg text-purple-500">May 2023 - Jun 2023</p>
          <p className="text-lg">Design UI for website.</p>
          <ul className="list-disc ml-5">
            <li className="text-xl font-bold">IT Support (Intern)</li>
          </ul>
          <p className="text-lg">Surat IT World</p>
          <p className="text-lg text-purple-500">May 2020 - Aug 2020</p>
          <p className="text-lg">Computer Repair.</p>
          <p className="text-lg">Software Installtion.</p>
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
          <p className="text-3xl font-bold mb-2">My skills</p>
          <div className="border-b-purple-500 border-b-6 w-35 rounded-3xl mt-2 mb-2"></div>
            <div className="flex space-x-1 max-sm:flex-wrap max-sm:mt-1 ">
            <Image src='/icon/unity.png' width={48} height={48} alt={"logo-unity"} />
            <Image src='/icon/c-sharp.png' width={48} height={48} alt={"logo-C#"} />
            <Image src='/icon/html.png' width={48} height={48} alt={"logo-html"} />
            <Image src='/icon/css-3.png' width={48} height={48} alt={"logo-css"} />
            <Image src='/icon/js.png' width={48} height={48} alt={"logo-javascript"} />
            <Image src='/icon/python.png' width={48} height={48} alt={"logo-python"} />
            <Image src='/icon/Tailwind CSS.png' width={48} height={48} alt="logo-tailwind"/>
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
