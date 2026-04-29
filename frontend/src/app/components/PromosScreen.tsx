import { Coffee, Gift, Gamepad2, Sparkles, Tag, Users } from "lucide-react";

const PROMOS = [
  {
    icon: Sparkles,
    title: "Персональные предложения",
    text: "Привлечение внимания за счет «акций только для вас» отдельно для Апельсиновой карты и для каждого отдельного сервиса Перекрёстка/Пятёрочки перс. предложения.",
    accent: "#FF6A22",
    bg: "#FFF4ED",
  },
  {
    icon: Gift,
    title: "Эксклюзивные товары за рубль",
    text: "Ограниченные позиции за 1 ₽ для участников программы лояльности.",
    accent: "#FF3B30",
    bg: "#FFF1F0",
  },
  {
    icon: Gamepad2,
    title: "Игры при ожидании заказа",
    text: "Пока собирается заказ, участвуй в мини-играх и получай бонусы.",
    accent: "#3D5AFE",
    bg: "#EEF1FF",
  },
  {
    icon: Coffee,
    title: "Каждый 4 кофе + выпечка бесплатно",
    text: "Каждый 4 кофе+выпечка купленные по карте бесплатно.",
    accent: "#8B4513",
    bg: "#FFF7ED",
  },
  {
    icon: Tag,
    title: "2+1 от рекомендаций",
    text: "2+1 на товары, проанализированные рекомендательной системой.",
    accent: "#2CB248",
    bg: "#EFFAF2",
  },
  {
    icon: Users,
    title: "Приведи друга",
    text: "Приглашай друзей и получайте обоюдные бонусы.",
    accent: "#A855F7",
    bg: "#F8F2FF",
  },
];

export function PromosScreen() {
  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          borderRadius: "22px",
          overflow: "hidden",
          marginBottom: "14px",
          position: "relative",
          height: "180px",
          background: "linear-gradient(135deg, #FF6A22 0%, #FF3B30 100%)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
          alt="Кофе и выпечка"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "54%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.9,
          }}
        />
        <div style={{ position: "relative", padding: "14px 12px", maxWidth: "42%" }}>
          <div
            style={{
              background: "rgba(0,0,0,0.32)",
              color: "white",
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 9px",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Персональная акция
          </div>
          <div style={{ color: "white", fontSize: "19px", fontWeight: 900, lineHeight: 1.02, marginBottom: "5px", overflowWrap: "anywhere", wordBreak: "break-word" }}>
            Каждый 4 кофе
          </div>
          <div style={{ color: "white", fontSize: "14px", fontWeight: 700, lineHeight: 1.12, overflowWrap: "anywhere", wordBreak: "break-word" }}>
            и выпечка бесплатно
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#1F1F23",
          color: "white",
          borderRadius: "18px",
          padding: "12px 14px",
          marginBottom: "14px",
          fontSize: "13px",
          lineHeight: 1.35,
        }}
      >
        Акции только для вас: персональные сценарии для Апельсиновой карты, Пятёрочки и Перекрёстка.
      </div>

      <div style={{ display: "grid", gap: "10px" }}>
        {PROMOS.map((promo) => {
          const Icon = promo.icon;
          return (
            <div
              key={promo.title}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #ECECF2",
                padding: "12px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "11px",
                  background: promo.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color={promo.accent} />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2 }}>
                  {promo.title}
                </div>
                <div style={{ fontSize: "12px", color: "#63636C", marginTop: "3px", lineHeight: 1.3 }}>
                  {promo.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
