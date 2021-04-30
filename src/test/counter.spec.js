import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import index from '~/store/counter'

// メモリ上に仮想的なVueインスタンスを生成
const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/counter.js', () => {
  let store

  beforeEach(() => {
    // モックのVuexインスタンスを生成
    store = new Vuex.Store(cloneDeep(index))
  })

  describe('mutations', () => {
    it('incrementミューテーションがcommitされると、countステートの値が「+1」される', () => {
      expect(store.getters.count).toBe(0)
      store.commit('increment')
      expect(store.getters.count).toBe(1)
    })
  })

  describe('actions', () => {
    it('incrementアクションをdispatchする度に、incrementミューテーションがcommitされる', () => {
      expect(store.getters.count).toBe(0)
      store.dispatch('increment')
      expect(store.getters.count).toBe(1)
    })
  })
})
