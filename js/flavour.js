import GetData from "../admin/components/get.js";
let count=8;
const ui=(data)=>{
    document.querySelector('.p').innerHTML=""
    console.log(data);
    let hio=data;
    let devHi=hio.slice(0,count);
    console.log(count);
    devHi.map((ele)=>{
        let card=document.createElement('div')
        card.setAttribute('class','product-section');

        let sub_card=document.createElement('div');
        sub_card.setAttribute('class','product');

        let imgs=document.createElement('img');
        imgs.src=ele.img[0]
        imgs.setAttribute('id','img');

        let h3=document.createElement('h3');
        h3.setAttribute('class','product-title');
        h3.innerHTML=ele.title

        let p=document.createElement('p');
        p.setAttribute('class','product-details');
        p.innerHTML=ele.Qunty+ " ml"

        let button=document.createElement('button');
        button.setAttribute('class','buy-button');
        button.innerHTML = "buy Now"
        sub_card.append(imgs,h3,p,button);
        card.append(sub_card);
        imgs.addEventListener('click',()=>{
            window.location.href=`../pages/showpro.html?id=${ele.id}`;
        })
        button.addEventListener('click',()=>{
            window.location.href=`../pages/showpro.html?id=${ele.id}&isbuy=true`
        })
      
        document.querySelector('.p').append(card)
    })
    let div=document.createElement('div');
      div.setAttribute('id','load_more');


      let span=document.createElement('span');
      span.innerHTML=`<img src="https://www.havmor.com/themes/havmornew/images/loan-more.webp" alt="">
      <span>Load-more</span>`
      div.append(span);
        div.addEventListener('click',()=>{
            count=count+8;
            ui(data)
        })
        document.querySelector('.p').append(div)
}

const get=async()=>{
    let res=await GetData('https://havmor-server.onrender.com/products')
    ui(res)
}
const getflav=async(name)=>{
    let res=await GetData(`https://havmor-server.onrender.com/products?flavour=${name}`)
    
    ui(res)
    document.querySelector('#All #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Chocolate #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Dry_Fruits #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Indian_Traditional #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Fruits #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#International #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#LOTTE #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"

    console.log(name);
    if(name==''){
        document.querySelector('#All #cy img').src="https://www.havmor.com/themes/havmornew/images/active-radio.webp"
    }
    else{
        document.querySelector(`#${name} #cy img`).src=`https://www.havmor.com/themes/havmornew/images/active-radio.webp`

    }
    se2()
}
const getCata=async(name)=>{
    let res=await GetData(`https://havmor-server.onrender.com/products?cata=${name}`)
    console.log(name);
    console.log(res);
    ui(res)
    se1()
}

document.getElementById('Me_Time').addEventListener('click',()=>getCata("Me_Time"))
document.getElementById('Get_Together').addEventListener('click',()=>getCata("Get_Together"))
document.getElementById('Party_Time').addEventListener('click',()=>getCata("Party_Time"))
document.getElementById('Save_Big').addEventListener('click',()=>getCata("Save_Big"))
document.getElementById('All').addEventListener('click',()=>getflav(''))
document.getElementById('Chocolate').addEventListener('click',()=>getflav("Chocolate"))
document.getElementById('Dry_Fruits').addEventListener('click',()=>getflav("Dry_Fruits"))
document.getElementById('Indian_Traditional').addEventListener('click',()=>getflav("Indian_Traditional"))
document.getElementById('Fruits').addEventListener('click',()=>getflav("Fruits"))
document.getElementById('International').addEventListener('click',()=>getflav("International"))
document.getElementById('LOTTE').addEventListener('click',()=>getflav("LOTTE"))
get()


/*--------------------extraaaaa-*/
document.querySelector('#All #cy img').src="https://www.havmor.com/themes/havmornew/images/active-radio.webp"

    document.querySelector('#Chocolate #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Dry_Fruits #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Indian_Traditional #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#Fruits #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#International #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"
    document.querySelector('#LOTTE #cy img').src="https://www.havmor.com/themes/havmornew/images/radio.webp"


    const se1=()=>{
        
            document.querySelector('.Section').classList.toggle('visblee_hiden')
    }
    const se2=()=>{
        
            document.querySelector('.select-flavour').classList.toggle('visblee_hiden')
    }
   
    document.querySelector('.re-1').addEventListener('click',se1)
    document.querySelector('.Section > span').addEventListener('click',se1)
    document.querySelector('.re-2').addEventListener('click',se2)
    document.querySelector('.flavor-buttons > button').addEventListener('click',se2)
    if(window.screen.width>750){
      document.getElementsByClassName('swiper_imgs')[0].src="https://www.havmor.com/sites/default/files/banners/product-new-banner-desktop.webp";
      document.getElementsByClassName('swiper_imgs')[1].src="https://www.havmor.com/sites/default/files/banners/website-banners-product-listing-desktop.webp";

    }
    else{
        document.getElementsByClassName('swiper_imgs')[0].src="https://www.havmor.com/sites/default/files/banners/product-banner-new-mobile.webp";
      document.getElementsByClassName('swiper_imgs')[1].src="https://www.havmor.com/sites/default/files/banners/Banner-02-mobile_0.webp";
    }

    se1()
    se2()