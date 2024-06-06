import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
app.use(router);
// 기존 Vue 인스턴스 제거
const appElement = document.getElementById("app");
if (appElement.__vue_app__) {
    appElement.__vue_app__.unmount();
}
// 새 Vue 인스턴스 마운트
app.mount(appElement);

export const commonUi = {
    init: function () {
        this.inputHandlers();
    },

    // 헤더 고정

    // input 수정 소스
    inputHandlers: function () {
        const InputBox = document.querySelectorAll(".input-box");
        const InputDel = document.querySelectorAll(".input-del");
        const showToggle = document.querySelectorAll(".show-toggle");
        const customChk = document.querySelectorAll(
            ".radio input, .checkbox input"
        );
        // 인풋 readonly 및 disabled 추가
        function handleInputElements(selector, parentClass) {
            const inputs = document.querySelectorAll(selector);

            inputs.forEach((input) => {
                const parentDiv = input.parentElement;
                parentDiv.classList.add(parentClass);

                const elementsToHide = parentDiv.querySelectorAll(".input-del");
                elementsToHide.forEach((element) => {
                    element.setAttribute("tabindex", "-1");
                    element.classList.add("hide");
                    element.blur();
                });
            });
        }

        handleInputElements("input[readonly]", "readonly");
        handleInputElements("input[disabled]", "disabled");

        const updateInputBoxState = (inputBoxDiv, inputElement) => {
            if (inputElement.value.trim() !== "") {
                inputBoxDiv.classList.add("hasValue");
                setElementsTabIndex(inputBoxDiv, "0");
            } else {
                inputBoxDiv.classList.remove("hasValue");
                setElementsTabIndex(inputBoxDiv, "-1");
            }

            if (inputElement.hasAttribute("readonly")) {
                inputBoxDiv.classList.add("readOnly");
            } else {
                inputBoxDiv.classList.remove("readOnly");
            }
        };

        const setElementsTabIndex = (inputBoxDiv, index) => {
            const elementsToHide = inputBoxDiv.querySelectorAll(".input-del");
            elementsToHide.forEach((element) => {
                element.setAttribute("tabindex", index);
            });
        };

        InputBox.forEach((inputBoxDiv) => {
            const inputElement = inputBoxDiv.querySelector("input");
            if (inputElement) {
                inputElement.addEventListener("focus", () => {
                    inputBoxDiv.classList.add("focus");
                });
                inputElement.addEventListener("blur", () => {
                    inputBoxDiv.classList.remove("focus");
                });

                updateInputBoxState(inputBoxDiv, inputElement);

                inputElement.addEventListener("input", () => {
                    updateInputBoxState(inputBoxDiv, inputElement);
                });
            }
        });

        InputDel.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const inputBoxDiv =
                    document.querySelectorAll(".input-box")[index];
                const inputElement = inputBoxDiv.querySelector("input");
                if (inputElement) {
                    inputElement.value = "";
                    inputBoxDiv.classList.remove("hasValue");
                    //btn.setAttribute('tabindex', '-1')
                }
            });
        });

        showToggle.forEach((btn) => {
            btn.addEventListener("click", () => {
                const inputElement = btn
                    .closest(".input-box")
                    .querySelector("input");
                if (inputElement.type === "password") {
                    inputElement.type = "text";
                    btn.setAttribute("aria-label", "비밀번호 보이기");
                    btn.classList.remove("off");
                    btn.classList.add("on");
                } else {
                    inputElement.type = "password";
                    btn.setAttribute("aria-label", "비밀번호 숨기기");
                    btn.classList.remove("on");
                    btn.classList.add("off");
                }
            });
        });

        customChk.forEach((input) => {
            input.addEventListener("change", () => {
                const label = input.closest("label");
                const siblingLabels = label.querySelectorAll(".lbl");
                siblingLabels.forEach((lbl) =>
                    lbl.classList.add("focus-visible")
                );

                const statusInfo = label.querySelector(".status-info");
                if (statusInfo) {
                    if (input.checked) {
                        statusInfo.textContent = "선택됨";
                    } else {
                        statusInfo.textContent = "선택안됨";
                    }
                }
            });
            input.addEventListener("focus", () => {
                const siblingLabels = input
                    .closest("label")
                    .querySelectorAll(".lbl");
                siblingLabels.forEach((label) =>
                    label.classList.add("focus-visible")
                );
            });

            input.addEventListener("blur", () => {
                const siblingLabels = input
                    .closest("label")
                    .querySelectorAll(".lbl");
                siblingLabels.forEach((label) =>
                    label.classList.remove("focus-visible")
                );
            });
        });
    },
};

