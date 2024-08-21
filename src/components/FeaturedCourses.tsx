'use client'
import CourseData from "../data/music_courses.json"
import Link from "next/link"
import { Button } from "./ui/moving-border"
import { BackgroundGradient } from "./ui/background-gradient"
import { TypewriterEffect } from "./ui/typewriter-effect"

interface Course{
        id:number,
        title: String,
        slug: String,
        description: String,
        price: number,
        instructor: String,
        isFeatured: boolean,
        
}

const FeaturedCourses = () => {
    const featuredCourses = CourseData.courses.filter((course:Course)=>course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
        <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"><TypewriterEffect words={[{text: "Featured"},{text:"Courses",className:"font-semibold"}]} /></h2>
                    <TypewriterEffect words={[{text:"Learn",className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl"},{text:"with",className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl"},{text:"the",className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl"},{text:"best",className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl"}]}/>
            </div>
            
            <div> <div className="mt-10"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {
                featuredCourses.map((course:Course)=>(
                    <div key = {course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))
            }
                
            </div>
            </div>


        <div> <div className=" mt-20 text-center"><Button
        borderRadius="1.75rem"
        className="text-black dark:text-white border-neutral-200 dark:border-800 "
      ><Link href='/courses'>View All courses</Link></Button></div></div> 
    </div>
  )
}

export default FeaturedCourses