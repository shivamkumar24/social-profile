import feedIcon from "../Assets/FeedIcon.svg";
import shopIcon from "../Assets/ShopIcon.svg";
import myItems from "../Assets/MyItems.svg";
import profileInfo from "../Assets/userProfileIcon.svg";

const BottomNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#05070B",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={feedIcon}
          alt="feedIcon"
          style={{ height: "24px", width: "24px" }}
        />
        <p
          style={{
            color: "#ffffff",
            fontSize: "10px",
            fontFamily: "Sharp Grotesk",
            fontWeight: "400",
            lineHeight: "normal",
            fontStyle: "normal",
            margin: "2px 0px 0px 0px",
          }}
        >
          Feed
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={shopIcon}
          alt="shop"
          style={{ height: "24px", width: "24px" }}
        />
        <p
          style={{
            color: "#B4B4B4",
            fontSize: "10px",
            fontFamily: "Sharp Grotesk",
            fontWeight: "400",
            lineHeight: "normal",
            fontStyle: "normal",
            margin: "2px 0px 0px 0px",
          }}
        >
          Shop
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={myItems}
          alt="myItems"
          style={{ height: "24px", width: "24px" }}
        />
        <p
          style={{
            color: "#B4B4B4",
            fontSize: "10px",
            fontFamily: "Sharp Grotesk",
            fontWeight: "400",
            lineHeight: "normal",
            fontStyle: "normal",
            margin: "2px 0px 0px 0px",
          }}
        >
          My Items
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={profileInfo}
          alt="profileInfo"
          style={{ height: "24px", width: "24px" }}
        />
        <p
          style={{
            color: "#B4B4B4",
            fontSize: "10px",
            fontFamily: "Sharp Grotesk",
            fontWeight: "400",
            lineHeight: "normal",
            fontStyle: "normal",
            margin: "2px 0px 0px 0px",
          }}
        >
          Me
        </p>
      </div>
    </div>
  );
};

export default BottomNavbar;
