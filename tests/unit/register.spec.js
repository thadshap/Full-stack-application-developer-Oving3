import { shallowMount } from "@vue/test-utils";
import Register from "../../src/views/Register";

describe("Register.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Register, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
