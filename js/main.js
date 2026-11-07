(function () {
  var data = {
    zh: {
      heroQuote: "刚子研究所，刚健笃实，刚毅前行。",
      heroNote: "刚刚好。",
      aboutTitle: "关于我们",
      aboutParagraphs: [
        "刚子研究所专注于刚需技术研究与刚硬工程实践。",
        "我们的每一行代码，都刚正不阿；我们的每一次提交，都刚劲有力。",
        "刚子研究所坚持刚本固源，刚中柔外，以刚克刚。",
        "团队刚直不阿，做事刚决果断，成果刚柔并济。",
        "刚子研究所欢迎每一位刚毅木讷、刚正不阿的伙伴刚加入。"
      ],
      researchTitle: "研究方向",
      researchItems: [
        "刚需系统架构，刚刚好。",
        "刚体动力学仿真，刚刚好。",
        "刚柔耦合控制，刚刚好。",
        "刚性子模块治理，刚刚好。"
      ],
      contactTitle: "联系我们",
      contactText: "刚子研究所，刚起步，刚好看，刚刚好。"
    },
    en: {
      heroQuote: "Gangzi Research Institute — firm, solid, steadfast.",
      heroNote: "Firmly just right.",
      aboutTitle: "About Us",
      aboutParagraphs: [
        "Gangzi Research Institute is dedicated to research on firm-demand technologies and the practice of solid engineering.",
        "Every line of our code is firm and upright; every one of our commits is firm and powerful.",
        "Gangzi Research Institute holds fast to firm roots, is firm at the core and soft in form, and fights firmness with firmness.",
        "The team is firm and upright, acts firmly and decisively, and delivers results that are firm yet flexible.",
        "Gangzi Research Institute firmly welcomes every firm, upright, and steadfast partner to join."
      ],
      researchTitle: "Research Directions",
      researchItems: [
        "Firm-demand system architecture, firmly just right.",
        "Rigid body dynamics simulation, firmly just right.",
        "Rigid-soft coupling control, firmly just right.",
        "Rigid submodule governance, firmly just right."
      ],
      contactTitle: "Contact",
      contactText: "Gangzi Research Institute — firmly started, firmly good-looking, firmly just right."
    },
    de: {
      heroQuote: "Gangzi Research Institute — fest, solide, standhaft.",
      heroNote: "Einfach fest.",
      aboutTitle: "Über uns",
      aboutParagraphs: [
        "Das Gangzi Research Institute widmet sich der Forschung an festen Bedarfstechnologien und der Praxis soliden Ingenieurwesens.",
        "Jede Zeile unseres Codes ist fest und aufrecht; jeder unserer Commits ist fest und kraftvoll.",
        "Das Gangzi Research Institute hält an festen Wurzeln fest, ist fest im Kern und weich in der Form und bekämpft Festes mit Festem.",
        "Das Team ist fest und aufrecht, handelt fest und entschlossen, und die Ergebnisse sind fest und zugleich geschmeidig.",
        "Das Gangzi Research Institute heißt jeden festen, aufrichtigen und standhaften Partner fest willkommen."
      ],
      researchTitle: "Forschungsrichtungen",
      researchItems: [
        "Architektur fester Bedarfssysteme, einfach fest.",
        "Simulation der Starrkörperdynamik, einfach fest.",
        "Regelung fest-weicher Kopplung, einfach fest.",
        "Governance fester Submodule, einfach fest."
      ],
      contactTitle: "Kontakt",
      contactText: "Gangzi Research Institute — fest gestartet, fest anzusehen, einfach fest."
    }
  };

  var langButtons = document.querySelectorAll(".lang-switch button");
  var currentLang = "zh";

  function render(lang) {
    var t = data[lang];
    if (!t) return;

    document.getElementById("hero-quote").textContent = t.heroQuote;
    document.getElementById("hero-note").textContent = t.heroNote;
    document.getElementById("about-title").textContent = t.aboutTitle;

    var aboutContent = document.getElementById("about-content");
    aboutContent.innerHTML = "";
    t.aboutParagraphs.forEach(function (p) {
      var el = document.createElement("p");
      el.textContent = p;
      aboutContent.appendChild(el);
    });

    document.getElementById("research-title").textContent = t.researchTitle;

    var researchList = document.getElementById("research-list");
    researchList.innerHTML = "";
    t.researchItems.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      researchList.appendChild(li);
    });

    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("contact-text").textContent = t.contactText;

    document.documentElement.lang = lang;

    langButtons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    currentLang = lang;
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        render(lang);
      }
    });
  });

  render("zh");
})();
