import { test, expect } from '@playwright/test';
import path from 'path';
import { Page } from '@playwright/test';

test.beforeEach('Login', async ({ page,isMobile }) => {
  // Go to the home page
  await page.goto('https://vizzainsurance.com/home');
  // Click on the Policy Login link
  await page.getByRole('link', { name: 'Policy Login' }).click();
  // Enter the User Name
  await page.getByRole('textbox', { name: 'User Name' }).type('6382228561');
  // Enter the Password
  await page.getByRole('textbox', { name: 'Password' }).type('Sakthi@1602');
  // Verify the User Name value
  await expect(page.getByRole('textbox', { name: 'User Name' })).toHaveValue('6382228561');
  // Verify the Password value
  await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('Sakthi@1602');
  // Click on the Login button
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  // Hover over the Online Insurance link
  await page.getByRole('link', { name: 'Online Insurance' }).hover();
  // Click on the Online Insurance link
  await page.getByRole('link', { name: 'Online Insurance' }).click();
  // Click on the Health Insurance link
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  // Verify the Health Insurance heading is visible
  await expect(page.getByRole('heading', { name: 'vizza-Health-Insurance Health' })).toBeVisible();     });

export const FormHelper = {
  async fillFormAndUploadFiles(page: Page) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    await page.locator('#mat-input-79').type(formattedDate);
    await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
    const radio100 = page.locator('#mat-radio-100').getByText('No');
    const radio52 = page.locator('#mat-radio-52').getByText('No');
    const radio64 =  page.locator('#mat-radio-64').getByText('No');
    // Label: Check if the radio button #mat-radio-100 is visible
    if (await radio100.isVisible()) {
      await radio100.click();
    } 
    // Label: Check if the radio button #mat-radio-52 is visible
    else if (await radio52.isVisible()) {
      await radio52.click();
    } 
    // Label: Check if the radio button #mat-radio-64 is visible
    else if (await radio64.isVisible()) {
      await radio64.click();
    } 
    // Label: Throw an error if none of the radio buttons are visible
    else {
      throw new Error('Neither #mat-radio-100 nor #mat-radio-52 radio button is visible');
    }
    await page.getByRole('textbox', { name: 'PAN Number' }).fill('gjkpm0846p');
    await page.getByRole('button', { name: 'Submit' }).click();
    const imagePath = path.join(__dirname, '../assets/Arunkumar.jpg');
    for (let i = 0; i < 3; i++) {const fileInput = page.locator('input[type="file"]').nth(i);
      await fileInput.setInputFiles(imagePath);await page.waitForTimeout(2000);}
    const checkbox = page.locator('#mat-checkbox-25');
    // Label: Check if the checkbox #mat-checkbox-25 is visible
    if (await checkbox.isVisible()) {
      await checkbox.scrollIntoViewIfNeeded();
      await checkbox.click();
    } 
    // Label: Throw an error if the checkbox is not visible
    else {
      throw new Error('Checkbox #mat-checkbox-25 not visible for interaction');
    }
    await page.locator('span.mat-button-wrapper:has-text("Submit")').click();      },};

export const Acceptaccess = async (page: Page) => 
  // Label: Check if the "Ok" button is visible
  {if (await page.getByRole('button', { name: 'Ok' }).isVisible()) {
      await page.getByRole('button', { name: 'Ok' }).click();
    } 
    // Label: Click the "₹ 13280/Yr" button if "Ok" button is not visible
    else {
      await page.getByRole('button', { name: '₹ 13280/Yr' }).click();
    }
  }

