import fs from 'fs';

let css = fs.readFileSync('c:/Users/Kevin Simba/SmartPlay/src/index.css', 'utf8');

css = css.replace(/\.phone-screen--onboard \{[\s\S]*?color: var\(--color-void\);/g, match => match.replace('var(--color-void)', 'var(--color-white)'));
css = css.replace(/\.phone-screen__title \{[\s\S]*?color: var\(--color-void\);/g, match => match.replace('var(--color-void)', 'var(--color-white)'));
css = css.replace(/\.phone-screen__btn \{[\s\S]*?background: var\(--color-void\);\s*color: #fff;/g, match => match.replace('var(--color-void)', 'var(--color-white)').replace('#fff', 'var(--color-void)'));
css = css.replace(/\.phone-screen__btn--outline \{[\s\S]*?color: var\(--color-void\);/g, match => match.replace('var(--color-void)', 'var(--color-white)'));

css = css.replace(/\.phone-screen--wallet \{[\s\S]*?color: white;/g, match => match.replace('white', 'var(--color-white)'));
css = css.replace(/\.wallet-card__amount \{[\s\S]*?color: var\(--color-void\);/g, match => match.replace('var(--color-void)', '#fff'));
css = css.replace(/\.phone-screen__logo-mark \{[\s\S]*?background: var\(--color-void\);/g, match => match.replace('var(--color-void)', 'var(--color-white)'));
css = css.replace(/\.phone__notch \{[\s\S]*?background: var\(--color-void\);/g, match => match.replace('var(--color-void)', 'var(--color-white)'));

css = css.replace(/rgba\(10,\s*10,\s*15,\s*0\.85\)/g, 'rgba(252, 252, 252, 0.85)');
css = css.replace(/rgba\(10,\s*10,\s*15,\s*0\.97\)/g, 'rgba(252, 252, 252, 0.97)');
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.06\)/g, 'rgba(10, 10, 15, 0.05)');
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.07\)/g, 'rgba(10, 10, 15, 0.06)');
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.1\)/g, 'rgba(10, 10, 15, 0.08)');
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.3\)/g, 'rgba(10, 10, 15, 0.2)');
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.025\)/g, 'rgba(10, 10, 15, 0.03)');
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.05\)/g, 'rgba(10, 10, 15, 0.05)');

css = css.replace(/\.discover__cap-value \{[\s\S]*?color: #fff;/g, match => match.replace('#fff', 'var(--color-white)'));
css = css.replace(/\.discover__cap-card \{[\s\S]*?background: #111;/g, match => match.replace('#111', 'var(--color-surface)'));
css = css.replace(/\.phone-screen--discover \{[\s\S]*?background: #fff;\s*color: #000;/g, match => match.replace('#fff', 'var(--color-void)').replace('#000', 'var(--color-white)'));

fs.writeFileSync('c:/Users/Kevin Simba/SmartPlay/src/index.css', css);
console.log("CSS updated");
