const puppteer = require('puppeteer');
const reallineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor!');


async function robot() {
  const browser = await puppteer.launch({ headless: true });
  const page = await browser.newPage();

  const baseCoin = reallineSync.question('Informe a moeda base: ') || 'dolar';
  const finalCoin = reallineSync.question('Informe a moeda desejada: ') || 'real';
  console.log('Aguarde...');
  const url = `https://www.google.com/search?q=dolar+para+real&oq=${baseCoin}+para+${finalCoin}&aqs=chrome..69i57j0l7.2118j1j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  // await page.screenshot({ path: 'example.png' });
  const result = await page.evaluate(() => (document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value));

  console.log(`O valor de 1 ${baseCoin} em ${finalCoin} é ${result}`);

  await browser.close();
};

robot();