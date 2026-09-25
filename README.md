<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Amadou Ba — Économiste</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap');

:root{
  --bg:#f7f7f5;
  --card:#ffffff;
  --text:#111111;
  --muted:#6b6b68;
  --line:#deded9;
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  font-family:"DM Sans",sans-serif;
  line-height:1.65;
}

body.dark{
  --bg:#0d0d0d;
  --card:#151515;
  --text:#f4f4f1;
  --muted:#aaa;
  --line:#2c2c2c;
}

a{
  color:inherit;
  text-decoration:none;
}

/* NAVIGATION */

.nav{
  position:sticky;
  top:0;
  z-index:10;
  height:70px;
  padding:0 6%;
  display:flex;
  align-items:center;
  gap:25px;
  background:rgba(247,247,245,.9);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line);
}

.dark .nav{
  background:rgba(13,13,13,.9);
}

.logo{
  font-family:Manrope;
  font-size:20px;
  font-weight:800;
  margin-right:auto;
}

.logo span{
  font-size:28px;
}

.navlinks{
  display:flex;
  gap:25px;
  color:var(--muted);
  font-size:14px;
}

.navlinks a:hover{
  color:var(--text);
}

#theme{
  border:1px solid var(--line);
  background:var(--card);
  color:var(--text);
  width:38px;
  height:38px;
  border-radius:50%;
  cursor:pointer;
}

/* STRUCTURE */

.container{
  max-width:1080px;
  margin:auto;
  padding:0 28px;
}

.hero{
  padding-top:125px;
  padding-bottom:110px;
}

.label{
  text-transform:uppercase;
  letter-spacing:.13em;
  font-size:11px;
  font-weight:700;
  color:var(--muted);
  margin-bottom:20px;
}

h1,h2,h3{
  font-family:Manrope;
  line-height:1.1;
  letter-spacing:-.035em;
}

h1{
  font-size:clamp(45px,7vw,78px);
  max-width:850px;
  margin:0 0 28px;
}

h2{
  font-size:clamp(32px,5vw,52px);
  margin:0 0 30px;
}

h3{
  font-size:23px;
  margin:8px 0 13px;
}

.lead{
  max-width:720px;
  color:var(--muted);
  font-size:19px;
}

/* BOUTONS */

.buttons{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin:35px 0 70px;
}

.btn{
  padding:12px 18px;
  border:1px solid var(--line);
  border-radius:8px;
  font-weight:600;
  font-size:14px;
}

.btn.main{
  background:var(--text);
  color:var(--bg);
  border-color:var(--text);
}

/* STATISTIQUES */

.stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  border-top:1px solid var(--line);
}

.stats div{
  padding:23px 20px 0 0;
}

.stats strong,
.stats span{
  display:block;
}

.stats span{
  color:var(--muted);
  font-size:13px;
}

/* SECTIONS */

section{
  border-top:1px solid var(--line);
  padding:90px 0;
}

.two{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:70px;
}

.two p,
.project p,
.note p,
.contact p{
  color:var(--muted);
  font-size:17px;
}

/* PROJETS */

.project{
  display:grid;
  grid-template-columns:65px 1fr;
  gap:20px;
  padding:38px 0;
  border-top:1px solid var(--line);
}

.number{
  color:var(--muted);
  font-family:Manrope;
}

.tag{
  color:var(--muted)!important;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-size:11px!important;
  font-weight:700;
}

.chips{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:18px;
}

.chips span{
  border:1px solid var(--line);
  border-radius:100px;
  padding:4px 9px;
  font-size:12px;
  color:var(--muted);
}

/* COMPÉTENCES */

.skills{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:1px;
  background:var(--line);
  border:1px solid var(--line);
}

.skill{
  background:var(--bg);
  padding:28px;
  min-height:160px;
}

.skill h3{
  font-size:18px;
}

.skill p{
  color:var(--muted);
  font-size:14px;
}

/* PARCOURS */

.timeline{
  border-left:1px solid var(--line);
  padding-left:28px;
}

.timeline-item{
  margin-bottom:42px;
}

.year{
  color:var(--muted);
  font-size:13px;
}

/* CONTACT */

.note h2{
  max-width:780px;
}

