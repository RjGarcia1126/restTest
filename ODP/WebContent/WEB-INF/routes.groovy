router.GET('smartchats') {
	strategy(SELECT_ALL_DOCUMENTS_BY_VIEW) {
		viewName('chats')
	}
	mapJson 'author', json:'author', type:'STRING'
	mapJson 'chat', json:'chat', type:'STRING'
	mapJson 'created', json:'created', type:'DATETIME',isformula:true, formula:'@Created'
}
router.GET('smartCatChats/{category}') {
	strategy(SELECT_ALL_DOCUMENTS_FROM_VIEW_BY_KEY) {
		keyVariableName("category")
		viewName("catChats")
	}
	mapJson 'category', json:'category', type:'STRING'
	mapJson 'author', json:'author', type:'STRING'
	mapJson 'chat', json:'chat', type:'STRING'
	mapJson 'created', json:'created', type:'DATETIME', isformula:true, formula:'@Created'
}