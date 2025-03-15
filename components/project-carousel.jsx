import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProjectCarousel({filteredProjects}) {
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent>
        {filteredProjects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="p-4">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <div key={index} className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h1>
                        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md mb-8">
                       
                            <h2 className="text-xl font-semibold mb-5">
                                Project Highlight
                            </h2>
                                <div 
                                // className="grid grid-cols-2 gap-6 p-4"
                                className="flex flex-col"
                                >
                                    <div 
                                    // className="grid grid-rows-2 gap-6 p-4 text-justify w-2/3"
                                    className="grid gap-6 p-4 text-justify w-2/3"
                                    >
                                        {/*project details*/}
                                        <section>
                                        <h2 className="text-xl font-normal mb-1.5">{project.title}</h2>
                                        <h4 className="text-xl font-extralight">Business Challenge</h4>
                                        <p className="text-gray-700 mb-6">{project.details.challenge}</p>
                                        <h4 className="text-xl font-extralight">Our Solution</h4>
                                        <p className="text-md text-gray-700 mb-4">
                                            {project.details.solution}
                                        </p>
                                        <h4 className="text-xl font-extralight">Implementation</h4>
                                        <p className="text-md text-gray-700 mb-5">
                                            {project.details.remark}
                                        </p>
                                        </section>

                                        {/*source and demo */}
                                        <div className="flex h-5 items-center space-x-4 text-sm">
                                        <div className="flex flex-col items-start">
                                            <div>source</div><br/>
                                            {
                                            project.source.length === 0 ? 
                                            <p className="text-xs">No Source Available</p> :
                                            project.source.map((source, index) => {
                                                return (
                                                <ul key={index}>
                                                    <li>
                                                    <Link  
                                                        href={source} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-xs"
                                                    >
                                                    {source}
                                                    </Link>
                                                    </li>
                                                </ul>
                                                )
                                            })}
                                        </div>
                                        
                                        <Separator orientation="vertical" className="mx-6"/>
                                        
                                        <div className="flex flex-col items-start">
                                            <div>Demo</div>
                                            <Link key={index} 
                                                href={project.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-xs"
                                            >
                                            {project.demo}
                                            </Link>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="grid grid-rows-2 gap-6 w-1/3">
                                        {/* Image and Video */}
                                        {/* {
                                        project.images &&
                                        <Image src="/images/sample-filteredProjects.jpg" 
                                                alt="Project Screenshot" 
                                                // className="w-full rounded-lg shadow-md"
                                                width={20}
                                                height= {20}
                                        />
                                        } */}
                                        {/* {
                                        project.video &&
                                        <video controls className="w-full rounded-lg shadow-md">
                                            <source src="/videos/sample-recording.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        } */}
                                    </div>
                                </div>

                        </div> 
                    </div>

                    {/* Back to Services Button */}
                    <div className="mt-10">
                    <Link href="/services" 
                            className="px-6 py-3 bg-primary text-white 
                                        rounded-lg shadow-md 
                                        hover:bg-indigo-700 transition">
                        Back to All Services
                    </Link>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
