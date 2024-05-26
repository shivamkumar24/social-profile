import connection from "../Assets/Connection.svg";
import wifi from "../Assets/Wifi.svg";
import battery from "../Assets/Battery.svg";

const StatusBar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "40px",
        padding: "14.182px 25.715px 6.182px 35.605px",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: "0",
      }}
    >
      {/* Time */}
      <p
        style={{
          fontSize: "16.387px",
          fontWeight: "400",
          fontStyle: "normal",
          fontFamily: "Roboto",
          lineHeight: "normal",
        }}
      >
        9:41
      </p>

      {/* Battery, Connection and wifi */}
      <div style={{ display: "flex" }}>
        <img src={connection} alt="connection" style={{ margin: "0px 3px" }} />
        <img src={wifi} alt="wifi" style={{ margin: "0px 2px" }} />
        <img src={battery} alt="battery" style={{ margin: "0px 3px" }} />
      </div>
    </div>
  );
};

export default StatusBar;
