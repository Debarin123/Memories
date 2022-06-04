import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.getPosts();
        // dispatch({type: 'FETCH_ALL', data});
    } catch (error) {
        console.log(error.message);
    }
}