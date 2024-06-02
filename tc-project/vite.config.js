import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        // 로컬 개발 서버 설정
        host: "localhost",
        port: 8080,
        open: true, // 서버 시작 시 브라우저 자동 열기
        strictPort: true, // 지정된 포트가 사용중이면 서버 시작 실패
    },
});
