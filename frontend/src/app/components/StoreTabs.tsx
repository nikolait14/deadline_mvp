type TabId = "pyat" | "perek" | "partners" | "chizhik";

interface StoreTabsProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const TABS: { id: TabId; label: string }[] = [
  { id: "pyat", label: "Пятёрочка" },
  { id: "perek", label: "Перекрёсток" },
  { id: "partners", label: "Партнёры" },
  { id: "chizhik", label: "Чижик" },
];

export function StoreTabs({ activeTab, setActiveTab }: StoreTabsProps) {
  const getActiveColor = (id: TabId) => {
    if (id === "pyat") return "#FF6A22";
    if (id === "perek") return "#2CB248";
    if (id === "partners") return "#3D5AFE";
    return "#2CB248";
  };

  const getActiveBg = (id: TabId) => {
    if (id === "pyat") return "#FFF3EC";
    if (id === "perek") return "#EFF7F0";
    if (id === "partners") return "#EFF2FF";
    return "#EFF7F0";
  };

  return (
    <div
      style={{
        padding: "0 16px 12px",
        borderBottom: "0.5px solid #E9E9EF",
        display: "flex",
        gap: "4px",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flexShrink: 0,
              padding: "9px 14px",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              color: isActive ? getActiveColor(tab.id) : "#8E8E93",
              background: isActive ? getActiveBg(tab.id) : "transparent",
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
