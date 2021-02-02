window.addEventListener('load', () => docs());

const docs = () => {
    const docsText = '<div class="row"><a href="personal/"><span>Personal</span></a><a href="family/"><span>Family</span></a><a href="relatives/"><span>Relatives</span></a></div>';
    document.querySelectorAll('.docs-text').forEach((doc) => doc.innerHTML = docsText);

    personal();
    family();
    relatives();
}
const personal = () => {
    const persText = '<ul class="docs-links"><li><a href="সেই-মহাগ্রন্থটির-প্রারম্ভিকা/"><div class="button ban">সেই মহাগ্রন্থটির প্রারম্ভিকা</div></a></li><li><a href="../"><div class="button">Back</div></a></li></ul>';
    document.querySelectorAll('.personal-links').forEach((link) => link.innerHTML = persText);
}
const family = () => {
    const persText = '<ul class="docs-links"><li><a href="../"><div class="button">Back</div></a></li></ul>';
    document.querySelectorAll('.family-links').forEach((link) => link.innerHTML = persText);
}
const relatives = () => {
    const relText = '<ul class="docs-links"><li><a href="সোলায়মান-তিমি/"><div class="button ban">সোলায়মান (আঃ) ও তিমি</div></a></li><li><a href="../"><div class="button">Back</div></a></li></ul>';
    document.querySelectorAll('.relatives-links').forEach((link) => link.innerHTML = relText);
}
