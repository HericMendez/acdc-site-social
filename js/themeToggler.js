const html = document.querySelector("html");

const btn = document.getElementById("toggler");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const themes = [
  {
    primary: getStyle(html, "--primary"),
    secondary: getStyle(html, "--secondary"),
    bgColor: getStyle(html, "--bg-color"),

    title: getStyle(html, "--title"),
    text: getStyle(html, "--text"),
    subtext: getStyle(html, "--subtext"),
  },

  {
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


window.onload = changeColors(themes[1]);
checkbox = document.getElementById("themeToggler");

checkbox.addEventListener("change", (e) => {
  console.log(e.target.checked);

  if (e.target.checked) {
    changeColors(themes[0]);
  } else {
    changeColors(themes[1]);
  }
});


checkboxMobile = document.getElementById("themeToggler-mobile");

checkboxMobile.addEventListener("change", (e) => {
  console.log(e.target.checked);

  if (e.target.checked) {
    changeColors(themes[0]);
  } else {
    changeColors(themes[1]);
  }
});

