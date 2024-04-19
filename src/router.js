import { createRouter, createWebHistory } from 'vue-router';
import AOS from "aos";
import 'aos/dist/aos.css';

const routes = [
    { path: '', name: 'home', component: () => import('./views/Home.vue') },
    { path: '/about-us', name: 'about-us', component: () => import('./views/AboutUs.vue') },
    {
        path: '/services', name: 'services', component: () => import('./views/Services.vue'),
        children: [
            { path: '', name: 'services', redirect: { name: 'main-services' } }, // Default child route
            { path: 'main-services', name: 'main-services', component: () => import('./views/ServicesPages/MainServices/MainServicesView.vue') },
            {

                path: 'main-services-pages', name: 'main-services-pages', component: () => import('./views/ServicesPages/MainServices/MainServicesPages.vue'),
                children: [
                    { path: '', name: 'main-services-pages', redirect: { name: 'custom-clearance' } },
                    { path: 'custom-clearance', name: 'custom-clearance', component: () => import('./views/ServicesPages/MainServices/CustomClearance.vue') },
                    { path: 'consolidation', name: 'consolidation', component: () => import('./views/ServicesPages/MainServices/Consolidation.vue') },
                    { path: 'shipping-services', name: 'shipping-services', component: () => import('./views/ServicesPages/MainServices/ShippingServices.vue') },
                    { path: 'trucking', name: 'trucking', component: () => import('./views/ServicesPages/MainServices/Trucking.vue') },
                    { path: 'warehousing', name: 'warehousing', component: () => import('./views/ServicesPages/MainServices/Warehousing.vue') },
                    { path: 'freight-forwarding', name: 'freight-forwarding', component: () => import('./views/ServicesPages/MainServices/FreightForwarding.vue') },
                    { path: 'ship-agency', name: 'ship-agency', component: () => import('./views/ServicesPages/MainServices/ShipAgency.vue') },
                    { path: 'allied-services', name: 'allied-services', component: () => import('./views/ServicesPages/MainServices/AlliedServices.vue') },
                ]
            },
            { path: 'useful-services', name: 'useful-services', component: () => import('./views/ServicesPages/UsefulServices/UsefulServicesView.vue') },
            {
                path: 'useful-services-pages', name: 'useful-services-pages', component: () => import('./views/ServicesPages/UsefulServices/UsefulServicesPages.vue'),
                children: [
                    { path: '', name: 'useful-services-pages', redirect: { name: 'book-now' } },
                    { path: 'book-now', name: 'book-now', component: () => import('./views/ServicesPages/UsefulServices/BookNow.vue') },
                    { path: 'process-flow', name: 'process-flow', component: () => import('./views/ServicesPages/UsefulServices/ProcessFlow.vue') },
                    { path: 'track-shipment', name: 'track-shipment', component: () => import('./views/ServicesPages/UsefulServices/TrackShipment.vue') },
                    { path: 'gallery', name: 'gallery', component: () => import('./views/ServicesPages/UsefulServices/Gallery.vue') },
                    { path: 'faqs', name: 'faqs', component: () => import('./views/ServicesPages/UsefulServices/Faqs.vue') },
                ]
            },
            { path: 'pricing-services', name: 'pricing-services', component: () => import('./views/ServicesPages/PricingServices/PricingServicesView.vue') },
            {
                path: 'pricing-services-pages', name: 'pricing-services-pages', component: () => import('./views/ServicesPages/PricingServices/PricingServicesPages.vue'),
                children: [
                    { path: '', name: 'pricing-services-pages', redirect: { name: 'cost-by-air' } },
                    { path: 'cost-by-air', name: 'cost-by-air', component: () => import('./views/ServicesPages/PricingServices/CostByAir.vue') },
                    { path: 'cost-by-sea', name: 'cost-by-sea', component: () => import('./views/ServicesPages/PricingServices/CostBySea.vue') },
                    { path: 'duties-taxes', name: 'duties-taxes', component: () => import('./views/ServicesPages/PricingServices/DutiesTaxes.vue') },
                    { path: 'get-quotation', name: 'get-quotation', component: () => import('./views/ServicesPages/PricingServices/GetQuotation.vue') },
                    { path: 'standard-rates', name: 'standard-rates', component: () => import('./views/ServicesPages/PricingServices/StandardRates.vue') },
                ]
            },
        ]
    },
    { path: '/career', name: 'career', component: () => import('./views/Career.vue') },
    { path: '/payment', name: 'payment', component: () => import('./views/Payment.vue') },
    { path: '/contact-us', name: 'contact-us', component: () => import('./views/ContactUs.vue') },
    { path: '/terms-conditions', name: 'terms-conditions', component: () => import('./views/TermsConditions.vue') },
    { path: '/sign-up', name: 'sign-up', component: () => import('./views/SignUp.vue') },
    { path: '/sign-in', name: 'sign-in', component: () => import('./views/SignIn.vue') },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
    AOS.init(); // Initialize AOS
    next();
});


export default router;