import refRoot from "./refRoot";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/* 
content 消息内容
type 消息类型
duration 多久后消失
container 容器
*/
export default function (options={}){
    const {content="",type="info",duration=1500,container=document.body,callback} = options;
    const div = document.createElement("div");
    const iconDom = refRoot(Icon,{type});
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;

    if(getComputedStyle(container).position === 'static'){
        container.style.position = "relative";
    }
    container.appendChild(div);
    div.clientHeight; // 强制渲染
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;
    setTimeout(()=>{
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener("transitionend",function(){
            div.remove();
            callback && callback();
        },{
            once: true,
        })
    },duration);
}