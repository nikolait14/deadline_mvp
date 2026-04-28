import { QrCode, ChevronRight } from "lucide-react";

export function QRPaySection() {
  return (
    <div className="px-4 pb-4">
      <div
        className="flex items-center gap-3 p-4"
        style={{
          background: "#FFFFFF",
          borderRadius: "20px",
          border: "1px solid #F0F0F5",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          cursor: "pointer",
        }}
      >
        {/* QR icon block */}
        <div
          style={{
            width: "56px",
            height: "56px",
            background: "#1A1A1A",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <QrCode size={28} color="white" />
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <div className="flex items-center gap-2" style={{ marginBottom: "3px" }}>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A" }}>
              Апельсин Пэй
            </span>
            <span
              style={{
                background: "#FF6A22",
                color: "white",
                fontSize: "10px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "20px",
              }}
            >
              Новинка
            </span>
          </div>
          <span style={{ fontSize: "12px", color: "#8E8E93" }}>
            Оплата по QR-коду — бонусы в 1 касание
          </span>
        </div>

        <ChevronRight size={18} color="#C7C7CC" />
      </div>
    </div>
  );
}
