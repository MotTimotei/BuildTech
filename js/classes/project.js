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
let theCube = new Project('img/db/theCube.png', 'img/db/theCube.jpg', 'mar 2019', 'The Cube', 'Try the new 3D perspective of a cube', msg, 'thecube.com', '');
let travelandFly = new Project('img/db/travelandFLy.png', 'img/db/travelandFLy.jpg', 'feb 2019', 'Traveland FLy', 'Build your journey', msg, 'travelandfly.com', '');
let photoeditor = new Project('img/db/photoEditor.png', 'img/db/photoEditor.jpg', 'jan 2019', 'Photoeditor', 'The easiest way to edit photos', msg, 'photoeditor.com', '');
let wordastic = new Project('img/db/wordastic.png', 'img/db/wordastic.jpg', 'apr 2020', 'WordAstic', 'Guess the word', msg, 'wordastic.com', '');
