
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Handshake, CodeXml, Brain, Landmark, Rocket, ChevronsDown } from 'lucide-react'
import Image from 'next/image';
import Sankan from '/public/Sankan.svg';

export default function Bottomcard(){
    return <>
       <Card className="bg-black w-full lg:w-[500px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>  
                            <div className="w-[50px] h-[50px] lg:w-[50px] lg:w-[50px] p-2.5 rounded-full text-white border-[0.2vh] lg:border-[0.5vh] inline-flex">
                              <Handshake className="text-3xl"/> 
                            </div>
                            <div className="w-[50px] h-[50px] lg:w-[50px] lg:w-[50px] p-2.5 rounded-full text-white border-[0.2vh] lg:border-[0.5vh] inline-flex ml-2 lg:ml-5 ">
                                <CodeXml className="text-3xl"/> 
                            </div>
                            <div className="w-[50px] h-[50px] lg:w-[50px] lg:w-[50px] p-2.5 rounded-full text-white border-[0.2vh] lg:border-[0.5vh] inline-flex ml-2 lg:ml-5 ">
                                <Brain className="text-3xl"/> 
                            </div>

                            <div className="w-[50px] h-[50px] lg:w-[50px] lg:w-[50px] p-2.5 rounded-full text-white border-[0.2vh] lg:border-[0.5vh] inline-flex ml-2 lg:ml-5 ">
                                <Landmark className="text-3xl"/> 
                            </div>

                            <div className="w-[50px] h-[50px] lg:w-[50px] lg:w-[50px] p-2.5 rounded-full text-white border-[0.2vh] lg:border-[0.5vh] inline-flex ml-1 lg:ml-5 ">
                                <Rocket className="text-3xl"/> 
                            </div>

                            <div className=" w-[50px] h-[50px] lg:w-[50px] lg:w-[50px] p-2.5 rounded-full text-white border-none ml-[14vh] lg:ml-[20vh] ">
                                <ChevronsDown className="text-3xl "/> 
                            </div>
                            <div className=" w-[70px] h-[70px] lg:w-[70px] lg:w-[70px] p-2.5 rounded-full text-white border-none ml-[14vh] lg:ml-[18vh] ">
                               <Image src={Sankan} alt="Company logo" className="rounded-full"/>
                            </div>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </>
}