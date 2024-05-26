import backNavigate from "../Assets/Back.png";
import share from "../Assets/Share.svg";
import varified from "../Assets/Verified.svg";

const ProfileHeader = () => {
  return (
    <div
      style={{
        height: "57px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: "0px 20px 24px 0px rgba(0, 0, 0, 0.03)",
      }}
    >
      <img
        src={backNavigate}
        alt="backNavigate"
        style={{ width: "19px", height: "19px" }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: "500",
            fontFamily: "Space Grotesk",
            fontSize: "15px",
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          startchild2.0_by_krissann...
        </p>
        <img
          src={varified}
          alt="varified"
          style={{ width: "16px", height: "16px" }}
        />
      </div>
      <div
        style={{
          display: "inline-flex",
          height: "20px",
          padding: "6px 7px 6px 5px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderRadius: "15.999px",
          flexShrink: "0",
        }}
      >
        <img
          src={share}
          alt="share"
          style={{ width: "20px", height: "20px" }}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
