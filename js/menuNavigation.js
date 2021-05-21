class MenuNavigation {
  constructor(btn, dest){
    this.btn = btn;
    this.dest = dest;
  }
  getUpPos(){
      window.scroll(0, this.dest.offsetTop);
  }
}
let all = [], ids = [];
for (var i = 0; i < document.querySelectorAll('.he_nav_li').length; i++) {
  let a = new MenuNavigation(document.querySelectorAll('.he_nav_li')[i], document.querySelector(`#m${i+1}`));
  all.push(a);
  ids.push(document.querySelectorAll('.he_nav_li')[i].id);
}

for (var i = 0; i < all.length; i++) {
  all[i].btn.addEventListener('click', function(){
    all[ids.indexOf(this.id)].getUpPos();
  })
}
