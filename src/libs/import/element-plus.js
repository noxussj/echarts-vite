import { ElTooltip } from 'element-plus';
import 'element-plus/lib/theme-chalk/el-tooltip.css';
import 'element-plus/lib/theme-chalk/el-popper.css';

export default (app) => {
    app.use(ElTooltip);
};
