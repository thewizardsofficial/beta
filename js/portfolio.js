
/* SideBar Navigation */
const show_max = document.querySelector('.show-max');
const nav = document.querySelector('.nav');
const container = document.querySelector('.container-fixed');

let z = 0;

show_max.onclick = ()=>{
  if(z == 0){
    nav.setAttribute('class', 'max-nav');
    //container.style.width = "calc(100% - "+nav.clientWidth+"px)";
    //container.style.left = nav.clientWidth+"px";
    z = 1;
  }
  else{
    nav.removeAttribute('class', 'max-nav');
    //container.style.width = "calc(100% - "+nav.clientWidth+"px)";
    //container.style.left = nav.clientWidth+"px";
    z = 0;
  }
}


/* Filter Portfolios */
const ul = document.querySelector('nav ul');
const portfolios = [...document.querySelectorAll('.samples .sample-box')];
const size = portfolios.length
let sample_count = 0;

show_all = ()=>{
    portfolios.forEach((sample)=>{
        sample.style.display = "inline-block";
        setTimeout(()=>{
                document.querySelector('.empty').style.display = "none";
            }, 250);
        setTimeout(()=>{
            sample.style.opacity = 1;
        }, 250);
    })
}

ul.addEventListener('click', (event)=>{
    console.log(event);
    if(event.target.className == "show-max" || event.target.localName == "span"){
        return 0;
    }
    else{
        filter_data_type = event.target.closest('li').dataset.type;
        portfolios.forEach((sample)=>{
            console.log(filter_data_type);
            if(filter_data_type == "all"){
                console.log('sending');
                show_all();
            }
            else{
                if(filter_data_type == sample.dataset.type){
                    sample.style.display = "inline-block";
                    setTimeout(()=>{
                        sample.style.opacity = 1;
                    }, 250);
                    sample_count -= 1;
                }
                else{
                    sample.style.opacity = 0;
                    setTimeout(()=>{
                        sample.style.display = "none";
                    }, 250);
                }
                sample_count += 1;
            }
        });
        if(sample_count == size){
            setTimeout(()=>{
                document.querySelector('.empty').style.display = "flex";
            }, 250);
        }
        else{
            setTimeout(()=>{
                document.querySelector('.empty').style.display = "none";
            }, 250);
        }
        sample_count = 0;
    }
})