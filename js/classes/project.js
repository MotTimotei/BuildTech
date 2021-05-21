class Project {
  constructor(logo, backgroundImg, date, title, info, desc, webpage, url) {
    this.logo = logo;
    this.backgroundImg = backgroundImg;
    this.date = date;
    this.title = title;
    this.info = info;
    this.desc = desc;
    this.webpage = webpage;
    this.url = url;
  }
}


const msg = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
let theCube = new Project('img/db/theCube.png', 'img/db/theCube.jpg', 'mar 2019', 'The Cube', 'incearca perspectiva 3D a unui cub', msg, 'thecube.com', 'http://localhost/The%20cube/');
let travelandFly = new Project('img/db/travelandFLy.png', 'img/db/travelandFLy.jpg', 'feb 2019', 'Traveland FLy', 'Transforma-ti calatoria intr-o aventura', msg, 'travelandfly.com', 'http://localhost/Traveland%20FLy%20WebSite/');
let photoeditor = new Project('img/db/photoEditor.png', 'img/db/photoEditor.jpg', 'jan 2019', 'Photoeditor', 'Cel mai usor mod de a edita imagini', msg, 'photoeditor.com', 'http://localhost/Traveland%20FLy%20Web%20Page21/');
let wordastic = new Project('img/db/wordastic.png', 'img/db/wordastic.jpg', 'apr 2020', 'WordAstic', 'Ghiceste cuvantul', msg, 'wordastic.com', 'http://localhost/Ghiceste%20cuvantul/');
