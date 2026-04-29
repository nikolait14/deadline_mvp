import { ShoppingCart, Star, ChevronRight, Scan, Truck, Tag, Sparkles, Gift, Gamepad2, Coffee, Users } from "lucide-react";

type TabId = "pyat" | "perek" | "partners" | "chizhik";

interface TabContentProps {
  activeTab: TabId;
}

const COFFEE_BANNER_IMG = "/items/pyaterochka/coffee.jpg";
const BULOCHKA_BANNER_IMG = "/items/perekrestok/bulochka.jpg";
const ALFA_BANK_LOGO = "/items/partners/alfa-main.png";
const ALFA_STRAH_LOGO = "/items/partners/alfa-strah.png";
const BEELINE_LOGO = "/items/partners/beeline.jpg";

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <span style={{ fontSize: "17px", fontWeight: 700, color: "#1A1A1A" }}>{title}</span>
      {action && (
        <button className="flex items-center gap-0.5" style={{ color: "#FF6A22", fontSize: "14px", fontWeight: 600 }}>
          {action}
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}

function ProductCard({
  img,
  name,
  price,
  oldPrice,
  unit,
  rating,
  discount,
  green,
}: {
  img: string;
  name: string;
  price: string;
  oldPrice?: string;
  unit: string;
  rating: number;
  discount?: number;
  green?: boolean;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "10px",
        width: "150px",
        flexShrink: 0,
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        border: "1px solid #F0F0F0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", marginBottom: "8px" }}>
        <div
          style={{
            width: "100%",
            height: "110px",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#F8F8F8",
          }}
        >
          <img
            src={img}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {discount && (
          <span
            style={{
              position: "absolute",
              top: "6px",
              left: "6px",
              background: "#FFCC00",
              color: "#1A1A1A",
              fontSize: "11px",
              fontWeight: 700,
              padding: "2px 6px",
              borderRadius: "6px",
            }}
          >
            -{discount}%
          </span>
        )}
      </div>
      <div className="flex items-center gap-1 mb-1">
        <Star size={11} fill="#FFA500" color="#FFA500" />
        <span style={{ fontSize: "11px", color: "#666" }}>{rating}</span>
      </div>
      <div style={{ fontSize: "13px", color: "#1A1A1A", marginBottom: "6px", lineHeight: 1.3, minHeight: "50px" }}>
        {name}
        <span style={{ color: "#8E8E93", fontSize: "11px" }}> {unit}</span>
      </div>
      <div className="flex items-center justify-between" style={{ marginTop: "auto" }}>
        <div style={{ minHeight: "42px" }}>
          {oldPrice && (
            <div style={{ fontSize: "11px", color: "#8E8E93", textDecoration: "line-through" }}>
              {oldPrice} ₽
            </div>
          )}
          <span style={{ fontSize: "15px", fontWeight: 700, color: "#FF3B30" }}>
            {price} ₽
          </span>
        </div>
        <button
          style={{
            width: "30px",
            height: "30px",
            background: green ? "#2CB248" : "#FF6A22",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <ShoppingCart size={14} color="white" />
        </button>
      </div>
    </div>
  );
}

function PersonalPromosBlock({ tone = "orange" }: { tone?: "orange" | "green" }) {
  const isGreen = tone === "green";
  const border = isGreen ? "#D4EFD9" : "#EFEFF4";
  const accent = isGreen ? "#2CB248" : "#FF6A22";
  const bg = isGreen ? "#EFFAF2" : "#FFF6F1";

  const promoCards = [
    {
      icon: Sparkles,
      title: "Персональные предложения",
      text: "Акции только для вас: отдельно для Апельсиновой карты и сервисов Перекрёстка/Пятёрочки.",
    },
    {
      icon: Gift,
      title: "Эксклюзивные товары за рубль",
      text: "Подборка ограниченных товаров за 1 ₽ для участников.",
    },
    {
      icon: Gamepad2,
      title: "Игры при ожидании заказа",
      text: "Мини-игры с бонусами, пока заказ в сборке.",
    },
    {
      icon: Coffee,
      title: "Каждый 4 кофе + выпечка бесплатно",
      text: "Покупай по карте и получай каждый 4 набор free.",
    },
    {
      icon: Tag,
      title: "2+1 от рекомендательной системы",
      text: "Персональная механика 2+1 на товары из рекомендаций.",
    },
    {
      icon: Users,
      title: "Приведи друга",
      text: "Получите обоюдные бонусы после первой покупки друга.",
    },
  ];

  return (
    <div style={{ background: "white", borderRadius: "18px", border: `1px solid ${border}`, marginBottom: "16px", padding: "10px" }}>
      <div style={{ background: bg, borderRadius: "12px", padding: "10px", marginBottom: "10px", fontSize: "12px", color: "#444" }}>
        Персональная лента предложений формируется под ваш профиль и активность в сервисах.
      </div>
      <div style={{ display: "grid", gap: "8px" }}>
        {promoCards.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              style={{
                background: "#FCFCFE",
                border: "1px solid #F0F1F6",
                borderRadius: "12px",
                padding: "10px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={17} color={accent} />
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>{item.title}</div>
                <div style={{ fontSize: "12px", color: "#60606B", marginTop: "2px", lineHeight: 1.28 }}>{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PyaterochkaSection() {
  return (
    <div>
      {/* Промо-баннер */}
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "16px",
          position: "relative",
          height: "160px",
          background: "linear-gradient(135deg, #FF6A22 0%, #FF3B30 100%)",
        }}
      >
        <img
          src={COFFEE_BANNER_IMG}
          alt="banner"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "55%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
        <div style={{ position: "relative", padding: "18px 16px" }}>
          <div
            style={{
              background: "rgba(0,0,0,0.35)",
              color: "white",
              fontSize: "13px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "6px",
              display: "inline-block",
              marginBottom: "8px",
            }}
          >
            Акция
          </div>
          <div style={{ color: "white", fontSize: "14px", fontWeight: 800, lineHeight: 1.1, maxWidth: "44%", overflowWrap: "anywhere", wordBreak: "break-word" }}>
            Оформи карту Апельсин и получи каждое 4 кофе или выпечку бесплатно
          </div>
        </div>
      </div>

      {/* Еженедельные акции */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { icon: <Tag size={22} color="#FF6A22" />, label: "Еженедельные акции Пятёрочка" },
          { icon: <Tag size={22} color="#FF6A22" />, label: "Еженедельные акции Перекрёсток" },
          { icon: <Tag size={22} color="#FF6A22" />, label: "Еженедельные акции Апельсин-карты" },
          { icon: <Tag size={22} color="#FF6A22" />, label: "Еженедельные акции партнёров" },
        ].map((item, i) => (
          <button
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              padding: "10px 4px",
              background: "white",
              borderRadius: "14px",
              border: "1px solid #F0F0F0",
              cursor: "pointer",
            }}
          >
            {item.icon}
            <span style={{ fontSize: "10px", color: "#666", textAlign: "center", lineHeight: 1.2 }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Суперцены недели */}
      <SectionTitle title="Суперцены недели" action="Все" />
      <div
        className="flex gap-3 pb-2 mb-4"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        <ProductCard img="/items/pyaterochka/razor.jpg" name="Бритвы Красная цена одноразовые мужские" price="159" oldPrice="229" unit="5 шт" rating={4.7} discount={31} />
        <ProductCard img="/items/pyaterochka/cheese.jpg" name="Сыр EmandHof Hard Экстра колотый" price="249" oldPrice="339" unit="за упак" rating={4.8} discount={27} />
        <ProductCard img="/items/pyaterochka/beans.jpg" name="Фасоль Global Village белая" price="99" oldPrice="139" unit="450 г" rating={4.9} discount={29} />
      </div>

      <SectionTitle title="Акции только для вас" />
      <PersonalPromosBlock tone="orange" />

      {/* Список покупок */}
      <SectionTitle title="Список покупок" action="+ добавить" />
      <div
        style={{
          background: "white",
          borderRadius: "18px",
          border: "1px solid #EFEFF4",
          marginBottom: "16px",
          overflow: "hidden",
        }}
      >
        {[
          { name: "Молоко Простоквашино", price: "79" },
          { name: "Хлеб Бородинский", price: "45" },
          { name: "Сыр Российский", price: "299" },
        ].map((item, i, arr) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-3"
            style={{
              borderBottom: i < arr.length - 1 ? "1px solid #F5F5F5" : "none",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 500, color: "#1A1A1A" }}>{item.name}</span>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#FF6A22" }}>{item.price} ₽</span>
          </div>
        ))}
      </div>

      {/* Любимые категории */}
      <div
        style={{
          background: "linear-gradient(135deg, #FEF9F0, #FFF0E5)",
          borderRadius: "18px",
          padding: "14px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          border: "1px solid #FFE5CC",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A", marginBottom: "3px" }}>
            Любимые категории
          </div>
          <div style={{ fontSize: "13px", color: "#666" }}>20% кешбэка бонусами</div>
        </div>
        <div
          style={{
            background: "#FF6A22",
            color: "white",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Выбрать
        </div>
      </div>
    </div>
  );
}

function PerekrestokSection() {
  return (
    <div>
      {/* Промо-баннер */}
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "16px",
          position: "relative",
          height: "160px",
          background: "linear-gradient(135deg, #2CB248 0%, #1A7D30 100%)",
        }}
      >
        <img
          src={BULOCHKA_BANNER_IMG}
          alt="banner"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "55%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
        <div style={{ position: "relative", padding: "18px 16px" }}>
          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              color: "white",
              fontSize: "13px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "6px",
              display: "inline-block",
              marginBottom: "8px",
            }}
          >
            Акция
          </div>
          <div style={{ color: "white", fontSize: "14px", fontWeight: 800, lineHeight: 1.1, maxWidth: "44%", overflowWrap: "anywhere", wordBreak: "break-word" }}>
            Оформи карту Апельсин и получи каждое 4 кофе или выпечку бесплатно
          </div>
        </div>
      </div>

      {/* Я в магазине */}
      <div
        style={{
          background: "white",
          borderRadius: "18px",
          border: "1px solid #F0F0F0",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            background: "#EFF2FF",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Tag size={20} color="#3D5AFE" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Я в магазине</div>
          <div style={{ fontSize: "13px", color: "#8E8E93", marginTop: "2px" }}>
            Информация о товарах и другое
          </div>
        </div>
        <ChevronRight size={18} color="#C7C7CC" style={{ marginLeft: "auto" }} />
      </div>

      {/* Скидки недели */}
      <SectionTitle title="Скидки недели" action="Больше" />
      <div
        className="flex gap-3 pb-2 mb-4"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        <ProductCard img="/items/perekrestok/pasta.jpg" name="Паста Перекрёсток Select Карбонара" price="239" oldPrice="329" unit="за упак" rating={4.8} discount={27} green />
        <ProductCard img="/items/perekrestok/tvorog.jpg" name="Творог 5% Зелёная Линия" price="119" oldPrice="159" unit="за шт" rating={4.9} discount={25} green />
        <ProductCard img="/items/perekrestok/mozzarella.jpg" name="Сыр Galbani Моцарелла 45%" price="229" oldPrice="299" unit="за упак" rating={4.7} discount={23} green />
      </div>

      <SectionTitle title="Акции только для вас" />
      <PersonalPromosBlock tone="green" />

      {/* Доставка */}
      <div
        style={{
          background: "#F0FAF3",
          borderRadius: "18px",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
          border: "1px solid #D4EFD9",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            background: "#2CB248",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Truck size={20} color="white" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Доставка за 30 минут</div>
          <div style={{ fontSize: "13px", color: "#666", marginTop: "2px" }}>Персональные купоны в Клубе</div>
        </div>
      </div>

      {/* Сканируй и заказывай */}
      <div
        style={{
          background: "#F0FAF3",
          borderRadius: "18px",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          border: "1px solid #D4EFD9",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            background: "#2CB248",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Scan size={20} color="white" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Сканируй и заказывай</div>
          <div style={{ fontSize: "13px", color: "#666", marginTop: "2px" }}>
            Наведи на штрихкод — сразу в корзину
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnersSection() {
  const partners = [
    {
      icon: (
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#EF3124",
        }}>
          <img src={ALFA_BANK_LOGO} alt="Альфа-Банк" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ),
      name: "Альфа-Банк",
      desc: "Совершайте покупки от 10 000 ₽ в месяц и получайте ещё +1% к основному кэшбэку",
      badge: "+1%",
      color: "#EF3124",
      bg: "#FFF0EF",
    },
    {
      icon: (
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#EF3124",
        }}>
          <img src={ALFA_STRAH_LOGO} alt="Альфа-Страхование" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ),
      name: "Альфа-Страхование",
      desc: "+5% к кэшбэку за покупку ОСАГО или КАСКО",
      badge: "+5%",
      color: "#EF3124",
      bg: "#FFF0EF",
    },
    {
      icon: (
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#FFD102",
        }}>
          <img src={BEELINE_LOGO} alt="Билайн" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ),
      name: "Билайн",
      desc: "+15% к кэшбэку за подключение услуг связи",
      badge: "+15%",
      color: "#1A1A1A",
      bg: "#FFFBE6",
    },
  ];

  return (
    <div>
      <SectionTitle title="Партнёры" />
      {partners.map((p, i) => (
        <div
          key={i}
          style={{
            background: "white",
            borderRadius: "18px",
            border: "1px solid #F0F0F0",
            overflow: "hidden",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            padding: "14px 12px",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          {/* Icon */}
          <div style={{ flexShrink: 0 }}>
            {p.icon}
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>{p.name}</div>
            <div style={{ fontSize: "13px", color: "#666", marginTop: "3px" }}>{p.desc}</div>
          </div>

          {/* Badge */}
          <div
            style={{
              background: p.bg,
              color: p.color,
              fontSize: "14px",
              fontWeight: 700,
              padding: "6px 12px",
              borderRadius: "20px",
              flexShrink: 0,
            }}
          >
            {p.badge}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChizhikSection() {
  return (
    <div>
      {/* Предупреждение */}
      <div
        style={{
          background: "#FFF4EC",
          borderRadius: "20px",
          padding: "20px 16px",
          textAlign: "center",
          marginBottom: "16px",
          border: "1px solid #FFD6BF",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            background: "#FF7A33",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
          }}
        >
          <Tag size={24} color="white" />
        </div>
        <div style={{ fontWeight: 700, fontSize: "16px", color: "#1A1A1A", marginBottom: "6px" }}>
          Карта Чижика — отдельная система
        </div>
        <div style={{ fontSize: "13px", color: "#666" }}>
          Апельсин-бонусы в магазинах Чижик не принимаются
        </div>
      </div>

      {/* Акция Чижика */}
      <div
        style={{
          background: "white",
          borderRadius: "18px",
          border: "1px solid #F0F0F0",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            background: "#FFF4EC",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Tag size={24} color="#FF7A33" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Низкие цены каждый день</div>
          <div style={{ fontSize: "13px", color: "#666", marginTop: "3px" }}>Скидка по карте до 15%</div>
        </div>
        <ChevronRight size={18} color="#C7C7CC" />
      </div>

      {/* Персональные акции */}
      <div
        style={{
          background: "#FFF7F2",
          borderRadius: "18px",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          border: "1px solid #FFDCC9",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            background: "#FF7A33",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Tag size={24} color="white" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Персональные акции</div>
          <div style={{ fontSize: "13px", color: "#666", marginTop: "3px" }}>Специальные предложения для вас</div>
        </div>
      </div>
    </div>
  );
}

export function TabContent({ activeTab }: TabContentProps) {
  return (
    <div
      key={activeTab}
      style={{
        padding: "16px",
        animation: "fadeInUp 0.2s ease",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {activeTab === "pyat" && <PyaterochkaSection />}
      {activeTab === "perek" && <PerekrestokSection />}
      {activeTab === "partners" && <PartnersSection />}
      {activeTab === "chizhik" && <ChizhikSection />}
    </div>
  );
}
