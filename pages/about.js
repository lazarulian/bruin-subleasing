import { Container } from "postcss";
import React from "react";
import Image from "next/image";
import housingImage from "public/static/images/uclahousing.jpeg";

const about = () => {
  const missionStatments = [
    "Our mission is to provide a platform for students who are looking to sublease their apartments to other students. We understand that the process of finding a subletter can be time-consuming, stressful, and often confusing. Therefore, we aim to simplify the process and create a safe and efficient space for students to find their ideal subletter.",
    "At our core, we believe in the importance of community and collaboration. We recognize that students are faced with a multitude of challenges during their college experience, including financial pressures, academic stress, and social isolation. Our platform seeks to address these challenges by providing a space where students can come together and support each other.",
    "Our platform offers a user-friendly interface that allows students to easily navigate the subleasing process. We prioritize the safety of our users and ensure that all subletters are verified before being allowed to access the platform. We understand the importance of trust and transparency in any subleasing agreement, and we work hard to provide a secure and reliable platform for our users.",
    "We strive to provide a space that fosters community and helps students connect with one another. Our goal is to create a supportive environment where students can help each other out and make the most out of their college experience. We believe that by creating a space for students to sublease their apartments, we can help alleviate some of the financial burdens that students often face.",
    "Join us in our mission to revolutionize the subleasing process for students and create a community that values collaboration, convenience, and safety. Together, we can build a future where students can focus on what really matters - their education and personal growth.",
  ];

  return (
    <div className="container mx-auto lg:px-10 mb-8">
      <div className="flex justify-center text-center align-middle">
        <div className="rounded-xl bg-slate-200 p-5 m-5 aspect-square lg:w-1/2">
          <h1 className="text-3xl">About Us</h1>
          <Image
            src={housingImage}
            alt="UCLA Housing Image"
            width={1000}
            className="py-4 rounded-3xl"
          />
          {missionStatments.map((missionStatment) => (
            <p className="pb-5" key={0}>
              {missionStatment}
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
