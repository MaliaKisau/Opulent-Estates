document.addEventListener("DOMContentLoaded", function() {
    const properties = document.querySelectorAll('.property-card');

    // Price Filter
    document.querySelector('#price-filter').addEventListener('change', function(e) {
        const value = e.target.value;
        
        properties.forEach(property => {
            const price = parseInt(property.querySelector('.property-info p').textContent.replace(/[^\d.-]/g, ''));

            if (value === 'low') {
                if (price < 1000000) {
                    property.style.display = 'block';
                } else {
                    property.style.display = 'none';
                }
            } else if (value === 'high') {
                if (price >= 1000000) {
                    property.style.display = 'block';
                } else {
                    property.style.display = 'none';
                }
            } else {
                property.style.display = 'block';
            }
        });
    });
});
