import { describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDebouncedCallback } from "@/hooks/useDebounceCallBack";
import { useCheckItems } from "@/hooks/useCheckItems";

describe("useDebouncedCallback", () => {
  it("debounces calls", () => {
    vi.useFakeTimers();
    const spy = vi.fn();

    const { result } = renderHook(() =>
      useDebouncedCallback(spy, 200)
    );

    result.current("a");
    result.current("b");
    expect(spy).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("b");
    vi.useRealTimers();
  });
});

describe("useCheckItems", () => {
  it("toggles items by key", () => {
    const items = [
      { id: "a", value: "A" },
      { id: "b", value: "B" },
    ];

    const { result } = renderHook(() => useCheckItems(items, [], "id"));

    act(() => {
      result.current.itemToggle("a");
    });

    expect(result.current.checkedItems).toEqual([{ id: "a", value: "A" }]);
    expect(result.current.allItems.find((i) => i.id === "a")?.checked).toBe(
      true
    );
  });
});
