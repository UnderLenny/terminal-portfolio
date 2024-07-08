import Image from "../../../../assets/ava.jpg";

const About = () => {
  return (
    <div className={"px-8"}>
      <div className="flex items-center pt-2">
        <img src={Image} alt="Avatar" className="w-40 h-40 rounded-3xl p-3" />
        <div className={"block"}>
          <div className="text-lg text-white">Leonid Gevorgyan 🍀</div>
          <h2>Date of birth: 27.01.2005</h2>
        </div>
      </div>
      <h1 className={"pt-5"}>
        Hi! I'm a budding fullstack developer with skills in both frontend and
        backend development. I'm passionate about creating dynamic and
        user-friendly web applications and eager to grow in the field.
      </h1>
    </div>
  );
};

export default About;
