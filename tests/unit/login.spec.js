import { mount } from "@vue/test-utils";
import Login from "../../src/views/Login";
import store from "../../src/store/index";
import router from "../../src/router";

describe('Login', () => {
  beforeEach(() => {
    const user = {username: "user", password: "password"};
    store.commit("ADD_USER", user)

  })

  it('Check that wrong password and wrong username will show message and registration button',async() =>{
    const wrapper = mount(Login, {
      global:{
        plugins: [store, router]
      }
    })
    await wrapper.find('[id="u"]').setValue('wrongUsername')
    await wrapper.find('[id="p"]').setValue('wrongPassword')
    await wrapper.find('[id="logging"]').trigger('click')

    expect(wrapper.vm.showRegisterURL).toBe(true)
    expect(wrapper.find(".registerButton")).toBeTruthy()

  })
  it('Check that right username and wrong password will show wrong password',async() =>{
    const wrapper = mount(Login, {
      global:{
        plugins: [store, router]
      }
    })
    await wrapper.find('[id="u"]').setValue('user')
    await wrapper.find('[id="p"]').setValue('wrongpassword')
    await wrapper.find('[id="logging"]').trigger('click')

    expect(wrapper.find('[id="header"]').element.textContent).toBe("Wrong password")


  })
  it('Check that right password and username will log in',async() =>{
    const wrapper = mount(Login, {
      global:{
        plugins: [store, router]
      }
    })
    await wrapper.find('[id="u"]').setValue('user')
    await wrapper.find('[id="p"]').setValue('password')
    await wrapper.find('[id="logging"]').trigger('click')

    expect(wrapper.vm.showRegisterURL).toBe(false)
  })
});