test.describe('Summary Flow', () => {
test.afterEach('Summary', async ({ page,isMobile }) => {
  const ReviewLinkButton = page.getByRole('button', { name: 'Review Link' });
  // Label: Check if the "Review Link" button is visible on mobile
  if (isMobile) {
    await ReviewLinkButton.scrollIntoViewIfNeeded();
  }
  await ReviewLinkButton.click();
  await page.waitForTimeout(2000);
  const payButton = page.getByRole('button', { name: 'Pay by Customer' });
  // Label: Check if the "Pay by Customer" button is visible on mobile
  if (isMobile) {
    await payButton.scrollIntoViewIfNeeded();
  }
  await payButton.click();
});

test('Comprehensive', async ({ page, isMobile }) => {

    if (isMobile) {await page.waitForTimeout(4000);
      await page.getByRole('button').filter({ hasText: 'menu' }).click();
      await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
      await page.waitForTimeout(5000);
      await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
      await page.getByRole('textbox', { name: 'Name' }).type('Star');
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('#mat-input-25').type('25');
      await page.locator('#mat-input-27').type('25');
      await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.waitForTimeout(5000);
      await page.getByRole('button', { name: '₹ 13280/Yr' }).click();
      await Acceptaccess(page);}
      else {await page.waitForTimeout(2000);
      await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
      await page.waitForTimeout(1000);
      await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
      await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
      await page.waitForTimeout(5000);
      await page.getByRole('textbox', { name: 'Name' }).type('Star');
      await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
      await page.getByRole('textbox', { name: 'Mobile Number' }).click();
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('#mat-input-45').type('25');
      await page.locator('#mat-input-47').type('25');
      await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: '₹ 13280/Yr' }).click();
      await Acceptaccess(page);}
      if (isMobile) { await page.evaluate(() => window.scrollTo(0, 0)); }
    await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
    await page.getByText('Mr', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).type('Comprehensive');
    await page.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
    await page.getByText('PROFESSIONAL-ENGINEER').click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
    await page.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Comprehensive');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
    await page.waitForTimeout(2000);
    await page.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
    await page.getByText('Chennai').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
    await page.getByText('Perambur Barracks').click();
    await FormHelper.fillFormAndUploadFiles(page);
    await page.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
    await page.waitForTimeout(2000);
    await page.locator('#mat-radio-30').getByText('Yes').click();
    await page.waitForTimeout(4000);
    await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Name', exact: true }).type('Test SC');
    await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
    await page.getByRole('option', { name: 'Female' }).locator('span').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).type('160');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('60');
    await page.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
    await page.getByText('Housewives').click();
    await page.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
    await page.getByText('SPOUSE', { exact: true }).click();
    await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-108').fill('Nominee');
    await page.locator('#mat-input-109').fill('25');
    await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
    await page.getByText('Sister').click();
    await page.locator('#mat-input-110').fill('100');
    await page.waitForTimeout(1000);
    await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();        }); 
    test.setTimeout(90000);

test('Assure', async ({ page, isMobile }) => {
  
  if (isMobile) { await page.waitForTimeout(2000);
    await page.getByRole('button').filter({ hasText: 'menu' }).click();
    await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page.waitForTimeout(4000);
    await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Name' }).type('Star');
    await page.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-25').type('25');
    await page.locator('#mat-input-27').type('25');
    await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('button', { name: '₹12930 /Yr' }).click();
    await Acceptaccess(page);}
    else {await page.waitForTimeout(2000); 
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page.waitForTimeout(1000);
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'Name' }).type('Star');
    await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-45').type('25');
    await page.locator('#mat-input-47').type('25');
    await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('button', { name: '₹ 12930/Yr' }).click();
    await Acceptaccess(page);}
    if (isMobile) {await page.evaluate(() => window.scrollTo(0, 0)); }
    await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
    await page.getByText('Mr', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).type('Assure');
    await page.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
    await page.getByText('PROFESSIONAL-ENGINEER').click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
    await page.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Assure');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
    await page.waitForTimeout(2000);
    await page.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
    await page.getByText('Chennai').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
    await page.getByText('Perambur Barracks').click();
    await FormHelper.fillFormAndUploadFiles(page);
    await page.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
    await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Name', exact: true }).type('Test SC');
    await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
    await page.getByRole('option', { name: 'Female' }).locator('span').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).type('160');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('60');
    await page.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
    await page.getByText('Housewives').click();
    await page.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
    await page.getByText('SPOUSE', { exact: true }).click();
    await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-108').fill('Nominee');
    await page.locator('#mat-input-109').fill('25');
    await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
    await page.getByText('Sister').click();
    await page.locator('#mat-input-110').fill('100');
    await page.waitForTimeout(2000);
    await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();        }); 
    test.setTimeout(90000);