export function toggleGnb() {
    const gnbOpen = document.body.classList.contains("gnbOpen");
    const menuButton = document.querySelector(".btn-menu");
    document.body.classList.toggle("gnbOpen");
    if (menuButton) {
        const newLabel = gnbOpen ? "메뉴 닫기" : "메뉴 열기";
        menuButton.setAttribute("aria-label", newLabel);
    }
}

// 클래스를 추가/제거 공통 스크립트
function toggleClass(element, className, add) {
    if (element) {
        if (add) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }
}

// 팝업 열기&닫기
export function togglePop(elementId, shouldShow, isTooltip = false) {
    const modal = document.getElementById(elementId);
    const triggerElement = document.querySelector(
        `[aria-controls="${elementId}"]`
    );

    if (shouldShow) {
        if (!isTooltip) {
            toggleClass(document.body, "lock", true);
        }
        toggleClass(modal, "show", true);
        setTimeout(function () {
            toggleClass(modal, "show-end", true);
            modal.setAttribute("aria-hidden", "false");

            if (triggerElement) {
                triggerElement.setAttribute("aria-expanded", "true");
            }
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements.length) {
                focusableElements[0].focus();
            } else {
                modal.focus();
            }
        }, 100);
    } else {
        if (modal.classList.contains("show-end")) {
            if (!isTooltip) {
                toggleClass(document.body, "lock", false);
            }
            modal.classList.remove("show-end");
            modal.setAttribute("aria-hidden", "true");
            setTimeout(function () {
                toggleClass(modal, "show", false);
                if (triggerElement) {
                    triggerElement.setAttribute("aria-expanded", "false");
                    triggerElement.focus(); // 포커스를 트리거 버튼으로 이동
                }
            }, 500);
        }
    }
}

// 전체 동의 체크박스
app.directive("toggle-checked", {
    beforeMount(el) {
        const input = el.querySelector('input[type="checkbox"]');
        if (input) {
            input.addEventListener("change", () => {
                if (input.checked) {
                    el.classList.add("checked");
                } else {
                    el.classList.remove("checked");
                }
            });
        }
    },
});
// 디바이스 체크
const device = {
    check: function () {
        isDevice.check();
    },
};
const isDevice = {
    window: () => /windows/i.test(navigator.userAgent),
    mac: () => /macintosh/i.test(navigator.userAgent),
    chrome: () =>
        /chrome/i.test(navigator.userAgent) &&
        !/edge/i.test(navigator.userAgent) &&
        !/opr/i.test(navigator.userAgent),
    firefox: () => /firefox/i.test(navigator.userAgent),
    opera: () => /opera|OPR/i.test(navigator.userAgent),
    safari: () =>
        /safari/i.test(navigator.userAgent) &&
        !/chrome/i.test(navigator.userAgent) &&
        !/opr/i.test(navigator.userAgent),
    edge: () => /edge/i.test(navigator.userAgent),
    msie: () => /rv:11.0|msie/i.test(navigator.userAgent),
    ie11: () => /rv:11.0/i.test(navigator.userAgent),
    ie10: () => /msie 10.0/i.test(navigator.userAgent),
    ie9: () => /msie 9.0/i.test(navigator.userAgent),
    ie8: () => /msie 8.0/i.test(navigator.userAgent),
    android: () => /android/i.test(navigator.userAgent),
    ios: () => /iphone|ipad|ipod/i.test(navigator.userAgent),
    any: function () {
        return this.window() || this.mac();
    },
    check: function () {
        const html = document.documentElement;
        Object.entries(this).forEach(([key, func]) => {
            if (
                typeof func === "function" &&
                key !== "check" &&
                key !== "any" &&
                func()
            ) {
                html.classList.add(key);
            }
        });
    },
};
