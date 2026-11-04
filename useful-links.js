
/* =========================================
   USEFUL LINKS DATABASE

   Add new links here.
   No database required.
   ========================================= */

const usefulLinks = [

  // PDF & DOCUMENT TOOLS

  {
    category: "PDF & Document Tools",
    icon: "📄",
    name: "PDF Editor",
    description: "Edit PDF documents online.",
    url: "https://www.sejda.com/pdf-editor"
  },

  {
    category: "PDF & Document Tools",
    icon: "📄",
    name: "Word to PDF",
    description: "Convert Word documents into PDF.",
    url: "https://www.sejda.com/word-to-pdf"
  },


  // IMAGE TOOLS

  {
    category: "Image Tools",
    icon: "🖼️",
    name: "HEIC Converter",
    description: "Convert HEIC images to JPG.",
    url: "https://image.online-convert.com/convert-to-jpg"
  },

  {
    category: "Image Tools",
    icon: "🎨",
    name: "Black & White to Color",
    description: "Colorize black and white photographs.",
    url: "https://imagecolorizer.com/colorize"
  },


  // UAE GOVERNMENT SERVICES

  {
    category: "UAE Government Services",
    icon: "🇦🇪",
    name: "ICP Leave Permit",
    description: "Access ICP leave permit services.",
    url: "https://smartservices.icp.gov.ae/echannels/web/client/guest/index.html#/leavePermit/588/step1?administrativeRegionId=1&withException=false"
  },

  {
    category: "UAE Government Services",
    icon: "🇦🇪",
    name: "Emirates ID QR Code",
    description: "Access the ICP Emirates ID QR code service.",
    url: "https://smartservices.icp.gov.ae/echannels/web/client/guest/index.html#/issueQrCode"
  },


  // CLOUD & FILE SHARING

  {
    category: "Cloud & File Sharing",
    icon: "☁️",
    name: "Wormhole",
    description: "Simple and private file sharing.",
    url: "https://wormhole.app/"
  },

  {
    category: "Cloud & File Sharing",
    icon: "☁️",
    name: "deepStorage",
    description: "Explore online cloud storage.",
    url: "https://deepstorage.dev/"
  },


  // ADD MORE LINKS BELOW

  {
    category: "Useful Tools",
    icon: "🔧",
    name: "Example Website",
    description: "Add your website description here.",
    url: "https://example.com"
  }

];


/* =========================================
   ELEMENTS
   ========================================= */

const linksContainer =
  document.getElementById("linksContainer");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const resultsInfo =
  document.getElementById("resultsInfo");

const emptyMessage =
  document.getElementById("emptyMessage");


/* =========================================
   GET CATEGORIES
   ========================================= */

const categories = [
  ...new Set(
    usefulLinks.map(link => link.category)
  )
];


/* =========================================
   CREATE CATEGORY DROPDOWN
   ========================================= */

categories.forEach(category => {

  const option =
    document.createElement("option");

  option.value = category;

  option.textContent = category;

  categoryFilter.appendChild(option);

});


/* =========================================
   RENDER LINKS
   ========================================= */

function displayLinks() {

  linksContainer.innerHTML = "";

  const search =
    searchInput.value.toLowerCase().trim();

  const selectedCategory =
    categoryFilter.value;


  let totalResults = 0;


  categories.forEach(category => {

    if (
      selectedCategory !== "all" &&
      selectedCategory !== category
    ) {
      return;
    }


    const categoryLinks =
      usefulLinks.filter(link => {

        const matchesCategory =
          link.category === category;

        const matchesSearch = [

          link.name,
          link.description,
          link.category

        ].join(" ").toLowerCase().includes(search);

        return matchesCategory && matchesSearch;

      });


    if (!categoryLinks.length) {
      return;
    }


    totalResults += categoryLinks.length;


    // CATEGORY SECTION

    const section =
      document.createElement("section");

    section.className = "category";


    // CATEGORY HEADER

    const header =
      document.createElement("div");

    header.className = "category-header";


    const title =
      document.createElement("h2");

    const icon =
      categoryLinks[0].icon || "🔗";

    title.textContent =
      `${icon} ${category}`;


    const count =
      document.createElement("span");

    count.textContent =
      `${categoryLinks.length} links ▼`;


    header.appendChild(title);

    header.appendChild(count);


    // CATEGORY CONTENT

    const content =
      document.createElement("div");

    content.className = "category-content";


    const grid =
      document.createElement("div");

    grid.className = "link-grid";


    categoryLinks.forEach(link => {

      const card =
        document.createElement("a");

      card.className = "link-card";

      card.href = link.url;

      card.target = "_blank";

      card.rel = "noopener noreferrer";


      const name =
        document.createElement("strong");

      name.textContent = link.name;


      const description =
        document.createElement("small");

      description.textContent =
        link.description;


      const open =
        document.createElement("span");

      open.className = "open-link";

      open.textContent = "Open Website ↗";


      card.appendChild(name);

      card.appendChild(description);

      card.appendChild(open);


      grid.appendChild(card);

    });


    content.appendChild(grid);


    // COLLAPSIBLE CATEGORY

    header.addEventListener("click", () => {

      const isHidden =
        content.style.display === "none";

      content.style.display =
        isHidden ? "block" : "none";

      count.textContent =
        `${categoryLinks.length} links ${
          isHidden ? "▼" : "▶"
        }`;

    });


    section.appendChild(header);

    section.appendChild(content);


    linksContainer.appendChild(section);

  });


  // RESULTS COUNT

  resultsInfo.textContent =
    `Showing ${totalResults} of ${usefulLinks.length} links`;


  // EMPTY RESULTS

  emptyMessage.style.display =
    totalResults === 0 ? "block" : "none";

}


/* =========================================
   SEARCH
   ========================================= */

searchInput.addEventListener(
  "input",
  displayLinks
);


/* =========================================
   CATEGORY FILTER
   ========================================= */

categoryFilter.addEventListener(
  "change",
  displayLinks
);


/* =========================================
   INITIALIZE
   ========================================= */

displayLinks();

