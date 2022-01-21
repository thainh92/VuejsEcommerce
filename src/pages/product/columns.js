export const columns = [
    {
        dataIndex: 'id',
        key: 'id',
        title: 'Product ID',
        slots: {title: 'customTitle'},
        scopedSlots: {customRender: 'id'},
    },
    {
        title: 'Image',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        scopedSlots: {customRender: 'thumbnail'},
        width: '12%'
    },
    {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        scopedSlots: {customRender: 'price'},
    },
    // {
    //     dataIndex: 'categoryId',
    //     key: 'categoryId',
    //     title: 'Category ID',
    //     slots: {title: 'categoryId'},
    //     scopedSlots: {customRender: 'categoryId'},
    // },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: {customRender: 'action'},
    },
];