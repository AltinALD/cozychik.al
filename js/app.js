const IG_URL = "https://www.instagram.com/alexfox.mk/";
const BRAND = "Alex Fox";
const CART_KEY = "af_cart_v2";
const LANG_KEY = "af_lang";
const EUR_RATE = 61.5;
const FREE_SHIP = 20000;
const SHIP_FEE = 250;

const products = [
  {
    id: 1,
    tags: ["evening"],
    category: "evening",
    name: { mk: "Црвен сатенски фустан", en: "Red Satin Gown" },
    color: { mk: "Црвена", en: "Red" },
    badge: { mk: "Вечер", en: "Evening" },
    images: ["images/looks/red-shoulder.jpg"],
    description: {
      mk: "Сатенски фустан со едно рамо, драпиран струк и висока шлиц. За зајдисонце и вечер.",
      en: "One-shoulder satin gown with a draped bodice and a high slit. For sunset and evening."
    },
    price: 28900,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 2,
    tags: ["tailoring"],
    category: "tailoring",
    name: { mk: "Златна метална јакна", en: "Gold Metallic Jacket" },
    color: { mk: "Златна", en: "Gold" },
    badge: { mk: "Есен/Зима", en: "Fall/Winter" },
    images: ["images/looks/gold-jacket.jpg"],
    description: {
      mk: "Кројна метална јакна со широк ревер и волумен на ракавите. Носи се над црн фустан.",
      en: "Tailored metallic jacket with a wide lapel and volume through the sleeves. Worn over black."
    },
    price: 21900,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    tags: ["evening"],
    category: "evening",
    name: { mk: "Црн фустан со волани", en: "Black Ruffle Gown" },
    color: { mk: "Црна", en: "Black" },
    badge: { mk: "Колекција", en: "Collection" },
    images: ["images/looks/black-ruffle.jpg", "images/looks/product-vibe.jpg"],
    description: {
      mk: "Долг црн фустан со скулптурални волани на колкот. Силуета за вечер и настан.",
      en: "Floor-length black gown with sculptural ruffles at the hip. A silhouette for evening."
    },
    price: 34900,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 4,
    tags: ["mini"],
    category: "mini",
    name: { mk: "Мини фустан мозаик", en: "Mosaic Metallic Mini" },
    color: { mk: "Метал", en: "Metallic" },
    badge: { mk: "Ново", en: "New" },
    images: ["images/looks/mosaic-mini.jpg"],
    description: {
      mk: "Мини со метален мозаик принт, волумен на стракот и широка периферија.",
      en: "Mini dress in a metallic mosaic print, with a full skirt and a wide-brim hat."
    },
    price: 12900,
    compare: 15900,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 5,
    tags: ["tailoring", "mini"],
    category: "tailoring",
    name: { mk: "Црн блејзер фустан", en: "Black Blazer Dress" },
    color: { mk: "Црна", en: "Black" },
    badge: { mk: "Крој", en: "Tailoring" },
    images: ["images/looks/blazer-dress.jpg"],
    description: {
      mk: "Двореден блејзер фустан со текстура, широк ревер и пилбокс капа.",
      en: "Double-breasted blazer dress in a textured fabric, with a wide collar and pillbox hat."
    },
    price: 16900,
    compare: 19900,
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 6,
    tags: ["evening"],
    category: "evening",
    name: { mk: "Црвен сценски фустан", en: "Red Sculptural Gown" },
    color: { mk: "Црвена", en: "Red" },
    badge: { mk: "Клиенти", en: "Clients" },
    images: ["images/looks/red-stage.jpg"],
    description: {
      mk: "Сценски сатенски фустан со скулптурални ракави, висока јака и шлиц.",
      en: "Stage satin gown with sculptural sleeves, a high neck, and a slit."
    },
    price: 45900,
    sizes: ["XS", "S", "M", "L"]
  }
];

