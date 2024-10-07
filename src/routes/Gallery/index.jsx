import { useLenis } from "lenis/react";

import "./gallery.css";
import { useContext, useEffect } from "react";
import { WorksContext } from "../../context";
import AnimatedLayout from "../../components/AnimatedLayout";

const Gallery = () => {
  const { selected } = useContext(WorksContext);
  console.log(selected);

  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  });

  return (
    <AnimatedLayout>
      {selected && (
        <div className="gallery-container">
          <div className="gallery-wrapper">
            <div className="gallery-text">
              <h2>{selected.title}</h2>
              <p className="story">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit illo doloremque sed! Eaque at blanditiis, impedit
                corrupti expedita mollitia culpa ea necessitatibus fugiat totam
                ullam sit cum eius nisi, aut nobis minus incidunt quos neque
                dolorum aperiam natus ipsum! Quasi dolore sequi fuga illo
                debitis saepe ad quaerat ipsa?0
              </p>
            </div>

            <div className="gallery-images-container">
              {selected.pictures.map((image, index) => (
                <div className="gallery-image-wrapper" key={index}>
                  <img src={image} alt="" className="gallery-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AnimatedLayout>
  );
};

export default Gallery;
