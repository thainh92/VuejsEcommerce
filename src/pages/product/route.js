import AppLayout from "@/layouts/AppLayout";

const routes = [
    {
        path: '/products',
        component: AppLayout,
        name: 'product',
        meta: {
            title: 'Product',
            icon: 'appstore'
        },
        children: [
            {
                path: 'form',
                component: () => import('./Form'),
                name: 'productCreate',
                meta: {
                    title: 'Product create',
                }
            },
            {
                path: 'list',
                component: () => import('./List'),
                name: 'productList',
                meta: {
                    title: 'Product list',
                }
            },
            {
                path: 'form/:id',
                component:()=> import('./Form'),
                name: 'updateProduct',
                meta: {
                    title:'Update Product'
                }
            }
        ]
    }
]

export default routes;