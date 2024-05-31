var menuLinks = [
  { text: "home", href: "/home" },
  {
    text: "properties",
    href: "#",
    subLinks: [
      { text: "boroughs", href: "/catalog/all" },
      { text: "trending", href: "/catalog/top" },
      { text: "all", href: "/catalog/search" },
    ],
  },
  {
    text: "profiles",
    href: "#",
    subLinks: [
      { text: "landloards", href: "/orders/landloards" },
      { text: "tenants", href: "/orders/tenants" },
      { text: "trending", href: "/orders/trending" },
    ],
  },
  {
    text: "account ",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");
mainEl.style.background = "var( --main-bg)";
mainEl.innerHTML = "<h2> Zakka </h2>";
mainEl.classList.add("flex-ctr");
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (let i = 0; i < menuLinks.length; i++) {
  let link = document.createElement("a");
  link.setAttribute("href", menuLinks[i].href);
  link.textContent = menuLinks[i].text;
  topMenuEl.append(link);
}

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topMenulinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (event) => {
    const clickedLink = event.target;
    console.log(event.target.textContent);

    const LinkText = clickedLink.textContent.toLowerCase();
    const linkObject = menuLinks.find((link) => link.text === LinkText);

   event.preventDefault();

  
   if (clickedLink.tagName !== "A") return;

  if (clickedLink.classList.contains("active")) {

    clickedLink.classList.remove("active");
    subMenuEl.style.top = "0";
  } else {
    console.log(false)
    document
      .querySelectorAll("#top-menu a")
      .forEach((a) => a.classList.remove("active"));
    clickedLink.classList.add("active");
    if (linkObject.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(linkObject.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
  }
});

function buildSubmenu(sublinks) {
  subMenuEl.innerHTML = "";

  sublinks.forEach((link) => {
    const aElement = document.createElement("a");
    aElement.href = link.ref;
    aElement.textContent = link.text;
    subMenuEl.appendChild(aElement);
  });
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.targetName !== "A") return;

  console.log("submenu link clicked", event.target.textContent);
});

const form = document.getElementById("form")

const firstName = document.getElementById("fname")

const lastName = document.getElementById("lname")

const email = document.getElementById("email")

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  console.log(firstName.value)
  alert(`Thank you for your information ${firstName.value}`)
  form.reset()
  console.log("hi")

})