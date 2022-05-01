const observer = new window.MutationObserver(() => {
  for (const target of document.querySelectorAll('span')) {
    if (target.textContent.includes('Promoted')) {
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
