import { useEffect, useState } from "react";

const description =
  "A very efficient way to study for Exams and Classes without breaking a sweat. Actually.";

const descriptionArray = description.split("");

const HeroHeading = () => {
  const [currentDescription, setCurrentDescription] = useState({
    index: 0,
    currentDescriptionArray: [],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription((oldDescription) => {
        if (oldDescription.index > descriptionArray.length) {
          clearInterval(interval);
        }
        typeof oldDescription.currentDescriptionArray.concat(
          descriptionArray[oldDescription.index]
        );
        return {
          index: oldDescription.index + 1,
          currentDescriptionArray:
            oldDescription.currentDescriptionArray.concat(
              descriptionArray[oldDescription.index]
            ),
        };
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="text-center mt-16 mb-16 ubuntu-mono-regular">
      <h1 className="text-5xl font-bold text-white mb-4 ">
        Online Quiz Manager
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        {currentDescription.currentDescriptionArray.join("")}
      </p>
    </div>
  );
};

export default HeroHeading;
