import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/router';

const app = createApp(App);
app.use(router);
// 기존 Vue 인스턴스 제거
const appElement = document.getElementById('app');
if (appElement.__vue_app__) {
  appElement.__vue_app__.unmount();
}
// 새 Vue 인스턴스 마운트
app.mount(appElement);

export const commonUi = {
  init: function () {
    this.inputHandlers();
  },

  // input 수정 소스
  inputHandlers: function () {
    const InputBox = document.querySelectorAll('.input-box');
    const InputDel = document.querySelectorAll('.input-del');
    const showToggle = document.querySelectorAll('.show-toggle');
    const customChk = document.querySelectorAll('.radio input, .checkbox input');
    // 인풋 readonly 및 disabled 추가
    function handleInputElements(selector, parentClass) {
      const inputs = document.querySelectorAll(selector);

      inputs.forEach((input) => {
        const parentDiv = input.parentElement;
        parentDiv.classList.add(parentClass);

        const elementsToHide = parentDiv.querySelectorAll('.input-del');
        elementsToHide.forEach((element) => {
          element.setAttribute('tabindex', '-1');
          element.classList.add('hide');
          element.blur();
        });
      });
    }

    handleInputElements('input[readonly]', 'readonly');
    handleInputElements('input[disabled]', 'disabled');

    const updateInputBoxState = (inputBoxDiv, inputElement) => {
      if (inputElement.value.trim() !== '') {
        inputBoxDiv.classList.add('hasValue');
        setElementsTabIndex(inputBoxDiv, '0');
      } else {
        inputBoxDiv.classList.remove('hasValue');
        setElementsTabIndex(inputBoxDiv, '-1');
      }

      if (inputElement.hasAttribute('readonly')) {
        inputBoxDiv.classList.add('readOnly');
      } else {
        inputBoxDiv.classList.remove('readOnly');
      }
    };

    const setElementsTabIndex = (inputBoxDiv, index) => {
      const elementsToHide = inputBoxDiv.querySelectorAll('.input-del');
      elementsToHide.forEach((element) => {
        element.setAttribute('tabindex', index);
      });
    };

    InputBox.forEach((inputBoxDiv) => {
      const inputElement = inputBoxDiv.querySelector('input');
      if (inputElement) {
        inputElement.addEventListener('focus', () => {
          inputBoxDiv.classList.add('focus');
        });
        inputElement.addEventListener('blur', () => {
          inputBoxDiv.classList.remove('focus');
        });

        updateInputBoxState(inputBoxDiv, inputElement);

        inputElement.addEventListener('input', () => {
          updateInputBoxState(inputBoxDiv, inputElement);
        });
      }
    });

    InputDel.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const inputBoxDiv = document.querySelectorAll('.input-box')[index];
        const inputElement = inputBoxDiv.querySelector('input');
        if (inputElement) {
          inputElement.value = '';
          inputBoxDiv.classList.remove('hasValue');
          //btn.setAttribute('tabindex', '-1')
        }
      });
    });

    showToggle.forEach((btn) => {
      btn.addEventListener('click', () => {
        const inputElement = btn.closest('.input-box').querySelector('input');
        if (inputElement.type === 'password') {
          inputElement.type = 'text';
          btn.setAttribute('aria-label', '비밀번호 보이기');
          btn.classList.remove('off');
          btn.classList.add('on');
        } else {
          inputElement.type = 'password';
          btn.setAttribute('aria-label', '비밀번호 숨기기');
          btn.classList.remove('on');
          btn.classList.add('off');
        }
      });
    });

    customChk.forEach((input) => {
      input.addEventListener('change', () => {
        const label = input.closest('label');
        const siblingLabels = label.querySelectorAll('.lbl');
        siblingLabels.forEach((lbl) => lbl.classList.add('focus-visible'));

        const statusInfo = label.querySelector('.status-info');
        if (statusInfo) {
          if (input.checked) {
            statusInfo.textContent = '선택됨';
          } else {
            statusInfo.textContent = '선택안됨';
          }
        }
      });
      input.addEventListener('focus', () => {
        const siblingLabels = input.closest('label').querySelectorAll('.lbl');
        siblingLabels.forEach((label) => label.classList.add('focus-visible'));
      });

      input.addEventListener('blur', () => {
        const siblingLabels = input.closest('label').querySelectorAll('.lbl');
        siblingLabels.forEach((label) => label.classList.remove('focus-visible'));
      });
    });
  }
};
