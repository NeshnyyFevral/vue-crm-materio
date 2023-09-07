const s=(e,t)=>{const i=c=>{e.contains(c.target)||t()};return{addClickOutside:()=>{window.addEventListener("click",i)},removeClickOutside:()=>{window.removeEventListener("click",i)}}};export{s as i};
