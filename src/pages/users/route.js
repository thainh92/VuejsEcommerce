import AppLayout from "@/layouts/AppLayout";

const routes = [
    {
        path: '/users',
        component: AppLayout,
        name: 'users',
        meta: {
            title: 'Users',
            icon: 'user'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'userList',
                meta: {
                    title: 'User list',
                }
            },
            {
                path: 'create',
                component: () => import('./Form'),
                name: 'userCreate',
                meta: {
                    title: 'Create user'
                }
            },
            {
                path: 'edit/:id',
                component: () => import('./Form'),
                name: 'userEdit',
                meta: {
                    title: 'Edit user',
                    hidden: true
                }
            }
        ]
    }
]

export default routes;