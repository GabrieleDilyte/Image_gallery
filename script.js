const photos = [
  {
    src: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  {
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
    alt: "strong waves",
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy water",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
];
let currentImg = null;

function createImgElement(src, alt, id) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  if (id) {
    img.id = id;
  }
  return img;
}

function updateCurrentImg(currentImg) {
  const selectedImg = document.querySelector("#selectedImg");
  selectedImg.src = photos[currentImg].src;
  selectedImg.alt = photos[currentImg].alt;
}

window.addEventListener("DOMContentLoaded", () => {
  //Creating image gallery
  const galleryDiv = document.createElement("div");
  galleryDiv.id = "gallery";
  document.querySelector("#app").appendChild(galleryDiv);

  photos.forEach((element) => {
    const img = createImgElement(element.src, element.alt);
    galleryDiv.appendChild(img);
  });

  document.querySelectorAll("#gallery img").forEach((element) => {
    element.addEventListener("click", (element) => {
      //Creating single image div on top
      const singleImgDiv = document.createElement("div");
      singleImgDiv.id = "singleImg";
      const leftArrow = createImgElement(
        "./arrow-left.png",
        "left arrow",
        "leftArrow"
      );
      const img = createImgElement(
        element.target.src,
        element.target.alt,
        "selectedImg"
      );
      const rightArrow = createImgElement(
        "./arrow-right.png",
        "right arrow",
        "rightArrow"
      );

      singleImgDiv.append(leftArrow, img, rightArrow);
      document.querySelector("#app").appendChild(singleImgDiv);

      currentImg = photos.findIndex((element) => {
        return element.src === img.src;
      });

      //Changing image source on arrow click or else removing single image div
      document
        .querySelector("#singleImg")
        .addEventListener("click", (event) => {
          if (event.target.tagName !== "IMG") {
            singleImgDiv.remove();
          } else if (event.target.id === "leftArrow" && currentImg > 0) {
            currentImg -= 1;
            updateCurrentImg(currentImg);
          } else if (
            event.target.id === "rightArrow" &&
            currentImg < photos.length - 1
          ) {
            currentImg += 1;
            updateCurrentImg(currentImg);
          }
        });
    });
  });
});
