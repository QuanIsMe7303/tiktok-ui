import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        //call api
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
