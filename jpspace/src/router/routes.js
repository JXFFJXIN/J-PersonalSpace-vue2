import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import DetailBlog from "@/views/Blog/Detail";

export default [{
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Blog",
        path: "/blog",
        component: Blog
    },
    {
        name: "Project",
        path: "/project",
        component: Project
    },
    {
        name: "Message",
        path: "/message",
        component: Message
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: Blog
    },
    {
        name: 'DetailBlog',
        path: '/article/:id',
        component: DetailBlog
    }
]