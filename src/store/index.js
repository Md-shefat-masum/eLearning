import {
    createStore
} from "vuex";

// import createPersistedState from "vuex-persistedstate";

import auth_store from './modules/auth_store';
import course_store from './modules/course_store';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth_store,
		course_store,
    },
    // plugins: [createPersistedState()],
});