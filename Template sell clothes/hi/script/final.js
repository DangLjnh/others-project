//render products
$(document).ready(function () {
  const productArrivals = [
    {
      id: 1,
      cat: "WATCHES",
      name: "Fashion Men's Watches",
      price: "$230.99",
      rate: 3,
      imageURL: "./images/new-arrivals/9.jpg",
      review: 6,
    },
    {
      cat: "WATCHES",
      name: "Man's Black Wrist Watch",
      price: "$384.43",
      rate: 5,
      imageURL: "./images/new-arrivals/10.jpg",
      review: 21,
    },
    {
      cat: "CLOTHING",
      name: "Fashionable Original Trucker",
      price: "$78.64",
      rate: 2,
      imageURL: "./images/new-arrivals/11.jpg",
      review: 6,
    },
    {
      cat: "BAGS & BACKPACKS",
      name: "Mackintosh Poket Backpack",
      price: "$125.99",
      rate: 3,
      imageURL: "./images/new-arrivals/12.jpg",
      review: 8,
    },
    {
      cat: "CLOTHING",
      name: "Fashionable Orginal Trucker",
      price: "$78.64",
      rate: 2,
      imageURL: "./images/new-arrivals/13.jpg",
      review: 2,
    },
  ];
  const productFeatured = [
    {
      cat: "SHOES",
      name: "Converse Training Shoes",
      price: "$113.00",
      rate: 3,
      imageURL: "./images/our-featured/17.jpg",
      review: 12,
    },
    {
      cat: "BAG",
      name: "Women's Fashion Handbag",
      price: "$74.34",
      rate: 1,
      imageURL: "./images/our-featured/18.jpg",
      review: 6,
    },
    {
      cat: "Women’s",
      name: "Women Beautiful headgear",
      price: "$22.43",
      rate: 5,
      imageURL: "./images/our-featured/19.jpg",
      review: 23,
    },
    {
      cat: "Women’s",
      name: "Hempen Hood a Mourner",
      price: "$29.22",
      rate: 3,
      imageURL: "./images/our-featured/20.jpg",
      review: 12,
    },
  ];
  const productBestWeek = [
    {
      name: "Blue Sports Shoes",
      price: "$36.00",
      rate: 1,
      imageURL: "./images/Best-week/24.jpg",
    },
    {
      name: "Fashion Handbag",
      price: "$53.99",
      rate: 5,
      imageURL: "./images/Best-week/25.jpg",
    },
    {
      name: "Women’s Beautiful Headgear",
      price: "$82.23",
      rate: 4,
      imageURL: "./images/Best-week/24.jpg",
    },
  ];
  const productSale = [
    {
      name: "Women’s Beautiful Headgear",
      price: "$78.24",
      rate: 2,
      imageURL: "./images/sale-product/27.jpg",
    },
    {
      name: "Hand Electric Cell",
      price: "$26.00",
      rate: 5,
      imageURL: "./images/sale-product/28.jpg",
    },
    {
      name: "Women Hempen Hood a Mourner",
      price: "$30.00",
      rate: 1,
      imageURL: "./images/sale-product/29.jpg",
    },
  ];
  const productLastest = [
    {
      name: "Fashionable Orginal Trucker",
      price: "$78.64",
      rate: 2,
      imageURL: "./images/last-product/30.jpg",
    },
    {
      name: "Men Summer Sneaker",
      price: "$79.45",
      rate: 4,
      imageURL: "./images/last-product/31.jpg",
    },
    {
      name: "Season Sports Cap",
      price: "$64.27",
      rate: 1,
      imageURL: "./images/last-product/32.jpg",
    },
  ];
  const productFeature = [
    {
      name: "Blue Sports Shoes",
      price: "$36.00",
      rate: 1,
      imageURL: "./images/feature-product/33.jpg",
    },
    {
      name: "Fashion Handbag",
      price: "$126.23",
      rate: 2,
      imageURL: "./images/feature-product/34.jpg",
    },
    {
      name: "Hempen Hood a Mourner",
      price: "$82.23",
      rate: 3,
      imageURL: "./images/feature-product/35.jpg",
    },
  ];
  renderProducts(".owl-carousel.new-arrivals-slide", productArrivals);
  renderProducts(".owl-carousel.featured-slide", productFeatured);
  renderGridProducts(".col-item.best-week", productBestWeek);
  renderGridProducts(".col-item.sale-product", productSale);
  renderGridProducts(".col-item.last-product", productLastest);
  renderGridProducts(".col-item.feature-product", productFeature);
});
function renderProducts(selector = "", products = []) {
  products.forEach((val, i) => {
    $(selector).append(`
      <div class="product-item">
        <div class="product-media">
          <img src="${val.imageURL}" alt="">
        <div class="product-label">
          <label for="">NEW</label>
        </div>
        <div class="product-action-vertical">
          <a href="#" class="btn-cart">
            <i class="bx bx-shopping-bag"></i>
          </a>
          <a href="#" class="btn-heart">
            <i class="bx bx-heart"></i>
          </a>
        </div>
        <div class="product-action">
          <a href="">QUICK VIEW</a>
        </div>
      </div>
        <div class="product-arr-detail data-index=${i}">
          <div class="product-cat">
            <a href="">${val.cat}</a>
          </div>
          <div class="product-name">
            <a href="">${val.name}</a>
          </div>
          <div class="product-price">
            <span>${val.price}</span>
          </div>
          <div class="product-rating">
            <div class="rating-fulls">
              ${renderStar(val.rate)}
              <div class="popup">
                ${val.rate}.00
              </div>
            </div>
            <div class="rating-reviews">
              <a href="">( ${val.review} reviews )</a>
            </div>
          </div>
        </div>
      </div>
    `);
  });
}
function renderGridProducts(selector = "", products = []) {
  let count = 1;
  products.forEach((val, i) => {
    $(selector).append(`
  <div class="products">
    <div class="product-item">
      <div class="product-image">
        <a href="#"><img src="${val.imageURL}" alt=""></a>
      </div>
      <div class="product-detail">
        <a href="#" class="product-name">${val.name}</a>
        <div class="product-price">
          <span>${val.price}</span>
        </div>
        <div class="rating-containers">
          ${renderStar(val.rate)}
          ${count} <button class="count">+</button>
          <div class="popup">
            ${val.rate}.00
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
  });
}

//render star
function renderStar(stars) {
  let starsString = "";
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsString += `<i class="fa-solid fa-star active"></i>`;
    } else {
      starsString += `<i class="fa-solid fa-star "></i>`;
    }
  }
  return starsString;
}

// popup
// var hidePopup = localStorage.getItem("hidePopup");
setTimeout(() => {
  $("html").css("overflow", "hidden");
  $(".modal").fadeIn().css("display", "flex");
  $(".modal-wrapper").addClass("animate-flipModal");
  // if (!hidePopup) {
  // }
}, 5000);

$(".btn-close-modal").click(function (e) {
  $(".modal").fadeOut();
  $("html").css("overflow", "visible");
  e.preventDefault();
  // hidePopupEvent();
});

$(".modal").click(function (e) {
  $(".modal").fadeOut();
  $("html").css("overflow", "visible");
  e.preventDefault();
  // hidePopupEvent();
});

$(".modal-wrapper").click(function (e) {
  //khong nhan su kien ben ngoai
  e.stopPropagation();
  e.preventDefault();
});

// function hidePopupEvent() {

//scroll-top
//   $(".modal").fadeOut();
//   if ($("#show").is(":checked")) {
//     localStorage.setItem("hidePopup", true);
//   }
// }

//click to scroll
$(".scroll-top").click(function (e) {
  e.preventDefault();
  const body = $("html, body");
  body.animate(
    {
      scrollTop: 0,
    },
    500
  );
});

//animate scroll top
$(document).ready(function () {
  $(window).scroll(function () {
    const scroll = $("html").scrollTop();
    if (scroll > 250) {
      $(".scroll-top").addClass("scroll-top-animate");
    } else {
      $(".scroll-top").removeClass("scroll-top-animate");
    }
  });
});

//animate header
$(document).ready(function () {
  $(window).scroll(function () {
    const header = $("html").scrollTop();
    if (header > 150) {
      $(".header-bot-banner").css("padding", "15px 0");
      $(".header-bot-banner").addClass("sticky");
    } else {
      $(".header-bot-banner").css("padding", "32px 0");
      $(".header-bot-banner").removeClass("sticky");
    }
  });
});
//animation
$(document).ready(function () {
  $(".banner-subttle").addClass("animate-toRight");
  $(".banner-title").addClass("animate-toTop-content");
  setTimeout(() => {
    $(".btn-link").addClass("animate-toTop-content");
  }, 500);
  $(window).scroll(function () {
    const heightWeb = $("html").scrollTop();
    console.log(heightWeb);
    $(".grid-item-left").addClass("animate-toRight");
    $(".grid-items-right-top").addClass("animate-toLeft");
    $(".grid-items-right-bot").addClass("animate-toLeft");
    if (heightWeb > 300) {
      $(".new-arrivals").addClass("animate-fadeIn");
    }
    if (heightWeb > 1230) {
      $(".our-featured").addClass("animate-fadeIn");
    }
    if (heightWeb > 1900) {
      $(".banner-content-video").addClass("animate-toTop");
    }
    if (heightWeb > 2236) {
      $(".lastest-news ").addClass("animate-fadeIn");
    }
    if (heightWeb > 2577) {
      $(".discount-content").addClass("animate-special");
    }
    if (heightWeb > 2943) {
      $(".best-week").addClass("animate-toRight");
      $(".feature-product").addClass("animate-toLeft");
      setTimeout(() => {
        $(".sale-product").addClass("animate-toRight");
        $(".last-product").addClass("animate-toLeft");
      }, 500);
      if (heightWeb > 3589) {
        $("footer").addClass("animate-fadeIn");
      }
    }
  });
});
//play video
$(document).ready(function () {
  $(".play-video").click(function (e) {
    $(".mfp-container").fadeIn();
    $(".mfp-container").css("display", "flex");
    $("html").css("overflow", "hidden");
    $(".video-promotion").trigger("play");
    e.preventDefault();
  });
  $(".mfp-container").click(function (e) {
    e.preventDefault();
    $(".mfp-container").fadeOut();
    $("html").css("overflow", "visible");
  });
  $(".video-promotion").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
  });
  $(".video-promotion").hover(
    function () {
      $(".video-promotion").trigger("play");
    },
    function () {
      $(".video-promotion").trigger("pause");
    }
  );
});
//owl-carousel
$(".owl-carousel.intro-slide").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  smartSpeed: 400,
  autoplayHoverPause: true,
});

setTimeout(() => {
  $(".owl-carousel.new-arrivals-slide").owlCarousel({
    items: 4,
    margin: 20,
    autoplay: true,
    smartSpeed: 400,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
      },
      600: {
        items: 3,
        nav: false,
        dots: true,
      },
      1000: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });

  $(".owl-carousel.featured-slide").owlCarousel({
    items: 4,
    margin: 20,
    autoplay: true,
    smartSpeed: 400,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
      },
      600: {
        items: 3,
        nav: false,
        dots: true,
      },
      1000: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });
}, 1000);

$(".owl-carousel.news-bot").owlCarousel({
  margin: 20,
  responsive: {
    0: {
      items: 2,
      dots: true,
    },
    600: {
      items: 2,
      dots: true,
    },
    1000: {
      items: 3,
      dots: false,
    },
  },
});
$(".owl-carousel.modal-img").owlCarousel({
  items: 4,
});
// countt.addEventListener("click", () => console.log("cc"));
