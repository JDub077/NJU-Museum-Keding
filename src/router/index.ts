import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'welcome',
        component: () => import('@/views/WelcomeView.vue'),
        meta: {
            title: '小克鼎数字博物馆 - 欢迎'
        }
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import('@/views/ArchiveView.vue'),
        meta: {
            title: '小克鼎数字博物馆 - 档案'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Homepage.vue'),
        meta: {
            title: '小克鼎 - 首页'
        }
    },
    {
        path: '/homenew',
        name: 'homenew',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '小克鼎 - 首页'
        }
    },
    {
        path: '/comparison',
        name: 'comparison',
        component: () => import('@/views/MetadataView.vue'),
        meta: {
            title: '小克鼎 - 克鼎藏品对比'
        }
    },

    {
        path: '/decoration',
        name: 'decoration',
        component: () => import('@/views/DecorationView.vue'),
        meta: {
            title: '小克鼎 - 纹饰（变型与演变）'
        }
    },
    {
        path: '/inscription',
        name: 'inscription',
        component: () => import('@/views/InscriptionView.vue'),
        meta: {
            title: '小克鼎 - 铭文（内容和字形）'
        }
    },

    {
        path: '/academic-research',
        name: 'academic-research',
        component: () => import('@/views/AcademicResearchView.vue'),
        meta: {
            title: '小克鼎 - 相关学术成果'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
            title: '小克鼎 - 关于我们'
        }
    },
    {
        path: '/insc_font',
        name: 'insc_font',
        component: () => import('@/views/Insc_font.vue'),
        meta: {
            title: '小克鼎 - 字形'
        }
    },
    {
        path: '/inscription_early',
        name: 'inscription_early',
        component: () => import('@/views/Inscription_early.vue'),
        meta: {
            title: '小克鼎 - 字形早期'
        }
    },
    {
        path: '/inscription_mid',
        name: 'inscription_mid',
        component: () => import('@/views/Inscription_mid.vue'),
        meta: {
            title: '小克鼎 - 字形中期'
        }
    },
    {
        path: '/inscription_late',
        name: 'inscription_late',
        component: () => import('@/views/Inscription_late.vue'),
        meta: {
            title: '小克鼎 - 字形晚期'
        }
    },
    {
        path: '/CollectionBlocks',
        name: 'CollectionBlocks',
        component: () => import('@/views/CollectionBlocks.vue'),
        meta: {
            title: '小克鼎 - 鉴藏'
        }
    },
    {
        path: '/collection-view',
        name: 'collection-view',
        component: () => import('@/views/CollectionView.vue'),
        meta: {
            title: '小克鼎 - 鉴藏'
        }
    },
    {
        path: '/collection/duanfang',
        name: 'duanfang-profile',
        component: () => import('@/views/collection/duanfang.vue'),
        meta: {
            title: '端方其人其事'
        }
    },
    {
        path: '/vessel-type',
        name: 'vessel-type',
        component: () => import('@/views/VesselTypeView.vue'),
        meta: {
            title: ''
        }
    },
    {
        path: '/collection/ferguson',
        name: 'ferguson-profile',
        component: () => import('@/views/collection/fukaisen.vue'),
        meta: {
            title: '福开森其人其事'
        }
    }
    // 添加404页面路由
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'not-found',
    //     component: () => import('@/views/NotFound.vue'),
    //     meta: {
    //         title: '页面未找到'
    //     }
    // }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 页面切换时滚动到顶部
        return savedPosition || { top: 0 }
    }
})

// 全局前置守卫，设置文档标题
router.beforeEach((to, from, next) => {
    // 设置页面标题
    if (to.meta.title) {
        document.title = to.meta.title as string
    } else {
        document.title = '小克鼎数字博物馆'
    }
    next()
})

export default router 