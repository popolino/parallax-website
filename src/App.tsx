import React, { useEffect } from "react";
import "./App.css";
import "./assets/scss/reset.scss";
import "./assets/scss/global.scss";
import clsx from "clsx";

function App() {
  useEffect(() => {
    const onScroll: EventListener = () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    };
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <header>
        <div className="layers">
          <div className="layer-header">
            <h1>Welcome to Parallax</h1>
            <p>Fairy Forest</p>
          </div>
          <div className={clsx("layer", "layer_base")} />
          <div className={clsx("layer", "layer_middle")} />
          <div className={clsx("layer", "layer_front")} />
        </div>
      </header>
      <article className="main-article">
        <div>
          <h1>To be continued</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            dignissimos, ex impedit labore modi necessitatibus non optio
            repellendus reprehenderit sapiente!
          </p>
        </div>
      </article>
    </div>
  );
}

export default App;
