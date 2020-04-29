import { reducer as topBarReducer, statePath as topBarStatePath } from './components/top-bar'
import { reducer as postActionReducer, statePath as postActionPath } from './components/post-action'

export default {
  [topBarStatePath]: topBarReducer,
  [postActionPath]: postActionReducer,
}
