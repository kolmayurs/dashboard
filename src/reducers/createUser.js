export default function createUser(
	state={loading: false, 
		loaded: false, 
		data:[],
		error:null},action){
	switch(action.type){
		case 'CREATE_USER_START' : {
			return {...state, loading: true}
		}
		case 'CREATE_USER_SUCCESS' : {
			return {...state, loading: false, loaded: true, data: action.data}
		}
		case 'CREATE_USER_FAIL' : {
			return{...state, loading:false, loaded:false, error:action.error}
		}
		default:{
			return{...state}
		}
	}

}