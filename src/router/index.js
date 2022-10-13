import {
	createRouter,
	createWebHistory,
	// createWebHashHistory,
} from "vue-router";

import backendRouter from "./backendRouter";
import frontendRouter from "./frontendRouter";

const routes = [
	{
		...backendRouter,
	},
	{
		...frontendRouter,
	},
];

const router = createRouter({
	// history: createWebHashHistory(process.env.BASE_URL),
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.afterEach(() => {
	// console.log(to, from);
	setTimeout(() => {
		window.allPagePlugins();
	}, 600);
});

export default router;
