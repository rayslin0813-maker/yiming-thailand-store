const heroProducts = [
  {
    name: "Handheld Portable Fan",
    tag: "Live Now",
    image: "assets/products/handheld-fan-white.png",
    thaiName: "พัดลมมือถือพกพา",
    bg: "#bff0ec",
    pitch: "Compact digital-display fan for hot commutes, classrooms, travel, and night markets.",
    thaiPitch: "พกพาง่าย เหมาะกับอากาศร้อน เดินทาง เรียน ทำงาน และถ่ายคอนเทนต์ TikTok",
    meta: ["Cooling", "Portable", "Video friendly"],
    retail: "Launch price: ฿199",
    compare: "Regular ฿249",
    wholesale: "Bulk: ask for 20+ pcs price",
    detailLink: "products/handheld-fan.html",
    shopifyLink: "https://fh8gjq-qg.myshopify.com/products/handheld-fan",
    sourceLink: "http://detail.1688.com/offer/1014896542574.html",
  },
  {
    name: "Neck Fan",
    tag: "Live Now",
    image: "assets/products/neck-fan-pink.png",
    thaiName: "พัดลมคล้องคอ",
    bg: "#cfe8ff",
    pitch: "Hands-free cooling with higher perceived value for students, outdoor work, riders, and travel.",
    thaiPitch: "ใช้งานแบบแฮนด์ฟรี ปรับแรงลมได้ 3 ระดับ ชาร์จ USB เหมาะกับอากาศร้อนไทย",
    meta: ["Hands-free", "3-speed", "Margin"],
    retail: "Launch price: ฿249",
    compare: "Regular ฿349",
    wholesale: "Bulk: ask for 20+ pcs price",
    detailLink: "products/neck-fan.html",
    shopifyLink: "https://fh8gjq-qg.myshopify.com/products/neck-fan",
    sourceLink: "http://detail.1688.com/offer/719016467091.html",
  },
];

const upcomingProducts = [
  ["Sun Protection Umbrella", "ร่มกันแดด", "Sun Care", "http://detail.1688.com/offer/901109371565.html"],
  ["Disposable Raincoat", "เสื้อกันฝนใช้ครั้งเดียว", "Rain Traffic", "http://detail.1688.com/offer/814044482787.html"],
  ["Adult Raincoat", "เสื้อกันฝนผู้ใหญ่", "Rain Season", "http://detail.1688.com/offer/677078039913.html"],
  ["Clothes Hanger", "ไม้แขวนเสื้อ", "Home", "http://detail.1688.com/offer/941948466748.html"],
  ["Tissue Paper", "กระดาษทิชชู่", "Daily Use", "http://detail.1688.com/offer/923127995478.html"],
  ["Pop Mart Storage Box", "กล่องเก็บฟิกเกอร์", "Collector", "http://detail.1688.com/offer/1024752662447.html"],
  ["Pill Organizer", "กล่องแบ่งยา", "Travel", "http://detail.1688.com/offer/944621585952.html"],
  ["Lunch Box", "กล่องข้าว", "Kitchen", "http://detail.1688.com/offer/706195884513.html"],
  ["Mop", "ไม้ถูพื้น", "Home", "http://detail.1688.com/offer/834151608038.html"],
  ["Shoe Storage Box", "กล่องเก็บรองเท้า", "Storage", "http://detail.1688.com/offer/688734161934.html"],
];

const grid = document.querySelector("#productGrid");
const upcomingGrid = document.querySelector("#upcomingProducts");

function renderHeroProducts() {
  grid.innerHTML = heroProducts
    .map(
      (product) => `
        <article class="product-card hero-product-card">
          <div class="product-visual" style="--card-bg: ${product.bg}">
            <img class="product-photo" src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-body">
            <span class="product-tag">${product.tag}</span>
            <h3>${product.name}</h3>
            <strong class="product-thai">${product.thaiName}</strong>
            <p>${product.pitch}</p>
            <p class="thai-card">${product.thaiPitch}</p>
            <div class="product-meta">
              ${product.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
            <div class="price-box">
              <strong>${product.retail}</strong>
              <em>${product.compare}</em>
              <span>${product.wholesale}</span>
              <small>PayPal active · THB checkout · Thailand shipping</small>
            </div>
            <div class="card-actions">
              <a class="mini-buy" href="${product.shopifyLink}">Buy now</a>
              <a class="mini-quote" href="${product.detailLink}">Details</a>
              <a class="mini-quote" href="#contact">Wholesale</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderUpcomingProducts() {
  if (!upcomingGrid) return;

  upcomingGrid.innerHTML = upcomingProducts
    .map(
      ([name, thaiName, tag]) => `
        <article class="upcoming-item">
          <span>${tag}</span>
          <strong>${name}</strong>
          <small>${thaiName}</small>
        </article>
      `,
    )
    .join("");
}

renderHeroProducts();
renderUpcomingProducts();
