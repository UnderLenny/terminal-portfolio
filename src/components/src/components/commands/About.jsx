import Image from "../../../../assets/ava.jpg";

const About = () => {
  return (
    <div>
      <div className="flex items-center pt-2">
        <img src={Image} alt="Avatar" className="w-40 h-40 rounded-3xl p-3" />
        <div className={"block"}>
          <div className="text-lg text-white">Leonid Gevorgyan 🍀</div>
          <h2>Date of birth: 27.01.2005</h2>
        </div>
      </div>
      <h1 className={"pt-5"}>
        Hi there! I'm an aspiring software developer who is always eager to
        learn and discover new things.
      </h1>
    </div>
  );
};

export default About;
