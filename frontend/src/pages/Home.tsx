import React from 'react';
import headshot from '../JoelHiltonHeadshot.jpg';

export const centerText = {
  textAlign: 'center' as const,
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={centerText}>Welcome to the Joel Hilton Movie Collection!</h1>
        <br />
        <img
          src={headshot}
          alt="Joel Hilton"
          className="rounded mx-auto d-block"
        />
        <br />
        <h3 style={centerText}>
          This is the website for my movie collection! Feel free to take a look
          around.
        </h3>
      </div>
    );
  }
}

export default Home;
