import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 0AClCQP7tskpraQuotzZWMaRq7s2w_1dn-ezVL_lWIk'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;