const IG_URL = "https://www.instagram.com/nf_collection98_/";
const CART_KEY = "nf_cart_v1";
const LANG_KEY = "nf_lang";

const products = [
  {
    id: 1,
    name: { sq: "Fustan mini me dantellë", en: "Lace Corset Mini Dress" },
    color: { sq: "I zi", en: "Black" },
    price: 3500,
    badge: { sq: "I ri", en: "New" },
    image: "images/product-lace-mini-front.png",
    images: ["images/product-lace-mini-front.png", "images/product-lace-mini-side.png"],
    description: {
      sq: "Fustan i shkurtër me mëngë të gjata dantelle, trup korseti dhe detaj në gjoks. Elegant për darkë dhe dalje.",
      en: "Short dress with long lace sleeves, a corset bodice, and a keyhole detail. Made for nights out."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 2,
    name: { sq: "Fustan mbrëmjeje me shkëlqim", en: "Shimmer Evening Gown" },
    color: { sq: "I zi", en: "Black" },
    price: 4500,
    badge: { sq: "Mbrëmje", en: "Evening" },
    image: "images/product-black-gown.png",
    description: {
      sq: "Fustan i gjatë me shkëlqim, korset dantelle, rripa të hollë dhe të çarë të thellë. Për momente speciale.",
      en: "Floor-length shimmer gown with lace bodice, spaghetti straps, and a dramatic high slit."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    name: { sq: "Fustan vishnje me të çarë", en: "Burgundy Slit Gown" },
    color: { sq: "Vishnje", en: "Burgundy" },
    price: 2800,
    badge: { sq: "I preferuar", en: "Favorite" },
    image: "images/product-burgundy-gown.png",
    description: {
      sq: "Fustan i gjatë në ngjyrë vishnje me jakë, mëngë të gjata, draperim dhe të çarë dramatike.",
      en: "Floor-length burgundy gown with collar cutout, long sleeves, drape detail, and a high slit."
    },
    sizes: ["XS", "S", "M", "L"]
  }
];

const i18n = {
  sq: {
    "nav.collection": "Koleksioni",
    "nav.story": "Rreth nesh",
    "nav.visit": "Vizito",
    "hero.tagline": "Stil që të ndjek",
    "hero.sub": "Boutique modeje për femra · Tiranë",
    "hero.ctaShop": "Shiko koleksionin",
    "hero.ctaIg": "Ndiq në Instagram",
    "collection.label": "Koleksioni",
    "collection.title": "Pjesë të zgjedhura",
    "collection.desc": "Fustane elegante, sete dhe stil për çdo moment — porosit online ose vizito dyqanin.",
    "editorial.label": "Editorial",
    "editorial.title": "Natë. Dritë.<br>Prani.",
    "editorial.body": "Silueta që bie në sy — për dasma, darka dhe çdo mbrëmje që meriton më shumë.",
    "story.label": "Rreth nesh",
    "story.body": "Boutique modeje për femra në Tiranë. Trende të reja, cilësi dhe shërbim i ngrohtë — në dyqan ose me porosi online.",
    "story.p1": "Transport në gjithë Shqipërinë",
    "story.p2": "Mundësi ndërrimi",
    "story.p3": "Tiranë, rruga e Durrësit",
    "story.p4": "Porosi përmes Instagram DM",
    "visit.label": "Vizito & porosite",
    "visit.title": "Na gjeni në Tiranë",
    "visit.desc": "Provo në dyqan, ose na shkruaj për madhësinë dhe porosinë tënde.",
    "visit.store": "Dyqani",
    "visit.address": "Rruga e Durrësit, Tiranë",
    "visit.map": "Hap në hartë",
    "visit.contact": "Kontakt",
    "visit.ig": "Mesazh @nf_collection98_",
    "visit.call": "Telefono",
    "footer.tag": "Boutique modeje për femra",
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
    "marquee": ["Fustane", "Sete", "Stil", "Tiranë", "Transport në Shqipëri", "Ndërrim"]
  },
  en: {
    "nav.collection": "Collection",
    "nav.story": "About",
    "nav.visit": "Visit",
    "hero.tagline": "Style that follows you",
    "hero.sub": "Women's fashion boutique · Tirana",
    "hero.ctaShop": "Shop the collection",
    "hero.ctaIg": "Follow on Instagram",
    "collection.label": "Collection",
    "collection.title": "Selected pieces",
    "collection.desc": "Elegant dresses, sets, and looks for every moment — order online or visit the store.",
    "editorial.label": "Editorial",
    "editorial.title": "Night. Light.<br>Presence.",
    "editorial.body": "Silhouettes that hold the room — for weddings, dinners, and evenings that deserve more.",
    "story.label": "About",
    "story.body": "A women's fashion boutique in Tirana. Fresh trends, quality pieces, and warm service — in store or by order.",
    "story.p1": "Shipping all over Albania",
    "story.p2": "Exchange available",
    "story.p3": "Tirana, Durrës Road",
    "story.p4": "Order via Instagram DM",
    "visit.label": "Visit & order",
    "visit.title": "Find us in Tirana",
    "visit.desc": "Try on in store, or message us for your size and order.",
    "visit.store": "Boutique",
    "visit.address": "Durrës Road, Tirana",
    "visit.map": "Open in Maps",
    "visit.contact": "Contact",
    "visit.ig": "Message @nf_collection98_",
    "visit.call": "Call",
    "footer.tag": "Women's Fashion Boutique",
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
    "marquee": ["Dresses", "Sets", "Style", "Tirana", "Albania shipping", "Exchange"]
  }
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem(LANG_KEY) || "sq";
let activeProduct = null;
let selectedSize = "M";

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
    track.innerHTML = doubled.map((word, i) => {
      const sep = i < doubled.length - 1 ? "<span>·</span>" : "";
      return `<span>${word}</span>${sep}`;
    }).join("");
  }

  document.title =
    lang === "sq"
      ? "NF Collection — Boutique modeje për femra · Tiranë"
      : "NF Collection — Women's Fashion Boutique · Tirana";

  renderProducts();
  updateCartUI();
  if (activeProduct) openProduct(activeProduct.id, true);
}

function setLang(next) {
  lang = next;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (p, i) => `
    <article class="product-card" data-id="${p.id}" style="transition-delay:${i * 70}ms">
      <div class="product-media">
        <img src="${p.image}" alt="${loc(p.name)}" loading="lazy" width="600" height="800">
        ${p.badge ? `<span class="product-badge">${loc(p.badge)}</span>` : ""}
      </div>
      <div class="product-info">
        <h3>${loc(p.name)}</h3>
        <p class="product-color">${loc(p.color)}</p>
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
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
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

function initHeroSlides() {
  const slides = $$(".hero-slide");
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove("is-active");
    i = (i + 1) % slides.length;
    void slides[i].offsetWidth;
    slides[i].classList.add("is-active");
  }, 7000);
}

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyI18n();
  initHeader();
  initHeroSlides();

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
