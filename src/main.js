import github from "./images/github.png";
import stackOverflow from "./images/StackOverflow.png";
import vue from "./images/Vue.png";
import react from "./images/React.png";
import jquery from "./images/jquery.png";
import node from "./images/node.png";
import uniapp from "./images/Uniapp.png";
import juejin from "./images/juejin.png";
import nowcoder from "./images/nowcoder.png";
import website from "./images/Website.png";
import close from "./images/close.png";

const $siteList = $(".siteList");
const $lastLi = $siteList.find("li.last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x); // 把字符串变成对象

// 用户第一次使用时，xObject为null，设置初始值；不是第一次使用就保存为xObject的值
const defaultEntries = [
  { logo: github, url: "https://github.com/" },
  { logo: stackOverflow, url: "https://stackoverflow.com/" },
  { logo: vue, url: "https://vuejs.org/index.html" },
  { logo: react, url: "https://reactjs.org/" },
  { logo: jquery, url: "https://jquery.com/" },
  { logo: node, url: "https://nodejs.org/zh-cn/" },
  { logo: uniapp, url: "https://uniapp.dcloud.io/" },
  { logo: juejin, url: "https://juejin.cn/" },
  { logo: nowcoder, url: "https://nowcoder.com/" },
];
const hashMap = xObject || defaultEntries;

const getSiteName = (url) => {
  let siteName = url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "");
  return siteName.slice(0, siteName.indexOf("."));
};

const render = () => {
  $siteList.find("li:not(.last)").remove();
  hashMap.forEach((node, index) => {
    const $li = $(`
      <li>
        <div class="site">
            <div class="logo">
              <img src="${node.logo}" alt="" />
            </div>
            <div class="text">${getSiteName(node.url)}</div>
            <div class="close">
              <img src="${close}" alt="" />
            </div>
        </div>
      </li>`).insertBefore($lastLi);

    // 不在li中用a标签跳转，因为点击关闭图标会冒泡，且用e.stopPropagation()无法取消冒泡，仍会跳转
    $li.on("click", () => {
      window.open(node.url);
    });

    $li.on("click", ".close", (e) => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render(); // 重新加载
    });
  });
};

render(); // 把原先已经添加好的加载进来

$(".addButton").on("click", () => {
  let url = window.prompt("请输入您要添加的网址：");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  hashMap.push({
    // 新增网址
    logo: website,
    url: url,
  });

  render(); // 先删除原先已经加载的，重新加载所有标签，以及新增的标签
});

// 用户关闭页面（刷新）之前把hashMap存下来
window.onbeforeunload = () => {
  console.log("页面要关闭了");
  // localStorage只能存字符串，不能存对象
  const string = JSON.stringify(hashMap); // 把对象变成字符串
  localStorage.setItem("x", string); // 在本地存储里设置一个x，其值为string
  // localStorage.clear(); // 清楚新增标签
};
