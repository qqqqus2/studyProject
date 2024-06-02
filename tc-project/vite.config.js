import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // path.resolve 함수 사용
        },
    },
    server: {
        // 로컬 개발 서버 설정
        host: "localhost",
        port: 8080,
        open: true, // 서버 시작 시 브라우저 자동 열기
        strictPort: true, // 지정된 포트가 사용중이면 서버 시작 실패
    },
    build: {
        // 빌드 설정
        outDir: "dist", // 빌드 결과물 디렉토리
        assetsDir: "assets", // 정적 자원 디렉토리
        sourcemap: false, // 소스맵 생성 여부
    },
});
