import { createRouter, createWebHistory } from "vue-router";
import defaultLayout from "@/layouts/defaultLayout.vue";
import noGnbLayout from "@/layouts/noGnbLayout.vue";
import mainLayout from "@/layouts/mainLayout.vue";

/*** 페이지 리스트 ***/
// 메인페이지
import MainPage from "@/pages/Main.vue";

// 가이드 페이지

// 로그인
import LoginEasy from "@/pages/login/LoginEasy.vue";

import { nextTick } from "vue";

// 라우트 정의
export const routes = [
    {
        path: "/",
        name: "Main",
        component: MainPage,
        meta: {
            title: "메인 페이지",
            pageTitle: "메인",
            menuCate: "메인",
            layout: mainLayout,
        },
    },

    //로그인
    {
        path: "/login/LoginEasy",
        name: "LoginEasy",
        component: LoginEasy,
        meta: {
            title: "간편로그인",
            pageTitle: "로그인",
            layout: defaultLayout,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 페이지 제목 설정과 메인 콘텐츠에 포커스를 관리하기 위한 네비게이션 가드
router.beforeEach((to, from, next) => {
    document.title = "보험개발원 - 실손보험 청구비서 " + to.meta.title;
    next();
});

router.afterEach(() => {
    nextTick(() => {
        const mainContent = document.querySelector("#main");
        if (mainContent) {
            mainContent.setAttribute("tabindex", "-1");
            mainContent.focus();
        }
    });
});

export default router;
