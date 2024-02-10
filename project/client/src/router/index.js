/* Import Vue Router */
/* ===================================================================
======================================================================
================================================================== */
import VueRouter from 'vue-router';




/* Import Views */
/* ===================================================================
======================================================================
================================================================== */
import Home from "../views/home/HomeView.vue";
import Store from "../views/store/StoreView.vue";
import Information from "../views/information/InformationView.vue";
import Book from "../views/book/BookView.vue";
import Purchase from "../views/purchase/PurchaseView.vue";
import Submission from "../views/submission/SubmissionView.vue";
import Contact from "../views/contact/ContactView.vue";




/* Initialize Vue Router Object */
/* ==================================================================
=====================================================================
================================================================== */
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/store",
            name: "store",
            component: Store
        },
        {
            path: "/store/information/:id",
            name: "information",
            component: Information
        },
        {
            path: "/book_a_test_drive",
            name: "book",
            component: Book
        },
        {
            path: "/purchase_near_by",
            name: "purchase",
            component: Purchase
        },
        {
            path: "/submission",
            name: "submission",
            component: Submission
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
})




/* Export Vue Router Object */
/* ==================================================================
=====================================================================
================================================================== */
export default router;