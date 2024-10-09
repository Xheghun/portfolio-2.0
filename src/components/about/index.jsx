import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={`col-span-8 row-span-2 flex-col items-start`}>
          <h2 className="text-2xl w-full text-left capitalize">
            Pioneer of Performance
          </h2>
          <p className="font-light">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum
          </p>
        </ItemLayout>

        <ItemLayout className={`col-span-4 text-accent`}>
          <p className="font-semibold w-full text-left text-5xl">
            25+<sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={`col-span-4 text-accent`}>
          <p className="font-semibold w-full text-left text-5xl">
            25+
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={`col-span-8 p-0`}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=xheghun&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="david github stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={`col-span-4 p-0`}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Xheghun&hide=html,css,php,objective-c,hack,cmake,JavaScript&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="david github top languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={`col-span-full`}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=kotlin,ktor,java,dart,swift,js,html,css,php,react,apple,azure,bitbucket,devto,docker,figma,xd,firebase,flutter,git,gitlab,gradle,graphql,idea,materialui,maven,mysql,netlify,nodejs,psotman,stackoverflow,unity,npm,sass,sentry,svg,vscode"
            alt="david skill icons"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={`col-span-6 !p-0`}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=xheghun&theme=dark&hide_border=true&mode=weekly&exclude_days=Sun%2CSat&background=FFFFFF00&ring=FEFE5B&currStreakLabel=FEFE5B&fire=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={`col-span-6 !p-0`}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=xheghun&repo=jetpack_mvvm_sample&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&hide_border=true"
            alt="GitHub repo"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
