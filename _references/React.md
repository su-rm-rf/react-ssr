# React      
StrictMode
  https://legacy.reactjs.org/docs/strict-mode.html

useEffect
  渲染两次 https://blog.csdn.net/weixin_45549737/article/details/127120729
    模拟立即卸载组件和重新挂载组件，仅在dev环境下使用StrictMode时发生，prod环境用了也不发生


# Router


# Redux
旧版本：
  导入全局store
  使用reducer来创建一个全局store
  把reducer拆分成子reducers
    在reducer中改变state，接收旧的state和action，返回新的state
  将state和dispatch(action)转为props，与视图进行connect
  在视图层通过props获取state，或触发action

  <react-redux.Provider store={ store }></react-redux.Provider>
  store = redux.createStore(reducer)
  reducer = redux.combineReducers({ subReducers })
  react-redux.connect(mapStateToProps, mapDispatchToProps)(Component)
  props.state或props.method(params)


单向数据流：
  导入全局store
  使用子reducers来创建一个全局store
  子slice对外暴露reducer和actions(reducers)
    在reducer中改变state，接收旧的state和参数，返回新的state
  在视图层使用useSelector获取state，使用useDispatch()(action)触发action

  <react-redux.Provider store={ store }></react-redux.Provider>
  store = @reduxjs/toolkit.configureStore({ reducer: { slice.reducer } })
  slice = @reduxjs/toolkit.createSlice({ name, initialState, reducers: {...} })
  react-redux.useSelector(state => state.reducer.key)
  react-redux.useDispatch()(action(params))



智取而非力取

高级前端
梭哈：HCJT + React + Vue3 + Webpack + Node.js + 网络 + 数据库缓存 + 部署运维 + 测试 + 业务理解 + 管理



