import { test } from "@playwright/test";

test("ICC Cricket Female Rankings", async ({ page }) => {

    await page.goto("https://www.icc-cricket.com/rankings");
    await page.locator('//a[@class="category-nav pt-2 pb-1 border-b-[3px] border-transparent " and @data-id="205823dd-d493-4ffe-b80c-0309744af3e0"]').click();

    const player = page.locator('//span[text()="Alana"]/following-sibling::span[text()="King"]/parent::span');
    const position = page.locator('(//span[text()="Alana"]/ancestor::tr//span[contains(@class,"font-extrabold")])[1]');

    console.log("Player:", await player.textContent());
    console.log("Position:", await position.textContent());

    await page.screenshot({ path: "./screenshots/femaleplayer.png" });

});