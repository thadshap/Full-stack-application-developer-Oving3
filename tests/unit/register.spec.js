import { shallowMount } from "@vue/test-utils";
import register from "../../src/views/Register";
import store from "../../src/store/index";
import router from "../../src/router";

describe('register', () => {

  test('registration succeed',async() =>{
    const wrapper = shallowMount(register, {
      global:{
        plugins: [store, router]
      }
    })
    const user = {
      username: "username",
      password: "password",
    };
    await wrapper
        .find('[id="u"]').setValue(user.username)
    await wrapper
        .find('[id="p"]').setValue(user.password)
    await (wrapper.vm.handleClickRegister());
    expect(store.state.registers.at(store.state.registers-1)).toEqual(user);
  })
});
