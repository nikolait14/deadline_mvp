import { Wifi, Battery } from "lucide-react";

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 py-2 bg-white" style={{ paddingTop: "14px" }}>
      <span style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.3px" }}>13:25</span>
      <div className="flex items-center gap-1.5">
        <div className="flex gap-[2px] items-end h-3">
          {[3, 5, 7, 9].map((h, i) => (
            <div
              key={i}
              style={{
                width: "3px",
                height: `${h}px`,
                background: i < 3 ? "#1A1A1A" : "#D1D1D6",
                borderRadius: "1px",
              }}
            />
          ))}
        </div>
        <Wifi size={14} strokeWidth={2} color="#1A1A1A" />
        <div className="flex items-center gap-[2px]">
          <div
            style={{
              width: "24px",
              height: "12px",
              border: "1.5px solid #1A1A1A",
              borderRadius: "3px",
              padding: "1.5px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "75%",
                height: "100%",
                background: "#1A1A1A",
                borderRadius: "1px",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "-4px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "2px",
                height: "5px",
                background: "#1A1A1A",
                borderRadius: "0 1px 1px 0",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
