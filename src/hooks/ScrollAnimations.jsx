const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
            }
        });
    },
    {
        threshold: 0.14
    }
)

function useObserverElement(nodeElement) {
  nodeElement.classList.add('slide-in-default');
  observer.observe(nodeElement);
}

export default useObserverElement