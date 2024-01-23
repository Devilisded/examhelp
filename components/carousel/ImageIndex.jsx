export const images = ["hi", "this", "is", "mayank"];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
