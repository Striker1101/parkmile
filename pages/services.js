import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import Image from "next/image";
function services(props) {
  const dispatch = useDispatch();
  let dummy = [
    "/services/img1.jpg",
    "/services/img2.jpg",
    "/services/img3.jpg",
    "/services/img4.jpg",
  ];
  let list = [
    "Robotic cage washing",
    "Robotic net washing in conjunction with Leco Marine",
    "Grid installation and removal",
    "Net changing",
    "Fish treating",
    "Cage towing",
    "Food transfer",
    "Fuel transfer",
    "Anchor handling / mooring systems for all types of commercial and private vessels",
    "Carriage of rock armor",
    "Dredging support",
    "A large amount of modular pontoons available, all road transportable",
    "Transfer of fuel and freshwater to other vessels",
    "Push / pull vessels",
    "Transfer of cargo and equipment with vessels own cranes and bough loading ramp",
    "Personnel transfers",
    "Deployment and retrieval of buoys",
    "Tanker hose handling",
    "Dive support",
    "Hydrographic survey",
    "Crane barge",
    "Marine civil engineering support",
  ];
  dispatch(navheader("services"));
  return (
    <div
      className="container"
      style={{
        margin: "0 10px",
        marginBottom: "40px",
      }}
    >
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dummy.map((item, i) => {
          return (
            <Image width={300} height={300} key={i} src={item} alt="item" />
          );
        })}
      </div>

      <h1>Services</h1>
      <p>Our vessels are suitable for the following services:</p>
      <ul className="lists">
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default services;
