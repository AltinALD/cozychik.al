const IG_URL = "https://www.instagram.com/multibrand.al/";
const CART_KEY = "mb_cart_v1";
const LANG_KEY = "mb_lang";

const products = [
  {
    id: 1,
    brand: "Camilla",
    name: { sq: "Trench lëkure", en: "Leather Trench Coat" },
    color: { sq: "Kafe e errët", en: "Dark brown" },
    price: 28900,
    badge: { sq: "Editorial", en: "Editorial" },
    image: "images/product-leather-trench.png",
    description: {
      sq: "Trench i gjatë lëkure me bel, mëngë të gjera dhe siluetë dramatike — look editorial për ditë dhe darkë.",
      en: "Floor-length leather trench with belt, wide sleeves, and a dramatic silhouette — editorial day-to-night."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 2,
    brand: "Percival",
    name: { sq: "Look elevator", en: "Elevator Look" },
    color: { sq: "E bardhë / gri", en: "White / grey" },
    price: 14500,
    badge: { sq: "K11", en: "K11" },
    image: "images/product-mens-look.png",
    description: {
      sq: "Këmishë me vijëza, pantallona të gjera dhe kapelë — stil modern meshkujsh me ndjenjë luksore.",
      en: "Pinstripe shirt, wide-leg trousers, and cap — modern menswear with a luxury edge."
    },
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    brand: "Percival",
    name: { sq: "Tee Percival", en: "Percival Logo Tee" },
    color: { sq: "E bardhë", en: "White" },
    price: 6900,
    badge: { sq: "Essential", en: "Essential" },
    image: "images/product-percival-tee.png",
    description: {
      sq: "T-shirt e bardhë me logo Percival — bazike premium për çdo ditë.",
      en: "Crisp white tee with Percival branding — a premium everyday essential."
    },
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    brand: "Bardot",
    name: { sq: "Fustan midi lëkure", en: "Leather Midi Dress" },
    color: { sq: "I zi", en: "Black" },
    price: 19800,
    badge: { sq: "I ri", en: "New" },
    image: "images/product-leather-dress.png",
    description: {
      sq: "Fustan midi strapless në lëkurë të zezë me detaj metalik në gjoks — siluetë e fortë dhe moderne.",
      en: "Strapless black leather midi with a metallic chest bar — sharp, modern silhouette."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 5,
    brand: "Maria Lucia Hohan",
    name: { sq: "Naima Dress", en: "Naima Dress" },
    color: { sq: "Rose gold", en: "Rose gold" },
    price: 42000,
    badge: { sq: "Evening", en: "Evening" },
    image: "images/product-naima-dress.png",
    description: {
      sq: "Fustan mbrëmjeje me pleats metalike — Opera Night. Për dasma dhe darka që meritojnë shkëlqim.",
      en: "Metallic pleated evening gown — Opera Night. Made for weddings and nights that sparkle."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 6,
    brand: "Almada",
    name: { sq: "Gown me sequins", en: "Sequin Halter Gown" },
    color: { sq: "Bronz", en: "Bronze" },
    price: 26500,
    badge: { sq: "Sale", en: "Sale" },
    image: "images/product-sequin-gown.png",
    description: {
      sq: "Fustan i gjatë saten me sequins dhe të çarë — prani maksimale për mbrëmje.",
      en: "Satin floor-length gown with sequin detail and high slit — maximum evening presence."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 7,
    brand: "Camilla",
    name: { sq: "Trench krokodil", en: "Croc Trench Coat" },
    color: { sq: "Mustard", en: "Mustard" },
    price: 35500,
    badge: { sq: "Statement", en: "Statement" },
    image: "images/product-croc-trench.png",
    description: {
      sq: "Trench me teksturë krokodil dhe çantë matching — statement piece që bie në sy menjëherë.",
      en: "Crocodile-texture trench with matching bag — a statement piece that owns the room."
    },
    sizes: ["XS", "S", "M", "L"]
  }
];

const i18n = {
  sq: {
    "nav.collection": "Koleksioni",
    "nav.brands": "Brendet",
    "nav.story": "Rreth nesh",
    "nav.visit": "Kontakt",
    "hero.tagline": "Destinacioni i luksit të kuruar",
    "hero.sub": "Një seleksion ekskluziv i brendeve më të mira globale.",
    "hero.ctaShop": "Shiko koleksionin",
    "hero.ctaIg": "Ndiq në Instagram",
    "brands.label": "Brendet",
    "brands.title": "Edit global",
    "brands.desc": "Emra që përkufizojnë stilin — të zgjedhur me kujdes për Multibrand.",
    "collection.label": "Koleksioni",
    "collection.title": "Pjesë të zgjedhura",
    "collection.desc": "Looks, coats dhe evening pieces — porosit online ose na shkruaj në Instagram.",
    "editorial.label": "Editorial",
    "editorial.title": "Formë.<br>Teksturë.<br>Prani.",
    "editorial.body": "Silueta që mbajnë hapësirën — për darka, udhëtime dhe çdo moment që meriton më shumë.",
    "editorial.cta": "Eksploro",
    "story.label": "Rreth nesh",
    "story.body": "Destinacioni për luks të kuruar. Një edit ekskluziv i brendeve më të mira globale — kuruar me sy të mprehtë për stil modern.",
    "story.p1": "Brende globale të kuruara",
    "story.p2": "Transport në Shqipëri",
    "story.p3": "Sale deri në 50%",
    "story.p4": "Porosi përmes Instagram DM",
    "visit.label": "Kontakt & porosi",
    "visit.title": "Le të flasim stil",
    "visit.desc": "Shkruaj për madhësinë, disponueshmërinë dhe porosinë tënde — ose na ndiq për drops të reja.",
    "visit.online": "Online",
    "visit.contact": "Kontakt",
    "visit.igLink": "Hap Instagram",
    "visit.dm": "Dërgo DM",
    "visit.ig": "Mesazh @multibrand.al",
    "visit.shop": "Shiko pjesët",
    "footer.tag": "Luks i kuruar",
    "modal.add": "Shto në çantë",
    "modal.ig": "Porosit në Instagram",
    "cart.title": "Çanta jote",
    "cart.total": "Totali",
    "cart.checkout": "Porosit në Instagram",
    "cart.hint": "Dërgo detajet e çantës në DM — madhësia dhe pagesa rregullohen privatisht.",
    "cart.empty": "Çanta është bosh.",
    "cart.size": "Madhësia",
    "cart.aria": "Çanta",
    "toast.added": "U shtua në çantë",
    "product.view": "Shiko",
    "marquee": ["Silk Laundry", "Camilla", "Almada", "Percival", "Bardot", "Curated Luxury", "Up to 50% Off"]
  },
  en: {
    "nav.collection": "Collection",
    "nav.brands": "Brands",
    "nav.story": "About",
    "nav.visit": "Contact",
    "hero.tagline": "The destination for curated luxury",
    "hero.sub": "An exclusive edit of the best global fashion brands.",
    "hero.ctaShop": "Shop the edit",
    "hero.ctaIg": "Follow on Instagram",
    "brands.label": "Brands",
    "brands.title": "Global edit",
    "brands.desc": "Names that define style — carefully selected for Multibrand.",
    "collection.label": "Collection",
    "collection.title": "Selected pieces",
    "collection.desc": "Looks, coats, and evening pieces — order online or message us on Instagram.",
    "editorial.label": "Editorial",
    "editorial.title": "Form.<br>Texture.<br>Presence.",
    "editorial.body": "Silhouettes that hold the room — for nights out, travel, and moments that deserve more.",
    "editorial.cta": "Explore",
    "story.label": "About",
    "story.body": "The destination for curated luxury. An exclusive edit of the best global fashion brands — chosen with a sharp eye for modern style.",
    "story.p1": "Curated global brands",
    "story.p2": "Shipping across Albania",
    "story.p3": "Sale up to 50%",
    "story.p4": "Order via Instagram DM",
    "visit.label": "Contact & order",
    "visit.title": "Let's talk style",
    "visit.desc": "Message us for size, availability, and your order — or follow for new drops.",
    "visit.online": "Online",
    "visit.contact": "Contact",
    "visit.igLink": "Open Instagram",
    "visit.dm": "Send DM",
    "visit.ig": "Message @multibrand.al",
    "visit.shop": "Browse pieces",
    "footer.tag": "Curated luxury fashion",
    "modal.add": "Add to bag",
    "modal.ig": "Order on Instagram",
    "cart.title": "Your bag",
    "cart.total": "Total",
    "cart.checkout": "Order via Instagram",
    "cart.hint": "Send your bag details in DM — size & payment arranged privately.",
    "cart.empty": "Your bag is empty.",
    "cart.size": "Size",
    "cart.aria": "Bag",
    "toast.added": "Added to bag",
    "product.view": "View",
    "marquee": ["Silk Laundry", "Camilla", "Almada", "Percival", "Bardot", "Curated Luxury", "Up to 50% Off"]
  }
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem(LANG_KEY) || "sq";
let activeProduct = null;
let selectedSize = "M";
let activeBrand = null;

function t(key) {
  return i18n[lang][key] ?? i18n.en[key] ?? key;
}

function loc(obj) {
  if (!obj || typeof obj === "string") return obj;
  return obj[lang] || obj.en || obj.sq || "";
}

function formatPrice(n) {
  return new Intl.NumberFormat(lang === "sq" ? "sq-AL" : "en-US").format(n) + " LEK";
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

function cartTotal(items = getCart()) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
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
    if (value.includes("<br>")) el.innerHTML = value;
    else el.textContent = value;
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
    lang === "sq"
      ? "Multibrand — Luks i kuruar · Shqipëri"
      : "Multibrand — Curated Luxury Fashion · Albania";

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
  if (!activeBrand) return products;
  return products.filter((p) => p.brand === activeBrand);
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
        <img src="${p.image}" alt="${loc(p.name)}" loading="lazy" width="600" height="800">
        ${p.badge ? `<span class="product-badge">${loc(p.badge)}</span>` : ""}
      </div>
      <div class="product-info">
        <h3>${loc(p.name)}</h3>
        <p class="product-color">${p.brand} · ${loc(p.color)}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(p.price)}</span>
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

function openProduct(id, keepOpen = false) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  activeProduct = p;
  if (!keepOpen || !p.sizes.includes(selectedSize)) {
    selectedSize = p.sizes.includes("M") ? "M" : p.sizes[0];
  }

  const name = loc(p.name);
  $("#modalImage").src = p.image;
  $("#modalImage").alt = name;
  $("#modalBrand").textContent = p.brand;
  $("#modalTitle").textContent = name;
  $("#modalDesc").textContent = loc(p.description);
  $("#modalPrice").textContent = formatPrice(p.price);

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
    existing.qty += 1;
  } else {
    items.push({
      key,
      id: activeProduct.id,
      name: activeProduct.name,
      size: selectedSize,
      price: activeProduct.price,
      image: activeProduct.image,
      qty: 1
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

  footer.style.display = "block";
  container.innerHTML = items
    .map(
      (item) => `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="">
      <div>
        <h4>${loc(item.name)}</h4>
        <p>${t("cart.size")} ${item.size} · ${item.qty}× ${formatPrice(item.price)}</p>
      </div>
      <button type="button" class="cart-item-remove" data-remove="${item.key}" aria-label="Remove">&times;</button>
    </div>
  `
    )
    .join("");

  $("#cartTotal").textContent = formatPrice(cartTotal(items));
  $("#checkoutIg").href = IG_URL;

  $$("[data-remove]", container).forEach((btn) => {
    btn.addEventListener("click", () => {
      saveCart(getCart().filter((i) => i.key !== btn.dataset.remove));
    });
  });
}

function openCart() {
  $("#cartDrawer").hidden = false;
  document.body.classList.add("modal-open");
  updateCartUI();
}

function closeCart() {
  $("#cartDrawer").hidden = true;
  if ($("#productModal").hidden) document.body.classList.remove("modal-open");
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

function initHeroVideo() {
  const video = $("#heroVideo");
  if (!video) return;
  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };
  tryPlay();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
}

function initBrandFilter() {
  $$(".brand-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const brand = chip.dataset.brand;
      const same = activeBrand === brand;
      activeBrand = same ? null : brand;
      $$(".brand-chip").forEach((c) => c.classList.toggle("is-active", c.dataset.brand === activeBrand));
      renderProducts();
      $("#collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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
  initHeroVideo();
  initBrandFilter();
  initReveal();
  initCursorGlow();

  $("#cartBtn")?.addEventListener("click", openCart);
  $("#addToCartBtn")?.addEventListener("click", addToCart);

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
