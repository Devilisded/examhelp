import { IconUser } from "@tabler/icons-react";

const Card = () => {
  return (
    <div class="p-6 text-white w-[70%]">
      <div className="flex gap-4 ">
        <div className="w-7 h-7 bg-blue-600 text-white  rounded flex justify-center items-center">
          <IconUser className="w-5 h-5 " />
        </div>
        <h5 class="mb-2 block font-sans text-xl font-semibold ">Mayank</h5>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea
        expedita dolore iure voluptates suscipit consequatur exercitationem eum
        officiis maiores.
      </p>
    </div>
  );
};

export default Card;
