import { getQueryParam } from "./getQueryParam";

export const getPageNumber = (url) => {
    const query = getQueryParam(url);
    let pageNumber = query.page;

    try {
      pageNumber = parseInt(query.page) || 1;
    } catch (error) {
      pageNumber = 1;
    }

    return pageNumber > 0 ? pageNumber : 1;
};