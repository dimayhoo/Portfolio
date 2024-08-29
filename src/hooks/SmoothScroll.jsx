// qq How to ensure smooth scrolling on links clicking in react?
const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
};

export default handleScroll;