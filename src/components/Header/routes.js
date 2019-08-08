import Add from '../../components/AddBlog'
import Scan from '../../components/showBlog'
import HelloWorld from '../../components/HelloWorld'
import readBlog from '../readBlog.vue'
//routes是一个数组对象
export const routes=[
    {
        path:"/",
        name:"Home",
        component:HelloWorld
    },
    {
        path:'/scan',
        name:"Scan",
        component:Scan
    },
    {
        path:'/write',
        name:"Write",
        component:Add
    },
    {
        path:"*",
        redirect:"/"

    },
    {
        path:"/blog/:id",component:readBlog
        // 使用:id传递参数 
        //使用this.$route.params.id,接收
    }
]