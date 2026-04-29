import { useState } from "react";
import { ChevronRight, CreditCard, Landmark } from "lucide-react";

interface QRPaySectionProps {
  onTopUp: (amount: number) => void;
}

export function QRPaySection({ onTopUp }: QRPaySectionProps) {
  const [bindOpen, setBindOpen] = useState(false);
  const [topUpOpen, setTopUpOpen] = useState(false);
  const [linkedCard, setLinkedCard] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [maxCharge, setMaxCharge] = useState("5000");
  const [bindMessage, setBindMessage] = useState("");
  const [topUpMethod, setTopUpMethod] = useState<"bank" | "sbp">("bank");
  const [source, setSource] = useState("");
  const [topUpAmount, setTopUpAmount] = useState("1000");
  const [topUpMessage, setTopUpMessage] = useState("");

  const handleBindCard = () => {
    const digits = cardNumber.replace(/\D/g, "");
    const limit = Number(maxCharge);
    if (digits.length < 16 || digits.length > 19) {
      setBindMessage("Введите корректный номер карты.");
      return;
    }
    if (!Number.isFinite(limit) || limit <= 0) {
      setBindMessage("Укажите корректный лимит списания.");
      return;
    }
    setLinkedCard(`**** ${digits.slice(-4)} • лимит ${limit.toLocaleString("ru-RU")} ₽/операция`);
    setBindMessage("Карта привязана. Автосписание активировано.");
    setCardNumber("");
  };

  const handleTopUp = () => {
    const amount = Number(topUpAmount);
    if (!Number.isFinite(amount) || amount <= 0) {
      setTopUpMessage("Введите сумму пополнения больше 0.");
      return;
    }
    if (topUpMethod === "bank" && source.replace(/\D/g, "").length < 16) {
      setTopUpMessage("Введите номер карты для пополнения.");
      return;
    }
    if (topUpMethod === "sbp" && source.trim().length < 6) {
      setTopUpMessage("Введите телефон или банк для СБП.");
      return;
    }
    onTopUp(amount);
    setTopUpMessage(`Баланс пополнен на ${amount.toLocaleString("ru-RU")} ₽.`);
    setSource("");
  };

  return (
    <div className="px-4 pb-4">
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={() => setBindOpen((v) => !v)}
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #F0F0F5",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            cursor: "pointer",
            padding: "14px 12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#1A1A1A",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CreditCard size={24} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "3px" }}>
              Привязать карту
            </div>
            <div style={{ fontSize: "12px", color: "#8E8E93", lineHeight: 1.3 }}>
              При нехватке средств списание автоматически пройдет с карты другого банка
            </div>
          </div>
          <ChevronRight size={18} color="#C7C7CC" />
        </button>
        {bindOpen && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #F0F0F5",
              padding: "12px",
              marginTop: "-4px",
            }}
          >
            <div style={{ fontSize: "12px", color: "#8E8E93", marginBottom: "8px" }}>
              {linkedCard ? `Привязана: ${linkedCard}` : "Карта еще не привязана"}
            </div>
            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Номер карты другого банка"
              style={{ width: "100%", border: "1px solid #E5E5EA", borderRadius: "10px", padding: "10px", fontSize: "13px", marginBottom: "8px" }}
            />
            <input
              value={maxCharge}
              onChange={(e) => setMaxCharge(e.target.value)}
              placeholder="Макс. сумма списания за раз, ₽"
              style={{ width: "100%", border: "1px solid #E5E5EA", borderRadius: "10px", padding: "10px", fontSize: "13px", marginBottom: "8px" }}
            />
            <button
              onClick={handleBindCard}
              style={{ width: "100%", background: "#1A1A1A", color: "white", border: "none", borderRadius: "10px", padding: "10px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
            >
              Сохранить привязку
            </button>
            {bindMessage && <div style={{ marginTop: "8px", fontSize: "12px", color: "#63636C" }}>{bindMessage}</div>}
          </div>
        )}

        <button
          onClick={() => setTopUpOpen((v) => !v)}
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #F0F0F5",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            cursor: "pointer",
            padding: "14px 12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#FF6A22",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Landmark size={24} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "3px" }}>
              Пополнить
            </div>
            <div style={{ fontSize: "12px", color: "#8E8E93", lineHeight: 1.3 }}>
              Пополнение с карты другого банка или через СБП
            </div>
          </div>
          <ChevronRight size={18} color="#C7C7CC" />
        </button>
        {topUpOpen && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              border: "1px solid #F0F0F5",
              padding: "12px",
              marginTop: "-4px",
            }}
          >
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <button
                onClick={() => setTopUpMethod("bank")}
                style={{ flex: 1, border: "none", borderRadius: "9px", padding: "8px", cursor: "pointer", background: topUpMethod === "bank" ? "#FF6A22" : "#F2F2F7", color: topUpMethod === "bank" ? "white" : "#1A1A1A", fontSize: "12px", fontWeight: 600 }}
              >
                С карты
              </button>
              <button
                onClick={() => setTopUpMethod("sbp")}
                style={{ flex: 1, border: "none", borderRadius: "9px", padding: "8px", cursor: "pointer", background: topUpMethod === "sbp" ? "#FF6A22" : "#F2F2F7", color: topUpMethod === "sbp" ? "white" : "#1A1A1A", fontSize: "12px", fontWeight: 600 }}
              >
                Через СБП
              </button>
            </div>
            <input
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder={topUpMethod === "bank" ? "Номер карты списания" : "Телефон или банк для СБП"}
              style={{ width: "100%", border: "1px solid #E5E5EA", borderRadius: "10px", padding: "10px", fontSize: "13px", marginBottom: "8px" }}
            />
            <input
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
              placeholder="Сумма пополнения, ₽"
              style={{ width: "100%", border: "1px solid #E5E5EA", borderRadius: "10px", padding: "10px", fontSize: "13px", marginBottom: "8px" }}
            />
            <button
              onClick={handleTopUp}
              style={{ width: "100%", background: "#FF6A22", color: "white", border: "none", borderRadius: "10px", padding: "10px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
            >
              Пополнить баланс
            </button>
            {topUpMessage && <div style={{ marginTop: "8px", fontSize: "12px", color: "#63636C" }}>{topUpMessage}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
