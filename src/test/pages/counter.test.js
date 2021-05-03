import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import counterPage from '~/pages/counter'
import counterStore from '~/store/counter'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('pages/counter.vue', () => {
  let store

  beforeEach(() => {
    // どのテストでも確実に汚染されていないストアを使うためにモジュールを複製
    const clone = cloneDeep(counterStore)
    // モジュールを名前空間として登録する為の設定
    clone.namespaced = true

    // モックのVuexインスタンスを生成
    store = new Vuex.Store({
      modules: {
        counter: clone
      }
    })
  })

  it('カウンターをクリックした時に、カウントの値が「+1」される', () => {
    const wrapper = shallowMount(counterPage, { store, localVue })
    expect(wrapper.vm.count).toBe(0)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
