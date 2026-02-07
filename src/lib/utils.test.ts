import { describe, expect, it } from "vitest";
import { formatReadableDate, truncateText } from "@/lib/utils";

describe("utils", () => {
  it("truncateText short-circuits when under max length", () => {
    expect(truncateText("hello", 10)).toBe("hello");
  });

  it("truncateText truncates and appends ellipsis", () => {
    expect(truncateText("hello world", 8)).toBe("hello...");
  });

  it("formatReadableDate renders a readable date", () => {
    expect(formatReadableDate("2024-01-05", "YYYY-MM-DD")).toBe("2024-01-05");
  });
});
