import { test, expect } from '@playwright/test';
import path from 'path';
import { Page } from '@playwright/test';

test.beforeEach('Login', async ({ page, isMobile }) => {
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
  await page.waitForTimeout(3000);
  // Hover over the Online Insurance link
  await page.getByRole('link', { name: 'Online Insurance' }).hover();
  // // Click on the Online Insurance link
  await page.getByRole('link', { name: 'Online Insurance' }).click();
  // // Click on the Health Insurance link
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  // // Verify the Health Insurance heading is visible
  await expect(page.getByRole('heading', { name: 'vizza-Health-Insurance Health' })).toBeVisible();
});

export const FormHelper = {
  async fillFormAndUploadFiles(page: Page) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
if (await page.locator('#mat-input-53').isVisible()) {
    await page.locator('#mat-input-53').type(formattedDate);
} else if (await page.locator('#mat-input-83').isVisible()) {
    await page.locator('#mat-input-83').type(formattedDate);
} else {
    console.log('No target input is visible');
}    await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
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

    else {
      throw new Error('Neither #mat-radio-100 nor #mat-radio-52 radio button is visible');
    }
    await page.getByRole('textbox', { name: 'PAN Number' }).fill('gjkpm0846p');
    await page.getByRole('button', { name: 'Submit' }).click();
    const imagePath = path.join(__dirname, '../assets/Arunkumar.jpg');
    for (let i = 0; i < 3; i++) {const fileInput = page.locator('input[type="file"]').nth(i);
      await fileInput.setInputFiles(imagePath);await page.waitForTimeout(2000);}
    const checkbox = page.locator('#mat-checkbox-17');
    const checkbox2 = page.locator('#mat-checkbox-25');
    // Label: Check if the checkbox #mat-checkbox-25 is visible
    if (await checkbox.isVisible()) {
      await checkbox.scrollIntoViewIfNeeded();
      await checkbox.click();
    } 
    else if (await checkbox2.isVisible()) {
      await checkbox2.scrollIntoViewIfNeeded();
      await checkbox2.click();
    }
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

test.describe.parallel('Summary Flow', () => {
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

test('Comprehensive', async ({ page :page1, isMobile }) => {

    if (isMobile) {await page1.waitForTimeout(4000);
      await page1.getByRole('button').filter({ hasText: 'menu' }).click();
      await page1.locator('a').filter({ hasText: 'Health Insurance' }).click();
      await page1.waitForTimeout(5000);
      await page1.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
      await page1.getByRole('textbox', { name: 'First Name' }).type('Star');
      await page1.getByRole('textbox', { name: 'Last Name' }).type('Com');
      await page1.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page1.getByRole('button', { name: 'Next' }).click();
      await page1.locator('#mat-input-25').type('25');
      await page1.locator('#mat-input-27').type('25');
      await page1.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
      await page1.getByRole('button', { name: 'Proceed' }).click();
      await page1.waitForTimeout(5000);
      await page1.getByRole('button', { name: '₹ 13280/Yr' }).click();
      await Acceptaccess(page1);
    } else {
      await page1.waitForTimeout(5000);
      await page1.getByRole('textbox', { name: 'First Name' }).type('Star');
      await page1.getByRole('textbox', { name: 'Last Name' }).type('Com');
      await page1.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
      await page1.getByRole('textbox', { name: 'Mobile Number' }).click();
      await page1.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
      await page1.getByRole('button', { name: 'Next' }).click();
      await page1.locator('#mat-input-19').type('25');
      await page1.locator('#mat-input-21').type('25');
      await page1.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
      await page1.getByRole('button', { name: 'Proceed' }).click();
      await page1.getByRole('button', { name: '₹ 13280/Yr' }).click();
      await Acceptaccess(page1);}
      if (isMobile) { await page1.evaluate(() => window.scrollTo(0, 0)); }
    await page1.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
    await page1.getByText('Mr', { exact: true }).click();
    await page1.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
    await page1.getByText('PROFESSIONAL-ENGINEER').click();
    await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
    await page1.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
    await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
    await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Comprehensive');
    await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
    await page1.waitForTimeout(2000);
    await page1.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
    await page1.getByText('Chennai').click();
    await page1.waitForTimeout(2000);
    await page1.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
    await page1.getByText('Perambur Barracks').click();
    await FormHelper.fillFormAndUploadFiles(page1);
    await page1.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
    await page1.getByRole('textbox', { name: 'Height(cms)' }).type('170');
    await page1.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
    await page1.waitForTimeout(2000);
    await page1.locator('#mat-radio-30').getByText('Yes').click();
    await page1.waitForTimeout(4000);
    await page1.getByRole('button', { name: '2.INSURED DETAILS' }).click();
    await page1.waitForTimeout(2000);
    await page1.getByRole('textbox', { name: 'Name', exact: true }).type('Test SC');
    await page1.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page1.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
    await page1.getByRole('option', { name: 'Female' }).locator('span').click();
    await page1.getByRole('textbox', { name: 'Height(cms)' }).type('160');
    await page1.getByRole('textbox', { name: 'Weight(kgs)' }).type('60');
    await page1.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
    await page1.getByText('Housewives').click();
    await page1.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
    await page1.getByText('SPOUSE', { exact: true }).click();
    await page1.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
    await page1.locator('#mat-input-82').fill('Nominee');
    await page1.locator('#mat-input-83').fill('25');
    await page1.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
    await page1.getByText('Sister').click();
    await page1.locator('#mat-input-84').fill('100');
    await page1.waitForTimeout(1000);
    await page1.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();        }); 
    test.setTimeout(90000);

test('Assure', async ({ page :page2, isMobile }) => {
  
  if (isMobile) {
    await page2.waitForTimeout(2000);
    await page2.getByRole('button').filter({ hasText: 'menu' }).click();
    await page2.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page2.waitForTimeout(4000);
    await page2.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page2.getByRole('textbox', { name: 'First Name' }).type('Star');
    await page2.getByRole('textbox', { name: 'Last Name' }).type('Assure');    
    await page2.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page2.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.locator('#mat-input-25').type('25');
    await page2.locator('#mat-input-27').type('25');
    await page2.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await page2.getByRole('button', { name: '₹12930 /Yr' }).click();
    await Acceptaccess(page2);
} else {
    await page2.waitForTimeout(5000);
    await page2.getByRole('textbox', { name: 'First Name' }).type('Star');
    await page2.getByRole('textbox', { name: 'Last Name' }).type('Assure');  
    await page2.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page2.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page2.getByRole('button', { name: 'Next' }).click();
    await page2.locator('#mat-input-19').type('25');
    await page2.locator('#mat-input-21').type('25');
    await page2.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await page2.getByRole('button', { name: '₹ 12930/Yr' }).click();
    await Acceptaccess(page2);
}
if (isMobile) {
    await page2.evaluate(() => window.scrollTo(0, 0));
}
await page2.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
await page2.getByText('Mr', { exact: true }).click();
await page2.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
await page2.getByText('PROFESSIONAL-ENGINEER').click();
await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
await page2.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Assure');
await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
await page2.waitForTimeout(2000);
await page2.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
await page2.getByText('Chennai').click();
await page2.waitForTimeout(2000);
await page2.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
await page2.getByText('Perambur Barracks').click();
await FormHelper.fillFormAndUploadFiles(page2);
await page2.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
await page2.getByRole('textbox', { name: 'Height(cms)' }).type('170');
await page2.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
await page2.getByRole('button', { name: '2.INSURED DETAILS' }).click();
await page2.waitForTimeout(2000);
await page2.getByRole('textbox', { name: 'Name', exact: true }).type('Test SC');
await page2.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
await page2.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
await page2.getByRole('option', { name: 'Female' }).locator('span').click();
await page2.getByRole('textbox', { name: 'Height(cms)' }).type('160');
await page2.getByRole('textbox', { name: 'Weight(kgs)' }).type('60');
await page2.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
await page2.getByText('Housewives').click();
await page2.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
await page2.getByText('SPOUSE', { exact: true }).click();
await page2.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
await page2.locator('#mat-input-82').fill('Nominee');
await page2.locator('#mat-input-83').fill('25');
await page2.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
await page2.getByText('Sister').click();
await page2.locator('#mat-input-84').fill('100');
await page2.waitForTimeout(1000);
await page2.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();

test.setTimeout(90000);
});
test('Womens Care', async ({ page :page3, isMobile }) => {

  if (isMobile) { 
    await page3.waitForTimeout(2000);
    await page3.getByRole('button').filter({ hasText: 'menu' }).click();
    await page3.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page3.waitForTimeout(4000);
    await page3.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page3.getByRole('textbox', { name: 'First Name' }).type('Star');
    await page3.getByRole('textbox', { name: 'Last Name' }).type('WomensCare');
    await page3.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page3.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page3.getByRole('button', { name: 'Next' }).click();
    await page3.locator('#mat-input-25').type('25');
    await page3.locator('#mat-input-27').type('25');
    await page3.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page3.getByRole('button', { name: 'Proceed' }).click();
    await page3.getByRole('button', { name: '₹ 13847/Yr' }).click();
    await Acceptaccess(page3);
  } else {
    await page3.waitForTimeout(5000);
    await page3.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page3.getByRole('textbox', { name: 'First Name' }).type('Star');
    await page3.getByRole('textbox', { name: 'Last Name' }).type('WomensCare');
    await page3.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page3.getByRole('button', { name: 'Next' }).click();
    await page3.locator('#mat-input-19').type('25');
    await page3.locator('#mat-input-21').type('25');
    await page3.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page3.getByRole('button', { name: 'Proceed' }).click();
    await page3.getByRole('button', { name: '₹ 13847/Yr' }).click();
    await Acceptaccess(page3);
  }
  if (isMobile) {
    await page3.evaluate(() => window.scrollTo(0, 0));
  }
  await page3.waitForTimeout(5000);
  await page3.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page3.getByText('Mr', { exact: true }).click();
  await page3.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
  await page3.getByText('PROFESSIONAL-ENGINEER').click();
  await page3.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page3.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
  await page3.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
  await page3.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Comprehensive');
  await page3.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
  await page3.waitForTimeout(2000);
  await page3.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
  await page3.getByText('Chennai').click();
  await page3.waitForTimeout(2000);
  await page3.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
  await page3.getByText('Perambur Barracks').click();
  await FormHelper.fillFormAndUploadFiles(page3);
  await page3.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
  await page3.getByRole('textbox', { name: 'Height(cms)' }).type('170');
  await page3.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
  await page3.waitForTimeout(2000);
  await page3.getByRole('button', { name: '2.INSURED DETAILS' }).click();
  await page3.waitForTimeout(2000);
  await page3.getByRole('textbox', { name: 'Name', exact: true }).type('Test SW');
  await page3.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
  await page3.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
  await page3.getByText('Female').click();
  await page3.getByRole('textbox', { name: 'Height(cms)' }).fill('160');
  await page3.getByRole('textbox', { name: 'Weight(kgs)' }).fill('60');
  await page3.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
  await page3.getByText('Housewives').click();
  await page3.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
  await page3.getByText('SPOUSE', { exact: true }).click();
  await page3.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
  await page3.locator('#mat-input-82').fill('Nominee');
  await page3.locator('#mat-input-83').fill('25');
  await page3.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
  await page3.getByText('Brother', { exact: true }).click();
  await page3.locator('#mat-input-84').fill('100');
  await page3.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
});
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
    }
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
  },
};

