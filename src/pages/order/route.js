import AppLayout from "@/layouts/AppLayout";

const routes = [
    {
        path: '/orders',
        component: AppLayout,
        name: 'orders',
        meta: {
            title: 'Orders',
            icon: 'align-left'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'orderList',
                meta: {
                    title: 'Order list',
                }
            }
        ]
    }
]

export default routes;