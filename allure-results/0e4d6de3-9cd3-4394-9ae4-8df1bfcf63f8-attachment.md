# Test info

- Name: Summary Flow >> Assure
- Location: C:\Users\Tecdata\Desktop\Universal\tests\vizzauniversal.spec.ts:180:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: '₹ 12930/Yr' })

    at C:\Users\Tecdata\Desktop\Universal\tests\vizzauniversal.spec.ts:213:61
```

# Test source

```ts
  113 |       await page1.getByRole('button', { name: 'Proceed' }).click();
  114 |       await page1.waitForTimeout(5000);
  115 |       await page1.getByRole('button', { name: '₹ 13280/Yr' }).click();
  116 |       await Acceptaccess(page1);}
  117 |       else {await page1.waitForTimeout(2000);
  118 |       await page1.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  119 |       await page1.waitForTimeout(1000);
  120 |       await page1.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  121 |       await page1.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  122 |       await page1.waitForTimeout(5000);
  123 |       await page1.getByRole('textbox', { name: 'Name' }).type('Star');
  124 |       await page1.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
  125 |       await page1.getByRole('textbox', { name: 'Mobile Number' }).click();
  126 |       await page1.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  127 |       await page1.getByRole('button', { name: 'Next' }).click();
  128 |       await page1.locator('#mat-input-45').type('25');
  129 |       await page1.locator('#mat-input-47').type('25');
  130 |       await page1.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  131 |       await page1.getByRole('button', { name: 'Proceed' }).click();
  132 |       await page1.getByRole('button', { name: '₹ 13280/Yr' }).click();
  133 |       await Acceptaccess(page1);}
  134 |       if (isMobile) { await page1.evaluate(() => window.scrollTo(0, 0)); }
  135 |     await page1.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  136 |     await page1.getByText('Mr', { exact: true }).click();
  137 |     await page1.getByRole('textbox', { name: 'Last Name' }).type('Comprehensive');
  138 |     await page1.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
  139 |     await page1.getByText('PROFESSIONAL-ENGINEER').click();
  140 |     await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  141 |     await page1.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
  142 |     await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
  143 |     await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Comprehensive');
  144 |     await page1.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
  145 |     await page1.waitForTimeout(2000);
  146 |     await page1.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
  147 |     await page1.getByText('Chennai').click();
  148 |     await page1.waitForTimeout(2000);
  149 |     await page1.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
  150 |     await page1.getByText('Perambur Barracks').click();
  151 |     await FormHelper.fillFormAndUploadFiles(page1);
  152 |     await page1.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
  153 |     await page1.getByRole('textbox', { name: 'Height(cms)' }).type('170');
  154 |     await page1.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
  155 |     await page1.waitForTimeout(2000);
  156 |     await page1.locator('#mat-radio-30').getByText('Yes').click();
  157 |     await page1.waitForTimeout(4000);
  158 |     await page1.getByRole('button', { name: '2.INSURED DETAILS' }).click();
  159 |     await page1.waitForTimeout(2000);
  160 |     await page1.getByRole('textbox', { name: 'Name', exact: true }).type('Test SC');
  161 |     await page1.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
  162 |     await page1.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
  163 |     await page1.getByRole('option', { name: 'Female' }).locator('span').click();
  164 |     await page1.getByRole('textbox', { name: 'Height(cms)' }).type('160');
  165 |     await page1.getByRole('textbox', { name: 'Weight(kgs)' }).type('60');
  166 |     await page1.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
  167 |     await page1.getByText('Housewives').click();
  168 |     await page1.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
  169 |     await page1.getByText('SPOUSE', { exact: true }).click();
  170 |     await page1.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
  171 |     await page1.locator('#mat-input-108').fill('Nominee');
  172 |     await page1.locator('#mat-input-109').fill('25');
  173 |     await page1.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
  174 |     await page1.getByText('Sister').click();
  175 |     await page1.locator('#mat-input-110').fill('100');
  176 |     await page1.waitForTimeout(1000);
  177 |     await page1.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();        }); 
  178 |     test.setTimeout(90000);
  179 |
  180 | test('Assure', async ({ page :page2, isMobile }) => {
  181 |   
  182 |   if (isMobile) {
  183 |     await page2.waitForTimeout(2000);
  184 |     await page2.getByRole('button').filter({ hasText: 'menu' }).click();
  185 |     await page2.locator('a').filter({ hasText: 'Health Insurance' }).click();
  186 |     await page2.waitForTimeout(4000);
  187 |     await page2.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
  188 |     await page2.getByRole('textbox', { name: 'Name' }).type('Star');
  189 |     await page2.getByRole('textbox', { name: 'Mobile Number' }).click();
  190 |     await page2.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  191 |     await page2.getByRole('button', { name: 'Next' }).click();
  192 |     await page2.locator('#mat-input-25').type('25');
  193 |     await page2.locator('#mat-input-27').type('25');
  194 |     await page2.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  195 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  196 |     await page2.getByRole('button', { name: '₹12930 /Yr' }).click();
  197 |     await Acceptaccess(page2);
  198 | } else {
  199 |     await page2.waitForTimeout(2000); 
  200 |     await page2.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  201 |     await page2.waitForTimeout(1000);
  202 |     await page2.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  203 |     await page2.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  204 |     await page2.waitForTimeout(5000);
  205 |     await page2.getByRole('textbox', { name: 'Name' }).type('Star');
  206 |     await page2.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
  207 |     await page2.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  208 |     await page2.getByRole('button', { name: 'Next' }).click();
  209 |     await page2.locator('#mat-input-45').type('25');
  210 |     await page2.locator('#mat-input-47').type('25');
  211 |     await page2.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  212 |     await page2.getByRole('button', { name: 'Proceed' }).click();
> 213 |     await page2.getByRole('button', { name: '₹ 12930/Yr' }).click();
      |                                                             ^ Error: locator.click: Target page, context or browser has been closed
  214 |     await Acceptaccess(page2);
  215 | }
  216 |
  217 | if (isMobile) {
  218 |     await page2.evaluate(() => window.scrollTo(0, 0));
  219 | }
  220 |
  221 | await page2.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  222 | await page2.getByText('Mr', { exact: true }).click();
  223 | await page2.getByRole('textbox', { name: 'Last Name' }).type('Assure');
  224 | await page2.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
  225 | await page2.getByText('PROFESSIONAL-ENGINEER').click();
  226 | await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  227 | await page2.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
  228 | await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
  229 | await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Assure');
  230 | await page2.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
  231 | await page2.waitForTimeout(2000);
  232 | await page2.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
  233 | await page2.getByText('Chennai').click();
  234 | await page2.waitForTimeout(2000);
  235 | await page2.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
  236 | await page2.getByText('Perambur Barracks').click();
  237 | await FormHelper.fillFormAndUploadFiles(page2);
  238 | await page2.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
  239 | await page2.getByRole('textbox', { name: 'Height(cms)' }).type('170');
  240 | await page2.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
  241 | await page2.getByRole('button', { name: '2.INSURED DETAILS' }).click();
  242 | await page2.waitForTimeout(2000);
  243 | await page2.getByRole('textbox', { name: 'Name', exact: true }).type('Test SC');
  244 | await page2.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
  245 | await page2.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
  246 | await page2.getByRole('option', { name: 'Female' }).locator('span').click();
  247 | await page2.getByRole('textbox', { name: 'Height(cms)' }).type('160');
  248 | await page2.getByRole('textbox', { name: 'Weight(kgs)' }).type('60');
  249 | await page2.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
  250 | await page2.getByText('Housewives').click();
  251 | await page2.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
  252 | await page2.getByText('SPOUSE', { exact: true }).click();
  253 | await page2.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
  254 | await page2.locator('#mat-input-108').fill('Nominee');
  255 | await page2.locator('#mat-input-109').fill('25');
  256 | await page2.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
  257 | await page2.getByText('Sister').click();
  258 | await page2.locator('#mat-input-110').fill('100');
  259 | await page2.waitForTimeout(1000);
  260 | await page2.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
  261 |
  262 | test.setTimeout(80000);
  263 | });
  264 |
  265 | test('Womens Care', async ({ page :page3, isMobile }) => {
  266 |
  267 |   if (isMobile) { 
  268 |     await page3.waitForTimeout(2000);
  269 |     await page3.getByRole('button').filter({ hasText: 'menu' }).click();
  270 |     await page3.locator('a').filter({ hasText: 'Health Insurance' }).click();
  271 |     await page3.waitForTimeout(4000);
  272 |     await page3.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
  273 |     await page3.getByRole('textbox', { name: 'Name' }).type('Star');
  274 |     await page3.getByRole('textbox', { name: 'Mobile Number' }).click();
  275 |     await page3.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  276 |     await page3.getByRole('button', { name: 'Next' }).click();
  277 |     await page3.locator('#mat-input-25').type('25');
  278 |     await page3.locator('#mat-input-27').type('25');
  279 |     await page3.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  280 |     await page3.getByRole('button', { name: 'Proceed' }).click();
  281 |     await page3.getByRole('button', { name: '₹ 13847/Yr' }).click();
  282 |     await Acceptaccess(page3);
  283 |   } else {
  284 |     await page3.waitForTimeout(2000); 
  285 |     // await page3.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  286 |     // await page3.waitForTimeout(1000);
  287 |     await page3.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  288 |     await page3.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  289 |     await page3.waitForTimeout(5000);
  290 |     await page3.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
  291 |     await page3.getByRole('textbox', { name: 'Name' }).type('Star');
  292 |     await page3.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  293 |     await page3.getByRole('button', { name: 'Next' }).click();
  294 |     await page3.locator('#mat-input-45').type('25');
  295 |     await page3.locator('#mat-input-47').type('25');
  296 |     await page3.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  297 |     await page3.getByRole('button', { name: 'Proceed' }).click();
  298 |     await page3.getByRole('button', { name: '₹ 13847/Yr' }).click();
  299 |     await Acceptaccess(page3);
  300 |   }
  301 |
  302 |   if (isMobile) {
  303 |     await page3.evaluate(() => window.scrollTo(0, 0));
  304 |   }
  305 |
  306 |   await page3.waitForTimeout(5000);
  307 |   await page3.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  308 |   await page3.getByText('Mr', { exact: true }).click();
  309 |   await page3.getByRole('textbox', { name: 'Last Name' }).type('WomensCare');
  310 |   await page3.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
  311 |   await page3.getByText('PROFESSIONAL-ENGINEER').click();
  312 |   await page3.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  313 |   await page3.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
```