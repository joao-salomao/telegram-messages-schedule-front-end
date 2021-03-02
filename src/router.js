import New from '@/Pages/New'
import Edit from '@/Pages/Edit'
import Home from '@/Pages/Home'
import Messages from '@/Pages/Messages'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: 'messages',
            component: Home,
            children: [
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            path: 'edit/:messageId',
                            component: Edit,
                        },
                        {
                            path: 'new',
                            component: New,
                        }
                    ]
                }
            ]
        }
    ],
})

export default router
