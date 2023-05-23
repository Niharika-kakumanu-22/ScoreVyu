
export default function Sidebar() {
  return (
    
    <div className="flex flex-col md:flex-row-reverse items-center-end  ">
      <div className="flex-1 md:flex-none w-full md:w-96 rounded-10 m-4 md:m-0 ">
        <div className="flex flex-col items-center bg-slate-100 rounded-xl">
          <div className="m-7 p-5 w-80 border-t border-b border-gray-500 text-center 
          font-varela text-l  text-gray-700 font-semibold">ABOUT ME</div>

          <table className="w-80">
            <tr className="flex flex-row gap-8 my-2 justify-between">
              <th className="py-2 p-2 bg-teal-500 shadow-lg text-white text-justify rounded-lg w-full" >SEMESTER</th>
              <th className="py-2 p-2 bg-teal-500 shadow-lg text-white text-justify rounded-lg w-30 ">GPA</th>
            </tr>
            <tr className="flex flex-row gap-8 justify-between">
              <th className="py-2 p-2  text-justify rounded-lg w-full" >SEMESTER-1</th>
              <th className="py-2 p-2  text-justify rounded-lg ">8.9</th>
            </tr>
            <tr className="flex flex-row gap-8 justify-between">
              <th className="py-2 p-2  text-justify rounded-lg " >SEMESTER-2</th>
              <th className="py-2 p-2  text-justify rounded-lg ">8.2</th>
            </tr>
            <tr className="flex flex-row gap-8 justify-between">
              <th className="py-2 p-2  text-justify rounded-lg w-full" >SEMESTER-3</th>
              <th className="py-2 p-2  text-justify rounded-lg ">8.5</th>
            </tr>
            <tr className="flex flex-row gap-8 justify-between">
              <th className="py-2 p-2  text-justify rounded-lg " >SEMESTER-4</th>
              <th className="py-2 p-2  text-justify rounded-lg ">7.8</th>
            </tr>
            <tr className="flex flex-row gap-8 justify-between">
              <th className="py-2 p-2  text-justify rounded-lg w-full" >SEMESTER-5</th>
              <th className="py-2 p-2  text-justify rounded-lg ">7.9</th>
            </tr>
            <tr className="flex flex-row gap-8 justify-between">
              <th className="py-2 p-2  text-justify rounded-lg " >SEMESTER-6</th>
              <th className="py-2 p-2  text-justify rounded-lg ">8.4</th>
            </tr>
        </table>

{/* 

          <ul className="flex-row-reverse ">
              <div className="py-2 p-2 w-50 my-8 m-10 bg-teal-500 shadow-lg text-white text-justify rounded-lg " to="/posts?cat=Semester-">
                SEMESTER
              </div>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="py-2 p-2 w-50 my-8 m-10 bg-teal-500 shadow-lg text-white text-justify rounded-lg" to="/posts?cat=8.2">
                GPA
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer ">
              <Link className="link" to="/posts?cat=Semester-">
                Semester-1
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=8.2">
                8.8
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=Semester-">
                Semester-2
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=8.2">
                8.2
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=Semester-">
                Semester-3
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=8.2">
                8.2
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=Semester-">
                Semester-4
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=8.2">
                8.2
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=Semester-">
                Semester-5
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=8.2">
                8.2
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=Semester-">
                Semester-6
              </Link>
            </li>
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              <Link className="link" to="/posts?cat=8.2">
                8.2
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
//<div className="py-2 p-2 w-50 my-8 m-10 bg-teal-500 shadow-lg text-white text-justify rounded-lg " to="/posts?cat=Semester-">