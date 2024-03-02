import './loader.css';
const Loader = () => {
	return (
		// <div className="load-pict z-[100]">
		// 	<img
		// 		src="/images/testing2.gif"
		// 		alt="loading..."
		// 		loading="lazy"
		// 	/>
		// </div>
		<div class=' load-pict z-[100] flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-8 w-8 bg-white rounded-full animate-bounce'></div>
</div>
	);
};

export default Loader;
