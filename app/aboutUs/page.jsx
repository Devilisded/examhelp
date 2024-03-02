import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"


const Aboutus = () => {
    return (
        <div>
            <Navbar/>
            <div class="py-8">
            <h2 class="my-4 font-bold text-center text-5xl ">About <span class="text-blue-700">Us</span>
            </h2>
            <div className=" grid md:grid-cols-2">
    <div class="w-full ">
        <div class="flex justify-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="w-full flex justify-center items-center">
        <div class="w-[80%]">
        
            Welcome to Exam Help Online, your top place for exam prep and tutoring services. We aim to help students succeed by providing great exam prep tools and personalized academic support.

            Established in 2010, Exam Help Online was created by teachers who understand students' challenges when prepping for big exams. We aim to take the stress out of test prep by offering:

            Complete study guides and cheat sheets covering key concepts for major standardized tests. Tutors and teachers design our study materials with years of test prep experience.
            Access 24/7 to online practice tests modeled closely after the real exams. Our tests are designed to help you identify strengths and weaknesses so you can focus your study time effectively.
            One-on-one tutoring with instructors who specialize in your exam. Get personalized support, ask questions, review mistakes, and gain confidence. Our tutors have scored in the top 10% on the exams they teach.
            On-demand homework help and subject tutoring. Whether you need help mastering algebra, writing an essay, or studying for a biology test, our tutors are here to help students of all ages and grades.

            At Exam Help Online, we want each student to achieve their full potential. We offer affordable test prep programs, flexible tutoring options, and great customer service. Thousands of students have used our services to get into their dream colleges and do well in school.

            Contact us today to learn how we can customize a test prep or tutoring program to match your specific needs and goals. We look forward to helping you succeed!<br></br>

            Email us at info@examhelp.online

          
        </div>
    </div>
    </div>
</div>
            <Footer/>
        </div>
    )
}

export default Aboutus
