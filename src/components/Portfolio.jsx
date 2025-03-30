
const Portfolio = () => {
    return (
      <section id="portfolio" style={{ padding: '2rem' }}>
        <h2>My Work</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Example portfolio item */}
          <div style={{ border: '1px solid #ddd', padding: '1rem', flex: '1 0 30%' }}>
            <h3>Project Title</h3>
            <p>A short description of your project.</p>
          </div>
          {/* Add more portfolio items as needed */}
        </div>
      </section>
    );
  };
  
  export default Portfolio;