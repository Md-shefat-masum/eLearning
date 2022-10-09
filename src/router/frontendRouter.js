import frontendLayout from "../views/frontend/layouts/frontendLayout";
import frontend from "../views/frontend/index";
import about from "../views/frontend/about";

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
			path: "",
			name: "about",
			component: about,
		},
	],
};

export default FrontendRouter;
