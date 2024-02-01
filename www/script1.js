const mainMenuItems = document.querySelectorAll("nav ul li");
const asideContents = document.querySelectorAll(
  "#bio-content, #photos-content, #discography-content, #links-content, #management-content",
);
const mainContents = document.querySelectorAll(
  "#bio-main, #photos-main, #discography-main, #links-main, #management-main",
);

// Image selection for aside
mainMenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove the hidden class from all aside contents
    asideContents.forEach((content) => content.classList.remove("hidden"));

    // Add the hidden class to all aside contents except the selected one
    asideContents.forEach((content, i) => {
      if (i !== index) {
        content.classList.add("hidden");
      }
    });

    // Remove the hidden class from the corresponding main content
    mainContents.forEach((content) => content.classList.remove("hidden"));

    // Add the hidden class to all main contents except the selected one
    mainContents.forEach((content, i) => {
      if (i !== index) {
        content.classList.add("hidden");
      }
    });
  });
});

// Photo Albums selection (in aside)
const asidePhotoAlbums = document.querySelectorAll(
  "aside #photos-content ul li",
);
const mainphotos = document.querySelectorAll(
  "#photos-main1, #photos-main2, #photos-main3",
);

asidePhotoAlbums.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove the hidden class from all main photos
    mainphotos.forEach((content) => content.classList.remove("hidden"));

    // Add the hidden class to all main photos except the selected one
    mainphotos.forEach((content, i) => {
      if (i !== index) {
        content.classList.add("hidden");
      }
    });
  });
});

// Bio selection (in aside)
const asideBioOptions = document.querySelectorAll("aside div ul li");
const mainbio = document.querySelectorAll(
  "#bio-main1, #bio-main2, #bio-main3, #bio-main4",
);

asideBioOptions.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove the hidden class from all main photos
    mainbio.forEach((content) => content.classList.remove("hidden"));

    // Add the hidden class to all main photos except the selected one
    mainbio.forEach((content, i) => {
      if (i !== index) {
        content.classList.add("hidden");
      }
    });
  });
});

// Image viewer for main
document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

// DISCOGRAPHY
function getJSONtopsongs() {
  fetch("songs.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDataDISCOGRAPHYsongs(json))
    .catch((err) => console.error("error:", err));
}

function getJSONsingles() {
  fetch("singles.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDataDISCOGRAPHYsingles(json))
    .catch((err) => console.error("error:", err));
}

function getJSONalbums() {
  fetch("albums.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDataDISCOGRAPHYsingles(json))
    .catch((err) => console.error("error:", err));
}

function showJSONDataDISCOGRAPHYsongs(albums) {
  let anHTML = `<table><tr><th>ID</th>
      <th>Title</th><th>ALBUM</th></tr>`;
  for (let anAlbum of albums) {
    anHTML +=
      "<tr><td>" +
      anAlbum.id +
      "</td><td>" +
      anAlbum.title +
      "</td><td>" +
      anAlbum.album +
      "</td></tr>";
  }
  anHTML += "</table>";
  //Show table with albums
  document.getElementById("output_discography").innerHTML = anHTML;
}
function showJSONDataDISCOGRAPHYsingles(albums) {
  let anHTML = `<table><tr><th>ID</th>
      <th>Title</th><th>YEAR</th></tr>`;
  for (let anAlbum of albums) {
    anHTML +=
      "<tr><td>" +
      anAlbum.id +
      "</td><td>" +
      anAlbum.title +
      "</td><td>" +
      anAlbum.year +
      "</td></tr>";
  }
  anHTML += "</table>";
  //Show table with albums
  document.getElementById("output_discography").innerHTML = anHTML;
}

// LINKS
function getJSONvideo_clips() {
  fetch("video_clips.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDataLINKS(json))
    .catch((err) => console.error("error:", err));
}

function getJSONconcerts() {
  fetch("concerts.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDataLINKS(json))
    .catch((err) => console.error("error:", err));
}

function getJSONsites() {
  fetch("sites.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDataLINKS(json))
    .catch((err) => console.error("error:", err));
}

function showJSONDataLINKS(albums) {
  let anHTML = `<table><tr><th>ID</th>
      <th>Title</th><th>URL</th></tr>`;
  for (let anAlbum of albums) {
    anHTML +=
      "<tr><td>" +
      anAlbum.id +
      "</td><td>" +
      anAlbum.title +
      "</td><td>" +
      anAlbum.url +
      "</td></tr>";
  }
  anHTML += "</table>";
  //Show table with albums
  document.getElementById("output_links").innerHTML = anHTML;
}
