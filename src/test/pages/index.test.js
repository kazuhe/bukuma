import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import counterPage from '~/pages/counter'
import counter from '~/store/counter'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StringComp.vue', () => {
  let store
  const modules = {}
  counter.namespaced = true

  beforeEach(() => {
    modules.modules = { counter }
    store = new Vuex.Store(cloneDeep(modules))
  })

  it('カウンターをクリックした時に、カウントの値が「+1」される', () => {
    const wrapper = shallowMount(counterPage, { store, localVue })
    expect(wrapper.vm.count).toBe(0)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
