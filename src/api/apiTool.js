
// import * as action from './index';
import { changePage, allPage } from '../features/pageControl/pageControlSlice';
import { searchProgressAction } from '../features/searchProgress/searchProgressSlice';
import { searchAllPage } from '../features/search2/search2Slice';
import { setAlert } from '../features/alert/alertSlice';
import { setSearchResData } from '../features/searchResData/searchResDataSlice';
import { search2Fn } from '../util/tool';
import axios from 'axios';

export const changePages = (pageNum) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('/api/page', { pageNum });
            const page = response.data;
            // dispatch(action.changePage(page));
            dispatch(changePage(page));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}


export const allPages = () => {
    return async (dispatch, getState) => {
        try {
            const pages = await axios.get('/api/page');
            const result = pages.data;
            dispatch(allPage(result));
        } catch(err) {
            console.log(err);
        }
    }
}



// import { searchAllPage, setAlert, setSearchResData } from './index';
// import { search2Fn } from '../../util/tool';
// import { searchProgressAction } from './index';


export const paginationSearchPage = (page) => {

    return async (dispatch, getState) => {
        try {
            const searchData = getState().search2;
            dispatch(searchProgressAction(true));
            search2Fn(searchData)
                .then(data => {
                    dispatch(searchAllPage(data[1].allPage))
                    if (data[0].length === 0) {
                        dispatch(setAlert(true));
                        setTimeout(() => {
                            dispatch(setAlert(false));
                            dispatch(searchProgressAction(false))
                        }, 4000)
                    }
                    dispatch(setSearchResData(data[0]));
                    dispatch(searchProgressAction(false));
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.error('Error search page change', error);
        }
    }
}









