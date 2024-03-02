import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"


const Disclaimer = () => {
    return (
        <div className="w-full">
            <Navbar/>
            <div className="mt-5"> 
            <h1 className=" text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl text-blue-600">
              Disclaimer
            </h1>
            <div>
                <div className="px-10 md:px-0 text-center md:text-left text-slate-600 font-sans font-normal m-5 text-xl mx-auto max-w-7xl pb-10">
                <p>All the information on this website - https://examhelp.online - is published in good faith and for general information purposes only. Exam Help Online does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take based on the information you find on this website (Exam Help Online) is strictly at your own risk. Exam Help Online will not be liable for any losses or damages caused by using our website.</p>
                <br></br>
                <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and occur before we can remove a link that may have gone 'bad'.</p>
                <br></br>
                <p>Please also be aware that when you leave our website, other sites may have different privacy policies and terms beyond our control. Please check the Privacy Policies of these sites and their "Terms of Service" before engaging in any business or uploading any information.</p>
                <br></br>
                <h2 className="font-semibold">Consent</h2>
                <p> Using our website, you consent to our disclaimer and agree to its terms.</p>
                <br></br>
                <h2 className="font-semibold">Update</h2>
                <p>Should we update, amend, or make any changes to this document, those changes will be prominently posted here.</p>
                <br></br>
                <p>If you require more information or have any questions about our site's disclaimer, please feel free to contact us by email at info@examhelp.online.</p>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Disclaimer