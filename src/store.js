import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function fetch(url, callback) {
    axios({
        url: 'http://localhost:8080' + url,
        method: 'GET'
    }).then(res => {
        let data = res.data.data
        callback && callback(data)
    }).catch(err => {
        console.log('err', err)
    })
}

const store = new Vuex.Store({
    state: {
        userInfo: {
            user: '12345678909',
            password: 123321
        },
        skillArr: [],
        adArr: [],
        rcmdArr: [],
        orderArr: [],
        cateArr: [],
        cateGroup: []
    },
    mutations: {
        updateSkillArr(state, payload) {
            state.skillArr = payload;
        },
        updateAdArr(state, payload) {
            state.adArr = payload;
        },
        updateRcmdArr(state, payload) {
            // state.rcmdArr = payload
            state.rcmdArr = [...state.rcmdArr, ...payload]
        },
        updateOrderArr(state, payload) {
            switch (payload.type) {
                case 'delete':
                    // 删除一个订单
                    state.orderArr.map((ele, idx) => {
                        // 用index来判断商品的唯一性
                        if (idx == payload.index) {
                            console.log(payload.index)
                            state.orderArr.splice(idx, 1)
                            return
                        }
                    })
                    break;
                case 'deleteAll':
                    // 提交购物
                    state.orderArr = []
                    break;
                case 'insert':
                    // 添加商品
                    state.orderArr.push(payload.orderArr)
                    console.log('orderArr1', state.orderArr)
                    break;
                default:
            }
        },
        updateCateArr(state, payload) {
            state.cateArr = payload;
            state.cateGroup = state.cateArr[0].data;

        },
        updateCateGroup(state, payload) {
            state.cateGroup = state.cateArr[payload].data
            console.log(state.cateGroup)
        }
    },
    actions: {
        getSkillGoods(store) {
            fetch('/db/goods.json', data => {
                console.log(data)
                store.commit('updateSkillArr', data)
            })
        },
        getAds(store) {
            fetch('/db/ads.json', data => {
                console.log(data)
                store.commit('updateAdArr', data)
            })
        },
        getRcmd(store) {
            fetch('/db/rcmd.json', data => {
                console.log(data)
                store.commit('updateRcmdArr', data)
            })
        },
        getCates(store) {
            fetch('/db/cates.json', data => {
                console.log(data)
                store.commit('updateCateArr', data)
            })
        }
    }
})


export default store