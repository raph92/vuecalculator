import Calculator from "@/components/Calculator.vue";
import { mount } from "@vue/test-utils";
import flushPromises from 'flush-promises'

describe("calculator.vue", () => {
  const wrapper = mount(Calculator)
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("has 10 number buttons", () => {
    expect(wrapper.findAll('.number-btn').length).toBe(10)
  });
  it("has 4 arithmetic operations", ()=>{
    expect(wrapper.find('.add-btn').exists()).toBe(true)
    expect(wrapper.find('.divide-btn').exists()).toBe(true)
    expect(wrapper.find('.subtract-btn').exists()).toBe(true)
    expect(wrapper.find('.multiply-btn').exists()).toBe(true)
  });
  it("responds when a number is clicked", async ()=>{
    wrapper.find('[data-number="7"]').trigger('click')
    await flushPromises()
    let element = wrapper.find('#numberInput').element
    expect(element.value).toBe('7')
  });
});
