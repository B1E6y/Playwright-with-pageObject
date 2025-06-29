import { test, expect } from '../fixtures/mainPage';
import { MainPage } from '../models/mainPage';


test.describe('Tests of main page', () => {


test('Проверка отображения элементов навигации хэдера', async ({ mainPage }) => {
  await mainPage.checkElementsVisability();
});

test('Проверка названия элементов навигации хедера', async ({ mainPage }) => {
  await mainPage.checkElementsText();
});

test('Should to check correct value of attribute', async ({ mainPage }) => {
 await mainPage.checkElementsHrefAttribute();
 });

test('Should to check switch light mode button', async ({ mainPage }) => {
  await test.step('Switch light mode', async () => {
     await mainPage.clickSwitchLightModeIcon();
   });
  await test.step('Check switch attribute value', async () => {
     await mainPage.checkDataThemeAttributeValue();
   });
});

test(`Should check light mode style`, async ({ mainPage }) => {
  await test.step('Set Light-Mode', async () => {
     await mainPage.setLightMode();
   });
  await test.step('Check layout with light mode', async () => {
     await mainPage.checkLayoutWithLIghtMode();
   });
})

test(`Should check dark mode style`, async ({ mainPage }) => {
  await test.step('Set dark mode', async () => {
     await mainPage.setDarkMode();
   });
  await test.step('Check layout with dark mode', async () => {
     await mainPage.checkLayoutWithDarkMode();
   });
})

})