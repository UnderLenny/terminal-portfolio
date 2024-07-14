/* eslint-disable react/no-unescaped-entities */
import Image from "../../assets/ava.jpg";
import { differenceInYears } from "date-fns";

const About = () => {
  const dateOfBirth = new Date(2005, 0, 27);
  const age = differenceInYears(new Date(), dateOfBirth);

  return (
    <div className="px-8">
      <div className="flex items-center pt-2">
        <img
          src={Image}
          alt="Avatar"
          className="w-20 h-20 md:w-35 md:h-35 lg:w-40 lg:h-40 rounded-3xl p-3"
        />
        <div className="block">
          <div className="text-lg text-white text-[10px] md:text-[12px] lg:text-[20px] 2xl:text-[20px]">
            Leonid Gevorgyan 🍀
          </div>
          <h2 className="text-[12px] sm:text-[12px] lg:text-[19px] 2xl:text-[19px]">
            born {age} years ago
          </h2>
        </div>
      </div>
      <h1 className="pt-5 text-[12px] sm:text-[12px] lg:text-[20px] 2xl:text-[20px]">
        Hi! I'm a budding fullstack developer with skills in both frontend and
        backend development. I'm passionate about creating dynamic and
        user-friendly web applications and eager to grow in the field.
      </h1>
    </div>
  );
};

export default About;
