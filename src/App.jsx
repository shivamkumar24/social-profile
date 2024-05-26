import backgroundImage from "./Assets/bgphoto.png";
import ReelsTab from "./components/ReelsTab";
import ReelsBox from "./components/ReelsBox";
import StatusBar from "./components/StatusBar";
import BottomNavbar from "./components/BottomNavbar";
import ProfileHeader from "./components/ProfileHeader";
import ProfileSection from "./components/ProfileSection";

const App = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        margin: "auto",
        borderRadius: "25px",
        border: "1px solid black", // Remove this line after completing the code
        overflow: "hidden",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          overflowY: "scroll", // Make the content inside scrollable
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
          <StatusBar />

          {/* Profile Header */}
          <ProfileHeader />

          {/* Profile Section */}
          <ProfileSection />

          {/* Reels Tab */}
          <ReelsTab />

          {/* Reels Box */}
          <ReelsBox />
        </div>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
};

export default App;
