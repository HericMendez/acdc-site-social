const html = document.querySelector("html");

const btn = document.getElementById("toggler");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const themes = [
  {
    name: "Light",
    src: "assets/img/icons/theme-sun.svg",

    primary: getStyle(html, "--primary"),
    secondary: getStyle(html, "--secondary"),
    bgColor: getStyle(html, "--bg-color"),

    title: getStyle(html, "--title"),
    text: getStyle(html, "--text"),
    subtext: getStyle(html, "--subtext"),
  },

  {
    name: "Dark",
    src: "assets/img/icons/theme-moon.svg",

    primary: "#0000ff",
    secondary: "#ccc",
    bgColor: "#222",

    title: "#fff",
    text: "#bbb",
    subtext: "#666",
  },
];

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};
/*
let count = 0;
btn.addEventListener("click", () => {
  count++;
  if (count >= themes.length) count = 0;
  console.log(`Theme index ${count}: ${themes[count].name}`);
  changeColors(themes[count]);
  document.getElementById("theme-icon").src = themes[count].src;
  document.getElementById("info-icon").src = themes[count].srcInfo;
  //document.getElementById("theme-title").innerHTML = `${themes[count].name} Theme`
  
});
*/

checkbox = document.getElementById("themeToggler");

checkbox.addEventListener("change", (e) => {
  console.log(e.target.checked);

  if (e.target.checked) {
    changeColors(themes[0]);
  } else {
    changeColors(themes[1]);
  }
});
