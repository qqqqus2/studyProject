<template>
  <div>
    <div class="inner pb-50">
      <h1>회원가입</h1>
      <div class="form-styleBox">
        <p class="msg-required mb-20"><span class="fc-red">*</span> 표시는 필수 입력 사항입니다.</p>
        <div class="form-wrap">
          <div class="form-row">
            <p class="lbl-only">회사명<span class="req">*</span></p>
            <!-- input component -->
            <div class="input-box textType-2">
              <div class="inline-flex">
                <label for="ip01" class="blind">회사명 입력</label>
                <input id="ip01" type="text" title="" placeholder="" aria-label="회사명을 입력하세요" />
                <div class="input-etc">
                  <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                </div>
              </div>
            </div>
            <!-- input component -->
          </div>
          <div class="form-row mt-20">
            <div class="flex space-between">
              <p class="lbl-only">사업자번호<span class="req">*</span></p>
            </div>
            <div class="flex">
              <!-- input component -->
              <div class="input-box textType-2">
                <div class="inline-flex">
                  <label for="ip02" class="blind">사업자번호 입력</label>
                  <input id="ip02" type="text" title="" placeholder="" aria-label="" />
                  <div class="input-etc">
                    <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                  </div>
                </div>
              </div>
              <!-- input component -->
              <button type="button" class="btn btn-blueLine w-150 flex-00 btn-mid ml-10">중복확인</button>
            </div>
          </div>

          <div class="flex mt-20">
            <div class="form-row">
              <p class="lbl-only">대표자명<span class="req">*</span></p>
              <!-- input component -->
              <div class="input-box textType-2">
                <div class="inline-flex">
                  <label for="ip03" class="blind">대표자명 입력</label>
                  <input id="ip03" type="text" title="" placeholder="영문, 숫자, 특수문자를 포함한 8~20자" aria-label="비밀번호를 한번 더 입력하세요" />
                  <div class="input-etc">
                    <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                  </div>
                </div>
              </div>
              <!-- input component -->
            </div>
            <div class="form-row ml-10">
              <p class="lbl-only">연락처<span class="req">*</span></p>
              <!-- input component -->
              <div class="input-box textType-2">
                <div class="inline-flex">
                  <label for="ip04" class="blind">휴대폰번호 입력</label>
                  <input id="ip04" type="text" title="" placeholder="" aria-label="" />
                  <div class="input-etc">
                    <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                  </div>
                </div>
              </div>
              <!-- input component -->
            </div>
          </div>

          <div class="flex mt-20">
            <div class="form-row">
              <p class="lbl-only">이메일</p>
              <!-- input component -->
              <div class="input-box textType-2">
                <div class="inline-flex">
                  <label for="ip05" class="blind">이메일 주소 입력</label>
                  <input id="ip05" type="text" title="" placeholder="이메일 주소 입력" aria-label="이메일를 입력하세요" />
                  <div class="input-etc">
                    <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                  </div>
                </div>
              </div>
              <!-- input component -->
            </div>
            <div class="form-row ml-10">
              <p class="lbl-only">업종</p>
              <label for="ip05" class="blind">업종선택</label>
              <div class="select-box">
                <select>
                  <option value="">옵션 1</option>
                  <option value="">옵션 2</option>
                  <option value="">옵션 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-row mt-20">
            <p class="lbl-only">회사소개<span class="req">*</span></p>
            <div class="textarea">
              <textarea placeholder="회사소개 입력"></textarea>
              <div class="size"><em>0</em>/200자</div>
            </div>
          </div>
        </div>
        <div class="bottom-fixed">
          <div class="btn-wrap">
            <div class="flex">
              <button type="button" class="btn btn-primary">회원 가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { commonUi } from '@/main';

onMounted(() => {
  commonUi.init();
});
</script>
