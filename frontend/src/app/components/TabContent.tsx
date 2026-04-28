import { ShoppingCart, Star, Shield, Eye, Heart, ChevronRight, Scan, Truck, Tag, Pill, Fuel, Coffee, ListChecks, Plus } from "lucide-react";

type TabId = "pyat" | "perek" | "partners" | "chizhik";

interface TabContentProps {
  activeTab: TabId;
}

const TOMATO_IMG = "https://images.unsplash.com/photo-1772910206934-0db24c87c4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHJlZCUyMHRvbWF0b2VzJTIwZ3JvY2VyeXxlbnwxfHx8fDE3NzczNjk4NTJ8MA&ixlib=rb-4.1.0&q=80&w=400";
const STRAWBERRY_IMG = "https://images.unsplash.com/photo-1575980541474-bf9e64967d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN0cmF3YmVycmllcyUyMHJlZCUyMGZydWl0fGVufDF8fHx8MTc3NzM2OTg1Mnww&ixlib=rb-4.1.0&q=80&w=400";
const CUCUMBER_IMG = "https://images.unsplash.com/photo-1725369865895-0dd4566c8864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGN1Y3VtYmVycyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzc3MzY5ODUyfDA&ixlib=rb-4.1.0&q=80&w=400";
const CHIPS_IMG = "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjaGlwcyUyMHNuYWNrJTIwZm9vZHxlbnwxfHx8fDE3NzczNjk4NTJ8MA&ixlib=rb-4.1.0&q=80&w=400";
const BLUEBERRY_IMG = "https://images.unsplash.com/photo-1584459853781-6e4ed51deebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlYmVycmllcyUyMGZyZXNoJTIwYmVycmllc3xlbnwxfHx8fDE3NzczNjk4NTV8MA&ixlib=rb-4.1.0&q=80&w=400";
const PHARMACY_IMG = "https://images.unsplash.com/photo-1596522016734-8e6136fe5cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lJTIwZHJ1Z3N0b3JlfGVufDF8fHx8MTc3NzM2OTg1NXww&ixlib=rb-4.1.0&q=80&w=400";
const COFFEE_IMG = "https://images.unsplash.com/photo-1755444037036-8b645780326f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBlc3ByZXNzbyUyMHNob3B8ZW58MXx8fHwxNzc3MzY5ODU1fDA&ixlib=rb-4.1.0&q=80&w=400";

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
      <div style={{ fontSize: "13px", color: "#1A1A1A", marginBottom: "6px", lineHeight: 1.3 }}>
        {name}
        <span style={{ color: "#8E8E93", fontSize: "11px" }}> {unit}</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
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
          src={STRAWBERRY_IMG}
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
            До -40%
          </div>
          <div style={{ color: "white", fontSize: "18px", fontWeight: 800, lineHeight: 1.2, maxWidth: "55%" }}>
            Для любых майских идей
          </div>
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "50%",
              background: "white",
              color: "#1A1A1A",
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Только в доставке
          </div>
        </div>
      </div>

      {/* Быстрые действия */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { icon: <ListChecks size={22} color="#FF6A22" />, label: "История покупок" },
          { icon: <Star size={22} color="#FF6A22" />, label: "Оценка товаров" },
          { icon: <Heart size={22} color="#FF6A22" />, label: "Моя экономия" },
          { icon: <Shield size={22} color="#FF6A22" />, label: "Шпионский клуб" },
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
        <ProductCard img={CUCUMBER_IMG} name="Огурцы Атлет" price="249" oldPrice="349" unit="за кг" rating={4.9} discount={29} />
        <ProductCard img={CHIPS_IMG} name="Чипсы Lay's Нежный сыр" price="119" oldPrice="159" unit="за шт" rating={4.7} discount={25} />
        <ProductCard img={BLUEBERRY_IMG} name="Голубика свежая" price="179" oldPrice="239" unit="за упак" rating={4.9} discount={25} />
      </div>

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
          src={TOMATO_IMG}
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
            До -40%
          </div>
          <div style={{ color: "white", fontSize: "18px", fontWeight: 800, lineHeight: 1.2, maxWidth: "55%" }}>
            Свежие овощи и фрукты
          </div>
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "50%",
              background: "white",
              color: "#1A1A1A",
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Только в доставке
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
        <ProductCard img={CUCUMBER_IMG} name="Огурцы Атлет" price="249" oldPrice="349" unit="за кг" rating={4.9} discount={28} green />
        <ProductCard img={CHIPS_IMG} name="Чипсы Lay's Нежный сыр" price="119" oldPrice="159" unit="за шт" rating={4.7} discount={25} green />
        <ProductCard img={BLUEBERRY_IMG} name="Голубика свежая" price="179" oldPrice="239" unit="за упак" rating={4.9} discount={25} green />
      </div>

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
          background: "#EF3124", borderRadius: "14px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ color: "white", fontSize: "22px", fontWeight: 900, fontFamily: "Georgia, serif", lineHeight: 1 }}>А</span>
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
          background: "#EF3124", borderRadius: "14px",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column" as const,
          gap: "0px",
        }}>
          <span style={{ color: "white", fontSize: "17px", fontWeight: 900, fontFamily: "Georgia, serif", lineHeight: 1 }}>А</span>
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.5px", lineHeight: 1 }}>СТРАХ</span>
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
          background: "#FFD102", borderRadius: "14px",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
          position: "relative" as const,
        }}>
          {/* Билайн — полосатый фирменный стиль */}
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{
              position: "absolute",
              top: 0, bottom: 0,
              left: `${i * 9}px`,
              width: "5px",
              background: i % 2 === 0 ? "#1A1A1A" : "transparent",
              opacity: 0.15,
            }} />
          ))}
          <span style={{ color: "#1A1A1A", fontSize: "11px", fontWeight: 900, letterSpacing: "-0.5px", position: "relative", zIndex: 1 }}>beeline</span>
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
          background: "#EFF7F0",
          borderRadius: "20px",
          padding: "20px 16px",
          textAlign: "center",
          marginBottom: "16px",
          border: "1px solid #C8E6C9",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            background: "#2CB248",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C16 4 8 8 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 8 16 4 16 4Z" fill="white" opacity="0.9" />
            <circle cx="13" cy="15" r="2" fill="#2CB248" />
            <circle cx="19" cy="15" r="2" fill="#2CB248" />
            <path d="M12 19C13.5 20.5 18.5 20.5 20 19" stroke="#2CB248" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
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
            background: "#EFF7F0",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Tag size={24} color="#2CB248" />
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
            width: "52px",
            height: "52px",
            background: "#2CB248",
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