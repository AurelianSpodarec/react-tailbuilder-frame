import { getActiveContentJSON } from "../store/features/frameInfo/frameInfoSelectors";

const helperJSON = {
    findParentObjectWithValue(obj, targetValue, parent = null, parentKey = null) {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const result:any = this.findParentObjectWithValue(obj[key], targetValue, obj, key);
                if (result !== undefined) {
                    return result;
                }
            } else if (obj[key] === targetValue) {
                return parent;
            }
        }
    },
    updateClass() {
        const reduxActiveContent = getActiveContentJSON()
        // Get activeJSON
        // Add bg-red-500
    }
}

export default helperJSON;
