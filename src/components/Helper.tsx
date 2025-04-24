import React, { FC, useState } from "react";

export default function Helper() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const windowSteps = [
    <div className="w-[80%] mockup-window bg-base-100 border border-gray-300">
      <div className="place-content-center h-[500px]"></div>
    </div>,
    <div className="w-[80%] mockup-window bg-base-100 border border-gray-300">
      <div className="grid place-content-center h-[500px]">Hello 2</div>
    </div>,
    <div className="w-[80%] mockup-window bg-base-100 border border-gray-300">
      <div className="grid place-content-center h-[500px]">Hello 3</div>
    </div>,
    <div className="w-[80%] mockup-window bg-base-100 border border-gray-300">
      <div className="grid place-content-center h-[500px]">Hello 4</div>
    </div>,
    <div className="w-[80%] mockup-window bg-base-100 border border-gray-300">
      <div className="grid place-content-center h-[500px]">Hello 4</div>
    </div>,
  ];
  const HeroSteps = [
    <div className="hero w-[80%]">
      <div className="hero-content text-center">
        <div className="w-full">
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium dolore nihil facilis dicta. Voluptates, tempore aperiam
            voluptatem sequi corporis libero natus eaque amet, explicabo
            accusamus adipisci quam earum modi doloribus!
          </p>
        </div>
      </div>
    </div>,
    <div className="hero w-[80%]">
      <div className="hero-content text-center">
        <div className="w-full">
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium dolore nihil facilis dicta. Voluptates, tempore aperiam
            voluptatem sequi corporis libero natus eaque amet, explicabo
            accusamus adipisci quam earum modi doloribus!
          </p>
        </div>
      </div>
    </div>,
    <div className="hero w-[80%]">
      <div className="hero-content text-center">
        <div className="w-full">
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium dolore nihil facilis dicta. Voluptates, tempore aperiam
            voluptatem sequi corporis libero natus eaque amet, explicabo
            accusamus adipisci quam earum modi doloribus!
          </p>
        </div>
      </div>
    </div>,
    <div className="hero w-[80%]">
      <div className="hero-content text-center">
        <div className="w-full">
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium dolore nihil facilis dicta. Voluptates, tempore aperiam
            voluptatem sequi corporis libero natus eaque amet, explicabo
            accusamus adipisci quam earum modi doloribus!
          </p>
        </div>
      </div>
    </div>,
    <div className="hero w-[80%]">
      <div className="hero-content text-center">
        <div className="w-full">
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium dolore nihil facilis dicta. Voluptates, tempore aperiam
            voluptatem sequi corporis libero natus eaque amet, explicabo
            accusamus adipisci quam earum modi doloribus!
          </p>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="h-full w-full flex flex-col gap-2 items-center">
      {/* <div className="w-[80%] text-center">
        <h1 className="text-[32px] font-bold">Accueil</h1>
        <p className="text-balance">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          obcaecati harum suscipit corrupti, aut aspernatur totam aliquam libero
          esse quasi, laboriosam maxime quam iusto accusamus ab enim. Vero,
          temporibus esse?
        </p>
      </div> */}
      <Steps currentIndex={currentIndex} />
      <div className="w-full h-[75vh] flex flex-col items-center">
        {HeroSteps[currentIndex]}
        {windowSteps[currentIndex]}
      </div>
      <div className="flex justify-between w-[60%]">
        <button
          disabled={currentIndex == 0}
          className={`btn ${
            currentIndex > 0
              ? "btn-outline btn-ghost "
              : "btn-outline btn-primary"
          }`}
          onClick={() => {
            setCurrentIndex((c) => c - 1);
          }}
        >
          retour{" "}
        </button>
        <button
          disabled={currentIndex == 4}
          className={`btn ${
            currentIndex < 4
              ? "btn-outline btn-ghost"
              : "btn-outline btn-primary"
          }`}
          onClick={() => {
            setCurrentIndex((c) => c + 1);
          }}
        >
          suivant
        </button>
      </div>
    </div>
  );
}

interface StepsProps {
  currentIndex: number;
}

const Steps: FC<StepsProps> = ({ currentIndex }) => {
  return (
    <ul className="w-[80%] h-20 opacity-80 steps steps-vertical lg:steps-horizontal">
      <li className={`step ${currentIndex >= 0 ? "step-primary" : ""}`}>
        Navigations
      </li>
      <li className={`step ${currentIndex >= 1 ? "step-primary" : ""}`}>
        Graphique
      </li>
      <li className={`step ${currentIndex >= 2 ? "step-primary" : ""}`}>
        Simulation
      </li>
      <li className={`step ${currentIndex >= 3 ? "step-primary" : ""}`}>
        Algorihtme
      </li>
      <li className={`step ${currentIndex >= 4 ? "step-primary" : ""}`}>
        Base de donnée
      </li>
    </ul>
  );
};
