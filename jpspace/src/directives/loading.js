import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 创建加载图片
function createLoadingImg(){
    const img = document.createElement("img");
    img.dataset.dir = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

// 获取img元素
function getLoadingImage(e){
    return e.querySelector("img[data-dir=loading]")
}

// 指令配置对象
export default function(el,binding){
    const curImg = getLoadingImage(el);
    if(binding.value){
        if(!curImg){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}