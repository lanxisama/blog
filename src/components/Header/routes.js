import Add from '../../components/AddBlog'
import Scan from '../../components/showBlog'
import HelloWorld from '../../components/HelloWorld'
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

    }
]