const i18n = {
  mk: {
    "meta.desc": "Alex Fox — моден дизајнер. Ready to wear во Urma Concept Store, Скопје Сити Мол. Колекција есен/зима '26.",
    "nav.collection": "Колекција",
    "nav.categories": "Категории",
    "nav.story": "За нас",
    "nav.visit": "Продавница",
    "hero.tagline": "Моден дизајнер",
    "hero.sub": "Ready to wear · Urma Concept Store · Скопје Сити Мол",
    "hero.ctaShop": "Види ја колекцијата",
    "hero.ctaIg": "Следи на Instagram",
    "cat.all": "Сите",
    "cat.evening": "Вечерни",
    "cat.tailoring": "Крој",
    "cat.mini": "Мини",
    "categories.label": "Категории",
    "categories.title": "Избери силуета",
    "categories.desc": "Вечерни фустани, крој и мини — колекција '26.",
    "collection.label": "Колекција '26",
    "collection.title": "Избрани парчиња",
    "collection.desc": "Цени во денари. Достава низ Македонија или подигнување во Urma.",
    "editorial.label": "На сцена",
    "editorial.title": "Присуство.<br>Сатен.<br>Alex Fox.",
    "editorial.body": "Скулптурални фустани за сцена, вечер и секој момент што бара повеќе.",
    "editorial.cta": "Истражи",
    "story.label": "За нас",
    "story.body": "Alex Fox е моден дизајнер. Ready to wear колекцијата се носи во Urma Concept Store, Скопје Сити Мол.",
    "story.p1": "Моден дизајнер",
    "story.p2": "Ready to wear",
    "story.p3": "Urma Concept Store, Скопје Сити Мол",
    "story.p4": "Есен / зима '26",
    "story.p5": "Нарачки преку Instagram",
    "visit.label": "Продавница и контакт",
    "visit.title": "Urma Concept Store",
    "visit.desc": "Посети нè во Скопје Сити Мол или напиши порака за достапност и големина.",
    "visit.online": "Instagram",
    "visit.ship": "Продавница",
    "visit.shipPlaces": "Urma Concept Store · Скопје Сити Мол",
    "visit.igLink": "Отвори Instagram",
    "visit.dm": "Отвори мапа",
    "visit.ig": "Порака до @alexfox.mk",
    "visit.shop": "Види ги парчињата",
    "footer.tag": "Моден дизајнер",
    "perk.ship": "Бесплатна достава над 20.000 ден",
    "perk.pay": "Плаќање при достава",
    "perk.store": "Подигнување во Скопје Сити Мол",
    "modal.add": "Додај во торба",
    "modal.ig": "Прашај на Instagram",
    "cart.title": "Твојата торба",
    "cart.subtotal": "Меѓузбир",
    "cart.shipping": "Достава",
    "cart.free": "Бесплатно",
    "cart.total": "Вкупно",
    "cart.checkout": "Кон плаќање",
    "cart.hint": "Бесплатна достава над 20.000 ден. Плаќање при достава низ Македонија.",
    "cart.empty": "Торбата е празна.",
    "cart.size": "Големина",
    "cart.qty": "Количина",
    "cart.remove": "Отстрани",
    "cart.aria": "Торба",
    "checkout.title": "Наплата",
    "checkout.name": "Име и презиме",
    "checkout.phone": "Телефон",
    "checkout.city": "Град",
    "checkout.address": "Адреса",
    "checkout.note": "Белешка",
    "checkout.pay": "Плаќање при достава",
    "checkout.place": "Потврди нарачка",
    "checkout.back": "Назад кон торбата",
    "checkout.error": "Внеси име, телефон и град.",
    "checkout.thanks": "Нарачката е примена",
    "checkout.doneBody": "Ќе те контактираме за потврда. Плаќање при достава или во Urma Concept Store.",
    "checkout.close": "Продолжи со купување",
    "toast.added": "Додадено во торбата",
    "product.view": "Види",
    "marquee": ["Alex Fox", "Моден дизајнер", "Ready to wear", "Есен/Зима '26", "Urma", "Скопје Сити Мол", "Колекција '26"]
  },
  en: {
    "meta.desc": "Alex Fox — fashion designer. Ready to wear at Urma Concept Store, Skopje City Mall. Fall/Winter '26.",
    "nav.collection": "Collection",
    "nav.categories": "Categories",
    "nav.story": "About",
    "nav.visit": "Store",
    "hero.tagline": "Fashion designer",
    "hero.sub": "Ready to wear · Urma Concept Store · Skopje City Mall",
    "hero.ctaShop": "Shop the collection",
    "hero.ctaIg": "Follow on Instagram",
    "cat.all": "All",
    "cat.evening": "Evening",
    "cat.tailoring": "Tailoring",
    "cat.mini": "Mini",
    "categories.label": "Categories",
    "categories.title": "Choose a silhouette",
    "categories.desc": "Evening gowns, tailoring, and minis — collection '26.",
    "collection.label": "Collection '26",
    "collection.title": "Selected pieces",
    "collection.desc": "Prices in denars. Delivery across Macedonia, or pickup at Urma.",
    "editorial.label": "On stage",
    "editorial.title": "Presence.<br>Satin.<br>Alex Fox.",
    "editorial.body": "Sculptural gowns for the stage, the evening, and any moment that asks for more.",
    "editorial.cta": "Explore",
    "story.label": "About",
    "story.body": "Alex Fox is a fashion designer. The ready-to-wear collection is at Urma Concept Store, Skopje City Mall.",
    "story.p1": "Fashion designer",
    "story.p2": "Ready to wear",
    "story.p3": "Urma Concept Store, Skopje City Mall",
    "story.p4": "Fall / Winter '26",
    "story.p5": "Orders via Instagram",
    "visit.label": "Store & contact",
    "visit.title": "Urma Concept Store",
    "visit.desc": "Visit us at Skopje City Mall, or message for size and availability.",
    "visit.online": "Instagram",
    "visit.ship": "Store",
    "visit.shipPlaces": "Urma Concept Store · Skopje City Mall",
    "visit.igLink": "Open Instagram",
    "visit.dm": "Open map",
    "visit.ig": "Message @alexfox.mk",
    "visit.shop": "Browse pieces",
    "footer.tag": "Fashion designer",
    "perk.ship": "Free delivery over 20,000 MKD",
    "perk.pay": "Pay on delivery",
    "perk.store": "Pickup at Skopje City Mall",
    "modal.add": "Add to bag",
    "modal.ig": "Ask on Instagram",
    "cart.title": "Your bag",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Delivery",
    "cart.free": "Free",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.hint": "Free delivery over 20,000 MKD. Pay on delivery across Macedonia.",
    "cart.empty": "Your bag is empty.",
    "cart.size": "Size",
    "cart.qty": "Quantity",
    "cart.remove": "Remove",
    "cart.aria": "Bag",
    "checkout.title": "Checkout",
    "checkout.name": "Full name",
    "checkout.phone": "Phone",
    "checkout.city": "City",
    "checkout.address": "Address",
    "checkout.note": "Note",
    "checkout.pay": "Pay on delivery",
    "checkout.place": "Place order",
    "checkout.back": "Back to bag",
    "checkout.error": "Enter your name, phone, and city.",
    "checkout.thanks": "Order received",
    "checkout.doneBody": "We will contact you to confirm. Pay on delivery, or at Urma Concept Store.",
    "checkout.close": "Continue shopping",
    "toast.added": "Added to bag",
    "product.view": "View",
    "marquee": ["Alex Fox", "Fashion designer", "Ready to wear", "Fall/Winter '26", "Urma", "Skopje City Mall", "Collection '26"]
  }
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem(LANG_KEY) || "mk";
if (!i18n[lang]) lang = "mk";
let activeProduct = null;
let selectedSize = "M";
let selectedQty = 1;
let activeCategory = "";
let cartMode = "bag";

function t(key) {
  const value = i18n[lang][key] ?? i18n.en[key] ?? key;
  return value;
}

function loc(obj) {
  if (!obj || typeof obj === "string") return obj;
  return obj[lang] || obj.en || obj.mk || "";
}

function categoryLabel(key) {
  return t(`cat.${key}`);
}

function formatMkd(amount) {
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted} ден`;
}

function formatEur(amount) {
  return `€${Math.round(amount / EUR_RATE)}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function priceMarkup(product) {
  const onSale = product.compare && product.compare > product.price;
  const was = onSale ? `<s class="price-was">${formatMkd(product.compare)}</s>` : "";
  return `${was}<span class="price-now">${formatMkd(product.price)}</span><span class="price-eur">${formatEur(product.price)}</span>`;
}

function saleFlag(product) {
  if (!product.compare || product.compare <= product.price) return "";
  const pct = Math.round((1 - product.price / product.compare) * 100);
  return `<span class="sale-flag">−${pct}%</span>`;
}

function linePrice(item) {
  if (typeof item.price === "number") return item.price;
  const product = products.find((entry) => entry.id === item.id);
  return product ? product.price : 0;
}

function cartSubtotal(items = getCart()) {
  return items.reduce((sum, item) => sum + linePrice(item) * item.qty, 0);
}

function shippingFor(subtotal) {
  if (subtotal <= 0 || subtotal >= FREE_SHIP) return 0;
  return SHIP_FEE;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartUI();
}

function cartCount(items = getCart()) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

function showToast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("is-on");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("is-on"), 2200);
}

