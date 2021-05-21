let array = [theCube, photoeditor, travelandFly, wordastic], index = 0, length = 5;

    for(i = 0; i< array.length;i++){
      console.log(array[i]);
    }

    function create(){
      let a = document.querySelector('.projects');
      for (var i = 0; i < length; i++) {
        let b = document.createElement('div');
        b.innerHTML = innerHTML(array[i % array.length]);
        (i == 0 || i == length - 1) ? b.classList = '__project outRange' : b.classList = '__project';
        if (i == parseInt(length / 2)) {
          b.classList = '__project project';
        }
        if (i == 1) {
          b.classList.add('_prFrst');
        }
        a.appendChild(b);
      }
    }

    function next(){
      index = (index + 1) % array.length;
      let a = document.querySelectorAll('.__project');
      a[0].remove();
      let b = document.createElement('div');
      b.classList = '__project';
      b.innerHTML = innerHTML(array[(index + length - 1) % array.length]);
      document.querySelector('.projects').appendChild(b);
      btn(document.querySelectorAll('.__project'));
    }

    function prew(){
      index = (array.length + (index - 1)) % array.length;
      let a = document.querySelectorAll('.__project');
      a[a.length - 1].remove();

      let b = document.createElement('div');
      b.classList = '__project';
      b.innerHTML = innerHTML(array[index]);
      var node = document.querySelector('.projects').appendChild(b);;
      var list = document.querySelector('.projects');
      list.insertBefore(node, list.childNodes[0]);
      btn(document.querySelectorAll('.__project'));
    }

    function btn(a){
      for (var i = 0; i < length; i++) {
        (i == 0 || i == length - 1) ? a[i].classList = '__project outRange' : a[i].classList = '__project';
        if (i == parseInt(length / 2)) {
          a[i].classList = '__project project';
        }
        if (i == 1) {
          a[i].classList.add('_prFrst');
        }
      }
    }
    function innerHTML(a){
      return '<div class="project_back-up"><img class="project_back-up-im" src="'+a.logo+'"></div><div class="project_back"><img class="project_back-im" src="'+a.backgroundImg+'" alt=""></div><div class="project_cont"><div class="project_cont-reldt upp">'+a.date+'</div><div class="project_cont_a"><div class="project_cont-head"><h3>'+a.title+'</h3><span>'+a.info+'</span><p class="project_cont-body">'+a.desc+'</p></div><div class="project_name-page"><span class="he_sub_nav_li project_name-pgS"><a class="app_adress" target="_blank" href="'+a.url+'">'+a.webpage+'</a></span></div></div></div>';

    }
    create();
    document.getElementById('next').addEventListener('click', next);
    document.getElementById('prew').addEventListener('click', prew);
