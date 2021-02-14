import Calculator from "@/components/Calculator.vue";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

describe("calculator.vue", () => {
  const wrapper = mount(Calculator);
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("has 10 number buttons", () => {
    expect(wrapper.findAll(".number-btn").length).toBe(10);
  });
  it("has 4 arithmetic operations", () => {
    expect(wrapper.findAll(".operation-btn").length).toBe(4);
  });
  it("responds when a number is clicked", async () => {
    wrapper.find('[data-number="7"]').trigger("click");
    await flushPromises();
    expect(wrapper.find("#numberInput").element.value).toBe("7");
  });
  it("has a working clear button", async () => {
    // this test continues from "responds when a number is clicked"
    expect(wrapper.find(".clear-btn").exists()).toBe(true);
    wrapper.find(".clear-btn").trigger("click");
    await flushPromises();
    expect(wrapper.find("#answer").element.value).toBe("");
    expect(wrapper.find("#numberInput").element.value).toBe("");
  });
  it("can calculate basic arithmetic", async () => {
    wrapper.find('[data-number="7"]').trigger("click");
    wrapper.find('[data-number="*"]').trigger("click");
    wrapper.find('[data-number="7"]').trigger("click");
    wrapper.find(".answer-btn").trigger("click");
    await flushPromises();
    expect(wrapper.vm.answer).toBe(49);
  });
  it("can remember the last answer", async () => {
    wrapper.find(".clear-btn").trigger("click");
    wrapper.find(".last-answer-btn").trigger("click");
    await flushPromises();
    // always has to be a string because of operations and parenthesis
    expect(wrapper.vm.input).toEqual("49");
  });
  it("sets state to false with invalid input", async () => {
    wrapper.vm.input = 'some letters'
    wrapper.vm.calculate()
    expect(wrapper.vm.state).toBe(false)
  });
});
