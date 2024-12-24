import RocketTile from "./rocketTile";
import RocketsData from "./rocketsData";

export default function Rockets() {
  return (
    <div>
      {RocketsData.map((rocket, index) => (
        <RocketTile
          colored={index % 2 !== 0}
          title={rocket.title}
          subtitle={rocket.subtitle}
          description={rocket.description}
          key={index}
        />
      ))}
    </div>
  );
}
