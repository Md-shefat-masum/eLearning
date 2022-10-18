import dashboardLayout from "../views/backend/layouts/backendLayout";
import dashboard from "../views/backend/index";
import dashboardProfile from "../views/backend/profile";

import dashboardCourseDetails from "../views/backend/course/courseDetails";

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
		{
			path: "/course-details/:slug",
			name: "dashboardCourseDetails",
			component: dashboardCourseDetails,
		},
	],
};

export default BackendRouter;
