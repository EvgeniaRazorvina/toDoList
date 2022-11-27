const TEXTAREADATA = 'textAreaData';

export const saveTextAreaData = async (textareaData: string) => {
    try{
        localStorage.setItem(TEXTAREADATA,JSON.stringify(textareaData));
    } catch (error) {
        console.log(error);
    }
}

export const getTextAreaData = async () => {
    const data = await localStorage.getItem(TEXTAREADATA);
    if(!data) {
        return Promise.reject(`${TEXTAREADATA} is null`);
    }
    const textAreaData: string = JSON.parse(data);
    return Promise.resolve(textAreaData);
}

/*export const saveTextAreaData = async (textareaData: string) => {
    try {
        AsyncStorage.setItem(PING_DATA, JSON.stringify(pingData));
    } catch (error) {
        if (__DEV__) {
            console.log(error);
        }
    }
};
export const getPingFromCache = async () => {
    const data = await AsyncStorage.getItem(PING_DATA);
    if (!data) {
        return Promise.reject(`${PING_DATA} is null`);
    }
    const pingData: PingData = JSON.parse(data);
    return Promise.resolve(pingData);
};
*/