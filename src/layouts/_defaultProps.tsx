// 返回一个手动构建的路由树，配置式路由
// 约定式路由不知道如何实现路由嵌套，用于渲染导航
export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/welcome',
                name: '欢迎',
                // icon: <SmileFilled />,
                component: './Welcome',
            },
            {
                path: '/user',
                name: '管理页',
                // icon: <CrownFilled />,
                // access: 'canAdmin',
                component: './Welcome',
                routes: [
                    {
                        path: '/admin/sub-page1',
                        name: '一级页面',
                        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page2',
                        name: '二级页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page3',
                        name: '三级页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                    },
                ],
            },
            {
                name: '列表页',
                // icon: <TabletFilled />,
                path: '/list',
                component: './ListTableList',
                routes: [
                    {
                        path: '/list/sub-page',
                        name: '列表页面',
                        // icon: <CrownFilled />,
                        routes: [
                            {
                                path: 'sub-sub-page1',
                                name: '一一级列表页面',
                                // icon: <CrownFilled />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page2',
                                name: '一二级列表页面',
                                // icon: <CrownFilled />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page3',
                                name: '一三级列表页面',
                                // icon: <CrownFilled />,
                                component: './Welcome',
                            },
                        ],
                    },
                    {
                        path: '/list/sub-page2',
                        name: '二级列表页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                    },
                    {
                        path: '/list/sub-page3',
                        name: '三级列表页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                    },
                ],
            }
        ]
    }
}