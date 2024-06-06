<template>
    <div class="inner">
        <!-- form-styleBox 추가 -->
        <div class="form-styleBox">
            <!-- 탭 -->

            <div class="form-wrap login-form">
                <div class="form-row">
                    <p class="lbl-only">아이디</p>
                    <!-- input component -->
                    <div class="input-box textType-2">
                        <label for="ip01" class="blind">아이디 입력</label>
                        <div class="inline-flex">
                            <input
                                id="ip01"
                                type="text"
                                title=""
                                placeholder="아이디 입력"
                                aria-label="입력하세요"
                            />
                            <div class="input-etc">
                                <button
                                    type="button"
                                    class="btn input-del"
                                    aria-label="입력항목 초기화"
                                ></button>
                            </div>
                        </div>
                    </div>
                    <!-- input component -->
                </div>
                <div class="form-row">
                    <p class="lbl-only">비밀번호</p>
                    <!-- input component -->
                    <div class="input-box textType-2">
                        <div class="inline-flex">
                            <label for="ip02" class="blind"
                                >비밀번호 입력</label
                            >
                            <input
                                id="ip02"
                                type="password"
                                title=""
                                placeholder="비밀번호 입력"
                                aria-label="입력하세요"
                            />
                            <div class="input-etc">
                                <button
                                    type="button"
                                    class="btn input-del"
                                    aria-label="입력항목 초기화"
                                ></button>
                            </div>
                        </div>
                    </div>
                    <!-- input component -->
                </div>
                <div class="form-row">
                    <button
                        type="button"
                        class="btn btn-primary btn-mid w-full"
                    >
                        로그인
                    </button>
                    <div class="align-right">
                        <router-link to="/login/findId" class="btn-search-id"
                            >아이디/비밀번호 찾기</router-link
                        >
                    </div>
                </div>
            </div>

            <hr class="hr-divide ml-m24 mr-m24" />

            <div class="tit-form mt-32">간편로그인</div>

            <div class="easy-login-icons last-3" ref="easyLoginIcons">
                <!-- 
            last-마지막 li 인덱스 추가
            ex) 
              last-1 : 카카오
              last-2 : 네이버
              last-3 : 구글
              last-4 : 애플
          -->
                <ul>
                    <li
                        v-for="(btn, index) in btns"
                        :key="index"
                        :class="btn.class"
                    >
                        <a href="#" class="btn-login circle" :class="btn.name">
                            <strong class="blind">{{ btn.label }}</strong>
                        </a>
                        <span
                            v-if="index === lastNumber - 1"
                            class="last-loginAccount"
                            >마지막에 로그인한 계정이에요.</span
                        >
                    </li>
                </ul>
            </div>
            <!-- // 탭 -->

            <div class="bottom-fixed">
                <div class="btn-wrap">
                    <div class="flex">
                        <button type="button" class="btn btn-gray">
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- //form-styleBox 추가 -->
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { commonUi } from "@/main";

<<<<<<< HEAD:tc-project/src/pages/login/LoginEasy.vue
onMounted(() => {
    commonUi.init();
    extractLastNumber();
});

const btns = [
    { class: "btn-login-group", name: "kakao", label: "카카오" },
    { class: "btn-login-group", name: "naver", label: "네이버" },
    { class: "btn-login-group", name: "google", label: "구글" },
    { class: "btn-login-group", name: "apple", label: "애플" },
];

const lastNumber = ref(0);
const easyLoginIcons = ref(null);

const extractLastNumber = () => {
    const className = easyLoginIcons.value.className;
    const match = className.match(/last-(\d+)/);
    if (match) {
        lastNumber.value = parseInt(match[1], 10);
    }
=======
<script>
export default {
    name: "Login",
>>>>>>> 1eca4b73d0f0aab7ea94dc40b768e537cff0c6ce:tc-project/src/pages/login/Login.vue
};
</script>
