import { Selector } from 'testcafe';

fixture `My first test for Signin`
    .page `https://vimac20092017.mygo1.com/p/#/access/signin`;

test('My first test', async t => {
    const userNameInput = Selector('input[type=email]');
    const userName = Selector('input[type=email]').value;

    const passwordInput = Selector('input[type=password]');
    const passwordName = Selector('input[type=password]').value;
    await t
            .typeText(userNameInput,'go1.vimac20092017@mailinator.com')
            .expect(userName).eql('go1.vimac20092017@mailinator.com')

            .typeText(passwordInput,'dvs-dv88')
            .expect(passwordName).eql('dvs-dv88')
            .click('button[type=submit]')
});