.email{
  display:inline-block;
  margin-top:18px;
  font-family:Manrope;
  font-size:clamp(20px,4vw,34px);
  font-weight:700;
  border-bottom:2px solid var(--text);
}

/* FOOTER */

footer{
  max-width:1080px;
  margin:auto;
  padding:28px;
  border-top:1px solid var(--line);
  display:flex;
  justify-content:space-between;
  color:var(--muted);
  font-size:13px;
}

/* MOBILE */

@media(max-width:760px){

  .nav{
    padding:0 18px;
  }

  .navlinks{
    display:none;
  }

  .container{
    padding:0 20px;
  }

  .hero{
    padding-top:80px;
    padding-bottom:80px;
  }

  .stats,
  .two,
  .skills{
    grid-template-columns:1fr;
  }

  .stats div{
    padding:18px 0;
    border-bottom:1px solid var(--line);
  }

  section{
    padding:70px 0;
  }

  .project{
    grid-template-columns:35px 1fr;
    gap:10px;
  }

  footer{
    padding:24px 20px;
  }
}
</style>
</head>


<body>

<!-- NAVIGATION -->

<header class="nav">

  <a class="logo" href="#accueil">
    Amadou Ba<span>.</span>
  </a>

  <nav class="navlinks">
    <a href="#about">À propos</a>
    <a href="#projects">Projets</a>
    <a href="#skills">Compétences</a>
    <a href="#parcours">Parcours</a>
    <a href="#contact">Contact</a>
  </nav>

  <button id="theme">◐</button>

</header>


<main id="accueil">


<!-- ACCUEIL -->

<section class="hero">

<div class="container">

  <div class="label">
    Économie · Analyse quantitative · Données
  </div>

  <h1>
    Je transforme les données économiques en analyses utiles.
  </h1>

  <p class="lead">
    Je suis Amadou Ba, titulaire d'un Master 2 en Analyse économique
    et quantitative. Je m'intéresse à l'économétrie, aux politiques
    publiques, à la dette publique, à l'analyse de données et au
    suivi-évaluation.
  </p>

  <div class="buttons">

    <a class="btn main" href="#projects">
      Voir mes projets
    </a>

    <a class="btn" href="#contact">
      Me contacter
    </a>

  </div>


  <div class="stats">

    <div>
      <strong>Master 2</strong>
      <span>Analyse économique & quantitative</span>
    </div>

    <div>
      <strong>Stata</strong>
      <span>Économétrie & séries temporelles</span>
    </div>

    <div>
      <strong>Recherche</strong>
      <span>Analyse des politiques publiques</span>
    </div>

  </div>

</div>

</section>


<!-- À PROPOS -->

<section id="about">

<div class="container">

  <div class="label">
    01 — À propos
  </div>

  <h2>
    Économiste avec une approche quantitative.
  </h2>

  <div class="two">

    <p>
      Ma formation m'a permis de développer une approche fondée
      sur l'analyse des données, l'économétrie et la recherche
      économique. Je cherche à comprendre les mécanismes économiques
      derrière les chiffres et à produire des analyses claires
      et vérifiables.
    </p>

    <p>
      Mes centres d'intérêt comprennent notamment la dette publique,
      les finances publiques, la croissance, l'investissement,
      les politiques publiques et le suivi-évaluation.
    </p>

  </div>

</div>

</section>


<!-- PROJETS -->

<section id="projects">

