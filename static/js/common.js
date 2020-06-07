/**
 * Created by wq on 2020/6/7.
 */

// 设置table标题居中
function tableHeader({row, column, rowIndex, columnIndex}) {
    return 'background:#F0F2F5;color:#111;padding:10px 0;font-size:14px;font-weight:600'
}

function transformTime(time){
    let dateee = new Date(time).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}