test('Womens Care', async ({ page, isMobile }) => {
  
  if (isMobile) { await page.waitForTimeout(2000);
    await page.getByRole('button').filter({ hasText: 'menu' }).click();
    await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page.waitForTimeout(4000);
    await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Name' }).type('Star');
    await page.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-25').type('25');
    await page.locator('#mat-input-27').type('25');
    await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('button', { name: '₹14904 /Yr' }).click();
    await Acceptaccess(page);}
    else {await page.waitForTimeout(2000); 
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page.waitForTimeout(1000);
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Name' }).type('Star');
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-45').type('25');
    await page.locator('#mat-input-47').type('25');
    await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('button', { name: '₹ 14904/Yr' }).click();
    await Acceptaccess(page);}
    if (isMobile) {await page.evaluate(() => window.scrollTo(0, 0)); }
    await page.waitForTimeout(5000);
    await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
    await page.getByText('Mr', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).type('WomensCare');
    await page.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
    await page.getByText('PROFESSIONAL-ENGINEER').click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
    await page.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Assure');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
    await page.waitForTimeout(2000);
    await page.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
    await page.getByText('Chennai').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
    await page.getByText('Perambur Barracks').click();
    await FormHelper.fillFormAndUploadFiles(page);
    await page.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Name', exact: true }).type('Test SW');
    await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
    await page.getByText('Female').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).fill('160');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).fill('60');
    await page.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
    await page.getByText('Housewives').click();
    await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
    await page.getByText('SPOUSE', { exact: true }).click();
    await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-108').fill('Nominee');
    await page.locator('#mat-input-109').fill('25');
    await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
    await page.getByText('Brother', { exact: true }).click();
    await page.locator('#mat-input-110').fill('100');
    await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();    });
    test.setTimeout(90000);

      });

      export const DocumentUploadHelper = {
        async uploadIdentityAndAddressProof(page: Page, isMobile: boolean) {
          await page.getByText('Other', { exact: true }).click();
          await page.getByLabel('Identity Proof Type').getByText('Identity Proof Type').click();
          await page.getByText('PAN', { exact: true }).click();
          await page.getByText('Address Proof TypeAddress').click();
          await page.getByText('Voter ID').click();
      
          const uploadFile = path.join(__dirname, '../assets/Arunkumar.jpg');
                for (let i = 0; i < 2; i++) {
            const fileInput = await page.locator('input[type="file"]').nth(i);
            await fileInput.setInputFiles(uploadFile);
            await page.waitForTimeout(isMobile ? 2000 : 1000);
          }const submitButton = page.getByRole('button', { name: 'Submit' });
          await submitButton.click();}};

 test.describe('Payment Flow Care', () => {
        test.afterEach(async ({ page, isMobile }) => {
          const copyLinkButton = page.getByRole('button', { name: 'Copy Link' });
          if (isMobile) await copyLinkButton.scrollIntoViewIfNeeded();
          await copyLinkButton.click();
      
          const payButton = page.getByRole('button', { name: 'Pay by Customer' });
          if (isMobile) await payButton.scrollIntoViewIfNeeded();
          await payButton.click();
        });
test ('Care Supreme Floater', async ({ page, isMobile }) => {

      if (isMobile) {await page.waitForTimeout(2000);
        await page.getByRole('button').filter({ hasText: 'menu' }).click();
        await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
        await page.waitForTimeout(2000);
      await page.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
      await page.getByRole('textbox', { name: 'Name' }).fill('Care');
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('#mat-input-25').type('25');
      await page.locator('#mat-input-27').type('25');
      await page.getByRole('textbox', { name: 'PIN CODE' }).fill('600012');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: '₹9838 /Yr' }).click();
      } else {await page.waitForTimeout(5000); 
        await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
        await page.waitForTimeout(1000);
        await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
        await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
      await page.waitForTimeout(3000);
      await page.getByRole('textbox', { name: 'Name' }).fill('Care');
      await page.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('#mat-input-45').type('25');
      await page.locator('#mat-input-47').type('25');
      await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: '₹ 9838/Yr' }).click();
      await Acceptaccess(page); }
      await page.waitForTimeout(2000);
      await DocumentUploadHelper.uploadIdentityAndAddressProof(page, isMobile);
      await page.locator('#mat-select-value-35').getByText('Title').click();
      await page.getByText('Mr', { exact: true }).click();
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').type('test');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('s');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('08062002');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
      await page.locator('#mat-input-60').fill('34');
      await page.locator('#mat-input-61').fill('anna nagar ');
      await page.locator('#mat-input-62').fill('627005');
      await page.waitForTimeout(1000);
      await page.locator('#mat-select-value-27').getByText('City').click();
      await page.waitForTimeout(2000);
      await page.getByText('Palayamkottai').click();
      await page.locator('.mat-checkbox-inner-container').first().click();
      await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
      await page.getByRole('strong').click();
      await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
      await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
      await page.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
      await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
      await page.getByText('Ms', { exact: true }).click();
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('test');
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('w');
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('08062001');
      await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
      await page.getByText('SPOUSE', { exact: true }).click();
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
      await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
      await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
      await page.locator('#cdk-accordion-child-27').getByRole('button', { name: 'Next' }).click();
      await page.locator('#cdk-accordion-child-21').getByRole('button', { name: 'Next' }).click();
      await page.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
      await page.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
      await page.getByText('MOTHER', { exact: true }).click();
      await page.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
      await page.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
      await page.locator('#cdk-accordion-child-22').getByRole('button', { name: 'Next' }).click();    });
      test.setTimeout(90000); 

