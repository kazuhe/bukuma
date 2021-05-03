import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import counterPage from '~/pages/counter'
import counterStore from '~/store/counter'

// メモリ上に仮想的なVueインスタンスを生成
const localVue = createLocalVue()
localVue.use(Vuex)

describe('pages/counter.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    // 初期化
    wrapper = null

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

    wrapper = shallowMount(counterPage, {
      localVue,

      // Vuexのモックを上書き
      store,

      // グローバルまたはローカルに登録されたコンポーネントを上書き
      stubs: {
        // <nuxt-link>コンポーネントをスタブ
        NuxtLink: RouterLinkStub
      }
    })
  })

  it('カウンターをクリックした時に、カウントの値が「+1」される', () => {
    expect(wrapper.vm.count).toBe(0)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
