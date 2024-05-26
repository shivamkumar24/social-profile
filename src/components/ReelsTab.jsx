import frame from "../Assets/Frame.svg";
import group from "../Assets/Group.svg";
import allcontent from "../Assets/AllContent.svg";

const ReelsTab = () => {
  return (
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
  );
};

export default ReelsTab;
