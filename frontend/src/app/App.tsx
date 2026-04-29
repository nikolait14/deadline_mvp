import { useState } from "react";
import { StatusBar } from "./components/StatusBar";
import { Header } from "./components/Header";
import { ApelsinCard } from "./components/ApelsinCard";
import { QRPaySection } from "./components/QRPaySection";
import { StoreTabs } from "./components/StoreTabs";
import { TabContent } from "./components/TabContent";
import { BottomNav } from "./components/BottomNav";
import { PromosScreen } from "./components/PromosScreen";

type TabId = "pyat" | "perek" | "partners" | "chizhik";
type NavId = "home" | "catalog" | "cart" | "promos" | "profile";

export default function App() {
  const [balance, setBalance] = useState(1250);
  const [activeTab, setActiveTab] = useState<TabId>("pyat");
  const [activeNav, setActiveNav] = useState<NavId>("home");

  const isDimmed = activeTab === "chizhik";
  const isPromosNav = activeNav === "cart";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F2F7",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          minHeight: "100vh",
          background: "#FFFFFF",
          boxShadow: "0 0 60px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <StatusBar />
        <Header />

        {/* Scrollable content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            paddingBottom: "8px",
            background: "#F8F8FC",
          }}
        >
          {!isPromosNav ? (
            <>
              {/* Card zone – white bg */}
              <div style={{ background: "white" }}>
                <ApelsinCard
                  balance={balance}
                  setBalance={setBalance}
                  dimmed={isDimmed}
                />
                <QRPaySection />
                <StoreTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>

              {/* Tab content */}
              <TabContent activeTab={activeTab} />
            </>
          ) : (
            <PromosScreen />
          )}
        </div>

        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </div>
  );
}
