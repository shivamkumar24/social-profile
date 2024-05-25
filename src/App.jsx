import backgroundImage from "./Assets/bgphoto.png";
import connection from "./Assets/Connection.svg";
import wifi from "./Assets/Wifi.svg";
import battery from "./Assets/Battery.svg";
import backNavigate from "./Assets/Back.png";
import share from "./Assets/Share.svg";
import varified from "./Assets/Verified.svg";
import profilePic from "./Assets/DP.svg";
import instagram from "./Assets/Instagram.svg";
import youtube from "./Assets/YouTube.svg";
import plus from "./Assets/Plus.svg";
import frame from "./Assets/Frame.svg";
import group from "./Assets/Group.svg";
import allcontent from "./Assets/AllContent.svg";
import feedIcon from "./Assets/FeedIcon.svg";
import shopIcon from "./Assets/ShopIcon.svg";
import myItems from "./Assets/MyItems.svg";
import profileInfo from "./Assets/userProfileIcon.svg";

const App = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        borderRadius: "25px",
        border: "1px solid black", // Remove this line after complete the code
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          height: "315px",
          flexShrink: "0",
          color: "#ffffff",
          borderRadius: "25px 25px 0px 0px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Status Bar */}
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
          <p style={{ fontWeight: "bold" }}>9:41</p>

          {/* Battery, Connection and wifi */}
          <div style={{ display: "flex" }}>
            <img
              src={connection}
              alt="connection"
              style={{ margin: "0px 3px" }}
            />
            <img src={wifi} alt="wifi" style={{ margin: "0px 2px" }} />
            <img src={battery} alt="battery" style={{ margin: "0px 3px" }} />
          </div>
        </div>

        {/* Profile Header */}
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
            <p style={{ fontWeight: "bold" }}>startchild2.0_by_krissann...</p>
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

        {/* Rectangle Box */}
        <div
          style={{
            marginTop: "142px",
            backgroundColor: "#ffffff",
            // filter: "blur(26.399999618530273px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "88px",
                zIndex: 1,
                backgroundImage: `url(${profilePic})`,
              }}
            ></div>

            <div
              style={{
                width: "240px",
                height: "62px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {/* Instagram */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0px",
                  }}
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "block",
                      marginTop: "15px",
                      marginBottom: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#AB1AA1",
                      marginLeft: "4px",
                      marginBottom: "0px",
                    }}
                  >
                    1M
                  </p>
                </div>
                <p
                  style={{
                    color: "#8C8C8C",
                    textAlign: "center",
                    fontFamily: "Sharp Grotesk",
                    fontSize: "11px",
                    fontWeight: "400",
                    marginTop: "4px",
                  }}
                >
                  followers
                </p>
              </div>

              <p style={{ color: "#8C8C8C" }}>|</p>

              {/* YouTube */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0px",
                  }}
                >
                  <img
                    src={youtube}
                    alt="youtube"
                    style={{
                      width: "24px",
                      height: "24px",
                      display: "block",
                      marginTop: "15px",
                      marginBottom: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#FF487F",
                      marginLeft: "4px",
                      marginBottom: "0px",
                    }}
                  >
                    220K
                  </p>
                </div>
                <p
                  style={{
                    color: "#8C8C8C",
                    textAlign: "center",
                    fontFamily: "Sharp Grotesk",
                    fontSize: "11px",
                    fontWeight: "400",
                    marginTop: "4px",
                  }}
                >
                  Subscribers
                </p>
              </div>
            </div>
          </div>

          {/* About Profile */}
          <div
            style={{
              width: "90%",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#592EBF",
                    fontSize: "15px",
                    fontWeight: "600",
                    padding: "0px",
                    margin: "0px",
                    marginTop: "15px",
                  }}
                >
                  Starchild 2.0 by Krissann Barretto
                </p>
                <p style={{ color: "#4971FD", marginTop: "0px" }}>
                  Digital Creator
                </p>
              </div>

              <button
                style={{
                  color: "#ffffff",
                  height: "28px",
                  display: "flex",
                  backgroundColor: "#592EBF",
                  borderRadius: "6px",
                  alignItems: "center",
                  boxShadow: "2px 2px 0px 0px #AB1AA1",
                }}
              >
                <img src={plus} alt="plus" />
                Follow
              </button>
            </div>

            <div
              style={{
                color: "#1A3365",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "13px",
              }}
            >
              <p>Equalist | Animal lover | Happy child✨</p>
              <p>Social media - krissann@theplugmedia.in</p>
              <p>@theplugmedia.in Acting inquiries -</p>
              <p>teamkrissann@gmail.com@talentgram.agency</p>
            </div>
          </div>
        </div>

        {/* Reels Tab */}
        <div
          style={{
            height: "44px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img src={frame} alt="frame" />
          <img src={group} alt="group" />
          <img src={allcontent} alt="allcontent" />
        </div>

        {/* Reels Box */}
        <div style={{ display: "flex", gap: "1px" }}>
          <div
            style={{
              width: "128px",
              height: "202px",
              backgroundColor: "#D9D9D9",
              borderTop: "1px solid #592EBF",
            }}
          ></div>
          <div
            style={{
              width: "128px",
              height: "202px",
              backgroundColor: "#D9D9D9",
            }}
          ></div>
          <div
            style={{
              width: "128px",
              height: "202px",
              backgroundColor: "#D9D9D9",
            }}
          ></div>
        </div>

        {/* Bottom Navbar */}
        <div
          style={{
            display: "flex",
            height: "60px",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#05070B",
          }}
        >
          <img src={feedIcon} alt="feedIcon" />
          <img src={shopIcon} alt="shop" />
          <img src={myItems} alt="myItems" />
          <img src={profileInfo} alt="profileInfo" />
        </div>
      </div>
    </div>
  );
};

export default App;
