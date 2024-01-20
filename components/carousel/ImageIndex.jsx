import image1 from "@/public/images/price.jpg";
import image2 from "@/public/images/price_11.jpg";
import image3 from "@/public/images/help.webp";
import image4 from "@/public/images/backgnd.jpg";

export const images = [image1.src, image2.src, image3.src, image4.src];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
