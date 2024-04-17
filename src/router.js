import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'home', component: () => import('./views/Home.vue') },
    { path: '/about-us', name: 'about-us', component: () => import('./views/AboutUs.vue') },
    {
        path: '/services', name: 'services', component: () => import('./views/Services.vue'),
        children: [
            { path: '', name: 'services', redirect: { name: 'book-now' } }, // Default child route
            { path: 'book-now', name: 'book-now', component: () => import('./views/BookNow.vue') },
            { path: 'cost-by-air', name: 'cost-by-air', component: () => import('./views/CostByAir.vue') },
            { path: 'cost-by-sea', name: 'cost-by-sea', component: () => import('./views/CostBySea.vue') },
            { path: 'duties-taxes', name: 'duties-taxes', component: () => import('./views/DutiesTaxes.vue') },
            { path: 'get-quotation', name: 'get-quotation', component: () => import('./views/GetQuotation.vue') },
            { path: 'asked-questions', name: 'asked-questions', component: () => import('./views/AskedQuestions.vue') },
            { path: 'standard-rates', name: 'standard-rates', component: () => import('./views/StandardRates.vue') },
        ]
    },
    { path: '/career', name: 'career', component: () => import('./views/Career.vue') },
    { path: '/payment', name: 'payment', component: () => import('./views/Payment.vue') },
    { path: '/contact-us', name: 'contact-us', component: () => import('./views/ContactUs.vue') },
    { path: '/terms-conditions', name: 'terms-conditions', component: () => import('./views/TermsConditions.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router 