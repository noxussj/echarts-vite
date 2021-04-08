import dfsDeepCopy from './dfs-deep-copy.js';
import assign from './object-assign.js';

class EchartsExtens {
    constructor() {}

    /**
     * 模式检测
     */
    modeCheck(FirstOBJ, SecondOBJ) {
        if (FirstOBJ.baseOption && !SecondOBJ.baseOption) {
            console.error('提示', 'option两者格式不符合');
        }

        if (!FirstOBJ.baseOption && SecondOBJ.baseOption) {
            console.error('提示', 'option两者格式不符合');
        }

        if (FirstOBJ.options && !SecondOBJ.options) {
            console.error('提示', 'option两者格式不符合');
        }

        if (!FirstOBJ.options && SecondOBJ.options) {
            console.error('提示', 'option两者格式不符合');
        }
    }

    _extens(FirstOBJ, SecondOBJ) {
        let filterKeys = ['data', 'radius', 'center', 'color']; // 过滤keys

        let newOBJ = dfsDeepCopy(SecondOBJ);

        assign(newOBJ, FirstOBJ, filterKeys); // 会直接改变第一项

        return newOBJ;
    }

    /**
     * 继承
     */
    extens(FirstOBJ, SecondOBJ) {
        this.modeCheck(FirstOBJ, SecondOBJ);

        let option = this._extens(FirstOBJ, SecondOBJ);

        return option;
    }
}

export default EchartsExtens;