test.describe.parallel('Payment Flow Care', () => {
        test.afterEach(async ({ page, isMobile }) => {
          const copyLinkButton = page.getByRole('button', { name: 'Copy Link' });
          if (isMobile) await copyLinkButton.scrollIntoViewIfNeeded();
          await copyLinkButton.click();
      
          const payButton = page.getByRole('button', { name: 'Pay by Customer' });
          if (isMobile) await payButton.scrollIntoViewIfNeeded();
          await payButton.click();
        });
        test('Care Supreme Floater', async ({ page : page4, isMobile }) => {

          if (isMobile) {
            await page4.waitForTimeout(2000);
            await page4.getByRole('button').filter({ hasText: 'menu' }).click();
            await page4.locator('a').filter({ hasText: 'Health Insurance' }).click();
            await page4.waitForTimeout(2000);
            await page4.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
            await page4.getByRole('textbox', { name: 'First Name' }).type('Care');
            await page4.getByRole('textbox', { name: 'Last Name' }).type('Supreme');
            await page4.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
            await page4.getByRole('button', { name: 'Next' }).click();
            await page4.locator('#mat-input-25').type('25');
            await page4.locator('#mat-input-27').type('25');
            await page4.getByRole('textbox', { name: 'PIN CODE' }).fill('600012');
            await page4.getByRole('button', { name: 'Proceed' }).click();
            await page4.getByRole('button', { name: '₹9838 /Yr' }).click();
          } else {
            await page4.waitForTimeout(5000);
            await page4.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
            await page4.waitForTimeout(1000);
            await page4.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
            await page4.getByRole('link', { name: 'Health Insurance', exact: true }).click();
            await page4.waitForTimeout(3000);
            await page4.getByRole('textbox', { name: 'First Name' }).type('Care');
            await page4.getByRole('textbox', { name: 'Last Name' }).type('Supreme'); 
            await page4.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
            await page4.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
            await page4.getByRole('button', { name: 'Next' }).click();
            await page4.locator('#mat-input-49').type('25');
            await page4.locator('#mat-input-51').type('25');
            await page4.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
            await page4.getByRole('button', { name: 'Proceed' }).click();
            await page4.getByRole('button', { name: '₹ 9838/Yr' }).click();
            await Acceptaccess(page4);
          }
        
          await page4.waitForTimeout(2000);
          await DocumentUploadHelper.uploadIdentityAndAddressProof(page4, isMobile);
          await page4.locator('#mat-select-value-35').getByText('Title').click();
          await page4.getByText('Mr', { exact: true }).click();
          await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').type('Care');
          await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('SupremeFloater');
          await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('08062002');
          await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
          await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
          await page4.locator('#mat-input-64').fill('34');
          await page4.locator('#mat-input-65').fill('anna nagar ');
          await page4.locator('#mat-input-66').fill('627005');
          await page4.waitForTimeout(1000);
          await page4.locator('#mat-select-value-27').getByText('City').click();
          await page4.waitForTimeout(2000);
          await page4.getByText('Palayamkottai').click();
          await page4.locator('.mat-checkbox-inner-container').first().click();
          await page4.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
          await page4.getByRole('strong').click();
          await page4.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
          await page4.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
          await page4.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
          await page4.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
          await page4.getByText('Ms', { exact: true }).click();
          await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('test');
          await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('w');
          await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('08062001');
          await page4.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
          await page4.getByText('SPOUSE', { exact: true }).click();
          await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
          await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
          await page4.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
          await page4.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
          await page4.locator('#cdk-accordion-child-27').getByRole('button', { name: 'Next' }).click();
          await page4.locator('#cdk-accordion-child-21').getByRole('button', { name: 'Next' }).click();
          await page4.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
          await page4.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
          await page4.getByText('MOTHER', { exact: true }).click();
          await page4.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
          await page4.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
          await page4.locator('#cdk-accordion-child-22').getByRole('button', { name: 'Next' }).click();
        
        });
        test.setTimeout(90000);

        test('Care Supreme Floater 2A + 2C', async ({ page: page5, isMobile }) => {
          if (isMobile) {
            await page5.waitForTimeout(2000);
            await page5.getByRole('button').filter({ hasText: 'menu' }).click();
            await page5.locator('a').filter({ hasText: 'Health Insurance' }).click();
            await page5.waitForTimeout(2000);
            await page5.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
            await page5.getByRole('textbox', { name: 'First Name' }).type('Care');
            await page5.getByRole('textbox', { name: 'Last Name' }).type('Supreme');
            await page5.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
            await page5.getByRole('button', { name: 'Next' }).click();
            await page5.locator('#mat-input-25').type('40');
            await page5.locator('#mat-input-27').type('40');
            await page5.locator('#mat-input-29').type('15');
            await page5.locator('#mat-input-31').type('10');
            await page5.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
            await page5.getByRole('button', { name: 'Proceed' }).click();
            await page5.getByRole('button', { name: '₹16235 /Yr' }).click();
          } else {
            await page5.waitForTimeout(2000);
            await page5.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
            await page5.waitForTimeout(1000);
            await page5.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
            await page5.getByRole('link', { name: 'Health Insurance', exact: true }).click();
            await page5.waitForTimeout(3000);
            await page5.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
            await page5.getByRole('textbox', { name: 'First Name' }).type('Care');
            await page5.getByRole('textbox', { name: 'Last Name' }).type('Supreme');
            await page5.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
            await page5.getByRole('button', { name: 'Next' }).click();
            await page5.locator('#mat-input-49').fill('40');
            await page5.locator('#mat-input-51').fill('40');
            await page5.locator('#mat-input-53').fill('15');
            await page5.locator('#mat-input-55').fill('10');
            await page5.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
            await page5.getByRole('button', { name: 'Proceed' }).click();
            await page5.waitForTimeout(2000);
            await page5.getByRole('button', { name: '₹ 16235/Yr' }).click();
            await Acceptaccess(page5);
          }
          await page5.waitForTimeout(2000);
          await DocumentUploadHelper.uploadIdentityAndAddressProof(page5, isMobile);
          await page5.locator('#mat-select-value-35').getByText('Title').click();
          await page5.getByText('Mr', { exact: true }).click();
          await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
          await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Supreme FF');
          await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
          await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('Care@gmail.com');
          await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913067');
          await page5.locator('#mat-input-64').fill('3');
          await page5.locator('#mat-input-65').fill('4');
          await page5.locator('#mat-input-66').fill('600010');
          await page5.waitForTimeout(1000);
          await page5.locator('#mat-select-value-27').getByText('City').click();
          await page5.waitForTimeout(2000);
          await page5.getByText('Chennai').click();
          const checkbox = page5.locator('.mat-checkbox-inner-container').first();
          if (isMobile) await checkbox.scrollIntoViewIfNeeded();
          await checkbox.click();
          await page5.waitForTimeout(2000);
          await page5.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
          await page5.getByRole('strong').click();
          await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
          await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
        
          // SPOUSE
          await page5.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
          await page5.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
          await page5.getByText('Ms', { exact: true }).click();
          await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('Care');
          await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('Spouse');
          await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121985');
          await page5.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
          await page5.getByText('SPOUSE', { exact: true }).click();
          await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('freedela@gmail.com');
          await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
          await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
          await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
        
          // SON
          await page5.getByRole('button', { name: 'SON DETAILS' }).click();
          await page5.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
          await page5.getByRole('option', { name: 'Mr' }).locator('span').click();
          await page5.getByRole('region', { name: 'SON DETAILS' }).getByLabel('First Name *').fill('Care');
          await page5.getByRole('region', { name: 'SON DETAILS' }).getByLabel('Last Name *').fill('Son');
          await page5.getByRole('region', { name: 'SON DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122010');
          await page5.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
          await page5.getByText('SON', { exact: true }).click();
          await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
          await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
        
          // DAUGHTER
          await page5.getByRole('button', { name: 'DAUGHTER DETAILS' }).click();
          await page5.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
          await page5.getByRole('option', { name: 'Ms' }).locator('span').click();
          await page5.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('First Name *').fill('Care');
          await page5.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('Last Name *').fill('Daughter');
          await page5.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122015');
          await page5.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
          await page5.getByText('DAUGHTER', { exact: true }).click();
          await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
          await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
        
          await page5.locator('#cdk-accordion-child-29').getByRole('button', { name: 'Next' }).click();
          await page5.locator('#cdk-accordion-child-21').getByRole('button', { name: 'Next' }).click();
          await page5.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
          await page5.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
          await page5.getByText('MOTHER', { exact: true }).click();
          await page5.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
          await page5.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
          await page5.locator('#cdk-accordion-child-22').getByRole('button', { name: 'Next' }).click();
        });
        test.setTimeout(90000);
        
   test ('Care Supreme ', async ({page : page6, isMobile }) => {
  if (isMobile) {
    await page6.waitForTimeout(2000);
    await page6.getByRole('button').filter({ hasText: 'menu' }).click();
    await page6.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page6.waitForTimeout(2000);
    await page6.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
    await page6.getByRole('textbox', { name: 'First Name' }).type('Care');
    await page6.getByRole('textbox', { name: 'Last Name' }).type('Supreme');  
    await page6.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page6.getByRole('button', { name: 'Next' }).click();
    await page6.locator('#mat-input-25').type('40');
    await page6.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
    await page6.getByRole('button', { name: 'Proceed' }).click();
    await page6.getByRole('button', { name: '₹ 8979/Yr' }).click();
  } else {
    await page6.waitForTimeout(2000); 
    await page6.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page6.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page6.waitForTimeout(3000);
    await page6.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
    await page6.getByRole('textbox', { name: 'First Name' }).type('Care');
    await page6.getByRole('textbox', { name: 'Last Name' }).type('Supreme');
    await page6.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page6.getByRole('button', { name: 'Next' }).click();
    await page6.locator('#mat-input-49').fill('40');
    await page6.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
    await page6.getByRole('button', { name: 'Proceed' }).click();
    await page6.waitForTimeout(2000);
    await page6.getByRole('button', { name: '₹ 8979/Yr' }).click();
    await Acceptaccess(page6);
  }
  await page6.waitForTimeout(2000);
  await DocumentUploadHelper.uploadIdentityAndAddressProof(page6, isMobile);
  await page6.locator('#mat-select-value-35').getByText('Title').click();
  await page6.getByText('Mr', { exact: true }).click();
  await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
  await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Supreme');
  await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
  await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('Care@gmail.com');
  await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913067');
  await page6.locator('#mat-input-64').fill('3');
  await page6.locator('#mat-input-65').fill('4');
  await page6.locator('#mat-input-66').fill('600010');
  await page6.waitForTimeout(1000);
  await page6.locator('#mat-select-value-27').getByText('City').click();
  await page6.waitForTimeout(2000);
  await page6.getByText('Chennai').click();
  const checkbox = page6.locator('.mat-checkbox-inner-container').first();
  if (isMobile) await checkbox.scrollIntoViewIfNeeded();
  await page6.locator('.mat-checkbox-inner-container').first().click();
  await page6.waitForTimeout(2000);
  await page6.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
  await page6.getByRole('strong').click();
  await page6.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
  await page6.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');  
  await page6.locator('#cdk-accordion-child-26').getByRole('button', { name: 'Next' }).click();

  await page6.locator('#cdk-accordion-child-21').getByRole('button', { name: 'Next' }).click();
  await page6.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
  await page6.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
  await page6.getByText('MOTHER', { exact: true }).click();
  await page6.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
  await page6.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
  await page6.locator('#cdk-accordion-child-22').getByRole('button', { name: 'Next' }).click();
});
test.setTimeout(90000); });
