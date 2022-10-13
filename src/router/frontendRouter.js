import frontendLayout from "../views/frontend/layouts/frontendLayout";
import frontend from "../views/frontend/index";
import about from "../views/frontend/about";
import login from "../views/frontend/auth/login";
import register from "../views/frontend/auth/register";

const FrontendRouter = {
	path: "/",
	component: frontendLayout,
	children: [
		{
			path: "",
			name: "frontend",
			component: frontend,
		},
		{
			path: "about",
			name: "about",
			component: about,
		},
		{
			path: "login",
			name: "login",
			component: login,
		},
		{
			path: "register",
			name: "register",
			component: register,
		},
		{
			path: "forget",
			name: "forget",
			component: <template>forget</template>,
		},
	],
};

export default FrontendRouter;
