import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Percent } from "./components/Percent";
import { Tab } from "./components/Tab";
import { Points } from "./pages/Points";
import { Permissions } from "./pages/Permissions";
import { Wallet } from "./pages/Wallet";
import { Settings } from "./pages/Settings";
import { TabContent } from "./components/TabContent";
import { Layout } from "./components/Layout";
import { useInput } from "./useInput";

const tabData = [
  {
    id: "Points & Activity",
    title: "Points & Activity",
  },
  {
    id: "Your Wallet",
    title: "Your Wallet",
  },
  {
    id: "Permissions",
    title: "Permissions",
  },
  {
    id: "Account Settings",
    title: "Account Settings",
  },
];
function App() {
  const tab = useInput(tabData[0].id);
  return (
    <Layout>
      <div className="profile-page">
        <div className="profile-first-section">
          <img
            className="profile-page-avatar"
            src="https://me.mymarx.io/assets/brands/profile-placeholder.png"
            alt="placeholder"
          />
          <div className="profile-page-info">
            <div className="profile-page-info-name">Elmer Fudd</div>
            <div className="profile-page-info-member">
              MEMBER SINCE AUG 2018
            </div>
          </div>
          <Percent percent={74} className="ml-auto" />
        </div>
        <div className="position-relative">
          <Tab className="mt-4" data={tabData} {...tab} />
          <TabContent>
            {tab.value === tabData[0].id ? (
              <Points />
            ) : tab.value === tabData[1].id ? (
              <Wallet />
            ) : tab.value === tabData[2].id ? (
              <Permissions />
            ) : tab.value === tabData[3].id ? (
              <Settings />
            ) : null}
          </TabContent>
        </div>
      </div>
    </Layout>
  );
}

export default App;
