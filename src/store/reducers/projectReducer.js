const initState = {
	projects:[
		{id:'1', title:"first project title", content:"content for the first project"},
		{id:'2', title:"second project title", content:"content for the second project"},
		{id:'3', title:"third project title", content:"content for the third project"},
		{id:'4', title:"fourth project title", content:"content for the fourth project"},
	]
}

const projectReducer = (state=initState, action) => {
	switch(action.type){
		case 'CREATE_PROJECT':
			console.log('created project', action.project)
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log("create project error", action.err)
			return state;
		default:
			return state;
	}
}

export default projectReducer;