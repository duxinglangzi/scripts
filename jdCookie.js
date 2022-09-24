/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJjIAZLADC1B6Ph1bXGWq78LnikrfaTl4wfzOo9Z2J9me07oUAv4y8tgBRCt412iqckvFUEaQI; pt_pin=%E5%BE%85%E5%AE%9A%E4%B8%B6%E4%BA%BA%E7%94%9F;',// 琼
  'pt_key=AAJjAyeRADBNQzRcBOKvlSiH_BV4FU9bbM7fwDdlD8YXK6ax3TgZE5Z2R6wzu5lAB5StSJ-gzsw; pt_pin=jd_lFFplVfkyxgi;',//顺溜
  'pt_key=AAJjIAwHADCZLlALk1BE5zsSYYBasFMWabmbmLolLWzcPd-Hei4XZ0mw81BeZYJm929-Koiy908; pt_pin=mengxiangh_mie;', //祥辉
  'pt_key=AAJjIA2OADCjDWaYs11juFP-hG-HxFn0HsfvstZJltP_0V-qIIliClmM6zDsDf9CmUmPzr7jsFs; pt_pin=jd_72c7eb401125a;',//丁凡
  'pt_key=AAJjDzbUADDe_y3atn40tFd5cnCsOcecNzWX-2oK1Ng_IZGrcDXJczhOQxdVRXBcEMf3wdL0W8E; pt_pin=jd_6bb7ba0d71e0e;',  // 吴海波
  'pt_key=AAJjIVdtADBSh7e2tyQVFxayVH2CcFAB-6VaY6qTQm_1DaqsEv0kmcZiHVc1MzHctwQuO-Kn924; pt_pin=jd_586d14b173aff;',  // 耿伟
  'pt_key=AAJjKUq2ADBllEGrnEEdBlHUJ5LAMxeDXaUEauvfNVqsLK52-FvsjA5pkW0Eo4n46xFoc-vTVHM; pt_pin=voryn;',  // 樊波
  'pt_key=AAJjD0YKAECp19iA_pV-syuNj8aKnYjSHZ7VHtOgjunsT8SWaO34Zti3U0SFv0F2VgFHFUw12dqhVyRHdHIb7nGvNWGGdfIQ; pt_pin=%E6%88%91%E5%8F%AA%E5%96%9C%E6%AC%A2%E5%B0%8F%E5%86%AC%E5%86%AC;',  // 康硕
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
/*
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
   // await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
   // await process.exit(0);
  })()
}
*/
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
