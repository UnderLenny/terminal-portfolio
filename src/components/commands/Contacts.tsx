import { SiGithub, SiAmazonsimpleemailservice } from "react-icons/si";

const Contact = () => {
  return (
    <div className={"flex gap-28 px-8"}>
      <div
        className={"text-green-700 font-semibold flex flex-col justify-between"}
      >
        <p
          className={
            "flex items-center gap-2 text-[12px] sm:text-[12px] lg:text-[20px]"
          }
        >
          <SiGithub />
          github
        </p>
        <p
          className={
            "flex items-center gap-2 text-[12px] sm:text-[12px] lg:text-[20px]"
          }
        >
          <SiAmazonsimpleemailservice />
          email
        </p>
      </div>
      <div className={"font-semibold flex flex-col justify-between"}>
        <a
          href="https://github.com/UnderLenny"
          className={
            "text-[12px] sm:text-[12px] lg:text-[20px] block hover:text-white transition ease-in-out delay-60"
          }
        >
          https://github.com/UnderLenny
        </a>
        <a
          href="mailto:leonidgev@gmail.com"
          className={
            "text-[12px] sm:text-[12px] lg:text-[20px] block hover:text-white transition ease-in-out delay-60"
          }
        >
          leonidgev@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
