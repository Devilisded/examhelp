import helpImg from "@/public/images/help.webp";

const Help = () => {
  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center gap-8">
      <div className="text-5xl font-semibold pb-4">How do we help ?</div>

      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md gap-16">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={helpImg.src} alt="" className="h-full object-cover" />
        </div>
        <div className="p-6">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Lyft launching cross-platform service this week
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
