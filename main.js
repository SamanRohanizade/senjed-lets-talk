import './style.css';

const minimumWaitPr = new Promise(resolve => setTimeout(resolve, 3000));

minimumWaitPr.then(revealContent);

function revealContent() {
  const mask = document.getElementById('mask');
  const maskContent = document.getElementById('mask-content');
  const unRevealedPath = Snap.select('#revealed');
  const revealedPath = Snap.select('#un-revealed');
  const revealedPathPoints = revealedPath.node.getAttribute('d');
  const reveal = () => {
    unRevealedPath.animate({ d: revealedPathPoints }, 4300, mina.backout);
  };
  reveal();

  maskContent.classList.add('slide-up');
  maskContent.addEventListener('transitionend', () => {
    mask.remove();
  });
}
