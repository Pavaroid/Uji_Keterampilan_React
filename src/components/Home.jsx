import React from "react";

function Home() {
  return (
    <div>
      <header>
        <h1>Home Page</h1>
        <p>
          Welcome to the home page! This is a simple React application to
          demonstratw basic features.
        </p>
      </header>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Features 1: Deskripsi fitur 1</li>
          <li>Features 2: Deskripsi fitur 2</li>
          <li>Features 3: Deskripsi fitur 3</li>
        </ul>
      </section>

      <section>
        <h2>Gallery</h2>
        <div className="gallery">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder Image 1"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder Image 2"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder Image 3"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