test('Care Supreme Floater 2A + 2C', async ({ page, isMobile }) => {
      if (isMobile) {await page.waitForTimeout(2000);
        await page.getByRole('button').filter({ hasText: 'menu' }).click();
        await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
        await page.waitForTimeout(2000);
      await page.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
      await page.getByRole('textbox', { name: 'Name' }).fill('Care Test');
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('#mat-input-25').type('40');
      // Label: Fill the age fields for proposer and insured
      await page.locator('#mat-input-27').type('40');
      await page.locator('#mat-input-29').type('15');
      await page.locator('#mat-input-31').type('10');
      await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByRole('button', { name: '₹16235 /Yr' }).click();    
      } else {
      // Label: Handle desktop flow for filling proposer and insured details
      await page.waitForTimeout(2000); 
      await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
      await page.waitForTimeout(1000);
      await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
      await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
      await page.waitForTimeout(3000);
      await page.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
      await page.getByRole('textbox', { name: 'Name' }).fill('Care Test');
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.locator('#mat-input-45').fill('40');
      await page.locator('#mat-input-47').fill('40');
      await page.locator('#mat-input-49').fill('15');
      await page.locator('#mat-input-51').fill('10');
      await page.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: '₹ 16235/Yr' }).click();
      await Acceptaccess(page);  }
      await page.waitForTimeout(2000);
      await DocumentUploadHelper.uploadIdentityAndAddressProof(page, isMobile);
      await page.locator('#mat-select-value-35').getByText('Title').click();
      await page.getByText('Mr', { exact: true }).click();
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Supreme FF');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('test@gmail.com');
      await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913067');
      await page.locator('#mat-input-60').fill('3');
      await page.locator('#mat-input-61').fill('4');
      await page.locator('#mat-input-62').fill('600010');
      await page.waitForTimeout(1000);
      await page.locator('#mat-select-value-27').getByText('City').click();
      await page.waitForTimeout(2000);
      await page.getByText('Chennai').click();
      const checkbox = page.locator('.mat-checkbox-inner-container').first();
      if (isMobile) await checkbox.scrollIntoViewIfNeeded();
      await page.locator('.mat-checkbox-inner-container').first().click();
      await page.waitForTimeout(2000);
      await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
      await page.getByRole('strong').click();
      await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
      await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
      await page.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
      await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
      await page.getByText('Ms', { exact: true }).click();
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('Care');
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('Spouse');
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121985');
      await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
      await page.getByText('SPOUSE', { exact: true }).click();
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('freedela@gmail.com');
      await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
      await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
      await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
      await page.getByRole('button', { name: 'SON DETAILS' }).click();
      await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
      await page.getByRole('option', { name: 'Mr' }).locator('span').click();
      await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('First Name *').fill('Care');
      await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('Last Name *').fill('Son');
      await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122010');
      await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
      await page.getByText('SON', { exact: true }).click();
      await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
      await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
      await page.getByRole('button', { name: 'DAUGHTER DETAILS' }).click();
      await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
      await page.getByRole('option', { name: 'Ms' }).locator('span').click();
      await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('First Name *').fill('Care');
      await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('Last Name *').fill('Daughter');
      await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122015');
      await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
      await page.getByText('DAUGHTER', { exact: true }).click();
      await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
      await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
      await page.locator('#cdk-accordion-child-29').getByRole('button', { name: 'Next' }).click();
      await page.locator('#cdk-accordion-child-21').getByRole('button', { name: 'Next' }).click();
      await page.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
      await page.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
      await page.getByText('MOTHER', { exact: true }).click();
      await page.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
      await page.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
      await page.locator('#cdk-accordion-child-22').getByRole('button', { name: 'Next' }).click();    });
      test.setTimeout(90000);

      test('Care Individual', async ({ page, isMobile }) => {

        if (isMobile) {
          await page.waitForTimeout(4000);
          await page.getByRole('button').filter({ hasText: 'menu' }).click();
          await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
          await page.waitForTimeout(5000);
          await page.getByRole('textbox', { name: 'Email' }).type('Care@gmail.com');
          await page.getByRole('textbox', { name: 'Name' }).type('Care');
        await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('#mat-input-25').type('25');
        await page.getByRole('textbox', { name: 'PIN CODE' }).fill('600012');
        await page.getByRole('button', { name: 'Proceed' }).click();
        await page.getByRole('button', { name: '₹7552 /Yr' }).click();
        } else {await page.waitForTimeout(2000); 
          await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
          await page.waitForTimeout(1000);
          await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
          await page.waitForTimeout(2000);
          await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
        await page.waitForTimeout(7000);
        await page.getByRole('textbox', { name: 'Email' }).type('Care@gmail.com');
        await page.getByRole('textbox', { name: 'Name' }).type('Care Test');
        await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('#mat-input-45').type('25');
        await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
        await page.getByRole('button', { name: 'Proceed' }).click();
        await page.getByRole('button', { name: '₹ 7552/Yr' }).click();
        await Acceptaccess(page);
        }if (isMobile) {
          await page.evaluate(() => window.scrollTo(0, 0)); 
        }
       await DocumentUploadHelper.uploadIdentityAndAddressProof(page, isMobile);
       await page.locator('#mat-select-value-35').getByText('Title').click();
       await page.getByText('Mr', { exact: true }).click();
        await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
        await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Individual');
        await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('08062002');
        await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
        await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
        await page.locator('#mat-input-60').fill('34');
        await page.locator('#mat-input-61').fill('anna nagar ');
        await page.locator('#mat-input-62').fill('627005');
        await page.waitForTimeout(1000);
        await page.locator('#mat-select-value-27').getByText('City').click();
        await page.waitForTimeout(1000);
        await page.getByText('Palayamkottai').click();
        const checkbox = page.locator('.mat-checkbox-inner-container').first();
        if (isMobile) await checkbox.scrollIntoViewIfNeeded();
        await checkbox.click();
        await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
        await page.getByRole('strong').click();
        await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
        await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
        await page.locator('span.mat-button-wrapper:has-text("Next")').nth(1).click();
        await page.locator('span.mat-button-wrapper:has-text("Next")').nth(2).click();
        await page.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
        await page.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
        await page.getByText('MOTHER', { exact: true }).click();
        await page.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
        await page.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
        await page.locator('#cdk-accordion-child-22').getByRole('button', { name: 'Next' }).click();    });
        test.setTimeout(90000);
    });
