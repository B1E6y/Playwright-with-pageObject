import { test } from '@playwright/test';
import { MainPage } from '../models/mainPage';

let mainPage: MainPage;

test.describe('Tests of main page', () => {
test.beforeEach(async ({ page }) => {
mainPage = new MainPage(page);
await mainPage.openMainPage();
})

test('Проверка отображения элементов навигации хэдера', async () => {
  await mainPage.checkElementsVisability();
});

test('Проверка названия элементов навигации хедера', async () => {
  await mainPage.checkElementsText();
});

test('Should to check correct value of attribute', async () => {
 await mainPage.checkElementsHrefAttribute();
 });

test('Should to check switch light mode button', async () => {
  await test.step('Switch light mode', async () => {
     await mainPage.clickSwitchLightModeIcon();
   });
  await test.step('Check switch attribute value', async () => {
     await mainPage.checkDataThemeAttributeValue();
   });
});

test(`Should check light mode style`, async () => {
  await test.step('Set Light-Mode', async () => {
     await mainPage.setLightMode();
   });
  await test.step('Check layout with light mode', async () => {
     await mainPage.checkLayoutWithLIghtMode();
   });
})

test(`Should check dark mode style`, async () => {
  await test.step('Set dark mode', async () => {
     await mainPage.setDarkMode();
   });
  await test.step('Check layout with dark mode', async () => {
     await mainPage.checkLayoutWithDarkMode();
   });
})

})