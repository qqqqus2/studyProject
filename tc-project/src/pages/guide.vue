<template>
  <!-- 컨텐츠 -->
  <div class="kidi-content inner">
    <h2 class="content-tit fz-60">Text input</h2>
    <div class="mt-20">
      <div class="flex">
        <div class="form-item flex-11">
          <h3>Type 1</h3>
          <!-- input component -->
          <div class="input-box textType-1 mt-20">
            <label class="required">label</label>
            <div class="inline-flex">
              <input type="text" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
          </div>
          <!-- input component -->
          <div class="input-box textType-1 mt-20">
            <label class="required">label</label>
            <div class="inline-flex">
              <input type="password" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                <button type="button" class="btn show-toggle off" aria-label="비밀번호 보이기"></button>
              </div>
            </div>
          </div>
          <!-- input component -->
          <!-- 작성시간 타입 -->
          <div class="input-box textType-1 mt-20">
            <label class="required">label</label>
            <div class="inline-flex">
              <input type="text" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <span class="remain-time">4:58</span>
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-item flex-11">
          <h3>Type 2</h3>
          <!-- input component -->
          <div class="input-box textType-2 mt-20">
            <div class="inline-flex">
              <input type="text" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
          </div>
          <!-- input component -->
          <div class="input-box textType-2 mt-20">
            <div class="inline-flex">
              <input type="text" title="입력하세요" disabled placeholder="" aria-label="disabled 속성" value="disabled 형태" />
              <div class="input-etc">
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
          </div>
          <!-- input component -->
          <div class="input-box textType-2 mt-20">
            <div class="inline-flex">
              <input type="text" title="입력하세요" readonly placeholder="" aria-label="readonly 속성" value="readonly 형태" />
              <div class="input-etc">
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
          </div>
          <!-- input component -->
          <!-- 작성시간 타입 -->
          <div class="input-box textType-2 mt-20">
            <div class="inline-flex">
              <input type="password" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <span class="remain-time" tabindex="-1">4:58</span>
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
                <button type="button" class="btn show-toggle off" aria-label="비밀번호 보이기"></button>
              </div>
            </div>
          </div>
          <!-- input component -->
          <!-- 작성시간 타입 -->
          <div class="input-box textType-2 error mt-20">
            <div class="inline-flex">
              <input type="text" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <span class="remain-time">4:58</span>
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
            <!-- 추가 정보 텍스트 -->
            <div class="error-txt">Helper text</div>
          </div>
        </div>
      </div>
      <div class="form-item flex-11">
        <h3>Type search</h3>
        <div class="input-box textType-2 mt-20">
          <div class="inline-flex">
            <div class="flex flex-11">
              <input type="text" title="입력하세요" placeholder="입력하세요" aria-label="입력하세요" />
              <div class="input-etc">
                <button type="button" class="btn input-del" aria-label="입력항목 초기화"></button>
              </div>
            </div>
            <button type="button" class="btn btn-search" aria-label="검색하기"></button>
          </div>
        </div>
      </div>
      <div class="form-item flex-11">
        <h3>Textarea</h3>
        <div class="textarea">
          <textarea placeholder="placeholder"></textarea>
          <div class="size"><em>0</em>/200자</div>
        </div>
      </div>
    </div>

    <hr class="hr-divide ml-m24 mr-m24" />

    <h2 class="content-tit fz-60">File Upload</h2>
    <div>
      <FileUploader :fileLabel="'서류 첨부'" :uploadType="'imageItem'" />
    </div>

    <h2 class="mt-20">Select box</h2>
    <div class="mt-20">
      <div class="select-box w-full">
        <select>
          <option value="">옵션 1</option>
          <option value="">옵션 2</option>
          <option value="">옵션 3</option>
        </select>
      </div>
      <div class="select-box w-full">
        <select disabled>
          <option value="">Disabled</option>
        </select>
      </div>
      <div class="select-box error w-full">
        <select>
          <option value="">Error</option>
        </select>
        <div class="error-txt">Helper text</div>
      </div>
    </div>
    <h2 class="mt-20">Select box(custom)</h2>
    <div class="mt-20">
      <div class="flex">
        <div class="form-item flex-11">
          <!-- 사용안함 -->
          <!-- <customDropdown :options="dropdownOptions" /> -->
        </div>
      </div>
    </div>

    <hr class="hr-divide ml-m24 mr-m24" />

    <h2 class="content-tit fz-60">Selection Control</h2>
    <div class="mt-20">
      <h4>Checkbox (big)</h4>
      <div class="mt-20">
        <label for="chk1-B" class="checkbox size-lg">
          <input type="checkbox" id="chk1-B" name="chk1-B" checked /><i aria-hidden="true" class="lbl"></i>
          <span>체크박스</span>
        </label>
        <label for="chk2-B" class="checkbox singleType size-lg"> <input type="checkbox" id="chk2-B" name="chk2-B" checked /><i aria-hidden="true" class="lbl"></i> </label>
      </div>
      <h4 class="mt-20">Checkbox (normal)</h4>
      <div class="mt-20">
        <label for="chk1" class="checkbox">
          <input type="checkbox" id="chk1" name="chk1" checked /><i aria-hidden="true" class="lbl"></i>
          <span>체크박스</span>
        </label>
        <label for="chk2" class="checkbox">
          <input type="checkbox" id="chk2" name="chk2" /><i aria-hidden="true" class="lbl"></i>
          <span>체크박스</span>
        </label>
        <label for="chk4" class="checkbox">
          <input type="checkbox" id="chk3" name="chk3" disabled /><i aria-hidden="true" class="lbl"></i>
          <span>체크박스 disabled</span>
        </label>
        <label for="chk4" class="checkbox">
          <input type="checkbox" id="chk4" name="chk4" checked disabled /><i aria-hidden="true" class="lbl"></i>
          <span>체크박스 checked disabled</span>
        </label>
      </div>

      <h4>Radio (normal)</h4>
      <div>
        <label for="rdo1" class="radio">
          <input type="radio" id="rdo1" name="rdo1" checked /><i aria-hidden="true" class="lbl"></i>
          <span>라디오 버튼</span>
        </label>
        <label for="rdo2" class="radio">
          <input type="radio" id="rdo2" name="rdo1" /><i aria-hidden="true" class="lbl"></i>
          <span>라디오 버튼</span>
        </label>
      </div>

      <h4>Radio (check)</h4>
      <div>
        <label for="rdo3" class="radio type-check">
          <input type="radio" id="rdo3" name="rdo2" checked /><i aria-hidden="true" class="lbl"></i>
          <span>라디오 버튼</span>
        </label>
        <label for="rdo4" class="radio type-check">
          <input type="radio" id="rdo4" name="rdo2" /><i aria-hidden="true" class="lbl"></i>
          <span>라디오 버튼</span>
        </label>
        <label for="rdo5" class="radio type-check size-lg">
          <input type="radio" id="rdo5" name="rdo3" checked /><i aria-hidden="true" class="lbl"></i>
          <span>라디오 버튼</span>
        </label>
        <label for="rdo6" class="radio type-check size-lg">
          <input type="radio" id="rdo6" name="rdo3" /><i aria-hidden="true" class="lbl"></i>
          <span>라디오 버튼</span>
        </label>
      </div>

      <h4>Checkbox (toggle version)</h4>
      <div>
        <label for="chkToggle2" class="checkbox toggle-type-1">
          <input type="checkbox" id="chkToggle2" name="" /><i aria-hidden="true" class="lbl"></i>
          <span class="status-info">선택 안됨</span>
        </label>
      </div>

      <h4 class="mt-30">Tab toggle</h4>
      <div>
        <h5 class="mt-20">type 1</h5>
        <div class="radio-tabType-1">
          <label for="tabRdo1" class="radio">
            <input type="radio" id="tabRdo1" name="tabRdo1" checked /><i aria-hidden="true" class="lbl"></i>
            <span>네</span>
          </label>
          <label for="tabRdo2" class="radio">
            <input type="radio" id="tabRdo2" name="tabRdo1" /><i aria-hidden="true" class="lbl"></i>
            <span>아니오</span>
          </label>
        </div>

        <h5 class="mt-20">type 2</h5>
        <div class="radio-tabType-2">
          <label for="tabRdo3" class="radio">
            <input type="radio" id="tabRdo3" name="tabRdo2" checked /><i aria-hidden="true" class="lbl"></i>
            <span>3년</span>
          </label>
          <label for="tabRdo4" class="radio">
            <input type="radio" id="tabRdo4" name="tabRdo2" /><i aria-hidden="true" class="lbl"></i>
            <span>1년</span>
          </label>
          <label for="tabRdo5" class="radio">
            <input type="radio" id="tabRdo5" name="tabRdo2" checked /><i aria-hidden="true" class="lbl"></i>
            <span>6개월</span>
          </label>
          <label for="tabRdo6" class="radio">
            <input type="radio" id="tabRdo6" name="tabRdo2" /><i aria-hidden="true" class="lbl"></i>
            <span>직접입력</span>
          </label>
        </div>
      </div>
    </div>

    <hr class="hr-divide ml-m24 mr-m24" />

    <h2 class="content-tit fz-60">Button</h2>
    <div class="mt-20">
      <div class="flex flex-wrap gap-10">
        <p class="flex-11 w-full">Button default</p>
        <button type="button" class="btn btn-primary w-154">Button</button>
        <button type="button" class="btn btn-primary w-154" disabled>Button</button>

        <button type="button" class="btn btn-secondary w-154">Button</button>
        <button type="button" class="btn btn-secondary w-154" disabled>Button</button>

        <button type="button" class="btn btn-gray w-154">Button</button>
        <button type="button" class="btn btn-gray w-154" disabled>Button</button>

        <button type="button" class="btn btn-blueLine w-154">Button</button>
        <button type="button" class="btn btn-blueLine w-154" disabled>Button</button>

        <button type="button" class="btn btn-grayLine w-154">Button</button>
        <button type="button" class="btn btn-grayLine w-154" disabled>Button</button>

        <!-- 디자인 가이드에서 삭제됨 
        <button type="button" class="btn btn-secondaryLine w-154">Button</button>
        <button type="button" class="btn btn-secondaryLine w-154" disabled>Button</button>
          -->
      </div>

      <div class="mt-10">
        <p>Button medium</p>
        <button type="button" class="btn btn-primary btn-mid w-120">Button</button>
        <button type="button" class="btn btn-primary btn-mid w-120" disabled>Button</button>

        <!-- 디자인 가이드에서 삭제됨 
        <button type="button" class="btn btn-secondary btn-mid w-120">Button</button>
        <button type="button" class="btn btn-secondary btn-mid w-120" disabled>Button</button>
        -->
        <button type="button" class="btn btn-gray btn-mid w-120">Button</button>
        <button type="button" class="btn btn-gray btn-mid w-120" disabled>Button</button>

        <button type="button" class="btn btn-blueLine btn-mid w-120">Button</button>
        <button type="button" class="btn btn-blueLine btn-mid w-120" disabled>Button</button>

        <button type="button" class="btn btn-secondaryLine btn-mid w-120">Button</button>
        <button type="button" class="btn btn-secondaryLine btn-mid w-120" disabled>Button</button>

        <button type="button" class="btn btn-grayLine btn-mid w-120">Button</button>
        <button type="button" class="btn btn-grayLine btn-mid w-120" disabled>Button</button>
      </div>

      <div class="mt-10">
        <p>Button small</p>
        <button type="button" class="btn btn-primary btn-sml w-112">Button</button>
        <button type="button" class="btn btn-primary btn-sml w-112" disabled>Button</button>
        <!-- 디자인 가이드에서 삭제됨 
        <button type="button" class="btn btn-secondary btn-sml w-112">Button</button>
        <button type="button" class="btn btn-secondary btn-sml w-112" disabled>Button</button>
        -->
        <button type="button" class="btn btn-gray btn-sml w-112">Button</button>
        <button type="button" class="btn btn-gray btn-sml w-112" disabled>Button</button>

        <button type="button" class="btn btn-blueLine btn-sml w-112">Button</button>
        <button type="button" class="btn btn-blueLine btn-sml w-112" disabled>Button</button>

        <button type="button" class="btn btn-secondaryLine btn-sml w-112">Button</button>
        <button type="button" class="btn btn-secondaryLine btn-sml w-112" disabled>Button</button>

        <button type="button" class="btn btn-grayLine btn-sml w-112">Button</button>
        <button type="button" class="btn btn-grayLine btn-sml w-112" disabled>Button</button>
      </div>

      <div class="mt-10">
        <p>Button tiny</p>
        <button type="button" class="btn btn-primary btn-tiny w-88">Button</button>
        <button type="button" class="btn btn-primary btn-tiny w-88" disabled>Button</button>
        <!-- 디자인 가이드에서 삭제됨 
        <button type="button" class="btn btn-secondary btn-tiny w-88">Button</button>
        <button type="button" class="btn btn-secondary btn-tiny w-88" disabled>Button</button>
        -->
        <button type="button" class="btn btn-gray btn-tiny w-88">Button</button>
        <button type="button" class="btn btn-gray btn-tiny w-88" disabled>Button</button>

        <button type="button" class="btn btn-blueLine btn-tiny w-88">Button</button>
        <button type="button" class="btn btn-blueLine btn-tiny w-88" disabled>Button</button>

        <button type="button" class="btn btn-secondaryLine btn-tiny w-88">Button</button>
        <button type="button" class="btn btn-secondaryLine btn-tiny w-88" disabled>Button</button>

        <button type="button" class="btn btn-grayLine btn-tiny w-88">Button</button>
        <button type="button" class="btn btn-grayLine btn-tiny w-88" disabled>Button</button>
      </div>
    </div>

    <hr class="hr-divide ml-m24 mr-m24" />
  </div>

  <!-- //컨텐츠 -->
</template>

<script>
import { onMounted } from 'vue';
import { commonUi } from '@/main';

export default {
  setup() {
    onMounted(() => {
      commonUi.init();
    });

    return {}; // setup 함수에서는 반응형 상태를 반환
  },
  components: {},
  data() {}
};
</script>
