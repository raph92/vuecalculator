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
    expect(wrapper.findAll('.operation-btn').length).toBe(4)

  });
  it("responds when a number is clicked", async ()=>{
    wrapper.find('[data-number="7"]').trigger('click')
    await flushPromises()
    let element = wrapper.find('#numberInput').element
    expect(element.value).toBe('7')
  });
});
