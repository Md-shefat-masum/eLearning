import {
	createRouter,
	// createWebHistory,
	createWebHashHistory,
} from "vue-router";

import backendRouter from "./backendRouter";
import frontendRouter from "./frontendRouter";

const routes = [{
	...backendRouter
}, {
	...frontendRouter
}];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
});

export default router;