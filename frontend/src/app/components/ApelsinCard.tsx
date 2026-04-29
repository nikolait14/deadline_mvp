import { CreditCard, Plus, Minus, QrCode, ChevronRight, Zap } from "lucide-react";

const APELSIN_LOGO_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEX//wD2YQD1YQD3YQD3YAD4YQD3YQD3YQD3XQD3YAD3YQD5kk/93Mf7rHn///74dB//8+v9zq/4hDr7upD5eypJIxdJAAAACnRSTlMAIna83u3zkv4gcShIkwAAAL5JREFUOMutk8kCwiAMRMMSGoPY9f+/1da2QqiGg86RPMKSGYBVxjqPgQsF9M4aOGSRPwrtXu/4q7rXfla09jCoAWj0BlsLpwMOvA54QB1ACDoQgH8E+G8AUV04V3aA4v2iSCWQHhclAcQrIDv0Q10fehKXHGtgJPmKqQYmCTDNsj7T+dXvYYlDxjyLPO6ix1yMOxtm/a1je6TCMIXliJeYUlyYSstZOYBN0rQN29/awWlHrx3eM/7hfTsKOf5Pp6onNCM5mToAAAAASUVORK5CYII=";

interface ApelsinCardProps {
  balance: number;
  setBalance: (b: number) => void;
  dimmed: boolean;
}

export function ApelsinCard({ balance, setBalance, dimmed }: ApelsinCardProps) {
  const handleEarn = () => setBalance(balance + 100);
  const handleSpend = () => {
    if (balance >= 50) setBalance(balance - 50);
  };

  const formatted = balance.toLocaleString("ru-RU");

  return (
    <div className="px-4 pt-4 pb-2">
      <div
        style={{
          background: "linear-gradient(135deg, #FF8C42 0%, #FF5310 100%)",
          borderRadius: "28px",
          padding: "20px",
          boxShadow: "0 8px 28px rgba(255, 94, 26, 0.28)",
          opacity: dimmed ? 0.55 : 1,
          filter: dimmed ? "grayscale(0.15)" : "none",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Декоративные круги */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "140px",
            height: "140px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "-20px",
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "50%",
          }}
        />

        {/* Заголовок карты */}
        <div className="flex items-center justify-between" style={{ marginBottom: "16px", position: "relative" }}>
          <div className="flex items-center gap-2">
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={APELSIN_LOGO_DATA_URL}
                alt="Лого Апельсина"
                style={{ width: "26px", height: "26px", objectFit: "contain" }}
              />
            </div>
            <div>
              <span style={{ color: "white", fontSize: "16px", fontWeight: 700, letterSpacing: "-0.3px" }}>
                Апельсин
              </span>
              <span
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "11px",
                }}
              >
                Карта лояльности
              </span>
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              borderRadius: "12px",
              padding: "6px 10px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CreditCard size={14} color="white" />
            <span style={{ color: "white", fontSize: "12px", fontWeight: 600 }}>МИР</span>
          </div>
        </div>

        {/* Баланс */}
        <div style={{ marginBottom: "18px", position: "relative" }}>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", marginBottom: "4px" }}>
            Баланс бонусов
          </div>
          <div
            style={{
              color: "white",
              fontSize: "42px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {formatted}
            <span style={{ fontSize: "18px", fontWeight: 500, marginLeft: "6px", letterSpacing: 0 }}>
              бонусов
            </span>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3" style={{ marginBottom: "14px", position: "relative" }}>
          <button
            onClick={handleEarn}
            className="flex items-center justify-center gap-2 flex-1"
            style={{
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(6px)",
              border: "none",
              padding: "11px 0",
              borderRadius: "40px",
              color: "white",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <Plus size={15} strokeWidth={2.5} />
            Накопить
          </button>
          <button
            onClick={handleSpend}
            className="flex items-center justify-center gap-2 flex-1"
            style={{
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(6px)",
              border: "none",
              padding: "11px 0",
              borderRadius: "40px",
              color: "white",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <Minus size={15} strokeWidth={2.5} />
            Списать
          </button>
        </div>

        {/* Футер карты */}
        <div
          style={{
            borderTop: "0.5px solid rgba(255,255,255,0.25)",
            paddingTop: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Zap size={13} color="rgba(255,255,255,0.9)" fill="rgba(255,255,255,0.9)" />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px" }}>
              Кешбэк 7% в Пятёрочке и Перекрёстке
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
