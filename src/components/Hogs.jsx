import { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function Hogs({ hog }) {
  const [hogDetails, setHogDetails] = useState(false);
  const [hideCard, setHideCard] = useState(true);

  const handleTileClick = () => {
    setHogDetails((prev) => !prev);
  };

  const handleHideCard = (e) => {
    setHideCard((prev) => !prev);
  };

  return (
    <div>
      {hideCard && (
        <Card onClick={handleTileClick} className="ui eight wide column">
          <Image src={hog.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{hog.name}</Card.Header>
            <Card.Description>
              {hogDetails && (
                <div>
                  <h3>Specialty: {hog.specialty}</h3>
                  <h3>Weight: {hog.weight}</h3>
                  <h3>Greased: {hog.greased ? "/" : "X"}</h3>
                  <h3>
                    highest medal achieved: {hog["highest medal achieved"]}
                  </h3>
                </div>
              )}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <button onClick={handleHideCard}>Hide</button>
          </Card.Content>
        </Card>
      )}
    </div>
    // <div style={{ border: "2px solid" }} onClick={handleTileClick}>
    //   <h2>{hog.name}</h2>
    //   {hogDetails && (
    //     <div>
    //       <h3>Specialty: {hog.specialty}</h3>
    //       <h3>Weight: {hog.weight}</h3>
    //       <h3>Greased: {hog.greased ? "/" : "X"}</h3>
    //       <h3>highest medal achieved: {hog["highest medal achieved"]}</h3>
    //     </div>
    //   )}
    //   <img src={hog.image} alt={hog.name} width="400px" />
    // </div>
  );
}

export default Hogs;
