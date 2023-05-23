import React, { useState } from 'react'
import Sidebar from './SideBar'
import fire from '../fire'
export const About = () => {


    const [email, setEmail] = useState("");

    fire.auth().onAuthStateChanged((user) => {
        if (user) {

            setEmail(user.email)
        } else {
            console.log("HE")
        }
      });

  return (
      <>
            <div className='flex flex-row ml-28 mt-7 p-10 justify-between'>
              <div className="shadow-xl border-2  w-[56vw] pb-10 border-gray-300 bg-slate-200 ">
                    <div className='flex flex-row p-10 bg-slate-200 '>
                        <img src="https://cdn.dribbble.com/users/899296/screenshots/16177545/media/e50616dc63e7e4a2643abbb2d6bede23.png?compress=1&resize=400x300"
                                className="rounded-xl" alt="profile" />
                    <div className='my-4 px-10 text-justify font-medium text-xl py-3 '>
                          <div class="mb-4"> Student Name</div>
                        <div class="mb-4"> B.Tech</div>
                         <div class="mb-4">3rd Year</div>
                         <div class="mb-4">2nd Semester</div>
                          <div class="mb-4">CSE-II</div>
                          <div class="mb-4">AB+</div>
                          </div>     
                  </div>
                  <div className='flex flex-row justify-between px-10 p-2'>
                      <div>
                        <div className='font-medium mb-4'>
                        BDAY : Jun 22,2002
                          </div>
                          <div className='font-medium mb-4'>
                      Country : India 
                          </div> 
                          <div className='font-medium mb-4'>
                      Pincode : 500008
                          </div>  
                            
                          <div className='font-medium mb-4'>
                      Graduation : 2024
                          </div>
                          <div className='font-medium mb-4'>
                       Address: hyderabad,telangana
                      </div>    
                      </div>



                    <div className='justify-between px-10 p-2'>
                      <div className='font-medium mb-4'>
                      USER ID :
                          </div> 
                          <div className='font-medium mb-4'>
                      EMAIL ID :
                          </div>
                          <div className='font-medium mb-4'>
                      PHONE NO. :
                          </div>
                          <div className='font-medium mb-4'>
                      PARENTS NAME :
                          </div> 
                          <div className='font-medium mb-4'>
                    BATCH :  
                      </div>
                      </div>

<div>
                      <div className='font-medium mb-4'>
                      SE20UCSE001
                      </div> 
                      <div className='font-medium mb-4'>
                      {email}
                          </div>
                          <div className='font-medium mb-4'>
                      0123456789
                          </div> 
                          <div className='font-medium mb-4'>
                      Student-parents
                          </div> 
                          <div className='font-medium mb-4'>
                      2020-2024
                          </div> 
                          
                      </div>
                  </div>
              </div>
              <Sidebar/>
            </div>
      </>
  )
}


