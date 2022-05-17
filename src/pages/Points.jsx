import React from "react";
import { Box } from "./../components/Box";
import { Info } from "./../components/Info";
import { Button } from "./../components/Button";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdDoNotDisturbAlt } from "react-icons/md";
export const Points = () => {
  return (
    <div className=" points-page row">
      <div className="col-md-8">
        <Box title="RECENT ACTIVITY">
          <div className="d-flex flex-column">
            <Confirm className="mt-3" />
            <div className="d-flex flex-column mt-3">
              <Activity
                className="my-3"
                date="March 19, 2019"
                text="OFFER - Grant Complete access to Zappos for 50% off next purchase"
              />
              <Activity
                className="my-3"
                date="March 19, 2019"
                text="Log in (new device) - hulu.com"
              />
              <Activity
                className="my-3"
                date="March 19, 2019"
                text="Log in (new device) - hulu.com"
              />
              <Activity
                className="my-3"
                date="March 19, 2019"
                text="Log in (new device) - hulu.com"
                price={2.5}
              />
              <Button className="mx-auto mt-3" isOutline style={{ width: 116 }}>
                Show more{" "}
              </Button>
            </div>
          </div>
        </Box>
      </div>
      <div className="col-md-4 d-flex flex-column">
        <Box title="MESSAGE CENTER" info="messages">
          <div className="notification-container mt-3">
            <div className="notification-icon"></div>
            <div className="ml-2 my-auto notification-text">
              Smart Offer Notification
            </div>
            <div className="notification-close my-auto ml-auto">
              <GrClose color="#2ac6aa" />
            </div>
          </div>
          <div className="d-flex mt-4">
            <Button className="mx-auto" isOutline style={{ width: 116 }}>
              Settings
            </Button>
          </div>
        </Box>
        <Box title="MARX POINTS BALANCE" className="mt-4" info="balance">
          <div className="marx-balance mt-3">12486</div>
          <div className="d-flex mt-4 justify-content-center">
            <Button className="" isOutline style={{ width: 116 }}>
              Earn free points
            </Button>
            <Button className="ml-3" style={{ width: 116 }}>
              REDEEM
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};
const Confirm = ({ onYes = () => {}, onNo = () => {}, className = "" }) => {
  return (
    <div className={`confirm-container ${className}`}>
      <div className="confirm-container-date my-auto">March 19, 2019</div>
      <div className="confirm-container-text1 ml-4 my-auto">
        You bought this....
      </div>
      <div className="confirm-container-text2 ml-auto my-auto">
        Was this you?
      </div>
      <button className="ml-3 confirm-container-button yes my-auto">
        <span className="ml-auto mr-1">Yes</span>
        <FaCheck color="#0f0" className="my-auto" />
      </button>
      <button className="ml-2 confirm-container-button no my-auto">
        <span>No</span>
        <MdDoNotDisturbAlt color="red" />
      </button>
    </div>
  );
};

const Activity = ({
  date,
  text,
  className,
  onApprove = () => {},
  onDismiss = () => {},
  price,
}) => {
  return (
    <div className={`activity-container ${className}`}>
      <div className="activity-container-date my-auto">{date}</div>
      <div className="activity-container-text my-auto">{text}</div>
      <button className="activity-container-approve ml-auto my-auto">
        Approve
      </button>
      <button className="activity-container-dismiss ml-2 my-auto">
        Dismiss
      </button>
      <Info className="ml-1 my-auto" />
    </div>
  );
};
