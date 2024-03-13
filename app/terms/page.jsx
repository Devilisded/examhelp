import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"


const Terms = () => {
    return (
        <div className="pt-6 flex-col items-center justify-center h-screen">
            <Navbar/>
            <section
            className={`bg-slate-200 dark:bg-gray-900 mt-[60px] w-full flex justify-center`}/>
            <div className="text-center"> 
            <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl text-blue-700">
              Terms & Conditions
            </h1>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Terms
