import Editor from './components/Editor'

// Sync route definition
export default (store) => ({
  path : 'editor',
  getComponent (nextState, cb) {
  	require.ensure([], (require) => {
  		const Editor = require('./containers/EditorContainer').default

  		cb(null, Editor)
  	}, 'editor')
  }
})
