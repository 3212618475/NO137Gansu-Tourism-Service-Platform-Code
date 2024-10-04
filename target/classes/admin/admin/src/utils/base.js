const base = {
    get() {
        return {
            url : "http://localhost:8080/lvyoufuwu/",
            name: "lvyoufuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lvyoufuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "甘肃旅游服务平台"
        } 
    }
}
export default base
