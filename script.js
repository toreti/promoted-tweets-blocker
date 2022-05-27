const wordsBlacklisted = ['Promoted', 'Promovido'];

const observer = new window.MutationObserver(() => {
  for (const target of document.querySelectorAll('span')) {
    if (wordsBlacklisted.indexOf(target.textContent) > -1) {
      const promotedTweet = target.closest('article').parentElement.parentElement.parentElement.parentElement;
      promotedTweet.style.display = 'none';
    }
  }
});
observer.observe(document, {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true
});
