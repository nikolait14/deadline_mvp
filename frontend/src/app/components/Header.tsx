import { MapPin, Bell, Search, ChevronRight } from "lucide-react";

export function Header() {
  return (
    <div
      className="bg-white sticky top-0 z-10"
      style={{ borderBottom: "0.5px solid #E9E9EF" }}
    >
      {/* Address row */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <button className="flex items-center gap-1.5 flex-1 min-w-0">
          <MapPin size={16} color="#FF6A22" fill="#FF6A22" strokeWidth={0} />
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  letterSpacing: "-0.2px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "220px",
                  display: "block",
                }}
              >
                Москва, ул. Ленина, 5
              </span>
            </div>
            <span style={{ fontSize: "12px", color: "#8E8E93" }}>
              Адрес доставки или магазин
            </span>
          </div>
          <ChevronRight size={16} color="#8E8E93" />
        </button>
        <div className="flex items-center gap-3 ml-2">
          <button
            className="relative flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "#F5F5F5" }}
          >
            <Bell size={18} color="#1A1A1A" />
            <span
              className="absolute -top-0.5 -right-0.5 flex items-center justify-center rounded-full"
              style={{
                width: "16px",
                height: "16px",
                background: "#FF6A22",
                color: "white",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              3
            </span>
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 pb-3">
        <div
          className="flex items-center gap-2 px-3"
          style={{
            background: "#F2F2F7",
            borderRadius: "14px",
            height: "42px",
          }}
        >
          <Search size={16} color="#8E8E93" />
          <span style={{ fontSize: "15px", color: "#8E8E93" }}>
            Поиск товаров и акций
          </span>
        </div>
      </div>
    </div>
  );
}
