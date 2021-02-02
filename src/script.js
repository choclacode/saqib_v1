window.addEventListener('load', () => main());

const main = () => {
    quran_text();
    codes_text();
    about_text();
    books_text();

    darkmode();
    dropdown();
}
const darkmode = () => 
    document.querySelectorAll('.dark').forEach((dark) =>
        dark.addEventListener('click', () => document.body.classList.toggle('dark-mode')));
const dropdown = () => {
    const bur = document.getElementsByClassName('dropdown');
    bur[0].addEventListener('click', () => bur[0].parentElement.classList.toggle('open'));
}

const quran_text = () => {
    const quran = '<p>The Noble Quran <br/><br/> A revealation from the Almighty, our Lord, Allah.';
    document.querySelectorAll('.quran-text').forEach((elem) => elem.innerHTML = quran);
}

const codes_text = () => {
    const codes = '<h1>Hello, World!</h1><h3><p>As I like programming very much, I gave the basic \'Hello, World!\' programs down below. <br/> Many programmers start their ' +
    'learning by this simple program that prints \'Hello, World!\' in the console. <br/><br/> Start learning your basics using the following examples and compare between the languages!</p></h3>';
    document.querySelectorAll('.codes-text').forEach((elem) => elem.innerHTML = codes);
}

const about_text = () => {
    const about = 'It\'s me, the chosen one. ' + 
    'I recently created a <em>webpage</em>. I didn\'t know how easy ' +
    'it is to create a <em>webpage</em>.';
    document.querySelectorAll('.aboutme').forEach((elem) => elem.innerHTML = about);
}

const books_text = () => {
    const html = '<ul><li><a href="https://drive.google.com/file/d/1bRwc2_N4j24JYH4J4S_tT5MCLk409AUf/view?usp=sharing" target="_blank">Hifz Quran (15 lines, colored) </a></li> <br/>' +
    '<li><a href="https://drive.google.com/drive/folders/1tRS-4B5ltn7ijIf2L8r8hd-41eJZc1oG?usp=sharing" target="_blank">The Glorious Quran</a></li> <br/>' +
    '<li><a href="https://drive.google.com/drive/folders/17URktdkL0JDdwUGTQirA6eb18BRgRDSu?usp=sharing" target="_blank">Al-Quran (Word by Word)</a></li> <br/>' +
    '<li><a href="https://drive.google.com/drive/folders/1_C3JqB2wIAQEUWNowYYfdHWvs__rtRFh?usp=sharing" target="_blank">Hadith Books (Only available in Bengali)</a></li></ul>';
    document.querySelectorAll('nav.books').forEach((elem) => elem.innerHTML = html);
}
