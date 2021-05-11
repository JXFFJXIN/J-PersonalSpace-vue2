import eventBus from "@/utils/eventBus";
import debounce from "@/utils/debounce";
import defaultGif from "@/assets/default.gif"

let imgs = [];

function setImage(img){
    img.dom.src = defaultGif;
    // 获取视口高度和图片位置，进行懒加载的前提判断
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if(rect.top >= -height && rect.top <= clientHeight){
        img.dom.src = img.src;
        imgs = imgs.filter(i=>i!==img);
    }
}

eventBus.$on("mainScroll",debounce(handleScroll,50));

function handleScroll(){
    setImages();
}

function setImages(){
    for(const img of imgs ){
        setImage(img);
    }
}

export default {
    inserted(el,binding){
        const img = {
            dom: el,
            src: binding.value,
        };
        imgs.push(img);
        setImage(img);
    },
    unbind(el){ // ???
        imgs = imgs.filter(i=>i.dom!==el);
    }
}