import frontendLayout from "../views/frontend/layouts/frontendLayout";
import frontend from "../views/frontend/index";
import about from "../views/frontend/about";
import enroll from "../views/frontend/enroll";
import login from "../views/frontend/auth/login";
import register from "../views/frontend/auth/register";
import forgetPassword from "../views/frontend/auth/forgetPassword";

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
			path: "enroll",
			name: "enroll",
			component: enroll,
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
			path: "forget-password",
			name: "forgetPassword",
			component: forgetPassword,
		},
	],
};

export default FrontendRouter;
