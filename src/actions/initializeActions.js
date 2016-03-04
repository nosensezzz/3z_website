"use strict";

var 
Dispatcher = require('../dispatcher/appDispatcher'),

AuthorApi = require('../api/authorApi'),
ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
	initApp: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = InitializeActions;