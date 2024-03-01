import React from "react";

const SkillSection = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center"
      id="skills"
    >
      <div>
        <p className="text-4xl xl:text-5xl font-bold flex justify-center mb-24">
          Skills
        </p>
        <a href="https://skillicons.dev">
          <img
            src="https://skillicons.dev/icons?i=js,ts,html,css,tailwind,arduino,figma,react,nextjs,linux,mongodb,mysql,git,postman,py,selenium,vscode,c,discord,firebase,php&amp;perline=7"
            width="700"
            height="700"
          />
        </a>
      </div>
    </section>
  );
};

export default SkillSection;
