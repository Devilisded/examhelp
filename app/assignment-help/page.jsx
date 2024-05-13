import Footer from '@/components/footer/Footer'
import Header from '@/components/navbar/Navbar'
import { IconLink } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const slides = [
      {
        to: "/engineering-assignment-help",
        title: "Engineering Assignment Help",
      },
    
  ]
  return (
    <div>
        <Header/>
        <div className="flex justify-center py-5">
        <div className="w-[70%]">
          <div className="text-4xl text-semibold font-semibold flex flex-col gap-4 py-4">
            Sitemap
            <div className="w-full h-[2px] bg-gray-300/50"></div>
          </div>
          <div className="grid grid-cols-3 gap-5 py-4 ">
            {slides.map((item, index) => (
              <Link href={item.to} key={index}>
                <div
                  className="flex items-center text-blue-600 text-lg gap-1 justify-start"
                  key={item}
                >
                  <div className="text-slate-600">
                    <IconLink />
                  </div>
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default page
