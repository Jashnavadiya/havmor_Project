import GetData from "../admin/components/get.js";
import co from "../components/checkout.js";
import Footer from "../components/footer.js";
document.querySelector('.checkouts').innerHTML = co()
document.querySelector('.checkouts').classList.add('hidden')
let ishi = location.search.replace('&isbuy=', '').split('')

let isbuy = ishi.splice(8, 11)
console.log(isbuy);
if (isbuy[0] == "t") {
  document.querySelector('.checkouts').classList.remove('hidden')
}
document.querySelector('.cancel-checkout img').addEventListener('click', () => {
  document.querySelector('.checkouts').classList.add('hidden')

})
document.getElementById("footer").innerHTML = Footer();
let hi = location.search.replace('?id=', '')
let ids = hi.split('&')[0]
console.log(ids);
let hii = location.search.replace('?title=', '')
let idss = hii.split('&')[0]
console.log(idss);
const ui = (data) => {
  document.querySelector(".pro-image").innerHTML = "";

  data.map((ele, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let innerbox1 = document.createElement("div");
    innerbox1.setAttribute("id", "innerbox1");

    let innerbox2 = document.createElement("div");
    innerbox2.setAttribute("id", "innerbox2");

    let imgs = document.createElement("img");
    imgs.src = ele.img[0];
    imgs.setAttribute("id", "pro-img");
    innerbox1.append(imgs);

    let title = document.createElement("h2");
    title.innerHTML = ele.title;
    title.setAttribute("id", "title");

    let desc = document.createElement("p");
    desc.innerHTML = ele.desc;
    desc.setAttribute("id", "desc");

    let buybtn = document.createElement("button");
    buybtn.innerHTML = "Buy Now";
    buybtn.setAttribute("id", "buybtn");
    buybtn.addEventListener('click', () => {
      document.querySelector('.checkouts').classList.remove('hidden')
    })

    innerbox2.append(title, desc, buybtn);

    box.append(innerbox1, innerbox2);
    document.querySelector(".pro-image").append(box);
  });
};
const Get = async () => {
  let res = await GetData(`https://havmor-server.onrender.com/products?id=${ids}`);

  ui(res);
  let res1 = await GetData(`https://havmor-server.onrender.com/products?title=${idss}`);
  if (res1.length > 0) {
    ui(res1)
  }
};

Get();

const ing = (ingdata) => {
  document.querySelector(".ing").innerHTML = "";

  ingdata.map((ele, i) => {
    let show = document.createElement("div");
    show.setAttribute("id", "show");

    let showing = document.createElement("div");
    showing.setAttribute("id", "showing");
    showing.addEventListener("click", () => {
      real_content.innerHTML = ele.ingre;
      any2.classList.remove("activeacteofnutri");
      any.classList.add("activeacteofnutri");
    });

    let any = document.createElement("a");
    any.innerHTML = "INGREDIENTS";
    any.setAttribute("id", "any");
    showing.append(any);

    let showni = document.createElement("h3");
    showni.setAttribute("id", "showni");
    showni.addEventListener("click", () => {
      real_content.innerHTML = ele.nutri;
      any.classList.remove("activeacteofnutri");
      any2.classList.add("activeacteofnutri");
    });

    let any2 = document.createElement("a");
    any2.innerHTML = "NUTRITIONAL INFORMATION";
    any2.setAttribute("id", "any2");
    showni.append(any2);

    show.append(showing, showni);

    let ingr = document.createElement("p");
    ingr.innerHTML = ele.ingre;
    ingr.setAttribute("id", "ingr");

    let real_content = document.createElement("pre");
    real_content.setAttribute("id", "Real_content");

    real_content.innerHTML = ele.ingre;
    any.classList.add("activeacteofnutri");

    document.querySelector(".ing").append(show, real_content);
    console.log(ele.ingre == "" && ele.nutri == "");
    if (ele.ingre == "" && ele.nutri == "") {
      document.querySelector(".ing").innerHTML = "";
    }
  });
};


const Get3 = async () => {
  let res = await GetData(`https://havmor-server.onrender.com/products?id=${ids}`);

  ing(res);
  let res1 = await GetData(`https://havmor-server.onrender.com/products?title=${idss}`);
  if (res1.length > 0) {

    ing(res1)
  }
};

Get3();

const ui2 = (inf) => {
  document.querySelector(".secondpro").innerHTML = "";

  inf.splice(0, 4).map((ele, i) => {
    let main = document.createElement("div");
    main.setAttribute("id", "main");

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv");

    let pro = document.createElement("img");
    pro.src = ele.img[0];
    pro.setAttribute("id", "pro");

    imgdiv.append(pro);

    let tit = document.createElement("h4");
    tit.innerHTML = ele.title;
    tit.setAttribute("id", "tit");

    let buybtn = document.createElement("button");
    buybtn.innerHTML = "Buy Now";
    buybtn.setAttribute("id", "buybtn2");

    main.append(imgdiv, tit, buybtn);
    buybtn.addEventListener('click', () => {
      document.querySelector('.checkouts').classList.remove('hidden')
    })
    imgdiv.addEventListener('click',()=>{

      window.location.href=`../pages/showpro.html?id=${ele.id}`
    })


    document.querySelector(".secondpro").append(main);
  });
};

const Get2 = async () => {
  let res = await GetData(`https://havmor-server.onrender.com/products`);

  ui2(res);
};
Get2();
