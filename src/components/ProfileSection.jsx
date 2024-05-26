import profilePic from "../Assets/DP.svg";
import instagram from "../Assets/Instagram.svg";
import youtube from "../Assets/YouTube.svg";
import plus from "../Assets/Plus.svg";

const ProfileSection = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        backgroundColor: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundImage: "linear-gradient(#D9D9D9, #ffffff)",
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
            alignItems: "center",
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
                  width: "20px",
                  height: "20px",
                  display: "block",
                }}
              />
              <p
                style={{
                  height: "100%",
                  padding: "0px",
                  margin: "0px",
                  fontFamily: "Domaine Display",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontSize: "23px",
                  textAlign: "center",
                  fontWeight: "600",
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
                fontFamily: "Space Grotesk",
                fontSize: "11px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
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
                  width: "20px",
                  height: "20px",
                  display: "block",
                }}
              />
              <p
                style={{
                  height: "100%",
                  padding: "0px",
                  margin: "0px",
                  fontFamily: "Domaine Display",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontSize: "23px",
                  textAlign: "center",
                  fontWeight: "600",
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
                fontFamily: "Space Grotesk",
                fontSize: "11px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
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
                overflow: "hidden",
                color: "#592EBF",
                fontSize: "15px",
                textOverflow: "ellipsis",
                fontFamily: "Domaine Display",
                fontStyle: "normal",
                lineHeight: "normal",
                fontWeight: "600",
                padding: "0px",
                margin: "0px",
                marginTop: "15px",
              }}
            >
              Starchild 2.0 by Krissann Barretto
            </p>
            <p
              style={{
                color: "#4971FD",
                marginTop: "0px",
                fontSize: "11px",
                fontWeight: "400",
                fontFamily: "Space Grotesk",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Digital Creator
            </p>
          </div>

          <button
            style={{
              color: "#ffffff",
              height: "28px",
              width: "116px",
              padding: "8px",
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              backgroundColor: "#592EBF",
              borderRadius: "6px",
              alignItems: "center",
              boxShadow: "2px 2px 0px 0px #AB1AA1",
            }}
          >
            <img src={plus} alt="plus" />
            <p
              style={{
                overflow: "hidden",
                textAlign: "center",
                textOverflow: "ellipsis",
                fontFamily: "Space Grotesk",
                fontSize: "11px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Follow
            </p>
          </button>
        </div>

        <div
          style={{
            color: "#1A3365",
            fontSize: "12px",
            fontFamily: "Space Grotesk",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "13px",
          }}
        >
          <p style={{ margin: "0px" }}>
            Equalist | Animal lover | Happy child✨
          </p>
          <p style={{ margin: "0px" }}>
            Social media - krissann@theplugmedia.in
          </p>
          <p style={{ margin: "0px" }}>@theplugmedia.in Acting inquiries -</p>
          <p style={{ margin: "0px" }}>
            teamkrissann@gmail.com@talentgram.agency
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