function applyI18n() {
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (typeof value === "string" && value.includes("<br>")) el.innerHTML = value;
    else if (typeof value === "string") el.textContent = value;
  });

  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });

  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  const track = $("#marqueeTrack");
  if (track) {
    const items = t("marquee");
    const doubled = [...items, ...items];
    track.innerHTML = doubled
      .map((word, i) => {
        const sep = i < doubled.length - 1 ? "<span>·</span>" : "";
        return `<span>${word}</span>${sep}`;
      })
      .join("");
  }

  document.title =
    lang === "mk"
      ? "Alex Fox — Моден дизајнер"
      : "Alex Fox — Fashion Designer";

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta.desc"));

  renderProducts();
  updateCartUI();
  if (activeProduct) openProduct(activeProduct.id, true);
}

function setLang(next) {
  lang = next;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

function filteredProducts() {
  if (!activeCategory) return products;
  return products.filter((p) => p.tags.includes(activeCategory));
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  const list = filteredProducts();

  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" data-id="${p.id}" style="transition-delay:${i * 60}ms">
      <div class="product-media">
        <img src="${p.images[0]}" alt="${loc(p.name)}" loading="lazy" width="600" height="800">
        ${p.badge ? `<span class="product-badge">${loc(p.badge)}</span>` : ""}
        ${saleFlag(p)}
      </div>
      <div class="product-info">
        <h3>${loc(p.name)}</h3>
        <p class="product-color">${categoryLabel(p.category)} · ${loc(p.color)}</p>
        <div class="product-footer">
          <span class="product-price">${priceMarkup(p)}</span>
          <span class="product-view">${t("product.view")}</span>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  $$(".product-card", grid).forEach((card) => {
    card.addEventListener("click", () => openProduct(Number(card.dataset.id)));
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$(".product-card", grid).forEach((c) => io.observe(c));
}

function setModalImage(src, alt) {
  const img = $("#modalImage");
  img.src = src;
  img.alt = alt;
}

function openProduct(id, keepOpen = false) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  activeProduct = p;
  if (!keepOpen || !p.sizes.includes(selectedSize)) {
    selectedSize = p.sizes.includes("M") ? "M" : p.sizes[0];
    selectedQty = 1;
  }

  const name = loc(p.name);
  setModalImage(p.images[0], name);
  $("#modalBrand").textContent = BRAND;
  $("#modalTitle").textContent = name;
  $("#modalDesc").textContent = loc(p.description);
  $("#modalPrice").innerHTML = priceMarkup(p);
  const qtyValue = $("#qtyValue");
  if (qtyValue) qtyValue.textContent = String(selectedQty);

  const thumbs = $("#modalThumbs");
  if (p.images.length > 1) {
    thumbs.hidden = false;
    thumbs.innerHTML = p.images
      .map(
        (src, i) =>
          `<button type="button" class="modal-thumb${i === 0 ? " is-active" : ""}" data-src="${src}" aria-label="${name}"><img src="${src}" alt=""></button>`
      )
      .join("");
    $$(".modal-thumb", thumbs).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setModalImage(btn.dataset.src, name);
        $$(".modal-thumb", thumbs).forEach((b) => b.classList.toggle("is-active", b === btn));
      });
    });
  } else {
    thumbs.hidden = true;
    thumbs.innerHTML = "";
  }

  const sizeRow = $("#sizeRow");
  sizeRow.innerHTML = p.sizes
    .map(
      (s) =>
        `<button type="button" class="size-btn${s === selectedSize ? " is-active" : ""}" data-size="${s}">${s}</button>`
    )
    .join("");

  $$(".size-btn", sizeRow).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedSize = btn.dataset.size;
      $$(".size-btn", sizeRow).forEach((b) => b.classList.toggle("is-active", b === btn));
    });
  });

  $("#igOrderBtn").href = IG_URL;
  const modal = $("#productModal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  $("#productModal").hidden = true;
  document.body.classList.remove("modal-open");
  activeProduct = null;
}

