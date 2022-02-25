import { shallowMount } from "@vue/test-utils";
import Login from "../../src/views/Login";

describe("Login.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Login, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
