import Vue from 'vue'
import Router from 'vue-router'
import yijiyi from '@/components/yijiyi'
import yijier from '@/components/yijier'
import err from '@/components/err'
import erji1 from '@/components/erji1'
import erji2 from '@/components/erji2'

Vue.use(Router)



export default new Router({
    routes:[
      {
        path:'/',
        redirect:'/yijiyi'
      },
      {
        path:'/yijiyi',
        component:yijiyi,
        children:[
          {
            path:'/',
            redirect:'/yijiyi/erji1'
          },
           // {
           //   path:'',
           //   component:erji2
           // },
           {
             path:'/yijiyi/erji1',
             component:erji1
           },
           {
             path:'/yijiyi/erji2',
             component:erji2
           }
        ]

      },
      {
        path:'/yijier',
        component:yijier
      },
      {
        path:'*',
        component:err
      }

    ]
})
