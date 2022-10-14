import dashboardLayout from "../views/backend/layouts/backendLayout";
import dashboard from "../views/backend/index";
import dashboardProfile from "../views/backend/profile";

const BackendRouter = {
	path: "/dashboard",
	component: dashboardLayout,
	children: [
		{
			path: "",
			name: "dashboard",
			component: dashboard,
		},
		{
			path: "profile",
			name: "dashboardProfile",
			component: dashboardProfile,
		},
	],
};

export default BackendRouter;
