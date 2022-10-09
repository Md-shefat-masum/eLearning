import dashboardLayout from "../views/backend/layouts/backendLayout";
import dashboard from "../views/backend/index";
import dashboardSettings from "../views/backend/settings";

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
			path: "",
			name: "dashboardSettings",
			component: dashboardSettings,
		},
	],
};

export default BackendRouter;
