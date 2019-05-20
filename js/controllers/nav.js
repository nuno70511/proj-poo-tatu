document.addEventListener("DOMContentLoaded", function() {
  let mq = window.matchMedia("all and (max-width: 767px)");
  if (mq.matches) {
    renderSmallNav();
  } else {
    renderBigNav();
  }

  mq.addListener(function (changed) {
    if (changed.matches) {
      renderSmallNav();
    } else {
      renderBigNav();
    }
  });

  $("#tatu-navLink-about").tooltip();
});

function renderSmallNav() {
  document.querySelector("nav.navbar").innerHTML = `
    <a class="navbar-brand ml-3 d-flex align-items-center" href="home.html">
      <img src="../img/logo.svg" width="32">
    </a>
    <div id="tatu-show-sessionMenu" class="ml-auto mr-4">
      <div class="dropdown">
        <div class="btn-group">
          <a id="tatu-navLink-user" class="nav-link btn btn-sm bg-transparent tatu-fontSize-big" href="profile.html"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
              class="fas fa-user-circle" aria-hidden="true"></i></a>
          <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split d-lg-none"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
        </div>
        <div class="dropdown-menu" aria-labelledby="tatu-navLink-user">
          <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-user-cog mr-2"></i>Conta</a>
          <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-flag-checkered mr-2"></i>Progresso</a>
          <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-trophy mr-2"></i>Troféus</a>
          <hr>
          <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-sign-out-alt mr-2"></i>Sair</a>
        </div>
      </div>
    </div>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#tatu-navbar"
      aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="tatu-navbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a id="tatu-navLink-quiz" class="nav-link tatu-fontSize-big" href="quiz.html">Jogar o quiz<i
              class="fas fa-play ml-3" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item">
          <a id="tatu-navLink-catalog" class="nav-link tatu-fontSize-big" href="catalog.html">Ver
            o catálogo<i class="fas fa-paw ml-3" aria-hidden="true"></i></a>
        </li>
        <li>
          <a id="tatu-navLink-about" class="nav-link tatu-fontSize-big" href="about.html" data-toggle="tooltip"
            title="Informações">Informações<i class="fas fa-info-circle ml-3" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  `
};

function renderBigNav() {
  document.querySelector("nav.navbar").innerHTML = `
    <a class="navbar-brand ml-1 ml-lg-5 d-flex align-items-center" href="home.html">
      <img src="../img/logo.svg" width="32">
      <span class="ml-3 tatu-font-brand tatu-fontSize-brand">tatu</span>
    </a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#tatu-navbar"
      aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="tatu-navbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ml-1 ml-lg-5 mr-1 mr-lg-4">
          <a id="tatu-navLink-quiz" class="nav-link tatu-fontSize-big" href="quiz.html">Jogar o quiz<i
              class="fas fa-play ml-3" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item ml-1 ml-lg-4">
          <a id="tatu-navLink-catalog" class="nav-link tatu-fontSize-big" href="catalog.html">Ver
            o catálogo<i class="fas fa-paw ml-3" aria-hidden="true"></i></a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li id="tatu-show-sessionMenu" class="nav-item mr-1 mr-lg-4">
          <div class="dropdown">
            <div class="btn-group">
              <a id="tatu-navLink-user" class="nav-link btn btn-sm bg-transparent tatu-fontSize-big" href="profile.html"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">utilizador<i
                  class="fas fa-user-circle ml-3" aria-hidden="true"></i></a>
              <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split d-lg-none ml-2"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
            </div>
            <div class="dropdown-menu" aria-labelledby="tatu-navLink-user">
              <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-user-cog mr-2"></i>Conta</a>
              <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-flag-checkered mr-2"></i>Progresso</a>
              <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-trophy mr-2"></i>Troféus</a>
              <hr>
              <a class="dropdown-item btn-sm text-dark" href="#"><i class="fas fa-sign-out-alt mr-2"></i>Sair</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <a id="tatu-navLink-about" class="nav-link tatu-fontSize-big mr-1 mr-lg-5" href="about.html" data-toggle="tooltip"
      title="Informações"><i class="fas fa-info-circle" aria-hidden="true"></i></a>
    `
};