<div class="container">

  <div class="label">
    02 — Projets
  </div>

  <h2>
    Travaux & recherches
  </h2>


  <article class="project">

    <div class="number">
      01
    </div>

    <div>

      <p class="tag">
        Mémoire de Master · Économétrie
      </p>

      <h3>
        Efficacité de l'endettement du Sénégal
      </h3>

      <p>
        Analyse économétrique de la relation entre dette publique
        et activité économique au Sénégal, avec une attention portée
        à la dynamique de long terme et au service de la dette.
      </p>

      <div class="chips">
        <span>Stata</span>
        <span>ARDL</span>
        <span>Séries temporelles</span>
        <span>Dette publique</span>
      </div>

    </div>

  </article>


  <article class="project">

    <div class="number">
      02
    </div>

    <div>

      <p class="tag">
        Analyse quantitative
      </p>

      <h3>
        Modélisation macroéconomique
      </h3>

      <p>
        Travaux sur la croissance, l'investissement, l'ouverture
        commerciale, l'inflation, la démographie et les indicateurs
        de dette à partir de données annuelles.
      </p>

      <div class="chips">
        <span>Régression</span>
        <span>Stationnarité</span>
        <span>ARDL</span>
        <span>Diagnostic</span>
      </div>

    </div>

  </article>


  <article class="project">

    <div class="number">
      03
    </div>

    <div>

      <p class="tag">
        Recherche · Finances publiques
      </p>

      <h3>
        Analyse de la dette et des finances publiques
      </h3>

      <p>
        Analyses et notes consacrées à la dette, au déficit,
        au service de la dette, à l'investissement public
        et aux arbitrages budgétaires.
      </p>

      <div class="chips">
        <span>Recherche</span>
        <span>Analyse de données</span>
        <span>Politiques publiques</span>
      </div>

    </div>

  </article>

</div>

</section>


<!-- COMPÉTENCES -->

<section id="skills">

<div class="container">

  <div class="label">
    03 — Compétences
  </div>

  <h2>
    Outils & domaines
  </h2>


  <div class="skills">

    <div class="skill">
      <h3>Économétrie</h3>
      <p>
        Régressions, séries temporelles, tests de stationnarité,
        ARDL et interprétation des résultats.
      </p>
    </div>

    <div class="skill">
      <h3>Analyse de données</h3>
      <p>
        Nettoyage, préparation, exploration et interprétation
        de données économiques.
      </p>
    </div>

    <div class="skill">
      <h3>Stata</h3>
      <p>
        Manipulation de bases, statistiques, estimation de modèles
        et diagnostics économétriques.
      </p>
    </div>

    <div class="skill">
      <h3>Excel</h3>
      <p>
        Traitement de données, tableaux, indicateurs et analyses
        quantitatives.
      </p>
    </div>

    <div class="skill">
      <h3>Recherche économique</h3>
      <p>
        Revue de littérature, problématique, hypothèses,
        méthodologie et rédaction.
      </p>
    </div>

    <div class="skill">
      <h3>Suivi-évaluation</h3>
      <p>
        Indicateurs, analyse des résultats, reporting et appui
        à la décision.
      </p>
    </div>

  </div>

</div>

</section>


<!-- PARCOURS -->

<section id="parcours">

<div class="container">

  <div class="label">
    04 — Parcours
  </div>

  <h2>
    Formation
  </h2>

  <div class="timeline">

    <div class="timeline-item">

      <div class="year">
        2024 — 2025
      </div>

      <h3>
        Master 2 — Analyse économique et quantitative
      </h3>

      <p>
        Université Gaston Berger, Saint-Louis
      </p>

    </div>


    <div class="timeline-item">

      <div class="year">
        2022 — 2023
      </div>

      <h3>
        Licence — Économie appliquée
      </h3>

      <p>
        Université Gaston Berger, Saint-Louis
      </p>

    </div>

  </div>

</div>

</section>


<!-- OBJECTIF -->

<section class="note">

<div class="container">

  <div class="label">
    05 — Objectif professionnel
  </div>

  <h2>
    Mettre l'analyse économique au service de la décision.
  </h2>

  <p>
    Je suis ouvert aux opportunités en économie, gestion,
    analyse de données, études économiques, suivi-évaluation
    et gestion de projets.
  </p>

</div>

</section>


<!-- CONTACT -->

<section id="contact" class="contact">

<div class="container">

  <div class="label">
    06 — Contact
  </div>

  <h2>
    Parlons de votre projet.
  </h2>

  <p>
    Pour une opportunité professionnelle, une collaboration
    ou un échange autour de l'analyse économique :
  </p>

  <a class="email"
     href="mailto:amadouba211019@gmail.com">
     amadouba211019@gmail.com
  </a>

</div>

</section>

</main>


<!-- FOOTER -->

<footer>

  <span>
    © 2026 Amadou Ba
  </span>

  <a href="#accueil">
    Retour en haut ↑
  </a>

</footer>


<!-- MODE SOMBRE -->

<script>

const theme = document.getElementById("theme");

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

theme.addEventListener("click", function(){

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }

});

</script>

</body>
</html>
