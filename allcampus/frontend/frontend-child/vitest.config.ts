
import { beforeAll, afterAll, afterEach, vi } from "vitest";
import * as chai from "chai";
import chaiDom from "chai-dom";

chai.use(chaiDom);

Object.defineProperty(document, "onselectstart", {
    configurable: true,
    writable: true,
    value: null,
});

// vue-i18n モック
vi.mock("vue-i18n", () => ({
    createI18n: vi.fn().mockReturnValue({
        t: (key: string) => key,
        useI18n: vi.fn().mockReturnValue({
            t: (key: string) => key,
        }),
    }),
    useI18n: vi.fn().mockReturnValue({
        t: (key: string) => key,
    }),
}));

beforeAll(() => {
    // fetch のモック
    globalThis.fetch = vi.fn();
});

afterEach(() => {
    // 各テストごとのモック状態をクリア
    vi.clearAllMocks();
});

afterAll(() => {
    // すべてのモックをリセット
    vi.restoreAllMocks();
});