import { ReactNode } from "react";
import { Home, ShoppingBag, ShoppingCart, User, Tag } from "lucide-react";

type NavId = "home" | "catalog" | "cart" | "promos" | "profile";

interface BottomNavProps {
  activeNav: NavId;
  setActiveNav: (nav: NavId) => void;
}

const NAV_ITEMS: { id: NavId; icon: (active: boolean) => ReactNode; label: string }[] = [
  {
    id: "home",
    icon: (active) => <Home size={22} color={active ? "#FF6A22" : "#8E8E93"} fill={active ? "#FF6A22" : "none"} />,
    label: "Главная",
  },
  {
    id: "catalog",
    icon: (active) => <ShoppingBag size={22} color={active ? "#FF6A22" : "#8E8E93"} />,
    label: "Каталог",
  },
  {
    id: "cart",
    icon: (active) => (
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            background: active ? "#FF6A22" : "#F2F2F7",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-20px",
            boxShadow: active ? "0 4px 12px rgba(255,106,34,0.35)" : "0 2px 8px rgba(0,0,0,0.1)",
            transition: "all 0.2s",
          }}
        >
          <Tag size={22} color={active ? "white" : "#8E8E93"} />
        </div>
      </div>
    ),
    label: "Акции",
  },
  {
    id: "promos",
    icon: (active) => <ShoppingCart size={22} color={active ? "#FF6A22" : "#8E8E93"} />,
    label: "Корзина",
  },
  {
    id: "profile",
    icon: (active) => <User size={22} color={active ? "#FF6A22" : "#8E8E93"} />,
    label: "Профиль",
  },
];

export function BottomNav({ activeNav, setActiveNav }: BottomNavProps) {
  return (
    <div
      style={{
        position: "sticky",
        bottom: 0,
        background: "white",
        borderTop: "0.5px solid #E9E9EF",
        paddingBottom: "env(safe-area-inset-bottom, 8px)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          padding: "8px 0 6px",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3px",
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: "0 8px",
                minWidth: "52px",
              }}
            >
              {item.icon(isActive)}
              <span
                style={{
                  fontSize: "10px",
                  color: isActive ? "#FF6A22" : "#8E8E93",
                  fontWeight: isActive ? 600 : 400,
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  marginTop: item.id === "cart" ? "2px" : 0,
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