function addToCart() {
  if (!activeProduct) return;
  const items = getCart();
  const key = `${activeProduct.id}-${selectedSize}`;
  const existing = items.find((i) => i.key === key);
  if (existing) {
    existing.qty += selectedQty;
    existing.price = activeProduct.price;
  } else {
    items.push({
      key,
      id: activeProduct.id,
      name: activeProduct.name,
      size: selectedSize,
      image: activeProduct.images[0],
      price: activeProduct.price,
      qty: selectedQty
    });
  }
  saveCart(items);
  showToast(t("toast.added"));
}

function updateCartUI() {
  const items = getCart();
  const count = cartCount(items);
  const countEl = $("#cartCount");
  if (countEl) {
    countEl.textContent = String(count);
    countEl.classList.toggle("is-on", count > 0);
  }

  const container = $("#cartItems");
  const footer = $("#cartFooter");
  if (!container || !footer) return;

  if (!items.length) {
    container.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = cartMode === "bag" ? "block" : "none";
  container.hidden = cartMode !== "bag";
  container.innerHTML = items
    .map((item) => {
      const unit = linePrice(item);
      return `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="">
      <div class="cart-item-meta">
        <h4>${loc(item.name)}</h4>
        <p>${t("cart.size")} ${item.size}</p>
        <div class="qty" role="group" aria-label="${t("cart.qty")}">
          <button type="button" data-qty="${item.key}" data-dir="-1" aria-label="−">−</button>
          <span>${item.qty}</span>
          <button type="button" data-qty="${item.key}" data-dir="1" aria-label="+">+</button>
        </div>
      </div>
      <div class="cart-item-side">
        <strong>${formatMkd(unit * item.qty)}</strong>
        <button type="button" class="cart-item-remove" data-remove="${item.key}">${t("cart.remove")}</button>
      </div>
    </div>`;
    })
    .join("");

  const subtotal = cartSubtotal(items);
  const shipping = shippingFor(subtotal);
  const totalLabel = formatMkd(subtotal + shipping);
  const subEl = $("#cartSubtotal");
  const shipEl = $("#cartShipping");
  const totalEl = $("#cartTotal");
  if (subEl) subEl.textContent = formatMkd(subtotal);
  if (shipEl) shipEl.textContent = shipping === 0 ? t("cart.free") : formatMkd(shipping);
  if (totalEl) totalEl.textContent = totalLabel;
  const checkoutTotal = $("#checkoutTotal");
  if (checkoutTotal) checkoutTotal.textContent = totalLabel;
}

function changeQty(key, dir) {
  const items = getCart();
  const item = items.find((entry) => entry.key === key);
  if (!item) return;
  item.qty += dir;
  saveCart(item.qty < 1 ? items.filter((entry) => entry.key !== key) : items);
}

function showCartMode(mode) {
  cartMode = mode;
  const items = getCart();
  const bag = $("#cartItems");
  const form = $("#checkoutForm");
  const done = $("#orderDone");
  const footer = $("#cartFooter");
  if (bag) bag.hidden = mode !== "bag";
  if (form) form.hidden = mode !== "checkout";
  if (done) done.hidden = mode !== "done";
  if (footer) footer.style.display = mode === "bag" && items.length ? "block" : "none";
  const title = $("#cartTitle");
  if (title) {
    title.textContent = mode === "checkout" ? t("checkout.title") : t("cart.title");
  }
}

function openCheckout() {
  if (!getCart().length) return;
  const error = $("#checkoutError");
  if (error) error.textContent = "";
  showCartMode("checkout");
  updateCartUI();
}

function placeOrder(event) {
  event.preventDefault();
  const items = getCart();
  const name = $("#orderName")?.value.trim() || "";
  const phone = $("#orderPhone")?.value.trim() || "";
  const city = $("#orderCity")?.value.trim() || "";
  const address = $("#orderAddress")?.value.trim() || "";
  const note = $("#orderNote")?.value.trim() || "";
  const error = $("#checkoutError");
  const phoneDigits = phone.replace(/\D/g, "");
  if (name.length < 2 || phoneDigits.length < 8 || city.length < 2) {
    if (error) error.textContent = t("checkout.error");
    return;
  }
  if (!items.length) return;

  const subtotal = cartSubtotal(items);
  const shipping = shippingFor(subtotal);
  const total = subtotal + shipping;
  const orderNo = `AF-${String(Date.now()).slice(-6)}`;
  const order = { orderNo, name, phone, city, address, note, items, subtotal, shipping, total, lang };
  const previous = JSON.parse(localStorage.getItem("af_orders") || "[]");
  previous.push(order);
  localStorage.setItem("af_orders", JSON.stringify(previous));
  localStorage.removeItem(CART_KEY);

  $("#orderNumber").textContent = orderNo;
  $("#orderSummary").textContent = `${name} · ${city} · ${formatMkd(total)}`;
  $("#checkoutForm")?.reset();
  showCartMode("done");
  updateCartUI();
}

function openCart() {
  $("#cartDrawer").hidden = false;
  document.body.classList.add("modal-open");
  updateCartUI();
}

function closeCart() {
  $("#cartDrawer").hidden = true;
  if ($("#productModal").hidden) document.body.classList.remove("modal-open");
  if (cartMode === "done") showCartMode("bag");
}

function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = $("#menuToggle");
  const mobileNav = $("#mobileNav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });

  $$("a", mobileNav).forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

function initCategoryFilter() {
  $$(".brand-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.cat || "";
      $$(".brand-chip").forEach((c) =>
        c.classList.toggle("is-active", (c.dataset.cat || "") === activeCategory)
      );
      renderProducts();
      $("#collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initHeroSlides() {
  const slides = $$(".hero-image");
  if (slides.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  setInterval(() => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  }, 5600);
}

function initReveal() {
  const editorial = $(".editorial");
  if (!editorial) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(editorial);
}

function initCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;

  const tick = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    raf = requestAnimationFrame(tick);
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("is-on");
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => glow.classList.remove("is-on"));
}

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyI18n();
  initHeader();
  initHeroSlides();
  initCategoryFilter();
  initReveal();
  initCursorGlow();

  $("#cartBtn")?.addEventListener("click", openCart);
  $("#addToCartBtn")?.addEventListener("click", addToCart);
  $("#qtyMinus")?.addEventListener("click", () => {
    selectedQty = Math.max(1, selectedQty - 1);
    const qtyValue = $("#qtyValue");
    if (qtyValue) qtyValue.textContent = String(selectedQty);
  });
  $("#qtyPlus")?.addEventListener("click", () => {
    selectedQty = Math.min(9, selectedQty + 1);
    const qtyValue = $("#qtyValue");
    if (qtyValue) qtyValue.textContent = String(selectedQty);
  });
  $("#cartItems")?.addEventListener("click", (event) => {
    const qtyBtn = event.target.closest("[data-qty]");
    if (qtyBtn) {
      changeQty(qtyBtn.dataset.qty, Number(qtyBtn.dataset.dir));
      return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) saveCart(getCart().filter((item) => item.key !== remove.dataset.remove));
  });
  $("#checkoutBtn")?.addEventListener("click", openCheckout);
  $("#checkoutBack")?.addEventListener("click", () => showCartMode("bag"));
  $("#checkoutForm")?.addEventListener("submit", placeOrder);
  $("#orderClose")?.addEventListener("click", closeCart);

  $$("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  $$("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
