// import { LOGO } from "../../Routes/Route";
import "./Overlay.css";

const Overlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0, // Add right: 0 to make it fill the width
        bottom: 0, // Add bottom: 0 to make it fill the height
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* <img width={45} src={LOGO.logoAxons} alt="LogoAxons" /> */}
      <div
        className="loader"
        // style={{ position: "absolute", zIndex: 1 }}
      ></div>
      {/* <p>Loading...</p> */}
    </div>
    // <div
    //   style={{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     right: 0, // Add right: 0 to make it fill the width
    //     bottom: 0, // Add bottom: 0 to make it fill the height
    //     backgroundColor: "rgba(0, 0, 0, 0.5)",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     zIndex: 1000,
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Spin
    //       indicator={
    //         <LoadingOutlined
    //           style={{
    //             fontSize: 24,
    //             color: "#fff",
    //           }}
    //           spin
    //         />
    //       }
    //     />
    //     <p
    //       style={{
    //         fontSize: 18,
    //         color: "#fff",
    //       }}
    //     >
    //       Loading
    //     </p>
    //   </div>
    // </div>
  );
};

export default Overlay;
