import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./test/setup.ts'],
    },
});
//# sourceMappingURL=vitest.config.js.map