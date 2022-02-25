//import { shallowMount } from "@vue/test-utils";
import store from "../../src/store/index";

describe('store', () => {
  test('adding profile', async() => {
    const profile = { username:"name", password: "password" };
    await store.commit('ADD_USER', profile)
    const received = store.state.registers.pop()
    expect(received).toStrictEqual(profile)
  })
  test('Setting current user', async() => {
    const user = { username:"name", password: "password" };
    await store.commit('SET_PROFILE', user)
    const received = store.state.register
    expect(received).toStrictEqual(user)
  })
  test('Setting users', async() => {
    const user = { username:"name", password: "password" };
    const secondUser = { username:"name1", password: "password1" };
    const users = [];
    users.push(user)
    users.push(secondUser)
    await store.commit('SET_PROFILES', users)
    expect(store.state.registers.length).toEqual(users.length)
  })
});
