const reducer = (state, action) => {

    if (state === undefined) {
        return {
            timeList: [[], [], [], [], [], [], []],
        }
    }

    switch (action.type) {
        case 'TIME_LIST_LOADED':
            return {
                timeList: [[[1, 15], [18, 21]], [[0,10],[20,30]], [[1,5],[15,28],[32,48]], [], [], [], []],
            }
        default:
            return state
    }

}

export default reducer