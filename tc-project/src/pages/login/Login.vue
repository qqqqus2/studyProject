<template>
    <div class="inner">
        <div class="form-styleBox">
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
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { commonUi } from "@/main";

onMounted(() => {
    commonUi.init();
});
</script>
